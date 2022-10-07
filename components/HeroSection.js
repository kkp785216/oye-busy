import React from 'react'

const HeroSection = ({city}) => {

  return (
    <div>
      {city && <div className='relative text-[#E7E7E7]'>
        <img className='w-full' src={city.heroSection.webBanner} alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex'>
          <div className="w-[56%]"></div>
          <div className="w-[44%] flex justify-center flex-col">
              <span className='uppercase text-[clamp(12.3096px,1.1083vw,21.2796px)] mb-[clamp(16px,1.61458vw,31px)] tracking-[0.305em]'>{city.heroSection.title}</span>
              <h2 className='text-[clamp(16px,2.062vw,39.5974px)] mb-[clamp(16px,1.25vw,24px)] max-w-[480px] font-["Montserrat",sans-seri] font-semibold'>{city.heroSection.heading}</h2>
              <p className='text-[clamp(13.9272px,0.7253vw,24.0759px)] mb-[clamp(6px,2.3958vw,46px)]'>{city.heroSection.description}</p>
              <div className='bg-white shadow text-black max-w-[clamp(250px,21.77vw,418px)] px-[clamp(16px,1.1979vw,23px)] py-[clamp(14px,1.6666vw,32px)]'>
                <span className='font-semibold'>Where do you need a service?</span>
                <div>

                </div>
              </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default HeroSection