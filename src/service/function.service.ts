// import { fetchFunctions } from "../api/http";
// import httpError from "../config/errorHandler";
// import AuthService from "./auth.service";
// import type AuthServiceType from "./auth.service";
// import { httpStatusCode } from "../config/errorHandler";

// export default class FunctionLoader {
//   authService: AuthServiceType;
//   constructor() {
//     this.authService = new AuthService();
//   }

//   public async isAuthError(err: httpError): Promise<boolean> {
//     try {
//       if (err.httpStatusCode === httpStatusCode.FORBIDEN) return true;
//       return false;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   public async loadFunctions(): Promise<any> {
//     try {
//       const functions = await fetchFunctions();
//       return { functions };
//     } catch (error) {
//       const isAuthError = this.isAuthError(error);
//       if (isAuthError) {
//         // await this.authService.isAuthenticated();
//       } else
//         throw new httpError(
//           "Please try again",
//           httpStatusCode.INTERNAL_SERVER_ERROR
//         );
//     }
//   }
// }
