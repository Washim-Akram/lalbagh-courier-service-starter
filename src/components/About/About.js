import React from 'react';
import image from "../../images/banner/banner-2.jpg";
import "./About.css";

const About = () => {
    return (
        <div className ="about-section-bg">
            <div className = "container about-section-container">
                <h1 className = "text-center fw-bold about-section-title">ABOUT US</h1>
                <h2 className = "text-center fw-bold about-section-title">BUILD YOUR BODY WITH US</h2>
                <img src={image} alt="about us " className='about-us-img' />

                <p className='fst-italic fw-bold my-3'>
                We have found the best workouts from around the world and put them in one database that you can search by days per week, type of program, and much more!
                Many workouts accomplish different goals at the same time. For example, a muscle building workout will almost always help build strength at the same time. Choose the goal that is MOST important to you, and the workouts that are shown will be geared more toward your chosen goal.
                A Split Bodypart Routine means that you work different body parts on different days. For example, one workout might have you work biceps and chest on one day, then triceps and back on a different day. This is the most common type of workout program.
                </p>

                <h3 className='text-center text-success'>"YOUR SUCCESS IS OUR PASSION"</h3>


            </div>
            
        </div>
    );
};

export default About;