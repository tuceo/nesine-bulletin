import { createRoot } from "react-dom/client";
import Bulletin from "./screens/Bulletin";
import "./style.scss"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Bulletin />);
