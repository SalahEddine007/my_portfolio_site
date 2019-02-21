import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import imgProfile from '../img/compus.PNG';



class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Salah Eddine Boukerkour</h2>
            <img
              src=""
              alt=""
              style={{height: '200px', width: '30%', background: `url('${imgProfile}') center / cover`}}
              roundedCircle  />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm a web application developer currently obsessed with PHP(Laravel) and Javascript(React.js) and WordPress world . I work professionally on Laravel and ReactJS application and I consider myself a limitless learner focused about everything related to web development. My experience allows me to pick the right strategy for developing cross-platform applications that run on a variety of desktop computers as well as mobile devices. Code never lies, comments sometimes do ..</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (212+) 609-261351
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                  (212+) 609-261351                    
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    salahdin.boukerkour@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;