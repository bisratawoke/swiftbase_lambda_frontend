// import { useDispatch, useSelector } from "react-redux";
// import { verifyToken } from "../api/http";
// import { login, setUserInfo } from "../context/auth.context";
// export default class AuthService {
//   state: any;
//   token: string | null;
//   dispatch: any;
//   constructor() {
//     this.state = useSelector((state: any) => state.auth);
//     this.dispatch = useDispatch();
//     this.token = window.localStorage.getItem("token");
//   }

//   public async isAuthenticated(): Promise<void> {
//     try {
//       if (this.state.isAuthenticated) {
//         this.dispatch(login());
//       } else if (this.token) {
//         const user = await this.verifyToken(this.token);
//         this.dispatch(login());
//         this.setUserInfo(user);
//       } else throw false;
//     } catch (error) {
//       throw error;
//     }
//   }

//   private async verifyToken(token: string) {
//     try {
//       const result = await verifyToken(token);
//       return result;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }

//   private async setUserInfo(user) {
//     try {
//       this.dispatch(setUserInfo(user));
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
