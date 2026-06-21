import {
  Network,
  Server,
  Headphones,
  Code2,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Award,
  Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Tahmid Hossain Ta-Seen",
  firstName: "Tahmid",
  lastName: "Ta-Seen",
  title: "IT Support Engineer",
  tagline: "IT Support Engineer & Network Enthusiast",
  email: "tahmidhossain209@gmail.com",
  phone: "+8801828-289668",
  location: "Mohammadpur, Dhaka - 1207, Bangladesh",
  dob: "20th September 2004",
  nationality: "Bangladeshi",
  socialHandle: "tahmidhtaseen",
  summary:
    "A motivated computer science diploma candidate with hands-on experience in IT support, network troubleshooting, and hardware maintenance. I recently worked as a Support Engineer at Avant Technology Limited, contributing to critical surveillance system deployments for the Bangladesh Police. I completed my industrial attachment at Tech Elevate Ltd., where I sharpened my ability to diagnose connectivity issues, deliver on-site support, and collaborate effectively within technical teams.",
  enthusiasm:
    "I genuinely love what I do and I'm excited to work with anyone—startups, enterprises, government teams, or fellow students. Whether it's a quick fix or a large-scale deployment, I bring curiosity, reliability, and a collaborative spirit to every project.",
};

export const socials: {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
}[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tahmidhtaseen",
    icon: Linkedin,
    handle: "tahmidhtaseen",
  },
  {
    label: "GitHub",
    href: "https://github.com/tahmidhtaseen",
    icon: Github,
    handle: "tahmidhtaseen",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tahmidhtaseen",
    icon: Twitter,
    handle: "tahmidhtaseen",
  },
];

export const contactInfo: { label: string; value: string; icon: LucideIcon; href?: string }[] = [
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
  { label: "Education Programs", value: "4", suffix: "" },
  { label: "Ready to Collaborate", value: "100", suffix: "%" },
];

export const skillCategories: {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}[] = [
  {
    title: "Networking",
    icon: Network,
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
    icon: Server,
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
    icon: Headphones,
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
    icon: Code2,
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
  highlights: string[];
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
      "Assisted in deploying critical surveillance systems for the Bangladesh Police.",
      "Contributed to projects explored during the thirteenth national election.",
      "Collaborated with field teams to ensure reliable on-site system performance.",
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
      "Gained practical exposure to enterprise IT workflows and support practices.",
      "Worked alongside experienced engineers diagnosing connectivity issues.",
      "Built a foundation in professional collaboration and technical communication.",
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
  icon: LucideIcon;
}[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University",
    period: "May 2026 – Present",
    location: "Dhaka, Bangladesh",
    detail: "Pursuing an undergraduate degree to deepen expertise in computer science and engineering.",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Govt. Graphic Arts Institute",
    period: "2022 – 2025",
    location: "Dhaka, Bangladesh",
    detail: "Completed a comprehensive diploma program covering programming, networking, and systems.",
    score: "Result: 3.05",
    icon: GraduationCap,
  },
  {
    degree: "Dakhil / Secondary School Certificate",
    institution: "Momenshahi D.S. Kamil Madrasah",
    period: "January 2019 – December 2021",
    location: "Bangladesh",
    detail: "Science group graduation with strong academic results.",
    score: "GPA: 4.61",
    icon: GraduationCap,
  },
  {
    degree: "Junior Dakhil Certificate (JDC)",
    institution: "Momenshahi D.S. Kamil Madrasah",
    period: "January 2018 – December 2018",
    location: "Bangladesh",
    detail: "Completed junior level education with distinction.",
    score: "GPA: 4.44",
    icon: GraduationCap,
  },
];

export const projects: {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
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
      "Contributed to developing a central database for educational information.",
      "Supported the implementation of hardware and network infrastructure.",
      "Helped equip training and resource centers as part of a Government of Bangladesh funded initiative.",
    ],
    icon: FolderKanban,
    tags: ["Data Management", "Government Project", "Education Tech"],
  },
];

export const certificates: {
  title: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "IT Support & Service",
    issuer: "National Skills Development Authority",
    description: "Level 3 certification recognizing competency in IT support and service delivery.",
    icon: Award,
  },
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    description: "Industry-recognized certification in configuring and managing MikroTik router networks.",
    icon: Award,
  },
];

export const interests: { label: string }[] = [
  { label: "Reading" },
  { label: "Traveling" },
  { label: "Volunteering" },
  { label: "Writing" },
  { label: "Sports" },
  { label: "Theater" },
  { label: "Gardening" },
];

export const languages = [
  { name: "Bengali", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 80 },
];

export const references = [
  {
    name: "Sajib Bhawal",
    role: "Instructor (Tech) & Head of Computer Department, 2nd Shift",
    organization: "Govt. Graphic Arts Institute",
    email: "sajibbhawal@gmail.com",
    phone: "+8801918311337",
  },
  {
    name: "Sharif Ahsan",
    role: "Head of Department, Training & Solutions",
    organization: "Tech Elevate Ltd. (Race Online Limited)",
    email: "sharif.ahsan@office.race.net.bd",
    phone: "+8801933361321",
  },
];

export const sectionMeta: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Briefcase },
  { id: "about", label: "About", icon: Heart },
  { id: "skills", label: "Skills", icon: Network },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];
