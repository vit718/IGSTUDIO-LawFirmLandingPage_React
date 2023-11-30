import React from 'react';
//styles and assets
import "./About.css";
import "../../commonStyles.css";
import giftIcon from "../../assets/gift.svg";
const About = () => {

    //functions
    const displayCards = ()=>{
        let arr = [];

        for(let i=0; i<3; i++){
            arr.push(
                <section className='whyChooseUsCard'>
                    <span className='iconContainer'>
                        <img src={giftIcon} alt='gift icon'/>
                    </span>
                    <span className='cardHead'>98% Success Rate</span>
                    <p className='cardDesc'>
                        Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia
                        consequatduis enim velit mollit Exer.
                    </p>
                    <button className='cardButton'>Read More</button>
                </section>
            )
        }
        return arr;
    }
    return (
        <section className='about common-padding' id='about'>
            <article className='aboutIntro'>
                <h2>Let’s Introduce Ourself</h2>
                <div className='introPartition'></div>
                <section className='criminalLawyer'>
                    <h3>Criminal Lawyer</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
                </section>
            </article>
            <article className='whyChooseUs'>
                <h2>Why Choose us?</h2>
                <section className='whyChooseUsCard-wrapper'>
                    {displayCards()}
                </section>
            </article>
        </section>
    );
};

export default About;