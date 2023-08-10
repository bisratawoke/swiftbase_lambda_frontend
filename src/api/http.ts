import config from "../config/config";
import httpError, { httpStatusCode } from "../config/errorHandler";

export async function login(payload: { email?: string; password?: string }) {
  try {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(`${config.baseUrl}/user/login`, opts);
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else if (response.status === 404) {
      throw new httpError("Invalid credentials", httpStatusCode.NOT_FOUND);
    } else
      throw new httpError(
        "Unknown error, please try again",
        httpStatusCode.INTERNAL_SERVER_ERROR
      );
  } catch (error) {
    throw error;
  }
}

export async function register(payload: {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}) {
  try {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const result = await fetch(`${config.baseUrl}/user/register`, opts);
    if (result.status == 200) {
      return result.json();
    } else if (result.status == 403) {
      throw new httpError(
        "Email is already registered",
        httpStatusCode.FORBIDEN
      );
    } else
      throw new httpError(
        "Something went wrong please try again",
        httpStatusCode.INTERNAL_SERVER_ERROR
      );
  } catch (error) {
    throw error;
  }
}

export async function verifyToken(token: string): Promise<any> {
  try {
    const opts = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ token }),
    };
    const response = await fetch(`${config.baseUrl}/user/verify/token`, opts);
    if (response.status == 200) {
      return response.json();
    } else if (response.status == 403)
      throw new httpError("Invalid token", httpStatusCode.FORBIDEN);
    else
      throw new httpError("Server issue", httpStatusCode.INTERNAL_SERVER_ERROR);
  } catch (error) {
    throw error;
  }
}

export async function fetchFunctions() {
  try {
    const opts = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${config.baseUrl}/func`, opts);

    if (response.status == 200) {
      return response.json();
    } else if (response.status == 403)
      throw new httpError("Invalid token", httpStatusCode.FORBIDEN);
    else
      throw new httpError("Server issue", httpStatusCode.INTERNAL_SERVER_ERROR);
  } catch (error) {
    throw error;
  }
}
export async function fetchFunction(function_name: string) {
  try {
    const opts = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `${config.baseUrl}/func/${function_name}`,
      opts
    );

    if (response.status == 200) {
      return response.json();
    } else if (response.status == 403)
      throw new httpError("Invalid token", httpStatusCode.FORBIDEN);
    else
      throw new httpError("Server issue", httpStatusCode.INTERNAL_SERVER_ERROR);
  } catch (error) {
    throw error;
  }
}

export async function uploadFunction(payload: {
  function_name: string;
  function: string;
}) {
  try {
    const opts = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    };
    console.log(JSON.stringify(payload));
    const response = await fetch(`${config.baseUrl}/func/upload`, opts);
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function UploadFolder(data: FormData) {
  try {
    const opts = {
      headers: {
        authorization: `${window.localStorage.getItem("token")}`,
      },
      body: data,
      method: "POST",
    };

    const response = await fetch(`${config.baseUrl}/func/zip/upload`, opts);
    return response.json();
  } catch (error) {
    throw error;
  }
}
