import React from 'react';
import './AboutProject.css';
import '../../vendor/normalize.css';

const AboutProject = (props) => {
    return (
        <section className='aboutproject__container'>
            <header className='aboutproject__header'>
                <h2 className='aboutproject__title'>О проекте</h2>
                <div className='aboutproject__line' />
            </header>
            <main className='aboutproject__main'>
                <div className='aboutproject__stages'>
                    <h2 className='aboutproject__diploma-stages'>
                        Дипломный проект включал 5 этапов</h2>
                    <p className='aboutproject__description'>
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности
                        и финальные доработки.</p>
                    <div className='aboutproject__backend-container'>
                        <p className='aboutproject__backend-week'>1 неделя</p>
                        <div className='aboutproject__backend-week-line'></div>
                    </div>
                    <p className='aboutproject__backend'>Back-end</p>
                </div>
                <div className='aboutproject__weeks'>
                    <h2 className='aboutproject__diploma-weeks'>
                        На выполнение диплома ушло 5 недель
                    </h2>
                    <p className='aboutproject__deadlines'>
                        У каждого этапа был мягкие и жётский дедлайн,
                        которые нужно было соблюдать,
                        чтобы успешно защититься.</p>
                        <p className='aboutproject__frontend-week'>4 недели</p>                       
                    <p className='aboutproject__frontend'>Front-end</p>
                </div>
            </main>
        </section>
    )
}

export default AboutProject;
