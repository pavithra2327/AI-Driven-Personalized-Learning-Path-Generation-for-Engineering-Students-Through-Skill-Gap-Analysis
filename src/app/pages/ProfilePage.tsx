import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  School, 
  MapPin, 
  Calendar,
  Briefcase,
  Github,
  Linkedin,
  Globe,
  Edit,
  Upload,
  Award,
  Target,
  Code,
  Brain
} from "lucide-react";
import { motion } from "motion/react";

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 78 },
  { name: 'Python', level: 72 },
  { name: 'Node.js', level: 68 },
  { name: 'SQL', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'AWS', level: 60 }
];

const interests = [
  'Web Development', 'Machine Learning', 'Cloud Computing', 
  'Mobile Development', 'DevOps', 'Data Science'
];

const achievements = [
  { title: 'Fast Learner', description: 'Completed 10 courses in 3 months', icon: Award, color: 'text-yellow-500' },
  { title: 'Assessment Master', description: 'Scored 90%+ in 5 assessments', icon: Target, color: 'text-blue-500' },
  { title: 'Code Champion', description: 'Solved 100+ coding problems', icon: Code, color: 'text-green-500' },
  { title: 'AI Explorer', description: 'Completed ML specialization', icon: Brain, color: 'text-purple-500' }
];

const education = [
  { degree: 'B.Tech in Computer Science', institution: 'MIT', year: '2023 - 2027', cgpa: '3.85/4.0' },
  { degree: 'High School', institution: 'Cambridge High School', year: '2021 - 2023', cgpa: '95%' }
];

const certifications = [
  { name: 'React Advanced Patterns', issuer: 'AI Learning', date: 'June 2026' },
  { name: 'Node.js Certification', issuer: 'AI Learning', date: 'May 2026' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', date: 'April 2026' }
];

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-4xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" className="absolute bottom-0 right-0 rounded-full w-10 h-10 shadow-lg">
                  <Upload className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      John Doe
                    </h1>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                  <Button className="gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <School className="w-4 h-4 text-muted-foreground" />
                    <span>MIT - Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Boston, MA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Career Goal */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Career Goal</CardTitle>
                <CardDescription>Your target career path</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Full Stack Developer
                      </h3>
                      <p className="text-sm text-muted-foreground">Target Salary: $80,000 - $120,000</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Building modern web applications using React, Node.js, and cloud technologies
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge>Web Development</Badge>
                    <Badge>Full Stack</Badge>
                    <Badge>Cloud</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Courses Completed</span>
                  <span className="font-semibold">12</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Certificates Earned</span>
                  <span className="font-semibold">8</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Learning Hours</span>
                  <span className="font-semibold">124</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Level</span>
                  <Badge variant="secondary">Intermediate</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Interests</CardTitle>
              <CardDescription>Areas you're passionate about</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Achievements</CardTitle>
              <CardDescription>Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border hover:bg-accent/50 transition-colors">
                      <div className={`w-12 h-12 rounded-xl bg-accent flex items-center justify-center ${achievement.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Technical Skills</CardTitle>
              <CardDescription>Your current skill levels and proficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-accent rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Add More Skills</CardTitle>
                  <CardDescription>Expand your skill portfolio</CardDescription>
                </div>
                <Button>Add Skill</Button>
              </div>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Education History</CardTitle>
              <CardDescription>Your academic background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <School className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        <Badge variant="outline">CGPA: {edu.cgpa}</Badge>
                      </div>
                    </div>
                  </div>
                  {index < education.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Certifications</CardTitle>
              <CardDescription>Your earned certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Social Links</CardTitle>
              <CardDescription>Connect your social profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub Profile</Label>
                <Input id="github" placeholder="https://github.com/johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Website</Label>
                <Input id="portfolio" placeholder="https://johndoe.com" />
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">Update Links</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
