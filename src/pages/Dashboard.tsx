import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  TrendingUp,
  Calendar,
  MessageSquare,
  AlertCircle,
  CheckCircle
} from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      icon: <GraduationCap className="h-4 w-4" />,
      description: "Active enrollments",
      trend: { value: 12, label: "vs last month", positive: true },
      variant: "primary" as const
    },
    {
      title: "Active Courses",
      value: "156",
      icon: <BookOpen className="h-4 w-4" />,
      description: "This semester",
      trend: { value: 8, label: "new courses", positive: true },
      variant: "accent" as const
    },
    {
      title: "Faculty Members",
      value: "89",
      icon: <Users className="h-4 w-4" />,
      description: "Teaching staff",
      trend: { value: 5, label: "new hires", positive: true }
    },
    {
      title: "Engagement Rate",
      value: "94.2%",
      icon: <TrendingUp className="h-4 w-4" />,
      description: "Student participation",
      trend: { value: 2.4, label: "vs last week", positive: true },
      variant: "success" as const
    }
  ]

  const recentActivities = [
    {
      type: "enrollment",
      message: "25 new students enrolled in Computer Science",
      time: "2 hours ago",
      icon: <CheckCircle className="h-4 w-4 text-success" />
    },
    {
      type: "course",
      message: "Advanced Mathematics course updated",
      time: "4 hours ago", 
      icon: <BookOpen className="h-4 w-4 text-primary" />
    },
    {
      type: "alert",
      message: "System maintenance scheduled for tonight",
      time: "6 hours ago",
      icon: <AlertCircle className="h-4 w-4 text-warning" />
    },
    {
      type: "message",
      message: "New announcement published to all students",
      time: "1 day ago",
      icon: <MessageSquare className="h-4 w-4 text-accent" />
    }
  ]

  const upcomingEvents = [
    {
      title: "Faculty Meeting",
      date: "Today, 3:00 PM",
      type: "meeting"
    },
    {
      title: "Semester Registration Deadline",
      date: "Tomorrow",
      type: "deadline"
    },
    {
      title: "New Student Orientation",
      date: "March 15, 2024",
      type: "event"
    },
    {
      title: "Final Exams Begin",
      date: "March 20, 2024", 
      type: "exam"
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's what's happening at your university.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <QuickActions />
          </div>

          {/* Upcoming Events */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={event.title}
                    className="flex justify-between items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                      event.type === 'deadline' ? 'bg-destructive/10 text-destructive' :
                      event.type === 'exam' ? 'bg-warning/10 text-warning' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {event.type}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}