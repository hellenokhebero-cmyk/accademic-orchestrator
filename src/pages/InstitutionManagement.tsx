import { useState } from "react"
import { Plus, Building2, Users, GraduationCap, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react"
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
import { InstitutionProfileForm } from "@/components/institution/institution-profile-form"
import { SchoolForm } from "@/components/institution/school-form"
import { DepartmentForm } from "@/components/institution/department-form"
import { StaffForm } from "@/components/institution/staff-form"

export default function InstitutionManagement() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [showSchoolForm, setShowSchoolForm] = useState(false)
  const [showDepartmentForm, setShowDepartmentForm] = useState(false)
  const [showStaffForm, setShowStaffForm] = useState(false)

  const stats = [
    {
      title: "Schools",
      value: "8",
      icon: <Building2 className="h-4 w-4" />,
      description: "Academic schools",
      variant: "primary" as const
    },
    {
      title: "Departments",
      value: "42",
      icon: <GraduationCap className="h-4 w-4" />,
      description: "Total departments",
      variant: "accent" as const
    },
    {
      title: "Faculty Members",
      value: "156",
      icon: <Users className="h-4 w-4" />,
      description: "Teaching staff",
      variant: "success" as const
    },
    {
      title: "Support Staff",
      value: "89",
      icon: <Users className="h-4 w-4" />,
      description: "Administrative staff"
    }
  ]

  const schools = [
    { id: 1, name: "School of Engineering", dean: "Dr. Sarah Johnson", departments: 8, faculty: 45, established: "1985" },
    { id: 2, name: "School of Business", dean: "Prof. Michael Chen", departments: 6, faculty: 32, established: "1990" },
    { id: 3, name: "School of Medicine", dean: "Dr. Emily Rodriguez", departments: 12, faculty: 78, established: "1978" },
    { id: 4, name: "School of Arts & Sciences", dean: "Prof. David Wilson", departments: 16, faculty: 89, established: "1965" }
  ]

  const departments = [
    { id: 1, name: "Computer Science", school: "Engineering", head: "Dr. Alex Thompson", faculty: 12, students: 450 },
    { id: 2, name: "Mechanical Engineering", school: "Engineering", head: "Prof. Lisa Chang", faculty: 15, students: 380 },
    { id: 3, name: "Marketing", school: "Business", head: "Dr. James Miller", faculty: 8, students: 220 },
    { id: 4, name: "Internal Medicine", school: "Medicine", head: "Dr. Robert Brown", faculty: 18, students: 160 }
  ]

  const staff = [
    { id: 1, name: "Dr. Sarah Johnson", role: "Dean", department: "Engineering", email: "s.johnson@university.edu", status: "Active" },
    { id: 2, name: "Prof. Michael Chen", role: "Professor", department: "Business", email: "m.chen@university.edu", status: "Active" },
    { id: 3, name: "Dr. Emily Rodriguez", role: "Dean", department: "Medicine", email: "e.rodriguez@university.edu", status: "Active" },
    { id: 4, name: "Alex Thompson", role: "Assistant Professor", department: "Computer Science", email: "a.thompson@university.edu", status: "Active" }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Institution Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage your university's organizational structure and personnel
            </p>
          </div>
          <Button variant="primary" onClick={() => setShowProfileForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Edit Profile
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>University Profile</CardTitle>
                  <CardDescription>Basic information about your institution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">University of Excellence</h3>
                    <p className="text-sm text-muted-foreground">Est. 1965</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Address:</strong> 123 University Ave, Academic City, AC 12345</p>
                    <p className="text-sm"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="text-sm"><strong>Email:</strong> info@university.edu</p>
                    <p className="text-sm"><strong>Website:</strong> www.university.edu</p>
                  </div>
                  <Button variant="outline" onClick={() => setShowProfileForm(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>Institution overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Students</span>
                    <span className="font-medium">12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Graduation Rate</span>
                    <span className="font-medium">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Student-Faculty Ratio</span>
                    <span className="font-medium">15:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Accreditation</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schools" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search schools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowSchoolForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add School
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School Name</TableHead>
                    <TableHead>Dean</TableHead>
                    <TableHead>Departments</TableHead>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Established</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schools.map((school) => (
                    <TableRow key={school.id}>
                      <TableCell className="font-medium">{school.name}</TableCell>
                      <TableCell>{school.dean}</TableCell>
                      <TableCell>{school.departments}</TableCell>
                      <TableCell>{school.faculty}</TableCell>
                      <TableCell>{school.established}</TableCell>
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
                              Edit
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

          <TabsContent value="departments" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowDepartmentForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Department
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Department Head</TableHead>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departments.map((dept) => (
                    <TableRow key={dept.id}>
                      <TableCell className="font-medium">{dept.name}</TableCell>
                      <TableCell>{dept.school}</TableCell>
                      <TableCell>{dept.head}</TableCell>
                      <TableCell>{dept.faculty}</TableCell>
                      <TableCell>{dept.students}</TableCell>
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
                              Edit
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

          <TabsContent value="staff" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search staff..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="primary" onClick={() => setShowStaffForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Staff Member
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staff.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Badge variant={member.status === "Active" ? "secondary" : "destructive"}>
                          {member.status}
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
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
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
        </Tabs>

        {/* Forms */}
        {showProfileForm && <InstitutionProfileForm onClose={() => setShowProfileForm(false)} />}
        {showSchoolForm && <SchoolForm onClose={() => setShowSchoolForm(false)} />}
        {showDepartmentForm && <DepartmentForm onClose={() => setShowDepartmentForm(false)} />}
        {showStaffForm && <StaffForm onClose={() => setShowStaffForm(false)} />}
      </div>
    </DashboardLayout>
  )
}