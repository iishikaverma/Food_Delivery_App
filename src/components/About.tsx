import { Component } from "react";
//import User from "./User";
import UserClass from "./UserClass";
// import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props:any) {
        super(props);
        this.state = {
            
        };
        //console.log("Parent Constructor");
    }

    componentDidMount() {
        //console.log("Parent component did mount")
    }

    render() {
        //console.log("Parent Rendered");
        return(
            <div>
                <h1>About (Class Component)</h1>
                {/* <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="text-4xl">loggedInUser</h1> }
                    </UserContext.Consumer>
                </div> */}
                {/* <User name = {"Ishika Verma (function)"} location = {"Delhi"}/> */}
                <UserClass name = {"Name1 (class)"} location = {"Delhi"}/>
                {/* <UserClass name = {"Name2 (class)"} location = {"US"}/> */}
            </div>
        )
    }
}

// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN
/* 
  - Parent Constructor()              -- Render Phase
  - Parent Render()

    - First Child Constructor()
    - First Child Render()
                                      -- Render Phase
    - Second Child Constructor()
    - Second Child Render()

     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
    - First Child ComponentDidMount()
    - Second Child ComponentDidMount()

  - Parent ComponentDidMount()=
*/

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web Series </h2>
//             <User name = {"Ishika Verma (function)"} location = {"Delhi"}/>
//             <UserClass name = {"Ishika Verma (class)"} location = {"Delhi"}/>
//         </div>
//     )
// }

export default About;