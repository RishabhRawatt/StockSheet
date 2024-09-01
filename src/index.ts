import express from "express";
import { NseIndia } from "stock-nse-india";
import { fetchAndUpdate } from "./stockdata";
import { CronJob } from "cron";


const nseIndia = new NseIndia();

const app = express();
const job = new CronJob(
  // "0,30 9-16 * * 1-5",
  "*/10 * * * * *", //every 10 sec
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

app.listen(3000, () => {
  console.log("server is on 3000");
});
