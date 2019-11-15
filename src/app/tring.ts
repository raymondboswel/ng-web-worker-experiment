import { Subject } from "rxjs";

export class Tring {
  status$: Subject<string> = new Subject();
  chatStates$: Subject<string> = new Subject();
  constructor() {}

  send(message) {
    console.log("got send", JSON.stringify(message));
  }
}
