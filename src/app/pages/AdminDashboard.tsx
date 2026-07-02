import { motion } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from "recharts";
import { Users, BookOpen, TrendingUp, Award, Brain, Server, Database, Shield, Zap, Code, Cloud, Activity, ChevronRight, ArrowUpRight } from "lucide-react";

const statsCards = [
  { icon: Users, label: "Total Students", value: "52,840", change: "+2,340", color: "#5B5CEB" },
  { icon: BookOpen, label: "Courses Active", value: "248", change: "+12", color: "#7C4DFF" },
  { icon: Award, label: "Certificates Issued", value: "12,480", change: "+890", color: "#22C55E" },
  { icon: TrendingUp, label: "Avg Completion", value: "68%", change: "+4.2%", color: "#00D4FF" },
];

const careerStats = [
  { career: "AI Engineer", count: 18420, pct: 35, color: "#5B5CEB" },
  { career: "Full Stack Dev", count: 14300, pct: 27, color: "#7C4DFF" },
  { career: "Cloud Engineer", count: 10560, pct: 20, color: "#00D4FF" },
  { career: "Data Scientist", count: 7400, pct: 14, color: "#22C55E" },
  { career: "Cyber Security", count: 2160, pct: 4, color: "#EF4444" },
];

const weeklyEnrollments = [
  { week: "W1", students: 1200 }, { week: "W2", students: 1850 },
  { week: "W3", students: 1400 }, { week: "W4", students: 2200 },
  { week: "W5", students: 1980 }, { week: "W6", students: 2800 },
  { week: "W7", students: 3100 }, { week: "W8", students: 2650 },
];

const popularSkills = [
  { skill: "Python", count: 38200 }, { skill: "React", count: 29400 },
  { skill: "ML/AI", count: 24800 }, { skill: "AWS", count: 18600 },
  { skill: "Docker", count: 15200 }, { skill: "Node.js", count: 14800 },
];

const architectureComponents = [
  { icon: Code, name: "React Frontend", desc: "Vite + TypeScript + Tailwind CSS", color: "#61DAFB", status: "healthy" },
  { icon: Server, name: "Spring Boot REST API", desc: "Java 17 • REST + GraphQL endpoints", color: "#6DB33F", status: "healthy" },
  { icon: Shield, name: "JWT Authentication", desc: "RS256 tokens • Refresh token rotation", color: "#F59E0B", status: "healthy" },
  { icon: Database, name: "MySQL Database", desc: "8.0 • 52,840 student records", color: "#00758F", status: "healthy" },
  { icon: Brain, name: "AI Assessment Engine", desc: "25-question NLP analysis pipeline", color: "#5B5CEB", status: "healthy" },
  { icon: Users, name: "Profile Analysis Engine", desc: "Skill gap + strength vector extraction", color: "#7C4DFF", status: "healthy" },
  { icon: Zap, name: "Career Recommendation Engine", desc: "Rule-based + cosine similarity matching", color: "#EF4444", status: "healthy" },
  { icon: TrendingUp, name: "Skill Gap Analysis Engine", desc: "Current vs target skill delta computation", color: "#22C55E", status: "healthy" },
  { icon: Cloud, name: "Learning Path Generator", desc: "Semester-aware roadmap synthesis", color: "#00D4FF", status: "healthy" },
  { icon: BookOpen, name: "Course Recommendation Engine", desc: "Collaborative filtering + content-based", color: "#F59E0B", status: "healthy" },
  { icon: Activity, name: "Progress Monitoring Service", desc: "XP calculation + streak tracking", color: "#EC4899", status: "healthy" },
  { icon: Award, name: "Analytics Dashboard", desc: "Admin insights + BI reporting layer", color: "#8B5CF6", status: "healthy" },
];

const recentActivity = [
  { student: "Priya Sharma", action: "Completed Python Fundamentals", time: "2 mins ago", avatar: "PS" },
  { student: "Rahul Mehta", action: "Earned Code Warrior badge", time: "15 mins ago", avatar: "RM" },
  { student: "Ananya Nair", action: "Selected AI Engineer career path", time: "32 mins ago", avatar: "AN" },
  { student: "Dev Patel", action: "Finished AI Assessment", time: "1 hr ago", avatar: "DP" },
  { student: "Shreya Rao", action: "Downloaded React certificate", time: "2 hrs ago", avatar: "SR" },
];

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-5 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">AI Career Mentor — Platform Analytics</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {statsCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-border p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${card.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                    <ArrowUpRight className="w-3 h-3" />{card.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{card.value}</p>
                <p className="text-sm text-muted-foreground">{card.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Weekly Enrollments */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Weekly Enrollments</h3>
                <p className="text-xs text-muted-foreground">New students per week</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={weeklyEnrollments}>
                <defs>
                  <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B5CEB" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#5B5CEB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Area type="monotone" dataKey="students" stroke="#5B5CEB" fill="url(#enrollGrad)" strokeWidth={2.5} dot={{ r: 4, fill: "#5B5CEB" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Career Distribution */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Most Selected Careers</h3>
            <div className="space-y-3">
              {careerStats.map(c => (
                <div key={c.career}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-foreground">{c.career}</span>
                    <span style={{ color: c.color, fontFamily: "Outfit, sans-serif" }} className="font-bold">{c.pct}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${c.pct}%` }}
                      transition={{ duration: 1, delay: 0.1 }}
                      style={{ background: c.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Skills + Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Popular Skills */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Popular Skills</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={popularSkills} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="skill" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={60} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Bar dataKey="count" fill="#5B5CEB" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((act) => (
                <div key={act.student} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
                    {act.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{act.student}</p>
                    <p className="text-xs text-muted-foreground truncate">{act.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Architecture */}
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Server className="w-5 h-5" style={{ color: "#5B5CEB" }} />
            <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Backend Architecture</h3>
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: "#22C55E" }}>12 Services</span>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {architectureComponents.map((comp) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={comp.name}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-4 rounded-xl border border-border hover:shadow-md transition-all cursor-pointer group"
                  style={{ background: `${comp.color}06`, borderColor: `${comp.color}25` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${comp.color}18` }}>
                      <Icon className="w-4 h-4" style={{ color: comp.color }} />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-1" title="Operational" />
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight mb-1">{comp.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{comp.desc}</p>
                  <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium" style={{ color: comp.color }}>View Logs</span>
                    <ChevronRight className="w-3 h-3" style={{ color: comp.color }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
