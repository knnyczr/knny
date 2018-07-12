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
import tictactoe from './images/tictactoe.png';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';

export default class Works extends Component{
  constructor(props) {
    super(props);
    this.state = {}
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removingclass = this.removingclass.bind(this)
    this.changeloader = this.changeloader.bind(this)
  }
  componentDidMount(){
    let main = document.getElementById("main")
    main.classList.add("loading")
    let cards = [...document.getElementsByClassName("card")]
    this.changeloader()
    cards.map((d) =>{
      d.classList.add("loadingcards")
      this.removingclass()
    })
  }
  removingclass(){
    console.log("we in hereee")
    setTimeout(() => {
      let cards = [...document.getElementsByClassName("card")]
      let main = document.getElementById("main")
      main.classList.remove("loading")
      cards.map((d) => {
        d.classList.remove("loadingcards")
      })
    }, 5000)
  }
  changeloader(){
    setTimeout(() => {
      document.getElementById("loader").innerHTML = "30%";
    }, 500)
    setTimeout(() => {
      document.getElementById("loader").innerHTML = "50%";
    }, 1000)
    setTimeout(() => {
      document.getElementById("loader").innerHTML = "80%";
    }, 2000)
    setTimeout(() => {
      document.getElementById("loader").innerHTML = "100%";
    }, 2500)
    setTimeout(() => {
      document.getElementById("loader").innerHTML = " ";
    }, 4000)
  }

  render(){
    return(
      <div className="wrapper" onLoad={() => this.componentDidMount()}>
        <div className="inner">

          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <a href="https://github.com/knnyczr/Pal_et"><img style={{ backgroundImage: `url(${palet})` }} /></a>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Pal Et</p>
                </div>
              </div>

              <div className="content">
                This is an educational app for developers and designers to learn about colors, and color relationships through a dynamic color picker.
                <br />
                <br />

                    <span><FontAwesome className="react" name='circle' /> React</span>
                    <span><FontAwesome className="express" name='circle' /> Express</span>
                    <span><FontAwesome className="bulma" name='circle' /> Bulma</span>
                    <span><FontAwesome className="api" name='circle' /> API</span>

                <br />
                <p><Link to='/works/thesis'></Link><br />
                <a href="https://github.com/knnyczr/Pal_et">view GitHub</a>
                </p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <a href="http://ilovehueclone-knnyczr.bitballoon.com/"><img style={{ backgroundImage: `url(${hue})` }} /></a>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Hue Clone</p>
                </div>
              </div>

              <div className="content">
                I love hue is the original single player game that makes puzzles out of gradients. This game is a clone of called HueClone.
                <br />
                <br />

                    <span><FontAwesome className="jQuery" name='circle' /> jQuery</span>

                <br />
                <p><a href="http://ilovehueclone-knnyczr.bitballoon.com/">view project</a><br />
                <a href="https://github.com/knnyczr/I-love-Hue">view GitHub</a>
                </p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <a href="http://tictactoe-knnyczr.bitballoon.com/"><img style={{ backgroundImage: `url(${tictactoe})` }} /></a>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">Tic-Tac-Toe</p>
                </div>
              </div>

              <div className="content">
                Classic game of tictactoe, with a modern clean red/blue theme. Play with a friend!
                <br />
                <br />

                    <span><FontAwesome className="jQuery" name='circle' /> jQuery</span>

                <br />
                <p><a href="http://ilovehueclone-knnyczr.bitballoon.com/">view project</a><br />
                <a href="http://tictactoe-knnyczr.bitballoon.com/">view GitHub</a>
                </p>
                <br />
              </div>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <a href='https://ulogin.herokuapp.com/posts'><img style={{ backgroundImage: `url(${ulog})` }} /></a>
              </figure>
            </div>

            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-4">uLog</p>
                </div>
              </div>

              <div className="content">
                A "U" friendly digital space to allow it's user to express your "U"-ness. A blog that allows you to upload snippets of your life and both with other over stuff you love.

                <br />
                <br />

                    <span><FontAwesome className="express" name='circle' /> Express</span>
                    <span><FontAwesome className="bulma" name='circle' /> Bulma</span>

                <br />
                <p><a href='https://ulogin.herokuapp.com/posts'>view project</a> <br />
                <a href="https://github.com/knnyczr/uLog">view GitHub</a>

                </p>
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
                One poster everyday for a year to develop aesthetics, refine story telling, and share beautiful design.
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
                LIKWID is a fictional cold press bottled juice company.
                This is an experimental branding project featuring packaging design, company brand, and advertising.
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
                (2016) Mixed media <br />
                Experimental sculptural work for Senior Thesis show features self made benches, seven T8 lights, and printed color gradients.
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
                Amy's Place is a local diner in localed in downtown Buffalo known for it's vegan/vegetarian/meat lover's menu. Most of it's menu is customizable to meet everyone's needs.
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
                The Spectrum is an independent student publication at the University at Buffalo campus.
                This project features the best works I've done while Creative Director.
                <br />
                <br />

                    <span><FontAwesome className="photoshop" name='circle' /> Photoshop</span>
                    <span><FontAwesome className="illustrator" name='circle' /> Illustrator</span>
                    <span><FontAwesome className="indesign" name='circle' /> InDesign</span>

                <br />
                <p>
                  <Link to='/works/spectrum'>view project</Link>
                </p>
                <br />
              </div>

            </div>
          </div>



        </div>
        <span id="loader">0%</span>
      </div>
    )
  }
}
