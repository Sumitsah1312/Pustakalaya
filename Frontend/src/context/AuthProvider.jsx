import React, { useState,useContext,createContext } from 'react'

const AuthContext=createContext();
export default function AuthProvider({children}) {
  const initialAuthUser=localStorage.getItem("Users");
  console.log(initialAuthUser);
  const [authUser,setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth=()=>useContext(AuthContext)
