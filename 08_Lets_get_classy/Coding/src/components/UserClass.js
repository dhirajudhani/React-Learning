import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            count: 2,
        }
    }
    render(){
        const {location} = this.props;
        return(
            <div className="user-card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @udhani_dhiraj</h4>
            </div>
        )
    }
}

export default UserClass