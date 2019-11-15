import { Tring } from "./tring";

export class TringWrapper {
  tringJs: Tring;
  constructor() {
    this.init({});
  }

  init(details) {
    this.tringJs = new Tring();
  }

  send(message) {
    this.tringJs.send("test message");
  }

  addMessageHandler(callback) {
    this.tringJs.message$.subscribe(m => {
      console.log("Message received", m);
      callback(m);
    });
  }

  addHandlers() {
    this.tringJs.status$.subscribe(status => {});
  }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker('./tring.worker', { type: 'module' });
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
