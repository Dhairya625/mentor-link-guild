import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Users, 
  MapPin, 
  Briefcase, 
  Calendar,
  MessageCircle,
  UserPlus,
  Filter,
  GraduationCap,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");
  const [filterCompany, setFilterCompany] = useState("");

  const mockAlumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "",
      graduationYear: "2018",
      degree: "Computer Science",
      company: "Google",
      position: "Senior Software Engineer",
      industry: "Technology",
      location: "San Francisco, CA",
      bio: "Passionate about AI/ML and mentoring the next generation of engineers. 5+ years at Google working on search algorithms.",
      skills: ["Python", "Machine Learning", "System Design", "Leadership"],
      linkedIn: "linkedin.com/in/sarahjohnson",
      isFollowing: false,
      isConnected: false,
      mentorshipAvailable: true
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "",
      graduationYear: "2016",
      degree: "Business Administration",
      company: "Microsoft",
      position: "Product Manager",
      industry: "Technology",
      location: "Seattle, WA",
      bio: "Product leader with expertise in B2B SaaS. Love helping students transition from engineering to product management.",
      skills: ["Product Strategy", "Data Analysis", "Agile", "User Research"],
      linkedIn: "linkedin.com/in/michaelchen",
      isFollowing: true,
      isConnected: true,
      mentorshipAvailable: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "",
      graduationYear: "2019",
      degree: "Marketing",
      company: "Tesla",
      position: "Marketing Director",
      industry: "Automotive",
      location: "Austin, TX",
      bio: "Leading digital marketing initiatives at Tesla. Specialized in growth marketing and brand strategy.",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Content Strategy"],
      linkedIn: "linkedin.com/in/emilyrodriguez",
      isFollowing: false,
      isConnected: false,
      mentorshipAvailable: false
    },
    {
      id: 4,
      name: "David Kim",
      avatar: "",
      graduationYear: "2015",
      degree: "Finance",
      company: "Goldman Sachs",
      position: "Vice President",
      industry: "Financial Services",
      location: "New York, NY",
      bio: "Investment banking professional with focus on tech IPOs. Happy to share insights about finance careers.",
      skills: ["Investment Banking", "Financial Modeling", "Valuation", "M&A"],
      linkedIn: "linkedin.com/in/davidkim",
      isFollowing: false,
      isConnected: false,
      mentorshipAvailable: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "",
      graduationYear: "2020",
      degree: "Data Science",
      company: "Netflix",
      position: "Data Scientist",
      industry: "Entertainment",
      location: "Los Angeles, CA",
      bio: "Building recommendation systems at Netflix. Passionate about data-driven storytelling and analytics.",
      skills: ["Machine Learning", "Python", "SQL", "Data Visualization"],
      linkedIn: "linkedin.com/in/lisawang",
      isFollowing: true,
      isConnected: false,
      mentorshipAvailable: true
    },
    {
      id: 6,
      name: "James Martinez",
      avatar: "",
      graduationYear: "2017",
      degree: "Mechanical Engineering",
      company: "SpaceX",
      position: "Senior Engineer",
      industry: "Aerospace",
      location: "Hawthorne, CA",
      bio: "Working on rocket propulsion systems. Love discussing engineering challenges and space technology.",
      skills: ["Mechanical Design", "CAD", "Project Management", "Systems Engineering"],
      linkedIn: "linkedin.com/in/jamesmartinez",
      isFollowing: false,
      isConnected: false,
      mentorshipAvailable: true
    }
  ];

  const filteredAlumni = mockAlumni.filter(alumnus => {
    const matchesSearch = alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumnus.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumnus.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = !filterYear || alumnus.graduationYear === filterYear;
    const matchesIndustry = !filterIndustry || alumnus.industry === filterIndustry;
    const matchesCompany = !filterCompany || alumnus.company === filterCompany;
    
    return matchesSearch && matchesYear && matchesIndustry && matchesCompany;
  });

  const graduationYears = [...new Set(mockAlumni.map(a => a.graduationYear))].sort((a, b) => b.localeCompare(a));
  const industries = [...new Set(mockAlumni.map(a => a.industry))].sort();
  const companies = [...new Set(mockAlumni.map(a => a.company))].sort();

  const handleConnect = (id: number) => {
    // In real implementation, this would send a connection request
    console.log(`Connecting with alumni ${id}`);
  };

  const handleMessage = (id: number) => {
    // In real implementation, this would open messaging interface
    console.log(`Messaging alumni ${id}`);
  };

  const handleFollow = (id: number) => {
    // In real implementation, this would toggle follow status
    console.log(`Following/unfollowing alumni ${id}`);
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
              <Link to="/alumni/directory" className="text-primary font-medium">Directory</Link>
              <Link to="/alumni/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              <Link to="/alumni/mentorship" className="text-muted-foreground hover:text-foreground">Mentorship</Link>
            </div>
          </div>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Alumni Directory</h1>
          <p className="text-muted-foreground">Connect with {mockAlumni.length} alumni from our community</p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name, company, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Years</SelectItem>
                  {graduationYears.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterCompany} onValueChange={setFilterCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Companies</SelectItem>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>{company}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAlumni.length} of {mockAlumni.length} alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumnus) => (
            <Card key={alumnus.id} className="shadow-card border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg">
                      {alumnus.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{alumnus.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      Class of {alumnus.graduationYear}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Building2 className="w-4 h-4 mr-2" />
                    {alumnus.company}
                  </div>
                  <p className="font-medium text-sm">{alumnus.position}</p>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {alumnus.location}
                </div>

                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">{alumnus.industry}</Badge>
                  <Badge variant="outline" className="text-xs">{alumnus.degree}</Badge>
                  {alumnus.mentorshipAvailable && (
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">Mentor</Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {alumnus.bio}
                </p>

                <div className="flex flex-wrap gap-1">
                  {alumnus.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {alumnus.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{alumnus.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2 pt-2 border-t border-border">
                  {alumnus.isConnected ? (
                    <Button 
                      size="sm" 
                      onClick={() => handleMessage(alumnus.id)}
                      className="flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleConnect(alumnus.id)}
                      className="flex-1"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  )}
                  
                  <Button 
                    size="sm" 
                    variant={alumnus.isFollowing ? "default" : "ghost"}
                    onClick={() => handleFollow(alumnus.id)}
                  >
                    {alumnus.isFollowing ? "Following" : "Follow"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <Card className="shadow-card border-border/50 text-center py-12">
            <CardContent>
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No alumni found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;