import { Component } from "@angular/core";
import { TringService } from "./tring.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-web-worker-experiment";
  message;
  constructor(public tringService: TringService) {
    this.tringService.message$.subscribe(m => (this.message = m));
  }

  initTringWrapper() {
    this.tringService.initWrapper();
  }

  sendMessageToTring() {
    this.tringService.sendMessage();
  }
}
