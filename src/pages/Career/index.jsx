import React from 'react'
import Hero from '../../components/Career/Hero'
import SectionCard from '../../components/Career/SectionCard'
import Footer from "../../components/Footer"
import siteData from '../../data/siteData'

const Career = () => {
    return (
        <>
            <Hero />
            <SectionCard />
            <Footer data={siteData.footer} />
        </>
    )
}

export default Career