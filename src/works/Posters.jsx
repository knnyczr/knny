import React from 'react';
import '../css/posters.css';

export default function Posters(props) {
  let posterdisplays = props.displays
    return(
      <div className="wrapper">
        <div className="innerposters">
        <div className="aboutposters">
          One poster everyday for a year to develop aesthetics,
          refine story telling, and share beautiful design.
          <br />
          <br />
          Each have their own narrative, a cross between fantasy and reality.
          Some created overlap and combine to make an overarching theme, they create mini series.
          All posters were created using Photoshop, and Illustrator.
          I throughout the year I felt inspired by my daily, political, and musical climate.
          I combine photography (provided by unsplash) typograpghy, and color creating unique narrative.
          <br />
          <br />
          Free download available of all the Hi-Def posters, perfect home screen for your iPhone or IPad.
          <br />
          <br />
          Prints and other printed media available at Society6
          Go show off that new phone case or free wallpaper
          (tap and hold to save a poster)
        </div>
        <div className="posterscontent">
          {
            posterdisplays.map((d,i) => {
              // console.log(d)
              return <div key={i} className="posterclass" style={{ backgroundImage: `url(${d.link})` }}></div>
            })
          }
        </div>
      </div>
      </div>
    )
}
