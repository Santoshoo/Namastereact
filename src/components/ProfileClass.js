
import React from "react";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state = {
        userName: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://i.pinimg.com/originals/5e/8b/9f/5e8b9f2a7c1d2a0c6d4d3c7f0d3e6a1b.jpg",
        };
    }
    
    async componentDidMount() {
        // API call to fetch user data
        const data = await fetch("https://api.example.com/user"); // Replace with actual API endpoint
        const json = await data.json();
        console.log(json);
        this.setState({
            userName: json.name,
            location: json.location,
            avatar_url: json.avatar_url,
        });
    }


    render() {
        console.log("render");
        return (
        <div className="profileClass">
            <h1>Profile Class Component</h1>
            {/* <Profile {...this.state} /> */}
        </div>
        );
    }
}