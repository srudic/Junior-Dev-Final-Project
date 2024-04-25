import { createContext, useState } from "react";

const UserContext = createContext({
  isAdminMode: Boolean,
  setIsAdminMode: () => {},
});

export function UserContextProvider({ children }) {
  const [isAdminMode, setIsAdminMode] = useState(true);

  const value = {
    isAdminMode,
    setIsAdminMode,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
