import IndustryDetail from '../../components/IndustryDetail'
export default function Automotive() {
  return <IndustryDetail
    icon="🚗"
    title="Automotive"
    subtitle="Specialized logistics for CKD/CBU vehicles and spare parts — precision handling for time-sensitive supply chains."
    description={[
      "The automotive industry demands zero-defect logistics. NEXL provides specialized freight solutions for Original Equipment Manufacturers (OEMs), Tier-1 suppliers, and dealers across the CKD (Completely Knocked Down), CBU (Completely Built Unit), and spare parts segments.",
      "With our dedicated automotive logistics team, we understand JIT (Just-in-Time) delivery requirements, special packaging norms, and the regulatory compliance nuances of automotive imports and exports in India.",
    ]}
    challenges={[
      "Strict JIT delivery windows with minimal tolerance for delay.",
      "Complex homologation and type approval documentation for CBU imports.",
      "High-value cargo requiring specialized packing and handling.",
      "Multi-country sourcing for CKD kits requiring consolidation expertise.",
      "DGFT and SIAM compliance requirements.",
    ]}
    solutions={[
      { icon: '🚗', title: 'CKD/CBU Handling', desc: 'Dedicated team for fully and semi-knocked-down vehicle shipments.' },
      { icon: '⏱️', title: 'JIT Delivery', desc: 'Synchronized logistics to match production schedules.' },
      { icon: '📦', title: 'Special Packaging', desc: 'OEM-approved packing standards for parts protection.' },
      { icon: '🗂️', title: 'Homologation Support', desc: 'Type approval and regulatory documentation assistance.' },
      { icon: '🔀', title: 'Parts Consolidation', desc: 'Multi-origin consolidation for spare parts supply chains.' },
      { icon: '🌐', title: 'Global OEM Network', desc: 'Established relationships with automotive manufacturing hubs.' },
    ]}
    stats={[
      { icon: '🚗', value: '10000+', label: 'Vehicles Moved' },
      { icon: '📦', value: '50000+', label: 'Parts Shipments' },
      { icon: '🌐', value: '30+', label: 'OEM Countries' },
      { icon: '⏱️', value: '99%', label: 'On-time Delivery' },
    ]}
    img="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
  />
}
