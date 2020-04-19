import { Videos } from "../entities/videos";

export interface VideoGateway {
  saveVideo(video: Videos): Promise<void>
  getVideosByUser(id: string): Promise<Videos[] | undefined>
  changeVideoInformations(id: string, title: string, description: string): Promise<void>
  getAllVideos(): Promise<Videos[]>
  getVideoDetails(id: string): Promise<any>
}