import React, { Component } from 'react';
import '../css/Spectrum.css';
import v64n43 from '../images/spectrum/previews/vol64no43.png'
import v64n52 from '../images/spectrum/previews/vol64no52.png'
import v64n67 from '../images/spectrum/previews/vol64no67.png'
import v64n78 from '../images/spectrum/previews/vol64no78.png'
import v65n3 from '../images/spectrum/previews/vol65no3.png'
import v65n6 from '../images/spectrum/previews/vol65no6.png'
import v65n7 from '../images/spectrum/previews/vol65no7.png'
import v65n14 from '../images/spectrum/previews/vol65no14.png'
import v65n15 from '../images/spectrum/previews/vol65no15.png'
import v65n16 from '../images/spectrum/previews/vol65no16.png'
import v65n22 from '../images/spectrum/previews/vol65no22.png'
import v65n29 from '../images/spectrum/previews/vol65no29.png'
import v65n32 from '../images/spectrum/previews/vol65no32.png'
import v65n34 from '../images/spectrum/previews/vol65no34.png'
import v65n36 from '../images/spectrum/previews/vol65no36.png'
import v65n45 from '../images/spectrum/previews/vol65no45.png'

export default class Spectrum extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div className="wrapper">
        <div className="innerspectrum">
          <div className="aboutspectrum">
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
          </div>
          <div className="spectrumcontent">
            <div className="paper" style={{ backgroundImage: `url(${v64n43})` }}><p>VOL 64 No 43</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v64n52})` }}><p>VOL 64 No 52</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v64n67})` }}><p>VOL 64 No 67</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v64n78})` }}><p>VOL 64 No 78</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n3})` }}><p>VOL 65 No 3</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n6})` }}><p>VOL 65 No 6</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n7})` }}><p>VOL 65 No 43</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n14})` }}><p>VOL 65 No 14</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n15})` }}><p>VOL 65 No 15</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n16})` }}><p>VOL 65 No 16</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n22})` }}><p>VOL 65 No 22</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n29})` }}><p>VOL 65 No 29</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n32})` }}><p>VOL 65 No 32</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n34})` }}><p>VOL 65 No 34</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n36})` }}><p>VOL 65 No 36</p></div>
            <div className="paper" style={{ backgroundImage: `url(${v65n45})` }}><p>VOL 65 No 45</p></div>

          </div>

        </div>
      </div>
    )
  }
}
