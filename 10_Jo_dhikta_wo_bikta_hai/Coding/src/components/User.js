import { useState } from "react"


const User = (props) => {
    let [count, setCount] = useState(0);
    const [count1] = useState(222);

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={() => {
                count++
                setCount(count);
            }}>Click me</button>
            {/* <h1>Count = {count1}</h1> */}
            <h2>Name: {props.name}</h2>
            <h3>Location: Ahmedabad</h3>
            <h4>Contact: @udhani_dhiraj</h4>
        </div>
    )
}

export default User