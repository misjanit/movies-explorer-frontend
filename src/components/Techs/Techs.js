import React from "react";
import './Techs.css';
import '../../vendor/normalize.css';

const Techs = (props) => {
    return (
        <section className='techs__container'>
            <header className='techs__header'>
                <h3 className='techs__title'>Технологии</h3>
            </header>
            <main className='techs__main'>
                <h1 className="techs__big-caption">7 технологий</h1>
                <p className="techs__small-caption">
                    На курсе веб-разработки мы освоили технологии, 
                    которые применили в дипломном проекте.</p>
                <div className="techs__technologies">
                    <div className="techs__technology">HTML</div>
                    <div className="techs__technology">CSS</div>
                    <div className="techs__technology">JS</div>
                    <div className="techs__technology">React</div>
                    <div className="techs__technology">Git</div>
                    <div className="techs__technology">Express.js</div>
                    <div className="techs__technology">mongoDB</div>
                </div>
            </main>        
        </section>
    )
}

export default Techs;
