import { Link, useNavigate } from "react-router";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles, ArrowRight, ArrowLeft, User, Mail, Phone, Lock, School, GraduationCap, Github, Linkedin, Globe, Upload, ChevronRight, CheckCircle } from "lucide-react";

const steps = [
  { label: "Personal Info", icon: User },
  { label: "Academic Details", icon: GraduationCap },
  { label: "Academic History", icon: School },
  { label: "Online Profiles", icon: Linkedin },
];

export function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", password: "", confirmPassword: "",
    collegeName: "", university: "", department: "", branch: "", currentYear: "", semester: "", cgpa: "",
    schoolName: "", tenth: "", twelfth: "", languages: "",
    linkedin: "", github: "", portfolio: "", resume: null as File | null,
  });

  const update = (field: string, value: string) => setFormData(p => ({ ...p, [field]: value }));

  const handleSubmit = () => navigate("/assessment");

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Left Panel */}
      <div className="hidden lg:flex w-[42%] flex-col justify-between p-12 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #5B5CEB 0%, #7C4DFF 50%, #00D4FF 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute rounded-full border border-white/30"
              style={{ width: `${80 + i * 40}px`, height: `${80 + i * 40}px`, top: `${10 + i * 7}%`, left: `${5 + i * 6}%` }} />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>AI Career Mentor</span>
          </div>

          <div className="space-y-2 mb-10">
            <div className="text-white/60 text-sm uppercase tracking-widest font-semibold">Your Journey Begins</div>
            <h1 className="text-4xl font-bold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              Find Your Perfect<br />Engineering Career
            </h1>
            <p className="text-white/70 text-lg mt-4">
              AI-powered guidance designed exclusively for 1st and 2nd year engineering students.
            </p>
          </div>

          <div className="space-y-4">
            {["AI-powered career matching", "Personalized learning roadmap", "Expert AI mentor support", "100% free for students"].map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold">AR</div>
            <div>
              <p className="font-semibold text-sm">Aryan Rao</p>
              <p className="text-white/60 text-xs">2nd Year, CSE • NIT Warangal</p>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">"The AI assessment showed I was perfect for ML Engineering. 3 months later I got an internship at a top AI startup!"</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-12 bg-background overflow-y-auto">
        <div className="max-w-lg w-full mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Create Your Account</h2>
            <p className="text-muted-foreground">After registration, you'll take an AI assessment to find your career match.</p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === step;
              const isDone = i < step;
              return (
                <div key={s.label} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${isActive ? "text-white shadow-lg" : isDone ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}
                    style={isActive ? { background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" } : {}}>
                    {isDone ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className={`text-xs font-medium hidden sm:block ${isActive ? "text-primary" : isDone ? "text-green-500" : "text-muted-foreground"}`}>{s.label}</span>
                  {i < 3 && <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto" />}
                </div>
              );
            })}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            {/* Step 0: Personal Info */}
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>Personal Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="Aryan Kumar" value={formData.fullName} onChange={e => update("fullName", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" type="email" placeholder="aryan@college.edu" value={formData.email} onChange={e => update("email", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="+91 98765 43210" value={formData.phone} onChange={e => update("phone", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" type="password" placeholder="Min. 8 characters" value={formData.password} onChange={e => update("password", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Confirm Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" type="password" placeholder="Repeat password" value={formData.confirmPassword} onChange={e => update("confirmPassword", e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Academic Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>Academic Details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">College Name *</Label>
                    <Input className="rounded-xl h-11" placeholder="NIT Trichy" value={formData.collegeName} onChange={e => update("collegeName", e.target.value)} />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">University *</Label>
                    <Input className="rounded-xl h-11" placeholder="Anna University" value={formData.university} onChange={e => update("university", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">Department *</Label>
                      <Select onValueChange={v => update("department", v)}>
                        <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cse">CSE</SelectItem>
                          <SelectItem value="ece">ECE</SelectItem>
                          <SelectItem value="eee">EEE</SelectItem>
                          <SelectItem value="mech">Mechanical</SelectItem>
                          <SelectItem value="civil">Civil</SelectItem>
                          <SelectItem value="it">IT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">Branch *</Label>
                      <Input className="rounded-xl h-11" placeholder="AI & DS" value={formData.branch} onChange={e => update("branch", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">Year *</Label>
                      <Select onValueChange={v => update("currentYear", v)}>
                        <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Year" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">Semester *</Label>
                      <Select onValueChange={v => update("semester", v)}>
                        <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Sem" /></SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4].map(s => <SelectItem key={s} value={String(s)}>Sem {s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">Current CGPA</Label>
                      <Input className="rounded-xl h-11" placeholder="8.5" value={formData.cgpa} onChange={e => update("cgpa", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Languages Known</Label>
                    <Input className="rounded-xl h-11" placeholder="English, Hindi, Tamil" value={formData.languages} onChange={e => update("languages", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic History */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>Academic History</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">School Name *</Label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="Delhi Public School" value={formData.schoolName} onChange={e => update("schoolName", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">10th Percentage *</Label>
                      <Input className="rounded-xl h-11" placeholder="92.5%" value={formData.tenth} onChange={e => update("tenth", e.target.value)} />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-1.5 block">12th Percentage *</Label>
                      <Input className="rounded-xl h-11" placeholder="88.0%" value={formData.twelfth} onChange={e => update("twelfth", e.target.value)} />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border-2 border-dashed border-border text-center cursor-pointer hover:border-primary/40 transition-colors" style={{ background: "rgba(91,92,235,0.03)" }}>
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Upload Resume (Optional)</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC up to 5MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Online Profiles */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>Online Profiles</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">LinkedIn *</Label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="linkedin.com/in/aryan-kumar" value={formData.linkedin} onChange={e => update("linkedin", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">GitHub (Optional)</Label>
                    <div className="relative">
                      <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="github.com/aryan-kumar" value={formData.github} onChange={e => update("github", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">Portfolio (Optional)</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10 rounded-xl h-11" placeholder="aryan-portfolio.vercel.app" value={formData.portfolio} onChange={e => update("portfolio", e.target.value)} />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border border-primary/20 mt-4" style={{ background: "linear-gradient(135deg, rgba(91,92,235,0.05), rgba(124,77,255,0.05))" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5" style={{ color: "#5B5CEB" }} />
                      <span className="font-semibold text-sm text-foreground">You're almost there!</span>
                    </div>
                    <p className="text-xs text-muted-foreground">After creating your account, you'll be taken to the AI Assessment — 25 questions that will help us find your perfect career match.</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(s => s + 1) : handleSubmit()}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}
            >
              {step < 3 ? (
                <>Continue <ArrowRight className="w-4 h-4" /></>
              ) : (
                <>Create Account & Start Assessment <Sparkles className="w-4 h-4" /></>
              )}
            </button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold" style={{ color: "#5B5CEB" }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
