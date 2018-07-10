import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Works.css';
import posters from './images/01232017_hero.jpg';
import likwid from './images/LIKWID.png';
import thesis from './images/thesis.jpg';
import amys from './images/amys.png';
import spectrum from './images/spectrum.png';
import ulog from './images/ulog.png';
import hue from './images/ilovehue.png';
import palet from './images/pal_et.png'

export default class Works extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div className="wrapper">
        <div className="inner">

          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${posters})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/posters'>view project</Link></p>
              <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${likwid})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/likwid'>view project</Link></p>
              <br />
              </div>

            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${thesis})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${amys})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${spectrum})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${ulog})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${hue})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <img style={{ backgroundImage: `url(${palet})` }} />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Daily Posters</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
