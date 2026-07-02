import { useState } from "react";
import { motion } from "motion/react";
import { Star, TrendingUp, DollarSign, Clock, Zap, CheckCircle, ChevronDown, ChevronUp, Brain, Code, Cloud, Shield, Database, Cpu, BarChart3, Globe, Target } from "lucide-react";

const careers = [
  {
    id: "ai-engineer",
    icon: Brain,
    emoji: "🤖",
    title: "AI Engineer",
    score: 96,
    color: "#5B5CEB",
    selected: true,
    why: "Your strong Python skills, ML interest, and high logical thinking score make you a perfect fit for AI/ML engineering.",
    strengths: ["Python & Mathematics", "Logical Thinking (9/10)", "Problem-Solving Aptitude", "Research Mindset"],
    weaknesses: ["Deep Learning (needs work)", "Cloud deployment skills"],
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Data Analysis", "Statistics", "Linear Algebra"],
    salary: "₹12-40 LPA",
    entrySalary: "₹8-15 LPA",
    demand: "Very High",
    growth: "45% by 2030",
    duration: "18-24 months",
    difficulty: "Advanced",
    jobs: ["ML Engineer", "AI Researcher", "Data Scientist", "NLP Engineer", "Computer Vision Engineer"],
    companies: ["Google", "Microsoft", "Amazon", "DeepMind", "OpenAI", "NVIDIA"],
    roadmap: ["Python Mastery", "ML Fundamentals", "Deep Learning", "MLOps", "Specialization"],
  },
  {
    id: "fullstack",
    icon: Code,
    emoji: "💻",
    title: "Full Stack Developer",
    score: 93,
    color: "#7C4DFF",
    selected: false,
    why: "Your HTML/CSS, JavaScript knowledge and web development interest perfectly align with full-stack development.",
    strengths: ["Web Technologies", "UI/UX Sensitivity", "JavaScript Foundations", "Team Collaboration"],
    weaknesses: ["Backend architecture", "Database optimization"],
    skills: ["React", "Node.js", "TypeScript", "SQL", "REST APIs", "Docker", "Git"],
    salary: "₹8-30 LPA",
    entrySalary: "₹5-10 LPA",
    demand: "High",
    growth: "30% by 2030",
    duration: "12-18 months",
    difficulty: "Intermediate",
    jobs: ["Frontend Dev", "Backend Dev", "Full Stack Dev", "Web Developer", "React Developer"],
    companies: ["Swiggy", "Zomato", "Flipkart", "Paytm", "Razorpay", "Startup ecosystem"],
    roadmap: ["HTML/CSS/JS", "React", "Node.js", "Databases", "Deployment"],
  },
  {
    id: "cloud-engineer",
    icon: Cloud,
    emoji: "☁️",
    title: "Cloud Engineer",
    score: 91,
    color: "#00D4FF",
    selected: false,
    why: "Your networking knowledge and interest in cloud platforms, combined with your analytical mindset, make cloud engineering ideal.",
    strengths: ["Networking Fundamentals", "Analytical Mindset", "System Thinking", "Quick Learner"],
    weaknesses: ["Cloud certifications", "Infrastructure-as-Code experience"],
    skills: ["AWS/GCP/Azure", "Kubernetes", "Terraform", "CI/CD", "Linux", "Networking"],
    salary: "₹10-35 LPA",
    entrySalary: "₹7-12 LPA",
    demand: "Very High",
    growth: "40% by 2030",
    duration: "15-20 months",
    difficulty: "Intermediate-Advanced",
    jobs: ["Cloud Architect", "DevOps Engineer", "SRE", "Platform Engineer", "Cloud Consultant"],
    companies: ["AWS", "Google Cloud", "Azure", "Infosys", "TCS", "Wipro"],
    roadmap: ["Linux & Networking", "AWS Fundamentals", "Containerization", "IaC", "Certifications"],
  },
  {
    id: "data-scientist",
    icon: BarChart3,
    emoji: "📊",
    title: "Data Scientist",
    score: 87,
    color: "#22C55E",
    selected: false,
    why: "Your mathematics strength and interest in data analysis make data science a natural fit.",
    strengths: ["Statistics & Mathematics", "Data Curiosity", "Python Knowledge", "Analytical Thinking"],
    weaknesses: ["Business domain knowledge", "Data storytelling"],
    skills: ["Python", "SQL", "Pandas", "Scikit-learn", "Tableau", "Statistics", "R"],
    salary: "₹8-30 LPA",
    entrySalary: "₹6-12 LPA",
    demand: "High",
    growth: "35% by 2030",
    duration: "12-18 months",
    difficulty: "Intermediate",
    jobs: ["Data Analyst", "Data Scientist", "Business Analyst", "ML Analyst", "Research Analyst"],
    companies: ["Netflix", "Uber", "LinkedIn", "MuSigma", "Fractal", "Tiger Analytics"],
    roadmap: ["Python & SQL", "Statistics", "EDA & Visualization", "ML Models", "Big Data"],
  },
  {
    id: "cyber-security",
    icon: Shield,
    emoji: "🛡️",
    title: "Cyber Security Engineer",
    score: 82,
    color: "#EF4444",
    selected: false,
    why: "Your interest in networking and security, combined with your analytical mindset, shows cybersecurity potential.",
    strengths: ["Networking Knowledge", "Attention to Detail", "Analytical Skills"],
    weaknesses: ["Ethical hacking experience", "Security certifications"],
    skills: ["Networking", "Linux", "Python", "Penetration Testing", "SIEM", "Incident Response"],
    salary: "₹8-35 LPA",
    entrySalary: "₹6-10 LPA",
    demand: "Very High",
    growth: "50% by 2030",
    duration: "15-24 months",
    difficulty: "Advanced",
    jobs: ["Security Analyst", "Ethical Hacker", "SOC Analyst", "Security Engineer", "CISO"],
    companies: ["IBM Security", "Palo Alto", "CrowdStrike", "Banks", "Government agencies"],
    roadmap: ["Networking Fundamentals", "Linux Security", "Ethical Hacking", "SIEM Tools", "Certifications"],
  },
];

function MatchBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-muted rounded-full h-2">
        <motion.div
          className="h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
      <span className="text-sm font-bold w-10 text-right" style={{ fontFamily: "Outfit, sans-serif", color }}>{score}%</span>
    </div>
  );
}

export function CareerRecommendation() {
  const [expanded, setExpanded] = useState<string | null>("ai-engineer");
  const [compareMode, setCompareMode] = useState(false);

  return (
    <div className="p-6 space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Career Recommendations</h1>
          <p className="text-muted-foreground mt-1">AI-matched careers based on your assessment profile</p>
        </div>
        <button
          onClick={() => setCompareMode(c => !c)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all"
          style={compareMode ? { borderColor: "#5B5CEB", color: "#5B5CEB", background: "rgba(91,92,235,0.08)" } : { borderColor: "#e2e8f0", color: "#64748b" }}
        >
          <Target className="w-4 h-4" />
          {compareMode ? "Exit Compare" : "Compare Careers"}
        </button>
      </div>

      {/* Current Selected Banner */}
      <div className="rounded-2xl p-5 border-2 flex items-center gap-5" style={{ background: "linear-gradient(135deg, rgba(91,92,235,0.08), rgba(124,77,255,0.08))", borderColor: "rgba(91,92,235,0.3)" }}>
        <div className="text-4xl">🤖</div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Your Chosen Career Path</p>
          <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>AI Engineer</h2>
          <p className="text-sm text-muted-foreground">AI Match Score: <strong style={{ color: "#5B5CEB", fontFamily: "Outfit, sans-serif" }}>96%</strong></p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "#5B5CEB", color: "white" }}>
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-semibold">Active</span>
        </div>
      </div>

      {/* Career Cards */}
      <div className="space-y-4">
        {careers.map((career, rank) => {
          const Icon = career.icon;
          const isExpanded = expanded === career.id;
          return (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rank * 0.05 }}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              style={career.selected ? { borderColor: `${career.color}50`, boxShadow: `0 4px 20px ${career.color}15` } : {}}
            >
              {/* Card Header */}
              <button
                className="w-full p-5 flex items-center gap-4 hover:bg-muted/30 transition-all text-left"
                onClick={() => setExpanded(isExpanded ? null : career.id)}
              >
                <div className="text-3xl">{career.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>{career.title}</h3>
                    {career.selected && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold text-white" style={{ background: career.color }}>Your Choice</span>
                    )}
                    {rank === 0 && !career.selected && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${career.color}15`, color: career.color }}>🏆 Top Match</span>
                    )}
                  </div>
                  <MatchBar score={career.score} color={career.color} />
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="text-center">
                    <p className="font-bold text-foreground text-base" style={{ fontFamily: "Outfit, sans-serif" }}>{career.salary}</p>
                    <p className="text-xs">Avg Salary</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-green-600 text-base">{career.growth}</p>
                    <p className="text-xs">Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-foreground">{career.demand}</p>
                    <p className="text-xs">Demand</p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 border-t border-border">
                  <div className="grid md:grid-cols-3 gap-6 mt-5">
                    {/* Left: Why & Strengths */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">🎯 Why AI Selected This</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{career.why}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">✅ Your Strengths</h4>
                        <div className="space-y-1.5">
                          {career.strengths.map(s => (
                            <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">⚡ Areas to Develop</h4>
                        <div className="space-y-1.5">
                          {career.weaknesses.map(w => (
                            <div key={w} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />{w}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle: Skills & Stats */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">🛠 Required Skills</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {career.skills.map(skill => (
                            <span key={skill} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: `${career.color}12`, color: career.color }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: DollarSign, label: "Entry Salary", val: career.entrySalary, color: "#22C55E" },
                          { icon: TrendingUp, label: "Growth Rate", val: career.growth, color: "#5B5CEB" },
                          { icon: Clock, label: "Learn Duration", val: career.duration, color: "#7C4DFF" },
                          { icon: Star, label: "Difficulty", val: career.difficulty, color: "#F59E0B" },
                        ].map(stat => {
                          const Icon = stat.icon;
                          return (
                            <div key={stat.label} className="rounded-xl p-3" style={{ background: `${stat.color}08`, border: `1px solid ${stat.color}20` }}>
                              <div className="flex items-center gap-1 mb-1">
                                <Icon className="w-3 h-3" style={{ color: stat.color }} />
                                <span className="text-xs text-muted-foreground">{stat.label}</span>
                              </div>
                              <p className="text-sm font-bold text-foreground">{stat.val}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right: Jobs & Companies */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">💼 Job Roles</h4>
                        <div className="space-y-1.5">
                          {career.jobs.map(job => (
                            <div key={job} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: career.color }} />{job}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">🏢 Top Hiring Companies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {career.companies.map(c => (
                            <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{c}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">🗺 Learning Path</h4>
                        <div className="flex flex-col gap-1">
                          {career.roadmap.map((step, i) => (
                            <div key={step} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: career.color, fontSize: "10px" }}>{i + 1}</span>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
