import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

interface ScheduleFormProps {
  onClose: () => void
  schedule?: any
}

export function ScheduleForm({ onClose, schedule }: ScheduleFormProps) {
  const [formData, setFormData] = useState({
    course: schedule?.course || "",
    instructor: schedule?.instructor || "",
    room: schedule?.room || "",
    building: schedule?.building || "",
    startTime: schedule?.startTime || "",
    endTime: schedule?.endTime || "",
    semester: schedule?.semester || "Fall 2024",
    isRecurring: schedule?.isRecurring || true
  })

  const [selectedDays, setSelectedDays] = useState<string[]>(
    schedule?.days ? schedule.days.split("") : []
  )

  const courses = [
    "CS101 - Introduction to Computer Science",
    "MATH201 - Calculus II",
    "ENG102 - English Composition",
    "PHYS301 - Quantum Physics",
    "CHEM101 - General Chemistry",
    "BIO201 - Biology Fundamentals"
  ]

  const instructors = [
    "Dr. Alex Thompson",
    "Prof. Sarah Wilson",
    "Dr. Michael Brown",
    "Dr. Lisa Chang",
    "Prof. Robert Davis",
    "Dr. Emily Rodriguez"
  ]

  const buildings = [
    "Computer Science Building",
    "Mathematics Hall",
    "Liberal Arts Building",
    "Science Center",
    "Engineering Hall",
    "Business School"
  ]

  const dayOptions = [
    { key: "M", label: "Monday" },
    { key: "T", label: "Tuesday" },
    { key: "W", label: "Wednesday" },
    { key: "Th", label: "Thursday" },
    { key: "F", label: "Friday" },
    { key: "S", label: "Saturday" }
  ]

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDays.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one day for the class.",
        variant: "destructive"
      })
      return
    }

    toast({
      title: schedule ? "Schedule Updated" : "Class Scheduled",
      description: `Class schedule has been successfully ${schedule ? "updated" : "created"}.`,
    })
    onClose()
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDayToggle = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    )
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{schedule ? "Edit Class Schedule" : "Schedule New Class"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Course Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="course">Course *</Label>
                <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
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
                <Label htmlFor="instructor">Instructor *</Label>
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
                  <SelectItem value="Summer 2024">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Schedule Details</h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Days of the Week *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dayOptions.map((day) => (
                    <div key={day.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={day.key}
                        checked={selectedDays.includes(day.key)}
                        onCheckedChange={() => handleDayToggle(day.key)}
                      />
                      <Label htmlFor={day.key} className="text-sm">
                        {day.label} ({day.key})
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time *</Label>
                <Select value={formData.startTime} onValueChange={(value) => handleChange("startTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select start time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time *</Label>
                <Select value={formData.endTime} onValueChange={(value) => handleChange("endTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select end time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="building">Building *</Label>
                <Select value={formData.building} onValueChange={(value) => handleChange("building", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a building" />
                  </SelectTrigger>
                  <SelectContent>
                    {buildings.map((building) => (
                      <SelectItem key={building} value={building}>
                        {building}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="room">Room Number *</Label>
                <Input
                  id="room"
                  value={formData.room}
                  onChange={(e) => handleChange("room", e.target.value)}
                  placeholder="e.g., 101, A-205, Lab-1"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Options</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isRecurring"
                checked={formData.isRecurring}
                onCheckedChange={(checked) => handleChange("isRecurring", checked)}
              />
              <Label htmlFor="isRecurring">
                Recurring weekly schedule (entire semester)
              </Label>
            </div>
          </div>

          {selectedDays.length > 0 && formData.startTime && formData.endTime && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">Schedule Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  <strong>Days:</strong> {selectedDays.join("")} <br />
                  <strong>Time:</strong> {formData.startTime} - {formData.endTime} <br />
                  <strong>Location:</strong> {formData.room && formData.building 
                    ? `${formData.room}, ${formData.building}` 
                    : "TBA"}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {schedule ? "Update Schedule" : "Create Schedule"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}