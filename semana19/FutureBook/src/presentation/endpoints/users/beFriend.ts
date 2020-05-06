import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizer";
import { FriendsDB } from "../../../data/friendsDB";
import { BeFriendUC } from "../../../business/usecase/users/beFriend";

export const beFriendEndpoint = async (req: Request, res: Response) => {
  try {
    const beFriendUC = new BeFriendUC(
      new FriendsDB(),
      new JwtAuthorizer
    )
    
    const result = await beFriendUC.execute({
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