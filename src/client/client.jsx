import ReactDOM from "react-dom/client";
import { Button } from "./Button";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <Button>Hello World</Button>
);
