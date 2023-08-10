import { useState } from "react";
import nodejs from "../../assets/nodejs-logo.png";
export const runtimeType = {
  NODEJS: "Nodejs",
  PYTHON: "Python",
};
export default function index() {
  const runtimes = [
    {
      name: runtimeType.NODEJS,
      description:
        "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
      img: nodejs,
    },
  ];
  const [description, setDescription] = useState<string>(
    runtimes[0].description
  );
  return (
    <div className="my-4">
      <span className="text-gray-800 text-lg">Pick your runtime </span>
      <div className="border-1 border-gray-400 grid grid-cols-4 py-5 gap-5">
        {runtimes.map((runtime) => (
          <div
            className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-xl p-2 hover:cursor-pointer"
            onClick={() => setDescription(runtime.description)}
          >
            <span className="text-lg text-gray-400">{runtime.name}</span>
            <img src={runtime.img} className="w-[50px] h-[50px]" />
          </div>
        ))}
      </div>
      <div className="border-1 border-gray-400 pr-[500px]">{description}</div>
    </div>
  );
}
