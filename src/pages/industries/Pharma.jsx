import IndustryDetail from '../../components/IndustryDetail'
export default function Pharma() {
  return <IndustryDetail
    icon="💊"
    title="Pharmaceuticals"
    subtitle="Temperature-controlled, GDP-compliant logistics for life-saving medicines and medical devices."
    description={[
      "Pharmaceutical logistics requires the highest standards of temperature control, documentation, and regulatory compliance. NEXL's pharma team is trained in Good Distribution Practice (GDP) and handles active pharmaceutical ingredients (APIs), finished formulations, clinical trial materials, and medical devices.",
      "From cold chain management to CDSCO documentation, we ensure your pharmaceutical cargo reaches its destination with full integrity, compliance, and traceability.",
    ]}
    challenges={[
      "Maintaining cold chain integrity across multiple transport legs and climate zones.",
      "Complex CDSCO, FDA, and destination country regulatory requirements.",
      "Time-sensitive shipments for clinical trials and emergency medical supplies.",
      "Serialization and track-and-trace requirements for anti-counterfeiting.",
      "Controlled substances and narcotics requiring special permits.",
    ]}
    solutions={[
      { icon: '🌡️', title: 'Cold Chain', desc: '2-8°C, -20°C, and -70°C solutions with continuous monitoring.' },
      { icon: '📋', title: 'GDP Compliance', desc: 'Full Good Distribution Practice documentation and audit trails.' },
      { icon: '⚡', title: 'Priority Handling', desc: 'Express lanes for time-critical clinical and emergency cargo.' },
      { icon: '🔍', title: 'Track & Trace', desc: 'End-to-end visibility with temperature data loggers.' },
      { icon: '🗂️', title: 'Regulatory Docs', desc: 'CDSCO, FDA, and CE documentation support.' },
      { icon: '🔒', title: 'Secure Facilities', desc: 'GDP-certified warehousing with access control.' },
    ]}
    stats={[
      { icon: '💊', value: '5000+', label: 'Pharma Shipments' },
      { icon: '🌡️', value: '100%', label: 'Cold Chain Compliance' },
      { icon: '🌐', value: '60+', label: 'Destination Countries' },
      { icon: '📋', value: '0', label: 'Compliance Failures' },
    ]}
    img="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
  />
}
