import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, ChevronRight, ChevronLeft, Bot, CheckCircle, Star } from "lucide-react";

const questions = [
  // Personal Details
  { id: 1, section: "Personal Details", type: "text", question: "What is your city of residence?", placeholder: "e.g., Bangalore, Delhi, Mumbai" },
  { id: 2, section: "Personal Details", type: "select", question: "What is your gender?", options: ["Male", "Female", "Non-binary", "Prefer not to say"] },
  { id: 3, section: "Personal Details", type: "select", question: "What is your preferred learning language?", options: ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Bengali"] },
  // Technical Knowledge
  { id: 4, section: "Technical Knowledge", type: "slider-group", question: "Rate your programming skills", subItems: ["Python", "Java", "C/C++", "JavaScript", "SQL"] },
  { id: 5, section: "Technical Knowledge", type: "slider-group", question: "Rate your web & mobile skills", subItems: ["HTML/CSS", "React", "Node.js", "Android", "Flutter"] },
  { id: 6, section: "Technical Knowledge", type: "slider-group", question: "Rate your core CS subjects", subItems: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Networking"] },
  { id: 7, section: "Technical Knowledge", type: "slider-group", question: "Rate your emerging tech skills", subItems: ["AI/ML", "Cloud Computing", "Cyber Security", "Git", "Linux"] },
  // Academic Performance
  { id: 8, section: "Academic Performance", type: "select", question: "What is your current CGPA range?", options: ["< 6.0", "6.0 - 7.0", "7.0 - 8.0", "8.0 - 9.0", "9.0 - 10.0"] },
  { id: 9, section: "Academic Performance", type: "multiselect", question: "Which are your favorite subjects?", options: ["Mathematics", "Physics", "Programming", "Electronics", "DBMS", "Networking", "AI/ML", "Web Dev"] },
  { id: 10, section: "Academic Performance", type: "select", question: "How would you rate your class attendance?", options: ["< 60%", "60-75%", "75-85%", "85-95%", "100%"] },
  { id: 11, section: "Academic Performance", type: "select", question: "Have you participated in hackathons?", options: ["Never", "1-2 times", "3-5 times", "5+ times"] },
  // Certifications
  { id: 12, section: "Certifications", type: "multiselect", question: "Which certifications do you have?", options: ["NPTEL", "Coursera", "Udemy", "AWS", "Google", "Microsoft", "None"] },
  // Project Details
  { id: 13, section: "Project Details", type: "select", question: "How many projects have you completed?", options: ["0", "1-2", "3-5", "5-10", "10+"] },
  { id: 14, section: "Project Details", type: "multiselect", question: "What technologies have you used in projects?", options: ["Python", "React", "Node.js", "Machine Learning", "IoT", "Android", "Cloud", "Arduino", "Django"] },
  { id: 15, section: "Project Details", type: "select", question: "What is the complexity of your best project?", options: ["Beginner (tutorial-based)", "Intermediate (own ideas)", "Advanced (real-world problem)", "Research level"] },
  // Interests
  { id: 16, section: "Interests", type: "multiselect", question: "What activities do you most enjoy?", options: ["Problem Solving", "Design (UI/UX)", "Coding", "Teaching", "Research", "Mathematics", "Robotics", "Gaming"] },
  { id: 17, section: "Interests", type: "multiselect", question: "Which technical domains interest you most?", options: ["Web Development", "AI/ML", "Cyber Security", "App Development", "Cloud Computing", "Data Science", "Embedded Systems", "IoT"] },
  // Career Preferences
  { id: 18, section: "Career Preferences", type: "select", question: "What is your preferred work environment?", options: ["Remote", "Office", "Hybrid", "No preference"] },
  { id: 19, section: "Career Preferences", type: "select", question: "What type of organization do you prefer?", options: ["Startup", "MNC", "Government", "Research Institute", "Own Startup"] },
  { id: 20, section: "Career Preferences", type: "select", question: "What are your salary expectations (3 years)?", options: ["< 5 LPA", "5-10 LPA", "10-20 LPA", "20-40 LPA", "40+ LPA"] },
  { id: 21, section: "Career Preferences", type: "select", question: "Are you interested in higher education / Masters?", options: ["Yes, definitely", "Maybe after work experience", "No, I want to work directly", "Planning to go abroad"] },
  // Personality
  { id: 22, section: "Personality", type: "slider-group", question: "Rate your leadership & communication skills", subItems: ["Leadership", "Communication", "Teamwork", "Confidence"] },
  { id: 23, section: "Personality", type: "slider-group", question: "Rate your cognitive abilities", subItems: ["Logical Thinking", "Creativity", "Decision Making", "Learning Speed"] },
  { id: 24, section: "Personality", type: "select", question: "How do you approach a new problem?", options: ["Research extensively first", "Dive in and figure it out", "Ask for help immediately", "Break it into smaller parts", "Look for similar solutions"] },
  { id: 25, section: "Personality", type: "select", question: "What motivates you the most?", options: ["Building things people use", "Solving complex problems", "Making money", "Making an impact", "Learning continuously", "Recognition & status"] },
];

const sectionColors: Record<string, string> = {
  "Personal Details": "#5B5CEB",
  "Technical Knowledge": "#7C4DFF",
  "Academic Performance": "#00D4FF",
  "Certifications": "#22C55E",
  "Project Details": "#F59E0B",
  "Interests": "#EC4899",
  "Career Preferences": "#5B5CEB",
  "Personality": "#7C4DFF",
};

export function AIAssessment() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({});

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const sectionColor = sectionColors[q.section] || "#5B5CEB";

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(c => c + 1);
    else navigate("/ai-analysis");
  };

  const handleSelect = (val: string) => setAnswers(a => ({ ...a, [q.id]: val }));
  const handleMulti = (val: string) => {
    const cur = answers[q.id] as string[] || [];
    setAnswers(a => ({ ...a, [q.id]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] }));
  };
  const handleSlider = (key: string, val: number) => setSliderValues(s => ({ ...s, [key]: val }));

  const sections = [...new Set(questions.map(q => q.section))];
  const currentSectionIdx = sections.indexOf(q.section);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #F7F9FC 0%, #EEF2FF 100%)", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${sectionColor}, #7C4DFF)` }}>
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{q.section}</p>
                <p className="text-sm font-semibold text-foreground">Question {current + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold" style={{ fontFamily: "Outfit, sans-serif", color: sectionColor }}>{Math.round(progress)}%</span>
              <p className="text-xs text-muted-foreground">complete</p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="h-2 rounded-full transition-all"
              style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${sectionColor}, #7C4DFF)` }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          {/* Section pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {sections.map((sec, i) => (
              <span key={sec} className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0 ${i <= currentSectionIdx ? "text-white" : "text-muted-foreground bg-muted"}`}
                style={i <= currentSectionIdx ? { background: sectionColors[sec] || "#5B5CEB" } : {}}>
                {i < currentSectionIdx ? "✓ " : ""}{sec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* AI Avatar */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, ${sectionColor}, #7C4DFF)` }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-3" style={{ background: `${sectionColor}18`, color: sectionColor }}>
                {q.section}
              </div>
              <h2 className="text-2xl font-bold text-foreground leading-snug" style={{ fontFamily: "Poppins, sans-serif" }}>
                {q.question}
              </h2>
            </div>
          </div>

          {/* Answer area */}
          <div className="bg-white rounded-2xl border border-border shadow-lg p-6">
            {/* Text input */}
            {q.type === "text" && (
              <input
                className="w-full text-lg border-0 outline-none text-foreground bg-transparent placeholder-muted-foreground"
                placeholder={q.placeholder}
                value={answers[q.id] as string || ""}
                onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
              />
            )}

            {/* Single select */}
            {q.type === "select" && (
              <div className="grid grid-cols-1 gap-3">
                {q.options?.map(opt => {
                  const selected = answers[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all font-medium ${selected ? "text-white border-transparent shadow-md" : "border-border text-foreground hover:border-primary/40"}`}
                      style={selected ? { background: `linear-gradient(135deg, ${sectionColor}, #7C4DFF)`, boxShadow: `0 4px 15px ${sectionColor}30` } : {}}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected ? "border-white" : "border-muted-foreground"}`}>
                        {selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </div>
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Multi select */}
            {q.type === "multiselect" && (
              <div className="flex flex-wrap gap-2">
                {q.options?.map(opt => {
                  const selected = (answers[q.id] as string[] || []).includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => handleMulti(opt)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${selected ? "text-white border-transparent" : "border-border text-foreground hover:border-primary/40"}`}
                      style={selected ? { background: `linear-gradient(135deg, ${sectionColor}, #7C4DFF)` } : {}}
                    >
                      {selected && <CheckCircle className="w-3.5 h-3.5" />}
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Slider group */}
            {q.type === "slider-group" && (
              <div className="space-y-5">
                {q.subItems?.map(item => {
                  const key = `${q.id}-${item}`;
                  const val = sliderValues[key] || 0;
                  const labels = ["Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];
                  return (
                    <div key={item}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-foreground">{item}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${sectionColor}15`, color: sectionColor }}>
                          {labels[Math.floor(val / 25)]}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="h-3 rounded-full transition-all" style={{ width: `${val}%`, background: `linear-gradient(90deg, ${sectionColor}, #7C4DFF)` }} />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={val}
                          onChange={e => handleSlider(key, parseInt(e.target.value))}
                          className="absolute inset-0 w-full opacity-0 cursor-pointer h-3"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        {labels.map(l => <span key={l}>{l}</span>)}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white transition-all disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <div className="flex gap-1">
              {questions.slice(Math.max(0, current - 2), Math.min(questions.length, current + 3)).map((_, i) => {
                const idx = Math.max(0, current - 2) + i;
                return <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === current ? "w-6" : "bg-muted"}`} style={idx === current ? { background: sectionColor } : {}} />;
              })}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: `linear-gradient(135deg, ${sectionColor}, #7C4DFF)`, boxShadow: `0 4px 15px ${sectionColor}30` }}
            >
              {current < questions.length - 1 ? (
                <>Next <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>Submit & Analyze <Star className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
