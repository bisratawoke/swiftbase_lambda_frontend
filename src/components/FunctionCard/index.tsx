import { FunctionCardProps } from "../../routes/FunctionsList";
import nodejsLogo from "../../assets/nodejs-logo.png";
import config from "../../config/config";
import { AiOutlineArrowRight, AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function index(props: FunctionCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="border-2 border-gray-200 rounded-xl grid grid-cols-1 bg-white"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/functions/config/${props.function_name}`);
      }}
    >
      <div className="flex justify-between p-2">
        <span className="text-gray-400 ">
          Status :
          <span
            className={`w-100 h-20 border-1 border-white rounded-3xl ${
              props.active == true ? "text-green-500" : " text-red-500"
            }`}
          >
            {props.active == true ? " Active" : " Disabled"}
          </span>
        </span>
        <div className="py-1">
          <AiFillSetting className="text-black-400" />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src={nodejsLogo} className="h-100" />
      </div>
      <div
        className="flex"
        onClick={() =>
          window.open(`${config.baseUrl}/func/exec/${props.function_name}`)
        }
      >
        <button
          className="text-[10px] text-blue-400 px-1"
          onClick={() =>
            window.open(`${config.baseUrl}/func/exec/${props.function_name}`)
          }
        >{`${config.baseUrl}/func/exec/${props.function_name}`}</button>
        <span className="text-blue-400 text-xl px-2 ">
          <AiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
}
