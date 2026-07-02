import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Code, Brain, BarChart3, Cloud, Shield, Cpu, Sparkles, Settings, Palette, Target, CheckCircle, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";

const careers = [
  { id: 1, name: 'Software Engineer', icon: Code, match: 92, salary: '$80k-$150k', growth: 'Very High', description: 'Build scalable software solutions' },
  { id: 2, name: 'AI Engineer', icon: Brain, match: 70, salary: '$100k-$200k', growth: 'Very High', description: 'Develop intelligent AI systems' },
  { id: 3, name: 'Data Scientist', icon: BarChart3, match: 75, salary: '$90k-$180k', growth: 'High', description: 'Extract insights from data' },
  { id: 4, name: 'Cloud Engineer', icon: Cloud, match: 72, salary: '$85k-$160k', growth: 'Very High', description: 'Manage cloud infrastructure' },
  { id: 5, name: 'Cyber Security', icon: Shield, match: 68, salary: '$85k-$170k', growth: 'High', description: 'Protect systems and data' },
  { id: 6, name: 'Full Stack Dev', icon: Cpu, match: 88, salary: '$75k-$140k', growth: 'Very High', description: 'End-to-end development' },
  { id: 7, name: 'ML Engineer', icon: Sparkles, match: 65, salary: '$95k-$190k', growth: 'Very High', description: 'Build ML models' },
  { id: 8, name: 'DevOps Engineer', icon: Settings, match: 78, salary: '$80k-$155k', growth: 'Very High', description: 'Automate deployments' },
  { id: 9, name: 'UI/UX Designer', icon: Palette, match: 65, salary: '$65k-$130k', growth: 'High', description: 'Design user experiences' },
];

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    setSelectedRole(id);
  };

  const handleContinue = () => {
    navigate('/dashboard/skill-gap');
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Select Your Career Path
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the role that aligns with your interests and goals. We'll create a personalized learning roadmap for you.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {careers.map((career, index) => {
          const Icon = career.icon;
          const isSelected = selectedRole === career.id;
          
          return (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isSelected ? 'border-2 border-primary shadow-lg shadow-primary/20' : ''
                }`}
                onClick={() => handleSelect(career.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-accent'
                    }`}>
                      <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    {isSelected && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {career.name}
                  </CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Match</span>
                    <span className="font-semibold text-primary">{career.match}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      Salary
                    </span>
                    <span className="font-semibold">{career.salary}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Growth
                    </span>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {career.growth}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedRole && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Career Path Selected
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ready to analyze your skill gaps and create your learning roadmap
                    </p>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary" onClick={handleContinue}>
                  Continue to Skill Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
