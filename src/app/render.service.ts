import { injectable } from "tsyringe"

import { CanvasService } from "./canvas.service"

@injectable()
export class RenderService {
  constructor(private readonly canvasService: CanvasService) {}

  public renderFrame() {
    this.renderBackground()
  }

  public renderBackground() {
    const { ctx, width, height } = this.canvasService
    ctx.fillRect(0, 0, width, height)
  }
}
