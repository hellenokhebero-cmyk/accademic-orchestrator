import { useState } from "react"
import { Plus, Send, MessageSquare, Bell, Bot, Calendar, Users } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Communications() {
  const [activeTab, setActiveTab] = useState("announcements")

  const announcements = [
    {
      id: 1,
      title: "Mid-term Exam Schedule Released",
      content: "The mid-term examination schedule for Fall 2024 semester has been published. Please check your student portal for detailed timings.",
      author: "Academic Office",
      date: "2024-01-15",
      priority: "high",
      audience: "All Students",
      status: "Published"
    },
    {
      id: 2,
      title: "Library Extended Hours",
      content: "Starting next week, the library will be open 24/7 during exam period to support student studies.",
      author: "Library Services",
      date: "2024-01-14",
      priority: "medium",
      audience: "All Students",
      status: "Published"
    }
  ]

  const messages = [
    {
      id: 1,
      from: "Emma Johnson",
      subject: "Course Registration Issue",
      preview: "I'm having trouble registering for CS301...",
      timestamp: "2 hours ago",
      status: "unread",
      priority: "medium"
    },
    {
      id: 2,
      from: "Michael Chen",
      subject: "Transcript Request",
      preview: "Could you please help me with my transcript...",
      timestamp: "5 hours ago",
      status: "read",
      priority: "low"
    }
  ]

  const botResponses = [
    {
      id: 1,
      query: "When is the deadline for course registration?",
      response: "Course registration deadline is January 31st, 2024. You can register through the student portal.",
      category: "Registration",
      frequency: 45
    },
    {
      id: 2,
      query: "How do I access the library resources?",
      response: "You can access library resources using your student ID and password through the library portal.",
      category: "Library",
      frequency: 32
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Communications</h1>
            <p className="text-muted-foreground mt-2">
              Manage announcements, messages, and AI-powered communication tools
            </p>
          </div>
          <Button variant="primary">
            <Plus className="h-4 w-4 mr-2" />
            New Announcement
          </Button>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="ai-bot">AI Bot</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & Reminders</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Create Announcement */}
              <Card className="lg:col-span-1 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Create Announcement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Announcement title..." />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Write your announcement..." className="min-h-32" />
                  </div>
                  <div>
                    <Label htmlFor="audience">Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="freshmen">Freshmen</SelectItem>
                        <SelectItem value="sophomores">Sophomores</SelectItem>
                        <SelectItem value="juniors">Juniors</SelectItem>
                        <SelectItem value="seniors">Seniors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
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
                  <Button className="w-full" variant="primary">
                    <Send className="h-4 w-4 mr-2" />
                    Publish Announcement
                  </Button>
                </CardContent>
              </Card>

              {/* Announcements List */}
              <div className="lg:col-span-2 space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <span>{announcement.author}</span>
                            <span>•</span>
                            <span>{announcement.date}</span>
                            <span>•</span>
                            <span>{announcement.audience}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={announcement.priority === "high" ? "destructive" : "secondary"}>
                            {announcement.priority}
                          </Badge>
                          <Badge variant="outline">{announcement.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{announcement.content}</p>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Analytics</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Messages List */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Recent Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{message.from}</h4>
                          {message.status === "unread" && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      </div>
                      <h5 className="font-medium text-sm mb-1">{message.subject}</h5>
                      <p className="text-sm text-muted-foreground">{message.preview}</p>
                      <Badge variant="outline" className="mt-2">{message.priority}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Compose Message */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Compose Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="recipient">Recipient</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipient type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Student</SelectItem>
                        <SelectItem value="group">Student Group</SelectItem>
                        <SelectItem value="class">Entire Class</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message-subject">Subject</Label>
                    <Input id="message-subject" placeholder="Message subject..." />
                  </div>
                  <div>
                    <Label htmlFor="message-content">Message</Label>
                    <Textarea id="message-content" placeholder="Type your message..." className="min-h-32" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="urgent" />
                    <Label htmlFor="urgent">Mark as urgent</Label>
                  </div>
                  <Button className="w-full" variant="primary">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-bot" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bot Configuration */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2" />
                    AI Bot Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure automatic responses for common student queries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="bot-enabled" defaultChecked />
                    <Label htmlFor="bot-enabled">Enable AI Bot</Label>
                  </div>
                  <div>
                    <Label htmlFor="bot-name">Bot Name</Label>
                    <Input id="bot-name" defaultValue="University Assistant" />
                  </div>
                  <div>
                    <Label htmlFor="response-time">Response Time (seconds)</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 seconds</SelectItem>
                        <SelectItem value="30">30 seconds</SelectItem>
                        <SelectItem value="60">1 minute</SelectItem>
                        <SelectItem value="300">5 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fallback">Fallback Message</Label>
                    <Textarea 
                      id="fallback" 
                      defaultValue="I'm sorry, I couldn't understand your question. Please contact our support team for assistance."
                      className="min-h-20"
                    />
                  </div>
                  <Button className="w-full" variant="primary">Save Configuration</Button>
                </CardContent>
              </Card>

              {/* Common Responses */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Common Auto-Responses</CardTitle>
                  <CardDescription>
                    Most frequently triggered bot responses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {botResponses.map((response) => (
                    <div key={response.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{response.category}</Badge>
                        <span className="text-xs text-muted-foreground">{response.frequency} times</span>
                      </div>
                      <h4 className="font-medium text-sm mb-2">{response.query}</h4>
                      <p className="text-sm text-muted-foreground">{response.response}</p>
                      <div className="flex justify-end gap-2 mt-3">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Disable</Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Response
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Create Alert */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Create Alert/Reminder
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="alert-type">Alert Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select alert type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deadline">Deadline Reminder</SelectItem>
                        <SelectItem value="exam">Exam Reminder</SelectItem>
                        <SelectItem value="class">Class Update</SelectItem>
                        <SelectItem value="event">Event Notification</SelectItem>
                        <SelectItem value="emergency">Emergency Alert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="alert-title">Title</Label>
                    <Input id="alert-title" placeholder="Alert title..." />
                  </div>
                  <div>
                    <Label htmlFor="alert-message">Message</Label>
                    <Textarea id="alert-message" placeholder="Alert message..." className="min-h-24" />
                  </div>
                  <div>
                    <Label htmlFor="send-time">Send Time</Label>
                    <Input id="send-time" type="datetime-local" />
                  </div>
                  <div>
                    <Label htmlFor="alert-audience">Audience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="class">Specific Class</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                        <SelectItem value="year">Year Group</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="repeat" />
                    <Label htmlFor="repeat">Repeat alert</Label>
                  </div>
                  <Button className="w-full" variant="primary">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Alert
                  </Button>
                </CardContent>
              </Card>

              {/* Scheduled Alerts */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Scheduled Alerts</CardTitle>
                  <CardDescription>
                    Upcoming automatic alerts and reminders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">Deadline</Badge>
                      <span className="text-xs text-muted-foreground">In 2 hours</span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">Assignment Submission Deadline</h4>
                    <p className="text-sm text-muted-foreground">Reminder for CS301 assignment due tonight</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">156 students</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">Exam</Badge>
                      <span className="text-xs text-muted-foreground">Tomorrow 9:00 AM</span>
                    </div>
                    <h4 className="font-medium text-sm mb-1">Midterm Exam Reminder</h4>
                    <p className="text-sm text-muted-foreground">Mathematics midterm exam location update</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">89 students</span>
                    </div>
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