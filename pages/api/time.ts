import { NextApiRequest, NextApiResponse } from "next"


export default function GetTime(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .json({
    type: req.query.type,
    timestamp: new Date()
  })
}