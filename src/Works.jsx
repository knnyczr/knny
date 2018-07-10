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
import palet from './images/pal_et.png';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';

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
                <Link to='/works/thesis'><img style={{ backgroundImage: `url(${palet})` }} /></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Pal Et</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="react" name='circle' /> React</span>
                    <span><FontAwesome className="express" name='circle' /> Express</span>
                    <span><FontAwesome className="bulma" name='circle' /> Bulma</span>
                    <span><FontAwesome className="api" name='circle' /> API</span>

                <br />
                <p><Link to='/works/thesis'>view project nEED TO DEPLOY</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <a href="https://ilovehueclone.herokuapp.com/"><img style={{ backgroundImage: `url(${hue})` }} /></a>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">I love Hue</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="jQuery" name='circle' /> jQuery</span>

                <br />
                <p><a href="https://ilovehueclone.herokuapp.com/">view project NEED TO DEPLOY</a></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/thesis'><img style={{ backgroundImage: `url(${ulog})` }} /></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">uLog</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="express" name='circle' /> Express</span>
                    <span><FontAwesome className="bulma" name='circle' /> Bulma</span>
                    <span><FontAwesome className="indesign" name='circle' /> InDesign</span>

                <br />
                <p><a href='https://ulogin.herokuapp.com/posts'>view project</a></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/posters'><img style={{ backgroundImage: `url(${posters})` }} /></Link>
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
                <br />
                <br />

                    <span><FontAwesome className="photoshop" name='circle' /> Photoshop</span>
                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>
                    <span><FontAwesome className="indesign" name='circle' /> InDesign</span>

                <br />
                <p><Link to='/works/posters'>view project</Link></p>
              <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/likwid'><img style={{ backgroundImage: `url(${likwid})` }}/></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">BRANDING: Likwid</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="photoshop" name='circle' /> Photoshop</span>
                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>

                <br />
                <p><Link to='/works/likwid'>view project</Link></p>
              <br />
              </div>

            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/thesis'><img style={{ backgroundImage: `url(${thesis})` }}/></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">FINE ARTS: Senior Thesis</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>

                <br />
                <p><Link to='/works/thesis'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/amys'><img style={{ backgroundImage: `url(${amys})` }} /></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">BRANDING: Amy's Place</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>
                    <span><FontAwesome className="indesign" name='circle' /> InDesign</span>

                <br />
                <p><Link to='/works/amys'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Link to='/works/spectrum'><img style={{ backgroundImage: `url(${spectrum})` }} /></Link>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">LAYOUT DESIGN: The Spectrum</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <br />

                    <span><FontAwesome className="photoshop" name='circle' /> Photoshop</span>
                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>
                    <span><FontAwesome className="indesign" name='circle' /> InDesign</span>

                <br />
                <p><Link to='/works/spectrum'>view project</Link></p>
                <br />
              </div>

            </div>
          </div>



        </div>
      </div>
    )
  }
}
