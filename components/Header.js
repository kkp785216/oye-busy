import React, { useEffect } from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from './Layout';

const Header = () => {

  // useEffect(() => {
  // const nav = document.getElementById('desktop-nav');
  // const items = Array.from(nav.children);
  // typeof window !== undefined && (window.onresize = () => {
  //   if ((items.map(e => e.offsetWidth).reduce((a, b) => a + b) - 16) > nav.offsetWidth) {
  //     console.log('hii')
  //   }
  // })
  // }, []);

  return (
    <header>
      <div className='bg-[#095296] text-white'>
        <Container>
          <div className='h-[60px] leading-[60px]'>
            <nav className='flex font-light'>
              <ul className='flex space-x-[clamp(20px,2.3885vw,45.86px)]' id='desktop-nav'>
                <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>APPLIANCES CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
                <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>HOME CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
                <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>GADGET CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
                {/* <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>HANDYMAN <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
              <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>BEAUTY CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
              <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>FITNESS CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
              <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>BUSINESS CARE <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
              <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>ALL SERVICES <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li>
              <li className=''><Link href='/'><a className='text-[15px] flex space-x-2 uppercase whitespace-nowrap items-center'>BLOG <div className="more:hidden block"><KeyboardArrowDownIcon /></div></a></Link></li> */}
              </ul>
              {/* <ul className='ml-4 relative'>
              <li>More</li>
              <ul className='leading-none absolute top-[60px] right-0 bg-white text-black shadow-lg p-5 more [&>*]:mb-4 last:mb-0'></ul>
            </ul> */}
            </nav>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header