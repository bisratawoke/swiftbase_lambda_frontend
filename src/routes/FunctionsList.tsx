import { useLoaderData } from "react-router-dom";
import FunctionCard from "../components/FunctionCard";
import CreateFunctionCard from "../components/CreateFunctionCard";
export interface FunctionCardProps {
  id: number;
  function_name: string;
  active: boolean;
}

export default function FunctionsList() {
  const functions: any = useLoaderData();

  return (
    <>
      <div className="flex flex-col p-4 gap-4">
        <div className="grid grid-cols-1">
          <span className="text-bold text-gray-800 text-[30px] col-start-1 col-end-5">
            Welcome Home!
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {functions.map((func: FunctionCardProps) => (
            <FunctionCard {...func} />
          ))}
          <CreateFunctionCard />
        </div>
      </div>
    </>
  );
}
