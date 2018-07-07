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
                <figure className="image is-16by9">
                  <img style={{ backgroundImage: `url(${posters})` }} />
                </figure>
              </div>

              <div className="media-content">
                <p className="title is-4">DAILY POSTER PROJECT</p>
              </div>

              <div className="content">
                <p><Link to='/works/posters'>view project</Link></p>
                One poster everyday for a year to develop aesthetics, refine story telling, and share beautiful design. Each have their own narrative, a cross between fantasy and reality. Some created overlap and combine to make an overarching theme, they create mini series. All posters were created using Photoshop, and Illustrator.
                <br /><br />
                I throughout the year I felt inspired by my daily, political, and musical climate. I combine photography (provided by unsplash,) type, and color creating unique narrative.
                <br />
                Free download available of all the Hi-Def posters, perfect home screen for your iPhone or iPad.
                <br /><br />
                Prints and other printed media available at <a href="https://society6.com/kennycruzer">Society6</a>
              </div>

            
            </div>

              <div className="inners description">
                <h1>DAILY POSTER PROJECT</h1>
                <p><Link to='/works/posters'>view project</Link></p>
                <p>
                  One poster everyday for a year to develop aesthetics, refine story telling, and share beautiful design. Each have their own narrative, a cross between fantasy and reality. Some created overlap and combine to make an overarching theme, they create mini series. All posters were created using Photoshop, and Illustrator.
                  <br /><br />
                  I throughout the year I felt inspired by my daily, political, and musical climate. I combine photography (provided by unsplash,) type, and color creating unique narrative.
                  <br />
                  Free download available of all the Hi-Def posters, perfect home screen for your iPhone or iPad.
                  <br /><br />
                  Prints and other printed media available at <a href="https://society6.com/kennycruzer">Society6</a>
                </p>
              </div>
              <div className="inners work" style={{ backgroundImage: `url(${posters})` }}></div>

              <div className="inners description">
                <h1>BRANDING</h1>
                <p><Link to='/works/likwid'>view project</Link></p>
                <p>
                  LIKWID is a fictional cold press bottled juice company.
                  The creative process was divided into several steps, each requiring critical solutions. The color palette as well as the typefaces were chosen based on the overall brand strategy. Each creative decision was made in hopes of company growth and recognition
                </p>
                </div>
                <div className="inners work" style={{ backgroundImage: `url(${likwid})` }}></div>

              <div className="inners description">
                <h1>FINE ART</h1>
                <p><Link to='/works/thesis'>view project</Link></p>
                <p>
                  (2016)
                  Mixed media
                   <br />
                  Experimental sculptural work for Senior Thesis show features self made benches, seven T8 lights, and printed color gradients
                  <br />
                  <br />
                  Humans live solely for air, food, water, sunlight, these are your physiological needs. In Maslow's hierarchy of needs pyramid this is at the very bottom, the base of it all. Followed by social belonging, esteem, self actualization, and self transcendence. We all want to belong to people where we are loved, to be valued, to be more, and to live on.
                  <br /><br />
                  A rainbow–the meteorological phenomenon is an illusion, caused by the reflection, refraction, and dispersion of light through water.
                  Visible light is the sum of all colors. In the electromagnetic spectrum, light is a small fraction of the wavelength that shoots though the atmosphere, colors in visible light vary in wavelength, but the wavelength is seamless between colors. The continuous wavelength of light, creates a harmonious gradation between colors, as do genders and sexualities in people. We are all beams of light scattering, jumping, reflecting, Although sexuality and gender is not mutually exclusive. People are they're own color but we still stand together, created as equals, endlessly complimenting each other through understanding and/or self expression.
                  <br /><br />
                  The Pride flag is a graphical representation of how a rainbow transitions hues from red, orange, yellow, green, blue and purple. Dichotomies was a extended poster collection featuring solid stripes of color that when in order of lightness and hue captured gradience between hues. Dichotomies were meant to graphical represent sexualities, personality, and gender through time. It is a singular poster, but it represents many, there is one hue, but they are connected to many of it's "lightness and brightness."
                    <br /><br />
                  Sexual identity and gender both change thought time and space. When you were younger you probably like that band boy, now you're into that low fat, fit model. the Attraction changes. When you were younger you preferred sneakers, now you only wear combat boots; your expression changes. The expression in clothing is in a form the expression in your gender, your Friday night outfit, is probably sexier than your Monday morning, gotta get to work outfit.
                  <br /><br />
                  Posters were made on 24 in x 36 in paper, these color studies expanded into lager printed posters. The posters were 8, 4.5 inch stripes of colors that sat side by side.
                  <br /><br />
                  This idea of stripes of color, plays an ode to the original rainbow flag from the LGBT movement. A symbol that has represented the gay community since the 1970s. Gilbert Baker, the designer for the flag had assigned each color a meaning. Later the flag had evolved into a more condensed version of six colors, losing three and gaining one.
                  <br /><br />
                  However once the posters printed, gradients presented an illusion of color. Since the gradient of colors were made through Adobe Illustrator they were accurate to hue, or the words of Joseph Albers, they were accurate in "nearness" in terms of "lightness, and brightness." This nearness created a glow, or radiance where the stripes touched. Although the each bar of color was a singular color, by harmoniously standing side by side they presented a "simultaneous contrast." the effected turned out to be more obvious to the viewer when a a gradient transition from warmer to lighter. (See posters 001, 003, 022, 023, 035)
                   <br /><br />
                  The experimental project lend to the creation of 100 posters.
 
                </p>
                </div>
                <div className="inners work" style={{ backgroundImage: `url(${thesis})` }}></div>

              <div className="inners description">
                <h1>BRANDING</h1>
                <p><Link to='/works/amys'>view project</Link></p>
                <p>
                  Amy's Place is a local diner in localed in downtown Buffalo known for it's vegan/vegetarian/meat lover's menu. Most of it's menu is customizable to meet everyone's needs.
                  <br /><br />
                  From the beginning the goal was to combine the experience you get from walking into the charming diner to it's outdated stationaries.
                  <br /><br />
                  The creative process was divided into several steps, each requiring critical solutions. The color palette as well as the typefaces were chosen based on the overall brand strategy. Each creative decision was made in hopes of company growth and recognition
                </p>
                </div>
                <div className="inners work" style={{ backgroundImage: `url(${amys})` }}></div>

              <div className="inners description">
                <h1>NEWSPAPER DESIGN</h1>
                <p><Link to='/works/spectrum'>view project</Link></p>
                <p>
                  The Spectrum is an independent student publication at the University at Buffalo campus.
                  <br /><br />
                  It began it's publication in 1950, it's student run till this day with a full staff of incredible and enthusiastic writers, editors, photographers, advertisers, along with a amazing creative desk that was my second home.
                  As part of the creative desk we worked closely with writers and photographers to coordinate three issues a week during the annual school year.
                  <br /><br />
                  Full version PDFs are posted on issuu consistently they can be viewed here
                  (Some pages include ads, these are NOT created by me)
                  <br /><br />
                  These issues feature cover designs, profiles, infographs, with designs made by, or co-created by me.
                  <br /><br />
                  <a href="http://www.ubspectrum.com/">The Spectrum</a>
                </p>
                </div>
                <div className="inners work" style={{ backgroundImage: `url(${spectrum})` }}></div>

                <div className="inners description">
                  <h1>uLog</h1>
                  <p>
                    A "U" friendly digital space to allow it's user to express your "U"-ness. A blog that allows you to upload snippets of your life and both with other over stuff you love.<br />
                  <br />
                    This is an Express.js project. Deployed on Heroku
                    <br />
                    <br />
                    <a href="https://ulogin.herokuapp.com/posts">Heroku</a>
                    <br />
                    <a href="https://github.com/knnyczr/uLog">GitHub</a>
                  </p>
                </div>
                <div className="work" style={{ backgroundImage: `url(${ulog})` }}></div>

                <div className="inners description">
                  <h1>I love Hue</h1>
                  <p>
                    I love hue is the original single player game that makes puzzles out of gradients. This game is a clone of called HueClone. At the beginning of the level, the player is presented with a board made up of tiles closely spaced together. Each tile has an individual color that together with it's siblings make gradient. The board then is re-arranged and player has to recreate that gradient.
                    <br />
                    <br />
                    <a href="http://i-love-hue.com/">I love Hue</a><br />
                    <a href="https://github.com/knnyczr/I-love-Hue">GitHub</a>
                  </p>
                </div>
                <div className="inners work" style={{ backgroundImage: `url(${hue})` }}></div>

                <div className="inners description">
                  <h1>Pal Et</h1>
                  <p>
                    This is an app for developers and designers to learn about colors, and color relationships through palettes. The app will generate a palette from an API call, the user will be able to then add the palette to a public "collection" and/or print it to get a printed version of the palette.
                    When generating palettes, the user will also be able to lock in a color and hit randomize again, giving the user a new palette with the same locked color.
                    <br />
                    <br />
                    This project uses React.js as the front end framework
                    <br /> and Express.js as it's back end server.
                    <br /><br />
                    <a href="https://github.com/knnyczr/Pal_et">GitHub</a>
                  </p>
                </div>
                <div className="inners work last" style={{ backgroundImage: `url(${palet})` }}></div>
        </div>
      </div>
    )
  }
}
