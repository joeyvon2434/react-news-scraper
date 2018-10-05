import React from "react";
import "./Home.css";
import API from "../../utils/API.js";
import Results from "../../components/Results"
;
class Home extends React.Component {

   state = {
       results: [],
   }

   componentDidMount() {
       this.getNewArticles();
   }

   getNewArticles = () => {
        const query = "news";
       API.findNewArticles(query)
       .then(res => {
           this.setState({
               results: res.data.response.docs
           })
       })
       .catch(err => console.log(err))
   }


    render() { return (
        <div>
            <Results results={this.state.results}/>
        </div>
    );
    }

}; //end Home class 

export default Home;