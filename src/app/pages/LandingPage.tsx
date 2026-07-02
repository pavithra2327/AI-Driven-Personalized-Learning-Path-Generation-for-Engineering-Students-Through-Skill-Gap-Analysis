import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Target,
  Zap,
  Star,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Bot,
  Code,
  Cloud,
  Shield,
  Database,
  Cpu,
  BarChart3,
  GraduationCap,
  BookOpen,
  Rocket,
  Play,
  Flame
} from "lucide-react";

const careerDomains = [
  { icon: Brain, title: "AI & Machine Learning", color: "#5B5CEB", bg: "rgba(91,92,235,0.1)", match: "96%" },
  { icon: Code, title: "Full Stack Development", color: "#7C4DFF", bg: "rgba(124,77,255,0.1)", match: "93%" },
  { icon: Cloud, title: "Cloud Engineering", color: "#00D4FF", bg: "rgba(0,212,255,0.1)", match: "91%" },
  { icon: Shield, title: "Cybersecurity", color: "#EF4444", bg: "rgba(239,68,68,0.1)", match: "88%" },
  { icon: Database, title: "Data Science", color: "#22C55E", bg: "rgba(34,197,94,0.1)", match: "85%" },
  { icon: Cpu, title: "Embedded Systems", color: "#F59E0B", bg: "rgba(245,158,11,0.1)", match: "82%" },
];

const steps = [
  { step: "01", icon: BookOpen, title: "Register & Profile", desc: "Create your account with your academic background, projects, and skills." },
  { step: "02", icon: Brain, title: "AI Assessment", desc: "Complete our 25-question intelligent assessment covering technical skills, interests, and personality." },
  { step: "03", icon: Target, title: "Career Match", desc: "AI analyzes your profile and recommends your top 3 career paths with match scores." },
  { step: "04", icon: Rocket, title: "Personalized Roadmap", desc: "Get a custom semester-by-semester learning roadmap tailored to your chosen career." },
];

const testimonials = [
  { name: "Priya Sharma", year: "2nd Year, CSE", college: "NIT Trichy", text: "The AI matched me to Full Stack Development with 94% accuracy. The roadmap is exactly what I needed!", avatar: "PS", career: "Full Stack Developer" },
  { name: "Rahul Mehta", year: "1st Year, ECE", college: "BITS Pilani", text: "Never knew I had such an aptitude for AI/ML. The assessment revealed strengths I didn't know I had.", avatar: "RM", career: "AI Engineer" },
  { name: "Ananya Nair", year: "2nd Year, IT", college: "VIT Vellore", text: "The AI Mentor helped me prep for my first internship interview. Got placed at Amazon!", avatar: "AN", career: "Cloud Engineer" },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Students Enrolled", color: "#5B5CEB" },
  { icon: TrendingUp, value: "94%", label: "Career Match Accuracy", color: "#7C4DFF" },
  { icon: Award, value: "12,000+", label: "Certificates Issued", color: "#00D4FF" },
  { icon: BarChart3, value: "200+", label: "Learning Courses", color: "#22C55E" },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>AI Career Mentor</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#careers" className="hover:text-foreground transition-colors">Careers</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Success Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
            <Link
              to="/register"
              className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-xl transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F7F9FC 0%, #EEF2FF 50%, #F0FDFF 100%)" }}>
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, #5B5CEB, transparent)" }} />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{ background: "rgba(91,92,235,0.08)", borderColor: "rgba(91,92,235,0.2)", color: "#5B5CEB" }}>
              <Sparkles className="w-4 h-4" />
              Exclusively for 1st & 2nd Year Engineering Students
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              Discover Your Perfect
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #5B5CEB, #7C4DFF, #00D4FF)" }}>
                Engineering Career
              </span>
              <br />
              with AI
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Our AI analyzes your skills, interests, and personality to recommend the exact career path you were born for — then builds a personalized learning roadmap to get you there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)", boxShadow: "0 8px 30px rgba(91,92,235,0.35)" }}
              >
                <Zap className="w-5 h-5" />
                Take AI Assessment — Free
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 font-semibold px-8 py-4 rounded-2xl text-lg border-2 transition-all hover:bg-muted/50"
                style={{ borderColor: "rgba(91,92,235,0.3)", color: "#5B5CEB" }}
              >
                <Play className="w-5 h-5" />
                See How It Works
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="p-6 rounded-2xl bg-white border border-border shadow-lg shadow-primary/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${stat.color}18` }}>
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif", color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How AI Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#5B5CEB" }}>The Process</span>
            <h2 className="text-4xl font-bold mt-3 text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>How AI Mentor Works</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">From assessment to career clarity in under 30 minutes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)", boxShadow: "0 8px 20px rgba(91,92,235,0.25)" }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-widest text-muted-foreground mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  {i < 3 && <ChevronRight className="hidden md:block absolute top-8 -right-4 w-5 h-5 text-muted-foreground" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Domains */}
      <section id="careers" className="py-24 px-6" style={{ background: "linear-gradient(135deg, #F7F9FC, #EEF2FF)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#5B5CEB" }}>Career Paths</span>
            <h2 className="text-4xl font-bold mt-3 text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Engineering Career Domains</h2>
            <p className="text-lg text-muted-foreground mt-4">AI recommends the best fit based on your unique profile</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {careerDomains.map((career) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={career.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white border border-border shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: career.bg }}>
                      <Icon className="w-6 h-6" style={{ color: career.color }} />
                    </div>
                    <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: career.bg, color: career.color }}>
                      {career.match} Match
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{career.title}</h3>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: career.match, background: `linear-gradient(90deg, ${career.color}, ${career.color}99)` }} />
                  </div>
                  <div className="flex items-center gap-1 mt-3 text-sm" style={{ color: career.color }}>
                    <CheckCircle className="w-4 h-4" />
                    <span>High demand • Great salary growth</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#5B5CEB" }}>Success Stories</span>
            <h2 className="text-4xl font-bold mt-3 text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Students Who Found Their Path</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #F7F9FC, #EEF2FF)" }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-foreground/80 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.year} • {t.college}</p>
                  </div>
                  <span className="ml-auto text-xs font-medium px-2 py-1 rounded-full" style={{ background: "rgba(91,92,235,0.1)", color: "#5B5CEB" }}>{t.career}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-white/20">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Ready to Discover Your Career?
          </h2>
          <p className="text-xl opacity-80 mb-10">Join 50,000+ engineering students who found their dream career with AI Career Mentor.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:scale-105"
              style={{ color: "#5B5CEB" }}
            >
              <Bot className="w-5 h-5" />
              Start Free AI Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 text-white/80 font-medium px-6 py-4 hover:text-white transition-colors">
              Already have an account? Sign in
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/60 text-sm">
            <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> Free forever for students</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> No credit card needed</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-white/50 text-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>AI Career Mentor</span>
        </div>
        <p>© 2025 AI Career Mentor. Built for engineering students who dream big.</p>
      </footer>
    </div>
  );
}
