import { useState } from "react"
import { Plus, GraduationCap, Users, TrendingUp, Search, MoreHorizontal, Edit, Trash2, CheckCircle, XCircle, Eye } from "lucide-react"
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
import { StudentForm } from "@/components/students/student-form"
import { EnrollmentForm } from "@/components/students/enrollment-form"

export default function StudentOversight() {
  const [activeTab, setActiveTab] = useState("students")
  const [searchTerm, setSearchTerm] = useState("")
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

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
      title: "New Registrations",
      value: "156",
      icon: <Users className="h-4 w-4" />,
      description: "This semester",
      trend: { value: 8, label: "pending approval", positive: true },
      variant: "accent" as const
    },
    {
      title: "Graduation Rate",
      value: "94.2%",
      icon: <TrendingUp className="h-4 w-4" />,
      description: "4-year completion",
      trend: { value: 2.4, label: "vs last year", positive: true },
      variant: "success" as const
    },
    {
      title: "Average GPA",
      value: "3.42",
      icon: <TrendingUp className="h-4 w-4" />,
      description: "Overall performance"
    }
  ]

  const students = [
    {
      id: 1,
      studentId: "STU001",
      name: "Emma Johnson",
      email: "emma.johnson@student.edu",
      program: "Computer Science",
      year: "Junior",
      gpa: 3.85,
      status: "Active",
      enrolledCourses: 5,
      creditsCompleted: 78
    },
    {
      id: 2,
      studentId: "STU002", 
      name: "Michael Chen",
      email: "michael.chen@student.edu",
      program: "Business Administration",
      year: "Senior",
      gpa: 3.62,
      status: "Active",
      enrolledCourses: 4,
      creditsCompleted: 102
    },
    {
      id: 3,
      studentId: "STU003",
      name: "Sarah Williams",
      email: "sarah.williams@student.edu",
      program: "Biology",
      year: "Sophomore",
      gpa: 3.91,
      status: "Active",
      enrolledCourses: 6,
      creditsCompleted: 45
    },
    {
      id: 4,
      studentId: "STU004",
      name: "David Rodriguez",
      email: "david.rodriguez@student.edu",
      program: "Engineering",
      year: "Freshman",
      gpa: 3.25,
      status: "Probation",
      enrolledCourses: 4,
      creditsCompleted: 12
    }
  ]

  const enrollmentRequests = [
    {
      id: 1,
      student: "Emma Johnson",
      studentId: "STU001",
      course: "CS301 - Advanced Algorithms",
      requestDate: "2024-01-15",
      status: "Pending",
      reason: "Prerequisites met"
    },
    {
      id: 2,
      student: "Michael Chen",
      studentId: "STU002",
      course: "BUS450 - Strategic Management",
      requestDate: "2024-01-14",
      status: "Pending",
      reason: "Final semester requirement"
    },
    {
      id: 3,
      student: "Sarah Williams",
      studentId: "STU003",
      course: "BIO305 - Molecular Biology",
      requestDate: "2024-01-13",
      status: "Approved",
      reason: "Regular enrollment"
    },
    {
      id: 4,
      student: "David Rodriguez",
      studentId: "STU004",
      course: "MATH201 - Calculus II",
      requestDate: "2024-01-12",
      status: "Declined",
      reason: "Missing prerequisites"
    }
  ]

  const academicProgress = [
    {
      id: 1,
      student: "Emma Johnson",
      program: "Computer Science",
      year: "Junior",
      completedCredits: 78,
      requiredCredits: 120,
      currentGPA: 3.85,
      semester: "Fall 2024",
      onTrack: true
    },
    {
      id: 2,
      student: "Michael Chen", 
      program: "Business Administration",
      year: "Senior",
      completedCredits: 102,
      requiredCredits: 120,
      currentGPA: 3.62,
      semester: "Fall 2024",
      onTrack: true
    },
    {
      id: 3,
      student: "Sarah Williams",
      program: "Biology",
      year: "Sophomore", 
      completedCredits: 45,
      requiredCredits: 120,
      currentGPA: 3.91,
      semester: "Fall 2024",
      onTrack: true
    },
    {
      id: 4,
      student: "David Rodriguez",
      program: "Engineering",
      year: "Freshman",
      completedCredits: 12,
      requiredCredits: 128,
      currentGPA: 3.25,
      semester: "Fall 2024",
      onTrack: false
    }
  ]

  const handleEditStudent = (student: any) => {
    setSelectedStudent(student)
    setShowStudentForm(true)
  }

  const handleApproveEnrollment = (id: number) => {
    // Handle enrollment approval logic
  }

  const handleDeclineEnrollment = (id: number) => {
    // Handle enrollment decline logic
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Oversight</h1>
            <p className="text-muted-foreground mt-2">
              Monitor student progress, manage enrollments, and track academic performance
            </p>
          </div>
          <Button variant="primary" onClick={() => setShowStudentForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Student
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
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="enrollments">Enrollment Requests</TabsTrigger>
            <TabsTrigger value="progress">Academic Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowStudentForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>GPA</TableHead>
                    <TableHead>Enrolled Courses</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.studentId}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{student.program}</TableCell>
                      <TableCell>{student.year}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${student.gpa >= 3.5 ? 'text-success' : student.gpa >= 3.0 ? 'text-primary' : 'text-warning'}`}>
                          {student.gpa}
                        </span>
                      </TableCell>
                      <TableCell>{student.enrolledCourses}</TableCell>
                      <TableCell>
                        <Badge variant={student.status === "Active" ? "secondary" : "destructive"}>
                          {student.status}
                        </Badge>
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
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEditStudent(student)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Student
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

          <TabsContent value="enrollments" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search enrollment requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowEnrollmentForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Manual Enrollment
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrollmentRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{request.student}</p>
                          <p className="text-sm text-muted-foreground">{request.studentId}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{request.course}</TableCell>
                      <TableCell>{request.requestDate}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>
                        <Badge variant={
                          request.status === "Approved" ? "secondary" :
                          request.status === "Pending" ? "outline" : "destructive"
                        }>
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {request.status === "Pending" && (
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleApproveEnrollment(request.id)}
                              className="text-success border-success hover:bg-success hover:text-success-foreground"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeclineEnrollment(request.id)}
                              className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Decline
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {academicProgress.map((progress) => (
                <Card key={progress.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{progress.student}</CardTitle>
                        <CardDescription>{progress.program} - {progress.year}</CardDescription>
                      </div>
                      <Badge variant={progress.onTrack ? "secondary" : "destructive"}>
                        {progress.onTrack ? "On Track" : "At Risk"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Current GPA:</span>
                        <p className={`font-medium ${progress.currentGPA >= 3.5 ? 'text-success' : progress.currentGPA >= 3.0 ? 'text-primary' : 'text-warning'}`}>
                          {progress.currentGPA}
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Semester:</span>
                        <p className="font-medium">{progress.semester}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Credits Progress</span>
                        <span className="font-medium">
                          {progress.completedCredits} / {progress.requiredCredits}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${progress.onTrack ? 'bg-success' : 'bg-warning'}`}
                          style={{ width: `${(progress.completedCredits / progress.requiredCredits) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.round((progress.completedCredits / progress.requiredCredits) * 100)}% Complete
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Forms */}
        {showStudentForm && (
          <StudentForm 
            onClose={() => {
              setShowStudentForm(false)
              setSelectedStudent(null)
            }}
            student={selectedStudent}
          />
        )}
        {showEnrollmentForm && <EnrollmentForm onClose={() => setShowEnrollmentForm(false)} />}
      </div>
    </DashboardLayout>
  )
}