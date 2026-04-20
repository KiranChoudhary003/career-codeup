import React from 'react'
import Cover from '../../components/intership/Cover'
import Track from '../../components/intership/Track'
import Benefits from '../../components/intership/Benefits'
import Offer from '../../components/intership/Offer'
import Footer from "../../components/Footer"
import siteData from '../../data/siteData'

const Intership = () => {
    return (
        <>
            <Cover />
            <Track />
            <Benefits />
            <Offer />
            <Footer data={siteData.footer} />

        </>
    )
}

export default Intership