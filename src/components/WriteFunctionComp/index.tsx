import { message } from "antd";
import { useState } from "react";
import { uploadFunction } from "../../api/http";
import { useNavigate } from "react-router-dom";

export interface functionProp {
  function_name?: string;
  initalValue: string;
}

export default function index({ function_name, initalValue }: functionProp) {
  const [textAreaValue, setTextAreaValue] = useState(initalValue);
  const navigate = useNavigate();
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
        function_name,
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

  return (
    <div className="grid grid-cols-12">
      {contextHolder}
      <div className="col-start-3 col-end-13 border-b-2 border-gray-200 ">
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
