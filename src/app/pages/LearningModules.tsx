import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Star, Clock, Users, BookOpen, PlayCircle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";

const courses = [
  { id: 1, title: 'Advanced React Patterns', category: 'programming', instructor: 'Sarah Johnson', difficulty: 'Advanced', duration: '12 hours', rating: 4.8, students: 15420, thumbnail: '🎨', status: 'not-started', progress: 0 },
  { id: 2, title: 'Node.js & Express Masterclass', category: 'programming', instructor: 'Mike Chen', difficulty: 'Intermediate', duration: '10 hours', rating: 4.9, students: 22100, thumbnail: '🚀', status: 'in-progress', progress: 65 },
  { id: 3, title: 'Machine Learning Fundamentals', category: 'ai', instructor: 'Dr. Emily White', difficulty: 'Advanced', duration: '20 hours', rating: 4.7, students: 18500, thumbnail: '🤖', status: 'not-started', progress: 0 },
  { id: 4, title: 'AWS Cloud Practitioner', category: 'cloud', instructor: 'Alex Kumar', difficulty: 'Beginner', duration: '15 hours', rating: 4.6, students: 12300, thumbnail: '☁️', status: 'completed', progress: 100 },
  { id: 5, title: 'TypeScript Deep Dive', category: 'programming', instructor: 'John Davis', difficulty: 'Intermediate', duration: '8 hours', rating: 4.8, students: 9800, thumbnail: '📘', status: 'not-started', progress: 0 },
  { id: 6, title: 'Docker & Kubernetes', category: 'devops', instructor: 'Lisa Park', difficulty: 'Advanced', duration: '14 hours', rating: 4.7, students: 11200, thumbnail: '🐳', status: 'not-started', progress: 0 },
  { id: 7, title: 'MongoDB Essentials', category: 'database', instructor: 'Tom Wilson', difficulty: 'Beginner', duration: '6 hours', rating: 4.5, students: 8500, thumbnail: '🍃', status: 'not-started', progress: 0 },
  { id: 8, title: 'System Design Interview Prep', category: 'programming', instructor: 'Rachel Green', difficulty: 'Advanced', duration: '16 hours', rating: 4.9, students: 14600, thumbnail: '🏗️', status: 'not-started', progress: 0 },
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty === 'Beginner') return 'bg-green-100 text-green-700 border-green-300';
  if (difficulty === 'Intermediate') return 'bg-blue-100 text-blue-700 border-blue-300';
  return 'bg-purple-100 text-purple-700 border-purple-300';
};

const getStatusBadge = (status: string) => {
  if (status === 'completed') return <Badge className="bg-green-100 text-green-700 border-green-300"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
  if (status === 'in-progress') return <Badge className="bg-blue-100 text-blue-700 border-blue-300"><PlayCircle className="w-3 h-3 mr-1" />In Progress</Badge>;
  return null;
};

export function LearningModules() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Learning Modules
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore our comprehensive library of courses to achieve your learning goals
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search courses by title, instructor, or topic..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="ai">AI & ML</SelectItem>
                  <SelectItem value="cloud">Cloud</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-5xl">{course.thumbnail}</div>
                      {getStatusBadge(course.status)}
                    </div>
                    <CardTitle className="line-clamp-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {course.title}
                    </CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>

                    {course.progress > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-1 text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <Link to={`/dashboard/course/${course.id}`}>
                      <Button className="w-full" variant={course.status === 'in-progress' ? 'default' : 'outline'}>
                        {course.status === 'completed' ? 'Review' : course.status === 'in-progress' ? 'Continue' : 'Enroll Now'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.status === 'in-progress').map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-accent rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <Link to={`/dashboard/course/${course.id}`}>
                    <Button className="w-full">Continue Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.status === 'completed').map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="text-5xl mb-3">{course.thumbnail}</div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-100 text-green-700 border-green-300 mb-4">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                  <Link to={`/dashboard/course/${course.id}`}>
                    <Button className="w-full" variant="outline">Review Course</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map(course => (
              <Card key={course.id} className="border-2 border-primary/20">
                <CardHeader>
                  <Badge className="w-fit bg-primary text-primary-foreground mb-2">Recommended</Badge>
                  <div className="text-5xl mb-3">{course.thumbnail}</div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/dashboard/course/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">Start Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
