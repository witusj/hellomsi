export default function handler(req, res) {
    fetch("https://spreadsheets.google.com/feeds/list/1VjgwMrwtRrzWje7k4gG01KC9tcfOW0AjT5iyPdkrDmU/1/public/values?alt=json")
        .then(res => res.json())
        .then(json => {
            const data = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */

            const rows = json.feed.entry

            for (const row of rows) {
                const formattedRow = {}

                for (const key in row) {
                    if (key.startsWith("gsx$")) {

                        /* The actual row names from your spreadsheet
                         * are formatted like "gsx$title".
                         * Therefore, we need to find keys in this object
                         * that start with "gsx$", and then strip that
                         * out to get the actual row name
                         */

                        formattedRow[key.replace("gsx$", "")] = row[key].$t

                    }
                }

                data.push(formattedRow)
            }
            res.status(200).json({ data })
        })
}