import React from 'react';
//styles and assests
import "./Testimonials.css";
import "../../commonStyles.css";
import person0 from "../../assets/person0.png"
import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
import person4 from "../../assets/person4.png"
import person5 from "../../assets/person5.png"
import person6 from "../../assets/person6.png"
import person7 from "../../assets/person7.png"
import person8 from "../../assets/person8.png"
import Carousel from '../Carousel/Carousel';

const Testimonials = () => {

    //variables
    const cardsArray = [
        {name: "jarvis cooper", icon: person0},
        {name: "devon lane", icon: person1},
        {name: "robert fox", icon: person2},
        {name: "john doe", icon: person3},
        {name: "robert pattinson", icon: person4},
        {name: "barney stinson", icon: person5},
        {name: "julia vergara", icon: person6},
        {name: "charlie harper", icon: person7},
        {name: "michael scott", icon: person8},
    ]
    return (
        <section className='testimonials common-padding'>
            <section className="testimonialsHead">
                <h2 className='common-h2'>
                    <span>What says our</span>
                    <span>happy Clients</span> 
                </h2>
                <div className='testimonialsButtons-wrapper'>
                </div>
            </section>
            <Carousel cardsArray={cardsArray} />
        </section>
    );
};

export default Testimonials;