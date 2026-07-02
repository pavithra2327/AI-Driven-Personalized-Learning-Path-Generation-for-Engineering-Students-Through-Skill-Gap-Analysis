import { Outlet, Link, useLocation, useNavigate } from "react-router";
import {
  LayoutDashboard,
  User,
  Briefcase,
  Map,
  BookOpen,
  TrendingUp,
  Trophy,
  Award,
  Settings as SettingsIcon,
  LogOut,
  Bell,
  Search,
  Moon,
  Sun,
  Brain,
  Bot,
  Flame,
  Target,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", emoji: "🏠" },
  { icon: User, label: "My Profile", path: "/dashboard/profile", emoji: "👤" },
  { icon: Briefcase, label: "Career Recommendation", path: "/dashboard/career-recommendation", emoji: "🎯" },
  { icon: Map, label: "Learning Roadmap", path: "/dashboard/roadmap", emoji: "🛣" },
  { icon: BookOpen, label: "Learning Modules", path: "/dashboard/modules", emoji: "📚" },
  { icon: Brain, label: "AI Mentor", path: "/dashboard/ai-mentor", emoji: "🧠" },
  { icon: TrendingUp, label: "Progress Tracker", path: "/dashboard/progress", emoji: "📈" },
  { icon: Trophy, label: "Achievements", path: "/dashboard/achievements", emoji: "🏆" },
  { icon: Award, label: "Certificates", path: "/dashboard/certificates", emoji: "📜" },
  { icon: SettingsIcon, label: "Settings", path: "/dashboard/settings", emoji: "⚙" },
];

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => navigate("/login");

  return (
    <div className="flex h-screen bg-background" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-border bg-white shadow-xl shadow-primary/5" style={{ background: "linear-gradient(180deg, #ffffff 0%, #F7F9FC 100%)" }}>
        {/* Logo */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-none" style={{ fontFamily: "Poppins, sans-serif" }}>
                AI Career
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">Mentor Platform</p>
            </div>
          </div>
        </div>

        {/* Student Career Badge */}
        <div className="mx-4 mt-4 p-3 rounded-xl border border-primary/20" style={{ background: "linear-gradient(135deg, rgba(91,92,235,0.08), rgba(124,77,255,0.08))" }}>
          <p className="text-xs text-muted-foreground mb-1">Current Career Goal</p>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>AI Engineer</span>
            <Badge className="ml-auto text-xs px-1.5 py-0" style={{ background: "rgba(91,92,235,0.15)", color: "#5B5CEB", border: "none" }}>96%</Badge>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                style={isActive ? { background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)", boxShadow: "0 4px 15px rgba(91,92,235,0.3)" } : {}}
              >
                <span className="text-base leading-none">{item.emoji}</span>
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60" />}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-border px-6 flex items-center justify-between shadow-sm">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search courses, skills, careers..."
                className="pl-10 h-9 text-sm rounded-xl border-border/60 bg-muted/40 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Learning Streak */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600" style={{ fontFamily: "Outfit, sans-serif" }}>12</span>
              <span className="text-xs text-orange-500">day streak</span>
            </div>

            {/* AI Assistant Button */}
            <Button
              size="sm"
              className="hidden md:flex items-center gap-1.5 h-9 px-3 rounded-xl text-white text-sm"
              style={{ background: "linear-gradient(135deg, #5B5CEB, #00D4FF)", boxShadow: "0 4px 12px rgba(91,92,235,0.25)" }}
              onClick={() => navigate("/dashboard/ai-mentor")}
            >
              <Bot className="w-4 h-4" />
              AI Mentor
            </Button>

            {/* Dark Mode */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full w-9 h-9"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </Button>

            {/* Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-3 h-9 rounded-xl">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="text-xs text-white font-bold" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>AK</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-xs font-semibold leading-none">Aryan Kumar</p>
                    <p className="text-xs text-muted-foreground leading-none mt-0.5">2nd Year CSE</p>
                  </div>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Student Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard/settings")}>
                  <SettingsIcon className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
