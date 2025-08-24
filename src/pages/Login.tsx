import { useState } from "react"
import { Link } from "react-router-dom"
import { GraduationCap, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to dashboard (in real app, this would authenticate)
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center shadow-glow">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">UniManage</h1>
          <p className="text-white/80">University Administration Portal</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-elegant animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-white/70">
              Sign in to your administrator account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/90">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 text-white/70 hover:text-white hover:bg-white/10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link 
                  to="/forgot-password" 
                  className="text-white/70 hover:text-white transition-smooth"
                >
                  Forgot password?
                </Link>
                <Link 
                  to="/register" 
                  className="text-white/70 hover:text-white transition-smooth"
                >
                  Register institution
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-smooth"
                size="lg"
              >
                Sign In
              </Button>
            </form>

            {/* Demo Notice */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-xs text-white/70 text-center">
                <strong className="text-white">Demo Mode:</strong> Use any email and password to access the dashboard
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-white/60 text-sm">
            © 2024 UniManage. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}