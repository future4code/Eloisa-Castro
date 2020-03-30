import { Request, Response } from "express";
import { UndoFriendUC } from "../../../business/usecase/users/undoFriend"
import { FriendsDB } from "../../../data/friendsDB";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";

export const undoFriendEndpoint = async (req: Request, res: Response) => {
  try {
    const undoFriendUC = new UndoFriendUC(
      new FriendsDB(),
      new JwtAuthorizer()
    )

    const result = await undoFriendUC.execute({
      token: req.headers.auth as string,
      friendId: req.body.friendId
    })

    res.status(200).send(result)
  } catch(err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    })
  }
}