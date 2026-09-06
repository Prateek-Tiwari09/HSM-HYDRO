// Verified company information from https://hsmhcpl.com/
// Do not invent or modify numbers, addresses, or stats.

export const COMPANY = {
  name: "HSM Hydro Control Pvt. Ltd.",
  shortName: "HSM",
  tagline: "Complete Hydraulic Solutions for Industrial Applications",
  established: 2015,
  certification: "ISO 9001:2015",
  facilitySqft: "10,000+",
  teamCount: "25+",
  description:
    "HSM Hydro Control Pvt. Ltd. is a single-window solution for all your hydraulics requirements, providing customized hydraulic engineering, sales, and service support to organizations across India and overseas.",
  aboutLong: [
    "Incorporated in 2015, HSM Hydro Control Pvt. Ltd. is a single-window solution for all your hydraulics requirements, providing customized hydraulic engineering, sales, and service support to organizations all over India.",
    "We specialize in both closed-loop and open-loop hydraulic systems and manufacture customized power units for a wide range of industrial applications. We also have deep expertise in overhauling and repairing hydraulic pumps and motors from reputed global brands including Denison, Hagglunds, Bosch Rexroth, Danfoss, Parker, Sauer Danfoss, Eaton, Vickers, and Yuken.",
    "We also undertake the repair of hydraulic cylinders. Over the years, the HSM team has built a reputation for high-quality service and quick repair turnaround times that keep customers coming back.",
  ],
  strengths: ["Technology", "Engineering", "Quality", "Reliability", "Maintenance"],
};

export const OFFICES = [
  {
    type: "Corporate Office & Manufacturing Plant",
    address:
      "No. 6 & 7, 1st Main Road, Sri Lakshmi Industrial Estate, Thigalara Palya Main Road, Peenya 2nd Stage, Bangalore – 560058, Karnataka, India.",
    phones: ["+91-9740392560", "080-43747543"],
    emails: ["cmk@hsmhcpl.com", "sales@hsmhcpl.com"],
  },
  {
    type: "Branch Office",
    address:
      "MB House, Sy. No. 27/3, Kharadi Industrial Area, Pune – 411014, Maharashtra, India.",
    phones: ["+91-9309972184"],
    emails: ["bmhs@hsmhcpl.com"],
  },
];

export const WHATSAPP_NUMBER = "919740392560"; // from Bangalore primary phone
export const PRIMARY_PHONE = "+91 97403 92560";
export const PRIMARY_EMAIL = "sales@hsmhcpl.com";

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
  applications?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "hydraulic-components",
    name: "Hydraulic Components & Accessories",
    shortDescription:
      "Comprehensive range of hydraulic components and accessories for industrial systems.",
    description:
      "We supply a complete range of hydraulic components and accessories including fittings, O-rings, level gauges, breathers, bell housings, couplings, filters, flexible hoses, valves, accumulators, pressure gauges, manifolds, oil coolers and more.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Fittings, O-rings, Level Gauge, Breather",
      "Bell Housing & Coupling",
      "Filters, Flexible Hoses & Valves",
      "Accumulators, Pressure Gauges, Transmitters",
      "Shell & tube / plate type oil coolers",
      "Directional, Pressure, Flow & Logic Valves",
    ],
  },
  {
    slug: "hydraulic-power-unit",
    name: "Hydraulic Power Units",
    shortDescription:
      "Custom-engineered hydraulic power packs, lube oil systems and filtration systems for industrial & mobile applications.",
    description:
      "Hydraulic power packs represent complete hydraulic power units, lube oil systems, and filtration systems used in both industrial and mobile applications. Custom-designed to meet customer-specific process applications, production demands and capacity requirements.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Customized engineering for each application",
      "Closed loop and open loop systems",
      "Turnkey project delivery",
      "Performance guarantees",
      "On-site installation & commissioning",
      "Integrated lube oil and filtration options",
    ],
    specifications: [
      { label: "Tank Capacity", value: "20 – 5,000 Liters" },
      { label: "Power", value: "0.55 – 250 kW" },
      { label: "Flow Rate", value: "0.5 – 750 LPM" },
      { label: "Pressure", value: "5 – 800 BAR" },
      { label: "Material", value: "MS & SS" },
      { label: "Filtration", value: "10 – 20 Microns" },
    ],
  },
  {
    slug: "hydraulic-cylinder",
    name: "Hydraulic Cylinders",
    shortDescription:
      "Design and manufacturing of standard & servo hydraulic cylinders (single & double acting) as per ISO standards.",
    description:
      "We design and manufacture a complete range of hydraulic cylinders including servo cylinders, tie-rod type, welded construction and mill-type cylinders, all built to ISO standards. Cylinders are available in single and double acting configurations with custom mounting and stroke options.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Servo cylinders for precision applications",
      "Tie-rod type with 10 mounting options",
      "Welded construction & mill type",
      "Single and double acting",
      "Custom strokes and bores available",
      "Spare seal kits & mounting accessories",
    ],
    specifications: [
      { label: "Tie Rod Bore", value: "Ø25 – Ø200 mm" },
      { label: "Mill Type Bore", value: "Ø25 – Ø500 mm" },
      { label: "Max Stroke (Mill)", value: "Up to 5,000 mm" },
      { label: "Standard Pressure", value: "210 / 350 kg/cm²" },
      { label: "High Pressure Range", value: "550 / 700 kg/cm²" },
      { label: "Servo Speed", value: "Up to 250 mm/s" },
    ],
  },
  {
    slug: "hydraulic-test-bench",
    name: "Hydraulic Test Benches",
    shortDescription:
      "High-pressure hydraulic test benches for testing industrial valves, pumps, motors and cylinders. Customized as required.",
    description:
      "We offer high-pressure hydraulic test benches used to test industrial valves and other hydraulic components. We also build fully customized test benches to match client-specific requirements. Our test benches are simple, robust and reliable.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Suitable for valve, pump, motor & cylinder testing",
      "High pressure capability",
      "Custom configurations available",
      "Data logging options",
      "Robust, reliable design",
      "Factory acceptance testing",
    ],
    specifications: [
      { label: "Tank Capacity", value: "20 – 2,000 Liters" },
      { label: "Power", value: "0.55 – 160 kW" },
      { label: "Flow Rate", value: "42 – 400 LPM" },
      { label: "Pressure", value: "0.5 – 1,200 BAR" },
    ],
  },
  {
    slug: "lube-oil-filtration",
    name: "Lube Oil & Filtration Systems",
    shortDescription:
      "Engineered lubrication systems and filtration units for industrial machinery reliability.",
    description:
      "We design and manufacture dedicated lube oil systems and filtration units tailored to specific industrial machinery requirements, ensuring clean lubrication, cooling, and long equipment life.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom-designed lube oil systems",
      "Pressure and return filtration",
      "10–20 micron filtration",
      "Oil cooling options",
      "Level & temperature monitoring",
      "Suitable for industrial & power applications",
    ],
  },
  {
    slug: "hydraulic-manifold-blocks",
    name: "Hydraulic Manifold Blocks",
    shortDescription:
      "Design and manufacturing of special hydraulic manifold blocks for integrated hydraulic circuits.",
    description:
      "We design and manufacture custom hydraulic manifold blocks that integrate multiple valves and components into a single compact assembly, reducing piping, leak points and installation time.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom design per circuit requirement",
      "CNC-machined manifolds",
      "Integrated valve mounting",
      "Reduced leak points",
      "Compact installation",
      "Material options: MS & SS",
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "pump-service",
    name: "Hydraulic Pump Service",
    shortDescription:
      "Repair, reconditioning and testing of all major brands of hydraulic pumps.",
    description:
      "We provide complete repair and reconditioning services for hydraulic pumps including axial piston, vane, gear and radial piston pumps from brands like Denison, Parker, Bosch Rexroth, Sauer Danfoss, Eaton, Vickers, Yuken, Hagglunds and more.",
    icon: "Settings",
    features: [
      "Complete disassembly and inspection",
      "Replacement of worn components",
      "Seal kit replacement",
      "Performance testing on our test bench",
      "Parker Gold Cup series expertise",
    ],
  },
  {
    slug: "motor-service",
    name: "Hydraulic Motor Service",
    shortDescription:
      "Expert repair and overhaul of hydraulic motors from leading global brands.",
    description:
      "Our team repairs and reconditions hydraulic motors of all major OEM brands with fast turnaround and guaranteed workmanship. Each motor is disassembled, inspected, rebuilt and tested before return.",
    icon: "Cog",
    features: [
      "Axial piston, gear & vane motors",
      "Hagglunds radial piston motor expertise",
      "Full load testing after repair",
      "Genuine spare parts",
      "On-site troubleshooting support",
    ],
  },
  {
    slug: "cylinder-service",
    name: "Hydraulic Cylinder Service",
    shortDescription:
      "Repair, reconditioning and seal replacement for all types of hydraulic cylinders.",
    description:
      "We repair hydraulic cylinders of all types — tie-rod, welded, mill-type and servo cylinders, including honing of barrels, re-chroming of rods and replacement of seal kits.",
    icon: "MoveVertical",
    features: [
      "Seal kit replacement",
      "Barrel honing",
      "Piston rod re-chroming",
      "Pressure testing after repair",
      "Mounting accessories replacement",
    ],
  },
  {
    slug: "troubleshooting",
    name: "Hydraulic Troubleshooting",
    shortDescription:
      "On-site and in-shop fault diagnosis for hydraulic systems of all makes.",
    description:
      "Our experienced field engineers diagnose and resolve hydraulic system issues — pressure problems, overheating, leaks, noise, erratic motion — to minimize your downtime.",
    icon: "Wrench",
    features: [
      "On-site troubleshooting visits",
      "System pressure & flow analysis",
      "Root cause analysis",
      "Preventive recommendations",
      "Support across India",
    ],
  },
  {
    slug: "amc",
    name: "Annual Maintenance Contracts (AMC)",
    shortDescription:
      "Scheduled preventive maintenance to keep your hydraulic equipment at peak performance.",
    description:
      "We offer annual maintenance contracts covering scheduled inspections, fluid changes, filter changes, performance audits and priority support to keep your hydraulic systems reliable.",
    icon: "CalendarCheck",
    features: [
      "Planned preventive maintenance",
      "Scheduled inspections",
      "Fluid & filter changes",
      "Priority breakdown support",
      "Performance reports",
    ],
  },
  {
    slug: "installation-commissioning",
    name: "Installation & Commissioning",
    shortDescription:
      "Turnkey erection and commissioning of hydraulic systems and power units.",
    description:
      "Complete erection and commissioning support for new hydraulic power units, lube oil systems, test benches and retrofits, including flushing, pressure testing and start-up.",
    icon: "Plug",
    features: [
      "Site survey and planning",
      "Flushing & pressure testing",
      "System start-up",
      "Operator training",
      "Performance validation",
    ],
  },
  {
    slug: "retrofit",
    name: "Retrofit & Upgradation",
    shortDescription:
      "Upgrade legacy hydraulic systems with modern components and controls for improved performance.",
    description:
      "We retrofit and upgrade existing hydraulic systems with modern pumps, valves, manifolds and controls to improve performance, energy efficiency and reliability.",
    icon: "RefreshCw",
    features: [
      "Legacy system assessment",
      "Control upgrades",
      "Energy saving conversions (VFD)",
      "Component replacement",
      "Documentation & training",
    ],
  },
  {
    slug: "testing-inspection",
    name: "Testing & Inspection",
    shortDescription:
      "Comprehensive hydraulic testing, inspection and condition monitoring services.",
    description:
      "We provide testing and inspection of pumps, motors, cylinders, valves and complete systems using our in-house test benches and portable diagnostic equipment.",
    icon: "ClipboardCheck",
    features: [
      "In-house test bench facility",
      "Flow & pressure testing",
      "Oil analysis support",
      "Data logging & reports",
      "Third-party inspection support",
    ],
  },
];

export const CAPABILITIES = [
  {
    title: "Design & Engineering",
    description:
      "Custom design of hydraulic power packs, test rigs, cylinders and manifold blocks backed by application engineering.",
  },
  {
    title: "Manufacturing",
    description:
      "In-house manufacturing of hydraulic power units, cylinders, test benches, lube oil systems and manifold blocks at our 10,000 sq.ft. Bangalore facility.",
  },
  {
    title: "Installation & Commissioning",
    description:
      "Turnkey erection, flushing, testing and commissioning of complete hydraulic systems across India.",
  },
  {
    title: "Repair & Maintenance",
    description:
      "Overhaul, repair and reconditioning of hydraulic pumps, motors and cylinders with fast turnaround and AMC support.",
  },
];

export const TECH_STATS = [
  { value: "750", unit: "LPM", label: "Max Flow Rate" },
  { value: "1200", unit: "BAR", label: "Test Bench Pressure" },
  { value: "250", unit: "kW", label: "Max Power Rating" },
  { value: "800", unit: "BAR", label: "System Pressure" },
];

export const WHY_CHOOSE = [
  {
    number: "01",
    title: "Industry Experience",
    description:
      "Incorporated in 2015 with a team of engineers having deep experience in hydraulic systems across a wide range of industries.",
  },
  {
    number: "02",
    title: "ISO 9001:2015 Quality",
    description:
      "ISO 9001:2015 certified processes ensuring consistent quality in design, manufacturing and service.",
  },
  {
    number: "03",
    title: "Engineering Expertise",
    description:
      "In-house design capability for power units, test rigs, cylinders, manifolds, lube oil and filtration systems.",
  },
  {
    number: "04",
    title: "Complete Hydraulic Solutions",
    description:
      "A single window for design, manufacturing, supply, installation, commissioning, repair, retrofit and AMC.",
  },
  {
    number: "05",
    title: "Quality & Reliability",
    description:
      "We work with reputed global OEM brands and follow strict quality checks to deliver reliable, long-lasting solutions.",
  },
  {
    number: "06",
    title: "Service & Maintenance Support",
    description:
      "Quick turnaround on repairs, on-site troubleshooting and annual maintenance contracts across India.",
  },
];

export const INDUSTRIES = [
  "Bulk Material Handling",
  "Power Plants",
  "Steel",
  "Mining Machineries",
  "Foundry & Forging",
  "Sugar",
  "Paper",
  "Machine Tools",
  "Construction",
  "Rubber & Chemical",
  "Defence",
  "Marine & Offshore",
];

export const INFRASTRUCTURE = [
  {
    title: "Shop Floor",
    description: "Our main manufacturing and assembly shop floor in Bangalore.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Assembly Area",
    description: "Dedicated assembly zones for power units and cylinders.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Testing Facility",
    description: "In-house test benches for pumps, motors, cylinders and systems.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manufacturing",
    description: "Precision machining and fabrication facilities.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  },
];
