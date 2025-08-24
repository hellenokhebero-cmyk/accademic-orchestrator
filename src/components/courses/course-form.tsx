import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

interface CourseFormProps {
  onClose: () => void
  course?: any
}

export function CourseForm({ onClose, course }: CourseFormProps) {
  const [formData, setFormData] = useState({
    code: course?.code || "",
    name: course?.name || "",
    description: course?.description || "",
    department: course?.department || "",
    school: course?.school || "",
    instructor: course?.instructor || "",
    credits: course?.credits || "",
    capacity: course?.capacity || "",
    prerequisites: course?.prerequisites || "",
    semester: course?.semester || "",
    level: course?.level || "",
    type: course?.type || "",
    hasLab: course?.hasLab || false,
    isRequired: course?.isRequired || false,
    syllabus: course?.syllabus || "",
    learningOutcomes: course?.learningOutcomes || ""
  })

  const departments = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology", 
    "English",
    "History",
    "Psychology",
    "Business Administration",
    "Engineering"
  ]

  const schools = [
    "School of Engineering",
    "School of Business",
    "School of Arts & Sciences",
    "School of Medicine",
    "School of Education"
  ]

  const instructors = [
    "Dr. Alex Thompson",
    "Prof. Sarah Wilson",
    "Dr. Michael Brown",
    "Dr. Lisa Chang",
    "Prof. Robert Davis",
    "Dr. Emily Rodriguez"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: course ? "Course Updated" : "Course Created",
      description: `Course has been successfully ${course ? "updated" : "created"}.`,
    })
    onClose()
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{course ? "Edit Course" : "Create New Course"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="code">Course Code *</Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleChange("code", e.target.value)}
                  placeholder="e.g., CS101"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Course Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="e.g., Introduction to Computer Science"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Brief description of the course..."
                rows={3}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Academic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="school">School *</Label>
                <Select value={formData.school} onValueChange={(value) => handleChange("school", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a school" />
                  </SelectTrigger>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem key={school} value={school}>
                        {school}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="credits">Credits *</Label>
                <Input
                  id="credits"
                  type="number"
                  value={formData.credits}
                  onChange={(e) => handleChange("credits", e.target.value)}
                  min="1"
                  max="6"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity *</Label>
                <Input
                  id="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => handleChange("capacity", e.target.value)}
                  min="1"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select value={formData.level} onValueChange={(value) => handleChange("level", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 - Freshman</SelectItem>
                    <SelectItem value="200">200 - Sophomore</SelectItem>
                    <SelectItem value="300">300 - Junior</SelectItem>
                    <SelectItem value="400">400 - Senior</SelectItem>
                    <SelectItem value="500">500 - Graduate</SelectItem>
                    <SelectItem value="600">600 - Advanced Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Select value={formData.semester} onValueChange={(value) => handleChange("semester", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fall 2024">Fall 2024</SelectItem>
                    <SelectItem value="Spring 2025">Spring 2025</SelectItem>
                    <SelectItem value="Summer 2024">Summer 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Teaching Assignment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Select value={formData.instructor} onValueChange={(value) => handleChange("instructor", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    {instructors.map((instructor) => (
                      <SelectItem key={instructor} value={instructor}>
                        {instructor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Course Type</Label>
                <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Lecture">Lecture</SelectItem>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Laboratory">Laboratory</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Independent Study">Independent Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="prerequisites">Prerequisites</Label>
              <Input
                id="prerequisites"
                value={formData.prerequisites}
                onChange={(e) => handleChange("prerequisites", e.target.value)}
                placeholder="e.g., MATH101, CS100"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasLab"
                  checked={formData.hasLab}
                  onCheckedChange={(checked) => handleChange("hasLab", checked)}
                />
                <Label htmlFor="hasLab">Has Laboratory Component</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isRequired"
                  checked={formData.isRequired}
                  onCheckedChange={(checked) => handleChange("isRequired", checked)}
                />
                <Label htmlFor="isRequired">Required Course</Label>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="learningOutcomes">Learning Outcomes</Label>
              <Textarea
                id="learningOutcomes"
                value={formData.learningOutcomes}
                onChange={(e) => handleChange("learningOutcomes", e.target.value)}
                placeholder="What students will learn in this course..."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="syllabus">Syllabus URL</Label>
              <Input
                id="syllabus"
                value={formData.syllabus}
                onChange={(e) => handleChange("syllabus", e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {course ? "Update Course" : "Create Course"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}