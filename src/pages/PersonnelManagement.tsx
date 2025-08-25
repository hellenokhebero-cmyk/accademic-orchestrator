import { useState } from "react"
import { Plus, Users, Shield, UserCheck, MoreHorizontal, Edit, Trash2, Eye, Filter } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StatsCard } from "@/components/dashboard/stats-card"

export default function PersonnelManagement() {
  const [activeTab, setActiveTab] = useState("staff")
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    {
      title: "Total Staff",
      value: "247",
      icon: <Users className="h-4 w-4" />,
      description: "Active personnel",
      trend: { value: 5, label: "new this month", positive: true },
      variant: "primary" as const
    },
    {
      title: "Faculty Members",
      value: "89",
      icon: <UserCheck className="h-4 w-4" />,
      description: "Teaching staff",
      trend: { value: 3, label: "new hires", positive: true },
      variant: "accent" as const
    },
    {
      title: "Admin Staff",
      value: "58",
      icon: <Shield className="h-4 w-4" />,
      description: "Administrative roles",
      variant: "success" as const
    },
    {
      title: "Support Staff",
      value: "100",
      icon: <Users className="h-4 w-4" />,
      description: "Support personnel"
    }
  ]

  const staffMembers = [
    {
      id: 1,
      employeeId: "EMP001",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@university.edu",
      role: "Dean",
      department: "Computer Science",
      permissions: ["All Access", "User Management", "Course Management"],
      status: "Active",
      joinDate: "2020-01-15",
      lastLogin: "2024-01-15 09:30"
    },
    {
      id: 2,
      employeeId: "EMP002",
      name: "Prof. Michael Chen",
      email: "michael.chen@university.edu",
      role: "Lecturer",
      department: "Computer Science",
      permissions: ["Course Management", "Student Records"],
      status: "Active",
      joinDate: "2021-08-20",
      lastLogin: "2024-01-15 11:15"
    },
    {
      id: 3,
      employeeId: "EMP003",
      name: "Ms. Emily Rodriguez",
      email: "emily.rodriguez@university.edu",
      role: "Registrar",
      department: "Academic Affairs",
      permissions: ["Student Records", "Enrollment Management"],
      status: "Active",
      joinDate: "2019-03-10",
      lastLogin: "2024-01-15 08:45"
    },
    {
      id: 4,
      employeeId: "EMP004",
      name: "Dr. David Wilson",
      email: "david.wilson@university.edu",
      role: "Department Head",
      department: "Mathematics",
      permissions: ["Department Management", "Course Management", "Staff Management"],
      status: "On Leave",
      joinDate: "2018-09-01",
      lastLogin: "2024-01-10 16:20"
    }
  ]

  const roles = [
    {
      id: 1,
      name: "Dean",
      description: "Senior administrative position with oversight of academic departments",
      permissions: ["All Access", "User Management", "Course Management", "Financial Reports"],
      userCount: 3,
      level: "Executive"
    },
    {
      id: 2,
      name: "Department Head",
      description: "Leadership role for specific academic departments",
      permissions: ["Department Management", "Course Management", "Staff Management"],
      userCount: 8,
      level: "Management"
    },
    {
      id: 3,
      name: "Lecturer",
      description: "Teaching faculty with course instruction responsibilities",
      permissions: ["Course Management", "Student Records", "Grade Management"],
      userCount: 67,
      level: "Faculty"
    },
    {
      id: 4,
      name: "Registrar",
      description: "Administrative role managing student records and enrollment",
      permissions: ["Student Records", "Enrollment Management", "Transcript Management"],
      userCount: 12,
      level: "Administrative"
    },
    {
      id: 5,
      name: "IT Support",
      description: "Technical support for university systems and infrastructure",
      permissions: ["System Management", "User Support", "Technical Reports"],
      userCount: 15,
      level: "Support"
    }
  ]

  const permissions = [
    { id: 1, name: "All Access", description: "Complete system access", category: "System" },
    { id: 2, name: "User Management", description: "Create and manage user accounts", category: "Administration" },
    { id: 3, name: "Course Management", description: "Create and modify courses", category: "Academic" },
    { id: 4, name: "Student Records", description: "View and edit student information", category: "Academic" },
    { id: 5, name: "Grade Management", description: "Enter and modify grades", category: "Academic" },
    { id: 6, name: "Enrollment Management", description: "Manage student enrollments", category: "Academic" },
    { id: 7, name: "Financial Reports", description: "Access financial data and reports", category: "Financial" },
    { id: 8, name: "Staff Management", description: "Manage staff within department", category: "Administration" },
    { id: 9, name: "System Management", description: "Configure system settings", category: "Technical" },
    { id: 10, name: "Department Management", description: "Oversee department operations", category: "Administration" }
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Dean": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "Department Head": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Lecturer": return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Registrar": return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Personnel Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage staff accounts, roles, and permissions across the university
            </p>
          </div>
          <Button variant="primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff Member
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
            <TabsTrigger value="staff">Staff Directory</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="permissions">Permission Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="staff" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Search staff..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80"
                />
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="dean">Dean</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                    <SelectItem value="registrar">Registrar</SelectItem>
                    <SelectItem value="support">Support Staff</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="eng">Engineering</SelectItem>
                    <SelectItem value="admin">Administration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Staff Member
              </Button>
            </div>

            <Card className="shadow-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staffMembers.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell className="font-medium">{staff.employeeId}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{staff.name}</p>
                          <p className="text-sm text-muted-foreground">{staff.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getRoleColor(staff.role)}>
                          {staff.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{staff.department}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {staff.permissions.slice(0, 2).map((permission) => (
                            <Badge key={permission} variant="outline" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                          {staff.permissions.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{staff.permissions.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={staff.status === "Active" ? "secondary" : "outline"}>
                          {staff.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {staff.lastLogin}
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
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Shield className="h-4 w-4 mr-2" />
                              Manage Permissions
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Deactivate
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

          <TabsContent value="roles" className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Manage role definitions and their associated permissions</p>
              <Button variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Role
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {roles.map((role) => (
                <Card key={role.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{role.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{role.level}</Badge>
                          <span>•</span>
                          <span>{role.userCount} users</span>
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
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Role
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            View Users
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Role
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Permissions</h4>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.map((permission) => (
                          <Badge key={permission} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Configure individual permission settings and access controls</p>
              <Button variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Permission
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {Object.entries(
                permissions.reduce((acc, permission) => {
                  if (!acc[permission.category]) {
                    acc[permission.category] = []
                  }
                  acc[permission.category].push(permission)
                  return acc
                }, {} as Record<string, typeof permissions>)
              ).map(([category, categoryPermissions]) => (
                <Card key={category} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{category} Permissions</CardTitle>
                    <CardDescription>
                      Manage {category.toLowerCase()} access controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categoryPermissions.map((permission) => (
                        <div key={permission.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-sm">{permission.name}</h4>
                            <p className="text-xs text-muted-foreground">{permission.description}</p>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Permission
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Users className="h-4 w-4 mr-2" />
                                View Users
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete Permission
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}