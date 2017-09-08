
export class Point {
  constructor(private x?: number, private y?: number) {
  }

  draw(): void {
    console.log("X: " + this.x + ", Y: " + this.y);
  }
}