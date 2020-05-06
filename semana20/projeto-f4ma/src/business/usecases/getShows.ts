import { ShowGateway } from "../gateways/show";
import { toShowWeekDay } from "../entities/show";

export class GetShowsUC {
  constructor(
    private showGateway: ShowGateway
  ) {}

  public async execute(input: GetShowsUCInput): Promise<GetShowsUCOutput> {
    const weekDay = toShowWeekDay(input.day)

    const scheduledShows = await this.showGateway.getShowsByDay(weekDay)

    if(!scheduledShows) {
      throw new Error ("There are no scheduled shows")
    }
    
    const result = scheduledShows.map((show) =>{
      return {
        band: show.getBand().getName(),
        genre: show.getBand().getMusicGenre()
      }
    })
    return {
      result
    }
  }
}

interface GetShowsUCInput {
  day: string
}

interface GetShowsUCOutput {
  result: any[]
}