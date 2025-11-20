import React from 'react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import { aboutData } from '../Data'
import Services from './Services'

const About = () => {
  return (
    <>
    <PageHeader />
 <div className="w-[85%] mx-auto bg-white py-16 px-6 md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <div 
          //className=" mb-8"
          >
            <div className="flex items-center justify-start space-x-3 mb-2 md:w-[40vh]">
              <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
              <span className="w-4 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
              <span className="w-10 h-1 bg-gradient-to-r from-1-700 to-1-500 rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-3xl font-bold  text-1-900">
              {aboutData.title}
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-xl font-serif">
            {aboutData.text}
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 grid grid-cols-3 gap-4">

          {/* LEFT BIG IMAGE (column 1 spans full height) */}
          <div className="col-span-1 row-span-1">
          </div>

          {/* RIGHT TOP SMALL IMAGE */}
          <div className="col-span-2">
            {aboutData.images[1]}
          </div>

          {/* RIGHT BOTTOM SMALL IMAGE */}
          <div className="col-span-2">
            {aboutData.images[0]}
          </div>

        </div>


      </div>
    </div>
    <Services />
    </>
  )
}

export default About
