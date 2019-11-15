import { Injectable } from "@angular/core";
import * as comLink from "comlink";

@Injectable({
  providedIn: "root"
})
export class TringService {
  chatStates = [];
  instance;
  constructor() {}

  async initWrapper() {
    const TringWorker: any = comLink.wrap(new Worker("./tring.worker"));
    this.instance = await new TringWorker();
  }

  async sendMessage() {
    this.instance.send("test message");
  }
}
