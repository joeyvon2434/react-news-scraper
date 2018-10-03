import React from "react";
import "./Search.css";

class Search extends React.Component {

    render() {
        return (
            <div>
                <label>Topic</label>
                <input
                    onChange={this.props.handleInputChange}
                    name="topic"
                    type="text"
                >
                </input>
                <label>Start Date</label>
                <input
                    onChange={this.props.handleInputChange}
                    name="startDate"
                    type="text"
                >
                </input>
                <label>End Date</label>
                <input
                    onChange={this.props.handleInputChange}
                    name="endDate"
                    type="text"
                >
                </input>
                <button
                    onClick={this.props.handleFormSubmit}
                >Search for Articles
                </button>
            </div>
        )
    }
}

export default Search;