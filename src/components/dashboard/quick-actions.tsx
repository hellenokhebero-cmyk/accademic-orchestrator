import { 
  UserPlus, 
  BookPlus, 
  MessageSquarePlus, 
  CalendarPlus,
  Users,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const quickActions = [
  {
    title: "Add Student",
    description: "Register new student",
    icon: UserPlus,
    variant: "primary" as const
  },
  {
    title: "Create Course",
    description: "Setup new course",
    icon: BookPlus,
    variant: "accent" as const
  },
  {
    title: "Send Message",
    description: "Broadcast announcement",
    icon: MessageSquarePlus,
    variant: "default" as const
  },
  {
    title: "Schedule Event",
    description: "Plan new event",
    icon: CalendarPlus,
    variant: "default" as const
  },
  {
    title: "Manage Staff",
    description: "Add team members",
    icon: Users,
    variant: "default" as const
  },
  {
    title: "Generate Report",
    description: "Export analytics",
    icon: FileText,
    variant: "default" as const
  }
]

export function QuickActions() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={action.title}
              variant={action.variant}
              className="h-auto p-4 justify-start animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 w-full">
                <action.icon className="h-5 w-5 flex-shrink-0" />
                <div className="text-left min-w-0">
                  <div className="font-medium truncate">{action.title}</div>
                  <div className="text-xs opacity-80 truncate">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}