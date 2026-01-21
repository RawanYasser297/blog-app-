import express from "express";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://blog-app-three-silk.vercel.app"],
    credentials: true,
  })
);

app.get("/article", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing article URL" });
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const html = await response.text();
    const dom = new JSDOM(html, { url });

    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      return res.status(500).json({ error: "Failed to parse article" });
    }

    res.json({
      title: article.title,
      content: article.textContent,
      html: article.content,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


app.get("/news", async (req, res) => {
  try {
  const { page = 1,country='us',category='general',q=''} = req.query;
    

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&category=${category}&page=${page}&pageSize=6&apiKey=b019b07662d84083b6720459b27e7785`,
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("/", (req, res) => {
  res.send("✅ API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
