import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {title: "Welcome"};
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(newTitle){
        this.setState({title: newTitle});
    }

    render(){
        return(
            <div>
                <Header changeTitle={this.changeTitle} title={this.state.title} />
                <Footer />
            </div> 
        );
    }
}