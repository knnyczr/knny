import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Works.css';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from 'react-fontawesome';
import localdatabase from './db.js'; 

export default class Works extends Component{
  constructor(props) {
    super(props);
    this.state = {
      db : localdatabase, 
      db2: [1,2,3,4,5]
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.removingclass = this.removingclass.bind(this)
    // this.changeloader = this.changeloader.bind(this)
  }  
  componentDidMount(){
    let main = document.getElementById("main")
    // main.classList.add("loading")
    // let cards = [...document.getElementsByClassName("card")]
    // this.changeloader()
    // cards.forEach((d) =>{
    //     d.classList.add("loadingcards")
    //     this.removingclass()
    // })
  }
  // removingclass(){
  //   setTimeout(() => {
  //     let cards = [...document.getElementsByClassName("card")]
  //     let main = document.getElementById("main")
  //     main.classList.remove("loading")
  //     cards.forEach((d) => {
  //       d.classList.remove("loadingcards")
  //     })
  //   }, 5000)
  // }
  // changeloader(){
  //   setTimeout(() => {
  //     document.getElementById("loader").innerHTML = "30%";
  //   }, 500)
  //   setTimeout(() => {
  //     document.getElementById("loader").innerHTML = "50%";
  //   }, 1000)
  //   setTimeout(() => {
  //     document.getElementById("loader").innerHTML = "80%";
  //   }, 2000)
  //   setTimeout(() => {
  //     document.getElementById("loader").innerHTML = "100%";
  //   }, 2500)
  //   setTimeout(() => {
  //     document.getElementById("loader").innerHTML = " ";
  //   }, 4000)
  // }
  render(){
    console.log(this.state.db)
    return(
      <div className="wrapper" onLoad={() => this.componentDidMount()}>
        <div className="inner">
        
        {/* {
          this.state.db.map((d, i) =>{
              return <h1 key={i}>{d.title}</h1>
            })
        } */}

        {
          this.state.db.map((d, i) =>{
              return (
                // <div className="card">
                //   <div className="card-image">
                //     <figure className="image is-5by3">
                //       <a href={d.github ? d.github : NaN }><img style={{ backgroundImage: `url(${d.image})` }}></img></a>
                //     </figure>
                //   </div>
                // </div>
                <div className="work">
                  <img alt={ d.title } src={ d.image } />
                </div>
              )
            })
        }
        

        </div> {/* closing inner div */}
        <span id="loader">0%</span>
      </div>
    )
  }
}
