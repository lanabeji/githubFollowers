import React , {Component} from "react";

class SearchBox extends Component{

    constructor(props){
        super(props);
    }

    onEnter(evt){
        console.log(evt.target.value);
    }

    render(){
        return(
            <div className="SearchBox">
                <input type="text" value={this.props.user ? this.props.user:""}/>
                onKeyPress={this.onKeyPress.bind(this)}
            </div>
        );
    }
}

export default SearchBox;