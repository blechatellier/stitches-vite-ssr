import ReactDOMServer from "react-dom/server";
import { Button } from "./Button";
import { getCssText } from "./stitches.config";

export function render() {
  return ReactDOMServer.renderToString(<Button>Hello World</Button>);
}

export function renderStyle() {
  return ReactDOMServer.renderToString(
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
}
