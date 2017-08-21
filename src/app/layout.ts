interface Axis {
  title: string;
}

interface Scene {
  xaxis: Axis;
  yaxis: Axis;
  zaxis: Axis;
}

export class Layout {
  public title: string;
  public showlegend: boolean;
  public autosize: boolean;
  public width: number;
  public height: number;
  public scene: Scene;

  constructor(props) {
    this.title = props.title;
    this.showlegend = props.showlegend;
    this.autosize = props.autosize;
    this.width = props.width;
    this.height = props.height;
    this.scene = props.scene;
  }
}
