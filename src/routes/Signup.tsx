import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/http";
// import { useDispatch } from "react-redux";
export default function Signup() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();
  const [firstNameValue, setFirstNameValue] = useState<string>();
  const [lastNameValue, setLastNameValue] = useState<string>();
  const [err, setError] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(
    null
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const payload = {
        email: emailValue,
        password: passwordValue,
        firstName: firstNameValue,
        lastName: lastNameValue,
      };
      await register(payload);
      setShowSuccessMessage("Account Successfully Created");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="grid grid-cols-1 p-2 lg:grid-cols-12 ">
      <div className="lg:col-start-5 lg:col-end-9  lg:p-10 p-3 my-20 flex flex-col gap-3 border rounded-xl border-gray-300 justify-center bg-white">
        <span className="font-bold text-xl">Create an account</span>
        <div className="flex flex-cols gap-2">
          <span className="font-normal text-md text-gray-400">
            Already have an account?{" "}
          </span>
          <a
            href=""
            className="text-blue-600"
            onClick={() => navigate("/signin")}
          >
            {" "}
            Signin
          </a>
        </div>
        <form className="flex flex-col gap-5 my-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2 justify-self: flex-start ">
            <input
              type="text"
              className="border-2 rounded-xl "
              placeholder="please enter First name"
              required
              onChange={(e) => {
                setFirstNameValue(e.target.value);
              }}
            />
            <input
              type="text"
              className="border-2 rounded-xl py-2"
              placeholder="please enter Last name"
              required
              onChange={(e) => {
                setLastNameValue(e.target.value);
              }}
            />
          </div>
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
          {showSuccessMessage ? (
            <span className="text-red-green">{showSuccessMessage}</span>
          ) : (
            <></>
          )}
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
