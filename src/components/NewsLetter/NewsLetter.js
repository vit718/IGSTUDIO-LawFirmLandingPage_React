import React from 'react';
//styles and assets
import "./NewsLetter.css"
import "../../commonStyles.css";

const NewsLetter = () => {
    return (
        <section className='common-padding newsLetter-wrapper'>
            <section className='newsLetter'>
            <h2 className='common-h2'>Subscribe Our Newsletter</h2>
            <form onSubmit={e=> e.preventDefault()} className='newsLetterForm'>
                <input placeholder='Name' className='newsLetter-input1'/>
                <input placeholder='Email'/>
                <button type="submit">send</button>
            </form></section>

        </section>
    );
};

export default NewsLetter;