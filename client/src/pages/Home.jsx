import React from 'react'
import About from './About'
import Hero from '../components/Hero'
import Products from './products/ProductsClient'
import Contact from './Contact'
import ProductsClient from './products/ProductsClient'
import Consulting from './Consulting'
import ServicesPage from './services/ServicesPage'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <ProductsClient/>
            <ServicesPage/>
            <Consulting/>
            <Contact/>
        </>
    )
}

export default Home
