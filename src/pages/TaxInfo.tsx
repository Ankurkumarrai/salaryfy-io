import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calculator, FileText, TrendingUp, Shield } from 'lucide-react';

const TaxInfo = () => {
  const taxBrackets2024 = [
    { min: 0, max: 11000, rate: 10 },
    { min: 11001, max: 44725, rate: 12 },
    { min: 44726, max: 95375, rate: 22 },
    { min: 95376, max: 182050, rate: 24 },
    { min: 182051, max: 231250, rate: 32 },
    { min: 231251, max: 578125, rate: 35 },
    { min: 578126, max: Infinity, rate: 37 }
  ];

  const deductions = [
    { name: 'Standard Deduction (Single)', amount: 13850, description: 'Fixed deduction for single filers' },
    { name: 'Standard Deduction (Married)', amount: 27700, description: 'Fixed deduction for married filing jointly' },
    { name: '401(k) Contribution Limit', amount: 22500, description: 'Maximum annual contribution to 401(k)' },
    { name: 'IRA Contribution Limit', amount: 6500, description: 'Maximum annual contribution to IRA' }
  ];

  const taxTips = [
    {
      title: 'Maximize Retirement Contributions',
      description: 'Contributing to 401(k) and IRA reduces your taxable income',
      icon: TrendingUp
    },
    {
      title: 'Keep Track of Deductions',
      description: 'Medical expenses, charitable donations, and business expenses',
      icon: FileText
    },
    {
      title: 'Understand Tax Brackets',
      description: 'Only income above each bracket threshold is taxed at that rate',
      icon: Calculator
    },
    {
      title: 'Plan for Tax Season',
      description: 'Set aside money throughout the year to cover tax obligations',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tax Information Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about taxes, deductions, and optimization strategies
          </p>
        </div>

        <Tabs defaultValue="brackets" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="brackets">Tax Brackets</TabsTrigger>
            <TabsTrigger value="deductions">Deductions</TabsTrigger>
            <TabsTrigger value="tips">Tax Tips</TabsTrigger>
            <TabsTrigger value="calendar">Tax Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="brackets">
            <Card>
              <CardHeader>
                <CardTitle>2024 Federal Tax Brackets (Single Filers)</CardTitle>
                <CardDescription>
                  Progressive tax system - you only pay higher rates on income above each threshold
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taxBrackets2024.map((bracket, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={index < 3 ? "secondary" : index < 5 ? "default" : "destructive"}>
                          {bracket.rate}%
                        </Badge>
                        <div>
                          <div className="font-medium">
                            ${bracket.min.toLocaleString()} - {bracket.max === Infinity ? '∞' : `$${bracket.max.toLocaleString()}`}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {bracket.rate}% tax rate on income in this bracket
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">How Progressive Taxation Works</h4>
                  <p className="text-sm text-muted-foreground">
                    For example, if you earn $50,000: You pay 10% on the first $11,000, and 12% on the remaining $39,000. 
                    Your effective tax rate is lower than your marginal rate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deductions">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Deductions (2024)</CardTitle>
                  <CardDescription>
                    Fixed deduction amounts you can claim without itemizing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deductions.map((deduction, index) => (
                      <div key={index} className="flex justify-between items-start p-3 border rounded">
                        <div>
                          <div className="font-medium">{deduction.name}</div>
                          <div className="text-sm text-muted-foreground">{deduction.description}</div>
                        </div>
                        <div className="font-bold text-primary">${deduction.amount.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Itemized Deductions</CardTitle>
                  <CardDescription>
                    Deductions you can claim if they exceed the standard deduction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <div className="font-medium">State and Local Taxes (SALT)</div>
                      <div className="text-sm text-muted-foreground">Up to $10,000 limit</div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="font-medium">Mortgage Interest</div>
                      <div className="text-sm text-muted-foreground">On loans up to $750,000</div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="font-medium">Charitable Contributions</div>
                      <div className="text-sm text-muted-foreground">Up to 60% of AGI</div>
                    </div>
                    <div className="p-3 border rounded">
                      <div className="font-medium">Medical Expenses</div>
                      <div className="text-sm text-muted-foreground">Exceeding 7.5% of AGI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              {taxTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <tip.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Tax Optimization Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Pre-Tax Savings</h4>
                    <p className="text-sm text-muted-foreground">
                      401(k), Traditional IRA, HSA contributions reduce current year taxes
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Tax-Loss Harvesting</h4>
                    <p className="text-sm text-muted-foreground">
                      Sell losing investments to offset capital gains
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Timing Income</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider timing of bonuses and stock option exercises
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>2024 Tax Calendar</CardTitle>
                <CardDescription>
                  Important tax dates and deadlines throughout the year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">January 31</h4>
                        <Badge>Important</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Deadline for employers to provide W-2 and 1099 forms
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">April 15</h4>
                        <Badge variant="destructive">Critical</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tax return filing deadline and tax payment due date
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">April 15</h4>
                        <Badge>IRA</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Last day to contribute to IRA for previous tax year
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">October 15</h4>
                        <Badge variant="secondary">Extension</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extended deadline for filing tax returns (with extension)
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Quarterly Estimated Tax Payments</h4>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div>Q1: April 15</div>
                      <div>Q2: June 17</div>
                      <div>Q3: September 16</div>
                      <div>Q4: January 15</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TaxInfo;