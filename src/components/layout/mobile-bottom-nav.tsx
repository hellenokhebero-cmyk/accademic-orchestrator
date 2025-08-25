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
  Settings
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Institution", href: "/institution", icon: Building2 },
  { name: "Students", href: "/students", icon: Users },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "More", href: "/settings", icon: Settings },
]

export function MobileBottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center text-xs transition-colors",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5 mb-1", isActive && "text-primary")} />
              <span className={cn("text-xs", isActive && "text-primary font-medium")}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}