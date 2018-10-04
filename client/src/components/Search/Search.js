import React from "react";
import "./Search.css";

class Search extends React.Component {

    render() {
        return (
            <div className="search-box">
            <h2>Article Search</h2>
                <label>Topic</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="topic"
                    type="text"
                >
                </input>
                <br></br>
                <label>Start Date (YYYYMMDD)</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="startDate"
                    type="text"
                >
                </input>
                <br></br>
                <label>End Date (YYYYMMDD)</label>
                <br></br>
                <input
                    onChange={this.props.handleInputChange}
                    name="endDate"
                    type="text"
                >
                </input>
                <br></br>
                <button
                    className="btn btn-primary"
                    onClick={this.props.handleFormSubmit}
                >Search for Articles
                </button>
            </div>
        )
    }
}

export default Search;