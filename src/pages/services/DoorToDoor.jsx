import ServiceDetail from '../../components/ServiceDetail'
export default function DoorToDoor() {
  return <ServiceDetail
    icon="🚚"
    title="Door-to-Door Delivery"
    subtitle="Comprehensive end-to-end cargo management from initial pick-up to final delivery at destination."
    description={[
      "NEXL's door-to-door service removes the complexity of international shipping entirely. We take charge from the moment cargo is collected at your premises, managing every leg of the journey until it arrives at the recipient's door.",
      "Our integrated approach combines inland transport, port handling, ocean or air freight, customs clearance, and last-mile delivery into a single seamless service — giving you one point of contact and full visibility throughout.",
    ]}
    features={[
      { icon: '🏭', title: 'Factory Pick-up', desc: 'Collection from your premises anywhere in India.' },
      { icon: '📦', title: 'Packing Services', desc: 'Export-standard packing and crating if required.' },
      { icon: '🛳️', title: 'International Leg', desc: 'Sea or air freight on the optimal routing.' },
      { icon: '🗂️', title: 'Customs Both Ends', desc: 'Export and import clearance fully managed.' },
      { icon: '🚚', title: 'Last-Mile Delivery', desc: 'Final delivery to consignee\'s door at destination.' },
      { icon: '📡', title: 'Full Visibility', desc: 'Single tracking platform from pick-up to delivery.' },
    ]}
    process={[
      { title: 'Collection', desc: 'Truck dispatched for pick-up at your facility.' },
      { title: 'Export CFS', desc: 'Documentation and export clearance at origin.' },
      { title: 'Freight', desc: 'Sea or air transit on chosen routing.' },
      { title: 'Import Customs', desc: 'Destination customs clearance and duties.' },
      { title: 'Last Mile', desc: 'Final delivery to consignee address.' },
    ]}
    highlights={[
      { icon: '🌐', value: '80+', label: 'Countries Covered' },
      { icon: '📡', value: '100%', label: 'Shipment Visibility' },
      { icon: '🤝', value: '1', label: 'Point of Contact' },
      { icon: '⏱️', value: '24/7', label: 'Support' },
    ]}
  />
}
