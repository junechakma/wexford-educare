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
    thumbnail: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
    image: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
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
    thumbnail: "/images/courses/robot-engineers-invent-robots-of-the-future-that-c-2025-03-09-15-56-23-utc-min-2048x1365.jpg",
    image: "/images/courses/robot-engineers-invent-robots-of-the-future-that-c-2025-03-09-15-56-23-utc-min-2048x1365.jpg",
    description:
      "Launch your career in the fast-paced world of technology with the BSc Computing with Integrated Foundation Year. 🚀 Wexford Educare is here to guide you to top UK universities offering this program, which is designed to provide a comprehensive understanding of computing, from fundamental principles to the advanced practical skills that are crucial for the tech sector. The integrated Foundation Year provides a solid introduction to computing and essential academic skills, preparing you for the advanced, specialized study in the years to follow.",
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
    thumbnail: "/images/courses/confident-businesspeople-standing-in-office-2025-04-04-20-28-40-utc-min-2048x1365.jpg",
    image: "/images/courses/confident-businesspeople-standing-in-office-2025-04-04-20-28-40-utc-min-2048x1365.jpg",
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
    thumbnail: "/images/courses/medical-students-practicing-cpr-during-training-2025-02-12-03-26-00-utc-min-2048x1365.jpg",
    image: "/images/courses/medical-students-practicing-cpr-during-training-2025-02-12-03-26-00-utc-min-2048x1365.jpg",
    description:
      "Begin a rewarding career and make a real difference with the BA (Hons) Health and Social Care with Foundation Year program. Wexford Educare is here to guide you to top UK universities offering this course, which is designed to give you the extensive knowledge and practical skills needed to excel in the health and social care sectors. The integrated Foundation Year provides a supportive pathway into higher education, ensuring you're fully prepared for the challenges of the degree.",
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
    thumbnail: "/images/courses/modern-asian-businessman-with-high-confidence-comm-2025-03-13-23-46-20-utc-min-2048x1365.jpg",
    image: "/images/courses/modern-asian-businessman-with-high-confidence-comm-2025-03-13-23-46-20-utc-min-2048x1365.jpg",
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
    thumbnail: "/images/courses/group-of-businesspeople-attending-a-seminar-2025-02-03-10-03-11-utc-min-2048x1365.jpg",
    image: "/images/courses/group-of-businesspeople-attending-a-seminar-2025-02-03-10-03-11-utc-min-2048x1365.jpg",
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
  {
    id: "7",
    title: "BA (Hons) Business and Management with Foundation Year",
    slug: "ba-hons-business-and-management-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/male-and-female-business-people-in-a-meeting-at-a-2025-04-05-07-23-57-utc-min-2048x1365.jpg",
    image: "/images/courses/male-and-female-business-people-in-a-meeting-at-a-2025-04-05-07-23-57-utc-min-2048x1365.jpg",
    description:
      "This degree is your ideal pathway to a successful career in business, especially if you don't currently meet the requirements for direct university entry. The integrated Foundation Year provides you with the essential academic and subject-specific knowledge you need to thrive, preparing you for the full three-year degree program. 🎓 The course blends core business theory with practical, real-world application, giving you a complete understanding of modern business.",
    whyChoose: [
      "Build a Strong Foundation: The initial year is dedicated to strengthening your core knowledge in management, economics, and business mathematics, ensuring you're fully prepared for the advanced topics of the degree.",
      "Comprehensive Curriculum: Gain in-depth knowledge across key business areas—including finance, marketing, human resources, and strategic management—so you can understand how successful organizations operate.",
      "Practical Skill Development: The program emphasizes hands-on experience through real-world case studies, projects, and potential internship opportunities, allowing you to apply classroom theory to practical business scenarios.",
      "Versatile Career Pathways: A business and management degree opens doors to countless industries. You'll graduate with a diverse skill set that's highly valued by employers in finance, marketing, HR, operations, and beyond.",
    ],
    curriculum: [
      {
        year: "Foundation Year: Building the Basics",
        modules: [
          "Introduction to Business and Management",
          "Mathematical Methodologies for Business",
          "Economic Ideas",
          "Academic and Research Skills",
          "Financial Accounting Overview",
          "Principles of Marketing",
        ],
      },
      {
        year: "Year 1: Core Business Principles",
        modules: [
          "The Business Environment",
          "Organisational Behaviour",
          "Financial Management",
          "Marketing Management",
          "Human Resource Management",
        ],
      },
      {
        year: "Year 2: Advanced Concepts",
        modules: [
          "Operations Management",
          "Strategic Management",
          "Corporate Ethics and Social Responsibility",
          "Business Research Methods",
          "Innovation and Entrepreneurship",
        ],
      },
      {
        year: "Year 3: Specialisation and Leadership",
        modules: [
          "International Business",
          "Leadership and Management Skills Development",
          "Project Management",
          "Self-Directed Project",
        ],
      },
    ],
    careerPaths: [
      "Marketing Manager",
      "Financial Analyst",
      "Operations Manager",
      "Human Resources Manager",
      "Business Consultant",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "Academic Requirements",
        items: [
          "Applicants typically need GCSEs and A-Levels or equivalent qualifications. Relevant professional experience may also be considered.",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Applications are typically submitted online via UCAS (for UK students) or the university's direct application portal (for international students).",
          "International students may need to provide proof of English language proficiency through a recognized test like IELTS.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "FAQs",
        content:
          "What subjects are taught in the foundation year? The foundation year focuses on the core principles of business, management, economics, and business mathematics. It also develops crucial academic skills like research, critical thinking, and academic writing to prepare you for the rest of your degree.",
      },
    ],
  },
  {
    id: "8",
    title: "BA (Hons) Business Management Top-Up",
    slug: "ba-hons-business-management-top-up",
    category: "top-up-courses",
    duration: "1 Year",
    level: "Undergraduate",
    thumbnail: "/images/courses/diverse-group-of-happy-graduates-celebrating-with-2025-03-11-15-11-33-utc-min-2048x1366.jpg",
    image: "/images/courses/diverse-group-of-happy-graduates-celebrating-with-2025-03-11-15-11-33-utc-min-2048x1366.jpg",
    description:
      "Upgrade your existing qualification to a full Bachelor's degree in just one year. This BA Business Management Top-Up program is specifically designed for students who have already completed a Foundation Degree, HND, or an equivalent qualification in a business-related field. The curriculum focuses on developing your strategic and analytical thinking, preparing you for leadership roles in the corporate world.",
    whyChoose: [
      "Fast-Track to a Full Degree: This one-year program is the quickest route to converting your HND or Foundation Degree into a full BA (Hons), significantly enhancing your academic standing and career prospects.",
      "Advanced Business Curriculum: The course delves into advanced topics in strategic management, leadership, and international business, giving you a deeper understanding of how global industries operate.",
      "Practical, Applied Learning: The program emphasizes hands-on experience through case studies, live projects, and simulations of real-world business environments, allowing you to directly apply your knowledge.",
      "Enhanced Career Progression: Graduates are prepared for strategic and leadership positions. This degree makes you a more competitive candidate for roles in management, marketing, finance, and human resources.",
      "Flexible Study Options: Designed with professionals in mind, many institutions offer flexible part-time or online study options to help you balance your education with your personal and professional life.",
    ],
    curriculum: [
      {
        year: "Core Modules",
        modules: [
          "Strategic Management",
          "International Business",
          "Leadership and Management",
          "Contemporary Business Issues",
          "Business Research Methods",
        ],
      },
      {
        year: "Elective Modules",
        modules: [
          "Project Management",
          "Digital Marketing",
          "Financial Management",
          "Human Resource Management",
        ],
      },
      {
        year: "Final Project",
        modules: [
          "Capstone project or dissertation on a relevant business topic",
        ],
      },
    ],
    careerPaths: [
      "Marketing Manager",
      "Financial Analyst",
      "Human Resources (HR) Manager",
      "Operations Manager",
      "Business Consultant",
      "Project Manager",
    ],
    admissionRequirements: [
      {
        title: "Academic Requirements",
        items: [
          "Applicants must have successfully completed an HND, Foundation Degree, or an equivalent Level 5 qualification in Business or a related subject.",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Applications are typically submitted via the university's online portal.",
          "International students may need to provide proof of English language proficiency through a recognized test like IELTS.",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "BA (Hons) Business Management (3 Years)",
    slug: "ba-hons-business-management-3-years",
    category: "bachelor-courses",
    duration: "3 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/group-of-four-confident-smiling-multiethnical-stud-2024-12-13-04-31-44-utc-min-2048x1365.jpg",
    image: "/images/courses/group-of-four-confident-smiling-multiethnical-stud-2024-12-13-04-31-44-utc-min-2048x1365.jpg",
    description:
      "This three-year undergraduate degree provides a comprehensive understanding of modern business principles and management practices. It is the perfect choice for aspiring professionals seeking a versatile qualification that blends academic knowledge with practical skills, ensuring you are fully prepared to meet the challenges of the global corporate world. The curriculum covers all essential business areas, including marketing, finance, human resources, and strategic planning.",
    whyChoose: [
      "Comprehensive Business Knowledge: Gain a thorough understanding of every major business discipline, from marketing and finance to strategic management and human resources.",
      "Practical, Real-World Experience: The program emphasizes hands-on learning through internships, work placements, and live projects, allowing you to apply theory to real business challenges.",
      "Versatile Career Pathways: A business management degree opens doors to countless industries. You'll graduate with highly transferable skills, preparing you for roles in finance, marketing, operations, and beyond.",
      "Professional Skill Development: The curriculum focuses on developing the professional skills essential for career advancement, including leadership, communication, and critical thinking.",
      "Global Business Perspective: In today's interconnected world, a global outlook is vital. This degree incorporates international business modules to give you an understanding of foreign markets and cross-cultural management.",
    ],
    curriculum: [
      {
        year: "Year 1: Foundational Concepts",
        modules: [
          "Introduction to Business Management",
          "Marketing Foundations",
          "Financial Accounting",
          "Organisational Behaviour",
          "Business Economics",
          "Academic and Professional Skills",
        ],
      },
      {
        year: "Year 2: Core Business Functions",
        modules: [
          "Operations Management",
          "Human Resource Management",
          "Business Law",
          "Digital Business",
          "Business Research Methods",
          "Management Accounting",
        ],
      },
      {
        year: "Year 3: Strategic & Advanced Topics",
        modules: [
          "Strategic Management",
          "International Business",
          "Leadership and Management Skills Development",
          "Project Management",
          "Business Ethics and Corporate Social Responsibility",
          "Capstone Project",
        ],
      },
    ],
    careerPaths: [
      "Marketing Manager",
      "Financial Analyst",
      "Human Resources Manager",
      "Operations Manager",
      "Business Consultant",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "Academic Requirements",
        items: [
          "Applicants typically need A-Levels and GCSEs or equivalent qualifications. Relevant professional experience may also be considered.",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Applications are submitted online via UCAS (for UK students) or the university's direct application portal (for international students).",
          "International students may need to provide proof of English language proficiency through a recognized test like IELTS.",
        ],
      },
    ],
  },
  {
    id: "10",
    title: "BSc (Hons) Accounting and Finance (3 Years)",
    slug: "bsc-hons-accounting-and-finance-3-years",
    category: "bachelor-courses",
    duration: "3 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/portrait-of-young-beautiful-latin-american-female-2025-03-24-23-17-26-utc-min-2048x1366.jpg",
    image: "/images/courses/portrait-of-young-beautiful-latin-american-female-2025-03-24-23-17-26-utc-min-2048x1366.jpg",
    description:
      "Build a successful career in the fast-paced world of accounting and finance with this three-year undergraduate degree. The program is designed to provide you with a comprehensive understanding of accounting principles and financial management, blending rigorous academic theory with practical, real-world application. You will gain expertise in critical areas like corporate finance, financial markets, and management accounting.",
    whyChoose: [
      "Professional Accreditation & Exam Exemptions: This degree is often accredited by professional bodies like the ACCA, CIMA, and ICAEW. This means graduates may receive exemptions from several professional exams, providing a faster route to becoming a chartered accountant.",
      "Comprehensive Curriculum: Gain a deep understanding of all key aspects of the financial industry, including auditing, taxation, management accounting, and financial management.",
      "Practical Experience: The program emphasizes hands-on learning through internships, work placements, and real-world projects, allowing you to apply your knowledge and gain valuable industry experience.",
      "Excellent Career Prospects: Graduates are in high demand across public and private sectors, with opportunities in major accounting firms, financial institutions, and corporate finance departments.",
    ],
    curriculum: [
      {
        year: "Year 1: Foundational Principles",
        modules: [
          "Introduction to Accounting",
          "Business Economics",
          "Quantitative Methods",
          "Principles of Finance",
          "Academic and Research Skills",
        ],
      },
      {
        year: "Year 2: Core Concepts & Practice",
        modules: [
          "Financial Accounting & Reporting",
          "Managerial Accounting",
          "Corporate Finance",
          "Auditing & Assurance",
          "Taxation",
          "Business Law",
        ],
      },
      {
        year: "Year 3: Advanced & Strategic Topics",
        modules: [
          "Advanced Financial Accounting",
          "Strategic Management Accounting",
          "Investment Analysis",
          "Financial Risk Management",
          "International Finance",
          "Dissertation/Major Project",
        ],
      },
    ],
    careerPaths: [
      "Chartered Accountant",
      "Financial Analyst",
      "Corporate Treasurer",
      "Tax Consultant",
      "Auditor",
      "Financial Advisor",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Applicants typically need A-Levels and GCSEs in relevant subjects. Equivalent qualifications and relevant professional experience may also be considered.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "Professional Accreditation",
        content:
          "These degrees are often accredited by major professional bodies like ACCA, CIMA, and ICAEW, which can grant you exemptions from certain professional exams.",
      },
    ],
  },
  {
    id: "11",
    title: "CertHE Business Management",
    slug: "certhe-business-management",
    category: "certhe",
    duration: "1 Year",
    level: "Certificate",
    thumbnail: "/images/courses/multiracial-group-young-people-2024-10-18-07-23-04-utc-min-2048x1367.jpg",
    image: "/images/courses/multiracial-group-young-people-2024-10-18-07-23-04-utc-min-2048x1367.jpg",
    description:
      "Launch your business career in just one year with a Certificate of Higher Education (CertHE) in Business Management. This intensive program provides a university-level qualification, giving you a solid foundation in the core concepts and practices of the modern business world. This course is the perfect choice if you are looking to start your career, formalize your existing knowledge, or take the first step towards a full Bachelor's degree.",
    whyChoose: [
      "Fast-Track Qualification: Earn a valuable, standalone university-level certificate in just one year of full-time study.",
      "Industry-Relevant Skills: The curriculum is developed with input from industry experts, ensuring you learn the practical skills in finance, marketing, and management that employers are looking for.",
      "Flexible Learning: A blend of on-campus and online learning helps you balance your studies with work or other personal commitments.",
      "Expert Tutors: Learn from seasoned professionals who bring their real-world business experience and practical insights into the classroom.",
      "Dedicated Career Support: Receive expert guidance with CV writing, interview preparation, and job placement to ensure a smooth transition into the workforce.",
    ],
    curriculum: [
      {
        year: "Semester 1: Foundational Concepts",
        modules: [
          "Introduction to Business Management",
          "Marketing Principles",
          "Financial Accounting",
        ],
      },
      {
        year: "Semester 2: Core & Elective Modules",
        modules: [
          "Human Resources Management",
          "Operations Management",
          "Elective: Business Law or Business and Technology",
        ],
      },
    ],
    careerPaths: [
      "Business Administrator",
      "Marketing Assistant",
      "Human Resources (HR) Assistant",
      "Operations Coordinator",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "Academic Qualifications",
        items: [
          "A minimum of five GCSEs at Grade C/4 or above (including English and Maths) or equivalent qualifications. Relevant work experience may be considered on an individual basis.",
        ],
      },
      {
        title: "English Language Proficiency",
        items: [
          "Non-native English speakers typically require an IELTS score of 6.0 or equivalent.",
        ],
      },
      {
        title: "Additional Requirements",
        items: [
          "A brief statement outlining your interest in business management and your career ambitions.",
          "Suitable candidates may be invited for an interview to assess their fit for the program.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "Pathway to a Full Degree",
        content:
          "The CertHE in Business Management also serves as the first year of a full Bachelor's degree. Upon successful completion, you can progress directly into the second year of a BA/BSc in Business Management or a related field.",
      },
    ],
  },
  {
    id: "12",
    title: "BA (Hons) Education Studies",
    slug: "ba-hons-education-studies",
    category: "bachelor-courses",
    duration: "3 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/group-of-friends-sitting-outdoors-drinking-beer-s-2024-10-18-04-41-15-utc-min-2048x1367.jpg",
    image: "/images/courses/group-of-friends-sitting-outdoors-drinking-beer-s-2024-10-18-04-41-15-utc-min-2048x1367.jpg",
    description:
      "Are you passionate about shaping the future of education? This BA (Hons) Education Studies degree, offered by our esteemed partner institutions, is designed for aspiring professionals who want to deepen their understanding of the pedagogical, social, and philosophical issues in education today. This comprehensive program blends academic theory with practical application, equipping you with the critical thinking and intellectual skills essential for management and leadership roles in both national and international educational contexts.",
    whyChoose: [
      "Deepen Your Understanding: Develop a profound grasp of the key theories, techniques, and insights vital for success in the education sector.",
      "Analyze Modern Education: Critically examine current teaching practices and evaluate UK educational policies from an informed, global perspective.",
      "Enhance Your Professional Practice: Advance your own professional skills through critical self-assessment, reflection, and analysis.",
      "Master Educational Research: Acquire a comprehensive understanding of the tools and techniques needed to conduct impactful research in education.",
    ],
    curriculum: [
      {
        year: "Core Topics",
        modules: [
          "Educational Theory and Philosophy",
          "Contemporary Educational Practices",
          "Educational Research Methods",
          "Policy Development and Analysis",
          "Leadership in Education",
        ],
      },
    ],
    careerPaths: [
      "Educational Leadership and Management",
      "Policy Development",
      "Quality Assurance and Compliance",
      "Training and Development",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Contact Wexford Educare for detailed entry requirements and application process.",
        ],
      },
    ],
  },
  {
    id: "13",
    title: "LLB (Hons) Law with Foundation Year",
    slug: "llb-hons-law-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/group-of-businesspeople-attending-a-seminar-2025-02-03-10-03-11-utc-min-2048x1365 (1).jpg",
    image: "/images/courses/group-of-businesspeople-attending-a-seminar-2025-02-03-10-03-11-utc-min-2048x1365 (1).jpg",
    description:
      "Dreaming of a career in law but need the right starting point? The LLB (Hons) Law with Foundation Year, offered by our partner universities, is the ideal pathway to build the robust legal knowledge and academic skills required to succeed. This program is specifically designed for aspiring legal professionals who need a supportive first step. The integrated Foundation Year provides essential study skills and subject knowledge, ensuring you are fully prepared for the rigours of a university law degree.",
    whyChoose: [
      "Build a Strong Academic Foundation: Gain the essential study habits and critical thinking skills needed to excel at the university level.",
      "Develop Core Legal Expertise: Master a broad range of legal and research skills, preparing you to tackle diverse legal challenges.",
      "Achieve Career Readiness: Equip yourself with highly valued professional attributes applicable across numerous careers, both within and outside the legal sector.",
      "Prepare for Professional Pathways: This degree provides tailored pathways to effectively prepare you for the Solicitors Qualifying Examination (SQE 1) or for a career at the Bar.",
    ],
    curriculum: [
      {
        year: "Foundation Year",
        modules: [
          "Introduction to Legal Studies",
          "Academic Skills Development",
          "Critical Thinking and Analysis",
        ],
      },
      {
        year: "Years 1-3",
        modules: [
          "Contract Law",
          "Criminal Law",
          "Constitutional Law",
          "Land Law",
          "Tort Law",
          "Equity and Trusts",
        ],
      },
    ],
    careerPaths: [
      "Solicitor",
      "Barrister",
      "Paralegal",
      "Legal Executive",
      "Journalist",
      "Police Officer",
      "Politician or Civil Servant",
      "Teacher or Academic",
      "Tax and Business Consultant",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Contact Wexford Educare for detailed entry requirements and application process.",
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Master of Public Health (MPH)",
    slug: "master-of-public-health",
    category: "master-courses",
    duration: "1-2 Years",
    level: "Postgraduate",
    thumbnail: "/images/courses/medical-students-practicing-cpr-during-training-2025-02-12-03-26-00-utc-min-2048x1365 (1).jpg",
    image: "/images/courses/medical-students-practicing-cpr-during-training-2025-02-12-03-26-00-utc-min-2048x1365 (1).jpg",
    description:
      "Ready to tackle today's complex global health challenges? The Master of Public Health (MPH) is a career-focused degree designed by Wexford Educare's partner institutions to equip you with the advanced skills and knowledge needed for leadership and innovation in the public health sector. This program provides a deep understanding of the factors that influence population health, preparing you to create positive change in diverse communities.",
    whyChoose: [
      "Industry-Relevant Curriculum: Explore the intricate social and environmental factors that shape population health and gain insights into practical strategies for health improvement and protection.",
      "Real-World Application: Your learning is grounded in reality through case studies and direct input from public health professionals.",
      "Advanced Skill Building: Cultivate essential skills in research, leadership, and critical analysis to navigate the dynamic public health landscape.",
      "The London Advantage: Studying in London gives you direct access to one of the world's most active public health landscapes.",
    ],
    curriculum: [
      {
        year: "Core Modules",
        modules: [
          "Postgraduate Study Skills, Research Methods, and Ethics (Healthcare)",
          "Determinants of Population Health",
          "Health Protection",
          "Finance and Governance in Health and Social Care",
          "Population Healthcare and Health Improvement",
          "Postgraduate Major Project (Healthcare)",
        ],
      },
    ],
    careerPaths: [
      "Public Health Officer",
      "Health Promotion Specialist",
      "Community Health Advisor",
      "Epidemiology or Research Assistant",
      "Health Policy Analyst",
      "NGO or International Health Project Worker",
      "Public Health Intelligence Analyst",
    ],
    admissionRequirements: [
      {
        title: "General Requirements",
        items: [
          "Contact Wexford Educare for detailed entry requirements and application process.",
        ],
      },
    ],
  },
  {
    id: "15",
    title: "BSc (Hons) Business Management (3 Years)",
    slug: "bsc-hons-business-management-3-years",
    category: "bachelor-courses",
    duration: "3 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
    image: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
    description:
      "The BSc (Hons) Business Management is a three-year undergraduate program designed to give you a complete understanding of modern business principles and management practices. The first year is crucial, as it builds a strong foundation for your advanced studies. This foundational year covers essential subjects like organizational behavior, financial accounting, and marketing to ensure you develop a comprehensive knowledge of core business operations from day one.",
    whyChoose: [
      "Comprehensive Curriculum: Gain a thorough understanding of all major business domains, from marketing and finance to human resources and strategic management.",
      "Real-World Experience: This program emphasizes practical learning through internships, placements, and live projects, allowing you to apply theory to real business challenges and enhance your employability.",
      "Versatile Career Options: A business management degree opens doors to countless industries. You'll graduate with highly transferable skills, preparing you for roles in finance, marketing, operations, and beyond.",
      "Professional & Academic Development: The curriculum is designed to develop not only your academic knowledge but also your professional skills in leadership, critical thinking, and communication—qualities essential for career growth.",
      "Global Business Perspective: In today's interconnected world, a global outlook is vital. This degree incorporates international business modules to give you an understanding of foreign markets and cross-cultural management.",
    ],
    curriculum: [
      {
        year: "Year 1: Core Business Introduction",
        modules: [
          "Fundamentals of Business Administration",
          "Marketing Fundamentals",
          "Financial Accounting",
          "Organisational Behaviour",
        ],
      },
    ],
    careerPaths: [
      "Marketing Manager",
      "Financial Analyst",
      "Human Resources (HR) Manager",
      "Operations Manager",
      "Business Consultant",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "Academic Requirements",
        items: [
          "Candidates typically need A-Levels and GCSEs in relevant subjects.",
          "Equivalent qualifications and relevant professional experience may also be considered.",
        ],
      },
      {
        title: "Application Process",
        items: [
          "Applications are submitted online via UCAS or the university's direct application portal.",
          "International students may need to provide proof of English language proficiency through a recognized test like IELTS.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "FAQs",
        content:
          "What are the admission requirements for this program? Candidates typically need A-Levels and GCSEs in relevant subjects. What kind of real-world experience will I get? The program integrates practical experience through internships, work placements, and real-world projects. What career options will I have after graduating? Graduates can pursue a wide range of careers, including roles in marketing, finance, HR, operations, and consultancy.",
      },
    ],
  },
  {
    id: "16",
    title: "BA/BSc Business Management with Foundation Year (4 Years)",
    slug: "ba-bsc-business-management-with-foundation-year",
    category: "bachelor-courses",
    duration: "4 Years",
    level: "Undergraduate",
    thumbnail: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
    image: "/images/courses/business-team-meeting-with-stats-and-review-graphs-2025-03-25-04-25-04-utc-min-2048x1024.jpg",
    description:
      "This four-year degree is your direct pathway to a career in corporate management, even if you don't currently meet the standard entry requirements for a three-year course. The integrated foundation year is designed to provide you with the essential academic and professional skills needed to succeed, preparing you for three years of focused, advanced study.",
    whyChoose: [
      "A Strong Academic Start: The foundation year is specifically designed to build your confidence and equip you with the research, writing, and critical thinking skills needed for university-level challenges.",
      "Learn In-Demand Skills: With input from industry professionals, the curriculum is designed to teach you the skills that employers are actively seeking in today's competitive business world.",
      "Practical Application: You'll apply academic theories to real-world situations through hands-on projects, case studies, and coursework, significantly boosting your job readiness upon graduation.",
      "Flexible Learning: The program often incorporates a blend of in-person and online learning, helping you balance your studies with work or personal commitments.",
      "Expert Faculty: Learn from highly experienced lecturers who bring a wealth of real-world business expertise and practical insights into the classroom.",
      "Dedicated Career Support: Receive expert guidance on CV writing, interview preparation, and other job-finding skills to ensure a smooth transition from university to your professional career.",
    ],
    curriculum: [
      {
        year: "Foundation Year: Building Core Skills",
        modules: [
          "Academic Achievement",
          "Introduction to Business Studies",
          "Quantitative Methods",
          "Digital Skills",
        ],
      },
      {
        year: "Year 2: Core Business Knowledge",
        modules: [
          "Management Philosophies",
          "Marketing Techniques",
          "Financial Accounting",
          "Business Law",
        ],
      },
      {
        year: "Year 3: Specialised & Strategic Modules",
        modules: [
          "Human Resources Management",
          "Operations Management",
          "Strategic Management",
          "Optional Modules: Innovation and Entrepreneurship or International Business",
        ],
      },
      {
        year: "Year 4: Advanced Study & Dissertation",
        modules: [
          "Advanced Strategic Management",
          "Business Analytics",
          "Leadership & Change Management",
          "Dissertation",
        ],
      },
    ],
    careerPaths: [
      "Business Manager",
      "Marketing Manager",
      "Human Resources (HR) Manager",
      "Operations Manager",
      "Entrepreneur",
    ],
    admissionRequirements: [
      {
        title: "Academic Qualifications",
        items: [
          "Typically five GCSEs at Grade C/4 or above (including Maths and English), plus A-Levels or equivalent qualifications.",
          "Relevant professional experience may also be considered.",
        ],
      },
      {
        title: "English Language Proficiency",
        items: [
          "Non-native English speakers usually require an IELTS score of 6.0 or equivalent.",
        ],
      },
      {
        title: "Additional Requirements",
        items: [
          "A personal statement outlining your interest in business management and your career goals.",
          "Suitable candidates may be invited for an interview to assess their fit for the program.",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "FAQs",
        content:
          "How long is this course? This is a full-time course that takes four years to complete. Is part-time study available? While this is structured as a full-time course, flexible learning options are often available. What is the difference between a BA and a BSc? Generally, a BA focuses more on qualitative aspects while a BSc emphasizes quantitative and analytical skills. How do I apply? Applications are typically submitted via UCAS or the university's direct portal. What jobs can I get? Graduates can pursue roles such as Marketing Manager, HR Manager, Operations Manager, or Entrepreneur.",
      },
    ],
  },
  {
    id: "17",
    title: "Courses Offered by Our Partner Institutions",
    slug: "courses-offered-by-partner-institutions",
    category: "all",
    duration: "Varies",
    level: "Various Levels",
    thumbnail: "/images/courses/group-of-four-confident-smiling-multiethnical-stud-2024-12-13-04-31-44-utc-min-2048x1365 (1).jpg",
    image: "/images/courses/group-of-four-confident-smiling-multiethnical-stud-2024-12-13-04-31-44-utc-min-2048x1365 (1).jpg",
    description:
      "At Wexford Educare, we are dedicated to connecting every student with a quality education that fits their career goals, lifestyle, and learning preferences. We proudly partner with a diverse range of respected UK academic institutions to offer in-demand courses. Best of all, our expert consultancy services are completely free for all students. Whether you're starting your academic journey or advancing your qualifications, we're here to guide you. We listen carefully to your career aspirations and scheduling needs—be it weekday, evening, or weekend classes—to match you with the perfect course and institution for your success.",
    whyChoose: [
      "Completely Free Service: Our expert guidance and support come at no cost to you.",
      "Personalised Matching: We tailor recommendations to your specific career goals, lifestyle, and schedule.",
      "Wide Access: Gain entry to a vast network of courses and prestigious UK institutions.",
      "Full Application Support: We assist you at every stage, from applications and interviews to final enrolment.",
    ],
    curriculum: [
      {
        year: "Undergraduate Degrees (with Foundation Year Options)",
        modules: [
          "BSc (Hons) Business and Tourism Management",
          "BA (Hons) Hospitality Management and Leadership",
          "BA (Hons) Business Management and Entrepreneurship",
          "LLB (Hons) Law (3 or 4-year options)",
          "BSc (Hons) Computing",
          "BSc (Hons) Public Health",
          "BSc (Hons) Mental Health and Wellbeing",
          "BA (Hons) Education Studies",
          "BA (Hons) Business Management and Sustainability",
          "BSc (Hons) Finance and Accounting",
          "BSc (Hons) Digital Marketing and Management",
        ],
      },
      {
        year: "Top-Up Programs",
        modules: [
          "Business Management",
          "Health & Social Care",
        ],
      },
      {
        year: "Diplomas and Vocational Qualifications",
        modules: [
          "NCFE Level 4 Cyber Security Engineering",
          "NCFE Level 4 Diploma in Data Analysis",
          "HNC & HND in Business Marketing (2 Years)",
        ],
      },
    ],
    careerPaths: [
      "Business Manager",
      "Tourism Manager",
      "Hospitality Manager",
      "Legal Professional",
      "IT Professional",
      "Public Health Officer",
      "Mental Health Practitioner",
      "Education Professional",
      "Financial Analyst",
      "Digital Marketing Specialist",
    ],
    admissionRequirements: [
      {
        title: "Our Network of Trusted Partner Institutions",
        items: [
          "Anglia Ruskin University London",
          "CECOS College (London, Birmingham, Nottingham)",
          "LSME (Gants Hill)",
          "University of Central Lancashire (UCLan)",
          "University of Bolton Manchester",
          "UK Management College",
          "Global Banking School",
          "London school of commerce",
          "William college",
          "Victoria College of Arts and Design",
        ],
      },
    ],
    additionalInfo: [
      {
        title: "Start Your Journey Today",
        content:
          "Ready to take the next step? Contact our expert team and let's find the perfect course for you! Email us at: info@wexfordeducare.com",
      },
    ],
  },
];
