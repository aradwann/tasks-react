import { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type AuthContextState = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const AuthContextDefaultValues: AuthContextState = {
  isAuthenticated: false,
  login: (username, password) => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextState>(
  AuthContextDefaultValues
);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(
    AuthContextDefaultValues.isAuthenticated
  );

  const login = (username: string, password: string) => setAuth(true);
  const logout = () => setAuth(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth,
        login,
        logout,
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
