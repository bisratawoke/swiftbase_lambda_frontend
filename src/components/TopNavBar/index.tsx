import { useNavigate } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
export default function index() {
  const navigate = useNavigate();
  return (
    <div className="h-10 bg-white grid grid-cols-12 px-5 shadow-lg mb-10">
      <div
        className="flex gap-2 justify-center items-center hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <GiPaperWindmill className="text-orange-400" />
        <span className="text-orange-400 text-xl"> Swiftbase</span>
      </div>
    </div>
  );
}
