const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.reddit.com/r/news/'

const getData = async (url) => {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch(err){
        console.log(err);
    }
}


(async () => {

    let html = await getData(url);
    const $ = cheerio.load(html);

    $("h3").each( (i, elem) => {
        console.log(i, $(elem).text());
    });

})();
