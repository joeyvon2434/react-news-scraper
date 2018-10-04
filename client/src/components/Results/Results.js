import React from "react";
import "./Results.css";
import ResultCard from "../ResultCard";

class Results extends React.Component {

    render() {

        return (
            <div className="results-container">
            <h2 className="results-title">Results</h2>
                {this.props.results.map(article => (
                    <ResultCard
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        key={article._id}
                        id={article._id}
                    />
                )
                )}
            </div>
        )
    }
};

export default Results;