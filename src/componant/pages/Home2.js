import React from 'react'
import Preloader from '../Preloader'
import Move from '../Move'
import Navebar from '../Navebar'
import Section2 from '../Section2'
import Section3 from '../Section3'
import ScrollReveal from '../ScrollReveal'
import Section4 from '../Section4'
import Explore from '../../assests/Explor.svg'
import Explore2 from '../../assests/Explor_arrow.svg'
import { Link } from 'react-router-dom'
import FeedBack from '../FeedBack'
import Services from '../Services'

function Home2() {
  return (
    <>
      <Preloader />

      <Move FName="MAZEED" SName="CONCRETE" />
      <Section2 />


      <Section3
        texts={['Home Decor  . Handmade  . Home Decoration . ',]}
        velocity='100'
        className="custom-scroll-text"
      />
      <br />
      <br />

      {/* <div className='Scroller2'> */}
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        id="About_us"
      >
We’re a handmade home décor brand that adds a special touch to your space. With unique colors, elegant designs, and great prices, our pieces bring warmth and style to any room.

Made with care. Delivered to your door.


      </ScrollReveal>
      {/* </div> */}


      <br />
      <br />
      <br />
      <br />

      <div className='theContainer_ofProducts' >
        <h2> Our Products </h2>
        <div className='line'></div>
      </div>


      <div style={{ height: '600px', position: 'relative' }}>
        <Section4 bend={1} textColor="#141414" borderRadius={0} font='Anton' />
      </div>

      <div className='ShowAllContainer'>
        <div className='ShowMoreText'>
          <Link to='/Product' className='the_text' >  Show More </Link>
        </div>
        <div className='showMoreImage'>
          <Link to='/Product'>
            <img src={Explore} alt='MohamedMaged' className='img__1' />
            <img src={Explore2} alt='MohamedMaged' className='img__2' />
          </Link>

        </div>


      </div>
      <br />
      <br />
      <br />
      <br />

      <div className='theContainer_ofProducts' >
        <h2>What Makes Us Different</h2>
        <div className='line'></div>
      </div>

        <Services />

      <br />
      <br />
      <br />
      <br />
      <div className='theContainer_ofProducts' >
        <h2> Our Customer FeedBack </h2>
        <div className='line'></div>
      </div>


      <FeedBack />



    </>
  )
}

export default Home2