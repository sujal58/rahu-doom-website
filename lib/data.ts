import {
  Code2,
  MonitorSmartphone,
  Users2,
  Megaphone,
  Rocket,
  ShieldCheck,
  Clock,
  HeartHandshake,
  LucideIcon,
  GraduationCap,
  Building2,
  Brain,
  Globe,
  Settings,
  ShoppingCart,
  Truck,
} from "lucide-react";

export const company = {
  name: "Rahu Doom Pvt Ltd",
  shortName: "Rahu Doom",
  tagline: "Building Ideas. Creating Future.",
  url: "https://rahudoom.com",
  email: "support@rahudoom.com",
  phone: "+977-9709138897",
  address: "Kathmandu, Gokarneshwor-4, Nepal",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61590151089369",
    linkedin: "https://www.linkedin.com/company/rahu-doom/posts/?feedView=all",
    instagram: "https://www.instagram.com/rahudoom/?hl=en",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  hero: string;
  offerings: string[];
  benefits: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "web-app-development",
    title: "Web App Development",
    short:
      "Fast, scalable web applications built with modern frameworks — tailored to how your business actually works.",
    icon: Code2,
    hero: "We design and build custom web applications that are fast, secure, and ready to scale with your business.",
    offerings: [
      "Custom web applications & admin dashboards",
      "E-commerce & online store platforms",
      "Hotel booking & reservation systems",
      "Progressive Web Apps (PWA)",
      "API design & third-party integrations",
      "Cloud deployment & maintenance",
    ],
    benefits: [
      {
        title: "Built to scale",
        text: "Architecture that grows with your users without slowing down.",
      },
      {
        title: "Mobile-first",
        text: "Every app looks and works great on phones, tablets, and desktops.",
      },
      {
        title: "Secure by default",
        text: "Best practices baked in — from authentication to data handling.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    short:
      "Custom desktop and enterprise software that automates your workflows and removes the busywork.",
    icon: MonitorSmartphone,
    hero: "From internal tools to full enterprise systems, we build software that fits your process — not the other way around.",
    offerings: [
      "Education Management Systems (EMS / School ERP)",
      "Hotel & property management software",
      "Courier & logistics tracking platforms",
      "Inventory, HR & payroll management tools",
      "Workflow automation & enterprise systems",
      "Legacy system migration & modernization",
    ],
    benefits: [
      {
        title: "Tailored to you",
        text: "Software shaped around your exact processes and goals.",
      },
      {
        title: "Automate the boring",
        text: "Cut manual work so your team focuses on what matters.",
      },
      {
        title: "Reliable support",
        text: "Ongoing maintenance and updates after launch.",
      },
    ],
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    short:
      "Customer relationship tools that organize your sales pipeline and turn contacts into loyal clients.",
    icon: Users2,
    hero: "Manage leads, automate follow-ups, and understand your customers with a CRM built around your sales process.",
    offerings: [
      "Custom CRM development",
      "Sales pipeline & lead management",
      "Automated follow-up & WhatsApp notifications",
      "Customer analytics & reporting dashboards",
      "Integration with your existing tools",
      "Multi-user roles & permissions",
    ],
    benefits: [
      {
        title: "Never lose a lead",
        text: "Track every contact and follow-up in one organized place.",
      },
      {
        title: "Automate follow-ups",
        text: "Let the system nudge customers while you focus on closing.",
      },
      {
        title: "See what works",
        text: "Clear analytics on your sales and customer behavior.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "SEO, social media, and paid campaigns that get your business found by the right people.",
    icon: Megaphone,
    hero: "We help you get discovered online and turn that attention into real customers and revenue.",
    offerings: [
      "AI-Powered SEO & keyword strategy",
      "Social media management & content creation",
      "Paid ad campaigns (Google, Meta, LinkedIn)",
      "Content marketing & email automation",
      "Analytics, conversion tracking & ROI reporting",
      "Local SEO for Nepal + international markets",
    ],
    benefits: [
      {
        title: "Get found",
        text: "Rank higher and reach customers searching for you.",
      },
      {
        title: "Measurable results",
        text: "Clear reporting on what every rupee is doing.",
      },
      {
        title: "Local + global",
        text: "Strategies tuned for Nepal and international markets.",
      },
    ],
  },
];

export const whyChooseUs: { icon: LucideIcon; title: string; text: string }[] =
  [
    {
      icon: Rocket,
      title: "Dedicated In-House Team",
      text: "Experienced developers and designers working together, not outsourced.",
    },
    {
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      text: "Clean code, thorough testing, and a focus on long-term reliability.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      text: "Clear timelines and honest communication at every milestone.",
    },
    {
      icon: HeartHandshake,
      title: "Real Support",
      text: "We stick around after launch with maintenance and updates.",
    },
  ];

export const stats = [
  { value: 80, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    text: "We learn your goals, users, and challenges.",
  },
  {
    step: "02",
    title: "Planning",
    text: "A clear roadmap, scope, and timeline.",
  },
  {
    step: "03",
    title: "Design",
    text: "Wireframes and UI that match your brand.",
  },
  {
    step: "04",
    title: "Development",
    text: "We build in clean, tested iterations.",
  },
  { step: "05", title: "Launch", text: "We ship, monitor, and fine-tune." },
  {
    step: "06",
    title: "Support",
    text: "Ongoing maintenance and improvements.",
  },
];

export const testimonials = [
  {
    quote:
      "Rahu Doom delivered our platform ahead of schedule and the quality exceeded our expectations. A team we genuinely trust.",
    name: "Nitesh Aggarwal",
    role: "CEO, Digital Solution",
  },
  {
    quote:
      "Their CRM completely changed how we handle leads. Follow-ups happen automatically and nothing slips through anymore.",
    name: "Sagar Poudel",
    role: "Sales Head, Food and Beverages",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our success. The digital marketing results speak for themselves.",
    name: "Jr William",
    role: "Founder, Fintech US",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "Java",
  "Node.js",
  "TypeScript",
  "Laravel",
  "Python",
  "Flutter",
  "PostgreSQL",
  "AWS",
  "Docker",
];

export type BlogPost = {
  slug: string;
  image: string;
  day: string;
  month: string;
  title: string;
  comments: number;
  category: string;
  readTime: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nepal-data-center-future",
    image: "/Data-Center.png",
    day: "01",
    month: "Jun",
    title:
      "Nepal's Data Should Stay in Nepal: The Case for a Local Data Center",
    comments: 11,
    category: "Infrastructure",
    readTime: "8 min read",
    excerpt:
      "Nepal's digital data is hosted on servers in India, Singapore, and the US. A 100,000 TB data center in Kathmandu could change everything — for sovereignty, speed, and the economy.",
  },
  {
    slug: "shikzya-education-management-system",
    image: "/ShikZya.png",
    day: "31",
    month: "May",
    title:
      "Introducing ShikZya: Nepal's All-in-One Education Management System",
    comments: 0,
    category: "Product Launch",
    readTime: "7 min read",
    excerpt:
      "ShikZya is coming — a fully integrated EMS built for Nepal's schools and colleges. From student enrollment to parent portals, fee management to result cards, ShikZya handles it all under one roof.",
  },
  {
    slug: "global-seo-advanced-tags",
    image: "/blog-7.png",
    day: "28",
    month: "May",
    title: "Global SEO & Advanced Tags: Rank Everywhere, Not Just Locally",
    comments: 9,
    category: "SEO",
    readTime: "8 min read",
    excerpt:
      "Local SEO gets you found in your city. Global SEO gets you found everywhere. Advanced tags — hreflang, schema, Open Graph, canonical — are what separate the websites that rank from the ones that don't.",
  },
  {
    slug: "why-team-collaboration-matters",
    image: "/blog-3.png",
    day: "26",
    month: "May",
    title:
      "Why Team Collaboration is the Secret Weapon of Successful Tech Companies",
    comments: 6,
    category: "Team",
    readTime: "6 min read",
    excerpt:
      "Great software isn't built by lone geniuses — it's built by teams that communicate well, trust each other, and move together. Here's why collaboration is the most underrated competitive advantage.",
  },
  {
    slug: "restaurant-erp-solutions",
    image: "/blog-10.png",
    day: "12",
    month: "May",
    title: "Top Restaurant Problems Solved with a Custom ERP System",
    comments: 7,
    category: "Software",
    readTime: "7 min read",
    excerpt:
      "Food waste, billing errors, staff scheduling chaos — restaurants face the same problems daily. A custom ERP system eliminates them all in one go.",
  },
  {
    slug: "modernizing-education-technology",
    image: "/blog-9.png",
    day: "05",
    month: "May",
    title:
      "Modernizing Education: How Technology is Transforming Schools in Nepal",
    comments: 8,
    category: "EdTech",
    readTime: "6 min read",
    excerpt:
      "Attendance registers, manual fee receipts, and paper report cards — Nepal's schools deserve better. Here's how modern EMS platforms are changing that.",
  },
  {
    slug: "how-local-seo-works",
    image: "/blog-8.png",
    day: "25",
    month: "Apr",
    title: "How Local SEO Works and Why It Matters for Nepali Businesses",
    comments: 5,
    category: "SEO",
    readTime: "7 min read",
    excerpt:
      "When someone in Kathmandu searches 'best restaurant near me' — will your business show up? Local SEO decides that. Here's how it works.",
  },
  {
    slug: "why-digital-marketing-matters",
    image: "/blog-4.png",
    day: "18",
    month: "Apr",
    title: "Why Every Business Needs Digital Marketing in 2026",
    comments: 4,
    category: "Marketing",
    readTime: "6 min read",
    excerpt:
      "Your customers are online — your marketing should be too. Here's why digital marketing is no longer optional for businesses in Nepal and beyond.",
  },
  {
    slug: "pioneering-contactless-payment",
    image: "/blog-6.png",
    day: "13",
    month: "Mar",
    title: "Pioneering Contactless Payment Technologies",
    comments: 6,
    category: "Fintech",
    readTime: "5 min read",
    excerpt:
      "From QR codes to NFC — contactless payments are reshaping how businesses in Nepal collect money and how customers expect to pay.",
  },
  {
    slug: "ux-ui-designing-future-web",
    image: "/blog-2.png",
    day: "12",
    month: "Mar",
    title: "UX/UI: Designing The Future of Web",
    comments: 3,
    category: "Design",
    readTime: "5 min read",
    excerpt:
      "Good design is invisible — great design converts. Here's how thoughtful UX/UI decisions turn visitors into customers.",
  },
  {
    slug: "software-development-agility",
    image: "/blog-1.png",
    day: "10",
    month: "Mar",
    title: "Software Development Agility: A Primer",
    comments: 2,
    category: "Software",
    readTime: "4 min read",
    excerpt:
      "Agile isn't just a buzzword — it's how modern software teams ship faster, adapt quickly, and deliver real value without getting lost in endless planning cycles.",
  },
];

export type Solution = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

export const solutions: Solution[] = [
  {
    icon: GraduationCap,
    title: "Education Management System",
    desc: "Student portals, fee collection, attendance tracking, timetables, exam results — all in one platform.",
    tag: "Software",
  },
  {
    icon: Building2,
    title: "Hotel Booking System",
    desc: "Online room reservations, availability management, guest check-in/out portals, and payment integration.",
    tag: "Web App",
  },
  {
    icon: Truck,
    title: "Courier Tracking System",
    desc: "Real-time parcel tracking, dispatch management, delivery notifications, and route optimization.",
    tag: "Web App",
  },
  {
    icon: Users2,
    title: "CRM & Sales Pipeline",
    desc: "Lead capture, follow-up automation, deal tracking, and customer analytics — built for your sales process.",
    tag: "CRM",
  },
  {
    icon: Brain,
    title: "AI-Powered SEO",
    desc: "Advanced AI-driven keyword research, content optimization, backlink strategy, and ranking reports.",
    tag: "Marketing",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Fast, SEO-optimized websites built for credibility, lead generation, and Google rankings.",
    tag: "Web",
  },
  {
    icon: Settings,
    title: "Management Tools",
    desc: "Inventory, HR, payroll, project tracking, and workflow automation custom-built for your team.",
    tag: "Software",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    desc: "Full-featured online stores with payments, inventory management, and customer analytics.",
    tag: "Web App",
  },
];

export const projects = [
  {
    title: "Logistics Dashboard",
    category: "Web App",
    image: "/logistics-dashboard.png",
    text: "Real-time fleet and delivery tracking platform.",
  },
  {
    title: "Retail CRM Suite",
    category: "CRM",
    image: "/retail-crm.png",
    text: "End-to-end lead and customer management system.",
  },
  {
    title: "Booking Platform",
    category: "Web App",
    image: "/booking-platform.png",
    text: "Multi-vendor appointment and payment system.",
  },
  {
    title: "Inventory System",
    category: "Software",
    image: "/inventory-system.png",
    text: "Warehouse and stock management for a retail chain.",
  },
  {
    title: "Brand Growth Campaign",
    category: "Marketing",
    image: "/brand-growth.png",
    text: "SEO + paid campaign that tripled organic traffic.",
  },
  {
    title: "School ERP",
    category: "Software",
    image: "/school-erp.png",
    text: "Student, staff, and finance management portal.",
  },
];
