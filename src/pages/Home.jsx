import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Partners from './Partners'
import ContactCTA from './ContactCTA'
import ContactForm from './ContactForm'

const Home = () => {
  return (
    <>
    <Hero />
    <Services />
    <WhyChooseUs />
    {/* <Partners  */}
    <ContactCTA />
    <ContactForm />
    </>
  )
}

export default Home
