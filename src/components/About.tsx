import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React web Series </h2>
            <User name = {"Ishika Verma (function)"} location = {"Delhi"}/>
            <UserClass name = {"Ishika Verma (class)"} location = {"Delhi"}/>
        </div>
    )
}

export default About;