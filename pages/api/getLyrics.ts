// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


export default async (  req: NextApiRequest,  res: NextApiResponse) => {
  const { title, artist } = req.body.data;
  const response = await axios.get<any>(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${process.env.API_KEY}&q_track=${title}&q_artist=${artist}`)
  res.status(200).json({ lyrics : response.data.message.body.lyrics.lyrics_body })
}
