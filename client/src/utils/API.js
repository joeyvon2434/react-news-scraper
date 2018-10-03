import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "a9885c4a1f9249cfb382d2833e84d6a9";

export default {

    findNewArticles: function (query, startDate, endDate) {
        const sortType = "newest";
        const url = BASEURL;
        
        return axios.get(url, {
            params: {
                'api-key': APIKEY,
                'q': query,
                'sort': sortType,
                'page': 0
            }
        });
    },
    searchArticles: function (query, startDate, endDate) {
        const sortType = "newest";
        const url = BASEURL;
        
        return axios.get(url, {
            params: {
                'api-key': APIKEY,
                'q': query,
                'begin_date': startDate,
                'end_date': endDate,
                'sort': sortType,
                'page': 0
            }
        });
    },
    saveArticle: function(articleData) {
        console.log("Made it to the API utility");
        console.log(articleData);
        return axios.post("/api/articles", articleData);
    }
};