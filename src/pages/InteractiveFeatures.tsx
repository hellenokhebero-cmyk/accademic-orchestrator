import { useState } from "react"
import { Plus, Vote, Calendar, Bell, Users, BarChart3, MessageCircle, Eye, Edit, Trash2, MoreHorizontal } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StatsCard } from "@/components/dashboard/stats-card"

export default function InteractiveFeatures() {
  const [activeTab, setActiveTab] = useState("polls")

  const stats = [
    {
      title: "Active Polls",
      value: "12",
      icon: <Vote className="h-4 w-4" />,
      description: "Currently running",
      trend: { value: 3, label: "new this week", positive: true },
      variant: "primary" as const
    },
    {
      title: "Upcoming Events",
      value: "8",
      icon: <Calendar className="h-4 w-4" />,
      description: "Next 30 days",
      trend: { value: 2, label: "this week", positive: true },
      variant: "accent" as const
    },
    {
      title: "Active Notices",
      value: "15",
      icon: <Bell className="h-4 w-4" />,
      description: "Published notices",
      variant: "success" as const
    },
    {
      title: "Engagement Rate",
      value: "78%",
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Student participation"
    }
  ]

  const polls = [
    {
      id: 1,
      title: "Campus WiFi Improvement Priority",
      description: "Help us prioritize WiFi improvements across campus areas",
      totalVotes: 456,
      options: [
        { text: "Library", votes: 189, percentage: 41 },
        { text: "Dormitories", votes: 156, percentage: 34 },
        { text: "Cafeteria", votes: 78, percentage: 17 },
        { text: "Lecture Halls", votes: 33, percentage: 8 }
      ],
      status: "Active",
      endDate: "2024-01-25",
      audience: "All Students"
    },
    {
      id: 2,
      title: "Preferred Study Hours for Library",
      description: "When would you like the library to have extended hours?",
      totalVotes: 234,
      options: [
        { text: "Late Night (until 2 AM)", votes: 98, percentage: 42 },
        { text: "Early Morning (from 6 AM)", votes: 67, percentage: 29 },
        { text: "Weekend Evenings", votes: 45, percentage: 19 },
        { text: "Current hours are fine", votes: 24, percentage: 10 }
      ],
      status: "Active",
      endDate: "2024-01-30",
      audience: "All Students"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium 2024",
      description: "Join us for a day of innovation, networking, and cutting-edge technology presentations from industry leaders.",
      date: "2024-02-15",
      time: "09:00 - 17:00",
      location: "Main Auditorium",
      type: "Academic",
      capacity: 300,
      registered: 187,
      status: "Registration Open",
      organizer: "Computer Science Department"
    },
    {
      id: 2,
      title: "Student Career Fair",
      description: "Meet with top employers and explore internship and job opportunities across various industries.",
      date: "2024-02-22",
      time: "10:00 - 16:00",
      location: "Student Center",
      type: "Career",
      capacity: 500,
      registered: 342,
      status: "Registration Open",
      organizer: "Career Services"
    },
    {
      id: 3,
      title: "Spring Cultural Festival",
      description: "Celebrate diversity with music, food, and performances from our international student community.",
      date: "2024-03-10",
      time: "12:00 - 20:00",
      location: "Campus Quad",
      type: "Cultural",
      capacity: 1000,
      registered: 678,
      status: "Registration Open",
      organizer: "Student Affairs"
    }
  ]

  const notices = [
    {
      id: 1,
      title: "Library System Maintenance",
      content: "The online library system will be unavailable for maintenance on January 20th from 2:00 AM to 6:00 AM.",
      type: "Maintenance",
      priority: "Medium",
      publishDate: "2024-01-15",
      expiryDate: "2024-01-21",
      status: "Active",
      views: 1234,
      audience: "All Students"
    },
    {
      id: 2,
      title: "New Parking Regulations",
      content: "Updated parking policies are now in effect. Please review the new guidelines and ensure your vehicle is properly registered.",
      type: "Policy",
      priority: "High",
      publishDate: "2024-01-10",
      expiryDate: "2024-02-10",
      status: "Active",
      views: 2156,
      audience: "All Students"
    },
    {
      id: 3,
      title: "Student Health Services Hours",
      content: "Student Health Services will have extended hours during exam week to support student wellness.",
      type: "Service",
      priority: "Low",
      publishDate: "2024-01-12",
      expiryDate: "2024-01-28",
      status: "Active",
      views: 567,
      audience: "All Students"
    }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Career": return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Cultural": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "Sports": return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Medium": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Low": return "bg-green-500/10 text-green-500 border-green-500/20"
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Interactive Features</h1>
            <p className="text-muted-foreground mt-2">
              Create polls, events, and notices to engage with the student community
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button variant="primary">
              <Plus className="h-4 w-4 mr-2" />
              Create New
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="polls">Polls & Surveys</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="notices">Notices</TabsTrigger>
          </TabsList>

          <TabsContent value="polls" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Create Poll */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Vote className="h-5 w-5 mr-2" />
                    Create Poll
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="poll-title">Poll Title</Label>
                    <Input id="poll-title" placeholder="Enter poll question..." />
                  </div>
                  <div>
                    <Label htmlFor="poll-description">Description</Label>
                    <Textarea id="poll-description" placeholder="Additional context..." className="min-h-20" />
                  </div>
                  <div>
                    <Label>Poll Options</Label>
                    <div className="space-y-2">
                      <Input placeholder="Option 1" />
                      <Input placeholder="Option 2" />
                      <Input placeholder="Option 3" />
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Option
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="poll-audience">Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="year1">First Year</SelectItem>
                        <SelectItem value="year2">Second Year</SelectItem>
                        <SelectItem value="year3">Third Year</SelectItem>
                        <SelectItem value="year4">Fourth Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="poll-end">End Date</Label>
                    <Input id="poll-end" type="date" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="anonymous" />
                    <Label htmlFor="anonymous">Anonymous voting</Label>
                  </div>
                  <Button className="w-full" variant="primary">
                    <Vote className="h-4 w-4 mr-2" />
                    Create Poll
                  </Button>
                </CardContent>
              </Card>

              {/* Active Polls */}
              <div className="lg:col-span-2 space-y-4">
                {polls.map((poll) => (
                  <Card key={poll.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{poll.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">{poll.status}</Badge>
                            <span>•</span>
                            <span>{poll.totalVotes} votes</span>
                            <span>•</span>
                            <span>Ends {poll.endDate}</span>
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Results
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Poll
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="h-4 w-4 mr-2" />
                              Analytics
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              End Poll
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{poll.description}</p>
                      
                      <div className="space-y-3">
                        {poll.options.map((option, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{option.text}</span>
                              <span className="font-medium">{option.votes} votes ({option.percentage}%)</span>
                            </div>
                            <Progress value={option.percentage} className="h-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{poll.audience}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          View Comments
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Create Event */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Create Event
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input id="event-title" placeholder="Enter event name..." />
                  </div>
                  <div>
                    <Label htmlFor="event-description">Description</Label>
                    <Textarea id="event-description" placeholder="Event details..." className="min-h-24" />
                  </div>
                  <div>
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="career">Career</SelectItem>
                        <SelectItem value="cultural">Cultural</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="event-date">Date</Label>
                      <Input id="event-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="event-time">Time</Label>
                      <Input id="event-time" type="time" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="event-location">Location</Label>
                    <Input id="event-location" placeholder="Event location..." />
                  </div>
                  <div>
                    <Label htmlFor="event-capacity">Capacity</Label>
                    <Input id="event-capacity" type="number" placeholder="Max attendees..." />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="registration-required" />
                    <Label htmlFor="registration-required">Registration required</Label>
                  </div>
                  <Button className="w-full" variant="primary">
                    <Calendar className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                </CardContent>
              </Card>

              {/* Events List */}
              <div className="lg:col-span-2 space-y-4">
                {events.map((event) => (
                  <Card key={event.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                            <span>•</span>
                            <span>{event.date} at {event.time}</span>
                            <span>•</span>
                            <span>{event.location}</span>
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Event
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="h-4 w-4 mr-2" />
                              Manage Attendees
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Cancel Event
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{event.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Organizer:</span>
                          <p className="font-medium">{event.organizer}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Registration:</span>
                          <p className="font-medium">{event.status}</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Registration Progress</span>
                          <span className="font-medium">
                            {event.registered} / {event.capacity}
                          </span>
                        </div>
                        <Progress value={(event.registered / event.capacity) * 100} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">
                          {Math.round((event.registered / event.capacity) * 100)}% Full
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notices" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Create Notice */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Create Notice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="notice-title">Notice Title</Label>
                    <Input id="notice-title" placeholder="Enter notice title..." />
                  </div>
                  <div>
                    <Label htmlFor="notice-content">Content</Label>
                    <Textarea id="notice-content" placeholder="Notice content..." className="min-h-32" />
                  </div>
                  <div>
                    <Label htmlFor="notice-type">Notice Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="policy">Policy</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="notice-priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="notice-expiry">Expiry Date</Label>
                    <Input id="notice-expiry" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="notice-audience">Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="undergrad">Undergraduates</SelectItem>
                        <SelectItem value="postgrad">Postgraduates</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="department">Specific Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full" variant="primary">
                    <Bell className="h-4 w-4 mr-2" />
                    Publish Notice
                  </Button>
                </CardContent>
              </Card>

              {/* Notices List */}
              <div className="lg:col-span-2 space-y-4">
                {notices.map((notice) => (
                  <Card key={notice.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{notice.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{notice.type}</Badge>
                            <Badge className={getPriorityColor(notice.priority)}>
                              {notice.priority}
                            </Badge>
                            <span>•</span>
                            <span>Published {notice.publishDate}</span>
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Notice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="h-4 w-4 mr-2" />
                              View Analytics
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Notice
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{notice.content}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Status:</span>
                          <p className="font-medium">{notice.status}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Views:</span>
                          <p className="font-medium">{notice.views}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Expires:</span>
                          <p className="font-medium">{notice.expiryDate}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{notice.audience}</span>
                        </div>
                        <Badge variant={notice.status === "Active" ? "secondary" : "outline"}>
                          {notice.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}