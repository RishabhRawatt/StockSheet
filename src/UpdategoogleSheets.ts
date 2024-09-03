import { google } from "googleapis";
import { format, toZonedTime } from "date-fns-tz";

export const updateGoogleSheet = async (data: (number | string)[]) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "/etc/secrets/googleSheet.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const now = new Date();
  const timeZone = "Asia/Kolkata";
  const zonedTime = toZonedTime(now, timeZone);

  // Format the date and time according to the specified time zone
  const date = format(zonedTime, "yyyy-MM-dd", { timeZone });
  const time = format(zonedTime, "hh:mm a", { timeZone });

  const formattedData = [[date, time, ...data]];

  const range = `Sheet1!A:E`;

  const request = {
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values: formattedData,
    },
  };

  try {
    await sheets.spreadsheets.values.append(request);
    console.log("Google Sheet updated successfully");
  } catch (error) {
    console.error("Error updating Google Sheet:", error);
  }
};
