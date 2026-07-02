import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Trophy, TrendingUp, Clock, Award, Target, Flame } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const weeklyData = [
  { week: 'Week 1', hours: 8 },
  { week: 'Week 2', hours: 12 },
  { week: 'Week 3', hours: 10 },
  { week: 'Week 4', hours: 15 },
  { week: 'Week 5', hours: 14 },
  { week: 'Week 6', hours: 18 },
];

const skillGrowth = [
  { month: 'Jan', frontend: 65, backend: 45, database: 50 },
  { month: 'Feb', frontend: 70, backend: 55, database: 58 },
  { month: 'Mar', frontend: 75, backend: 62, database: 65 },
  { month: 'Apr', frontend: 80, backend: 68, database: 70 },
  { month: 'May', frontend: 82, backend: 75, database: 75 },
  { month: 'Jun', frontend: 85, backend: 78, database: 78 },
];

const achievements = [
  { id: 1, title: 'First Course', description: 'Completed your first course', date: 'Jan 2026', icon: Trophy, color: 'text-yellow-500' },
  { id: 2, title: '7-Day Streak', description: 'Learned for 7 days straight', date: 'Feb 2026', icon: Flame, color: 'text-orange-500' },
  { id: 3, title: 'Quiz Master', description: 'Scored 100% in 5 quizzes', date: 'Mar 2026', icon: Target, color: 'text-blue-500' },
  { id: 4, title: 'Fast Learner', description: 'Completed 5 courses in a month', date: 'Apr 2026', icon: TrendingUp, color: 'text-green-500' },
];

export function ProgressTracker() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Progress Tracker
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your learning journey and celebrate your achievements
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold mb-1">12</div>
            <p className="text-sm text-muted-foreground">Courses Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-1">124</div>
            <p className="text-sm text-muted-foreground">Learning Hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-3xl font-bold mb-1">18</div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-3xl font-bold mb-1">8</div>
            <p className="text-sm text-muted-foreground">Certificates Earned</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Weekly Learning Hours</CardTitle>
            <CardDescription>Your learning activity over the past 6 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="hours" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Skill Growth Over Time</CardTitle>
            <CardDescription>Track your progress in different areas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={skillGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="frontend" stroke="#4F46E5" strokeWidth={2} />
                <Line type="monotone" dataKey="backend" stroke="#7C3AED" strokeWidth={2} />
                <Line type="monotone" dataKey="database" stroke="#06B6D4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Career Readiness Score</CardTitle>
          <CardDescription>How ready you are for your target role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                68%
              </div>
              <p className="text-muted-foreground">Ready for Full Stack Developer role</p>
            </div>
            <Progress value={68} className="h-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Technical Skills</span>
                  <span className="font-semibold">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Certifications</span>
                  <span className="font-semibold">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Achievements & Badges</CardTitle>
          <CardDescription>Milestones you've reached in your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="flex items-start gap-4 p-4 rounded-xl border border-border hover:bg-accent/50 transition-colors">
                  <div className={`w-14 h-14 rounded-full bg-accent flex items-center justify-center ${achievement.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs">{achievement.date}</Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
