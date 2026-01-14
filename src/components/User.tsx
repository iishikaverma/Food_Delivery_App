const User = (props:any) => {
    return <div className="user-card">
        <h2>Name : {props.name}</h2>
        <h3>Location: {props.locaion}</h3>
        <h4>Contact: @ishika</h4>
    </div>
}

export default User; 