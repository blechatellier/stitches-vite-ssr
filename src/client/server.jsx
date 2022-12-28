import ReactDOMServer from "react-dom/server";
import { Button } from "./Button";
import { getCssText } from "./stitches.config";

export function render(styles) {
  styles.push(getCssText());
  return ReactDOMServer.renderToString(<Button>Hello World</Button>);
}
