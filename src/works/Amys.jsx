import React from 'react';
import '../css/Amys.css';
import hero from '../images/amys/hero.jpg';
import stationary from '../images/amys/stationary.png';
import Viewer from './Viewer'

export default function Amys(){
  return(
    <div className="wrapper">
      <div className="amysinner">
        <div className="aboutamys">
          Amy's Place is a local diner in localed in downtown Buffalo known for it's vegan/vegetarian/meat lover's menu. Most of it's menu is customizable to meet everyone's needs.
          From the beginning the goal was to combine the experience you get from walking into the charming diner to it's outdated stationaries.
          The creative process was divided into several steps, each requiring critical solutions.
          The color palette as well as the typefaces were chosen based on the overall brand strategy.
        </div>
        <div className="amyscontent">
          <div className="amysimages" style={{ backgroundImage: `url(${hero})` }}></div>
          <div className="amysimages" style={{ backgroundImage: `url(${stationary})` }}></div>
          <Viewer />
        </div>
      </div>
    </div>

  )
}
