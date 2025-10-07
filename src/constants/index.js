export const myProjects = [
  {
    id: 1,
    title: "StockPulse: Full-Stack Financial Analysis Platform",
    description:
      "A comprehensive web application for real-time stock market analysis, providing users with interactive charts, predictive insights, and up-to-date financial data.",
    subDescription: [
      "Developed a responsive frontend with React and Tailwind CSS for a seamless, data-rich user experience.",
      "Built a robust backend using Node.js to fetch and process real-time financial data from various APIs.",
      "Integrated a custom-trained machine learning model for stock trend prediction, offering users actionable insights.",
      "Designed and managed a database to store user data and historical stock information.",
    ],
    href: "https://github.com/Dewansh29/StockPulse",
    logo: "",
    image: "/assets/logos/StockPulse.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/icons8-nodejs-48.png" },
      { id: 3, name: "Python", path: "/assets/logos/Python-logo-notext.svg.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Saul Goodman: AI-Powered Financial Assistant",
    description:
      "An intelligent financial assistant that leverages Natural Language Processing (NLP) to answer user queries about market trends, stock performance, and economic data.",
    subDescription: [
      "Utilized LangChain and large language models (LLMs) to create a conversational AI capable of understanding financial questions.",
      "Engineered the backend in Python to process natural language, fetch relevant data, and generate informative responses.",
      "Connected to multiple financial data APIs to provide accurate, real-time answers.",
      "Showcases advanced skills in applying generative AI to the financial technology (FinTech) domain.",
    ],
    href: "https://github.com/Dewansh29/Saul_Goodman-Financial-Assistant-",
    logo: "",
    image: "/assets/logos/Saul.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python-logo-notext.svg.png" },
      { id: 2, name: "LangChain", path: "/assets/logos/Langchain--Streamline-Simple-Icons.svg", className: "invert" }, // Corrected
      { id: 3, name: "NLP", path: "/assets/logos/icons8-nlp-32.png", className: "invert" },                         // Corrected
      { id: 4, name: "Gemini", path: "/assets/logos/gemini-color.svg" },
    ],
  },
  {
    id: 3,
    title: "Deep Autoencoder for MNIST Digit Reconstruction",
    description:
      "A deep learning model that compresses handwritten digit images into a low-dimensional latent space and then reconstructs them, demonstrating a powerful unsupervised learning technique.",
    subDescription: [
      "Implemented a deep autoencoder using Keras and TensorFlow to learn the essential features of the MNIST dataset.",
      "Successfully compressed 784-dimensional images into a 100-dimensional representation with minimal loss.",
      "Visualized model performance by comparing original digits with their high-fidelity reconstructions.",
      "Demonstrates expertise in building and training advanced neural network architectures.",
    ],
    href: "https://github.com/Dewansh29/handwritten_digits-Project-AutoEncoders-.",
    logo: "",
    image: "/assets/logos/Autoencoder.png",
    tags: [
      { id: 1, name: "TensorFlow", path: "/assets/logos/icons8-tensorflow-48.png" },
      { id: 2, name: "Keras", path: "/assets/logos/icons8-keras-logo-24.png", className: "invert" },             // Corrected
      { id: 3, name: "Python", path: "/assets/logos/Python-logo-notext.svg.png" },
      { id: 4, name: "Deep Learning", path: "/assets/logos/icons8-deep-learning-50.png", className: "invert" }, // Corrected
    ],
  },
  {
    id: 4,
    title: "Avengers Face Recognition using Deep Learning",
    description:
      "A computer vision project that identifies and recognizes characters from 'The Avengers' using a custom-trained Convolutional Neural Network (CNN) and OpenCV.",
    subDescription: [
      "Built and trained a CNN model on a custom dataset of Avengers' faces, achieving high recognition accuracy.",
      "Utilized OpenCV for real-time video processing, face detection, and drawing bounding boxes.",
      "Applied data augmentation techniques to improve model robustness and prevent overfitting.",
      "Showcases practical skills in computer vision, from data collection to real-time application.",
    ],
    href: "https://github.com/Dewansh29/Face-detection-and-prediction-project-CNN-OPEN-CV-",
    logo: "",
    image: "/assets/logos/FaceDetection.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python-logo-notext.svg.png" },
      { id: 2, name: "OpenCV", path: "/assets/logos/icons8-opencv-48.png" },
      { id: 3, name: "CNN", path: "/assets/logos/deep-learning.png", className: "invert" },                     // Corrected
      { id: 4, name: "TensorFlow", path: "/assets/logos/icons8-tensorflow-48.png" },
    ],
  },
  {
    id: 5,
    title: "Emotion Classification using Sentiment Analysis",
    description:
      "A Natural Language Processing (NLP) project that classifies text into different emotional categories using a Random Forest model, providing insights into written sentiment.",
    subDescription: [
      "Applied NLP techniques for text preprocessing, including tokenization, stop-word removal, and vectorization.",
      "Trained a Random Forest classifier to accurately predict emotions from text data.",
      "Evaluated model performance using key metrics like accuracy, precision, and recall.",
      "Demonstrates foundational skills in classical machine learning and text data analysis.",
    ],
    href: "https://github.com/Dewansh29/Sentimental-Analysis-Using-NLP",
    logo: "",
    image: "/assets/logos/Sentiments.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python-logo-notext.svg.png" },
      { id: 2, name: "Scikit-learn", path: "/assets/logos/images.png", className: "invert" },                  // Corrected
      { id: 3, name: "Pandas", path: "/assets/logos/icons8-pandas-48.png" },
      { id: 4, name: "NLP", path: "/assets/logos/icons8-nlp-32.png", className: "invert" },                         // Corrected
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Dewansh29",
    icon: "/assets/logos/github.png",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/dewansh-jha-1a0917295",
    icon: "/assets/logos/linkedin.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dewanshjha29/",
    icon: "/assets/logos/insta.png",
  },
];

export const experiences = [
  {
    title: "Lead Contributor & Full-Stack Developer",
    job: "Collaborative FinTech Projects",
    date: "2024-Present",
    contents: [
      "Led a team in the end-to-end development of 'StockPulse,' a full-stack financial analysis platform, overseeing both the deep learning model integration and the React frontend.",
      "Architected an AI-powered financial assistant ('Saul Goodman') using Python and LangChain, guiding the team on implementing NLP to create a sophisticated conversational interface.",
      "Mentored junior team members on best practices in machine learning model development and API integration, fostering a collaborative and productive environment.",
      "Developed interactive dashboards with Power BI to visualize model performance and present key data-driven insights to project stakeholders.",
      "Contributed directly to the core ML models for stock trend analysis, applying advanced neural network and time-series forecasting techniques.",
    ],
  },
  {
    title: "Data Science & ML Practitioner",
    job: "Academic & Team-Based AI Projects",
    date: "2023-2024",
    contents: [
      "Collaborated within a team to build and train a Convolutional Neural Network (CNN) for a real-time face recognition application, focusing on model optimization and accuracy.",
      "Applied end-to-end data science methodologies, from data analysis and feature engineering to model implementation for NLP sentiment analysis and unsupervised learning with Autoencoders.",
      "Engineered key features for a movie recommender system, applying KNN algorithms to enhance recommendation relevancy and user experience.",
      "Actively participated in code reviews, sprint planning, and debugging sessions using Git and agile methodologies to ensure project milestones were met.",
    ],
  },
];

export const achievements = [
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    date: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/60B97DLFETO1", 
  },
  {
    name: "Data Analysis and Visualization with Power BI",
    issuer: "Microsoft",
    date: "2024",
    href: "https://www.coursera.org/account/accomplishments/verify/9VEUCODXFHEY",
  },
  {
    name: "AI Agents and Agentic AI in Python: Powered by Generative AI",
    issuer: "Vanderbilt University",
    date: "2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/8M68GPJW472Q",
  },
  {
    name: "View All Accomplishments on Coursera",
    issuer: "LinkedIn Profile",
    href: "https://www.coursera.org/user/c25a23c24571996a807034d14d0f84c6", 
  },
];