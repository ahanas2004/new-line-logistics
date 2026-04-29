import IndustryDetail from '../../components/IndustryDetail'
export default function Retail() {
  return <IndustryDetail
    icon="🛒"
    title="Retail & E-commerce"
    subtitle="Fast, flexible cross-border logistics solutions for retailers and e-commerce businesses of all sizes."
    description={[
      "E-commerce and retail supply chains demand speed, flexibility, and cost efficiency. NEXL provides tailored freight solutions — from bulk import shipments to individual cross-border parcels — designed to meet the fast-moving demands of online retail.",
      "Our dedicated e-commerce logistics team understands customs de minimis thresholds, duty management, returns handling, and the specific documentation requirements for marketplace platforms like Amazon, Flipkart, and international equivalents.",
    ]}
    challenges={[
      "Managing high-volume, high-SKU import shipments on tight timelines.",
      "Customs duty optimization and de minimis threshold management.",
      "Returns logistics and cross-border reverse supply chain management.",
      "Last-mile delivery coordination in destination countries.",
      "Peak season capacity management for holiday and sale periods.",
    ]}
    solutions={[
      { icon: '📦', title: 'Bulk Import', desc: 'FCL and LCL for large inventory replenishment shipments.' },
      { icon: '⚡', title: 'Express Cross-border', desc: 'Air freight for fast-moving consumer goods.' },
      { icon: '💰', title: 'Duty Management', desc: 'Classification optimization to minimize landed costs.' },
      { icon: '↩️', title: 'Returns Handling', desc: 'Reverse logistics and re-export processing.' },
      { icon: '📊', title: 'SKU Tracking', desc: 'Item-level tracking for multi-SKU shipments.' },
      { icon: '🗓️', title: 'Peak Planning', desc: 'Dedicated capacity during sale seasons.' },
    ]}
    stats={[
      { icon: '🛒', value: '20000+', label: 'Retail Shipments' },
      { icon: '📦', value: '1M+', label: 'Units Moved' },
      { icon: '⚡', value: '48hrs', label: 'Express Delivery' },
      { icon: '🌐', value: '50+', label: 'Destination Markets' },
    ]}
    img="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
  />
}
