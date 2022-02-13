import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
	try
	{
		const { method } = req;

		switch(method)
		{
			case 'GET':
				res.status(200).json({ name: 'John Doe' });
				break;
			default:
				res.status(405).json({ message: 'Unsupported method' });
		}
	}
	catch(err)
	{
		res.status(500).json({ statusCode: 500, message: err.message });
	}
}