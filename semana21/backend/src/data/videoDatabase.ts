import { BaseDatabase } from "./baseDatabase";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video, VideoWithUser, VideoBasicInfo } from "../business/entities/video";
import { UserBasicInfo } from "../business/entities/user";

export class VideoDatabase extends BaseDatabase implements VideoGateway {
  private videosTableName = "videos_futuretube";
  private usersTableName = "users_futuretube";

  private mapDbVideoToVideo(input?: any): Video | undefined {
    return (
      input &&
      new Video(
        input.id,
        input.title,
        input.description,
        input.video,
        input.user_id
      )
    );
  }

  private mapDbVideoToVideoBasicInfo(input?: any): VideoBasicInfo | undefined {
    return (
      input &&
      new VideoBasicInfo(
        input.id,
        input.title,
        input.video
      )
    );
  }

  public async saveVideo(video: Video): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.videosTableName} (id, title, description, video, user_id)
      VALUES (
        '${video.getId()}',
        '${video.getTitle()}',
        '${video.getDescription()}',
        '${video.getVideo()}',
        '${video.getUserId()}'
      )
    `)
  }

  public async getVideosByUser(id: string): Promise<Video[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.videosTableName}
      WHERE user_id = '${id}'
    `)

    return result[0].map((res: any) => this.mapDbVideoToVideo(res)!);
  }

  public async changeVideoInformations(id: string, title: string, description: string): Promise<void> {
    await this.connection.raw(`
      UPDATE ${this.videosTableName}
      SET title = '${title}', description = '${description}'
      WHERE id = '${id}'
    `)
  }

  public async getAllVideos(limit: number, offset: number): Promise<VideoBasicInfo[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.videosTableName}
      LIMIT ${limit} OFFSET ${offset}
    `)
    return result[0].map((res: any) => this.mapDbVideoToVideoBasicInfo(res)!);
  }

  public async getVideoDetails(id: string): Promise<VideoWithUser | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.videosTableName} v
      JOIN ${this.usersTableName} u
      ON v.user_id = u.id
      WHERE v.id = '${id}'
    `)

    if (!result[0][0]) {
      return undefined;
    }

    const user = new UserBasicInfo(
      result[0][0].user_id,
      result[0][0].name,
      result[0][0].photo,
    );

    return (
      result[0][0] &&
      new VideoWithUser(
        id,
        result[0][0].title,
        result[0][0].description,
        result[0][0].video,
        user,
      )
    );
  }

  public async deleteVideo(id: string): Promise<void> {
    await this.connection.raw(`
      DELETE FROM ${this.videosTableName}
      WHERE id = '${id}'
    `)
  }
}