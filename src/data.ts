export const profile = {
  name: "Jonah Francis Benedicto",
  title: "Computer Science student at The University of Queensland",
  location: "Runcorn, QLD, Australia",
  email: "jonahfrancisbenedicto@outlook.com",
  github: "https://github.com/jonahfrancisbenedicto",
  linkedin: "https://linkedin.com/in/jonahfrancisbenedicto",
  summary:
    "Computer Science student at The University of Queensland seeking an opportunity to gain practical experience in the technology industry. Looking to apply my knowledge of software development, machine learning, and data science while learning from an experienced team and developing my technical skills.",
}

export const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript/TypeScript", "C/C++", "SQL"],
  Frameworks: ["React", "React Native", "Node.js", "NestJS", "Flask", "Electron"],
  Data: ["PostgreSQL", "SQLite", "NumPy", "Pandas", "scikit-learn", "SciPy", "Matplotlib"],
  Systems: ["Linux", "Threads", "Sockets", "TCP/IP", "IPC"],
  Tools: ["Git", "Docker", "Google Cloud", "GitHub Actions", "pytest", "Jest", "CMake", "GDB", "Valgrind"],
}

export type Entry = {
  title: string
  subtitle?: string
  dates: string
  points: string[]
}

export const projects: Entry[] = [
  {
    title: "Machine Learning Project",
    dates: "May 2026 – Jun 2026",
    points: [
      "Developed a machine learning model to classify foods based on their nutritional information.",
      "Used Python and scikit-learn to clean data, prepare features, and train machine learning models.",
      "Compared different classification models using cross-validation and parameter tuning.",
      "Used confusion matrices and feature importance to understand and evaluate the results.",
    ],
  },
  {
    title: "Capstone Project",
    dates: "Feb 2026 – Jun 2026",
    points: [
      "Built a certificate monitoring platform using React, Python Flask, and PostgreSQL.",
      "Developed a Chrome extension to collect TLS certificates from browsing sessions.",
      "Created dashboards and reports to help track certificate status and vulnerabilities.",
      "Worked with JWT authentication and REST APIs as part of the system.",
    ],
  },
  {
    title: "Computer Systems Project",
    dates: "Mar 2025 – Apr 2025",
    points: [
      "Built a multithreaded TCP server in C to handle multiple clients at the same time.",
      "Created a command-line client to send images and receive processed results.",
      "Used sockets and file handling to manage communication between the client and server.",
      "Used OpenCV to detect faces and eyes and modify images.",
    ],
  },
]

export const education: Entry[] = [
  {
    title: "The University of Queensland",
    subtitle: "Bachelor of Computer Science, Major in Machine Learning, Minor in Data Science",
    dates: "Jan 2026 – Present",
    points: [
      "Relevant coursework: Machine Learning, Software Engineering, Data Structures and Algorithms, Cloud Computing, Computer Systems, Relational Database Systems",
      "Extracurricular: UQ Computing Society, UQ Mechatronics & Robotics Society",
    ],
  },
  {
    title: "The University of Queensland",
    subtitle: "Bachelor of Science, Major in Physics (not completed)",
    dates: "Jan 2023 – Nov 2025",
    points: [
      "Relevant coursework: Mechanics & Thermal Physics, Electromagnetism & Modern Physics, Calculus & Linear Algebra, Multivariate Calculus & Differential Equations",
      "Extracurricular: UQ Physics Club, UQ Mathematics Student Society",
    ],
  },
  {
    title: "MacGregor State High School",
    subtitle: "Queensland Certificate of Education",
    dates: "Jan 2017 – Dec 2023",
    points: [
      "Subjects: Specialist Mathematics, Mathematical Methods, English, Physics, Digital Solutions, Physical Education, Engineering",
      "Awards: Academic Award in Engineering and Digital Solutions, MVP in Football and Futsal, Music Award for SHEP, Attendance Award, Leadership Award for Clan Captain",
      "Certificates: Certificate II in Food Processing, Certificate II in Supply Chain",
    ],
  },
]

export const experience: Entry[] = [
  {
    title: "Precise Built Pty Ltd",
    subtitle: "Ad-hoc IT Support",
    dates: "Feb 2023 – Present",
    points: [
      "Help staff with basic computer and IT issues.",
      "Set up computers, printers, and other devices.",
      "Install and update software when needed.",
      "Troubleshoot common technical problems.",
    ],
  },
  {
    title: "Domino's",
    subtitle: "Team Member",
    dates: "Dec 2025 – Jun 2026",
    points: [
      "Took customer orders in the store and over the phone.",
      "Prepared pizzas and other food items.",
      "Served customers and handled payments.",
      "Cleaned and restocked the store during shifts.",
    ],
  },
  {
    title: "Kmart",
    subtitle: "Team Member",
    dates: "Aug 2023 – Mar 2025",
    points: [
      "Helped customers find products and answered questions.",
      "Restocked shelves and organised products.",
      "Worked on the checkout when required.",
      "Kept the store clean and tidy.",
    ],
  },
  {
    title: "PappaRich",
    subtitle: "Waiter",
    dates: "Feb 2022 – Jun 2023",
    points: [
      "Took customer orders and served food and drinks.",
      "Helped customers with questions and requests.",
      "Handled payments and cleared tables.",
      "Kept the dining area clean and organised.",
    ],
  },
]
