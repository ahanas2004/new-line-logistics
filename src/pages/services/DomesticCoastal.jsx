import ServiceDetail from '../../components/ServiceDetail'
export default function DomesticCoastal() {
  return <ServiceDetail
    icon="🛳️"
    title="Domestic & Coastal"
    subtitle="Pan-India surface and coastal shipping connecting all major ports and inland destinations."
    description={[
      "NEXL's domestic logistics network covers every corner of India — by road, rail, and coastal shipping. Whether you need to move cargo between Chennai and Mumbai, or require a cross-country surface transport solution, our pan-India network delivers.",
      "Our coastal shipping service offers an economical and environmentally friendly alternative to road transport for bulk and containerized cargo along India's extensive coastline, connecting all major ports from Kandla to Kolkata.",
    ]}
    features={[
      { icon: '🇮🇳', title: 'Pan-India Coverage', desc: 'Surface transport to every Indian state and territory.' },
      { icon: '🛳️', title: 'Coastal Shipping', desc: 'Scheduled coastal vessels on all major Indian routes.' },
      { icon: '🚛', title: 'FTL & LTL', desc: 'Full truckload and part-load options available.' },
      { icon: '🚂', title: 'Rail Freight', desc: 'CONCOR and private rail container services.' },
      { icon: '🏭', title: 'Warehousing', desc: 'Strategically located bonded and open warehouses.' },
      { icon: '💰', title: 'Competitive Rates', desc: 'Volume-based pricing for regular shippers.' },
    ]}
    process={[
      { title: 'Pickup', desc: 'Collection from origin with pre-carriage documentation.' },
      { title: 'Mode Selection', desc: 'Road, rail, or coastal selected for best cost/time.' },
      { title: 'Transit', desc: 'Tracked movement across India\'s transport network.' },
      { title: 'Delivery', desc: 'Final delivery with proof-of-delivery documentation.' },
    ]}
    highlights={[
      { icon: '🇮🇳', value: '28+', label: 'States Covered' },
      { icon: '🏭', value: '15+', label: 'Ports Connected' },
      { icon: '🚛', value: '500+', label: 'Fleet Partners' },
      { icon: '📦', value: '10000+', label: 'Domestic Moves' },
    ]}
    img="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
  />
}
