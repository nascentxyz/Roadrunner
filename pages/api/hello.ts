import type { NextApiRequest, NextApiResponse } from "next";

const Hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "Nascent Engineering" });
};

export default Hello;
