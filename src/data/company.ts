export const COMPANY = {
  name: "Shri Ramraj Engineering",
  shortName: "SR",
  tagline: "Serve the Best & supply Earliest at Lowest cost.",
  description: "Shri Ramraj Engineering provides design consultations, repairs and modifications of hydraulic and pneumatic cylinders, machine parts, sealing solutions and spares for hydraulic equipment.",
  aboutLong: [
    "Shri Ramraj Engineering provides design consultations, repairs and modifications of hydraulic and pneumatic cylinders, machine parts, sealing solutions and spares for all kinds of hydraulic equipment.",
    "We are a team of young and energetic engineers with varied experience in the design and manufacturing of heavy industrial machine parts requiring application knowledge and methodological expertise.",
    "Shri Ramraj Engineering has partnered with Usha Engineering Work, a reputed name in heavy engineering supplying services to top steel plants in the country for a long time. This helps us timely fabricate components of any size.",
    "The company also has an association with Bari Metal Finishers, a reputed name in heavy engineering supplying services to top steel plants in the country for a long time. This association helps Shri Ramraj Engineering timely fabricate engineering components of any size.",
    "We offer metalizing services including cladding, welding and metal spraying to repair mill shafts, piston rods, pinions and crank shafts. Quality signifies long service life, reliability, durability and safety, supported by strict inspection criteria, production methodology, testing methods and acceptance norms.",
  ],
  strengths: ["Application Knowledge", "Engineering", "Quality", "Reliability", "Safety"],
};

export const OFFICES = [
  { type: "Registered Office", address: "57 Kha, Tripathi Sadan, Baghambari Road, Allahpur, Prayagraj, Uttar Pradesh – 211006.", phones: ["+91 9967886168"], emails: ["sales1.srre@gmail.com"] },
  { type: "Works", address: "Plot No. B-7, Additional MIDC, Anand Nagar, Ambarnath – 410506, Maharashtra, India.", phones: ["+91 8826505042"], emails: ["sales1.srre@gmail.com"] },
];

export const WHATSAPP_NUMBER = "919967886168";
export const PRIMARY_PHONE = "+91 9967886168";
export const PRIMARY_EMAIL = "sales1.srre@gmail.com";
export const GSTIN = "09ANLPT4807G1ZL";
export const IEC = "ANLPT4807G";
const localImage = "/assets/shri-ramraj-engineering-profile.svg";

export type Product = { slug: string; name: string; shortDescription: string; description: string; image: string; features?: string[]; specifications?: { label: string; value: string }[]; applications?: string[] };

const product = (slug: string, name: string, description: string, features: string[]): Product => ({ slug, name, shortDescription: description, description, image: localImage, features });
export const PRODUCTS: Product[] = [
  product("raw-mill-cylinders", "Raw Mill Cylinders", "Hydraulic cylinder expertise for raw mill applications.", ["Repair and modification", "Application-focused consultation", "Inspection and testing"]),
  product("hagc-roll-force-cylinders", "HAGC (Roll Force Cylinders)", "Cylinder support for HAGC roll force applications.", ["Repair support", "Piston rod work", "Sealing solutions"]),
  product("ladle-tundish-cylinders", "Ladle Turret & Tundish Cylinders", "Engineering support for ladle turret and tundish cylinders.", ["Cylinder repair", "Custom seals", "Testing methods"]),
  product("astc-pinch-roll-cylinders", "ASTC & Pinch Roll Cylinders", "Repair and modification support for ASTC and pinch roll cylinders.", ["Repair and modification", "Seal groove machining", "Inspection"]),
  product("rotary-unions", "Rotary Unions", "Rotary union support for industrial equipment applications.", ["Application consultation", "Supply support", "Sealing solutions"]),
  product("wrapper-entry-stripper-cylinders", "Wrapper, Entry Guide & Stripper Car Cylinders", "Cylinder support for wrapper roll, entry guide and stripper car applications.", ["Repair support", "Piston rod repair", "Custom seals"]),
  product("mill-blocks-sensor-housings", "Mill Blocks & Sensor Housings", "Components for CSP and HSM mills, including sensor housings.", ["Component fabrication", "Application knowledge", "Inspection criteria"]),
  product("seals-fittings", "Hydraulic & Pneumatic Seals and Fittings", "Supply of hydraulic and pneumatic seals and fittings.", ["Hydraulic seals", "Pneumatic seals", "Hydraulic and pneumatic fittings"]),
];

export type Service = { slug: string; name: string; shortDescription: string; description: string; icon: string; features?: string[] };
const service = (slug: string, name: string, description: string, icon: string, features: string[]): Service => ({ slug, name, shortDescription: description, description, icon, features });
export const SERVICES: Service[] = [
  service("piston-rod-repair", "Piston Rod Repair", "Repair support for piston rods used in industrial cylinders.", "Settings", ["Piston rod repair", "Piston head cladding", "Inspection"]),
  service("seal-groove-machining", "Seal Groove Machining", "Machining support for seal grooves and custom sealing requirements.", "Cog", ["Seal groove machining", "Custom seal supply", "Sealing solutions"]),
  service("shaft-coupling-repair", "Shaft & Coupling Repair", "Repair and machining jobs for shafts, couplings and marine applications.", "Wrench", ["Shaft repair", "Coupling repair", "Marine machining jobs"]),
  service("metalizing-services", "Metalizing Services", "Cladding, welding and metal spraying for component repair.", "Hammer", ["Cladding", "Welding", "Metal spraying"]),
  service("hard-chrome-plating", "Hard Chrome Plating", "Hard chrome plating services for industrial components.", "Factory", ["Component preparation", "Plating service", "Inspection"]),
  service("design-consultation", "Design Consultation", "Application-focused design consultation for industrial machine parts.", "ClipboardCheck", ["Application review", "Engineering consultation", "Manufacturing guidance"]),
];

export const CAPABILITIES = [
  { title: "Design Consultation", description: "Application knowledge and methodological expertise for heavy industrial machine parts." },
  { title: "Repair & Modification", description: "Hydraulic and pneumatic cylinder repair, modification and sealing solutions." },
  { title: "Metalizing", description: "Cladding, welding and metal spraying for shafts, rods, pinions and crank shafts." },
  { title: "Inspection & Testing", description: "Strict inspection criteria, production methodology, testing methods and acceptance norms." },
];
export const TECH_STATS = [{ value: "350", unit: "BAR", label: "Test Bench Pressure" }, { value: "1000", unit: "L", label: "Test Bench Capacity" }, { value: "10", unit: "MICRON", label: "Test Bench Filters" }, { value: "25", unit: "TON", label: "Lifting Capacity" }];
export const WHY_CHOOSE = [
  { number: "01", title: "Engineering Team", description: "A young and energetic engineering team with experience in heavy industrial machine parts." },
  { number: "02", title: "Application Knowledge", description: "Methodological expertise shaped around demanding industrial applications." },
  { number: "03", title: "Quality Focus", description: "Quality, reliability, durability and safety supported by strict inspection criteria." },
  { number: "04", title: "Repair Expertise", description: "Repair, modification, cladding, welding and metal spraying services." },
  { number: "05", title: "Engineering Associations", description: "Associations with Bari Metal Finishers and Usha Engineering Work support timely fabrication of components of any size." },
  { number: "06", title: "Service Performance", description: "Service quality and performance reflecting the motto: Serve the Best & supply Earliest at Lowest cost." },
];
export const INDUSTRIES = ["Steel", "Cement", "Oil & Gas", "Earth Moving", "Marine Applications"];
export const INFRASTRUCTURE = [
  { title: "Horizontal Boring Machine", description: "100 Spindle, 1600 x 1200 x 2500, Make: Toss.", image: localImage },
  { title: "Lathe Machines", description: "460 mm centre height x 3200 mm and 670 mm centre height x 2500 mm. Make: Rajendra.", image: localImage },
  { title: "VMC & Plano Miller", description: "VMC machines by Lead Well and STM, plus Plano Miller 1200H x 1500W x 4000L, Make: Korea.", image: localImage },
  { title: "Hydraulic Test Bench", description: "1000 litres with 10 micron filters and pressure of 350 bar.", image: localImage },
];
export const MACHINES = [
  "Horizontal Boring Machine — 100 Spindle, 1600 x 1200 x 2500, Make: Toss",
  "Lathe Machine — 460 mm Centre Height, 3200 mm Long, Make: Rajendra",
  "Lathe Machine — 670 mm Centre Height, 2500 mm Long, Make: Rajendra",
  "VMC Machine — X-1200 x Y-650 x Z-750, Make: Lead Well",
  "VMC Machine — 1200 x 550 x 550, Make: STM",
  "Plano Miller — 1200H x 1500W x 4000L, Make: Korea",
  "Welding Machine Rectifier — 500 Ampere, 8 numbers",
  "Lifting Crane with Hoist — 10 & 10 Ton, two cranes",
  "Hydraulic Test Bench — 1000 litres, 10 micron filters, pressure 350 bar",
];
export const INSTRUMENTS = [
  ["12” Vernier", "", "", "06 Nos"], ["24” Vernier", "", "", "02 Nos"], ["12” Dial Vernier", "", "", "02 Nos"], ["1 Mtr Vernier", "", "", "02 Nos"], ["Micro Meter", "0 – 25 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "25 - 50 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "50 - 75 MM", "Mitutoyo", "02 Nos"], ["Out Side Micro Meter", "75 - 100 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "100 – 125 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "125 - 150 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "0 - 150 MM", "Mitutoyo", "02 Nos"], ["Micro Meter", "150 - 300 MM", "China", "02 Nos"], ["Micro Meter", "300 - 400 MM", "China", "02 Nos"], ["Micro Meter", "400 - 500 MM", "China", "01 No."], ["Micro Meter", "500 - 600 MM", "China", "01 No."], ["Micro Meter", "600 - 700 MM", "China", "01 No."], ["Micro Meter", "700 - 800 MM", "China", "01 No."], ["Micro Meter", "800 - 900 MM", "China", "01 No."], ["Micro Meter", "900 - 1000 MM", "China", "01 No."], ["Inside Micro Meter", "100 - 1 Mtr", "Mitutoyo", "02 Nos"], ["Dial Bore gage", "35 to 60 mm", "", "02 Nos"], ["Dial Bore gage", "50 to 150 mm", "", "02 Nos"], ["Dial Bore gage", "150 to 250 mm", "", "01 No"], ["Slip Gage Box", "1 mm to 100 mm", "", "01 No"], ["Depth Micro meter", "0 to 200 mm", "", "01 No"], ["Hardness Tester", "", "Mitutoyo", "01 No"], ["Surface Finish Tester", "", "Mitutoyo", "01 No"],
];
