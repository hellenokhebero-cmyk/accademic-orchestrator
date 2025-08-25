import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  Home,
  Building2,
  Users,
  BookOpen,
  MessageSquare,
  BarChart3,
  Calendar,
  UserCheck,
  Settings,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Institution", href: "/institution", icon: Building2 },
  { name: "Students", href: "/students", icon: Users },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Staff", href: "/staff", icon: UserCheck },
  { name: "Communication", href: "/communication", icon: MessageSquare },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  isCollapsed: boolean
  isMobile: boolean
}

export function Sidebar({ isCollapsed, isMobile }: SidebarProps) {
  const location = useLocation()

  if (isMobile) {
    return null // Mobile uses bottom navigation
  }

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen bg-card border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        <div className={cn(
          "flex items-center border-b px-6 py-4",
          isCollapsed && "px-4"
        )}>
          <GraduationCap className="h-8 w-8 text-primary" />
          {!isCollapsed && (
            <div className="ml-3">
              <h1 className="text-lg font-semibold">EduManage</h1>
              <p className="text-xs text-muted-foreground">University Portal</p>
            </div>
          )}
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        {!isCollapsed && (
          <div className="border-t p-4">
            <div className="text-xs text-muted-foreground">
              © 2024 EduManage Pro
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}