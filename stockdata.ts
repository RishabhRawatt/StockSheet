import { NseIndia } from "stock-nse-india";
import { updateGoogleSheet } from "./googleSheets.js";
import { fetchStockSymbols } from "./fetchStockSymb.js";

const nseIndia = new NseIndia();

export const fetchStockData = async () => {
  try {
    const stocks = await fetchStockSymbols();
    console.log("these stock :" + stocks);
    const stockDataPromises = stocks.map(async (stock) => {
      const stockData = await nseIndia.getEquityDetails(stock);
      if (
        !stockData ||
        !stockData.priceInfo ||
        !stockData.priceInfo.lastPrice
      ) {
        return "invalid symbol";
      } else return stockData.priceInfo.lastPrice;
    });

    const stockData = await Promise.all(stockDataPromises);
    return stockData;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};

export const fetchAndUpdate = async () => {
  const stockData = await fetchStockData();
  if (stockData) {
    await updateGoogleSheet(stockData);
  }
};
