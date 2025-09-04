import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, MessageCircle, Calendar, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-alumni-connect.jpg";

const Landing = () => {
  const features = [
    {
      icon: Users,
      title: "Alumni Network",
      description: "Connect with thousands of graduates from your institution across industries and locations."
    },
    {
      icon: BookOpen,
      title: "Mentorship Program",
      description: "Get guidance from experienced professionals or become a mentor to current students."  
    },
    {
      icon: MessageCircle,
      title: "Knowledge Sharing",
      description: "Share insights, ask questions, and learn from the collective wisdom of your alumni community."
    },
    {
      icon: Calendar,
      title: "Events & Meetups",
      description: "Attend webinars, seminars, and networking events organized by alumni and the institution."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Discover job opportunities, industry insights, and career advancement strategies."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and privacy controls."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Alumni Connected" },
    { number: "500+", label: "Mentorship Pairs" },
    { number: "100+", label: "Events Hosted" },
    { number: "50+", label: "Industries Represented" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">AlumniConnect</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Connecting Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Where <span className="bg-gradient-primary bg-clip-text text-transparent">Alumni</span> and 
              <span className="bg-gradient-accent bg-clip-text text-transparent"> Students</span> Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Join a thriving community of graduates and students. Share knowledge, find mentors, 
              and build lasting professional relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant">
                  Join the Network
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Alumni networking and connecting at university campus" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-elegant backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Growing Network</p>
                  <p className="text-sm text-muted-foreground">+15% monthly growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to <span className="text-primary">Connect & Grow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools you need to build meaningful professional relationships
              and accelerate your career growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Expand Your Network?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of alumni and students who are already building meaningful connections
            and advancing their careers together.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90 shadow-glow">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">AlumniConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 AlumniConnect. Connecting success stories across generations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;