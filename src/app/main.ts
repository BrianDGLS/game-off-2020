import "reflect-metadata"
import { container } from "tsyringe"

import { StateService } from "./state.service"
import { RenderService } from "./render.service"

class Game {
  private loop: number | undefined

  constructor(
    private readonly stateService: StateService,
    private readonly renderService: RenderService
  ) {}

  public start() {
    this.tick()
  }

  public stop() {
    if (this.loop) {
      cancelAnimationFrame(this.loop)
    }
    this.stateService.playing = false
  }

  public tick() {
    this.stateService.updateState()
    this.renderService.renderFrame()

    if (this.stateService.playing) {
      this.loop = requestAnimationFrame(this.tick.bind(this))
    }
  }
}

~(function () {
  const game = new Game(
    container.resolve(StateService),
    container.resolve(RenderService)
  )

  game.start()
})()
