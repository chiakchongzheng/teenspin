export interface Resource {
  name: string;
  url: string;
  description: string;
  type: "course" | "book" | "practice" | "community";
}

export interface Occupation {
  id: number;
  title: string;
  slug: string;
  category: string;
  icon: string;
  overview: string;
  dailyTasks: string[];
  skills: string[];
  benefits: string[];
  challenges: string[];
  resources: Resource[];
}

export const occupations: Occupation[] = [
  // TECHNOLOGY
  {
    id: 1,
    title: "Software Engineer",
    slug: "software-engineer",
    category: "Technology",
    icon: "💻",
    overview: "Software engineers design, develop, and maintain computer programs and applications. They solve problems using coding languages like Python, JavaScript, and Java to create everything from mobile apps to complex systems.",
    dailyTasks: [
      "Write and test code for new features",
      "Review code written by team members",
      "Fix bugs and debug issues",
      "Attend team standup meetings",
      "Document technical specifications"
    ],
    skills: ["Problem-solving", "Programming languages", "Critical thinking", "Communication", "Attention to detail"],
    benefits: ["High salary potential ($100K+)", "Remote work opportunities", "High demand in job market", "Creative problem-solving", "Continuous learning"],
    challenges: ["Can require long hours during deadlines", "Constant learning new technologies", "Sedentary work environment", "Complex problem-solving stress", "Sitting for long periods"],
    resources: [
      { name: "MIT OpenCourseWare - Introduction to Programming", url: "https://ocw.mit.edu/courses/6-00-introduction-to-computer-science-and-programming-fall-2008/", description: "Free MIT course on programming fundamentals", type: "course" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Free interactive coding curriculum", type: "course" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/", description: "Free full-stack curriculum", type: "course" },
      { name: "LeetCode", url: "https://leetcode.com/", description: "Practice coding problems", type: "practice" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/", description: "Developer Q&A community", type: "community" }
    ]
  },
  {
    id: 2,
    title: "Data Scientist",
    slug: "data-scientist",
    category: "Technology",
    icon: "📈",
    overview: "Data scientists analyze large sets of data to find patterns and insights. They use statistics, programming, and machine learning to solve business problems and guide decision-making.",
    dailyTasks: [
      "Collect and clean data",
      "Build predictive models",
      "Analyze data trends",
      "Present findings to stakeholders",
      "Develop algorithms"
    ],
    skills: ["Programming (Python, R)", "Statistics and math", "Machine learning", "Data visualization", "Business acumen"],
    benefits: ["Very high salary ($120K+)", "High demand", "Remote work", "Cutting-edge work", "Impactful decisions"],
    challenges: ["Constant learning", "Complex problems", "Data quality issues", "Communicating to non-tech", "Imposter syndrome"],
    resources: [
      { name: "MIT OpenCourseWare - Data Science", url: "https://openlearning.mit.edu/courses/?query=data%20science", description: "Free MIT data science courses", type: "course" },
      { name: "Kaggle", url: "https://www.kaggle.com/", description: "Free data science competitions & datasets", type: "practice" },
      { name: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", description: "Free Coursera certificate program", type: "course" },
      { name: "Fast.ai", url: "https://www.fast.ai/", description: "Free deep learning courses", type: "course" },
      { name: "r/datascience", url: "https://reddit.com/r/datascience", description: "Data science community", type: "community" }
    ]
  },
  {
    id: 3,
    title: "Web Developer",
    slug: "web-developer",
    category: "Technology",
    icon: "🌐",
    overview: "Web developers create and maintain websites. They work on the visual design, functionality, and performance of web pages using HTML, CSS, and JavaScript.",
    dailyTasks: [
      "Write HTML, CSS, and JavaScript code",
      "Test websites across browsers",
      "Fix bugs and issues",
      "Meet with clients to discuss needs",
      "Update and maintain existing websites"
    ],
    skills: ["HTML/CSS/JavaScript", "Problem-solving", "Creativity", "Time management", "Communication"],
    benefits: ["High demand", "Remote work friendly", "Creative expression", "Freelance opportunities", "Fast learning curve"],
    challenges: ["Keeping up with tech changes", "Client expectations", "Tight deadlines", "Sedentary work", "Eye strain from screens"],
    resources: [
      { name: "freeCodeCamp - Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", description: "Free responsive design certification", type: "course" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "Free web development documentation", type: "course" },
      { name: "JavaScript.info", url: "https://javascript.info/", description: "Modern JavaScript tutorial", type: "course" },
      { name: "CodePen", url: "https://codepen.io/", description: "Practice & showcase web code", type: "practice" },
      { name: "r/webdev", url: "https://reddit.com/r/webdev", description: "Web developer community", type: "community" }
    ]
  },
  {
    id: 4,
    title: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    category: "Technology",
    icon: "🔒",
    overview: "Cybersecurity analysts protect organizations from cyber threats. They monitor systems, investigate breaches, and implement security measures to keep data safe.",
    dailyTasks: [
      "Monitor security systems",
      "Investigate security alerts",
      "Update security protocols",
      "Conduct vulnerability assessments",
      "Respond to security incidents"
    ],
    skills: ["Network security", "Problem-solving", "Attention to detail", "Communication", "Risk assessment"],
    benefits: ["Very high demand", "Excellent salary", "Job security", "Continuous learning", "Remote options"],
    challenges: ["Constant pressure", "On-call responsibilities", "Keeping up with threats", "High stress situations", "Need for certifications"],
    resources: [
      { name: "Cybrary", url: "https://www.cybrary.it/", description: "Free cybersecurity courses", type: "course" },
      { name: "TryHackMe", url: "https://tryhackme.com/", description: "Free cybersecurity practice labs", type: "practice" },
      { name: "OWASP", url: "https://owasp.org/", description: "Web application security resources", type: "course" },
      { name: "NIST Cybersecurity Framework", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final", description: "Free security guidelines", type: "course" },
      { name: "r/cybersecurity", url: "https://reddit.com/r/cybersecurity", description: "Cybersecurity community", type: "community" }
    ]
  },
  {
    id: 5,
    title: "Mobile App Developer",
    slug: "mobile-app-developer",
    category: "Technology",
    icon: "📱",
    overview: "Mobile app developers create applications for smartphones and tablets. They work with platforms like iOS and Android to build apps that millions of people use daily.",
    dailyTasks: [
      "Write code for mobile apps",
      "Test apps on different devices",
      "Fix bugs and performance issues",
      "Work with designers on UI/UX",
      "Update apps with new features"
    ],
    skills: ["Swift/Kotlin/Java", "Problem-solving", "UI/UX awareness", "Testing", "API integration"],
    benefits: ["High demand", "Creative work", "App store visibility", "Freelance potential", "Growing industry"],
    challenges: ["Multiple platforms", "Device fragmentation", "App store requirements", "User reviews pressure", "Frequent updates"],
    resources: [
      { name: "Apple Developer Academy", url: "https://developer.apple.com/academy/", description: "Free iOS development courses", type: "course" },
      { name: "Google Android Developers", url: "https://developer.android.com/", description: "Free Android development docs", type: "course" },
      { name: "Flutter Crash Course", url: "https://www.freecodecamp.org/news/flutter-crash-course/", description: "Free cross-platform development", type: "course" },
      { name: "App Brewery Flutter Course", url: "https://www.appbrewery.com/", description: "Free Flutter tutorials", type: "course" },
      { name: "r/flutterdev", url: "https://reddit.com/r/flutterdev", description: "Flutter developer community", type: "community" }
    ]
  },
  {
    id: 6,
    title: "Cloud Engineer",
    slug: "cloud-engineer",
    category: "Technology",
    icon: "☁️",
    overview: "Cloud engineers design and manage cloud computing systems. They work with platforms like AWS, Azure, and Google Cloud to help businesses store and process data efficiently.",
    dailyTasks: [
      "Design cloud architectures",
      "Manage cloud infrastructure",
      "Optimize cloud costs",
      "Ensure security and compliance",
      "Troubleshoot issues"
    ],
    skills: ["Cloud platforms (AWS/Azure)", "Linux", "Networking", "Scripting", "Security"],
    benefits: ["High salary", "Remote work", "High demand", "Future-proof career", "Diverse industries"],
    challenges: ["Complex certifications", "Keeping up with updates", "High responsibility", "On-call work", "Technical depth"],
    resources: [
      { name: "AWS Free Tier", url: "https://aws.amazon.com/free/", description: "Free AWS cloud practice", type: "practice" },
      { name: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google/", description: "Free Google Cloud labs", type: "course" },
      { name: "Microsoft Learn", url: "https://learn.microsoft.com/", description: "Free Azure tutorials", type: "course" },
      { name: "Linux Academy", url: "https://linuxacademy.com/", description: "Free cloud courses", type: "course" },
      { name: "r/aws", url: "https://reddit.com/r/aws", description: "AWS community", type: "community" }
    ]
  },
  {
    id: 7,
    title: "AI/Machine Learning Engineer",
    slug: "ai-ml-engineer",
    category: "Technology",
    icon: "🤖",
    overview: "AI and ML engineers create intelligent systems that can learn and make decisions. They build algorithms that enable computers to recognize patterns and solve complex problems.",
    dailyTasks: [
      "Develop machine learning models",
      "Train and test algorithms",
      "Optimize model performance",
      "Work with large datasets",
      "Research new AI approaches"
    ],
    skills: ["Python", "Deep learning", "Math/Statistics", "TensorFlow/PyTorch", "Data engineering"],
    benefits: ["Cutting-edge work", "Very high salary", "High demand", "Research opportunities", "Industry impact"],
    challenges: ["Mathematical complexity", "Data requirements", "Computational resources", "Rapid field changes", "Ethical considerations"],
    resources: [
      { name: "Stanford CS229 - Machine Learning", url: "https://cs229.stanford.edu/", description: "Free Stanford ML course", type: "course" },
      { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/", description: "Free AI courses by Andrew Ng", type: "course" },
      { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", description: "Free PyTorch learning", type: "course" },
      { name: "Hugging Face", url: "https://huggingface.co/", description: "Free NLP models & datasets", type: "practice" },
      { name: "r/MachineLearning", url: "https://reddit.com/r/MachineLearning", description: "ML research community", type: "community" }
    ]
  },
  {
    id: 8,
    title: "DevOps Engineer",
    slug: "devops-engineer",
    category: "Technology",
    icon: "⚙️",
    overview: "DevOps engineers bridge software development and IT operations. They automate processes, manage infrastructure, and ensure smooth deployment of applications.",
    dailyTasks: [
      "Automate deployment processes",
      "Manage CI/CD pipelines",
      "Monitor system performance",
      "Scale infrastructure",
      "Improve system reliability"
    ],
    skills: ["Scripting (Bash, Python)", "Docker/Kubernetes", "Cloud platforms", "Linux", "Automation"],
    benefits: ["High demand", "Good salary", "Remote work", "Continuous learning", "Cross-functional work"],
    challenges: ["On-call responsibilities", "Complex tooling", "Keeping up with trends", "High pressure deployments", "Wide skill range needed"],
    resources: [
      { name: "Kubernetes Official Tutorial", url: "https://kubernetes.io/docs/tutorials/", description: "Free K8s learning", type: "course" },
      { name: "Docker Playground", url: "https://labs.play-with-docker.com/", description: "Free Docker practice", type: "practice" },
      { name: "GitHub Actions Tutorial", url: "https://docs.github.com/en/actions/learn-github-actions", description: "Free CI/CD learning", type: "course" },
      { name: "Terraform Learn", url: "https://developer.hashicorp.com/terraform/tutorials", description: "Free IaC tutorials", type: "course" },
      { name: "r/devops", url: "https://reddit.com/r/devops", description: "DevOps community", type: "community" }
    ]
  },
  // DESIGN
  {
    id: 9,
    title: "UX Designer",
    slug: "ux-designer",
    category: "Design",
    icon: "🎨",
    overview: "UX designers create user-friendly interfaces for apps and websites. They research how people use products and design experiences that are intuitive, visually appealing, and easy to navigate.",
    dailyTasks: [
      "Conduct user research and interviews",
      "Create wireframes and prototypes",
      "Design UI elements and layouts",
      "Test designs with real users",
      "Collaborate with developers"
    ],
    skills: ["Empathy for users", "Visual design", "User research", "Prototyping tools (Figma)", "Communication"],
    benefits: ["Creative expression", "High demand industry", "Good work-life balance", "Remote-friendly", "Impactful work"],
    challenges: ["Difficult to measure success", "Stakeholder disagreements", "Tight deadlines", "Keeping up with trends", "Translating feedback into designs"],
    resources: [
      { name: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design", description: "Free Coursera UX program", type: "course" },
      { name: "Figma Learn", url: "https://www.figma.com/resource-library/", description: "Free Figma tutorials", type: "course" },
      { name: "Nielsen Norman Group", url: "https://www.nngroup.com/", description: "Free UX research articles", type: "course" },
      { name: "Dribbble", url: "https://dribbble.com/", description: "Design inspiration & community", type: "community" },
      { name: "UX Collective", url: "https://uxdesign.cc/", description: "Free UX articles & resources", type: "course" }
    ]
  },
  {
    id: 10,
    title: "Graphic Designer",
    slug: "graphic-designer",
    category: "Design",
    icon: "✏️",
    overview: "Graphic designers create visual content for brands. They design logos, advertisements, packaging, and marketing materials that communicate messages effectively.",
    dailyTasks: [
      "Create visual designs",
      "Work with clients on concepts",
      "Use design software (Photoshop, Illustrator)",
      "Revise designs based feedback",
      "Prepare files for printing"
    ],
    skills: ["Adobe Creative Suite", "Typography", "Color theory", "Creativity", "Communication"],
    benefits: ["Creative work", "Freelance options", "Diverse projects", "Portfolio building", "Flexible work"],
    challenges: ["Client revisions", "Tight deadlines", "Competitive field", "Software costs", "Staying original"],
    resources: [
      { name: "Adobe Creative Cloud Express", url: "https://www.adobe.com/express/", description: "Free design tool", type: "course" },
      { name: "Canva Design School", url: "https://www.canva.com/learn/", description: "Free design tutorials", type: "course" },
      { name: "Behance", url: "https://www.behance.net/", description: "Portfolio & inspiration", type: "community" },
      { name: "Dribbble", url: "https://dribbble.com/", description: "Design community", type: "community" },
      { name: "Creative Boom", url: "https://www.creativeboom.com/", description: "Design news & resources", type: "course" }
    ]
  },
  {
    id: 11,
    title: "Product Designer",
    slug: "product-designer",
    category: "Design",
    icon: "📦",
    overview: "Product designers work on the entire design process of a product, from research to final design. They solve problems and create products that are both functional and beautiful.",
    dailyTasks: [
      "Research user needs",
      "Sketch and prototype ideas",
      "Collaborate with engineers",
      "Test and iterate designs",
      "Create design systems"
    ],
    skills: ["User-centered design", "Prototyping", "Figma/Sketch", "Systems thinking", "Communication"],
    benefits: ["High impact", "Good salary", "Creative freedom", "Growing field", "Remote options"],
    challenges: ["Cross-functional work", "Balancing trade-offs", "Stakeholder management", "Measuring success", "Fast-paced"],
    resources: [
      { name: "Design Better", url: "https://www.designbetter.co/", description: "Free product design book", type: "book" },
      { name: "Figma for Design Systems", url: "https://www.figma.com/resource-library/", description: "Free Figma resources", type: "course" },
      { name: "Springboard UX Course", url: "https://www.springboard.com/resources/ux-design-courses/", description: "Free UX resources", type: "course" },
      { name: "Product Design Weekly", url: "https://productdesignweekly.com/", description: "Free design newsletter", type: "course" },
      { name: "r/productdesign", url: "https://reddit.com/r/productdesign", description: "Product design community", type: "community" }
    ]
  },
  {
    id: 12,
    title: "Interior Designer",
    slug: "interior-designer",
    category: "Design",
    icon: "🏠",
    overview: "Interior designers plan and design indoor spaces. They create functional and aesthetically pleasing environments for homes, offices, restaurants, and other buildings.",
    dailyTasks: [
      "Meet with clients to discuss needs",
      "Create design concepts and plans",
      "Select materials, colors, and furniture",
      "Oversee construction/installations",
      "Manage budgets and timelines"
    ],
    skills: ["Spatial design", "3D visualization", "Color theory", "Project management", "Communication"],
    benefits: ["Creative expression", "Client satisfaction", "Portfolio building", "Freelance potential", "Physical presence in projects"],
    challenges: ["Client expectations", "Budget constraints", "Coordination with contractors", "Permit requirements", "Physical demands"],
    resources: [
      { name: "Coursera - Interior Design", url: "https://www.coursera.org/browse/arts-and-humanities/interior-design", description: "Free interior design courses", type: "course" },
      { name: "SketchUp Free", url: "https://www.sketchup.com/", description: "Free 3D modeling tool", type: "course" },
      { name: "HGTV", url: "https://www.hgtv.com/design/interior-design", description: "Design inspiration", type: "community" },
      { name: "ArchDaily", url: "https://www.archdaily.com/", description: "Architecture & design resources", type: "course" },
      { name: "r/interior_design", url: "https://reddit.com/r/interior_design", description: "Interior design community", type: "community" }
    ]
  },
  {
    id: 13,
    title: "Fashion Designer",
    slug: "fashion-designer",
    category: "Design",
    icon: "👗",
    overview: "Fashion designers create clothing and accessories. They sketch designs, select fabrics, and oversee production to bring their creative visions to life.",
    dailyTasks: [
      "Sketch design concepts",
      "Select fabrics and materials",
      "Create prototypes",
      "Attend fashion shows",
      "Manage production"
    ],
    skills: ["Fashion illustration", "Sewing", "Fabric knowledge", "Trend analysis", "Creativity"],
    benefits: ["Creative freedom", "Brand building", "Industry recognition", "Entrepreneurial", "Fashion events"],
    challenges: ["Competitive industry", "Irregular income", "Fast-paced trends", "Manufacturing complexity", "Building reputation"],
    resources: [
      { name: "Fashion Institute - Open Education", url: "https://www.fashioninstitute.edu/", description: "Fashion design resources", type: "course" },
      { name: "Skillshare Fashion", url: "https://www.skillshare.com/browse/fashion", description: "Free fashion courses", type: "course" },
      { name: "Vogue", url: "https://www.vogue.com/", description: "Fashion industry news", type: "course" },
      { name: " Behance Fashion", url: "https://www.behance.net/search?search=fashion", description: "Fashion portfolio inspiration", type: "community" },
      { name: "r/fashiondesign", url: "https://reddit.com/r/fashiondesign", description: "Fashion design community", type: "community" }
    ]
  },
  {
    id: 14,
    title: "Video Game Designer",
    slug: "video-game-designer",
    category: "Design",
    icon: "🎮",
    overview: "Video game designers create the concepts, rules, and mechanics of video games. They work with artists and programmers to bring interactive experiences to life.",
    dailyTasks: [
      "Design game concepts and mechanics",
      "Create game documentation",
      "Balance gameplay elements",
      "Collaborate with developers",
      "Test and iterate gameplay"
    ],
    skills: ["Game design principles", "Storytelling", "Problem-solving", "Teamwork", "Software knowledge"],
    benefits: ["Dream job for gamers", "Creative work", "Growing industry", "Portfolio building", "Industry events"],
    challenges: ["Competitive field", "Tight deadlines", "Crunch time", "Technical constraints", "Industry instability"],
    resources: [
      { name: "Unity Learn", url: "https://learn.unity.com/", description: "Free Unity game engine course", type: "course" },
      { name: "Unreal Engine Learning", url: "https://www.unrealengine.com/en-US/learn", description: "Free Unreal engine tutorials", type: "course" },
      { name: "GDC Vault", url: "https://www.gdcvault.com/", description: "Free game dev talks", type: "course" },
      { name: "Itch.io Game Jams", url: "https://itch.io/game-jams", description: "Practice game development", type: "practice" },
      { name: "r/gamedev", url: "https://reddit.com/r/gamedev", description: "Game dev community", type: "community" }
    ]
  },
  {
    id: 15,
    title: "Animator",
    slug: "animator",
    category: "Design",
    icon: "🎬",
    overview: "Animators create moving images for films, television, video games, and advertisements. They bring characters and stories to life through various animation techniques.",
    dailyTasks: [
      "Create animation sequences",
      "Work with directors on vision",
      "Use animation software",
      "Meet deadlines",
      "Revise based on feedback"
    ],
    skills: ["Animation software (Maya, Blender)", "Drawing", "Timing and spacing", "Creativity", "Patience"],
    benefits: ["Creative expression", "Film industry", "Freelance work", "Portfolio building", "Award opportunities"],
    challenges: ["Repetitive work", "Tight deadlines", "Sitting for long hours", "Technical learning curve", "Competitive field"],
    resources: [
      { name: "Blender Cloud", url: "https://cloud.blender.org/", description: "Free Blender animation course", type: "course" },
      { name: "Khan Academy - Pixar in a Box", url: "https://www.khanacademy.org/partner-content/pixar", description: "Free animation by Pixar", type: "course" },
      { name: "Adobe Animate Tutorial", url: "https://helpx.adobe.com/animate/tutorials.html", description: "Free Adobe animation tutorials", type: "course" },
      { name: "Animation Mentor", url: "https://www.animationmentor.com/", description: "Free resources", type: "course" },
      { name: "r/animation", url: "https://reddit.com/r/animation", description: "Animator community", type: "community" }
    ]
  },
  // HEALTHCARE
  {
    id: 16,
    title: "Nurse",
    slug: "nurse",
    category: "Healthcare",
    icon: "🏥",
    overview: "Nurses provide patient care in hospitals, clinics, and other healthcare settings. They assess patient health, administer medications, assist doctors, and educate patients about health conditions.",
    dailyTasks: [
      "Check patient vital signs",
      "Administer medications",
      "Update patient records",
      "Assist doctors in procedures",
      "Educate patients and families"
    ],
    skills: ["Compassion", "Critical thinking", "Communication", "Multitasking", "Medical knowledge"],
    benefits: ["Job security", "Meaningful work", "Good salary and benefits", "Various specialties", "Flexible schedules"],
    challenges: ["Emotional stress", "Long shifts (12-hour)", "Exposure to illness", "Physical strain", "Dealing with difficult patients"],
    resources: [
      { name: "Khan Academy - Health & Medicine", url: "https://www.khanacademy.org/science/health-and-medicine", description: "Free health education", type: "course" },
      { name: "NCLEX Study Guide", url: "https://www.nurse.com/nclex", description: "Free nursing exam prep", type: "practice" },
      { name: "Scrubs Magazine", url: "https://scrubsmag.com/", description: "Nursing student resources", type: "community" },
      { name: "AllNursingSchools", url: "https://www.allnursingschools.com/", description: "Free nursing resources", type: "course" },
      { name: "r/nursing", url: "https://reddit.com/r/nursing", description: "Nursing community", type: "community" }
    ]
  },
  {
    id: 17,
    title: "Doctor",
    slug: "doctor",
    category: "Healthcare",
    icon: "👨‍⚕️",
    overview: "Doctors diagnose and treat patients' medical conditions. They examine patients, order tests, prescribe medications, and perform procedures to improve health.",
    dailyTasks: [
      "Examine patients",
      "Diagnose conditions",
      "Order and interpret tests",
      "Prescribe treatments",
      "Document patient care"
    ],
    skills: ["Medical knowledge", "Critical thinking", "Communication", "Problem-solving", "Compassion"],
    benefits: ["High salary", "Job security", "Making a difference", "Respect", "Specialization options"],
    challenges: ["Long education (10+ years)", "High stress", "Long hours", "On-call duties", "Emotional burden"],
    resources: [
      { name: "Khan Academy - Health & Medicine", url: "https://www.khanacademy.org/science/health-and-medicine", description: "Free medical foundation courses", type: "course" },
      { name: "OpenStax - Biology", url: "https://openstax.org/", description: "Free textbooks", type: "course" },
      { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", description: "Free medical research", type: "course" },
      { name: "WebMD", url: "https://www.webmd.com/", description: "Medical information", type: "course" },
      { name: "r/medicine", url: "https://reddit.com/r/medicine", description: "Medical community", type: "community" }
    ]
  },
  {
    id: 18,
    title: "Pharmacist",
    slug: "pharmacist",
    category: "Healthcare",
    icon: "💊",
    overview: "Pharmacists dispense medications and advise patients on their proper use. They ensure medication safety and provide information about drug interactions and side effects.",
    dailyTasks: [
      "Dispense prescriptions",
      "Counsel patients on medications",
      "Check for drug interactions",
      "Manage pharmacy inventory",
      "Consult with doctors"
    ],
    skills: ["Pharmaceutical knowledge", "Attention to detail", "Communication", "Math", "Customer service"],
    benefits: ["Good salary", "Regular hours", "Job stability", "Direct patient interaction", "Retail or clinical options"],
    challenges: ["Continuing education", "Liability concerns", "Insurance paperwork", "Standing for long hours", "Dealing with customers"],
    resources: [
      { name: "Pharmacy Times", url: "https://www.pharmacytimes.com/", description: "Pharmacy news & education", type: "course" },
      { name: "Khan Academy - Pharmacology", url: "https://www.khanacademy.org/science/health-and-medicine", description: "Free pharmacology basics", type: "course" },
      { name: "RxList", url: "https://www.rxlist.com/", description: "Drug information database", type: "course" },
      { name: "DrugBank", url: "https://go.drugbank.com/", description: "Free drug database", type: "course" },
      { name: "r/pharmacy", url: "https://reddit.com/r/pharmacy", description: "Pharmacy community", type: "community" }
    ]
  },
  {
    id: 19,
    title: "Physical Therapist",
    slug: "physical-therapist",
    category: "Healthcare",
    icon: "🏋️",
    overview: "Physical therapists help patients recover from injuries and improve mobility. They create exercise programs and use techniques to reduce pain and restore function.",
    dailyTasks: [
      "Assess patient conditions",
      "Create treatment plans",
      "Guide exercises",
      "Track progress",
      "Educate patients"
    ],
    skills: ["Anatomy knowledge", "Patient communication", "Exercise prescription", "Manual therapy", "Patience"],
    benefits: ["Helping patients recover", "Good salary", "Flexible hours", "Various settings", "Job growth"],
    challenges: ["Physical demands", "Documentation", "Insurance battles", "Patient motivation", "Continuing education"],
    resources: [
      { name: "Khan Academy - Anatomy", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology", description: "Free anatomy courses", type: "course" },
      { name: "Physiopedia", url: "https://www.physio-pedia.com/", description: "Free PT resources", type: "course" },
      { name: "OpenStax - Anatomy", url: "https://openstax.org/books/anatomy-and-physiology/pages", description: "Free textbook", type: "book" },
      { name: "Foundation for Physical Therapy", url: "https://www.foundationpt.org/", description: "PT research resources", type: "course" },
      { name: "r/physicaltherapy", url: "https://reddit.com/r/physicaltherapy", description: "PT community", type: "community" }
    ]
  },
  {
    id: 20,
    title: "Dentist",
    slug: "dentist",
    category: "Healthcare",
    icon: "🦷",
    overview: "Dentists diagnose and treat problems with patients' teeth and gums. They perform cleanings, fillings, extractions, and cosmetic procedures to maintain oral health.",
    dailyTasks: [
      "Examine teeth and gums",
      "Perform cleanings and procedures",
      "Take X-rays",
      "Create treatment plans",
      "Educate patients on oral care"
    ],
    skills: ["Dental procedures", "Manual dexterity", "Communication", "Business skills", "Attention to detail"],
    benefits: ["High income", "Flexible schedule", "Own practice potential", "Job security", "Helping patients"],
    challenges: ["Education requirements", "High startup costs", "Insurance complexity", "Patient anxiety", "Physical demands"],
    resources: [
      { name: "Khan Academy - Dental", url: "https://www.khanacademy.org/science/health-and-medicine", description: "Free dental foundation", type: "course" },
      { name: "ADA Dental Education", url: "https://www.ada.org/education", description: "American Dental Association resources", type: "course" },
      { name: "OpenStax - Human Anatomy", url: "https://openstax.org/", description: "Free anatomy textbook", type: "book" },
      { name: "Dental Town", url: "https://www.dentaltown.com/", description: "Dental community & courses", type: "community" },
      { name: "r/dentistry", url: "https://reddit.com/r/dentistry", description: "Dentistry community", type: "community" }
    ]
  },
  {
    id: 21,
    title: "Veterinarian",
    slug: "veterinarian",
    category: "Healthcare",
    icon: "🐕",
    overview: "Veterinarians provide medical care to animals. They diagnose illnesses, perform surgeries, and advise pet owners on animal care and welfare.",
    dailyTasks: [
      "Examine animals",
      "Diagnose conditions",
      "Perform surgeries",
      "Vaccinate pets",
      "Advise pet owners"
    ],
    skills: ["Animal medicine", "Surgical skills", "Compassion", "Communication", "Problem-solving"],
    benefits: ["Helping animals", "Good salary", "Varied work", "Emotional rewards", "Own practice"],
    challenges: ["Euthanasia decisions", "Difficult clients", "Long hours", "Emergency calls", "Student debt"],
    resources: [
      { name: "Khan Academy - Animal Health", url: "https://www.khanacademy.org/science/biology", description: "Free biology for vet science", type: "course" },
      { name: "Veterinary Information Network", url: "https://www.vin.com/", description: "Veterinary resources", type: "course" },
      { name: "AVMA", url: "https://www.avma.org/", description: "American Vet Medical Association", type: "course" },
      { name: "PetMD", url: "https://www.petmd.com/", description: "Pet health information", type: "course" },
      { name: "r/VetSchool", url: "https://reddit.com/r/VetSchool", description: "Vet student community", type: "community" }
    ]
  },
  {
    id: 22,
    title: "Psychologist",
    slug: "psychologist",
    category: "Healthcare",
    icon: "🧠",
    overview: "Psychologists study human behavior and mental processes. They help people deal with mental health issues through therapy, testing, and research.",
    dailyTasks: [
      "Conduct therapy sessions",
      "Assess patients",
      "Administer psychological tests",
      "Keep clinical records",
      "Continue professional development"
    ],
    skills: ["Active listening", "Empathy", "Research methods", "Communication", "Critical thinking"],
    benefits: ["Meaningful work", "Flexible schedule", "Various specialties", "Growing demand", "Private practice"],
    challenges: ["Emotional drain", "Insurance paperwork", "Continuing education", "Difficult cases", "Building clientele"],
    resources: [
      { name: "Khan Academy - Psychology", url: "https://www.khanacademy.org/science/health-and-medicine/mental-health", description: "Free psychology basics", type: "course" },
      { name: "OpenStax - Psychology", url: "https://openstax.org/books/psychology-2e/pages", description: "Free psychology textbook", type: "book" },
      { name: "APA Resources", url: "https://www.apa.org/education-career/undergrad", description: "American Psychological Association", type: "course" },
      { name: "Simply Psychology", url: "https://www.simplypsychology.org/", description: "Free psychology articles", type: "course" },
      { name: "r/psychology", url: "https://reddit.com/r/psychology", description: "Psychology community", type: "community" }
    ]
  },
  // FOOD & HOSPITALITY
  {
    id: 23,
    title: "Chef",
    slug: "chef",
    category: "Food",
    icon: "👨‍🍳",
    overview: "Chefs prepare meals in restaurants, hotels, and other food service establishments. They create menus, manage kitchen staff, ensure food quality, and maintain hygiene standards.",
    dailyTasks: [
      "Plan and prepare menu items",
      "Order ingredients and supplies",
      "Manage kitchen staff",
      "Ensure food safety standards",
      "Create plate presentations"
    ],
    skills: ["Cooking techniques", "Time management", "Creativity", "Leadership", "Food safety knowledge"],
    benefits: ["Creative freedom", "Career growth opportunities", "Working with food", "Building reputation", "Entrepreneurial potential"],
    challenges: ["Long hours on feet", "High stress during rush", "Early morning/late night shifts", "Physical demands", "Competitive industry"],
    resources: [
      { name: "Chef's Toolbox - YouTube", url: "https://www.youtube.com/user/chaumartin", description: "Free cooking techniques", type: "course" },
      { name: "America's Test Kitchen", url: "https://www.americastestkitchen.com/", description: "Free recipes & techniques", type: "course" },
      { name: "ServSafe", url: "https://www.servsafe.com/", description: "Food safety certification", type: "course" },
      { name: "Chef's Garden", url: "https://www.chefsgarden.com/", description: "Farm-to-table education", type: "course" },
      { name: "r/Chefs", url: "https://reddit.com/r/Chefs", description: "Chef community", type: "community" }
    ]
  },
  {
    id: 24,
    title: "Restaurant Manager",
    slug: "restaurant-manager",
    category: "Food",
    icon: "🍽️",
    overview: "Restaurant managers oversee the daily operations of restaurants. They manage staff, ensure customer satisfaction, handle finances, and maintain quality standards.",
    dailyTasks: [
      "Manage staff schedules",
      "Handle customer complaints",
      "Oversee food quality",
      "Manage inventory and orders",
      "Handle finances and reporting"
    ],
    skills: ["Leadership", "Communication", "Problem-solving", "Business acumen", "Customer service"],
    benefits: ["Career advancement", "Bonuses based on performance", "Dynamic work environment", "Tips/variable pay", "Industry growth"],
    challenges: ["Long hours", "Weekend/holiday work", "Stress", "Staff management", "Thin profit margins"],
    resources: [
      { name: "ServSafe Manager", url: "https://www.servsafe.com/ServSafe-manager", description: "Free manager certification", type: "course" },
      { name: "National Restaurant Association", url: "https://restaurant.org/", description: "Industry resources & training", type: "course" },
      { name: "YouTube - Restaurant Tips", url: "https://www.youtube.com/", description: "Free management tutorials", type: "course" },
      { name: "Toast POS Blog", url: "https://www.toasttab.com/blog/", description: "Restaurant management tips", type: "course" },
      { name: "r/restaurant", url: "https://reddit.com/r/restaurant", description: "Restaurant industry community", type: "community" }
    ]
  },
  {
    id: 25,
    title: "Food Scientist",
    slug: "food-scientist",
    category: "Food",
    icon: "🔬",
    overview: "Food scientists develop new food products and improve existing ones. They work on food safety, nutrition, and processing techniques.",
    dailyTasks: [
      "Research new products",
      "Test food formulations",
      "Ensure safety compliance",
      "Work with production teams",
      "Document findings"
    ],
    skills: ["Food chemistry", "Research methods", "Lab techniques", "Documentation", "Problem-solving"],
    benefits: ["Innovation work", "Job growth", "Diverse industries", "Lab environment", "Impact on food supply"],
    challenges: ["Lab work repetitive", "Regulatory work", "Long R&D cycles", "Consumer acceptance", "Technical writing"],
    resources: [
      { name: "IFT - Institute of Food Technologists", url: "https://www.ift.org/", description: "Food science resources", type: "course" },
      { name: "Khan Academy - Chemistry", url: "https://www.khanacademy.org/science/chemistry", description: "Free chemistry foundation", type: "course" },
      { name: "OpenStax - Chemistry", url: "https://openstax.org/books/chemistry-2e/pages", description: "Free chemistry textbook", type: "book" },
      { name: "FDA Food Safety", url: "https://www.fda.gov/food", description: "Food safety regulations", type: "course" },
      { name: "r/foodscience", url: "https://reddit.com/r/foodscience", description: "Food science community", type: "community" }
    ]
  },
  // BUSINESS & FINANCE
  {
    id: 26,
    title: "Accountant",
    slug: "accountant",
    category: "Business",
    icon: "📊",
    overview: "Accountants prepare and examine financial records. They ensure accuracy of financial documents, check for errors, prepare tax returns, and help organizations manage their money efficiently.",
    dailyTasks: [
      "Prepare financial statements",
      "Review accounts for errors",
      "Calculate and file taxes",
      "Audit financial records",
      "Advise on financial decisions"
    ],
    skills: ["Math and analytics", "Attention to detail", "Knowledge of tax laws", "Software proficiency", "Integrity"],
    benefits: ["Stable career", "Good salary", "Various industries", "Certification growth", "Remote options"],
    challenges: ["Long hours during tax season", "Constant rule changes", "Repetitive work", "High responsibility", "Stress with deadlines"],
    resources: [
      { name: "IRS - Free Tax Courses", url: "https://www.irs.gov/learning", description: "Free IRS tax training", type: "course" },
      { name: "Khan Academy - Finance", url: "https://www.khanacademy.org/economics-finance-domain", description: "Free finance courses", type: "course" },
      { name: "Accounting Coach", url: "https://www.accountingcoach.com/", description: "Free accounting tutorials", type: "course" },
      { name: "Gleim Exam Prep", url: "https://www.gleim.com/", description: "Free CPA exam prep", type: "practice" },
      { name: "r/Accounting", url: "https://reddit.com/r/Accounting", description: "Accounting community", type: "community" }
    ]
  },
  {
    id: 27,
    title: "Financial Analyst",
    slug: "financial-analyst",
    category: "Business",
    icon: "💹",
    overview: "Financial analysts evaluate investment opportunities and provide recommendations. They analyze financial data, market trends, and economic conditions to help businesses and individuals make investment decisions.",
    dailyTasks: [
      "Analyze financial data",
      "Create financial models",
      "Research market trends",
      "Prepare reports",
      "Present recommendations"
    ],
    skills: ["Financial modeling", "Excel mastery", "Analytical thinking", "Communication", "Industry knowledge"],
    benefits: ["High salary", "Growth potential", "Prestige", "Bonus potential", "Wall Street exposure"],
    challenges: ["Long hours", "High pressure", "Certification requirements", "Market volatility stress", "Competitive field"],
    resources: [
      { name: "Khan Academy - Finance & Capital Markets", url: "https://www.khanacademy.org/economics-finance-domain/capital-market-securities", description: "Free finance courses", type: "course" },
      { name: "Investopedia Academy", url: "https://www.investopedia.com/", description: "Free financial education", type: "course" },
      { name: "Yahoo Finance", url: "https://finance.yahoo.com/", description: "Free market data", type: "practice" },
      { name: "Breaking Into Wall Street", url: "https://www.breakingintowallstreet.com/", description: "Free resources", type: "course" },
      { name: "r/finance", url: "https://reddit.com/r/finance", description: "Finance community", type: "community" }
    ]
  },
  {
    id: 28,
    title: "Marketing Manager",
    slug: "marketing-manager",
    category: "Business",
    icon: "📢",
    overview: "Marketing managers develop strategies to promote products or services. They oversee advertising campaigns, manage social media, and analyze market trends to reach target audiences.",
    dailyTasks: [
      "Plan marketing campaigns",
      "Manage social media",
      "Analyze campaign performance",
      "Coordinate with teams",
      "Manage budgets"
    ],
    skills: ["Strategic thinking", "Creativity", "Data analysis", "Communication", "Project management"],
    benefits: ["Creative work", "Diverse industries", "Career growth", "Digital skills demand", "Performance bonuses"],
    challenges: ["Tight deadlines", "Changing platforms", "ROI pressure", "Multitasking", "Staying current"],
    resources: [
      { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", description: "Free digital marketing course", type: "course" },
      { name: "HubSpot Academy", url: "https://academy.hubspot.com/", description: "Free marketing courses", type: "course" },
      { name: "Hootsuite Academy", url: "https://www.hootsuite.com/products/academy", description: "Free social media courses", type: "course" },
      { name: "Mailchimp Guides", url: "https://mailchimp.com/resources/", description: "Free marketing guides", type: "course" },
      { name: "r/marketing", url: "https://reddit.com/r/marketing", description: "Marketing community", type: "community" }
    ]
  },
  {
    id: 29,
    title: "Human Resources Manager",
    slug: "hr-manager",
    category: "Business",
    icon: "👥",
    overview: "HR managers handle employee relations, recruitment, training, and company policies. They ensure a positive work environment and help organizations retain talent.",
    dailyTasks: [
      "Recruit and hire employees",
      "Manage employee benefits",
      "Handle workplace conflicts",
      "Develop training programs",
      "Ensure compliance"
    ],
    skills: ["Interpersonal skills", "Communication", "Problem-solving", "Knowledge of labor laws", "Confidentiality"],
    benefits: ["Job stability", "Various industries", "Career growth", "Employee engagement", "Strategic role"],
    challenges: ["Difficult conversations", "Employee conflicts", "Compliance complexity", "Budget constraints", "Keeping employees happy"],
    resources: [
      { name: "SHRM - Society for HR Management", url: "https://www.shrm.org/", description: "Free HR resources", type: "course" },
      { name: "Khan Academy - Personal Finance", url: "https://www.khanacademy.org/college-careers-money/college-careers", description: "Career development courses", type: "course" },
      { name: "HR Daily Advisor", url: "https://hrdailyadvisor.blr.com/", description: "Free HR articles", type: "course" },
      { name: "LinkedIn Learning - HR", url: "https://www.linkedin.com/learning/", description: "Free HR courses", type: "course" },
      { name: "r/humanresources", url: "https://reddit.com/r/humanresources", description: "HR community", type: "community" }
    ]
  },
  {
    id: 30,
    title: "Entrepreneur",
    slug: "entrepreneur",
    category: "Business",
    icon: "🚀",
    overview: "Entrepreneurs start and run their own businesses. They identify opportunities, develop products, and build companies from the ground up.",
    dailyTasks: [
      "Develop business ideas",
      "Secure funding",
      "Build teams",
      "Make strategic decisions",
      "Manage operations"
    ],
    skills: ["Leadership", "Risk-taking", "Problem-solving", "Networking", "Financial management"],
    benefits: ["Unlimited potential", "Creative freedom", "Build something meaningful", "Financial upside", "Flexibility"],
    challenges: ["High risk", "Long hours", "Financial stress", "Uncertainty", "Wearing many hats"],
    resources: [
      { name: "Y Combinator Startup Library", url: "https://www.ycombinator.com/library/", description: "Free startup resources", type: "course" },
      { name: "SCORE Business Templates", url: "https://www.score.org/resource-library", description: "Free business templates", type: "course" },
      { name: "Khan Academy - Entrepreneurship", url: "https://www.khanacademy.org/college-careers-money/entrepreneurship", description: "Free entrepreneurship courses", type: "course" },
      { name: "Lean Startup Methodology", url: "https://theleanstartup.com/", description: "Free startup book", type: "book" },
      { name: "r/entrepreneur", url: "https://reddit.com/r/entrepreneur", description: "Entrepreneur community", type: "community" }
    ]
  },
  {
    id: 31,
    title: "Project Manager",
    slug: "project-manager",
    category: "Business",
    icon: "📋",
    overview: "Project managers plan and execute projects within organizations. They coordinate teams, manage budgets, and ensure projects are completed on time and within scope.",
    dailyTasks: [
      "Plan project timelines",
      "Coordinate team members",
      "Track progress",
      "Manage budgets",
      "Communicate with stakeholders"
    ],
    skills: ["Organization", "Communication", "Leadership", "Problem-solving", "Time management"],
    benefits: ["High demand", "Good salary", "Various industries", "Career advancement", "Certification value"],
    challenges: ["Scope creep", "Stakeholder management", "Tight deadlines", "Resource constraints", "Multitasking"],
    resources: [
      { name: "PMI - Project Management Institute", url: "https://www.pmi.org/", description: "Free PM resources", type: "course" },
      { name: "Asana Guide", url: "https://asana.com/guide", description: "Free project management guide", type: "course" },
      { name: "Trello Blog", url: "https://blog.trello.com/", description: "PM tips & templates", type: "course" },
      { name: "Agile/Scrum Guide", url: "https://www.scrum.org/resources", description: "Free Scrum resources", type: "course" },
      { name: "r/projectmanagement", url: "https://reddit.com/r/projectmanagement", description: "PM community", type: "community" }
    ]
  },
  {
    id: 32,
    title: "Sales Representative",
    slug: "sales-representative",
    category: "Business",
    icon: "🤝",
    overview: "Sales representatives sell products or services to customers. They identify leads, present products, negotiate deals, and maintain customer relationships.",
    dailyTasks: [
      "Prospect for new clients",
      "Present products",
      "Negotiate contracts",
      "Meet sales quotas",
      "Maintain client relationships"
    ],
    skills: ["Communication", "Persuasion", "Negotiation", "Resilience", "Product knowledge"],
    benefits: ["Uncapped earnings", "Career growth", "Transferable skills", "Independence", "Commission bonuses"],
    challenges: ["Rejection", "Quota pressure", "Travel", "Irregular income", "Competition"],
    resources: [
      { name: "HubSpot Sales Academy", url: "https://www.hubspot.com/products/sales", description: "Free sales training", type: "course" },
      { name: "Sandler Training", url: "https://www.sandler.com/", description: "Free sales resources", type: "course" },
      { name: "Salesforce Trailhead", url: "https://trailhead.salesforce.com/", description: "Free CRM training", type: "course" },
      { name: "Gong.io", url: "https://www.gong.io/resources/", description: "Free sales insights", type: "course" },
      { name: "r/sales", url: "https://reddit.com/r/sales", description: "Sales community", type: "community" }
    ]
  },
  // EDUCATION
  {
    id: 33,
    title: "Teacher",
    slug: "teacher",
    category: "Education",
    icon: "📚",
    overview: "Teachers educate students in schools, colleges, and universities. They plan lessons, teach subjects, assess student progress, and help students develop both academically and personally.",
    dailyTasks: [
      "Plan and deliver lessons",
      "Grade assignments and tests",
      "Meet with students for help",
      "Create teaching materials",
      "Attend staff meetings"
    ],
    skills: ["Communication", "Patience", "Subject expertise", "Classroom management", "Creativity"],
    benefits: ["Meaningful impact", "Holidays and vacations", "Career stability", "Summers off (K-12)", "Community involvement"],
    challenges: ["Low pay in some areas", "Difficult students/parents", "Large class sizes", "Grading workload", "Keeping students engaged"],
    resources: [
      { name: "Khan Academy - Teaching", url: "https://www.khanacademy.org/teaching", description: "Free teaching strategies", type: "course" },
      { name: "Edutopia", url: "https://www.edutopia.org/", description: "Free teaching resources", type: "course" },
      { name: "Teach.org", url: "https://www.teach.org/", description: "Teaching career resources", type: "course" },
      { name: "PBS LearningMedia", url: "https://www.pbslearningmedia.org/", description: "Free lesson materials", type: "course" },
      { name: "r/Teaching", url: "https://reddit.com/r/Teaching", description: "Teacher community", type: "community" }
    ]
  },
  {
    id: 34,
    title: "Professor",
    slug: "professor",
    category: "Education",
    icon: "🎓",
    overview: "Professors teach college and university students in their area of expertise. They also conduct research and publish academic papers.",
    dailyTasks: [
      "Teach college courses",
      "Conduct research",
      "Publish academic papers",
      "Advise students",
      "Attend academic conferences"
    ],
    skills: ["Subject expertise", "Research methods", "Public speaking", "Writing", "Mentoring"],
    benefits: ["Intellectual freedom", "Flexible schedule", "Research opportunities", "Tenure potential", "Summers off"],
    challenges: ["PhD required", "Publish or perish", "Competition for tenure", "Grant writing", "Student demands"],
    resources: [
      { name: "OpenStax - Textbooks", url: "https://openstax.org/", description: "Free textbooks", type: "book" },
      { name: "JSTOR", url: "https://www.jstor.org/", description: "Free academic research", type: "course" },
      { name: "Google Scholar", url: "https://scholar.google.com/", description: "Academic paper search", type: "course" },
      { name: "Coursera for Campus", url: "https://www.coursera.org/campus", description: "Free online courses", type: "course" },
      { name: "r/Professors", url: "https://reddit.com/r/Professors", description: "Professor community", type: "community" }
    ]
  },
  {
    id: 35,
    title: "Tutor",
    slug: "tutor",
    category: "Education",
    icon: "📖",
    overview: "Tutors provide one-on-one academic support to students. They help students understand subjects, prepare for tests, and develop study skills.",
    dailyTasks: [
      "Assess student needs",
      "Teach concepts",
      "Help with homework",
      "Prepare for tests",
      "Track progress"
    ],
    skills: ["Subject knowledge", "Patience", "Communication", "Adaptability", "Motivation"],
    benefits: ["Flexible schedule", "One-on-one impact", "Various subjects", "Remote work", "Supplemental income"],
    challenges: ["Finding students", "Difficult learners", "Variable income", "Keeping updated", "Building reputation"],
    resources: [
      { name: "Khan Academy", url: "https://www.khanacademy.org/", description: "Free learning platform", type: "course" },
      { name: "Khan Academy - Test Prep", url: "https://www.khanacademy.org/test-prep", description: "Free test prep", type: "course" },
      { name: "Varsity Tutors", url: "https://www.varsitytutors.com/", description: "Tutoring practice", type: "practice" },
      { name: "Wyzant", url: "https://www.wyzant.com/", description: "Find tutoring work", type: "practice" },
      { name: "r/tutoring", url: "https://reddit.com/r/tutoring", description: "Tutor community", type: "community" }
    ]
  },
  // TRADES & SKILLED LABOR
  {
    id: 36,
    title: "Electrician",
    slug: "electrician",
    category: "Trades",
    icon: "⚡",
    overview: "Electricians install, maintain, and repair electrical systems in homes, businesses, and factories. They work with wiring, circuit breakers, lighting, and other electrical components.",
    dailyTasks: [
      "Read blueprints and diagrams",
      "Install wiring and fixtures",
      "Test electrical systems",
      "Repair faulty equipment",
      "Follow safety protocols"
    ],
    skills: ["Technical knowledge", "Problem-solving", "Physical dexterity", "Safety awareness", "Math skills"],
    benefits: ["High demand", "Good pay (union often)", "Hands-on work", "Self-employment potential", "Little formal education needed"],
    challenges: ["Physical labor", "Risk of electrical shock", "Working in tight spaces", "Weather exposure", "On-call emergencies"],
    resources: [
      { name: "Mike Holt's Electrical Training", url: "https://www.mikeholt.com/", description: "Free electrical training", type: "course" },
      { name: "Electronics Tutorials", url: "https://www.electronics-tutorials.com/", description: "Free electronics education", type: "course" },
      { name: "NEC Code Book", url: "https://www.nfpa.org/codes-and-standards/nec-standard-development/nec", description: "National Electrical Code", type: "course" },
      { name: "YouTube - Electrician Tips", url: "https://www.youtube.com/", description: "Free video tutorials", type: "course" },
      { name: "r/electricians", url: "https://reddit.com/r/electricians", description: "Electrician community", type: "community" }
    ]
  },
  {
    id: 37,
    title: "Plumber",
    slug: "plumber",
    category: "Trades",
    icon: "🔧",
    overview: "Plumbers install and repair water, gas, and sewage systems in homes and buildings. They work with pipes, fixtures, and appliances that involve water.",
    dailyTasks: [
      "Install pipe systems",
      "Fix leaks and clogs",
      "Read blueprints",
      "Inspect systems",
      "Use specialized tools"
    ],
    skills: ["Technical skills", "Problem-solving", "Physical strength", "Customer service", "Time management"],
    benefits: ["High demand", "Good income", "Self-employment", "Hands-on work", "Trade school vs college"],
    challenges: ["Dirty work", "Physical demands", "Emergency calls", "Tight spaces", "Weather conditions"],
    resources: [
      { name: "Trade Skills Hub", url: "https://www.tradeskills.co.uk/", description: "Free plumbing courses", type: "course" },
      { name: "YouTube Plumbing Tutorials", url: "https://www.youtube.com/", description: "Free video guides", type: "course" },
      { name: "Plumbing Basics", url: "https://www.thisoldhouse.com/plumbing", description: "Plumbing how-tos", type: "course" },
      { name: "International Association of Plumbing Officials", url: "https://www.iapmo.org/", description: "Plumbing codes", type: "course" },
      { name: "r/Plumbing", url: "https://reddit.com/r/Plumbing", description: "Plumbing community", type: "community" }
    ]
  },
  {
    id: 38,
    title: "Mechanic",
    slug: "mechanic",
    category: "Trades",
    icon: "🚗",
    overview: "Mechanics diagnose and repair vehicles. They work on engines, brakes, transmissions, and other vehicle systems to keep cars running safely.",
    dailyTasks: [
      "Diagnose vehicle problems",
      "Repair and replace parts",
      "Perform maintenance",
      "Test drive vehicles",
      "Communicate with customers"
    ],
    skills: ["Mechanical knowledge", "Problem-solving", "Technical skills", "Physical dexterity", "Customer service"],
    benefits: ["Stable demand", "Good income", "Self-employment option", "Hands-on work", "Certification value"],
    challenges: ["Dirty/hands-on work", "Physical strain", "Technology changes", "Customer expectations", "Certification updates"],
    resources: [
      { name: "YouTube Mechanic Channels", url: "https://www.youtube.com/", description: "Free repair tutorials", type: "course" },
      { name: "Automotive Training Videos", url: "https://www.1aauto.com/", description: "Free repair guides", type: "course" },
      { name: "MIT OpenCourseWare - Automotive", url: "https://ocw.mit.edu/courses/automotive-engineering/", description: "Free auto courses", type: "course" },
      { name: "NAPA AutoCare", url: "https://www.napacareerpath.com/", description: "Free training resources", type: "course" },
      { name: "r/MechanicAdvice", url: "https://reddit.com/r/MechanicAdvice", description: "Mechanic community", type: "community" }
    ]
  },
  {
    id: 39,
    title: "Carpenter",
    slug: "carpenter",
    category: "Trades",
    icon: "🪵",
    overview: "Carpenters build and repair structures made of wood. They work on framing, installing cabinets, building furniture, and finishing woodwork.",
    dailyTasks: [
      "Read blueprints",
      "Measure and cut materials",
      "Install structures",
      "Finish woodwork",
      "Use power tools"
    ],
    skills: ["Measurement accuracy", "Tool mastery", "Physical strength", "Blueprint reading", "Attention to detail"],
    benefits: ["Craftsmanship", "Physical activity", "Self-employment", "Diverse projects", "Union potential"],
    challenges: ["Physical demands", "Job site conditions", "Tool costs", "Weather-dependent", "Injury risk"],
    resources: [
      { name: "Khan Academy - Woodworking", url: "https://www.khanacademy.org/", description: "Free basic skills", type: "course" },
      { name: "YouTube Woodworking Channels", url: "https://www.youtube.com/", description: "Free video tutorials", type: "course" },
      { name: "This Old House - Woodworking", url: "https://www.thisoldhouse.com/woodworking", description: "Free how-tos", type: "course" },
      { name: "WoodWorkers Guild", url: "https://www.wwgoa.com/", description: "Free woodworking courses", type: "course" },
      { name: "r/woodworking", url: "https://reddit.com/r/woodworking", description: "Woodworking community", type: "community" }
    ]
  },
  {
    id: 40,
    title: "HVAC Technician",
    slug: "hvac-technician",
    category: "Trades",
    icon: "❄️",
    overview: "HVAC technicians install and repair heating, ventilation, and air conditioning systems. They ensure buildings have comfortable indoor temperatures.",
    dailyTasks: [
      "Install HVAC systems",
      "Diagnose problems",
      "Perform maintenance",
      "Repair/replace parts",
      "Test systems"
    ],
    skills: ["Technical knowledge", "Problem-solving", "Physical work", "Electrical basics", "Customer service"],
    benefits: ["High demand", "Good pay", "Year-round work", "Certification value", "Self-employment"],
    challenges: ["Extreme temperatures", "On-call hours", "Physical demands", "Continuing education", "Refrigerant handling"],
    resources: [
      { name: "HVAC School", url: "https://www.hvacschool.org/", description: "Free HVAC training", type: "course" },
      { name: "YouTube HVAC Tutorials", url: "https://www.youtube.com/", description: "Free video guides", type: "course" },
      { name: "AC Service Tech", url: "https://www.acservicetech.com/", description: "Free HVAC education", type: "course" },
      { name: "RSES - HVAC Training", url: "https://www.rses.org/", description: "Free resources", type: "course" },
      { name: "r/HVAC", url: "https://reddit.com/r/HVAC", description: "HVAC community", type: "community" }
    ]
  },
  // PUBLIC SERVICE
  {
    id: 41,
    title: "Police Officer",
    slug: "police-officer",
    category: "Public Service",
    icon: "👮",
    overview: "Police officers enforce laws, maintain public order, and protect people and property. They respond to emergencies, investigate crimes, arrest suspects, and patrol neighborhoods.",
    dailyTasks: [
      "Patrol assigned areas",
      "Respond to emergency calls",
      "Write incident reports",
      "Investigate crimes",
      "Appear in court"
    ],
    skills: ["Physical fitness", "Communication", "Quick decision-making", "Conflict resolution", "Legal knowledge"],
    benefits: ["Job security", "Good benefits and pension", "Career advancement", "Training provided", "Serving community"],
    challenges: ["Dangerous situations", "Shift work and weekends", "Emotional trauma", "Public scrutiny", "Physical demands"],
    resources: [
      { name: "Khan Academy - Criminal Justice", url: "https://www.khanacademy.org/", description: "Free criminal justice basics", type: "course" },
      { name: "PoliceOne Academy", url: "https://www.policeone.com/", description: "Free law enforcement training", type: "course" },
      { name: "FBI Careers", url: "https://www.fbijobs.gov/", description: "Law enforcement career info", type: "course" },
      { name: "National Police Foundation", url: "https://www.policefoundation.org/", description: "Police research", type: "course" },
      { name: "r/ProtectAndServe", url: "https://reddit.com/r/ProtectAndServe", description: "Law enforcement community", type: "community" }
    ]
  },
  {
    id: 42,
    title: "Firefighter",
    slug: "firefighter",
    category: "Public Service",
    icon: "🚒",
    overview: "Firefighters respond to fires, rescue people, and handle emergency situations. They also inspect buildings for fire hazards and educate the public about safety.",
    dailyTasks: [
      "Respond to emergencies",
      "Fight fires",
      "Rescue people",
      "Inspect buildings",
      "Train and exercise"
    ],
    skills: ["Physical fitness", "Courage", "Teamwork", "First aid", "Quick thinking"],
    benefits: ["Pension benefits", "Job security", "Making a difference", "Pride in service", "Skills training"],
    challenges: ["Dangerous work", "Long shifts", "Physical demands", "Emotional stress", "On-call duties"],
    resources: [
      { name: "FEMA Training", url: "https://training.fema.gov/", description: "Free emergency training", type: "course" },
      { name: "National Fire Protection Association", url: "https://www.nfpa.org/", description: "Fire safety resources", type: "course" },
      { name: "Red Cross - First Aid", url: "https://www.redcross.org/take-a-class", description: "Free first aid basics", type: "course" },
      { name: "Firefighter Candidate Training", url: "https://www.firehouse.com/", description: "Firefighter resources", type: "course" },
      { name: "r/Firefighting", url: "https://reddit.com/r/Firefighting", description: "Firefighter community", type: "community" }
    ]
  },
  {
    id: 43,
    title: "Military Officer",
    slug: "military-officer",
    category: "Public Service",
    icon: "🎖️",
    overview: "Military officers lead service members in the armed forces. They plan and execute military operations, manage personnel, and ensure mission success.",
    dailyTasks: [
      "Lead troops",
      "Plan operations",
      "Manage personnel",
      "Train soldiers",
      "Maintain discipline"
    ],
    skills: ["Leadership", "Physical fitness", "Decision-making", "Discipline", "Strategic thinking"],
    benefits: ["Full benefits", "Education assistance", "Career growth", "Travel", "Service to country"],
    challenges: ["Deployments", "Time away from family", "Strict hierarchy", "Physical demands", "Transition to civilian life"],
    resources: [
      { name: "Military.com", url: "https://www.military.com/", description: "Free military career info", type: "course" },
      { name: "USO", url: "https://www.uso.org/", description: "Military family resources", type: "course" },
      { name: "Veterans Affairs", url: "https://www.va.gov/", description: "VA education benefits", type: "course" },
      { name: "Military One Source", url: "https://www.militaryonesource.mil/", description: "Free military resources", type: "course" },
      { name: "r/military", url: "https://reddit.com/r/military", description: "Military community", type: "community" }
    ]
  },
  {
    id: 44,
    title: "Social Worker",
    slug: "social-worker",
    category: "Public Service",
    icon: "🤝",
    overview: "Social workers help people cope with challenges in their lives. They provide counseling, connect clients with resources, and advocate for vulnerable populations.",
    dailyTasks: [
      "Assess client needs",
      "Provide counseling",
      "Connect with resources",
      "Document cases",
      "Advocate for clients"
    ],
    skills: ["Empathy", "Communication", "Problem-solving", "Patience", "Documentation"],
    benefits: ["Meaningful impact", "Job growth", "Various specializations", "Flexible settings", "Making a difference"],
    challenges: ["Emotional burnout", "Heavy caseloads", "Low pay", "Bureaucracy", "Difficult clients"],
    resources: [
      { name: "Khan Academy - Social Work", url: "https://www.khanacademy.org/", description: "Free social work basics", type: "course" },
      { name: "NASW - Social Workers", url: "https://www.socialworkers.org/", description: "Career resources", type: "course" },
      { name: "Social Work Helper", url: "https://www.socialworkhelper.com/", description: "Social work news", type: "community" },
      { name: "Open Social Work", url: "https://www.opensocialwork.org/", description: "Free SW resources", type: "course" },
      { name: "r/socialwork", url: "https://reddit.com/r/socialwork", description: "Social work community", type: "community" }
    ]
  },
  {
    id: 45,
    title: "Lawyer",
    slug: "lawyer",
    category: "Public Service",
    icon: "⚖️",
    overview: "Lawyers represent clients in legal matters. They provide legal advice, prepare documents, argue cases in court, and help people navigate the legal system.",
    dailyTasks: [
      "Research cases",
      "Prepare legal documents",
      "Meet with clients",
      "Argue in court",
      "Negotiate settlements"
    ],
    skills: ["Legal knowledge", "Research", "Public speaking", "Writing", "Analytical thinking"],
    benefits: ["High income", "Prestige", "Various fields", "Making a difference", "Intellectual challenge"],
    challenges: ["Law school debt", "Long hours", "Competitive field", "High stress", "Continuing education"],
    resources: [
      { name: "Khan Academy - Law", url: "https://www.khanacademy.org/", description: "Free law basics", type: "course" },
      { name: "Legal Information Institute", url: "https://www.law.cornell.edu/", description: "Free legal resources", type: "course" },
      { name: "OpenCourser - Law", url: "https://www.coursera.org/browse/law", description: "Free law courses", type: "course" },
      { name: "Nolo - Legal Encyclopedia", url: "https://www.nolo.com/", description: "Free legal information", type: "course" },
      { name: "r/lawschool", url: "https://reddit.com/r/lawschool", description: "Law student community", type: "community" }
    ]
  },
  // CREATIVE & MEDIA
  {
    id: 46,
    title: "Photographer",
    slug: "photographer",
    category: "Creative",
    icon: "📷",
    overview: "Photographers capture images for events, businesses, magazines, and personal use. They use cameras and editing software to create visual stories for clients.",
    dailyTasks: [
      "Meet with clients",
      "Plan photo shoots",
      "Take photographs",
      "Edit and retouch images",
      "Manage business tasks"
    ],
    skills: ["Creativity", "Technical camera skills", "Photo editing (Lightroom, Photoshop)", "Communication", "Business marketing"],
    benefits: ["Creative freedom", "Flexible schedule", "Multiple industries", "Self-employment", "Build personal brand"],
    challenges: ["Irregular income", "Equipment costs", "Competitive market", "Client management", "Inconsistent workload"],
    resources: [
      { name: "Digital Photography School", url: "https://digital-photography-school.com/", description: "Free photography tutorials", type: "course" },
      { name: "Pinterest - Photography Tips", url: "https://www.pinterest.com/", description: "Photography inspiration", type: "community" },
      { name: "Adobe Lightroom Free", url: "https://lightroom.adobe.com/", description: "Free photo editing", type: "course" },
      { name: "YouTube Photography Channels", url: "https://www.youtube.com/", description: "Free video tutorials", type: "course" },
      { name: "r/photography", url: "https://reddit.com/r/photography", description: "Photography community", type: "community" }
    ]
  },
  {
    id: 47,
    title: "Writer/Author",
    slug: "writer-author",
    category: "Creative",
    icon: "✍️",
    overview: "Writers create content for books, articles, websites, and other media. They research topics, write drafts, and edit their work for publication.",
    dailyTasks: [
      "Research topics",
      "Write drafts",
      "Edit and revise",
      "Meet deadlines",
      "Market work"
    ],
    skills: ["Writing", "Research", "Creativity", "Discipline", "Self-marketing"],
    benefits: ["Work from anywhere", "Creative expression", "Passive income potential", "Portfolio building", "Full-time or freelance"],
    challenges: ["Irregular income", "Rejection", "Writer's block", "Self-discipline", "Marketing needed"],
    resources: [
      { name: "Writing Exercises - Writers Store", url: "https://www.writersstore.com/", description: "Free writing exercises", type: "course" },
      { name: "Khan Academy - Language Arts", url: "https://www.khanacademy.org/ela", description: "Free writing courses", type: "course" },
      { name: "Medium Writing Guides", url: "https://help.medium.com/", description: "Free writing tips", type: "course" },
      { name: "Grammarly Blog", url: "https://www.grammarly.com/blog", description: "Free writing resources", type: "course" },
      { name: "r/writing", url: "https://reddit.com/r/writing", description: "Writing community", type: "community" }
    ]
  },
  {
    id: 48,
    title: "Journalist",
    slug: "journalist",
    category: "Creative",
    icon: "📰",
    overview: "Journalists gather and report news for newspapers, magazines, TV, or online platforms. They investigate stories, interview sources, and write articles.",
    dailyTasks: [
      "Research stories",
      "Conduct interviews",
      "Write articles",
      "Meet deadlines",
      "Follow breaking news"
    ],
    skills: ["Research", "Writing", "Communication", "Curiosity", "Speed"],
    benefits: ["Impactful work", "Exciting field", "Diverse beats", "Storytelling", "Recognition"],
    challenges: ["Tight deadlines", "Industry changes", "Low pay early career", "Pressure", "Ethical decisions"],
    resources: [
      { name: "Khan Academy - Journalism", url: "https://www.khanacademy.org/", description: "Free journalism basics", type: "course" },
      { name: "Poynter", url: "https://www.poynter.org/", description: "Free journalism training", type: "course" },
      { name: "News Literacy Project", url: "https://newslit.org/", description: "Free news literacy resources", type: "course" },
      { name: "Journalism.co.uk", url: "https://www.journalism.co.uk/", description: "Journalism resources", type: "course" },
      { name: "r/Journalism", url: "https://reddit.com/r/Journalism", description: "Journalism community", type: "community" }
    ]
  },
  {
    id: 49,
    title: "Musician",
    slug: "musician",
    category: "Creative",
    icon: "🎵",
    overview: "Musicians perform music for audiences. They may play instruments, sing, compose music, or produce recordings. They work in studios, concerts, or bands.",
    dailyTasks: [
      "Practice instruments",
      "Perform live",
      "Record music",
      "Compose/arrange",
      "Promote work"
    ],
    skills: ["Musical talent", "Performance", "Practice discipline", "Creativity", "Business skills"],
    benefits: ["Creative expression", "Performances", "Potential fame", "Personal fulfillment", "Multiple income streams"],
    challenges: ["Unstable income", "Competition", "Rejection", "Industry changes", "Building audience"],
    resources: [
      { name: "YouTube Music Lessons", url: "https://www.youtube.com/", description: "Free music tutorials", type: "course" },
      { name: "Berklee Online Free", url: "https://online.berklee.edu/free/", description: "Free music courses", type: "course" },
      { name: "MuseScore", url: "https://musescore.org/", description: "Free music notation", type: "course" },
      { name: "Audiotuts", url: "https://music.tutsplus.com/", description: "Free music production", type: "course" },
      { name: "r/WeAreTheMusicMakers", url: "https://reddit.com/r/WeAreTheMusicMakers", description: "Musician community", type: "community" }
    ]
  },
  {
    id: 50,
    title: "YouTuber/Content Creator",
    slug: "content-creator",
    category: "Creative",
    icon: "🎥",
    overview: "Content creators produce videos, streams, or posts for online platforms. They build audiences, create engaging content, and monetize their work through ads, sponsorships, and merchandise.",
    dailyTasks: [
      "Create content",
      "Edit videos",
      "Engage with audience",
      "Plan content calendar",
      "Analyze metrics"
    ],
    skills: ["Video production", "Creativity", "Consistency", "Marketing", "Engagement"],
    benefits: ["Creative freedom", "Work from home", "Potential viral success", "Build brand", "Flexible schedule"],
    challenges: ["Algorithm changes", "Inconsistent income", "Content saturation", "Burnout", "Constant creation pressure"],
    resources: [
      { name: "YouTube Creator Academy", url: "https://www.youtube.com/creatoracademy/", description: "Free YouTube training", type: "course" },
      { name: "TubeBuddy", url: "https://www.tubebuddy.com/", description: "Free YouTube tool", type: "practice" },
      { name: "OBS Studio", url: "https://obsproject.com/", description: "Free streaming software", type: "course" },
      { name: "Canva for Video", url: "https://www.canva.com/create/video-editing/", description: "Free video design", type: "course" },
      { name: "r/NewTubers", url: "https://reddit.com/r/NewTubers", description: "YouTuber community", type: "community" }
    ]
  }
];

export function getRandomOccupation(): Occupation {
  const randomIndex = Math.floor(Math.random() * occupations.length);
  return occupations[randomIndex];
}

export function getOccupationBySlug(slug: string): Occupation | undefined {
  return occupations.find(occ => occ.slug === slug);
}

export function getOccupationsByCategory(category: string): Occupation[] {
  return occupations.filter(occ => occ.category === category);
}

export const categories = [
  "Technology",
  "Design",
  "Healthcare",
  "Food",
  "Business",
  "Education",
  "Trades",
  "Public Service",
  "Creative"
];
