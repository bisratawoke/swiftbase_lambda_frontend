import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import config from "../config/config";
import { message } from "antd";
import { uploadFunction } from "../api/http";
export default function ConfigureFunction() {
  const data: any = useLoaderData();
  const [textAreaValue, setTextAreaValue] = useState(data.function);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "message";
  const deployBtnHandler = async (e: React.MouseEvent) => {
    try {
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      e.preventDefault();
      const payload = {
        function_name: data.function_name,
        function: textAreaValue,
      };
      await uploadFunction(payload);
      messageApi.open({
        key,
        type: "success",
        content: "Function updated Succesfully",
        duration: 2,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div className="grid grid-cols-12">
      {contextHolder}
      <div className="col-start-1 col-end-13 border-b-2 border-gray-200 py-2 flex  items-center gap-2">
        Visit function at :
        <span
          className="text-blue-300 hover:cursor-pointer"
          onClick={() => {
            window.open(`${config.baseUrl}/func/exec/${data.function_name}`);
          }}
        >{`${config.baseUrl}/func/exec/${data.function_name}`}</span>
      </div>
      <div className="col-start-1 col-end-13 border-b-2 border-gray-200 ">
        <div className="my-4">
          <span className="text-gray-800 text-lg">Write your function </span>
        </div>

        <div>
          <textarea
            className="w-700 h-500 border-2 border-gray-300 my-2"
            value={textAreaValue}
            onChange={(e: any) => setTextAreaValue(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-start-1 col-end-13 my-2">
        <button
          className="p-2 border-2 rounded-xl bg-orange-500 text-white hover:bg-green-400"
          onClick={deployBtnHandler}
        >
          Upload Function
        </button>
      </div>
    </div>
  );
}
