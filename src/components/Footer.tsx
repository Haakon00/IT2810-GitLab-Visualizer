import React from "react";
import { DarkModeContext } from "./DarkModeProvider";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={
          this.context.darkMode
            ? "footer footer-center bg-gray-800 text-gray-400 h-[5vh]"
            : "footer footer-center bg-gray-300 text-black h-[5vh]"
        }
      >
        <div className="p-2">
          <p>Laget med ❤️ av gruppe 57</p>
        </div>
      </footer>
    );
  }
  static contextType = DarkModeContext;
  context!: React.ContextType<typeof DarkModeContext>;
}

Footer.contextType = DarkModeContext;

export default Footer;
