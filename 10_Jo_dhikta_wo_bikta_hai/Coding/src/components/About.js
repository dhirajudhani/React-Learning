import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount(){
   // console.log("parent coponent did mount ")
  }

  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a namaste web series</h2>
        <div>
          LoggedIn user
          <UserContext.Consumer>
            {
              ({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>
            }
          </UserContext.Consumer>
        </div>
        <User name={"Dhiraj Udhani (functional)"} />
        <UserClass
          name={"Dhiraj Udhani (class)"}
          location={"Ahmedabad class"}
        />
        {/* <UserClass
          name={"Mukesh ambani (class)"}
          location={"Jamnager class"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is a namaste web series</h2>
//             <User name={"Dhiraj Udhani (functional)"} />
//             <UserClass name={"Dhiraj Udhani (class)"} location={"Ahmedabad class"}/>
//         </div>
//     )
// }

export default About;
