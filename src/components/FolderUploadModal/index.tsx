import { useState, useRef } from "react";
import { Modal } from "antd";
import { CgBrowse } from "react-icons/cg";
import { UploadFolder } from "../../api/http";
import { generateFunctionName } from "../../utils/function_utils";

export default function index(props: any) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const fileRef = useRef<any>();

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      const funcName = generateFunctionName();
      const formData = new FormData();
      formData.append("funcName", funcName);
      formData.append("file", fileRef.current.files[0]);
      await UploadFolder(formData);
      setConfirmLoading(false);
      props.setOpen(false);
    } catch (error) {
      props.setOpen(false);
    }
  };

  const handleCancel = () => {
    props.setOpen(false);
  };

  const openFileBrowser = (e: React.MouseEvent<HTMLDivElement>) => {
    try {
      e.preventDefault();
      if (fileRef.current) fileRef?.current?.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        title="Upload zip file containing code"
        open={props.open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div
          className="flex flex-col items-center justify-center p-5"
          onClick={openFileBrowser}
        >
          <CgBrowse className="hover:cursor-pointer  w-10 h-10" />
          <span className="">Browse</span>
        </div>
        <input type="file" hidden ref={fileRef} />
      </Modal>
    </>
  );
}
