import ServiceDetail from '../../components/ServiceDetail'
export default function CustomsClearance() {
  return <ServiceDetail
    icon="🗂️"
    title="Customs Clearance"
    subtitle="Expert licensed CHA services — IEC, Bill of Entry, duty drawback, and complete compliance handling."
    description={[
      "NEXL operates with a fully licensed, in-house Customs House Agent (CHA) team — giving us unmatched control over the customs clearance process. We handle both import and export customs across all major Indian ports and airports.",
      "From IEC registration and Bill of Entry filing to duty drawback claims and DGFT compliance, our customs experts ensure your cargo clears without delays, penalties, or surprises.",
    ]}
    features={[
      { icon: '🏛️', title: 'Licensed CHA', desc: 'In-house licensed Customs House Agent for faster processing.' },
      { icon: '📋', title: 'BOE Filing', desc: 'Import and export Bill of Entry preparation and filing.' },
      { icon: '💸', title: 'Duty Drawback', desc: 'Expert handling of duty drawback claims and refunds.' },
      { icon: '🆔', title: 'IEC Support', desc: 'Importer Exporter Code registration assistance.' },
      { icon: '📊', title: 'DGFT Compliance', desc: 'Licensing, permits, and foreign trade policy compliance.' },
      { icon: '⚡', title: 'Fast Clearance', desc: 'Priority handling to minimize port detention charges.' },
    ]}
    process={[
      { title: 'Document Check', desc: 'Verify all shipping documents and commercial invoices.' },
      { title: 'Classification', desc: 'HS code classification and duty rate determination.' },
      { title: 'BOE Filing', desc: 'Electronic filing with Indian Customs (ICEGATE).' },
      { title: 'Assessment', desc: 'Duty payment and customs examination coordination.' },
      { title: 'Out-of-Charge', desc: 'Obtain out-of-charge and release cargo.' },
    ]}
    highlights={[
      { icon: '🏛️', value: 'Licensed', label: 'In-house CHA' },
      { icon: '⚡', value: '24hrs', label: 'Avg. Clearance' },
      { icon: '📋', value: '5000+', label: 'BOEs Filed' },
      { icon: '💸', value: '100%', label: 'Compliance Rate' },
    ]}
  />
}
