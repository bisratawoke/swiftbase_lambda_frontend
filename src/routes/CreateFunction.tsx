import { useState } from "react";
import { uploadFunction } from "../api/http";
import RuntimeSelector from "../components/RuntimeSelector";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import FolderUploadModal from "../components/FolderUploadModal";
export default function CreateFunction() {
  const navigate = useNavigate();
  const [textAreaValue, setTextAreaValue] = useState(
    "module.exports = (req,res) =>res.json('hello world')"
  );
  const [open, setOpen] = useState<boolean>(false);
  const folderUploadModalProps = {
    open,
    setOpen,
  };
  const [messageApi, contextHolder] = message.useMessage();
  const key = "messageKey";
  const deployBtnHandler = async (e) => {
    try {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      e.preventDefault();
      const payload = {
        function_name: generateFunctionName(),
        function: textAreaValue,
      };
      const response = await uploadFunction(payload);
      console.log(response);
      messageApi.open({
        key,
        type: "success",
        content: "Function created succesfully",
        duration: 2,
      });
      setTimeout(() => {
        navigate(`/functions/config/${response.function_name}`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const generateFunctionName = () => {
    return Math.random().toString().split(".")[1];
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 p-5">
      {contextHolder}
      <div className="col-start-3 col-end-13 border-b-2 border-gray-200 py-2 flex  items-center gap-2">
        <span className="text-gray-400 text-3xl">Create a function</span>
      </div>
      <div className="col-start-3 col-end-13 border-b-2 border-gray-200">
        <RuntimeSelector />
      </div>
      <div className="col-start-3 col-end-13 border-b-2 border-gray-200 ">
        <div className="my-4">
          <span className="text-gray-800 text-lg">Write your function </span> or{" "}
          <button
            className="bg-blue-400 border-2 border-white rounded-xl text-white p-2 px-5 hover:bg-blue-300"
            onClick={(e) => {
              e.preventDefault();
              showModal();
            }}
          >
            Upload
          </button>
          <FolderUploadModal {...folderUploadModalProps} />
        </div>

        <div>
          <textarea
            className="w-700 h-500 border-2 border-gray-300 my-2"
            value={textAreaValue}
            onChange={(e: any) => setTextAreaValue(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-start-3 col-end-13 my-2">
        <button
          className="p-2 border-2 rounded-xl bg-orange-500 text-white hover:bg-green-400"
          onClick={deployBtnHandler}
        >
          Create Function
        </button>
      </div>
    </div>
  );
}

/**
 * import React from 'react';
import { Button, message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};

export default App;
 * 
 * 
 */
