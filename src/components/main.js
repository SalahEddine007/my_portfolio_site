import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './landingpage';
// import AboutMe from './abouteme';
import Contact from './contact';
import Resume from './resume';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        {/* <Route path="/aboutme" component={AboutMe} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)


export default Main;