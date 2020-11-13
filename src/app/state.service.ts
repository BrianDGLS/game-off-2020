import { injectable } from "tsyringe"

@injectable()
export class StateService {
  public playing = false

  public updateState() {}
}
