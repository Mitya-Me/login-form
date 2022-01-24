import { createContext } from "react";

export interface IAuthContext { 
	auth: boolean;
	setAuth?:(val: boolean) => void; 
}

export const AuthContext = createContext<IAuthContext>({auth: false})
