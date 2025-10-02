export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  duration: string;
  level: string;
  thumbnail: string;
  image: string;
  description: string;
  whyChoose: string[];
  curriculum: {
    year: string;
    modules: string[];
  }[];
  careerPaths: string[];
  admissionRequirements: {
    title: string;
    items: string[];
  }[];
  additionalInfo?: {
    title: string;
    content: string;
  }[];
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "BA (Hons) Business Management and Marketing with Foundation Year",
    slug: "ba-hons-business-management-and-marketing-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/business-management.jpg",
    image: "/images/courses/business-management-large.jpg",
    description:
      "Unlock your potential in the creative and strategic world of business and marketing. 💡 This four-year program, offered by top UK universities, is methodically designed to give you the business acumen and marketing expertise you need for a successful career in the global marketplace. The integrated Foundation Year provides a supportive pathway into higher education, building the essential knowledge and academic skills you need to excel in your degree, even if you don't meet the standard entry requirements.",
    whyChoose: [
      "A Strong Foundation: Start your academic journey with the core knowledge and skills you need to succeed in higher education and your future career.",
      "Expert-Led Curriculum: Learn from seasoned industry professionals and business leaders who bring practical, real-world insights directly into the classroom.",
      "Real-World Experience: Get job-ready by taking part in internships and hands-on projects that allow you to apply your skills to real business challenges.",
      "A Global Perspective: Develop the crucial global mindset needed to succeed in today's interconnected business and marketing environments.",
      "Modern University Facilities: You'll study in contemporary classrooms and have access to the latest technology and resources at our partner universities.",
    ],
    curriculum: [
      {
        year: "Foundation Year: Building the Basics",
        modules: [
          "Introduction to Business and Management",
          "Marketing Fundamentals",
          "Academic Skills and Research Techniques",
        ],
      },
      {
        year: "Year 1: Core Business & Marketing Principles",
        modules: [
          "Financial Accounting and Analysis",
          "Principles of Marketing",
          "Organisational Behaviour",
          "Digital Marketing Strategies",
        ],
      },
      {
        year: "Year 2: Advanced Strategy",
        modules: [
          "Strategic Marketing Management",
          "Advanced Organisational Behaviour",
          "Global Marketing Strategy",
        ],
      },
      {
        year: "Year 3: Specialization & Final Project",
        modules: [
          "International Business Management",
          "Capstone Project / Dissertation",
        ],
      },
    ],
    careerPaths: [
      "Marketing Manager",
      "Business Development Manager",
      "Digital Marketing Manager",
      "Brand Manager",
      "Market Research Analyst",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Academic Background: A-Levels or an equivalent high school qualification.",
          "English Proficiency: A minimum IELTS score (or equivalent) for non-native English speakers.",
          "Additional Prerequisites: A compelling personal statement and, in some cases, a successful interview.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "BSc (Hons) Computing with Integrated Foundation Year",
    slug: "bsc-hons-computing-with-integrated-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/computing.jpg",
    image: "/images/courses/computing-large.jpg",
    description:
      "Launch your career in the fast-paced world of technology with the BSc Computing with Integrated Foundation Year. 🚀 Blossom Educare is here to guide you to top UK universities offering this program, which is designed to provide a comprehensive understanding of computing, from fundamental principles to the advanced practical skills that are crucial for the tech sector. The integrated Foundation Year provides a solid introduction to computing and essential academic skills, preparing you for the advanced, specialized study in the years to follow.",
    whyChoose: [
      "A Strong Foundation: The initial year provides a thorough introduction to computing concepts and academic skills, ensuring you're fully prepared for the challenges of the degree.",
      "Expert-Led Teaching: Learn from experienced professionals and industry experts who bring practical, up-to-date knowledge and real-world experience directly into the classroom. 🎓",
      "Hands-On Practical Skills: Get job-ready by participating in real-world projects, internships, and intensive lab work throughout your studies.",
      "An Innovative Curriculum: Stay at the forefront of the tech industry with a syllabus that covers the latest advancements in software development, cybersecurity, and data analysis.",
      "State-of-the-Art University Facilities: You'll have access to modern computer labs, cutting-edge software tools, and a supportive learning environment at our partner universities.",
    ],
    curriculum: [
      {
        year: "Foundation Year: Building the Basics",
        modules: [
          "Introduction to Computing",
          "Academic Skills and Research Techniques",
          "Basic Programming and Problem-Solving",
        ],
      },
      {
        year: "Year 1: Core Computing Principles",
        modules: [
          "Fundamentals of Computer Science",
          "Software Development Principles",
          "Database Systems",
        ],
      },
      {
        year: "Year 2: Advanced Skills",
        modules: [
          "Web Development and Design",
          "Cybersecurity Essentials",
          "Data Structures and Algorithms",
        ],
      },
      {
        year: "Year 3: Specialization & Final Project",
        modules: [
          "Advanced Programming Techniques",
          "Artificial Intelligence and Machine Learning",
          "Capstone Project / Dissertation",
        ],
      },
    ],
    careerPaths: [
      "Software Developer",
      "Systems Analyst",
      "Cybersecurity Specialist",
      "Data Scientist",
      "IT Project Manager",
      "Web Developer",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Academic Background: A-Levels or an equivalent high school qualification.",
          "English Proficiency: A minimum IELTS score (or equivalent) for non-native English speakers.",
          "Additional Prerequisites: A compelling personal statement and, in some cases, a successful interview.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "MBA – International",
    slug: "mba-international",
    category: "master-courses",
    duration: "1-2 Years",
    level: "Postgraduate",
    thumbnail: "/images/courses/mba.jpg",
    image: "/images/courses/mba-large.jpg",
    description:
      "Elevate your career and become a global leader with the MBA – International. 🌍 This program is designed for ambitious professionals who want to enhance their leadership and management skills in a global context. Over a flexible 12 or 24-month period, you'll gain a deep understanding of all key business functions and the specific challenges facing organizations with global operations. This degree allows you to study at a postgraduate level while maintaining and enhancing your contribution to your employer.",
    whyChoose: [
      "Master Global Business Strategy: 📈 Critically analyze international markets, resources, and operations, applying relevant theories to understand global influences.",
      "Lead Across Cultures: Develop the cross-cultural competence needed to manage international teams and understand the ethical and strategic implications of operating globally.",
      "Harness Technology and Innovation: Understand how evolving technologies and information systems drive business transformation, innovation, and decision-making.",
      "Drive Strategic Implementation: Learn to execute strategic business developments effectively and ethically across various organizational contexts.",
      "Innovate and Research: Design creative, research-led solutions to complex international business problems with an entrepreneurial mindset.",
    ],
    curriculum: [
      {
        year: "Core Modules",
        modules: [
          "Postgraduate Study Skills, Research Methods, and Ethics",
          "International Finance and Operations",
          "Principles of International Marketing",
          "Cross-Cultural Leadership and Human Capital Management",
          "International Strategic Management, Innovation, and Entrepreneurship",
          "Postgraduate Integrative Project",
        ],
      },
    ],
    careerPaths: [
      "International Business Manager",
      "Global Strategy Consultant",
      "International Marketing Director",
      "Chief Executive Officer",
      "Business Development Director",
    ],
    admissionRequirements: [
      {
        title: "UK Applicants",
        items: [
          "An undergraduate degree equivalent to a UK first degree (2:2 or above), plus relevant professional experience.",
          "English Language Proficiency: An IELTS score of 6.5 or equivalent, or proof of being previously taught in English.",
        ],
      },
      {
        title: "International Applicants",
        items: [
          "A relevant undergraduate qualification obtained in your home country that is equivalent to a UK 2:2 honours degree.",
          "Note: If you don't meet the standard academic grades but can demonstrate that your significant life or work experience makes you a suitable candidate, your application will still be strongly considered.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "BA (Hons) Health and Social Care with Foundation Year",
    slug: "ba-hons-health-and-social-care-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/health-social-care.jpg",
    image: "/images/courses/health-social-care-large.jpg",
    description:
      "Begin a rewarding career and make a real difference with the BA (Hons) Health and Social Care with Foundation Year program. Blossom Educare is here to guide you to top UK universities offering this course, which is designed to give you the extensive knowledge and practical skills needed to excel in the health and social care sectors. The integrated Foundation Year provides a supportive pathway into higher education, ensuring you're fully prepared for the challenges of the degree.",
    whyChoose: [
      "A Strong Foundation: The initial year provides a distinct advantage, preparing you with the essential academic and practical abilities to succeed in your degree and future career.",
      "Expert-Led Teaching: Learn from seasoned practitioners and renowned academics who bring real-world perspectives and specialized knowledge into the classroom.",
      "Practical, Hands-On Experience: Gain invaluable experience through internships and hands-on projects, ensuring you're job-ready upon graduation.",
      "A Comprehensive Approach: Get an in-depth understanding of health and social care, covering the latest practices, policies, and technologies shaping the industry.",
      "Modern University Facilities: Study in contemporary learning environments with access to state-of-the-art materials and technology at our partner universities.",
    ],
    curriculum: [
      {
        year: "Foundation Year",
        modules: [
          "Introduction to Health and Social Care",
          "Academic Skills and Research Techniques",
          "Fundamental Principles of Health and Wellbeing",
        ],
      },
      {
        year: "Year 1",
        modules: [
          "Human Growth and Development",
          "Health Promotion and Education",
          "Social Policy and Welfare",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Mental Health and Wellbeing",
          "Safeguarding Individuals",
          "Management in Health and Social Care",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "Community Health and Social Care",
          "Leadership in Health and Social Care",
          "Final Project / Dissertation",
        ],
      },
    ],
    careerPaths: [
      "Healthcare Manager",
      "Social Worker",
      "Community Health Coordinator",
      "Health Promotion Specialist",
      "Residential Care Manager",
      "Public Health Administrator",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Educational Background: A high school diploma or an equivalent qualification.",
          "English Proficiency: A minimum IELTS score (or equivalent) for non-native English speakers.",
          "Additional Prerequisites: A compelling personal statement and a successful interview.",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "BSc (Hons) Accounting and Finance with Foundation Year",
    slug: "bsc-hons-accounting-and-finance-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/accounting-finance.jpg",
    image: "/images/courses/accounting-finance-large.jpg",
    description:
      "Embark on your journey into the world of finance with the BSc (Hons) Accounting and Finance with Foundation Year program, offered by our esteemed partner, Canterbury Christ Church University (CCCU). 🎓 This four-year program is the perfect starting point if you're passionate about finance but don't meet the direct entry requirements for a standard three-year degree. The integrated Foundation Year is designed to equip you with the essential academic and subject-specific skills needed to succeed.",
    whyChoose: [
      "Your Pathway to a Degree: The Foundation Year bridges the gap, providing the core knowledge and academic skills—like critical thinking and research—to confidently progress to the full degree.",
      "A High-Quality Education: Study a curriculum designed with input from industry professionals, ensuring that what you learn is current, relevant, and meets the demands of the global financial sector.",
      "Learn from Experts: The faculty includes experienced academics and finance professionals who bring invaluable real-world insights and practical knowledge into the classroom.",
      "Become a Job-Ready Graduate: The program's blend of theoretical knowledge and practical skills is designed to produce competitive, work-ready graduates who can make an immediate impact.",
    ],
    curriculum: [
      {
        year: "Foundation Year",
        modules: [
          "Academic Skills Development (Research and Writing)",
          "Introduction to Accounting (Financial and Managerial)",
          "Mathematics for Business",
          "Principles of Financial Management",
        ],
      },
      {
        year: "Year 1",
        modules: [
          "Business Law",
          "Business Economics",
          "Financial Accounting",
          "Management Accounting",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Taxation",
          "Corporate Finance",
          "Financial Reporting",
          "Auditing and Assurance",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "Strategic Management Accounting",
          "International Finance",
          "Investment Analysis",
          "Dissertation/Final Project in Accounting and Finance",
        ],
      },
    ],
    careerPaths: [
      "Chartered Accountant",
      "Financial Analyst",
      "Tax Advisor",
      "Investment Banker",
      "Internal Auditor",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "A minimum of two A-Levels or an equivalent qualification.",
          "GCSEs in Maths and English at Grade C/4 or above.",
          "A compelling personal statement explaining your interest in the course.",
          "Proof of English proficiency for international students (e.g., IELTS score of 6.0 or equivalent).",
          "Relevant work experience may also be considered.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "Professional Accreditation",
        content:
          "This degree often provides exemptions from professional exams with bodies like ACCA and CIMA, accelerating your path to becoming a chartered accountant.",
      },
    ],
  },
  {
    id: "6",
    title: "BSc (Hons) Business Management with Foundation Year",
    slug: "bsc-hons-business-management-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/business-management-2.jpg",
    image: "/images/courses/business-management-2-large.jpg",
    description:
      "This carefully designed four-year BSc (Hons) program is your direct path to a successful career in the complex corporate world. 📈 The integrated Foundation Year is specifically planned to provide you with the essential academic and analytical skills you'll need to excel in your degree and beyond. This course ensures you get a strong start by developing your critical thinking, research, and writing abilities. You'll combine this theoretical understanding with practical experience through projects and internships, making you a highly capable and employable graduate.",
    whyChoose: [
      "A Strong Academic Foundation: The Foundation Year fully prepares you for advanced study by building essential university-level skills.",
      "Practical, Real-World Learning: The program emphasizes hands-on experience through internships and projects, giving you a competitive edge in the job market.",
      "Expert Guidance: Learn from experienced tutors who bring current, relevant industry knowledge directly into the classroom.",
      "Excellent Career Prospects: Graduate with the skills needed for a wide range of business careers and benefit from dedicated career support to help you land your first role.",
    ],
    curriculum: [
      {
        year: "Foundation Year",
        modules: [
          "An introduction to the fundamentals of business and key academic skills.",
        ],
      },
      {
        year: "Year 1",
        modules: [
          "Management Principles",
          "Business Economics",
          "Marketing Foundations",
          "Financial Accounting",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Business Law",
          "Management Accounting",
          "Operations Management",
          "Human Resource Management",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "International Business",
          "Entrepreneurship",
          "Strategic Management",
          "Dissertation/Final Project",
        ],
      },
    ],
    careerPaths: [
      "Business Analyst",
      "Human Resources Manager",
      "Operations Manager",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "A minimum of two A-Levels or an equivalent qualification.",
          "GCSEs in Maths and English at Grade C/4 or above.",
          "A compelling personal statement explaining your interest in the course.",
          "Proof of English proficiency for international students (e.g., IELTS score of 6.0).",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "Career Support",
        content:
          "Graduates also find success in sales, finance, project management, and consulting. The program provides extensive career support, including networking events, CV workshops, and job placement assistance.",
      },
      {
        title: "FAQs",
        content:
          "What is the foundation year in a business management degree? It's the first year of this four-year program, designed to equip you with the essential academic and subject-specific skills needed to succeed in the following three years of the core degree.",
      },
    ],
  },
];
