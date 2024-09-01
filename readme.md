# 📈 Stock-Head Service (Yeah, that's what I'm calling it)

Are you a stock junkie who can't get enough of those sweet, sweet gains? Do you dream in candlestick charts and MACD indicators? Well, buckle up, my friend, because this Node.js service is about to take your spreadsheet game to the moon! 🚀

## what is this ?

Oh, just another life-changing Node.js service. Not really. It just updates your Google Sheets with stock prices. Every. Half. Hour. Because why not?

## What does it do? 
- **Automagically** updates your Google Sheets with the latest stock prices every 30 minutes. *Yawn.*
- Want it every 10 minutes? Or every hour? Sure, knock yourself out. Just mess around with the cron job,[you can checkout here about more](https://crontab.guru/).
- Add more stock symbols. Why? Because you can. And this bad boy will track them all like it's a secret agent on a mission.

## Who is this for? 
*Stock-heads* (Is that even a word? Probably not). But if you're obsessed with stocks and love seeing those numbers dance in your Google Sheet, this one's for you.


## How do I use this thing?

1. **Clone this repo.** Because that's what you're supposed to do.(we won't judge if you use Yarn)
    ```bash
    https://github.com/RishabhRawatt/StockSheet.git
    cd StockSheet
    npm install
    ```

2. **Set up your `.env` file.** You’ll need this. No, seriously, you do.
    ```plaintext
    SPREADSHEET_ID=your_google_sheet_id
    ```

3. **Don't forget the `googleSheet.json`!** You need this to edit and view your precious sheet. Otherwise, what's the point?
   change path in `keyFile:`
    you can google it how to setup googlesheet with nodejs( yeh its worth it)

5. **Run it.** Sit back and watch the magic happen.
    ```bash
    #build
    npm run build
    #start
    npm run start 
    ```
    
## Contributing 🤝

If you're feeling generous and want to add more features to this masterpiece, feel free to submit a pull request. Just make sure your code is as sarcastic and over-the-top as the rest of this README. 😉

## Disclaimer ⚠️

This project is for educational purposes only and should not be used for actual stock trading decisions. Past performance is no guarantee of future results, and the stock market is about as predictable as a coin flip (unless you're Warren Buffett, in which case, teach us your ways, oh wise one).

## Acknowledgments 🙏

- To the creators of Node.js and Google Sheets API for making this project possible.
- To the person who invented coffee, and chatGPT(yeh don't tell him i added my name secretly) without whom this README would never have been written.
- To the stock market itself, for providing endless entertainment and the occasional heart attack.

## Final Thoughts 💭

If you're still reading this, congratulations! You must be as much of a stock nerd as I am. Remember, the key to success in the stock market is to buy low, sell high, and never take financial advice from a sarcastic README. Happy investing! 🤑
