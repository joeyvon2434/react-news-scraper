import React from "react";
import "./ResultCard.css";
import API from "../../utils/API";


class ResultCard extends React.Component {

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('submitting form');
        API.saveArticle({
            title: this.props.title,
            date: this.props.date,
            url: this.props.url
        });
    }

    render() {
        
        return (
            <div>Result Card
                <h2>{this.props.title}</h2>
                <a href={this.props.url}>To Article</a>
                <p>Published: {this.props.date}</p>
                <button
                onClick={this.handleFormSubmit}
                >Save Article</button>
            </div>
        )
    }
};

export default ResultCard;