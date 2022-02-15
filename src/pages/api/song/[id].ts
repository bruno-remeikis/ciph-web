import { NextApiRequest, NextApiResponse } from "next";

import { execute } from '../../../config/database/mysql';

export default async (req: NextApiRequest, res: NextApiResponse) =>
{
	try {
		const { id } = req.query;

		switch(req.method)
		{
			case 'GET':
				const query = `
					select
						song.id,
						song.name as song_name,
						artist.name as artist_name
					from song
					inner join song_artist sa
						on sa.song_id = song.id
					inner join artist
						on artist.id = sa.artist_id
                    where song.id = ?
				`;

				const result: any = await execute(query, [id]);

                if(result.length > 0)
				    res.json(result[0]);
                else
                    res.status(404).json({ message: 'Song not found' });
				break;

			default:
				res.status(405).json({ message: 'Unsupported method' });
		}
	}
	catch(err)
	{
		res.status(500).json({ message: err.message });
	}
}