import { useEffect, useState } from "react";

const User = (props:any) => {
    const [count] = useState(0);

    useEffect(() => {
        //API Calls
    }, [])

    async function getUserInfo () {
        const data = await fetch("");
    }

    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location: {props.location}</h3>
        <h4>Contact: @ishika</h4>
    </div>
}

export default User; 