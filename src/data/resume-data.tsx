import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Michael Bishai",
  initials: "MB",
  location: "Los Angeles, California, PST",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Self-Starting Engineer with a passion for group collaboration, and hands-on experience in software development, 3D printing, and hardware troubleshooting.",
  summary:
    "Driven Interdisciplinary Engineer with a passion for making modern technology more accessible and user-friendly. Holding a degree in Computer Science, my educational journey didn't stop there; I've delved deep into Mechanical Engineering, applying its principles to product development. My expertise doesn't end with software and mechanics; I bridge these disciplines with Electrical Engineering, allowing for the creation of comprehensive products that seamlessly integrate software, electrical components, and hardware. This multidisciplinary approach enables me to innovate and refine technologies, ensuring they meet the needs of users in an intuitive and efficient manner.",
  avatarUrl: "https://avatars.githubusercontent.com/u/52522568?s=400&u=043c5416d9ebbbd5a769d317a4b97e731a0a6af3&v=4",
  personalWebsiteUrl: "https://wpm.design",
  contact: {
    email: "monitorthat@gmail.com",
    tel: "+12137137747",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cdnmonitor",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michael-bishai-4b1a44195/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/monitorthat",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chapman University",
      degree: "Bachelor's Degree in Computer Science & Minor in Psychology",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Chapman University",
      link: "https://chapman.edu",
      badges: ["On Site"],
      title: "Makerspace Technician",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Led the integration and repair of approximately 50 Prusa MK3 printers into the school's network via Raspberry Pi configuration and authored guides for overcoming eduroam connection challenges; developed a unique Python workshop utilizing a Boston Dynamics robot, enhancing the makerspace's educational offerings. Initiated the restoration of Prusa Multi Material Units, designed and fabricated a filament storage solution, and assumed key responsibility in liaising with Boston Dynamics for hardware issues, demonstrating a blend of technical prowess in software development, 3D printing, and hardware troubleshooting.",
    },
    {
      "company": "WPM Design",
      "link": "https://wpm.design/", // Replace with the actual website link if different
      "badges": ["Founder", "Hybrid"],
      "title": "Owner/Manager/Engineer",
      "logo": "YourLogoVariable", // Replace YourLogoVariable with the actual logo variable name
      "start": "2020", // Replace YourStartDate with the actual start date
      "end": "Present", // Or replace with actual end date if applicable
      "description": "At the helm of WPM Design, a pioneering luxury keyboard and manufacturing brand, I leveraged significant expertise in Fusion360, Visual Studio Code, and diverse 3D printing systems for advanced prototype fabrication using CNC and various materials like ABS, PLA, PETG, and NYLON. Guided a team of 6 engineers across mechanical and software disciplines, driving the design, engineering, and production of CNC and mold-produced products. My work in embedded engineering, including Arduino and microprocessors, has underpinned the technical excellence of our offerings. Additionally, I expanded our business model to include B2B manufacturing, producing thousands of garments monthly for large brand companies, demonstrating versatility and innovative leadership in manufacturing."
    }
    ,
    {
      company: "Chong Hing Jewelers",
      link: "https://chonghing.com",
      badges: ["Hybrid", "Remote"],
      title: "Software Engineer",
      logo: "YourLogoVariable", // Replace YourLogoVariable with the actual logo variable name
      start: "2018",
      end: "2021",
      description: "Spearheaded frontend development for an e-commerce platform and backend inventory system enhancement, significantly improving online sales and operational efficiency. Actively collaborated with luxury brands such as Omega, Patek Philippe, Panerai, Chanel, and Gucci, aligning their online branding requirements with our digital presence, thereby ensuring cohesive brand representation and enhanced customer engagement."
    },
    
    {
      company: "Vanish Proxies",
      badges: ["Founder", "Remote"],
      title: "Owner",
      logo: "YourLogoVariable", // Replace YourLogoVariable with the actual logo variable name
      start: "2020",
      end: "2022",
      description: "Founded and led Vanish Proxies, overseeing all aspects of frontend and backend development for the e-commerce platform, resulting in a robust product deployment process. Delivered exceptional customer support and managed order inquiries, fostering strong customer relationships. Drove product development strategies, significantly contributing to the company's growth, achieving over 1400 customers and surpassing $120K in sales."
    }
    ,
  ],
  skills: [
    "JavaScript",
    "Java",
    "Python",
    "Node.js",
    "C++",
    "Fusion360",
    "Visual Studio Code",
    "Adobe Illustrator",
    "Linux",
    "Additive Manufacturing",
    "API Development",
    "Embedded Systems",
    "E-commerce",
    "Stripe"
  ],
  projects: [
    {
      title: "BostonDynamics Workshop",
      techStack: [
        "Chapman University",
        "Python",
        "Workshop",
        "Automation",
        "Git"
      ],
      description: "A platform built to simplify and teach students how to program a Boston Dynamics SPOT Robot.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ChapmanDCILab/SPOT-Workshop",
      },
    },
    {
      title: "Hydroponic Scheduling",
      techStack: ["Side Project", "Python", "Javascript", "Embedded Systems", "Arduino", "Blockly"],
      description:
        "Blockly based pseudolanguage which communicates between an interpreting server and an arduino to control and collect sensor data in a modular system.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/cdnmonitor/hydroponic-scheduling",
      },
    },
    {
      title: "Algorithm Jitsu",
      techStack: ["Java", "Networking", "AI", "Command Line", "Server-Client Architecture"],
      description: "A command line implementation of the Club Penguin Card Jitsu game written in Java written for Algorithm Analysis. Inspired by childhood memories of ClubPenguin, this project aims to recreate the game for algorithm testing in a PvP setting. Utilizes network sockets for client-server communication and logs battles for AI training against human players. Features AI with varying difficulty levels.",
      logo: "AlgorithmJitsuLogo", // Please replace with your actual logo variable or provide more details if needed
      link: {
        label: "github.com", // Replace with the actual label if different
        href: "https://github.com/cdnmonitor/algorithm-jitsu", // Replace with the actual repository link
      }
    },
    {
      title: "OnDemand",
      techStack: ["Web Monitoring", "Notifications", "Web Hooks", "Subscription-Based Service"],
      description: "A subscription-based tool designed to give consumers and reselling groups an edge by monitoring stock availability on specific websites like BestBuy and GameStop. OnDemand notifies subscribers through web hooks when an item is back in stock, ensuring early access over regular customers. Priced at $5 per month for consumers and $50 per month for reselling groups, it's an essential tool for avid shoppers and resellers aiming to capitalize on high-demand products.",
      logo: "OnDemandLogo", // Replace with your actual logo variable or provide details for a specific design if needed
      link: {
        label: "Learn More", // Adjust the label as necessary
      }
    }
    
  ],
} as const;
