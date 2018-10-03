import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "a9885c4a1f9249cfb382d2833e84d6a9";

export default {
    //use the NYT API to get new artilces (move to backend once routing issues are fixed)
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
    ///use the NYT API to get find artilces (move to backend once routing issues are fixed)
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

    //function to save an article to the database through the back end
    saveArticle: function (articleData) {
        console.log("Made it to the API utility");
        console.log(articleData);
        return axios.post("/api/articles", articleData);
    },

    //Fetch the saved articles from the database
    removeArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },

    getSaved: function () {
        return axios.get("/api/articles");
    }
};