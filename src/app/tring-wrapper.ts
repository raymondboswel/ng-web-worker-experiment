import { Tring } from "./tring";

export class TringWrapper {
  tringJs: Tring;
  constructor() {}

  init(details) {
    this.tringJs = new Tring();
  }

  send(message) {}

  addHandlers() {
    this.tringJs.status$.subscribe(status => {});

    this.tringJs.chatStates$.subscribe(chatState => {});
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./tring.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}