import React from 'react';
class ActionLink extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(e);
        //e.preventDefault();
    }
    render(){
        return(
            <form>
            <button type="submit" onClick={this.handleClick}>click</button>
            </form>
        )
    }
}

export default ActionLink;