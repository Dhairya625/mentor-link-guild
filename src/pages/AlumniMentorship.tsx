import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, 
  Bell, 
  Users, 
  Settings,
  Search,
  UserPlus,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Filter,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniMentorship = () => {
  const [showCreateMentorshipDialog, setShowCreateMentorshipDialog] = useState(false);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mentorshipForm, setMentorshipForm] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    commitment: "",
    goals: "",
    experience: ""
  });

  // Mock mentorship requests from students
  const mentorshipRequests = [
    {
      id: 1,
      studentName: "John Doe",
      studentClass: "CS Student, Class of 2025",
      avatar: "JD",
      message: "Hi! I'm interested in transitioning to product management after graduation. I have some experience with user research and would love guidance on breaking into PM roles.",
      time: "2 hours ago",
      domain: "Product Management",
      status: "pending"
    },
    {
      id: 2,
      studentName: "Sarah Wilson",
      studentClass: "Business Student, Class of 2024",
      avatar: "SW",
      message: "I'm looking for mentorship in entrepreneurship. I have a startup idea and need guidance on business strategy and fundraising.",
      time: "5 hours ago",
      domain: "Entrepreneurship",
      status: "pending"
    },
    {
      id: 3,
      studentName: "Michael Chen",
      studentClass: "Engineering Student, Class of 2025",
      avatar: "MC",
      message: "I want to learn about software engineering best practices and career growth in tech companies. Any advice would be greatly appreciated!",
      time: "1 day ago",
      domain: "Software Engineering",
      status: "pending"
    }
  ];

  // Mock alumni data for mentorship
  const alumniMentors = [
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      role: "Senior Data Scientist at Amazon",
      company: "Amazon",
      avatar: "ER",
      graduationYear: "2015",
      domains: ["Data Science", "Machine Learning", "AI"],
      experience: "8 years",
      rating: 4.9,
      mentees: 12,
      location: "Seattle, WA",
      bio: "Passionate about helping students break into data science and AI. Former Google engineer with expertise in ML pipelines."
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Product Manager at Microsoft",
      company: "Microsoft",
      avatar: "JT",
      graduationYear: "2017",
      domains: ["Product Management", "Strategy", "Leadership"],
      experience: "6 years",
      rating: 4.8,
      mentees: 8,
      location: "Redmond, WA",
      bio: "Experienced PM with a track record of launching successful products. Love mentoring aspiring product managers."
    },
    {
      id: 3,
      name: "Lisa Park",
      role: "Founder & CEO at TechStart",
      company: "TechStart",
      avatar: "LP",
      graduationYear: "2013",
      domains: ["Entrepreneurship", "Startups", "Venture Capital"],
      experience: "10 years",
      rating: 4.9,
      mentees: 15,
      location: "San Francisco, CA",
      bio: "Serial entrepreneur with 3 successful exits. Passionate about helping students build and scale startups."
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Senior Software Engineer at Google",
      company: "Google",
      avatar: "DK",
      graduationYear: "2016",
      domains: ["Software Engineering", "System Design", "Backend"],
      experience: "7 years",
      rating: 4.7,
      mentees: 10,
      location: "Mountain View, CA",
      bio: "Full-stack engineer with expertise in distributed systems. Enjoys mentoring students on technical career paths."
    }
  ];

  // Mock received mentorship requests history
  const receivedRequests = [
    {
      id: 1,
      studentName: "Alex Johnson",
      domain: "Software Engineering",
      status: "accepted",
      date: "Dec 10, 2024",
      message: "Looking for guidance on system design interviews"
    },
    {
      id: 2,
      studentName: "Maria Garcia",
      domain: "Product Management",
      status: "rejected",
      date: "Dec 8, 2024",
      message: "Need help with product strategy for my startup"
    },
    {
      id: 3,
      studentName: "Tom Wilson",
      domain: "Data Science",
      status: "accepted",
      date: "Dec 5, 2024",
      message: "Interested in transitioning to ML engineering"
    }
  ];

  // Mock sent mentorship requests history
  const sentRequests = [
    {
      id: 1,
      mentorName: "Dr. Emily Rodriguez",
      domain: "Machine Learning",
      status: "accepted",
      date: "Dec 12, 2024",
      message: "Looking for guidance on advanced ML techniques"
    },
    {
      id: 2,
      mentorName: "James Thompson",
      domain: "Product Strategy",
      status: "pending",
      date: "Dec 11, 2024",
      message: "Need advice on product roadmap planning"
    },
    {
      id: 3,
      mentorName: "Lisa Park",
      domain: "Startup Funding",
      status: "rejected",
      date: "Dec 9, 2024",
      message: "Looking for guidance on Series A fundraising"
    }
  ];

  const domains = [
    "Software Engineering", "Product Management", "Data Science", "Machine Learning",
    "Entrepreneurship", "Marketing", "Finance", "Consulting", "Design", "Sales",
    "Operations", "Strategy", "Leadership", "AI", "Cybersecurity", "DevOps"
  ];

  const handleAcceptRequest = (requestId: number) => {
    console.log("Accepting request:", requestId);
    // In real implementation, this would update the request status
  };

  const handleRejectRequest = (requestId: number) => {
    console.log("Rejecting request:", requestId);
    // In real implementation, this would update the request status
  };

  const handleCreateMentorship = () => {
    if (mentorshipForm.title && mentorshipForm.description && mentorshipForm.category) {
      console.log("Creating mentorship:", mentorshipForm);
      setMentorshipForm({
        title: "",
        description: "",
        category: "",
        duration: "",
        commitment: "",
        goals: "",
        experience: ""
      });
      setShowCreateMentorshipDialog(false);
    }
  };

  const handleSendMentorshipRequest = (mentorId: number) => {
    console.log("Sending mentorship request to:", mentorId);
    // In real implementation, this would send a mentorship request
  };

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };

  const filteredAlumni = alumniMentors.filter(alumnus => {
    const matchesSearch = alumnus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumnus.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumnus.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDomains = selectedDomains.length === 0 || 
                          selectedDomains.some(domain => alumnus.domains.includes(domain));
    
    return matchesSearch && matchesDomains;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">AlumniConnect</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/alumni/dashboard" className="text-muted-foreground hover:text-foreground">Feed</Link>
              <Link to="/alumni/directory" className="text-muted-foreground hover:text-foreground">Directory</Link>
              <Link to="/alumni/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              <Link to="/alumni/mentorship" className="text-primary font-medium">Mentorship</Link>
              <Link to="/alumni/network" className="text-muted-foreground hover:text-foreground">Network</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Mentorship Hub</h1>
            <p className="text-muted-foreground">Connect, mentor, and grow together with the alumni community</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Mentorship Requests */}
            <div className="space-y-6">
              {/* Mentorship Requests Section */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Mentorship Requests
                      </CardTitle>
                      <CardDescription>
                        Students seeking your guidance and expertise
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {mentorshipRequests.length} pending
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mentorshipRequests.map((request) => (
                    <div key={request.id} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-accent text-accent-foreground">
                            {request.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-sm">{request.studentName}</h4>
                            <Badge variant="outline" className="text-xs">
                              {request.domain}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{request.studentClass}</p>
                          <p className="text-sm text-foreground mb-3">{request.message}</p>
                          <p className="text-xs text-muted-foreground mb-3">{request.time}</p>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleAcceptRequest(request.id)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Accept
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleRejectRequest(request.id)}
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Decline
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Create Mentorship Section */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Create Mentorship
                  </CardTitle>
                  <CardDescription>
                    Offer your expertise to students and fellow alumni
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog open={showCreateMentorshipDialog} onOpenChange={setShowCreateMentorshipDialog}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-primary text-primary-foreground">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Create Mentorship Opportunity
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Create Mentorship Opportunity</DialogTitle>
                        <DialogDescription>
                          Share your expertise and help others grow in their careers.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Mentorship Title</Label>
                          <Input
                            id="title"
                            value={mentorshipForm.title}
                            onChange={(e) => setMentorshipForm({...mentorshipForm, title: e.target.value})}
                            placeholder="e.g., Software Engineering Career Guidance"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={mentorshipForm.category} onValueChange={(value) => setMentorshipForm({...mentorshipForm, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="career-guidance">Career Guidance</SelectItem>
                              <SelectItem value="technical-skills">Technical Skills</SelectItem>
                              <SelectItem value="leadership">Leadership</SelectItem>
                              <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                              <SelectItem value="industry-insights">Industry Insights</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={mentorshipForm.description}
                            onChange={(e) => setMentorshipForm({...mentorshipForm, description: e.target.value})}
                            placeholder="Describe what you can offer as a mentor..."
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="duration">Duration</Label>
                            <Select value={mentorshipForm.duration} onValueChange={(value) => setMentorshipForm({...mentorshipForm, duration: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-month">1 Month</SelectItem>
                                <SelectItem value="3-months">3 Months</SelectItem>
                                <SelectItem value="6-months">6 Months</SelectItem>
                                <SelectItem value="1-year">1 Year</SelectItem>
                                <SelectItem value="ongoing">Ongoing</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="commitment">Time Commitment</Label>
                            <Select value={mentorshipForm.commitment} onValueChange={(value) => setMentorshipForm({...mentorshipForm, commitment: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select commitment" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-hour-week">1 hour/week</SelectItem>
                                <SelectItem value="2-hours-week">2 hours/week</SelectItem>
                                <SelectItem value="3-hours-week">3 hours/week</SelectItem>
                                <SelectItem value="as-needed">As needed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="goals">Mentorship Goals</Label>
                          <Textarea
                            id="goals"
                            value={mentorshipForm.goals}
                            onChange={(e) => setMentorshipForm({...mentorshipForm, goals: e.target.value})}
                            placeholder="What specific goals can you help mentees achieve?"
                            rows={2}
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience">Your Experience</Label>
                          <Textarea
                            id="experience"
                            value={mentorshipForm.experience}
                            onChange={(e) => setMentorshipForm({...mentorshipForm, experience: e.target.value})}
                            placeholder="Briefly describe your relevant experience..."
                            rows={2}
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setShowCreateMentorshipDialog(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleCreateMentorship} className="bg-gradient-primary text-primary-foreground">
                            Create Mentorship
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Alumni Mentorship */}
            <div className="space-y-6">
              {/* Alumni Mentorship Section */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Alumni Mentorship
                  </CardTitle>
                  <CardDescription>
                    Find and connect with fellow alumni for mentorship
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Search and Filter */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search alumni by name, role, or company..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    {/* Domain Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Filter by Domains</Label>
                      <div className="flex flex-wrap gap-2">
                        {domains.map((domain) => (
                          <Button
                            key={domain}
                            variant={selectedDomains.includes(domain) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleDomain(domain)}
                            className="text-xs"
                          >
                            {domain}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Alumni List */}
                  <div className="space-y-4">
                    {filteredAlumni.map((alumnus) => (
                      <div key={alumnus.id} className="p-4 border border-border/50 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {alumnus.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-sm">{alumnus.name}</h4>
                                <p className="text-xs text-muted-foreground">{alumnus.role}</p>
                                <p className="text-xs text-muted-foreground">{alumnus.company} • Class of {alumnus.graduationYear}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 mb-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium">{alumnus.rating}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{alumnus.mentees} mentees</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-2">
                              {alumnus.domains.map((domain) => (
                                <Badge key={domain} variant="secondary" className="text-xs">
                                  {domain}
                                </Badge>
                              ))}
                            </div>
                            
                            <p className="text-xs text-muted-foreground mb-3">{alumnus.bio}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{alumnus.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Briefcase className="w-3 h-3" />
                                  <span>{alumnus.experience} exp</span>
                                </div>
                              </div>
                              <Button 
                                size="sm" 
                                onClick={() => handleSendMentorshipRequest(alumnus.id)}
                                className="bg-gradient-primary text-primary-foreground"
                              >
                                <Send className="w-4 h-4 mr-1" />
                                Request
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Request History Section */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Mentorship Request History
              </CardTitle>
              <CardDescription>
                Track all your mentorship requests and responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="received" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="received">Received Requests</TabsTrigger>
                  <TabsTrigger value="sent">Sent Requests</TabsTrigger>
                </TabsList>
                
                <TabsContent value="received" className="space-y-4">
                  <div className="space-y-3">
                    {receivedRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(request.status)}
                          <div>
                            <h4 className="font-medium text-sm">{request.studentName}</h4>
                            <p className="text-xs text-muted-foreground">{request.domain} • {request.date}</p>
                            <p className="text-xs text-muted-foreground">{request.message}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="sent" className="space-y-4">
                  <div className="space-y-3">
                    {sentRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(request.status)}
                          <div>
                            <h4 className="font-medium text-sm">{request.mentorName}</h4>
                            <p className="text-xs text-muted-foreground">{request.domain} • {request.date}</p>
                            <p className="text-xs text-muted-foreground">{request.message}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlumniMentorship;


