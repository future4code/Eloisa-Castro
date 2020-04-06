import { v4 } from "uuid";
import { ShowGateway } from "../gateways/show";
import { toShowWeekDay, Show } from "../entities/show";

export class AddShowUC {
  constructor(
    private showGateway: ShowGateway
  ) {}

  public async execute(input: AddShowUCInput): Promise<AddShowUCOutput> {
    const weekDay = toShowWeekDay(input.day)

    if(isNaN(input.startTime) || isNaN(input.endTime)) {
      throw new Error("Invalid parameters")
    }

    if(!Number.isInteger(input.startTime) || !Number.isInteger(input.endTime)) {
      throw new Error("Invalid time")
    }

    if(input.startTime < 8 || input.endTime > 23) {
      throw new Error("Shows must be scheduled between 8h and 23h")
    }

    const scheduledShows = await this.showGateway.getShowWithBandByTimeRange(input.startTime, input.endTime, weekDay)

    if(scheduledShows.length > 0) {
      throw new Error("There are already shows scheduled for this time")
    }

    const id = v4()

    const show = new Show(id, weekDay, input.startTime, input.endTime, input.bandId)

    await this.showGateway.createShow(show)

    return {
      message: "Show scheduled successfully"
    }
  }
}

interface AddShowUCInput {
  bandId: string,
  day: string,
  startTime: number,
  endTime: number
}

interface AddShowUCOutput {
  message: string
}