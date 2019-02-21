import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import imgProfile from '../img/compus.PNG';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
          
            <div container justify="center" alignItems="center">
              <img
                src=""
                alt=""
                style={{height: '130px', width: '25%', background: `url('${imgProfile}') center / cover`}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Salah Eddine Boukerkour</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a web application developer currently obsessed with PHP(Laravel) and Javascript(React.js) and WordPress world .
              I work professionally on Laravel and ReactJS application and I consider myself a limitless learner focused about everything related to web development.
              My experience allows me to pick the right strategy for developing cross-platform applications that run on a variety of desktop computers as well as mobile devices.
              Code never lies, comments sometimes do ..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Hay Riad 2, N°326 C BEN GUERIR</p>
            <h5>Phone</h5>
            <p>0609261351</p>
            <h5>Email</h5>
            <p>salahdin.boukerkour@gmail.com</p>
            <h5>Web</h5>
            <p>https://wonderful-ptolemy-cdd7c3.netlify.com/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="L’institut Specialise De Technologie Appliquee"
                 schoolDescription="Technicien Specialise En Developpement Informatique"
                  />
            <Education
                 startYear={2015}
                 endYear={2015}
                 schoolName="L’institut Specialise De Technologie Appliquee"
                 schoolDescription="Certificat Microsoft : Windows , Office"
                  />
            <Education
              startYear={2014}
              endYear={2016}
              schoolName="Lycee Echahid Saleh Assarghini"
              schoolDescription="Baccalaureat  En Science Physique "
               />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={"15-09-2018"}
              endYear={"In Progress"}
              jobName="Web Integrator"
              jobLocal="company : UNIVERSITY MOHAMED VI POLYTECHNIC"
              jobDescription="- Platform support E-learning (LMS) and SIS - Develop plugins WordPress (PHP)."
                              
              />
              <Experience
                startYear={"28-02-2018"}
                endYear={"30-08-2018"}
                jobName="Web Developer"
                jobLocal="company : IZI SYSTEMS"
                jobDescription="- Projects WordPress
                                - Create two projects : PHP (Laravel), BOOTSTRAP, MySql, Html5/Css3, React.Js"
                />
                <Experience
                startYear={"09-01-2017"}
                endYear={"03-06-2017"}
                jobName="Web Developer"
                jobLocal="company : CBI"
                jobDescription="- Create web application : (C# ,ASP.NET ,SQL SERVER ,BOOTSTRAP)"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="PHP (Laravel)"
                progress={90}
                />
                <Skills
                  skill="Html/Css"
                  progress={100}
                  />
                  <Skills
                    skill="Bootstrap/JQuery"
                    progress={90}
                    />
                    <Skills
                    skill="ReactJS"
                    progress={50}
                    />
                    <Skills
                    skill="Wordpress"
                    progress={80}
                    />
                    <Skills
                      skill="MngoDB/NodeJS/Express"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;