/// <reference lib="webworker" />

import * as comLink from "comlink";
import { TringWrapper } from "./tring-wrapper";

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });

comLink.expose(TringWrapper);
