import IndustryDetail from '../../components/IndustryDetail'
export default function OilGas() {
  return <IndustryDetail
    icon="⚙️"
    title="Oil & Gas"
    subtitle="Specialized freight solutions for upstream, midstream, and downstream energy sector equipment."
    description={[
      "The oil and gas sector demands logistics partners who understand the complexity of moving heavy equipment, hazardous materials, and critical spare parts to remote locations — often on tight operational schedules.",
      "NEXL provides project cargo, ODC transport, dangerous goods handling, and expedited freight services specifically designed for oil & gas operations — from offshore platforms to refinery equipment installations.",
    ]}
    challenges={[
      "Transporting oversized drilling equipment and subsea components.",
      "Dangerous goods (DG) classification and IMO/DGR-compliant handling.",
      "Remote delivery to offshore platforms and onshore field locations.",
      "Urgent AOG (Aircraft on Ground) style expediting for critical spare parts.",
      "ATA Carnet and temporary import/export documentation for equipment.",
    ]}
    solutions={[
      { icon: '🏗️', title: 'Heavy Equipment', desc: 'ODC and project cargo for rigs, wellheads, and modules.' },
      { icon: '⚠️', title: 'Dangerous Goods', desc: 'IMDG and DGR-certified handling for hazmat cargo.' },
      { icon: '⚡', title: 'AOG Expediting', desc: 'Round-the-clock critical spare parts air freight.' },
      { icon: '🛳️', title: 'Offshore Logistics', desc: 'Supply vessel coordination for platform deliveries.' },
      { icon: '📄', title: 'ATA Carnet', desc: 'Temporary export/import documentation for field equipment.' },
      { icon: '🗺️', title: 'Remote Delivery', desc: 'Last-mile logistics to remote field locations.' },
    ]}
    stats={[
      { icon: '⚙️', value: '300+', label: 'O&G Projects' },
      { icon: '⚖️', value: '1000T+', label: 'Heaviest Single Cargo' },
      { icon: '🌐', value: '25+', label: 'Countries' },
      { icon: '⚡', value: '24/7', label: 'Emergency Support' },
    ]}
    img="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80"
  />
}
