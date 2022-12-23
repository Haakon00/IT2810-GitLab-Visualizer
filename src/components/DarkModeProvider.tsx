import {
	createContext,
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useEffect,
	useState,
} from "react";

export const DarkModeContext = createContext({ darkMode: false, toggleDarkMode: function () {} });

function DarkModeProvider(props: {
	children:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal
		| null
		| undefined;
}) {
	let darkmodepref = window.localStorage.getItem("darkmode");
	if (darkmodepref === null) {
		window.localStorage.setItem("darkmode", "true");
	}
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.body.style.backgroundColor = "white";
			window.localStorage.setItem("darkmode", "true");
		} else {
			document.body.style.backgroundColor = "#121213";
			window.localStorage.setItem("darkmode", "false");
		}
	};

	useEffect(() => {
		if (darkmodepref === "false") {
			toggleDarkMode();
		}
	}, []);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{props.children}
		</DarkModeContext.Provider>
	);
}

export default DarkModeProvider;
