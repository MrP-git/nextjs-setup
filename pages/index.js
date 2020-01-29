import React from 'react'
import HomeLayout from "../src/components/Home/Layout";
import Hero from "../src/components/Shared/Hero";
import AboutUs from "../src/components/Home/AboutUs";
import WhyUs from "../src/components/Home/WhyUs";

export default () => (
    <HomeLayout>
        <Hero/>
        <AboutUs />
        <WhyUs />
    </HomeLayout>
);
