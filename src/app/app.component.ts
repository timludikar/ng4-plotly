import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Rx";
import Plotly from "plotly.js/lib/core";

import { FigureDataService } from "./figure-data.service";
import { Layout } from "./layout";
import { Track } from "./track";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  public data: Array<Track> = [];
  public layout: Layout;

  constructor(private figureDataService: FigureDataService) {}

  ngOnInit() {
    this.figureDataService.data.subscribe(newData => (this.data = newData));
    this.figureDataService.layout.subscribe(
      newLayout => (this.layout = newLayout)
    );
  }

  ngOnDestroy() {}
}
