import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Brain, Mail, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <Link to="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                AI Learning
              </h1>
            </Link>
            <p className="text-muted-foreground">Welcome back! Sign in to continue your learning journey</p>
          </div>

          <Card className="border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign In</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Sign In
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button type="button" variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M11.4 24H0V8h11.4v16zM24 8v16h-11.4V8H24zm-1.2 1.2h-9v13.6h9V9.2zM1.2 9.2h9v13.6h-9V9.2zM21.6 0v5.6H24V0h-2.4zM0 5.6h2.4V0H0v5.6zm9.6-3.2h4.8V0H9.6v2.4zM24 5.6V24h-2.4V5.6H24z"
                      />
                    </svg>
                    Microsoft
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Register now
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome Back!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Continue your personalized learning journey and achieve your career goals
          </p>
          <div className="grid grid-cols-2 gap-4 text-left">
            {[
              "AI-Powered Recommendations",
              "Track Your Progress",
              "Earn Certificates",
              "Join Community"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
