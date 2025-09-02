import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, DollarSign, TrendingUp } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Salaryfy.io</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <DollarSign className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/salary-calculator">
              <Button 
                variant={isActive('/salary-calculator') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <Calculator className="h-4 w-4" />
                <span>Salary Calculator</span>
              </Button>
            </Link>
            
            <Link to="/tax-info">
              <Button 
                variant={isActive('/tax-info') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Tax Info</span>
              </Button>
            </Link>
            
            <Link to="/education">
              <Button 
                variant={isActive('/education') ? 'default' : 'ghost'} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Education</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;