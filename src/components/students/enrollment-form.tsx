import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

interface EnrollmentFormProps {
  onClose: () => void
}

export function EnrollmentForm({ onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    student: "",
    course: "",
    semester: "Fall 2024"
  })

  const students = [
    "STU001 - Emma Johnson",
    "STU002 - Michael Chen", 
    "STU003 - Sarah Williams",
    "STU004 - David Rodriguez"
  ]

  const courses = [
    "CS101 - Introduction to Computer Science",
    "MATH201 - Calculus II",
    "ENG102 - English Composition",
    "PHYS301 - Quantum Physics"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Enrollment Created",
      description: "Student has been successfully enrolled in the course.",
    })
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Manual Course Enrollment</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="student">Student *</Label>
            <Select value={formData.student} onValueChange={(value) => handleChange("student", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student} value={student}>
                    {student}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course *</Label>
            <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="semester">Semester</Label>
            <Select value={formData.semester} onValueChange={(value) => handleChange("semester", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fall 2024">Fall 2024</SelectItem>
                <SelectItem value="Spring 2025">Spring 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Enroll Student
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}