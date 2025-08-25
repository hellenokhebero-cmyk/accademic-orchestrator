import { ReactNode, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { TopNavbar } from "./top-navbar"
import { Sidebar } from "./sidebar"
import { MobileBottomNav } from "./mobile-bottom-nav"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar 
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      
      <Sidebar isCollapsed={isSidebarCollapsed} isMobile={isMobile} />
      
      <main
        className={cn(
          "transition-all duration-300",
          isMobile
            ? "pt-16 pb-20" // Space for mobile header and bottom nav
            : isSidebarCollapsed 
              ? "pl-16 pt-16" // Space for collapsed sidebar and top nav
              : "pl-64 pt-16" // Space for full sidebar and top nav
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>

      {isMobile && <MobileBottomNav />}
    </div>
  )
}