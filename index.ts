import express from "express";
import { NseIndia } from "stock-nse-india";
import { fetchAndUpdate } from "./src/stockdata";
import { CronJob } from "cron";

const nseIndia = new NseIndia();

const pingSelf = () => {
  const url =
    process.env.RENDER_EXTERNAL_URL ||
    `http://localhost:${process.env.SERVER_PORT || 3000}/titan`;

  setInterval(() => {
    fetch(url)
      .then((res) => console.log(`Pinged ${url} - Status: ${res.status}`))
      .catch((err) => console.error("Error pinging self:", err));
  }, 14 * 60 * 1000); // Ping every 14 minutes
};

pingSelf();

const app = express();
const job = new CronJob(
  // "0,30 9-16 * * 1-5",
  "*/13 * * * *", //test every 13min
  // "*/10 * * * * *", //every 10 sec
  () => {
    fetchAndUpdate();
    console.log("Fetching every 30 minutes during market hours...");
  },
  null,
  true,
  "Asia/Kolkata"
);

job.start();

app.get("/:symb", async (req, res) => {
  const { symb } = req.params;
  try {
    const stockData = await nseIndia.getEquityDetails(symb);
    return res.json({ message: "WORKING", data: stockData });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return res.status(500).send("Error fetching stock data");
  }
});

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`server is on ${process.env.SERVER_PORT || 3000}`);
});
