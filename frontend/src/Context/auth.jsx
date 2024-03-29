import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext); //check error
}

export const AuthContextProvider = ({ children }) => {
    const [userAuth, setAuthUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const res = await fetch("/api/auth/check", {credentials: "include"});
                const data = await res.json();
                if (data.user) {
                    setAuthUser(data.user);
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
        checkUserLoggedIn();
    }, []);
  return (
    <AuthContext.Provider value={{userAuth, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}