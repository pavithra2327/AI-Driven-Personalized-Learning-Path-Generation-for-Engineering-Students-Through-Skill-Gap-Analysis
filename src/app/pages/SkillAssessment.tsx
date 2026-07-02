import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  Trophy,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from "react-router";

const assessmentQuestions = [
  {
    id: 1,
    category: 'Programming',
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 'O(1)'
  },
  {
    id: 2,
    category: 'Database',
    question: 'Which SQL clause is used to filter the results of a query?',
    options: ['GROUP BY', 'ORDER BY', 'WHERE', 'HAVING'],
    correctAnswer: 'WHERE'
  },
  {
    id: 3,
    category: 'Programming',
    question: 'What does "async/await" do in JavaScript?',
    options: ['Handles synchronous operations', 'Handles asynchronous operations', 'Creates loops', 'Declares variables'],
    correctAnswer: 'Handles asynchronous operations'
  },
  {
    id: 4,
    category: 'Cloud',
    question: 'Which of these is NOT a cloud computing service model?',
    options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
    correctAnswer: 'DaaS'
  },
  {
    id: 5,
    category: 'AI',
    question: 'What is supervised learning?',
    options: ['Learning without labeled data', 'Learning with labeled training data', 'Reinforcement learning', 'Unsupervised clustering'],
    correctAnswer: 'Learning with labeled training data'
  }
];

const skillRadarData = [
  { skill: 'Programming', current: 85, required: 90 },
  { skill: 'Database', current: 72, required: 80 },
  { skill: 'Cloud', current: 65, required: 85 },
  { skill: 'AI/ML', current: 58, required: 75 },
  { skill: 'Communication', current: 78, required: 80 },
  { skill: 'Problem Solving', current: 82, required: 85 }
];

const performanceData = [
  { category: 'Programming', score: 85 },
  { category: 'Database', score: 72 },
  { category: 'Cloud', score: 65 },
  { category: 'AI/ML', score: 58 },
  { category: 'Communication', score: 78 }
];

export function SkillAssessment() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    assessmentQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correct++;
    });
    return Math.round((correct / assessmentQuestions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!started) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Comprehensive Skill Assessment
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Evaluate your current skills across multiple domains and get personalized recommendations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-6 rounded-xl bg-card">
                  <div className="text-3xl font-bold text-primary mb-2">{assessmentQuestions.length}</div>
                  <p className="text-sm text-muted-foreground">Total Questions</p>
                </div>
                <div className="p-6 rounded-xl bg-card">
                  <div className="text-3xl font-bold text-secondary mb-2">30</div>
                  <p className="text-sm text-muted-foreground">Minutes Duration</p>
                </div>
                <div className="p-6 rounded-xl bg-card">
                  <div className="text-3xl font-bold text-accent mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Skill Categories</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 text-left max-w-2xl mx-auto mb-8">
                <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Assessment Categories
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Programming', 'Database', 'AI/ML', 'Cloud Computing', 'Communication', 'Problem Solving'].map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg h-14 px-8" onClick={handleStart}>
                  Start Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <AlertCircle className="w-4 h-4" />
                <span>Make sure you have a stable internet connection</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const strengths = ['JavaScript', 'React', 'Problem Solving'];
    const weaknesses = ['Cloud Computing', 'Machine Learning', 'System Design'];

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Assessment Complete!
              </h1>
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {score}%
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Great job! Here's your detailed performance analysis
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Skill Radar</CardTitle>
              <CardDescription>Your performance across different categories</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={skillRadarData}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current Level" dataKey="current" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
                  <Radar name="Required Level" dataKey="required" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.2} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Performance by Category</CardTitle>
              <CardDescription>Detailed breakdown of your scores</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="category" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <TrendingUp className="w-5 h-5" />
                Strengths
              </CardTitle>
              <CardDescription>Areas where you excel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <TrendingDown className="w-5 h-5" />
                Areas for Improvement
              </CardTitle>
              <CardDescription>Focus on these skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{weakness}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What's Next?
            </h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-muted-foreground">
                Based on your assessment, we've created a personalized learning path to help you achieve your career goals
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary" onClick={() => navigate('/dashboard/career-recommendation')}>
                View Recommendations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{question.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {Object.keys(answers).length} answered
              </span>
            </div>
            <CardTitle className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswer}>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous
              </Button>

              <div className="flex items-center gap-3">
                {currentQuestion === assessmentQuestions.length - 1 ? (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-primary to-secondary"
                    disabled={!answers[currentQuestion]}
                  >
                    Submit Assessment
                    <CheckCircle className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNext}
                    className="bg-gradient-to-r from-primary to-secondary"
                    disabled={!answers[currentQuestion]}
                  >
                    Next
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
