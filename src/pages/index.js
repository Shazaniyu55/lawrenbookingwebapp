import AdainNavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Layouts from '../../components/layout'
import Hero from '../../components/hero'
import Foot2 from '../../components/foot2'
import Getpostal from '../../components/postal'
import Community from '../../components/hero2'
import Hero3 from '../../components/hero3'
import Hero4 from '../../components/hero4'
import Services from '../../components/service'
import Testimonials from '../../components/testimonials'
import HomeTeam from '../../components/homeTeam'
import Hero6 from '../../components/hero6'
import Faq from '../../components/faq'
import Hero5 from '../../components/hero5'


export default function Home() {
  return (
    <>
    <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
      <Hero/>
      <Getpostal/>
      <Community/>
      <Hero3/>
      <Hero4/>
      <Services/>
      <Testimonials/>
      <HomeTeam/>
      <Hero6/>
      <Faq/>
      <Hero5/>
    </Layouts>
    <Foot2/>
    </>
  )
}
