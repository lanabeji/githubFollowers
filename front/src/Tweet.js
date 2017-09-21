import React , {Component} from "react";
//import PropTypes from "prop-types";

class Tweet extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <div className="name">{this.props.tweet.user.screen_name}</div>
            <div className="text">{this.props.tweet.text}</div>
            <img src={this.props.tweet.profile_pic_url} alt={this.props.tweet.user.screen_name}/>

        </div>);
    }
}

//Tweet.propTypes = {
  //  tweet: PropTypes.isRequired()
//};

export default Tweet;