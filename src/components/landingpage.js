import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myPhoto from '../pictures/myPhoto.png'


class Landing extends Component {
  render() {
    return(
      <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={myPhoto}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Tarek Al Khatib</h1>
              <h2>Full Stack Web Developer</h2>

            <hr/>

          <p>JavaScript | ReactJS | HTML | CSS | Bootstrap | NodeJS | Express | MongoDB</p>

            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/tarek-alkhatib" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/tarekcham" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

            

            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
