import ServiceDetail from '../../components/ServiceDetail'
export default function ProjectCargo() {
  return <ServiceDetail
    icon="🏗️"
    title="Project Cargo"
    subtitle="Specialists in ODC, heavy lift, and out-of-gauge cargo requiring bespoke logistics planning."
    description={[
      "Project cargo is not standard freight — it demands engineering precision, specialized equipment, and deep regulatory knowledge. NEXL's project cargo team has the expertise to handle even the most complex over-dimensional and heavy-lift shipments.",
      "From route surveys and permits to specialized vessels and cranes, we plan and execute every detail. Industries such as oil & gas, energy, mining, and construction trust NEXL to move their most critical and complex equipment safely.",
    ]}
    features={[
      { icon: '📏', title: 'ODC Cargo', desc: 'Over-dimensional cargo with special route planning.' },
      { icon: '⚖️', title: 'Heavy Lift', desc: 'Multi-hundred-tonne lifts with specialized equipment.' },
      { icon: '📐', title: 'Out-of-Gauge', desc: 'Cargo exceeding standard container dimensions.' },
      { icon: '🗺️', title: 'Route Survey', desc: 'Pre-shipment route survey and permit acquisition.' },
      { icon: '🚢', title: 'Project Vessels', desc: 'Access to MPP, heavy-lift, and ro-ro vessels.' },
      { icon: '🔧', title: 'On-site Supervision', desc: 'NEXL representatives present during critical moves.' },
    ]}
    process={[
      { title: 'Feasibility', desc: 'Technical assessment of cargo dimensions and weight.' },
      { title: 'Route Survey', desc: 'Road/port survey and permit applications.' },
      { title: 'Equipment', desc: 'Specialized transport and lifting equipment arranged.' },
      { title: 'Loading', desc: 'Supervised loading with experienced riggers.' },
      { title: 'Delivery', desc: 'Final placement at destination with full documentation.' },
    ]}
    highlights={[
      { icon: '⚖️', value: '500T+', label: 'Max Lift Handled' },
      { icon: '🌐', value: '40+', label: 'Countries' },
      { icon: '🏗️', value: '200+', label: 'Projects Delivered' },
      { icon: '✅', value: '100%', label: 'Safety Record' },
    ]}
    img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  />
}
