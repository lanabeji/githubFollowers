import React, {Component} from "react";

import SearchBox from "./SearchBox.js";


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            followers:[
            ],
            search:""
        };
    }

    componentDidMount(){
        fetch("/followers/:user")
            .then((res)=>res.json())
            .then((json)=>console.log(json));
    }

    search(text){
        this.setState({
            search: text
        });
    }
    render(){
        return(
            <div>
                <h1>Followers</h1>
                <div>
                    <SearchBox onSearch={}
                        search={this.search}/>
                </div>
            </div>
        );
    }
}

export  default App;