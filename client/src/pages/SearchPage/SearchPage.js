import React from "react";
import "./SearchPage.css";
import Search from "../../components/Search";
import Results from "../../components/Results";
import API from "../../utils/API.js";

class SearchPage extends React.Component {

    state = {
        results: [],
        topic: "",
        startDate: "",
        endDate: ""
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getNewArticles();
    }

    getNewArticles = () => {
        API.searchArticles(this.state.topic, this.state.startDate, this.state.endDate)
        .then(res => {
            this.setState({
                results: res.data.response.docs
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                Search
                <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
                <Results results={this.state.results} />
            </div>
        )
    }

}; //end SearchPage component

export default SearchPage;