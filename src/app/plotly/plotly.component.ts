import { Component, OnChanges, Input, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Rx";
import Plotly from "plotly.js/dist/plotly";

import { Layout } from "../layout";
import { Track } from "../track";

@Component({
  selector: "app-plotly",
  templateUrl: "./plotly.component.html",
  styleUrls: ["./plotly.component.css"]
})
export class PlotlyComponent implements OnChanges {
  private dataPoints: Observable<any>;
  private track: Track;
  public options: object = {};

  @Input() data: Array<Track>;
  @Input() layout: Layout;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: any) {
    Plotly.newPlot(this.elementRef.nativeElement, this.data, this.layout);
  }
}
