import { useContext, createContext } from "react";
import { AuthContext } from "./AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}
