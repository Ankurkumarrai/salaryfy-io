import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, TrendingUp, PiggyBank, Target, Award, DollarSign } from 'lucide-react';

const Education = () => {
  const courses = [
    {
      title: 'Salary Fundamentals',
      description: 'Understanding your paycheck, deductions, and benefits',
      progress: 100,
      lessons: 8,
      duration: '2 hours',
      level: 'Beginner',
      icon: DollarSign
    },
    {
      title: 'Tax Optimization',
      description: 'Strategies to minimize your tax burden legally',
      progress: 75,
      lessons: 12,
      duration: '3 hours',
      level: 'Intermediate',
      icon: Target
    },
    {
      title: 'Investment Basics',
      description: 'Building wealth through smart investing',
      progress: 50,
      lessons: 15,
      duration: '4 hours',
      level: 'Beginner',
      icon: TrendingUp
    },
    {
      title: 'Retirement Planning',
      description: '401(k), IRA, and long-term financial security',
      progress: 25,
      lessons: 10,
      duration: '3 hours',
      level: 'Intermediate',
      icon: PiggyBank
    }
  ];

  const articles = [
    {
      title: 'Understanding Your W-2 Form',
      category: 'Salary',
      readTime: '5 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Maximizing Your 401(k) Match',
      category: 'Benefits',
      readTime: '7 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Tax-Loss Harvesting Strategies',
      category: 'Taxes',
      readTime: '10 min',
      difficulty: 'Advanced'
    },
    {
      title: 'Emergency Fund: How Much Do You Need?',
      category: 'Budgeting',
      readTime: '6 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Dollar-Cost Averaging Explained',
      category: 'Investing',
      readTime: '8 min',
      difficulty: 'Intermediate'
    },
    {
      title: 'Roth vs Traditional IRA: Which to Choose?',
      category: 'Retirement',
      readTime: '12 min',
      difficulty: 'Intermediate'
    }
  ];

  const tools = [
    {
      name: 'Budget Tracker',
      description: 'Track your income and expenses',
      icon: PiggyBank,
      category: 'Budgeting'
    },
    {
      name: 'Investment Calculator',
      description: 'Calculate compound returns over time',
      icon: TrendingUp,
      category: 'Investing'
    },
    {
      name: 'Retirement Planner',
      description: 'Plan for your retirement goals',
      icon: Target,
      category: 'Planning'
    },
    {
      name: 'Tax Estimator',
      description: 'Estimate your annual tax liability',
      icon: Award,
      category: 'Taxes'
    }
  ];

  const achievements = [
    { name: 'Salary Savvy', description: 'Completed Salary Fundamentals course', earned: true },
    { name: 'Tax Expert', description: 'Completed Tax Optimization course', earned: true },
    { name: 'Investment Rookie', description: 'Started Investment Basics course', earned: true },
    { name: 'Planning Pro', description: 'Used 3 different financial calculators', earned: false },
    { name: 'Knowledge Seeker', description: 'Read 10 educational articles', earned: false },
    { name: 'Financial Guru', description: 'Completed all courses', earned: false }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Financial Education Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Build your financial knowledge with comprehensive courses, articles, and tools
          </p>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <course.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={course.level === 'Beginner' ? 'secondary' : 'default'}>
                              {course.level}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {course.lessons} lessons • {course.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant={article.difficulty === 'Beginner' ? 'secondary' : article.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                        {article.difficulty}
                      </Badge>
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {tool.name}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <div className="space-y-8">
              {/* Learning Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Courses Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-accent">15</div>
                    <div className="text-sm text-muted-foreground">Articles Read</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-success">8</div>
                    <div className="text-sm text-muted-foreground">Hours Learned</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-foreground">65%</div>
                    <div className="text-sm text-muted-foreground">Overall Progress</div>
                  </CardContent>
                </Card>
              </div>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>
                    Track your learning milestones and unlock badges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className={`p-4 border rounded-lg ${achievement.earned ? 'bg-success/5 border-success/20' : 'bg-muted/30'}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${achievement.earned ? 'bg-success text-white' : 'bg-muted'}`}>
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <div className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {achievement.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {achievement.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Path */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Learning Path</CardTitle>
                  <CardDescription>
                    Follow this path to build comprehensive financial knowledge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-success/5 border border-success/20 rounded-lg">
                      <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm">✓</div>
                      <div>
                        <div className="font-medium">Salary Fundamentals</div>
                        <div className="text-sm text-muted-foreground">Master your paycheck basics</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</div>
                      <div>
                        <div className="font-medium">Tax Optimization</div>
                        <div className="text-sm text-muted-foreground">Learn to minimize your tax burden</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">3</div>
                      <div>
                        <div className="font-medium text-muted-foreground">Investment Basics</div>
                        <div className="text-sm text-muted-foreground">Start building wealth through investing</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">4</div>
                      <div>
                        <div className="font-medium text-muted-foreground">Retirement Planning</div>
                        <div className="text-sm text-muted-foreground">Secure your financial future</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Education;