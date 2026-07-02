import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { CheckCircle, XCircle, AlertCircle, TrendingUp, ArrowRight, Target } from "lucide-react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useNavigate } from "react-router";

const currentSkills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 78 },
  { name: 'Node.js', level: 68 },
  { name: 'Git', level: 80 },
  { name: 'HTML/CSS', level: 90 }
];

const requiredSkills = [
  { name: 'TypeScript', level: 0, priority: 'High' },
  { name: 'System Design', level: 0, priority: 'High' },
  { name: 'Docker', level: 0, priority: 'Medium' },
  { name: 'AWS', level: 30, priority: 'High' },
  { name: 'Testing', level: 45, priority: 'Medium' },
  { name: 'MongoDB', level: 0, priority: 'Low' }
];

const skillMatchData = [
  { name: 'Matched Skills', value: 5, color: '#22C55E' },
  { name: 'Partial Match', value: 2, color: '#F59E0B' },
  { name: 'Missing Skills', value: 4, color: '#EF4444' }
];

export function SkillGapAnalysis() {
  const navigate = useNavigate();
  const skillMatchPercentage = 64;

  const getPriorityColor = (priority: string) => {
    if (priority === 'High') return 'bg-red-100 text-red-700 border-red-300';
    if (priority === 'Medium') return 'bg-orange-100 text-orange-700 border-orange-300';
    return 'bg-blue-100 text-blue-700 border-blue-300';
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Skill Gap Analysis
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Detailed analysis of your current skills vs. requirements for Software Engineer role
                </p>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-medium">Career Goal: Full Stack Developer</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {skillMatchPercentage}%
                </div>
                <p className="text-sm text-muted-foreground">Skill Match</p>
              </div>
            </div>
            <Progress value={skillMatchPercentage} className="h-3 mt-4" />
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-6">
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Detailed Skill Breakdown</CardTitle>
            <CardDescription>Compare your current skills with job requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <CheckCircle className="w-5 h-5 text-green-500" />
                Your Current Skills
              </h3>
              <div className="space-y-3">
                {currentSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <AlertCircle className="w-5 h-5 text-orange-500" />
                Missing & Required Skills
              </h3>
              <div className="space-y-3">
                {requiredSkills.map((skill, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.level === 0 ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                        )}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge className={getPriorityColor(skill.priority)}>
                        {skill.priority} Priority
                      </Badge>
                    </div>
                    {skill.level > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-1 text-sm">
                          <span className="text-muted-foreground">Current Level</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Skill Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={skillMatchData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {skillMatchData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {skillMatchData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Priority Skills</CardTitle>
              <CardDescription>Focus on these first</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {requiredSkills
                .filter(s => s.priority === 'High')
                .map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Start with high-priority skills to maximize impact</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Estimated time to fill gaps: 4-6 months</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5" />
                <span>We've created a personalized roadmap for you</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Start Learning?
              </h3>
              <p className="text-sm text-muted-foreground">
                We've created a personalized learning roadmap based on your skill gaps
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary" onClick={() => navigate('/dashboard/roadmap')}>
              Generate Learning Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
