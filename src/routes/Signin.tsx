import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/http";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../context/auth.context";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();
  const [err, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const payload = {
        email: emailValue,
        password: passwordValue,
      };
      const result = await login(payload);
      window.localStorage.setItem("token", result.token);
      dispatch(loginAction());
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="grid grid-cols-1 p-2 lg:grid-cols-12">
      <div className="lg:col-start-5 lg:col-end-9  lg:p-10 p-3 my-20 flex flex-col gap-3 border rounded-xl border-gray-300 justify-center bg-white">
        <span className="font-bold text-xl">Signin to dever</span>
        <div className="flex flex-cols gap-2">
          <span className="font-normal text-md text-gray-400">
            New to dever?{" "}
          </span>
          <a
            href=""
            className="text-blue-600"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Register
          </a>
        </div>
        <form className="flex flex-col gap-5 my-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 rounded-xl p-2"
            placeholder="please enter email address"
            required
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-2 rounded-xl p-2"
            placeholder="please enter password"
            required
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
          />
          {err ? <span className="text-red-500">{err}</span> : <></>}
          <input
            type="submit"
            className="border-1 rounded-xl border-white bg-green-500 text-white p-2"
            value="Signin"
          />
        </form>
      </div>
    </div>
  );
}
