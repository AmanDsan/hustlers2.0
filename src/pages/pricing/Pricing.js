import React from 'react';
import Style from './Pricing.module.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Pricing() {
    return (
        <>
        <Navbar/>
        <div className={Style.main_div}>
            <div  className={Style.content}>
                <h1> <span>Special Offers</span> Get It Now For Your Health </h1>
                <p>Time and health are two precious assets that we don't recognize and appreciate until they have been depleted</p>
            </div>
            <div className={Style.p_table}>
                <div className={Style.div_1}>
                    <h1>Weekend Pass</h1>
                    <h2>INR 200</h2>
                    <span>Unlimited Yoga Classes</span> <br />
                    <span>Aerobics</span> <br />
                    <span>Strength Training</span> <br />
                    <button>SELECT PLAN</button>
                </div>
                <div className={Style.div_2}>
                    <h1>Monthly Pass</h1>
                    <h2>INR 700</h2>
                    <span>Unlimited Yoga Classes</span>  <br />
                    <span>Aerobics, Dance</span>  <br />
                    <span>Strength & CrossFit Training</span>  <br />
                    <button>SELECT PLAN</button>
                </div>
                <div className={Style.div_3}>
                    <h1>Yearly Pass</h1>
                    <h2>INR 7500</h2>
                    <span>Unlimited Yoga Classes</span>  <br />
                    <span>Aerobics, Dance, Jujutsu</span>  <br />
                    <span>Strength Training & CrossFit Training</span>  <br />
                    <button>SELECT PLAN</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}