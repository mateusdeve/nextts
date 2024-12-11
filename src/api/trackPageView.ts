// pages/api/trackPageView.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await axios.post(
        "https://n8n.vtsd.com.br/webhook/548fcdc7-03e9-4cf0-88c2-5af6926c4298",
        data
      );
      res.status(200).json({ message: "Page view tracked successfully" });
    } catch (error) {
      console.error("Error forwarding page view data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
