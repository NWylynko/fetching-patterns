import { NextApiRequest, NextApiResponse } from "next"


export default function GetTime(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    timestamp: new Date()
  })
}