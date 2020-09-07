import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

function Home() {
    return (
        <div>
            <Hero>
                <Banner children="" title="Luxurious Rooms" subtitle="deluxe rooms starting at rs. 299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services title="Home" />
            <FeaturedRoom />
        </div>
    )
}

export default Home
