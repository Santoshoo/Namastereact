import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
   return (
     <>
       <h1>About Us</h1>
       <p>This is the about us page of our restaurant.</p>
       <p>We serve delicious food and provide excellent service.</p>
       <p>Contact us for more information.</p>
       <Profile user={"Kumar"} />
       <ProfileClass user={"Santosh"} />
     </>
   );
}

export default About;
