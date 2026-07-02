import { motion } from "motion/react";
import { Trophy, Zap, Star, Flame, Target, Code, BookOpen, Award, Lock, TrendingUp, Calendar } from "lucide-react";

const badges = [
  { id: 1, icon: "🔥", name: "7-Day Streak", desc: "Studied 7 days in a row", xp: 100, unlocked: true, date: "Dec 12, 2024" },
  { id: 2, icon: "⚡", name: "Speed Learner", desc: "Completed 3 modules in a day", xp: 150, unlocked: true, date: "Dec 15, 2024" },
  { id: 3, icon: "🎯", name: "First Career Set", desc: "Selected your career path", xp: 200, unlocked: true, date: "Dec 10, 2024" },
  { id: 4, icon: "💻", name: "Code Warrior", desc: "Completed first coding project", xp: 300, unlocked: true, date: "Dec 18, 2024" },
  { id: 5, icon: "🧠", name: "AI Explorer", desc: "Asked 20 questions to AI Mentor", xp: 125, unlocked: true, date: "Dec 20, 2024" },
  { id: 6, icon: "📚", name: "Knowledge Seeker", desc: "Read 5 learning modules", xp: 80, unlocked: true, date: "Dec 14, 2024" },
  { id: 7, icon: "🏆", name: "Quiz Master", desc: "Scored 100% in a quiz", xp: 250, unlocked: false, date: null },
  { id: 8, icon: "🌟", name: "Top Performer", desc: "Rank top 10 in your college", xp: 500, unlocked: false, date: null },
  { id: 9, icon: "🚀", name: "Rocket Launch", desc: "Complete Semester 1 roadmap", xp: 1000, unlocked: false, date: null },
  { id: 10, icon: "🎓", name: "Certified Pro", desc: "Earn your first certificate", xp: 400, unlocked: false, date: null },
  { id: 11, icon: "💡", name: "Innovator", desc: "Submit an original project idea", xp: 300, unlocked: false, date: null },
  { id: 12, icon: "🤝", name: "Team Player", desc: "Collaborate on a group project", xp: 200, unlocked: false, date: null },
];

const weekData = [
  { day: "Mon", hours: 2.5 }, { day: "Tue", hours: 1.8 }, { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 0.5 }, { day: "Fri", hours: 2.8 }, { day: "Sat", hours: 4.0 }, { day: "Sun", hours: 1.2 },
];

const levels = [
  { name: "Beginner", minXp: 0, maxXp: 500, color: "#94a3b8" },
  { name: "Explorer", minXp: 500, maxXp: 1500, color: "#22C55E" },
  { name: "Developer", minXp: 1500, maxXp: 3000, color: "#00D4FF" },
  { name: "Innovator", minXp: 3000, maxXp: 6000, color: "#7C4DFF" },
  { name: "Expert", minXp: 6000, maxXp: 10000, color: "#5B5CEB" },
  { name: "Master", minXp: 10000, maxXp: Infinity, color: "#F59E0B" },
];

const currentXP = 1205;
const currentLevel = levels.find(l => currentXP >= l.minXp && currentXP < l.maxXp) || levels[1];
const nextLevel = levels[levels.indexOf(currentLevel) + 1];
const levelProgress = ((currentXP - currentLevel.minXp) / (nextLevel.maxXp - currentLevel.minXp)) * 100;

export function Achievements() {
  const unlockedBadges = badges.filter(b => b.unlocked);
  const lockedBadges = badges.filter(b => !b.unlocked);
  const totalXP = unlockedBadges.reduce((sum, b) => sum + b.xp, 0);
  const maxHours = Math.max(...weekData.map(d => d.hours));

  return (
    <div className="p-6 space-y-8" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Achievements</h1>
        <p className="text-muted-foreground mt-1">Track your learning milestones and earn badges as you grow.</p>
      </div>

      {/* XP & Level Card */}
      <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-white/60 text-sm mb-1">Current Level</p>
              <h2 className="text-4xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>{currentLevel.name}</h2>
              <p className="text-white/70 mt-1">On your way to <strong>{nextLevel?.name}</strong></p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm mb-1">Total XP</p>
              <p className="text-4xl font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>{currentXP.toLocaleString()}</p>
              <p className="text-white/70 text-sm">{(nextLevel.maxXp - currentXP).toLocaleString()} XP to next level</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-white/70 mb-2">
              <span>{currentLevel.name} ({currentLevel.minXp.toLocaleString()} XP)</span>
              <span>{nextLevel.name} ({nextLevel.maxXp.toLocaleString()} XP)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${levelProgress}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-white/60 text-xs mt-2">{Math.round(levelProgress)}% to {nextLevel.name}</p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[
              { icon: Trophy, label: "Badges", value: unlockedBadges.length },
              { icon: Flame, label: "Streak", value: "12d" },
              { icon: Zap, label: "XP Today", value: "+85" },
              { icon: Star, label: "Rank", value: "#142" },
            ].map(stat => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <Icon className="w-4 h-4 text-white/70 mx-auto mb-1" />
                  <p className="text-xl font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Heatmap / Weekly Graph */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5" style={{ color: "#5B5CEB" }} />
            <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>This Week's Activity</h3>
          </div>
          <div className="flex items-end gap-3 h-32">
            {weekData.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-xl flex items-end justify-center" style={{ height: `${(day.hours / maxHours) * 100}px`, background: day.hours > 2 ? "linear-gradient(180deg, #5B5CEB, #7C4DFF)" : "linear-gradient(180deg, #EEF2FF, #E0E7FF)", minHeight: "8px" }}>
                  <span className="text-xs text-white/0 select-none">.</span>
                </div>
                <p className="text-xs text-muted-foreground">{day.day}</p>
                <p className="text-xs font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{day.hours}h</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Total this week</span>
            <span className="text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif", color: "#5B5CEB" }}>
              {weekData.reduce((s, d) => s + d.hours, 0).toFixed(1)}h
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" style={{ color: "#22C55E" }} />
            <h3 className="font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Level Progression</h3>
          </div>
          <div className="space-y-3">
            {levels.map((level) => {
              const isCurrentLevel = level.name === currentLevel.name;
              const isPast = levels.indexOf(level) < levels.indexOf(currentLevel);
              return (
                <div key={level.name} className={`flex items-center gap-3 p-3 rounded-xl ${isCurrentLevel ? "border-2" : "border border-border"}`}
                  style={isCurrentLevel ? { borderColor: level.color, background: `${level.color}08` } : {}}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: isPast || isCurrentLevel ? level.color : "#EEF2FF" }}>
                    {isPast ? <span className="text-white text-xs">✓</span> : isCurrentLevel ? <Star className="w-4 h-4 text-white" /> : <Lock className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${isCurrentLevel ? "text-foreground" : isPast ? "text-muted-foreground" : "text-muted-foreground"}`}>{level.name}</p>
                    <p className="text-xs text-muted-foreground">{level.minXp.toLocaleString()}+ XP</p>
                  </div>
                  {isCurrentLevel && <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: level.color }}>Current</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Unlocked Badges */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Trophy className="w-5 h-5" style={{ color: "#5B5CEB" }} />
          <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Unlocked Badges</h2>
          <span className="px-2.5 py-0.5 rounded-full text-sm font-semibold text-white" style={{ background: "#5B5CEB" }}>{unlockedBadges.length}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {unlockedBadges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-2xl border border-border p-4 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <p className="text-sm font-bold text-foreground leading-tight mb-1">{badge.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{badge.desc}</p>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(91,92,235,0.1)", color: "#5B5CEB" }}>
                <Zap className="w-3 h-3" />+{badge.xp} XP
              </div>
              {badge.date && <p className="text-xs text-muted-foreground mt-2">{badge.date}</p>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locked Badges */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Lock className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>Locked Badges</h2>
          <span className="px-2.5 py-0.5 rounded-full text-sm font-semibold bg-muted text-muted-foreground">{lockedBadges.length}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {lockedBadges.map((badge) => (
            <div key={badge.id} className="bg-white rounded-2xl border border-dashed border-border p-4 text-center opacity-60 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-muted-foreground/60" />
              </div>
              <div className="text-4xl mb-3 blur-sm">{badge.icon}</div>
              <p className="text-sm font-bold text-foreground leading-tight mb-1">{badge.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{badge.desc}</p>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
                <Zap className="w-3 h-3" />+{badge.xp} XP
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
