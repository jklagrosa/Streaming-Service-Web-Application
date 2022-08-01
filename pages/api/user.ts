// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Movie from "../../models/movie";
import Conn from "../../utils/conn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await Conn();

    const body = req.body;

    const newMovie = new Movie(body);

    await newMovie
      .save()
      .then((result: { result: any }) => res.json(result))
      .catch((err: { err: any }) => res.json(err));
  }
}
