import { google } from "googleapis";

export const fetchStockSymbols = async (): Promise<string[]> => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../../etc/secrets/googleSheet.json", 
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const range = "Sheet1!C1:Z1";
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values;
  if (rows && rows.length > 0) {
    const [symbols] = rows;
    return symbols.filter(symbol => symbol);
  } else {
    throw new Error("No data found in the specified range");
  }
};
