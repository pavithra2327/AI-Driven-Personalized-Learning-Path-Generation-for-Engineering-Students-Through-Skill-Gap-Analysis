import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Star, TrendingUp, DollarSign, Clock, Zap, Trophy, Brain, Code, Cloud, ChevronRight, Sparkles } from "lucide-react";

const careers = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    score: 96,
    emoji: "🤖",
    color: "#5B5CEB",
    bg: "linear-gradient(135deg, rgba(91,92,235,0.12), rgba(124,77,255,0.08))",
    border: "rgba(91,92,235,0.3)",
    icon: Brain,
    why: "Your strong Python skills, ML interest, and high logical thinking score make you a perfect fit for AI/ML engineering.",
    strengths: ["Strong Python & Math", "High Logical Thinking", "Problem-Solving Aptitude", "Research Mindset"],
    weaknesses: ["Deep Learning experience", "Cloud deployment skills"],
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Data Analysis", "Statistics"],
    salary: "₹12-40 LPA",
    demand: "Very High",
    growth: "45% by 2030",
    duration: "18-24 months",
    difficulty: "Advanced",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    score: 93,
    emoji: "💻",
    color: "#7C4DFF",
    bg: "linear-gradient(135deg, rgba(124,77,255,0.12), rgba(91,92,235,0.08))",
    border: "rgba(124,77,255,0.3)",
    icon: Code,
    why: "Your HTML/CSS, JavaScript knowledge and web development interest perfectly align with full-stack development.",
    strengths: ["Web Technologies", "UI/UX Sensitivity", "JavaScript Foundations", "Team Collaboration"],
    weaknesses: ["Backend architecture", "Database optimization"],
    skills: ["React", "Node.js", "TypeScript", "SQL", "REST APIs", "Docker"],
    salary: "₹8-30 LPA",
    demand: "High",
    growth: "30% by 2030",
    duration: "12-18 months",
    difficulty: "Intermediate",
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    score: 91,
    emoji: "☁️",
    color: "#00D4FF",
    bg: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(91,92,235,0.08))",
    border: "rgba(0,212,255,0.3)",
    icon: Cloud,
    why: "Your networking knowledge and interest in cloud platforms, combined with your analytical mindset, make cloud engineering ideal.",
    strengths: ["Networking Fundamentals", "Analytical Mindset", "System Thinking", "Quick Learner"],
    weaknesses: ["Cloud certifications", "Infrastructure-as-Code"],
    skills: ["AWS/GCP/Azure", "Kubernetes", "Terraform", "CI/CD", "Linux", "Networking"],
    salary: "₹10-35 LPA",
    demand: "Very High",
    growth: "40% by 2030",
    duration: "15-20 months",
    difficulty: "Intermediate-Advanced",
  },
];

export function CareerConfirmation() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
  };

  if (confirmed) {
    const career = careers.find(c => c.id === selected)!;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: "linear-gradient(135deg, #F7F9FC, #EEF2FF)", fontFamily: "Inter, sans-serif" }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center max-w-md"
        >
          {/* Confetti-like circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{ background: [career.color, "#F59E0B", "#22C55E", "#EF4444"][i % 4], left: `${10 + i * 12}%`, top: `${5 + (i % 3) * 10}%` }}
              animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}

          <motion.div
            className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 shadow-2xl"
            style={{ background: career.bg, border: `2px solid ${career.border}` }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {career.emoji}
          </motion.div>

          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto -mt-4 mb-4 shadow-lg">
            <CheckCircle className="w-9 h-9 text-green-500" />
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Congratulations! 🎉
          </h1>
          <p className="text-xl text-muted-foreground mb-2">You selected</p>
          <h2 className="text-3xl font-bold mb-2" style={{ color: career.color, fontFamily: "Poppins, sans-serif" }}>{career.title}</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="text-2xl font-bold" style={{ fontFamily: "Outfit, sans-serif", color: career.color }}>{career.score}%</span>
            <span className="text-muted-foreground font-medium">AI Match Score</span>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your personalized learning roadmap is being generated. Your journey to becoming a <strong style={{ color: career.color }}>{career.title}</strong> starts now!
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ background: `linear-gradient(135deg, ${career.color}, #7C4DFF)`, boxShadow: `0 8px 30px ${career.color}40` }}
          >
            <Trophy className="w-5 h-5" />
            Generate Learning Path
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6" style={{ background: "linear-gradient(135deg, #F7F9FC, #EEF2FF)", fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border"
            style={{ background: "rgba(91,92,235,0.08)", borderColor: "rgba(91,92,235,0.2)", color: "#5B5CEB" }}>
            <Sparkles className="w-4 h-4" />
            AI Analysis Complete
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            We Found Your Best Career Matches
          </h1>
          <p className="text-lg text-muted-foreground">Based on your unique profile, our AI selected these top 3 careers. Choose one to begin your journey.</p>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {careers.map((career, rank) => {
            const Icon = career.icon;
            const isSelected = selected === career.id;
            const isExpanded = expanded === career.id;
            return (
              <motion.div
                key={career.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(career.id)}
                className="relative rounded-2xl border-2 cursor-pointer transition-all overflow-hidden"
                style={{
                  background: career.bg,
                  borderColor: isSelected ? career.color : "rgba(0,0,0,0.08)",
                  boxShadow: isSelected ? `0 8px 30px ${career.color}30` : "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                {rank === 0 && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold text-white" style={{ background: career.color }}>
                    🏆 Best Match
                  </div>
                )}

                {isSelected && (
                  <div className="absolute top-4 left-4">
                    <CheckCircle className="w-6 h-6" style={{ color: career.color }} />
                  </div>
                )}

                <div className="p-6">
                  <div className="text-5xl mb-4">{career.emoji}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{career.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold" style={{ fontFamily: "Outfit, sans-serif", color: career.color }}>{career.score}%</span>
                    <span className="text-sm text-muted-foreground">AI Match</span>
                  </div>

                  <div className="w-full bg-white/60 rounded-full h-2.5 mb-4">
                    <div className="h-2.5 rounded-full" style={{ width: `${career.score}%`, background: `linear-gradient(90deg, ${career.color}, #7C4DFF)` }} />
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{career.why}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="flex items-center gap-1 mb-1"><DollarSign className="w-3 h-3" style={{ color: career.color }} /><span className="text-xs text-muted-foreground">Salary</span></div>
                      <p className="text-sm font-bold text-foreground">{career.salary}</p>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="flex items-center gap-1 mb-1"><TrendingUp className="w-3 h-3 text-green-500" /><span className="text-xs text-muted-foreground">Growth</span></div>
                      <p className="text-sm font-bold text-green-600">{career.growth}</p>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="flex items-center gap-1 mb-1"><Clock className="w-3 h-3 text-blue-500" /><span className="text-xs text-muted-foreground">Duration</span></div>
                      <p className="text-sm font-bold text-foreground">{career.duration}</p>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3">
                      <div className="flex items-center gap-1 mb-1"><Zap className="w-3 h-3 text-orange-500" /><span className="text-xs text-muted-foreground">Demand</span></div>
                      <p className="text-sm font-bold text-orange-600">{career.demand}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {career.skills.map(skill => (
                      <span key={skill} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${career.color}18`, color: career.color }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); setExpanded(isExpanded ? null : career.id); }}
                    className="flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: career.color }}
                  >
                    {isExpanded ? "Hide" : "View"} Details <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">✅ Your Strengths</p>
                        {career.strengths.map(s => <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground py-0.5"><CheckCircle className="w-3 h-3 text-green-500" />{s}</div>)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">⚡ Areas to Develop</p>
                        {career.weaknesses.map(w => <div key={w} className="flex items-center gap-2 text-xs text-muted-foreground py-0.5"><Zap className="w-3 h-3 text-orange-400" />{w}</div>)}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Confirm Button */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">You can only choose one career path. This can be changed later from your profile.</p>
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: selected ? `linear-gradient(135deg, ${careers.find(c => c.id === selected)?.color}, #7C4DFF)` : "#94a3b8", boxShadow: selected ? "0 8px 30px rgba(91,92,235,0.3)" : "none" }}
          >
            <Trophy className="w-5 h-5" />
            {selected ? `Choose ${careers.find(c => c.id === selected)?.title}` : "Select a Career"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
