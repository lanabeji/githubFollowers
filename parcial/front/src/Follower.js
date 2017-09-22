import React, { Component } from 'react';
import PropTypes from "prop-types";

class Follower extends Component {

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.follower);
        return(<div>
            <div className="name">
                {this.props.follower.data.login}
            </div>
            <img src={this.props.follower.data.avatar_url} alt="Hola"/>
            <a href={this.props.follower.data.html_url}> URL Github</a>
        </div>);
    }
}

Follower.propTypes = {
    follower: PropTypes.object.isRequired
};

export default Follower;