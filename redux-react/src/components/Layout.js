import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
    return{
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
},)

export default class Layout extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchUser());
    }

    fetchTweets(){
        this.props.dispatch(fetchTweets());
    }

    render() {
        const { user, tweets } = this.props;
        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>Load Tweets</button>
        }
        const mappedTweets = tweets.map( (tweet,index) => <li key={index}>{tweet.tweets[index]}</li>);

        return (
        <div>
            <h1>{user.name}</h1>
            <ul>{mappedTweets}</ul>
        </div> );
        
    }
}