import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
           userInfo: {
            name: "dummy",
            location: "Default",
            avatar_url: "http"
           }
        }
        //console.log(this.props.name + "Child constructor")
    }

    async componentDidMount(){
        // API CALLS
        //console.log(this.props.name + "child component did mount")
        const data = await fetch("https://api.github.com/users/dhirajudhani");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json)
    }

    render(){
        
       // console.log(this.props.name +  "Child render")
       const {name, location , avatar_url} = this.state.userInfo
    //    debugger;
        return(
            <div className="user-card">
                
                <h2>Name: {name }</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @udhani_dhiraj</h4>
                <img src={avatar_url} alt="" />
            </div>
        )
    }
}

export default UserClass