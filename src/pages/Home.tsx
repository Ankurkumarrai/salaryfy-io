import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, BookOpen, TrendingUp, Shield, PieChart, Target } from 'lucide-react';
import heroImage from '@/assets/hero-financial.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Financial Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Your <span className="text-yellow-300">Financial Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Understand your salary, optimize your taxes, and build wealth with transparency and clarity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/salary-calculator">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Salary
                </Button>
              </Link>
              <Link to="/education">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Financial Empowerment Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and optimize your financial situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Salary Calculator</CardTitle>
                <CardDescription>
                  Break down your salary, understand deductions, and calculate take-home pay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/salary-calculator">
                  <Button className="w-full">Explore Calculator</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Tax Information</CardTitle>
                <CardDescription>
                  Comprehensive tax guides, brackets, and optimization strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/tax-info">
                  <Button className="w-full">Learn Taxes</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Financial Education</CardTitle>
                <CardDescription>
                  Learn investing, budgeting, and wealth-building strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/education">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-muted-foreground">Don't understand their payslip</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$2,000</div>
              <div className="text-muted-foreground">Average annual tax overpayment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">40%</div>
              <div className="text-muted-foreground">Lack basic financial knowledge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take Control of Your Financial Future
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who have improved their financial literacy with Salaryfy
          </p>
          <Link to="/salary-calculator">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;