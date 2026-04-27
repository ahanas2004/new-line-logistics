# NEXL — Newline Express Logistics Website

A full-featured React + Vite logistics website for **Newline Express Logistics (NEXL)**, Chennai.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd nexl-logistics

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build
```

---

## 📁 Project Structure

```
nexl-logistics/
├── public/
│   └── nexl_logo.jpeg          # NEXL logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navbar with dropdowns
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ServiceDetail.jsx    # Reusable service page template
│   │   └── IndustryDetail.jsx   # Reusable industry page template
│   ├── pages/
│   │   ├── Home.jsx             # Homepage with animated vehicles
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx         # Services overview
│   │   ├── Industries.jsx       # Industries overview
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── GetQuote.jsx         # 4-step quote form
│   │   ├── GetQuote.css
│   │   ├── services/
│   │   │   ├── SeaFreight.jsx
│   │   │   ├── AirFreight.jsx
│   │   │   ├── LCLConsolidation.jsx
│   │   │   ├── CustomsClearance.jsx
│   │   │   ├── DoorToDoor.jsx
│   │   │   ├── ProjectCargo.jsx
│   │   │   └── DomesticCoastal.jsx
│   │   └── industries/
│   │       ├── Automotive.jsx
│   │       ├── Pharma.jsx
│   │       ├── OilGas.jsx
│   │       ├── Retail.jsx
│   │       ├── Engineering.jsx
│   │       └── Chemicals.jsx
│   ├── App.jsx                  # Router + layout
│   ├── main.jsx
│   └── index.css                # Global styles, CSS variables, animations
├── index.html
├── vite.config.js
└── package.json
```

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — animated hero (plane, ship, truck), stats, services, why NEXL |
| `/about` | About — company story, certifications, mission, team |
| `/services` | Services overview |
| `/services/sea-freight` | Sea Freight detail |
| `/services/air-freight` | Air Freight detail |
| `/services/lcl-consolidation` | LCL Consolidation detail |
| `/services/customs-clearance` | Customs Clearance detail |
| `/services/door-to-door` | Door-to-Door detail |
| `/services/project-cargo` | Project Cargo detail |
| `/services/domestic-coastal` | Domestic & Coastal detail |
| `/industries` | Industries overview |
| `/industries/automotive` | Automotive |
| `/industries/pharmaceuticals` | Pharmaceuticals |
| `/industries/oil-gas` | Oil & Gas |
| `/industries/retail-ecommerce` | Retail & E-commerce |
| `/industries/engineering` | Engineering |
| `/industries/chemicals` | Chemicals |
| `/contact` | Contact form + details |
| `/get-quote` | 4-step interactive quote form |

---

## 🎨 Design

- **Theme**: Blue & White (inspired by Penske Logistics)
- **Primary Blue**: `#1e5bb5` / `#0f3460`
- **Accent Orange**: `#e8620a` (from NEXL logo)
- **Fonts**: Barlow Condensed (headings) + Barlow (body) — via Google Fonts
- **Animations**: Framer Motion — flying planes, sailing ships, driving trucks, scroll-triggered reveals, stat counters

## 📦 Dependencies

- `react` + `react-dom`
- `react-router-dom` — client-side routing
- `framer-motion` — animations
- `react-icons` — icon library (available for use)
- `react-intersection-observer` — scroll triggers

---

## 📞 Contact Info (as configured)

- **Address**: New No. 134, Old No. 264, 3rd Floor, Thambu Chetty Street, Mannady, George Town, Chennai – 600001
- **Phone**: +91 98848 86797
- **Email**: info@nexllogistics.com
- **Proprietor**: Mohammed Idhirish


---\n*Last updated: 2026-04-27*
