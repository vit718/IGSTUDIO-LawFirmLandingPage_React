import React from 'react';
import "./Card.css";

const Card = props => {
    const { icon, name, sectionType } = props;
    return (
        <section className='card'>
            <span className='iconWrapper'>
                {
                sectionType === "about"
                ?
                    <img src={icon} alt={`${name} icon`} className='giftImg'/>
                :
                    <img src={icon} alt={`${name} icon`} className='personImg'/>
                }
            </span>
            <span className='cardHead'>{name}</span>
            {sectionType !== "about" ? <span className='cardSub-head'>CEO of Hunt</span> : null}
            <p className='cardDesc'>
                Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia
                consequatduis enim velit mollit Exer.
            </p>
            {sectionType === "about" ? <button className='cardButton'>Read More</button> : null}
        </section>
    );
};

export default Card;