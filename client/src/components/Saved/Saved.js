import React from "react";
import "./Saved.css";
import SavedCard from "../SavedCard";
import API from "../../utils/API";

class Saved extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        console.log("Component mounted");
        this.getSavedArticles();
    }

    getSavedArticles() {
        API.getSaved()
        .then(res => {
            console.log("'Saved Response");
            console.log(res);
            this.setState({
                results: res.data
            });
        })
        .catch(err => console.log(err));
    }

    
    render() {
        return (
            <div>
                {this.state.results.map(article => (
                    <SavedCard
                        getSavedArticles={this.getSavedArticles}
                        title={article.title}
                        url={article.url}
                        date={article.date}
                        key={article._id}
                        id={article._id}
                    />
                )
                )}
            </div>
        )
    }
}

export default Saved;
