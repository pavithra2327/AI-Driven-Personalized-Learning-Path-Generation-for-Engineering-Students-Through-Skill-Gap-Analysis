import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { CheckCircle, Lock, PlayCircle, Clock, BookOpen, Code, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const roadmapStages = [
  {
    stage: 'Beginner',
    level: 1,
    completion: 100,
    unlocked: true,
    modules: [
      { id: 1, title: 'JavaScript Fundamentals', type: 'course', duration: '8 hours', status: 'completed', progress: 100 },
      { id: 2, title: 'HTML & CSS Basics', type: 'course', duration: '6 hours', status: 'completed', progress: 100 },
      { id: 3, title: 'Git & GitHub', type: 'course', duration: '4 hours', status: 'completed', progress: 100 },
      { id: 4, title: 'Basic Portfolio Project', type: 'project', duration: '10 hours', status: 'completed', progress: 100 }
    ]
  },
  {
    stage: 'Intermediate',
    level: 2,
    completion: 60,
    unlocked: true,
    modules: [
      { id: 5, title: 'React Fundamentals', type: 'course', duration: '12 hours', status: 'completed', progress: 100 },
      { id: 6, title: 'Node.js & Express', type: 'course', duration: '10 hours', status: 'in-progress', progress: 65 },
      { id: 7, title: 'RESTful APIs', type: 'course', duration: '8 hours', status: 'locked', progress: 0 },
      { id: 8, title: 'Full Stack Project', type: 'project', duration: '20 hours', status: 'locked', progress: 0 }
    ]
  },
  {
    stage: 'Advanced',
    level: 3,
    completion: 0,
    unlocked: false,
    modules: [
      { id: 9, title: 'TypeScript', type: 'course', duration: '10 hours', status: 'locked', progress: 0 },
      { id: 10, title: 'System Design', type: 'course', duration: '15 hours', status: 'locked', progress: 0 },
      { id: 11, title: 'Docker & Kubernetes', type: 'course', duration: '12 hours', status: 'locked', progress: 0 },
      { id: 12, title: 'Microservices Project', type: 'project', duration: '30 hours', status: 'locked', progress: 0 }
    ]
  },
  {
    stage: 'Expert',
    level: 4,
    completion: 0,
    unlocked: false,
    modules: [
      { id: 13, title: 'AWS Cloud Services', type: 'course', duration: '20 hours', status: 'locked', progress: 0 },
      { id: 14, title: 'CI/CD Pipelines', type: 'course', duration: '8 hours', status: 'locked', progress: 0 },
      { id: 15, title: 'Performance Optimization', type: 'course', duration: '10 hours', status: 'locked', progress: 0 },
      { id: 16, title: 'Capstone Project', type: 'project', duration: '40 hours', status: 'locked', progress: 0 }
    ]
  }
];

const getStatusIcon = (status: string) => {
  if (status === 'completed') return <CheckCircle className="w-5 h-5 text-green-500" />;
  if (status === 'in-progress') return <PlayCircle className="w-5 h-5 text-blue-500" />;
  return <Lock className="w-5 h-5 text-muted-foreground" />;
};

const getStatusColor = (status: string) => {
  if (status === 'completed') return 'bg-green-50 text-green-700 border-green-200';
  if (status === 'in-progress') return 'bg-blue-50 text-blue-700 border-blue-200';
  return 'bg-gray-50 text-gray-500 border-gray-200';
};

const getTypeIcon = (type: string) => {
  if (type === 'course') return BookOpen;
  if (type === 'project') return Code;
  return FileText;
};

export function LearningRoadmap() {
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
                  Your Personalized Learning Roadmap
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  A step-by-step path tailored to your Full Stack Developer career goal
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">7 Modules Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">1 In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm">Est. 6 months to complete</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  40%
                </div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
              </div>
            </div>
            <Progress value={40} className="h-3 mt-4" />
          </CardContent>
        </Card>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

        <div className="space-y-8">
          {roadmapStages.map((stage, stageIndex) => (
            <motion.div
              key={stage.level}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: stageIndex * 0.1 }}
            >
              <Card className={`${!stage.unlocked ? 'opacity-60' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        stage.unlocked 
                          ? 'bg-gradient-to-br from-primary to-secondary' 
                          : 'bg-gray-300'
                      }`}>
                        <span className="text-2xl font-bold text-white">{stage.level}</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {stage.stage}
                        </CardTitle>
                        <CardDescription>
                          {stage.modules.length} modules • {stage.completion}% complete
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      {stage.unlocked ? (
                        <Badge className="bg-green-100 text-green-700 border-green-300">
                          Unlocked
                        </Badge>
                      ) : (
                        <Badge className="bg-gray-100 text-gray-600 border-gray-300">
                          <Lock className="w-3 h-3 mr-1" />
                          Locked
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Progress value={stage.completion} className="h-2 mt-4" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stage.modules.map((module, moduleIndex) => {
                      const TypeIcon = getTypeIcon(module.type);
                      return (
                        <div 
                          key={module.id}
                          className={`p-4 rounded-xl border border-border hover:shadow-md transition-all ${
                            module.status === 'locked' ? 'opacity-50' : 'hover:-translate-y-1'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                                <TypeIcon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{module.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  <span>{module.duration}</span>
                                  <span>•</span>
                                  <Badge variant="outline" className="text-xs">{module.type}</Badge>
                                </div>
                              </div>
                            </div>
                            {getStatusIcon(module.status)}
                          </div>
                          
                          {module.progress > 0 && (
                            <div>
                              <div className="flex items-center justify-between mb-1 text-xs">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-1" />
                            </div>
                          )}

                          {module.status !== 'locked' && (
                            <Link to="/dashboard/modules">
                              <Button 
                                size="sm" 
                                variant={module.status === 'in-progress' ? 'default' : 'outline'}
                                className="w-full mt-3"
                              >
                                {module.status === 'completed' ? 'Review' : module.status === 'in-progress' ? 'Continue' : 'Start'}
                              </Button>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Continue Learning?
              </h3>
              <p className="text-sm text-muted-foreground">
                Pick up where you left off with Node.js & Express
              </p>
            </div>
            <Link to="/dashboard/modules">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                Continue Learning
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
