import { injectable } from "tsyringe"

@injectable()
export class CanvasService {
  public $canvas: HTMLCanvasElement = document.createElement("canvas")
  public ctx = this.$canvas.getContext("2d") as CanvasRenderingContext2D
  public width = (this.$canvas.width = 420)
  public height = (this.$canvas.height = 420)

  constructor() {
    document.body.appendChild(this.$canvas)
  }
}
