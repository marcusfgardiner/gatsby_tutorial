import React from "react";
import Link from "gatsby-link";

export default () => 
<div style={{color: 'blue' }}>
    <h1>Hello Gatsby!</h1>
    <p>What a World!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br/>
    <div>
        <Link to="/page-2/">Link</Link>
    <br/>
        <Link to="/page-3/">Link to page 3</Link>
    </div>
    <div>
        <Link to="/counter/">Counter</Link>
    </div>
    </div>
