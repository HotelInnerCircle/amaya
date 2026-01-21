import React from 'react'
import Header from '../loveable/Header'
import Footer from '../loveable/Footer'
import HeroSection from '../loveable/HeroSection'
import RequestForm from '../loveable/form'

export default function page() {
  return (
    <div><Header />
      <HeroSection />
      <RequestForm />
      <Footer /></div>
  )
}
