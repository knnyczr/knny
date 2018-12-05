import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Works.css';
// import posters from './images/01232017_hero.jpg';
// import likwid from './images/LIKWID.png';
// import thesis from './images/thesis.jpg';
// import amys from './images/amys.png';
// import spectrum from './images/spectrum.png';
// import ulog from './images/ulog.png';
// import hue from './images/ilovehue.png';
// import palet from './images/pal_et.png';
// import tictactoe from './images/tictactoe.png';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';
import localdatabase from './db.js'; 

export default class Works extends Component{
  constructor(props) {
    super(props);
    this.state = {}
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removingclass = this.removingclass.bind(this)
    this.changeloader = this.changeloader.bind(this)
    this.makingCards = this.makingCards.bind(this)
  }  
  componentDidMount(){
    let main = document.getElementById("main")
    main.classList.add("loading")
    let cards = [...document.getElementsByClassName("card")]
    this.changeloader()
    this.makingCards()
    cards.map((d) =>{
      d.classList.add("loadingcards")
      this.removingclass()
    })
  }
  removingclass(){
    setTimeout(() => {
      let cards = [...document.getElementsByClassName("card")]
      let main = document.getElementById("main")
      main.classList.remove("loading")
      cards.map((d) => {
        d.classList.remove("loadingcards")
      })
    }, 5000)
  }
  makingCards(){
    // console.log(localdatabase)
    let inner = document.getElementsByClassName("inner")[0];
    localdatabase.forEach((d, i) => {
      console.log(d, i)
      return (
      // console.log(d[i].github)
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by3">
            <a href={d.github}><img style={{ backgroundImage: `url(${d.image})` }} /></a>
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
            <a href={d.github}>view GitHub</a>
            </p>
            <br />
          </div>

        </div>
      </div>
      )
    })
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
        {
          console.log(localdatabase)
        }
        </div>
        <span id="loader">0%</span>
      </div>
    )
  }
}
