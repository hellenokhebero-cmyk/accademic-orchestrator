import { useState } from "react"
import { BarChart3, TrendingUp, Users, GraduationCap, BookOpen, Activity, Download, Filter } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from "recharts"

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("30")

  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      icon: <Users className="h-4 w-4" />,
      description: "Active enrollments",
      trend: { value: 12, label: "vs last month", positive: true },
      variant: "primary" as const
    },
    {
      title: "Course Enrollments",
      value: "8,456",
      icon: <BookOpen className="h-4 w-4" />,
      description: "Total enrollments",
      trend: { value: 8, label: "vs last month", positive: true },
      variant: "accent" as const
    },
    {
      title: "Avg. Engagement",
      value: "78%",
      icon: <Activity className="h-4 w-4" />,
      description: "Student participation",
      trend: { value: 5, label: "vs last month", positive: true },
      variant: "success" as const
    },
    {
      title: "Completion Rate",
      value: "94.2%",
      icon: <GraduationCap className="h-4 w-4" />,
      description: "Course completion"
    }
  ]

  const enrollmentData = [
    { month: "Aug", students: 2456, courses: 156 },
    { month: "Sep", students: 2567, courses: 162 },
    { month: "Oct", students: 2689, courses: 168 },
    { month: "Nov", students: 2734, courses: 171 },
    { month: "Dec", students: 2801, courses: 175 },
    { month: "Jan", students: 2847, courses: 178 }
  ]

  const performanceData = [
    { grade: "A", students: 567, percentage: 20 },
    { grade: "B", students: 854, percentage: 30 },
    { grade: "C", students: 969, percentage: 34 },
    { grade: "D", students: 341, percentage: 12 },
    { grade: "F", students: 116, percentage: 4 }
  ]

  const engagementData = [
    { week: "Week 1", announcements: 85, polls: 67, events: 45 },
    { week: "Week 2", announcements: 92, polls: 73, events: 52 },
    { week: "Week 3", announcements: 78, polls: 81, events: 48 },
    { week: "Week 4", announcements: 88, polls: 69, events: 56 }
  ]

  const departmentData = [
    { name: "Computer Science", students: 789, color: "#3b82f6" },
    { name: "Engineering", students: 654, color: "#10b981" },
    { name: "Business", students: 567, color: "#f59e0b" },
    { name: "Mathematics", students: 432, color: "#ef4444" },
    { name: "Biology", students: 405, color: "#8b5cf6" }
  ]

  const activityMetrics = [
    { metric: "Library Visits", current: 1234, previous: 1156, change: 6.7 },
    { metric: "Online Submissions", current: 2856, previous: 2634, change: 8.4 },
    { metric: "Forum Posts", current: 456, previous: 423, change: 7.8 },
    { metric: "Lab Bookings", current: 789, previous: 812, change: -2.8 },
    { metric: "Event Attendance", current: 345, previous: 298, change: 15.8 }
  ]

  const coursePerformance = [
    { course: "CS101 - Intro to Programming", enrolled: 156, completed: 148, dropRate: 5.1, avgGrade: 3.4 },
    { course: "MATH201 - Calculus II", enrolled: 134, completed: 125, dropRate: 6.7, avgGrade: 3.1 },
    { course: "ENG301 - Advanced Engineering", enrolled: 89, completed: 87, dropRate: 2.2, avgGrade: 3.6 },
    { course: "BUS205 - Marketing Fundamentals", enrolled: 178, completed: 169, dropRate: 5.1, avgGrade: 3.3 },
    { course: "BIO150 - General Biology", enrolled: 203, completed: 189, dropRate: 6.9, avgGrade: 3.2 }
  ]

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights into student activity, engagement, and performance
            </p>
          </div>
          <div className="flex gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 3 months</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enrollment Trends */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Enrollment Trends
                  </CardTitle>
                  <CardDescription>Student and course enrollment over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={enrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip />
                      <Area type="monotone" dataKey="students" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Department Distribution */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Department Distribution
                  </CardTitle>
                  <CardDescription>Student distribution across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percentage }) => `${name} ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="students"
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Activity Metrics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Student Activity Metrics
                </CardTitle>
                <CardDescription>Key activity indicators and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {activityMetrics.map((metric) => (
                    <div key={metric.metric} className="p-4 border rounded-lg">
                      <h4 className="font-medium text-sm text-muted-foreground">{metric.metric}</h4>
                      <p className="text-2xl font-bold text-foreground">{metric.current.toLocaleString()}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className={`h-3 w-3 ${metric.change >= 0 ? 'text-success' : 'text-destructive'}`} />
                        <span className={`text-xs ${metric.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                          {metric.change >= 0 ? '+' : ''}{metric.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Grade Distribution */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Grade Distribution
                  </CardTitle>
                  <CardDescription>Overall student performance distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="grade" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip />
                      <Bar dataKey="students" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Breakdown */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Performance Breakdown</CardTitle>
                  <CardDescription>Detailed grade analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {performanceData.map((grade) => (
                    <div key={grade.grade} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Grade {grade.grade}</span>
                        <span>{grade.students} students ({grade.percentage}%)</span>
                      </div>
                      <Progress value={grade.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Course Performance Table */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Performance Analysis
                </CardTitle>
                <CardDescription>Detailed performance metrics by course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursePerformance.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{course.course}</h4>
                        <Badge variant={course.avgGrade >= 3.5 ? "secondary" : course.avgGrade >= 3.0 ? "outline" : "destructive"}>
                          Avg: {course.avgGrade}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Enrolled:</span>
                          <p className="font-medium">{course.enrolled}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Completed:</span>
                          <p className="font-medium">{course.completed}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Drop Rate:</span>
                          <p className={`font-medium ${course.dropRate > 5 ? 'text-warning' : 'text-success'}`}>
                            {course.dropRate}%
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Completion:</span>
                          <p className="font-medium">{Math.round((course.completed / course.enrolled) * 100)}%</p>
                        </div>
                      </div>
                      <Progress value={(course.completed / course.enrolled) * 100} className="h-2 mt-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Engagement Trends */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Engagement Trends
                  </CardTitle>
                  <CardDescription>Student interaction with various features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="week" className="text-muted-foreground" />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip />
                      <Line type="monotone" dataKey="announcements" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="polls" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="events" stroke="#f59e0b" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Engagement Summary */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Engagement Summary</CardTitle>
                  <CardDescription>Weekly engagement metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Announcements</span>
                      </div>
                      <span className="font-medium">88 avg/week</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Poll Participation</span>
                      </div>
                      <span className="font-medium">72 avg/week</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm">Event Attendance</span>
                      </div>
                      <span className="font-medium">50 avg/week</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Top Engagement Activities</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Campus WiFi Poll</span>
                        <span className="font-medium">456 responses</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tech Symposium 2024</span>
                        <span className="font-medium">187 registrations</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Library Hours Survey</span>
                        <span className="font-medium">234 responses</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Growth Trends */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Growth Trends
                  </CardTitle>
                  <CardDescription>Year-over-year growth analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Student Growth</span>
                      <p className="text-xl font-bold text-success">+12.3%</p>
                      <span className="text-xs text-muted-foreground">vs last year</span>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Course Enrollment</span>
                      <p className="text-xl font-bold text-success">+8.7%</p>
                      <span className="text-xs text-muted-foreground">vs last year</span>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Completion Rate</span>
                      <p className="text-xl font-bold text-success">+2.4%</p>
                      <span className="text-xs text-muted-foreground">vs last year</span>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <span className="text-sm text-muted-foreground">Engagement Rate</span>
                      <p className="text-xl font-bold text-success">+15.6%</p>
                      <span className="text-xs text-muted-foreground">vs last year</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Predictive Insights */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Predictive Insights</CardTitle>
                  <CardDescription>AI-powered trend predictions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Enrollment Forecast</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Based on current trends, expect 15% increase in fall enrollment
                    </p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Performance Trend</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Student performance metrics show consistent improvement
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <h4 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">Engagement Alert</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Mathematics department shows declining engagement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}