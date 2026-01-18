import React from "react";
import { UserProps, UserState } from "../utils/types";

class UserClass extends React.Component<UserProps, UserState> {
    constructor(props:UserProps) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy-photo.com"
            }
        }
        //console.log("child constructor");
    }

    async componentDidMount() {
        //console.log("Child component did mount")
        const data = await fetch ("https://api.github.com/users/iishikaverma");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        // console.log(json);
    }

    componentDidUpdate() {
        //console.log("Component did Update")
    }

    componentWillUnmount() {
        //console.log('Component Will Unmount');
    }

    render() {
        const {name,location, avatar_url} = this.state.userInfo;
        // console.log("child rendered")
        return (
            <div className="p-2.5 border border-black rounded-[20px]">
                <img src={avatar_url} alt={"image"} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ishika</h4>
            </div>
        )
    }
}

export default UserClass;

/* ***********************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */