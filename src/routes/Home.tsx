import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TopNavBar from "../components/TopNavBar";
import { verifyToken } from "../api/http";
import { login } from "../context/auth.context";
import HttpError, { httpStatusCode } from "../config/errorHandler";

export default function Home() {
  const auth = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticate = async () => {
    try {
      if (!auth.isAuthenticated) {
        const response = await verifyToken(
          window.localStorage.getItem("token")
        );
        console.log(response);
        return response;
      }
      return;
    } catch (error) {
      throw new HttpError("Unauthenticated", httpStatusCode.FORBIDEN);
      // throw error;
    }
  };
  useEffect(() => {
    authenticate()
      .then(() => {
        console.log("here");

        dispatch(login());
      })
      .catch((error) => {
        console.log(error);
        navigate("/signin");
      });
  }, []);

  return (
    <div>
      {auth.isAuthenticated == false ? (
        <>spinner</>
      ) : (
        <div>
          <TopNavBar />

          <div className="flex justify-center flex-col items-center">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
/**
 *
 *
 */
