import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Lock, User, GraduationCap, Building, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    graduationYear: "",
    degree: "",
    company: "",
    jobTitle: "",
    industry: "",
    bio: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    // Simulate registration process (will be replaced with Supabase auth)
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully! Please check your email for verification.",
      });
      navigate("/login");
      setLoading(false);
    }, 2000);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">AlumniConnect</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Join Our Community</h1>
          <p className="text-muted-foreground">Create your account and start connecting</p>
        </div>

        <Card className="shadow-elegant border-border/50">
          <CardHeader>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-accent border-accent/20">
                New Member Registration
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">I am a</Label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alumni">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>Alumni</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="student">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-accent" />
                        <span>Current Student</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@university.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="graduationYear">
                    {formData.userType === "alumni" ? "Graduation Year" : "Expected Graduation Year"}
                  </Label>
                  <Select value={formData.graduationYear} onValueChange={(value) => handleInputChange("graduationYear", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="degree">Degree/Field of Study</Label>
                  <Input
                    id="degree"
                    placeholder="Computer Science, MBA, etc."
                    value={formData.degree}
                    onChange={(e) => handleInputChange("degree", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Professional Information (Alumni only) */}
              {formData.userType === "alumni" && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Current Company</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="company"
                          placeholder="Google, Microsoft, etc."
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="Software Engineer, Product Manager, etc."
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Bio */}
              <div className="space-y-2">
                <Label htmlFor="bio">About Me</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself, your interests, and what you'd like to share with the community..."
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Register Button */}
              <Button 
                type="submit" 
                className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-elegant"
                disabled={loading || !formData.userType || !formData.firstName || !formData.lastName || !formData.email || !formData.password}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            By creating an account, you agree to our Terms of Service and Privacy Policy. 
            Your information will be verified by our administrators before activation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;