import { ReactNode } from "react"
import { Navigation } from "./navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main
        className={cn(
          "transition-smooth",
          isMobile
            ? "pt-16 pb-20" // Space for mobile header and bottom nav
            : "pl-64" // Space for desktop sidebar
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}