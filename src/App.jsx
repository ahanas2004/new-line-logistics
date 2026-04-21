import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SeaFreight from './pages/services/SeaFreight'
import AirFreight from './pages/services/AirFreight'
import LCLConsolidation from './pages/services/LCLConsolidation'
import CustomsClearance from './pages/services/CustomsClearance'
import DoorToDoor from './pages/services/DoorToDoor'
import ProjectCargo from './pages/services/ProjectCargo'
import DomesticCoastal from './pages/services/DomesticCoastal'
import Industries from './pages/Industries'
import AutomotiveIndustry from './pages/industries/Automotive'
import PharmaIndustry from './pages/industries/Pharma'
import OilGasIndustry from './pages/industries/OilGas'
import RetailIndustry from './pages/industries/Retail'
import EngineeringIndustry from './pages/industries/Engineering'
import ChemicalsIndustry from './pages/industries/Chemicals'
import Contact from './pages/Contact'
import GetQuote from './pages/GetQuote'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sea-freight" element={<SeaFreight />} />
        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/services/lcl-consolidation" element={<LCLConsolidation />} />
        <Route path="/services/customs-clearance" element={<CustomsClearance />} />
        <Route path="/services/door-to-door" element={<DoorToDoor />} />
        <Route path="/services/project-cargo" element={<ProjectCargo />} />
        <Route path="/services/domestic-coastal" element={<DomesticCoastal />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/automotive" element={<AutomotiveIndustry />} />
        <Route path="/industries/pharmaceuticals" element={<PharmaIndustry />} />
        <Route path="/industries/oil-gas" element={<OilGasIndustry />} />
        <Route path="/industries/retail-ecommerce" element={<RetailIndustry />} />
        <Route path="/industries/engineering" element={<EngineeringIndustry />} />
        <Route path="/industries/chemicals" element={<ChemicalsIndustry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
      </Routes>
      <Footer />
    </Router>
  )
}
