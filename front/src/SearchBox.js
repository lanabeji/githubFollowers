import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props){
        super(props);
    }

    onEnter(evt){
        if(evt.key === 'Enter'){
            console.log("do validate");

            this.props.search(evt.target.value);
        }
    }


    render(){
        return(<div>
            <input type="text" placeholder="Username"
                   onKeyDown={this.onEnter.bind(this)}/>
        </div>);
    }
}

export default SearchBox;