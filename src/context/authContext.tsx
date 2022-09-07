import { createContext, FC, useState } from "react";
import API from "../api/api";

interface Props {
  children: React.ReactNode;
}

interface User {
  username: string;
}

type AuthContextState = {
  isAuthenticated: boolean;
  token: string;
  errorMsg: string;
  user: User | undefined;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const AuthContextDefaultValues: AuthContextState = {
  isAuthenticated: localStorage.getItem("jwt") ? true : false,
  token: "",
  errorMsg: "",
  user: undefined,
  login: (username, password) => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextState>(
  AuthContextDefaultValues
);

export const AuthProvider: FC<Props> = ({ children }) => {
  ////////// state hooks /////////////////////
  const [auth, setAuth] = useState<boolean>(
    AuthContextDefaultValues.isAuthenticated
  );
  const [token, setToken] = useState<string>(AuthContextDefaultValues.token);
  const [errorMsg, setErrorMsg] = useState<string>(
    AuthContextDefaultValues.errorMsg
  );
  const [user, setUser] = useState<User | undefined>(
    AuthContextDefaultValues.user
  );

  const login = async (username: string, password: string) => {
    try {
      const response = await API.post("auth/login", { username, password });
      const accessToken = response.data.access_token;
      localStorage.setItem("jwt", accessToken);
      API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setToken(accessToken);
      setErrorMsg("");
      setAuth(true);
      const userResponse = await API.get<User>("users/me");
      const user = userResponse.data;
      console.log({ user });
      if (user) {
        setUser(user);
      }
    } catch (err: any) {
      setErrorMsg(err.response.data.message);
    }
  };

  const logout = () => {
    setAuth(false);
    setToken("");
    API.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: auth,
        login,
        logout,
        user,
        errorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuthContext: AuthContextState = () => {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth can only be used inside AuthProvider");
//   }
//   return context;
// };
