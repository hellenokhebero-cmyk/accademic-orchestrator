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
import { toast } from "@/hooks/use-toast"

interface DepartmentFormProps {
  onClose: () => void
  department?: any
}

export function DepartmentForm({ onClose, department }: DepartmentFormProps) {
  const [formData, setFormData] = useState({
    name: department?.name || "",
    school: department?.school || "",
    head: department?.head || "",
    description: department?.description || "",
    building: department?.building || "",
    room: department?.room || "",
    phone: department?.phone || "",
    email: department?.email || "",
    website: department?.website || "",
    established: department?.established || ""
  })

  const schools = [
    "School of Engineering",
    "School of Business",
    "School of Medicine",
    "School of Arts & Sciences",
    "School of Education",
    "School of Law"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: department ? "Department Updated" : "Department Created",
      description: `Department has been successfully ${department ? "updated" : "created"}.`,
    })
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{department ? "Edit Department" : "Add New Department"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Department Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g., Computer Science"
                required
              />
            </div>
            
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="head">Department Head</Label>
            <Input
              id="head"
              value={formData.head}
              onChange={(e) => handleChange("head", e.target.value)}
              placeholder="e.g., Dr. Jane Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Brief description of the department..."
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="building">Building</Label>
                <Input
                  id="building"
                  value={formData.building}
                  onChange={(e) => handleChange("building", e.target.value)}
                  placeholder="e.g., Science Hall"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="room">Room/Suite</Label>
                <Input
                  id="room"
                  value={formData.room}
                  onChange={(e) => handleChange("room", e.target.value)}
                  placeholder="e.g., Suite 201"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="dept@university.edu"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="www.university.edu/department"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="established">Year Established</Label>
            <Input
              id="established"
              type="number"
              value={formData.established}
              onChange={(e) => handleChange("established", e.target.value)}
              placeholder="e.g., 1990"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {department ? "Update Department" : "Create Department"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}