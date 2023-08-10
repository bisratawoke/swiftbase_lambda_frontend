import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <Link
      to="/functions/create"
      className="border-2 border-gray-200 rounded-xl flex flex-col justify-center items-center bg-white animate-pulse"
    >
      <AiOutlinePlus />
      <div className="text-green-300 text-sm"> New </div>
    </Link>
  );
}
