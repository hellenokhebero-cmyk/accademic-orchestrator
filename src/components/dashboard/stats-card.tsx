import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  icon: ReactNode
  description?: string
  trend?: {
    value: number
    label: string
    positive: boolean
  }
  variant?: "default" | "primary" | "accent" | "success"
}

export function StatsCard({ 
  title, 
  value, 
  icon, 
  description, 
  trend,
  variant = "default"
}: StatsCardProps) {
  return (
    <Card className={cn(
      "transition-smooth hover:shadow-elegant animate-fade-in",
      variant === "primary" && "bg-gradient-primary text-primary-foreground",
      variant === "accent" && "bg-gradient-accent text-accent-foreground",
      variant === "success" && "border-success/20 bg-success/5"
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          variant === "default" ? "text-muted-foreground" : "opacity-90"
        )}>
          {title}
        </CardTitle>
        <div className={cn(
          "p-2 rounded-md",
          variant === "default" && "bg-muted",
          variant !== "default" && "bg-white/10"
        )}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className={cn(
            "text-xs mt-1",
            variant === "default" ? "text-muted-foreground" : "opacity-80"
          )}>
            {description}
          </p>
        )}
        {trend && (
          <div className={cn(
            "flex items-center text-xs mt-2",
            trend.positive ? "text-success" : "text-destructive",
            variant !== "default" && "text-white/90"
          )}>
            <span className="font-medium">
              {trend.positive ? "+" : ""}{trend.value}%
            </span>
            <span className="ml-1">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}