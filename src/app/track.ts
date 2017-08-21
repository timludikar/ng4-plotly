export class Track {
  public x: Array<string>;
  public y: Array<string>;
  public z: Array<string>;
  public name: string;
  public type: string;
  public colorscale: Array<any>;
  public showscale: boolean;

  constructor(props) {
    this.x = props.x;
    this.y = props.y;
    this.z = props.z;
    this.name = props.name;
    this.type = "surface";
    this.showscale = false;
  }
}
