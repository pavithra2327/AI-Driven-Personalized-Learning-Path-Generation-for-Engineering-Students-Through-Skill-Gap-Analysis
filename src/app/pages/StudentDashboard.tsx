import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from "recharts";
import {
  Zap, BookOpen, Trophy, Clock, TrendingUp, ArrowRight, Bot,
  Map, Flame, Star, CheckCircle, Target, Award, Code, Brain
} from "lucide-react";

const weeklyData = [
  { day: "Mon", hours: 2.5, xp: 80 },
  { day: "Tue", hours: 1.8, xp: 55 },
  { day: "Wed", hours: 3.2, xp: 110 },
  { day: "Thu", hours: 0.5, xp: 20 },
  { day: "Fri", hours: 2.8, xp: 95 },
  { day: "Sat", hours: 4.0, xp: 140 },
  { day: "Sun", hours: 1.2, xp: 40 },
];

const radarData = [
  { skill: "Python", value: 72 },
  { skill: "ML/AI", value: 58 },
  { skill: "Math", value: 80 },
  { skill: "DSA", value: 65 },
  { skill: "DBMS", value: 45 },
  { skill: "Cloud", value: 35 },
];

const upcomingTasks = [
  { title: "Complete NumPy Tutorial", due: "Today", priority: "high", module: "Python for ML" },
  { title: "Submit Mini Project — Linear Regression", due: "Tomorrow", priority: "high", module: "ML Fundamentals" },
  { title: "Watch: Neural Networks Intro", due: "Dec 28", priority: "medium", module: "Deep Learning" },
  { title: "Practice: 5 LeetCode Problems", due: "Dec 30", priority: "low", module: "DSA" },
];

const recentAchievements = [
  { icon: "⚡", name: "Speed Learner", xp: 150, color: "#F59E0B" },
  { icon: "💻", name: "Code Warrior", xp: 300, color: "#5B5CEB" },
  { icon: "🧠", name: "AI Explorer", xp: 125, color: "#7C4DFF" },
];

export function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #5B5CEB 0%, #7C4DFF 60%, #00D4FF 100%)" }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-white/70 text-sm mb-1">Welcome back 👋</p>
            <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>Aryan Kumar</h1>
            <p className="text-white/70">2nd Year • CSE • NIT Trichy</p>

            <div className="flex items-center gap-4 mt-5">
              <div className="bg-white/15 rounded-xl px-4 py-2.5">
                <p className="text-xs text-white/60 mb-0.5">Career Goal</p>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span className="font-bold text-sm">AI Engineer</span>
                </div>
              </div>
              <div className="bg-white/15 rounded-xl px-4 py-2.5">
                <p className="text-xs text-white/60 mb-0.5">AI Match</p>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  <span className="font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>96%</span>
                </div>
              </div>
              <div className="bg-white/15 rounded-xl px-4 py-2.5">
                <p className="text-xs text-white/60 mb-0.5">Streak</p>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span className="font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>12 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-xs text-white/60 mb-1">Overall Progress</p>
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 32}`} strokeDashoffset={`${2 * Math.PI * 32 * 0.62}`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>38%</span>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-1">Career Ready</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: "Completed Courses", value: "7", sub: "+2 this week", color: "#5B5CEB", bg: "rgba(91,92,235,0.1)" },
          { icon: Clock, label: "Learning Hours", value: "42.5h", sub: "16.0h this week", color: "#7C4DFF", bg: "rgba(124,77,255,0.1)" },
          { icon: Code, label: "Projects Done", value: "3", sub: "2 in progress", color: "#00D4FF", bg: "rgba(0,212,255,0.1)" },
          { icon: Trophy, label: "Certificates", value: "2", sub: "1 pending", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl border border-border p-5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: stat.bg }}>
                <Icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl font-bold text-foreground mb-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-xs mt-1 font-medium" style={{ color: stat.color }}>{stat.sub}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Weekly Progress */}
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Weekly Progress</h3>
              <p className="text-xs text-muted-foreground">Learning hours this week</p>
            </div>
            <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(91,92,235,0.1)", color: "#5B5CEB" }}>
              +12% vs last week
            </span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="hoursGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5CEB" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#5B5CEB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
              <Area type="monotone" dataKey="hours" stroke="#5B5CEB" fill="url(#hoursGrad)" strokeWidth={2.5} dot={{ r: 4, fill: "#5B5CEB", strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Radar */}
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Skill Radar</h3>
              <p className="text-xs text-muted-foreground">Current skill levels</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(0,0,0,0.08)" />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <Radar name="Skills" dataKey="value" stroke="#5B5CEB" fill="#5B5CEB" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row: Tasks + Achievements + Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Upcoming Tasks */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Upcoming Tasks</h3>
            <Link to="/dashboard/roadmap" className="text-sm font-medium" style={{ color: "#5B5CEB" }}>View All</Link>
          </div>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div key={task.title} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/40 transition-all group cursor-pointer">
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${task.priority === "high" ? "bg-red-400" : task.priority === "medium" ? "bg-amber-400" : "bg-green-400"}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.module}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${task.due === "Today" ? "bg-red-50 text-red-500" : task.due === "Tomorrow" ? "bg-amber-50 text-amber-600" : "bg-muted text-muted-foreground"}`}>
                  {task.due}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
            <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Actions</h3>
            <div className="space-y-2.5">
              {[
                { icon: BookOpen, label: "Continue Learning", sub: "Python for ML", path: "/dashboard/modules", color: "#5B5CEB" },
                { icon: Map, label: "View Roadmap", sub: "Semester 2 in progress", path: "/dashboard/roadmap", color: "#7C4DFF" },
                { icon: Bot, label: "Ask AI Mentor", sub: "Get instant help", path: "/dashboard/ai-mentor", color: "#00D4FF" },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    onClick={() => navigate(action.path)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-muted/40 transition-all group text-left"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${action.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: action.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{action.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{action.sub}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Recent Badges</h3>
              <Link to="/dashboard/achievements" className="text-xs font-medium" style={{ color: "#5B5CEB" }}>View All</Link>
            </div>
            <div className="space-y-3">
              {recentAchievements.map((ach) => (
                <div key={ach.name} className="flex items-center gap-3">
                  <div className="text-2xl">{ach.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{ach.name}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${ach.color}15`, color: ach.color }}>
                    +{ach.xp} XP
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
