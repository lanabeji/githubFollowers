import React, { Component } from 'react';
import Follower from "./Follower";
import PropTypes from "prop-types";

class FollowersList extends Component {

    constructor(props){
        super(props);
    }

    renderFollowers(){
        return this.props.followers.map((t)=>{
            console.log("FollowerList antes de retornar el map");
            return <Follower follower = {t} />;
        });
    }

    render(){
        return(<div>
            {this.renderFollowers()}
        </div>);
    }
}

FollowersList.propTypes = {
    followers: PropTypes.array.isRequired
};

export default FollowersList;