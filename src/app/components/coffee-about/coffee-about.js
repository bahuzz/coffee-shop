import React from 'react';
import './coffee-about.sass';
import logoDark from './Beans_logo_dark.svg';

const CoffeeAbout = () => {
    return(
        <section className="c-about">
            <div className="container">
                <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="c-about__img" src="img/coffee_girl.jpg" alt="girl"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={logoDark} alt="Beans logo"></img>
                            <div className="c-about__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
        </div>
        </section>
    )
};

export default CoffeeAbout;