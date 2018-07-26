import Works from './Works';
import About from './About';
import Posters from './works/Posters';
import Thesis from './works/Thesis';
import Amys from './works/Amys';
import Likwid from './works/Likwid';
import Spectrum from './works/Spectrum';
import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
var Dropbox = require('dropbox').Dropbox;

export default class Main extends Component{
  constructor(props){
    super(props);
    let dbx = new Dropbox({ accessToken: process.env.REACT_APP_API_KEY });
    this.state={
      posters: [],
      posterdisplays:[],
      dbx: dbx
    };
    this.getdisplays = this.getdisplays.bind(this)
    this.fetchapi = this.fetchapi.bind(this)
  }
  fetchapi(){
    this.state.dbx.filesListFolder({ path: "/resized" })
    .then((res) => {
      let apipics = res.entries
      this.setState({ posters: apipics })
      this.getdisplays();
    })
    .catch((error) => console.log(error));
  }
  getdisplays(){
    let newArray = this.state.posterdisplays.slice();
    this.state.posters.map((d, i) => {
      return this.state.dbx.filesGetTemporaryLink({"path": this.state.posters[i].path_lower})
      .then((res) => {
        newArray.push(res)
        this.setState({ posterdisplays: newArray })
      })
      .catch(err => console.log(err));
    })

  }
  componentWillMount() {
    this.fetchapi();
  }

  render(){
    let posterdisplays = this.state.posterdisplays
    return(
      <div id="main">
        <Switch>
          <Route path="/works/amys" component={Amys}/>
          <Route path="/works/posters" render={() => <Posters displays={posterdisplays} /> } />
          <Route path="/works/thesis" component={Thesis}/>
          <Route path="/works/likwid" component={Likwid}/>
          <Route path="/works/spectrum" component={Spectrum}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Works}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
