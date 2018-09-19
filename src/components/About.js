import React from "react";
import Helmet from "react-helmet";

const About = () => (
    <div>
        <h2>This is the about page</h2>
        <Helmet>
            <title>About page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
    </div>
);

export default About;
