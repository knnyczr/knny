import React from 'react';
import '../css/thesis.css';
import hero from '../images/thesis/hero.jpg';
import lights from '../images/thesis/lights.jpg';
import dico from '../images/thesis/dico.jpg';
import one from '../images/thesis/001.png';
import three from '../images/thesis/003.png';
import eight from '../images/thesis/008.png';
import nine from '../images/thesis/009.png';
import ten from '../images/thesis/010.jpg';
import eleven from '../images/thesis/011.png';
import seventeen from '../images/thesis/017.png';
import twentytwo from '../images/thesis/022.png';
import twentythree from '../images/thesis/023.png';
import thirtyfive from '../images/thesis/035.png';


export default function Thesis(){
  return(
    <div className="wrapper">
      <div className="innerthesis">
      <div className="aboutthesis">
        THESIS PROJECT<br /><br />
        (2016)
        Mixed media
        <br />
        <br />
        Experimental sculptural work for Senior Thesis show features self made benches, seven T8 lights, and printed color gradients.
        <br />
        Humans live solely for air, food, water, sunlight, these are your physiological needs.
        In Maslow's hierarchy of needs pyramid this is at the very bottom, the base of it all.
        Followed by social belonging, esteem, self actualization, and self transcendence.
        We all want to belong to people where we are loved, to be valued, to be more, and to live on.
        <br />
        <br />
        A rainbow–the meteorological phenomenon is an illusion, caused by the reflection, refraction, and dispersion of light through water.
        Visible light is the sum of all colors.
        In the electromagnetic spectrum, light is a small fraction of the wavelength that shoots though the atmosphere, colors in visible light vary in wavelength, but the wavelength is seamless between colors.
        The continuous wavelength of light, creates a harmonious gradation between colors, as do genders and sexualities in people.
        We are all beams of light scattering, jumping, reflecting, Although sexuality and gender is not mutually exclusive.
        People are they're own color but we still stand together, created as equals, endlessly complimenting each other through understanding and/or self expression.
        <br />
        <br />
        The Pride flag is a graphical representation of how a rainbow transitions hues from red, orange, yellow, green, blue and purple. 
        Dichotomies was a extended poster collection featuring solid stripes of color that when in order of lightness and hue captured gradience between hues. 
        Dichotomies were meant to graphical represent sexualities, personality, and gender through time.
        It is a singular poster, but it represents many, there is one hue, but they are connected to many of it's "lightness and brightness."
        Sexual identity and gender both change thought time and space.
        When you were younger you probably like that band boy, now you're into that low fat, fit model, the Attraction changes.
        When you were younger you preferred sneakers, now you only wear combat boots; your expression changes.
        The expression in clothing is in a form the expression in your gender, your Friday night outfit, is probably sexier than your Monday morning, gotta get to work outfit.

        Posters were made on 24 in x 36 in paper, these color studies expanded into lager printed posters.
        The posters were 8, 4.5 inch stripes of colors that sat side by side.
        <br />
        <br />
        This idea of stripes of color, plays an ode to the original rainbow flag from the LGBT movement.
        A symbol that has represented the gay community since the 1970s. Gilbert Baker, the designer for the flag had assigned each color a meaning.
        Later the flag had evolved into a more condensed version of six colors, losing three and gaining one.

        However once the posters printed, gradients presented an illusion of color.
        Since the gradient of colors were made through Adobe Illustrator they were accurate to hue, or the words of Joseph Albers, they were accurate in "nearness" in terms of "lightness, and brightness."
        This nearness created a glow, or radiance where the stripes touched. Although the each bar of color was a singular color, by harmoniously standing side by side they presented a "simultaneous contrast."
        The effected turned out to be more obvious to the viewer when a a gradient transition from warmer to lighter. (See posters 001, 003, 022, 023, 035)
         
        The experimental project lend to the creation of 100 posters.
      </div>
      <div className="thesiscontent">
        <div className="images" style={{ backgroundImage: `url(${hero})` }}></div>
        <div className="images" style={{ backgroundImage: `url(${lights})` }}></div>
        <div className="images" style={{ backgroundImage: `url(${dico})` }}></div>

          <div className="miniposters">
            <div className="miniposter" style={{ backgroundImage: `url(${one})` }}><p>POSTER #001</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${three})` }}><p>POSTER #003</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${eight})` }}><p>POSTER #008</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${nine})` }}><p>POSTER #009</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${ten})` }}><p>POSTER #010</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${eleven})` }}><p>POSTER #011</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${seventeen})` }}><p>POSTER #017</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${twentytwo})` }}><p>POSTER #022</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${twentythree})` }}><p>POSTER #023</p></div>
            <div className="miniposter" style={{ backgroundImage: `url(${thirtyfive})` }}><p>POSTER #035</p></div>
          </div>

        <div className="images" style={{ backgroundImage: `url(${dico})` }}></div>
      </div>
    </div>
    </div>
  )
}
