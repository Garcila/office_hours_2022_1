import React, { createContext, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const initialState = { user: "Bob" };

	return (
		<UserContext.Provider value={initialState}>{children}</UserContext.Provider>
	);
};
