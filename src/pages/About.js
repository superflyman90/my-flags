import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h2>A propos</h2>
            <br />
            <p>Ce site a été développé à l'aide de la bibliothèque React JS. Pour la mise en place des fonctionnalités j'ai suivi l'excellente formation de "FromScratch" sur youtube.com.</p>            
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus quasi odit magni. Quo nesciunt fuga unde nisi, eaque ad. Et amet earum natus rem illo ipsam tenetur non aliquam reprehenderit, est quaerat corporis, placeat error vitae accusantium? </p>
        </div>
    );
};

export default About;
