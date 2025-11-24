const express = require('express');
const app = express();

app.use(express.json());

// In-memory data
const about = {
  name: "Naisha Srivastava",
  major: "Computer Science",
  interests: [
    "AR/VR",
    "Human-Centered Computing",
    "Robotics",
    "UI/UX Design",
    "NLP + Social Interaction"
  ],
  funFact: "I built AR games at the UT AR Lab and I love pandas."
};

let projects = [
  {
    id: 1,
    title: "Sustainable DFW Map",
    description: "Website showing sustainability ratings for restaurants and shops in Dallas Fort Worth.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "AR 3D UI Mini Game",
    description: "Unity-based AR interaction prototype built for UT’s AR workshop.",
    tech: ["Unity", "C#", "Vuforia"],
  },
  {
    id: 3,
    title: "Financial Literacy Research Tool",
    description: "AP Capstone project exploring teen decision-making and social media influence.",
    tech: ["Python", "thinkorswim"]
  }
];

// ---------- ROUTES ----------

// GET /api/about
app.get("/api/about", (req, res) => {
  res.json(about);
});

// GET /api/projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// POST /api/projects
app.post("/api/projects", (req, res) => {
  const { title, description, tech } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "title and description are required" });
  }

  const newProject = {
    id: projects.length + 1,
    title,
    description,
    tech: tech || []
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});


// GET /api/semester-status
app.get("/api/semester-status", (req, res) => {
  const vibes = [
    "Surviving but barely",
    "Powered by iced coffee",
    "Everything is due at once help",
    "Actually thriving today???",
    "Touching grass more often",
    "Prelims stole my soul"
  ];

  const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

  res.json({
    status: randomVibe,
    timestamp: new Date().toISOString()
  });
});

// GET /api/favorites
app.get("/api/favorites", (req, res) => {
  res.json({
    songs: [
      "Why – Sabrina Carpenter",
      "bet u wanna – Sabrina Carpenter",
      "Seoul City – Jennie",
    ],
    drinks: [
      "Iced Tea",
      "Lychee Black Tea",
      "Coffee"
    ],
    shows: [
      "Business Proposal",
      "Brooklyn 99",
      "Love Scout",
    ]
  });
});

// ---------- START SERVER ----------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
