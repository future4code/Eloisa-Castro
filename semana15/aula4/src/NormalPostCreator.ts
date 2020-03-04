import { PostCreator } from "./PostCreator";
import { Post } from "./Post";
import { FileManager } from "./fileManager";
import { ErrorPrinter } from "./ErrorPrinter";


export class NormalPostCreator implements PostCreator {
  private fileManager: FileManager
  private errorPrinter: ErrorPrinter
  protected postList: Post[]

  create(author: string, postText: string) : void {
    if (author === "" || author === undefined || postText === "" || postText === undefined) {
      const errorPrinter = new ErrorPrinter('Insira dados válidos para a criação do post.')
      errorPrinter.onError()
    } else {
      const postData = new Post(author, postText)
      const fileManager = new FileManager('postList.json')
      const savedPosts = fileManager.readFile()
      savedPosts.push(postData)
      fileManager.writeFile(savedPosts)
    }
  }
}