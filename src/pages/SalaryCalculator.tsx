import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SalaryCalculator = () => {
  const [salary, setSalary] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [results, setResults] = useState<any>(null);

  const calculateSalary = () => {
    const annualSalary = frequency === 'monthly' ? parseFloat(salary) * 12 : parseFloat(salary);
    
    // Simple tax calculation (approximate)
    const federalTax = annualSalary * 0.22;
    const stateTax = annualSalary * 0.05;
    const socialSecurity = annualSalary * 0.062;
    const medicare = annualSalary * 0.0145;
    const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
    const netSalary = annualSalary - totalDeductions;

    setResults({
      gross: annualSalary,
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      totalDeductions,
      net: netSalary,
      monthlyNet: netSalary / 12,
      weeklyNet: netSalary / 52
    });
  };

  const pieData = results ? [
    { name: 'Take Home', value: results.net, color: '#22c55e' },
    { name: 'Federal Tax', value: results.federalTax, color: '#3b82f6' },
    { name: 'State Tax', value: results.stateTax, color: '#8b5cf6' },
    { name: 'Social Security', value: results.socialSecurity, color: '#f59e0b' },
    { name: 'Medicare', value: results.medicare, color: '#ef4444' }
  ] : [];

  const barData = results ? [
    { name: 'Gross Salary', amount: results.gross },
    { name: 'Net Salary', amount: results.net }
  ] : [];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Salary Calculator
          </h1>
          <p className="text-xl text-muted-foreground">
            Calculate your take-home pay and understand your salary breakdown
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Salary Details</CardTitle>
              <CardDescription>
                Input your salary information to get a detailed breakdown
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="salary">Salary Amount</Label>
                <Input
                  id="salary"
                  type="number"
                  placeholder="Enter amount"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Payment Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateSalary} 
                className="w-full" 
                size="lg"
                disabled={!salary}
              >
                Calculate Salary Breakdown
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && (
            <Card>
              <CardHeader>
                <CardTitle>Salary Breakdown</CardTitle>
                <CardDescription>
                  Your detailed salary analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="font-medium">Gross Annual Salary</span>
                    <span className="font-bold text-primary">${results.gross.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Federal Tax (22%)</span>
                      <span className="text-destructive">-${results.federalTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State Tax (5%)</span>
                      <span className="text-destructive">-${results.stateTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Social Security (6.2%)</span>
                      <span className="text-destructive">-${results.socialSecurity.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicare (1.45%)</span>
                      <span className="text-destructive">-${results.medicare.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-success/5 rounded-lg border-t">
                    <span className="font-medium">Net Annual Salary</span>
                    <span className="font-bold text-success">${results.net.toLocaleString()}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="font-bold">${results.monthlyNet.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Monthly</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="font-bold">${results.weeklyNet.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Weekly</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Charts Section */}
        {results && (
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Salary Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gross vs Net Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                    <Bar dataKey="amount" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryCalculator;