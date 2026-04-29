import ServiceDetail from '../../components/ServiceDetail'
export default function LCLConsolidation() {
  return <ServiceDetail
    icon="📦"
    title="LCL Consolidation"
    subtitle="Cost-effective weekly groupage shipments for smaller cargo volumes with hub-to-hub connectivity."
    description={[
      "NEXL's LCL (Less than Container Load) consolidation service is ideal for businesses that need to ship regularly but don't have enough cargo to fill an entire container. We consolidate your cargo with other shipments, dramatically reducing costs.",
      "With weekly departures from Chennai to all major global destinations, our LCL service offers flexibility and affordability without compromising on reliability or transit times.",
    ]}
    features={[
      { icon: '📅', title: 'Weekly Departures', desc: 'Regular fixed-day sailings to all major hubs.' },
      { icon: '💰', title: 'Cost Efficient', desc: 'Pay only for the space your cargo actually uses.' },
      { icon: '🔀', title: 'Flexible Volumes', desc: 'From 1 CBM to any size below full container.' },
      { icon: '🌐', title: 'Hub Network', desc: 'Consolidation hubs across Asia, Europe, and Americas.' },
      { icon: '🔒', title: 'Secure Handling', desc: 'Individual cargo integrity maintained throughout transit.' },
      { icon: '📄', title: 'HBL Issued', desc: 'House Bill of Lading issued for each shipment.' },
    ]}
    process={[
      { title: 'Cargo Booking', desc: 'Book space based on volume and weight of your cargo.' },
      { title: 'Stuffing', desc: 'Cargo is carefully packed and consolidated at our CFS.' },
      { title: 'Sailing', desc: 'Weekly departure on the confirmed schedule.' },
      { title: 'Destuffing', desc: 'Cargo is separated at destination hub.' },
      { title: 'Delivery', desc: 'Final delivery or port pickup arranged.' },
    ]}
    highlights={[
      { icon: '📦', value: '7', label: 'Days/Week Departures' },
      { icon: '💰', value: '30%', label: 'Average Cost Saving' },
      { icon: '🌐', value: '80+', label: 'Destination Ports' },
      { icon: '⚡', value: '48hrs', label: 'Stuffing Turnaround' },
    ]}
    img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  />
}
