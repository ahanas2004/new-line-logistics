import ServiceDetail from '../../components/ServiceDetail'
export default function AirFreight() {
  return <ServiceDetail
    icon="✈️"
    title="Air Freight"
    subtitle="Express and charter solutions for time-critical shipments with global airline partnerships."
    description={[
      "When speed is paramount, NEXL's air freight services deliver. We work with leading international airlines to provide express cargo solutions, ensuring your time-sensitive shipments arrive on time, every time.",
      "Our IATA-certified team handles all types of airfreight — from standard cargo and perishables to dangerous goods — managing all airway bill documentation, customs clearance, and last-mile delivery.",
    ]}
    features={[
      { icon: '⚡', title: 'Express Services', desc: 'Next-day and 2-day delivery to major global cities.' },
      { icon: '✈️', title: 'Charter Solutions', desc: 'Dedicated charters for large or urgent shipments.' },
      { icon: '🌡️', title: 'Perishable Cargo', desc: 'Temperature-controlled handling for pharma and food.' },
      { icon: '⚠️', title: 'Dangerous Goods', desc: 'IATA DGR-compliant handling for hazardous materials.' },
      { icon: '📋', title: 'Airway Bills', desc: 'Full AWB documentation and customs filing.' },
      { icon: '🏅', title: 'IATA Certified', desc: 'Fully accredited IATA freight forwarding.' },
    ]}
    process={[
      { title: 'Enquiry', desc: 'Share shipment details including dimensions and urgency.' },
      { title: 'Routing', desc: 'We identify the fastest, most cost-effective routing.' },
      { title: 'Booking', desc: 'Space reserved with preferred airline partner.' },
      { title: 'Transit', desc: 'Live airway bill tracking until arrival.' },
      { title: 'Clearance', desc: 'Destination customs clearance and final delivery.' },
    ]}
    highlights={[
      { icon: '✈️', value: '500+', label: 'Airlines Network' },
      { icon: '⚡', value: '24hrs', label: 'Express Delivery' },
      { icon: '🌐', value: '80+', label: 'Countries' },
      { icon: '📦', value: '100%', label: 'On-time Record' },
    ]}
  />
}
