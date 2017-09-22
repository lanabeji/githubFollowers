import React, { Component } from 'react';
import SearchBox from "./SearchBox";
import FollowersList from "./FollowersList";

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            followers:[
            ]
        };
    }

 //   componentDidMount(){
 //       fetch("/getFollowers/:user", {method:"GET", header:{accept:"aplication/json"}})
 //          .then((res)=>{
 //
 //           })
 //           .then((followers)=>{
 //               this.setState({
 //                   followers:followers
 //               });
 //           });
 //   }

    componentDidMount(){
        fetch("/getAllFollowers", {method:"GET", headers:{accept:"aplication/json"}})
            .then((res)=>{
                if(res.ok)
                   return res.json();
            })
            .then((followers)=>{
                this.setState({
                    followers:followers
                });
                console.log(followers);
            });
    }

    search(text){
      //  this.setState({
      //      search: text
      //  });
        fetch("/getFollowers/"+text, {method:"GET", headers:{accept:"aplication/json"}})
            .then((res)=>{
                if(res.ok)
                    return res.json();
            })
            .then((followers)=>{
                this.setState({
                    followers:followers
                });
                console.log(followers);
            });
    }

    render(){
        console.log(this.state);
        return(<div>
            <h1>Followers GitHub</h1>
            <div>
                <SearchBox search={this.search}/>

            </div>
            <FollowersList followers={this.state.followers}/>
        </div>);
    }
}

export default App;
