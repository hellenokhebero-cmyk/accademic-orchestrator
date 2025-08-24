import { useState } from "react"
import { Plus, BookOpen, Users, Calendar, Search, MoreHorizontal, Edit, Trash2, Clock, GraduationCap } from "lucide-react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StatsCard } from "@/components/dashboard/stats-card"
import { CourseForm } from "@/components/courses/course-form"
import { ScheduleForm } from "@/components/courses/schedule-form"

export default function CourseManagement() {
  const [activeTab, setActiveTab] = useState("courses")
  const [searchTerm, setSearchTerm] = useState("")
  const [showCourseForm, setShowCourseForm] = useState(false)
  const [showScheduleForm, setShowScheduleForm] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const stats = [
    {
      title: "Active Courses",
      value: "156",
      icon: <BookOpen className="h-4 w-4" />,
      description: "This semester",
      trend: { value: 8, label: "new courses", positive: true },
      variant: "primary" as const
    },
    {
      title: "Total Programs",
      value: "24",
      icon: <GraduationCap className="h-4 w-4" />,
      description: "Degree programs",
      variant: "accent" as const
    },
    {
      title: "Scheduled Classes",
      value: "342",
      icon: <Calendar className="h-4 w-4" />,
      description: "Weekly sessions",
      variant: "success" as const
    },
    {
      title: "Avg Class Size",
      value: "28",
      icon: <Users className="h-4 w-4" />,
      description: "Students per class"
    }
  ]

  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Computer Science",
      department: "Computer Science",
      instructor: "Dr. Alex Thompson",
      credits: 3,
      capacity: 40,
      enrolled: 35,
      semester: "Fall 2024",
      status: "Active"
    },
    {
      id: 2,
      code: "MATH201",
      name: "Calculus II",
      department: "Mathematics",
      instructor: "Prof. Sarah Wilson",
      credits: 4,
      capacity: 30,
      enrolled: 28,
      semester: "Fall 2024",
      status: "Active"
    },
    {
      id: 3,
      code: "ENG102",
      name: "English Composition",
      department: "English",
      instructor: "Dr. Michael Brown",
      credits: 3,
      capacity: 25,
      enrolled: 22,
      semester: "Fall 2024",
      status: "Active"
    },
    {
      id: 4,
      code: "PHYS301",
      name: "Quantum Physics",
      department: "Physics",
      instructor: "Dr. Lisa Chang",
      credits: 4,
      capacity: 20,
      enrolled: 18,
      semester: "Fall 2024",
      status: "Active"
    }
  ]

  const programs = [
    {
      id: 1,
      name: "Bachelor of Computer Science",
      department: "Computer Science",
      duration: "4 years",
      credits: 120,
      students: 450,
      type: "Undergraduate"
    },
    {
      id: 2,
      name: "Master of Business Administration",
      department: "Business",
      duration: "2 years",
      credits: 60,
      students: 220,
      type: "Graduate"
    },
    {
      id: 3,
      name: "Doctor of Medicine",
      department: "Medicine",
      duration: "4 years",
      credits: 160,
      students: 160,
      type: "Professional"
    }
  ]

  const schedules = [
    {
      id: 1,
      course: "CS101",
      courseName: "Introduction to Computer Science",
      instructor: "Dr. Alex Thompson",
      days: "MWF",
      time: "09:00 - 10:00",
      room: "CS-101",
      building: "Computer Science Building"
    },
    {
      id: 2,
      course: "MATH201",
      courseName: "Calculus II",
      instructor: "Prof. Sarah Wilson",
      days: "TTh",
      time: "11:00 - 12:30",
      room: "MATH-205",
      building: "Mathematics Hall"
    },
    {
      id: 3,
      course: "ENG102",
      courseName: "English Composition",
      instructor: "Dr. Michael Brown",
      days: "MWF",
      time: "14:00 - 15:00",
      room: "ENG-301",
      building: "Liberal Arts Building"
    }
  ]

  const handleEditCourse = (course: any) => {
    setSelectedCourse(course)
    setShowCourseForm(true)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Course Management</h1>
            <p className="text-muted-foreground mt-2">
              Create, manage, and schedule courses and academic programs
            </p>
          </div>
          <Button variant="primary" onClick={() => setShowCourseForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
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
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="schedules">Schedules</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowCourseForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Enrollment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.code}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.department}</TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>{course.credits}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>{course.enrolled}/{course.capacity}</span>
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{course.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditCourse(course)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              Schedule
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Program
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <CardDescription>{program.department}</CardDescription>
                      </div>
                      <Badge variant="outline">{program.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <p className="font-medium">{program.duration}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Credits:</span>
                        <p className="font-medium">{program.credits}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {program.students} students enrolled
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Program
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedules" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search schedules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowScheduleForm(true)}>
                <Clock className="h-4 w-4 mr-2" />
                Schedule Class
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">{schedule.course}</TableCell>
                      <TableCell>{schedule.courseName}</TableCell>
                      <TableCell>{schedule.instructor}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{schedule.days}</Badge>
                      </TableCell>
                      <TableCell>{schedule.time}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{schedule.room}</p>
                          <p className="text-sm text-muted-foreground">{schedule.building}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Schedule
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Forms */}
        {showCourseForm && (
          <CourseForm 
            onClose={() => {
              setShowCourseForm(false)
              setSelectedCourse(null)
            }}
            course={selectedCourse}
          />
        )}
        {showScheduleForm && <ScheduleForm onClose={() => setShowScheduleForm(false)} />}
      </div>
    </DashboardLayout>
  )
}