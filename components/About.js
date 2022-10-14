import React from 'react'

const About = ({city}) => {
  return (
    <div className='font-["Inter",sans-seri] flex bg-[#276600] text-white items-center py-[42px]'>
        <div className="w-[56%]">
            <h3 className='text-[14.5623px,1.23994vw,23.807px] py-1 px-3 bg-[#21669D] w-fit rounded-full'>{city.banner4.title}</h3>
            <p>{city.banner4.description}</p>
        </div>
        <div className="w-[44%] flex flex-wrap m-[clamp(-0.78125vw,-0.78125vw,-15px)]">
            {city.banner4.imgs.map((e,i)=>(
                <div class='p-[clamp(4px,0.78125vw,15px)]'><img className='rounded-[6px]' key={i} src={e} alt="" /></div>
            ))}
        </div>
    </div>
  )
}

export default About