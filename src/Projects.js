import React from 'react'
import { Link } from "react-router-dom";
import './projDisp.css';

import companyLogo from './assets/casap.webp';
import companyLogo1 from './assets/utahbee.webp';
import companyLogo2 from './assets/ifishit.webp';
import companyLogo3 from './assets/domed.webp';
import companyLogo4 from './assets/nowosa.webp';
import companyLogo5 from './assets/vonwest.webp';
import companyLogo6 from './assets/liquid-screen-phone.png';
import companyLogo7 from './assets/88date2.png';



export default function Projects() {

    return (
        <div id="container2">
            <Link exact activeClassName="active" to="/">
                <p id="me-intro2" >
                    Bradley Mulick
                </p>
            </Link>
            <div className="projDisp">

                <div className="proj">
                    <a href="https:/www.utahcountybeekeepers.com">
                        <img src={companyLogo1} alt="Utah beekeepers" />
                    </a>
                </div>

                <div className="proj">
                    <a href="https://www.nowosa.com">
                        <img src={companyLogo4} alt="NowOsa" />
                    </a>
                </div>

                <div className="proj">
                    <a href="https:/www.domed-labels.com">

                        <img src={companyLogo3} alt="Domed Labels" />
                    </a>
                </div>
                <div className="proj">
                    <a href="https:/www.ifishit.com">

                        <img src={companyLogo2} alt="iFish it" />
                    </a>
                </div>
                <div className="projApp">

                    <img src={companyLogo6} alt="Liquid Money" />
                </div>
                <div className="projApp">
                    <img src={companyLogo7} alt="88 Date" />
                </div>

                <div className="proj">
                    <a href="https:/www.casap.website">
                        <img src={companyLogo} alt="Casa P" />
                    </a>
                </div>
                <div className="proj">
                    <a href="https:/www.vonwest.com">
                        <img src={companyLogo5} alt="Von West" />
                    </a>
                </div>
            </div>



        </div>
    )
}
