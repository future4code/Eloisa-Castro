import { BaseDatabase } from "./baseDatabase";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video, VideoWithUser } from "../business/entities/video";

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

  public async getAllVideos(): Promise<Video[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.videosTableName}
    `)

    return result[0].map((res: any) => this.mapDbVideoToVideo(res)!);
  }

  public async getVideoDetails(id: string): Promise<VideoWithUser> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.videosTableName} v
      JOIN ${this.usersTableName} u
      ON v.user_id = u.id
      WHERE user_id = '${id}'
    `)
    //verificar tratamento do retorno
    return result[0][0];
  }

  public async deleteVideo(id: string): Promise<void> {
    await this.connection.raw(`
      DELETE FROM ${this.videosTableName}
      WHERE id = '${id}'
    `)
  }
}