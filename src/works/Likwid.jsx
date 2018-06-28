import React from 'react';
import '../css/Likwid.css';
import lander from '../images/likwid/likwid_lander.gif';
import postercards from '../images/likwid/likwid_lander_4.png';
import lander2 from '../images/likwid/likwid_lander_2.png';
import lander3 from '../images/likwid/likwid_lander_3.jpg';
import lander5 from '../images/likwid/likwid_lander_5.gif';
import lander6 from '../images/likwid/likwid_lander_6.gif';
import boxes from '../images/likwid/package_2.png';
import cards from '../images/likwid/businesscards.png';
import palette from '../images/likwid/likwid_color.jpg';
import tape from '../images/likwid/tape_packaging.jpg';
import hero from '../images/LIKWID.png';
import bottles from '../images/likwid/likwid.png';
// import pineberry from '../images/likwid/pineberry_bottle.png';
// import sweetrasphberry from '../images/likwid/sweetrasphberry.png';
// import apples from '../images/likwid/likwid_apples.png';
// import bottles from '../images/likwid/likwid_bottles.png';
// import oranges from '../images/likwid/likwid_oranges.png';
// import pineapples from '../images/likwid/likwid_pineapple.png';


export default function Likwid(){
  return(
    <div className="wrapper">
      <div className="innerlikwid">
          <div className="aboutlikwid">
            LIKWID is a fictional cold press bottled juice company.
            The creative process was divided into several steps, each requiring critical solutions.
            The color palette as well as the typefaces were chosen based on the overall brand strategy.
            Each creative decision was made in hopes of company growth and recognition
          </div>
          <div className="likwidcontent">
            {/* <div className="likwidhero">
                <div className="herolikwidimages" style={{ backgroundImage: `url(${apples})` }}></div>
                <div className="herolikwidimages" style={{ backgroundImage: `url(${oranges})` }}></div>
                <div className="herolikwidimages" style={{ backgroundImage: `url(${pineapples})` }}></div>
                <div className="herolikwidimages" style={{ backgroundImage: `url(${bottles})` }}></div>
            </div> */}
            <div className="herolikwid" style={{ backgroundImage: `url(${hero})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${lander})` }}></div>
            <div className="landerads" style={{ backgroundImage: `url(${postercards})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${cards})` }}></div>
            <div className="landerads" style={{ backgroundImage: `url(${lander3})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${lander6})` }}></div>
            <div className="landerads" style={{ backgroundImage: `url(${lander2})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${lander5})` }}></div>
            <div className="likwidimages" style={{ backgroundImage: `url(${boxes})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${palette})` }}></div>
            <div className="likwidimages" style={{ backgroundImage: `url(${tape})` }}></div>
            <div className="lander" style={{ backgroundImage: `url(${bottles})` }}></div>
          </div>
      </div>
    </div>
  )
}
