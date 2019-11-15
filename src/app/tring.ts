import { Subject } from "rxjs";

export class Tring {
  status$: Subject<string> = new Subject();
  message$: Subject<string> = new Subject();
  constructor() {}

  send(message) {
    console.log("got send", message);
    this.message$.next(message);
  }
}
