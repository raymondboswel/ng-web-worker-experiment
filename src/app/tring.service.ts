import { Injectable } from "@angular/core";
import * as comLink from "comlink";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TringService {
  message$ = new BehaviorSubject("");
  instance;
  constructor() {}

  async initWrapper() {
    const TringWorker: any = comLink.wrap(
      new Worker("./tring.worker", { type: "module" })
    );
    this.instance = await new TringWorker();
    this.instance.addMessageHandler(
      comLink.proxy(m => {
        this.message$.next(m);
      })
    );
  }

  async sendMessage() {
    this.instance.send("test message");
  }
}
