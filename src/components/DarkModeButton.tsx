import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

function DarkModeButton() {
  const darkMode = useContext(DarkModeContext);

  let darkmodepref: boolean;
  if (window.localStorage.getItem("darkmode") === "true") {
    darkmodepref = true;
  } else {
    darkmodepref = false;
  }
  return (
    <div className="form-control flex-row justify-end mr-5 pt-2">
      <button
        onClick={() => {
          document.getElementById("darkmode")!.click();
        }}
        className={darkMode.darkMode ? "text-white" : "text-black"}
      >
        Dark Mode&nbsp;
      </button>
      {!darkmodepref ? (
        <input
          type="checkbox"
          id="darkmode"
          className="toggle"
          onChange={darkMode.toggleDarkMode}
          defaultChecked
        />
      ) : (
        <input
          type="checkbox"
          id="darkmode"
          className="toggle"
          onChange={darkMode.toggleDarkMode}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
