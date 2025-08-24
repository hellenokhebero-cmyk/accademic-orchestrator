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

interface SchoolFormProps {
  onClose: () => void
  school?: any
}

export function SchoolForm({ onClose, school }: SchoolFormProps) {
  const [formData, setFormData] = useState({
    name: school?.name || "",
    dean: school?.dean || "",
    description: school?.description || "",
    established: school?.established || "",
    building: school?.building || "",
    phone: school?.phone || "",
    email: school?.email || "",
    website: school?.website || "",
    mission: school?.mission || ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: school ? "School Updated" : "School Created",
      description: `School has been successfully ${school ? "updated" : "created"}.`,
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
          <DialogTitle>{school ? "Edit School" : "Add New School"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">School Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g., School of Engineering"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dean">Dean</Label>
              <Input
                id="dean"
                value={formData.dean}
                onChange={(e) => handleChange("dean", e.target.value)}
                placeholder="e.g., Dr. John Smith"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Brief description of the school..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="established">Year Established</Label>
              <Input
                id="established"
                type="number"
                value={formData.established}
                onChange={(e) => handleChange("established", e.target.value)}
                placeholder="e.g., 1985"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="building">Main Building</Label>
              <Input
                id="building"
                value={formData.building}
                onChange={(e) => handleChange("building", e.target.value)}
                placeholder="e.g., Engineering Hall"
              />
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
                  placeholder="school@university.edu"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="www.university.edu/school"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              value={formData.mission}
              onChange={(e) => handleChange("mission", e.target.value)}
              placeholder="School's mission and vision..."
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {school ? "Update School" : "Create School"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}