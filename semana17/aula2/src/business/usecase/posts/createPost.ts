import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}


// (i)
/**
 * Os tipo de posts disponíveis são normal e event.
 */

// (ii)
/**
 * A criação de posts verifica qual é o tipo do post a ser criado;
 * caso ele não seja event ou normal, é exibida uma mensagem de erro.
 */

// (iii)
/**
 * Porque não é esperado que seja criado nenhum objeto desta classe; ela serve apenas como modelo.
 * Ela guarda todas as informações referentes ao banco de dados a ser acessado.
 */

// (iv)
/**
 * Cria uma nova instância do CreatePostUC.
 */

 // (v)
 /**
  * É necessário para organizar os dados que serão enviados ao banco de dados.
  */

// (vi)
/**
 * O input são os dados passados pelo endpoint; mais precisamente, vem dos dados passados no body da requisição.
 */

// (vii)
/**
 * Vem do CreatePostUC, que chama a função createPost, passando os dados do post.
 */

// (viii)
/**
 * Porque o usuário pode ou não inserir uma imagem no post.
 * Caso o ternário não existisse, haveria um erro ao incluir os dados no banco de dados,
 * que reberia um undefined caso a imagem não fosse incluída no post.
 */