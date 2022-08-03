// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user";
import Conn from "../../../utils/conn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await Conn();

    const { username, password } = req.body;

    const IS_USER = await User.findOne({
      username: username,
      password: password,
    });
    if (!IS_USER) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: IS_USER,
    });

    // const newUser = new User({
    //   username: username,
    //   password: password,
    // });

    // await newUser
    //   .save()
    //   .then((result: { result: any }) => {
    //     return res.status(200).json(result);
    //   })
    //   .catch((err: { err: any }) => {
    //     return res.status(400).json(err);
    //   });
  }
}
