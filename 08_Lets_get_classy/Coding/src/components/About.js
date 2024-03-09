import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is a namaste web series</h2>
            <User name={"Dhiraj Udhani (functional)"} />
            <UserClass name={"Dhiraj Udhani (class)"} location={"Ahmedabad class"}/>
        </div>
    )
}

export default About;