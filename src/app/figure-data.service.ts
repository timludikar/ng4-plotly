import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs/Rx";
import Plotly from "plotly.js/lib/core";

import { Layout } from "./layout";

@Injectable()
export class FigureDataService {
  private _json: Subject<any> = new Subject();
  public readonly getData: Observable<any> = this._json.asObservable();
  public readonly layout: Observable<Layout>;
  public readonly data: any;
  constructor() {
    Plotly.d3.json(
      "https://raw.githubusercontent.com/plotly/datasets/master/3d-ribbon.json",
      figure => this._json.next(figure)
    );

    this.layout = this.getData.pluck("layout");
    this.data = this.getData.pluck("data");
  }
}
