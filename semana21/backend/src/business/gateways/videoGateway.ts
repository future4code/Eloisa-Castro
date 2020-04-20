import { Video, VideoWithUser } from "../entities/video";

export interface VideoGateway {
  saveVideo(video: Video): Promise<void>
  getVideosByUser(id: string): Promise<Video[]>
  changeVideoInformations(id: string, title: string, description: string): Promise<void>
  getAllVideos(): Promise<Video[]>
  getVideoDetails(id: string): Promise<VideoWithUser | undefined>
  deleteVideo(id: string): Promise<void>
}