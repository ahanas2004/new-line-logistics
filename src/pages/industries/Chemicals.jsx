import IndustryDetail from '../../components/IndustryDetail'
export default function Chemicals() {
  return <IndustryDetail
    icon="🧪"
    title="Chemicals"
    subtitle="IMDG and IATA DGR-compliant logistics for hazardous and non-hazardous chemical cargo."
    description={[
      "Chemical logistics requires specialized knowledge of IMDG (International Maritime Dangerous Goods) and IATA Dangerous Goods Regulations, combined with strict adherence to environmental and safety standards.",
      "NEXL's chemicals logistics team handles everything from bulk liquid chemicals and industrial gases to agrochemicals and specialty fine chemicals — with full regulatory compliance, proper documentation, and trained handling personnel at every stage.",
    ]}
    challenges={[
      "IMDG/IATA DGR classification and proper labeling of hazardous goods.",
      "Segregation requirements — incompatible chemicals cannot be co-loaded.",
      "Specialized ISO tank containers and flexibag solutions for liquid bulk.",
      "REACH compliance and Safety Data Sheet (SDS) documentation for exports to EU.",
      "Port authority restrictions and carrier acceptance of DG cargo.",
    ]}
    solutions={[
      { icon: '⚠️', title: 'DG Compliance', desc: 'Full IMDG and IATA DGR-compliant packing and documentation.' },
      { icon: '🧴', title: 'ISO Tanks', desc: 'Liquid bulk chemicals in ISO tank containers.' },
      { icon: '📋', title: 'SDS Management', desc: 'Safety Data Sheet and REACH documentation handling.' },
      { icon: '🔀', title: 'Segregation', desc: 'Expert cargo segregation to prevent incompatible loads.' },
      { icon: '🏭', title: 'Chemical CFS', desc: 'Specialized container freight stations for chemical goods.' },
      { icon: '🌡️', title: 'Temperature Control', desc: 'Heated or refrigerated containers for sensitive chemicals.' },
    ]}
    stats={[
      { icon: '🧪', value: '4000+', label: 'Chemical Shipments' },
      { icon: '⚠️', value: '9', label: 'DG Classes Handled' },
      { icon: '🌐', value: '55+', label: 'Countries' },
      { icon: '✅', value: '0', label: 'Safety Incidents' },
    ]}
  />
}
