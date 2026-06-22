import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/portfolio/whatsapp-icon";

/** A single achievement / result point with a tasteful emoji. */
export interface ResultPoint {
  emoji: string;
  text: string;
}

/** Icon type that accepts both Lucide icons and the custom WhatsApp glyph. */
export type IconType = LucideIcon | typeof WhatsAppIcon;

export const profile = {
  name: "Tahmid Hossain Ta-Seen",
  title: "IT Support Engineer",
  tagline: "IT Support Engineer & Network Enthusiast",
  email: "tahmidhossain209@gmail.com",
  phone: "+8801828-289668",
  /** Digits-only, used for wa.me / tel links. */
  phoneDigits: "8801828289668",
  phoneDisplay: "+880 1828-289668",
  whatsappLink:
    "https://wa.me/8801828289668?text=Hi%20Tahmid%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect.",
  location: "Mohammadpur, Dhaka - 1207, Bangladesh",
  nationality: "Bangladeshi",
  summary:
    "A motivated computer science diploma candidate with hands-on experience in IT support, network troubleshooting, and hardware maintenance. I recently worked as a Support Engineer at Avant Technology Limited, contributing to critical surveillance system deployments for the Bangladesh Police. I completed my industrial attachment at Tech Elevate Ltd., where I sharpened my ability to diagnose connectivity issues, deliver on-site support, and collaborate effectively within technical teams.",
  enthusiasm:
    "I genuinely love what I do, and I am excited to work with anyone — startups, enterprises, government teams, or fellow students. Whether it is a quick fix or a large-scale deployment, I bring curiosity, reliability, and a collaborative spirit to every engagement.",
};

export const socials: {
  label: string;
  href: string;
  icon: IconType;
}[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/8801828289668?text=Hi%20Tahmid%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect.",
    icon: WhatsAppIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tahmidhtaseen",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/tahmidhtaseen",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tahmidhtaseen",
    icon: Twitter,
  },
];

export const contactInfo: {
  label: string;
  value: string;
  icon: IconType;
  href?: string;
}[] = [
  {
    label: "Email",
    value: "tahmidhossain209@gmail.com",
    icon: Mail,
    href: "mailto:tahmidhossain209@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1828-289668",
    icon: Phone,
    href: "tel:+8801828289668",
  },
  {
    label: "Location",
    value: "Mohammadpur, Dhaka, Bangladesh",
    icon: MapPin,
  },
];

export const stats = [
  { label: "Certifications", value: "2", suffix: "+" },
  { label: "Technical Skills", value: "14", suffix: "+" },
  { label: "Years of Study", value: "4", suffix: "+" },
  { label: "Projects Delivered", value: "1", suffix: "" },
];

export const skillCategories: {
  title: string;
  description: string;
  skills: string[];
}[] = [
  {
    title: "Networking",
    description: "Designing, configuring, and troubleshooting resilient networks.",
    skills: [
      "Network Administration & Troubleshooting",
      "MikroTik",
      "CCNA",
      "Windows Server",
    ],
  },
  {
    title: "Systems & Hardware",
    description: "Keeping infrastructure and endpoints running smoothly.",
    skills: [
      "Operating Systems (Windows, Linux)",
      "Virtualization (VMware, VirtualBox)",
      "Hardware Installation & Repair",
      "Remote Desktop Support",
      "Data Backup & Recovery",
    ],
  },
  {
    title: "IT Support & Operations",
    description: "Delivering responsive, people-first technical support.",
    skills: [
      "CompTIA A+",
      "Helpdesk Ticketing Systems",
      "Performance Monitoring Tools",
      "Microsoft Office Suite",
    ],
  },
  {
    title: "Web Fundamentals",
    description: "Comfortable with the building blocks of the modern web.",
    skills: ["HTML", "CSS", "Tailwind CSS"],
  },
];

export const experiences: {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: ResultPoint[];
  tags: string[];
}[] = [
  {
    role: "Support Engineer",
    company: "Avant Technology Limited",
    period: "January 2026",
    location: "Bangladesh Police Headquarter",
    description:
      "Avant Technology Limited is one of the country's top integrated solution providers and a pioneer in surveillance systems, recently delivering 10,000 offline body-worn cameras for Bangladeshi police officers and 300 data collection stations for police stations nationwide.",
    highlights: [
      {
        emoji: "🛡️",
        text: "Assisted in deploying critical surveillance systems for the Bangladesh Police.",
      },
      {
        emoji: "🗳️",
        text: "Contributed to projects explored during the thirteenth national election.",
      },
      {
        emoji: "🤝",
        text: "Collaborated with field teams to ensure reliable on-site system performance.",
      },
    ],
    tags: ["Surveillance Systems", "On-site Support", "Deployment"],
  },
  {
    role: "Industrial Attachment",
    company: "Tech Elevate Ltd.",
    period: "September 2025 – December 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Sister concern of Race Online Limited. Completed a structured industrial attachment that bridged classroom theory with real-world IT operations.",
    highlights: [
      {
        emoji: "💼",
        text: "Gained practical exposure to enterprise IT workflows and support practices.",
      },
      {
        emoji: "🔧",
        text: "Worked alongside experienced engineers diagnosing connectivity issues.",
      },
      {
        emoji: "💬",
        text: "Built a foundation in professional collaboration and technical communication.",
      },
    ],
    tags: ["Industrial Training", "IT Operations", "Networking"],
  },
];

export const education: {
  degree: string;
  institution: string;
  period: string;
  location: string;
  detail: string;
  score?: string;
}[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University",
    period: "May 2026 – Present",
    location: "Dhaka, Bangladesh",
    detail: "Pursuing an undergraduate degree to deepen expertise in computer science and engineering.",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Govt. Graphic Arts Institute",
    period: "2022 – 2025",
    location: "Dhaka, Bangladesh",
    detail: "Completed a comprehensive diploma program covering programming, networking, and systems.",
    score: "Result: 3.05",
  },
  {
    degree: "Dakhil / Secondary School Certificate",
    institution: "Momenshahi D.S. Kamil Madrasah",
    period: "January 2019 – December 2021",
    location: "Bangladesh",
    detail: "Science group graduation with strong academic results.",
    score: "GPA: 4.61",
  },
  {
    degree: "Junior Dakhil Certificate (JDC)",
    institution: "Momenshahi D.S. Kamil Madrasah",
    period: "January 2018 – December 2018",
    location: "Bangladesh",
    detail: "Completed junior level education with distinction.",
    score: "GPA: 4.44",
  },
];

export const projects: {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string;
  highlights: ResultPoint[];
  tags: string[];
}[] = [
  {
    title: "IEIMS Project",
    role: "Data Entry Operator",
    period: "December 2021 – April 2022",
    organization: "Bangladesh Bureau of Educational Information and Statistics (BANBEIS)",
    description:
      "The Integrated Educational Information Management System (IEIMS) project, under BANBEIS, aims to establish a comprehensive system for managing educational information across Bangladesh.",
    highlights: [
      {
        emoji: "🗄️",
        text: "Contributed to developing a central database for educational information.",
      },
      {
        emoji: "🖥️",
        text: "Supported the implementation of hardware and network infrastructure.",
      },
      {
        emoji: "🏛️",
        text: "Helped equip training and resource centers as part of a Government of Bangladesh funded initiative.",
      },
    ],
    tags: ["Data Management", "Government Project", "Education Tech"],
  },
];

export const certificates: {
  title: string;
  issuer: string;
  description: string;
}[] = [
  {
    title: "IT Support & Service",
    issuer: "National Skills Development Authority",
    description: "Level 3 certification recognizing competency in IT support and service delivery.",
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    description: "Industry-recognized certification in configuring and managing MikroTik router networks.",
  },
];

export const interests: { label: string; emoji: string }[] = [
  { label: "Reading", emoji: "📚" },
  { label: "Traveling", emoji: "✈️" },
  { label: "Volunteering", emoji: "🙌" },
  { label: "Writing", emoji: "✍️" },
  { label: "Sports", emoji: "⚽" },
  { label: "Theater", emoji: "🎭" },
  { label: "Gardening", emoji: "🌱" },
];

export const languages = [
  { name: "Bengali", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 80 },
];

export const sectionMeta: { id: string; label: string; index: string }[] = [
  { id: "home", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "education", label: "Education", index: "04" },
  { id: "projects", label: "Projects", index: "05" },
  { id: "certificates", label: "Certificates", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
];
