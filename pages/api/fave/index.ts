// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Movie from "../../../models/movie";
import Conn from "../../../utils/conn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await Conn();

    const GET_ALL_FAVES = await Movie.find({}).where("fave").equals(true);
    if (!GET_ALL_FAVES) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: GET_ALL_FAVES,
    });
  }

  if (req.method === "POST") {
    await Conn();

    const { id } = req.body;

    const GET_MOVIE = await Movie.findOne({ _id: id });
    if (!GET_MOVIE) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    if (GET_MOVIE.fave) {
      await Movie.findOneAndUpdate(
        { _id: GET_MOVIE._id },
        { fave: false },
        { new: true }
      );
    }

    if (!GET_MOVIE.fave) {
      await Movie.findOneAndUpdate(
        { _id: GET_MOVIE._id },
        { fave: true },
        { new: true }
      );
    }

    const GET_UPDATED_DATA = await Movie.find({});

    return res.status(200).json({
      success: true,
      data: GET_UPDATED_DATA,
    });
  }
}
