import React from 'react';
//styles and asses
import "./PracticeAreas.css";
import "../../commonStyles.css";

const PracticeAreas = () => {
    return (
        <section className='practiceAreas common-padding' id='practiceAreas'>
            <h2 className='common-h2'>Area of Practices</h2>
            <section className='grid'>
                <div className='gridRow row1 oddRow'>
                    <div className='gridItem gridItem1 oddItem1'>BUSINESS LAW</div>
                    <div className='gridItem gridItem2 oddItem2 squareItem'>Partnership LAW</div>
                </div>
                <div className='gridRow row2 evenRow'>
                    <div className='gridItem gridItem3 evenItem1 squareItem'>Partnership LAW</div>
                    <div className='gridItem gridItem4 evenItem2'>BUSINESS LAW</div>
                </div>
                <div className='gridRow row3 oddRow'>
                    <div className='gridItem gridItem5 oddItem1'>LANDLORD DISPUTES</div>
                    <div className='gridItem gridItem6 oddItem2 squareItem'>ELDER ABUSE</div>
                </div>
            </section>
        </section>
    );
};

export default PracticeAreas;