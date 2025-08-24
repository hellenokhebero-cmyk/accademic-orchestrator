import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { 
  Home,
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  BarChart3,
  Settings,
  Building2,
  Calendar,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Institution", href: "/institution", icon: Building2 },
  { name: "Students", href: "/students", icon: GraduationCap },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Staff", href: "/staff", icon: Users },
  { name: "Communication", href: "/communication", icon: MessageSquare },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Navigation() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-card border-b shadow-card">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="font-semibold text-foreground">UniManage</h1>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm pt-16">
            <nav className="bg-card m-4 rounded-lg shadow-elegant p-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-md transition-smooth",
                        isActive
                          ? "bg-gradient-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-card border-t shadow-card">
          <nav className="flex justify-around py-2">
            {navigation.slice(0, 5).map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center p-2 transition-smooth",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </>
    )
  }

  // Desktop Sidebar
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gradient-card border-r shadow-card">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center space-x-3 px-6 py-6 border-b">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">UniManage</h1>
            <p className="text-sm text-muted-foreground">Admin Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-smooth group",
                      isActive
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Admin Dashboard
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  )
}