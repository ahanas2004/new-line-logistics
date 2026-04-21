// SeaFreight.jsx
import ServiceDetail from '../../components/ServiceDetail'
export default function SeaFreight() {
  return <ServiceDetail
    icon="🚢"
    title="Sea Freight"
    subtitle="FCL & LCL ocean freight services connecting to over 150 ports worldwide with competitive rates."
    description={[
      "NEXL's sea freight division offers comprehensive ocean freight services, covering both Full Container Load (FCL) and Less than Container Load (LCL) shipments. Our partnerships with leading shipping lines ensure competitive rates and reliable schedules.",
      "With connections to over 150 ports worldwide, we manage the entire journey — from port of origin to final destination — including all documentation, customs formalities, and inland transportation.",
    ]}
    features={[
      { icon: '📦', title: 'FCL Services', desc: '20ft, 40ft, 40HC, and special containers for full loads.' },
      { icon: '🔀', title: 'LCL Services', desc: 'Groupage consolidation for smaller shipments.' },
      { icon: '📡', title: 'Real-time Tracking', desc: 'Live shipment visibility from origin to destination.' },
      { icon: '📄', title: 'Full Documentation', desc: 'Bill of Lading, cargo insurance, and customs filings.' },
      { icon: '🌐', title: '150+ Ports', desc: 'Global network covering all major trade lanes.' },
      { icon: '⏱️', title: 'Reliable Schedules', desc: 'Weekly sailings on all major routes.' },
    ]}
    process={[
      { title: 'Booking', desc: 'Submit shipment details and confirm space on your chosen vessel.' },
      { title: 'Documentation', desc: 'We prepare all shipping documents and customs declarations.' },
      { title: 'Loading', desc: 'Cargo is inspected, packed, and loaded at origin port.' },
      { title: 'Transit', desc: 'Live tracking throughout the ocean voyage.' },
      { title: 'Delivery', desc: 'Customs clearance and final delivery at destination.' },
    ]}
    highlights={[
      { icon: '🚢', value: '150+', label: 'Ports Served' },
      { icon: '🌐', value: '80+', label: 'Countries' },
      { icon: '📦', value: 'FCL+LCL', label: 'All Container Types' },
      { icon: '📡', value: '24/7', label: 'Tracking' },
    ]}
  />
}
