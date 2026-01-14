import React from "react";

type UserProps = {
  name: string;
  location: string;
};

class UserClass extends React.Component<UserProps> {
    constructor(props:UserProps) {
        super(props);

        console.log(props);
    }
    render() {
        const {name,location} = this.props;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ishika</h4>
            </div>
        )
    }
}

export default UserClass;