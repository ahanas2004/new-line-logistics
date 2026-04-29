import IndustryDetail from '../../components/IndustryDetail'
export default function Engineering() {
  return <IndustryDetail
    icon="🔧"
    title="Engineering"
    subtitle="Precision logistics for machinery, industrial equipment, and manufactured goods worldwide."
    description={[
      "Engineering goods demand careful handling, precise documentation, and an understanding of technical specifications. NEXL supports manufacturers and traders of industrial machinery, construction equipment, machine tools, and fabricated steel products.",
      "Whether you're exporting CNC machines, importing industrial boilers, or shipping fabricated steel structures, our engineering logistics team ensures your cargo is handled with the care and compliance it deserves.",
    ]}
    challenges={[
      "Heavy and oversized machinery requiring special equipment for loading/unloading.",
      "Technical documentation including inspection certificates, test reports, and CE marking.",
      "Break-bulk shipping for components that cannot be containerized.",
      "Anti-dumping duties and specific HS code classification complexities.",
      "Installation-site delivery with craneage coordination.",
    ]}
    solutions={[
      { icon: '🏭', title: 'Machinery Freight', desc: 'Specialist handling for industrial machinery of all sizes.' },
      { icon: '📋', title: 'Tech Documentation', desc: 'Test reports, inspection certificates, and compliance docs.' },
      { icon: '🚢', title: 'Break-bulk', desc: 'Flat-rack, open-top, and break-bulk vessel solutions.' },
      { icon: '🔍', title: 'Pre-shipment Inspection', desc: 'Coordination with inspection agencies at origin.' },
      { icon: '🏗️', title: 'Site Delivery', desc: 'Craneage and rigging coordination at destination.' },
      { icon: '💰', title: 'Duty Optimization', desc: 'EPCG, advance authorization, and duty exemption schemes.' },
    ]}
    stats={[
      { icon: '🔧', value: '3000+', label: 'Engineering Shipments' },
      { icon: '⚖️', value: '200T', label: 'Max Single Piece' },
      { icon: '🌐', value: '45+', label: 'Export Markets' },
      { icon: '📋', value: '100%', label: 'Customs Compliance' },
    ]}
    img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  />
}
