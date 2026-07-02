import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Star, Clock, Users, BookOpen, PlayCircle, FileText, Code, MessageSquare, Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const curriculum = [
  {
    module: 1,
    title: 'Introduction to Node.js',
    duration: '2 hours',
    lessons: [
      { id: 1, title: 'What is Node.js?', type: 'video', duration: '15 min', completed: true },
      { id: 2, title: 'Setting up Environment', type: 'video', duration: '20 min', completed: true },
      { id: 3, title: 'First Node.js Application', type: 'video', duration: '25 min', completed: true },
      { id: 4, title: 'Quiz: Basics', type: 'quiz', duration: '10 min', completed: false },
    ]
  },
  {
    module: 2,
    title: 'Express Framework',
    duration: '3 hours',
    lessons: [
      { id: 5, title: 'Introduction to Express', type: 'video', duration: '20 min', completed: true },
      { id: 6, title: 'Routing in Express', type: 'video', duration: '30 min', completed: false },
      { id: 7, title: 'Middleware', type: 'video', duration: '25 min', completed: false },
      { id: 8, title: 'Hands-on: Build an API', type: 'assignment', duration: '45 min', completed: false },
    ]
  },
  {
    module: 3,
    title: 'Database Integration',
    duration: '2.5 hours',
    lessons: [
      { id: 9, title: 'MongoDB Basics', type: 'video', duration: '20 min', completed: false },
      { id: 10, title: 'Mongoose ODM', type: 'video', duration: '30 min', completed: false },
      { id: 11, title: 'CRUD Operations', type: 'video', duration: '35 min', completed: false },
      { id: 12, title: 'Project: Full Stack App', type: 'project', duration: '60 min', completed: false },
    ]
  }
];

const reviews = [
  { id: 1, name: 'Alice Johnson', avatar: 'AJ', rating: 5, date: 'June 15, 2026', comment: 'Excellent course! Very detailed and practical examples.' },
  { id: 2, name: 'Bob Smith', avatar: 'BS', rating: 5, date: 'June 10, 2026', comment: 'Mike is a great instructor. Learned so much!' },
  { id: 3, name: 'Carol Davis', avatar: 'CD', rating: 4, date: 'June 5, 2026', comment: 'Good content, could use more real-world projects.' },
];

export function CourseDetails() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
                  <PlayCircle className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
                <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Node.js & Express Masterclass
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Master backend development with Node.js and Express. Build RESTful APIs, connect to databases, and deploy production-ready applications.
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Mike Chen</p>
                      <p className="text-sm text-muted-foreground">Senior Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">4.9</span>
                      <span className="text-sm text-muted-foreground">(2,210)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span>22,100 students</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>10 hours</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Your Progress</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-3" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary h-14">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Continue Learning
                </Button>
                <Button size="lg" variant="outline" className="h-14">
                  <Award className="mr-2 w-5 h-5" />
                  Get Certificate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="curriculum" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Course Curriculum</CardTitle>
                  <CardDescription>Complete all modules to earn your certificate</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {curriculum.map((module) => (
                      <AccordionItem key={module.module} value={`module-${module.module}`}>
                        <AccordionTrigger>
                          <div className="flex items-center justify-between w-full pr-4">
                            <span className="font-semibold">Module {module.module}: {module.title}</span>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {module.lessons.map((lesson) => (
                              <div 
                                key={lesson.id}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                                  )}
                                  {lesson.type === 'video' && <PlayCircle className="w-4 h-4 text-primary" />}
                                  {lesson.type === 'quiz' && <FileText className="w-4 h-4 text-secondary" />}
                                  {lesson.type === 'assignment' && <Code className="w-4 h-4 text-accent" />}
                                  {lesson.type === 'project' && <Code className="w-4 h-4 text-purple-500" />}
                                  <span className={lesson.completed ? 'line-through text-muted-foreground' : ''}>
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>About this Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What you'll learn</h3>
                    <ul className="space-y-2">
                      {[
                        'Build RESTful APIs with Node.js and Express',
                        'Connect to MongoDB and perform CRUD operations',
                        'Implement authentication and authorization',
                        'Deploy applications to production',
                        'Handle errors and debugging effectively'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Prerequisites</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Basic JavaScript knowledge</li>
                      <li>• Familiarity with HTML and CSS</li>
                      <li>• Understanding of HTTP protocols</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Course Resources</CardTitle>
                  <CardDescription>Downloadable materials and links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Course Slides (PDF)', size: '2.5 MB' },
                    { name: 'Source Code Repository', size: 'GitHub' },
                    { name: 'Cheat Sheet', size: '1.2 MB' },
                    { name: 'Practice Exercises', size: '800 KB' }
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <span className="font-medium">{resource.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{resource.size}</span>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Student Reviews</CardTitle>
                  <CardDescription>See what students are saying</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 rounded-lg border border-border">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">{review.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{review.name}</span>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Course Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Modules Completed</span>
                <span className="font-semibold">1/3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Lessons Completed</span>
                <span className="font-semibold">5/12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Time Spent</span>
                <span className="font-semibold">6.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Est. Completion</span>
                <span className="font-semibold">3.5 hours</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Discussion</CardTitle>
              <CardDescription>Ask questions and collaborate</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full gap-2">
                <MessageSquare className="w-4 h-4" />
                Join Discussion
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
