import { createContext, useState } from "react";

const TokenContext = createContext();

function TokenProvider(props) {
	const token = localStorage.getItem("token");
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<TokenContext.Provider
			value={{
				token,
				loggedIn,
				setLoggedIn,
			}}
		>
			{props.children}
		</TokenContext.Provider>
	);
}

export { TokenContext, TokenProvider };
