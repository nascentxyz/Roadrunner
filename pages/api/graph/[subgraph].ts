import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { dispatch } from "../../../lib";

const Graph = (req: NextApiRequest, res: NextApiResponse) => {
  const { subgraph }: any = req.query;
  dispatch(subgraph)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

export default Graph;
