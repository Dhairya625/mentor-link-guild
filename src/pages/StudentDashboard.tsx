import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Heart, 
  MessageCircle, 
  Share, 
  Calendar, 
  Users, 
  BookOpen,
  Bell,
  Filter,
  UserPlus,
  Eye,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockPosts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Senior Software Engineer at Google",
      graduationYear: "2018",
      avatar: "",
      time: "2 hours ago",
      category: "Career Advice",
      content: "Just hit my 5-year mark at Google! For any CS students wondering about career growth, here are the key things that helped me advance: 1) Never stop learning new technologies, 2) Build relationships across teams, 3) Take on projects outside your comfort zone. Happy to mentor anyone interested in tech careers!",
      likes: 24,
      comments: 8,
      shares: 3,
      isFollowing: true
    },
    {
      id: 2,
      author: "Michael Chen",
      role: "Product Manager at Microsoft",
      graduationYear: "2016",
      avatar: "",
      time: "5 hours ago",
      category: "Job Opportunity",
      content: "We're hiring for multiple PM positions at Microsoft! Looking for candidates with 2-3 years experience. Our university has always produced amazing talent. DM me if you're interested - happy to refer!",
      likes: 31,
      comments: 12,
      shares: 7,
      isFollowing: false
    },
    {
      id: 3,
      author: "Dr. Emily Rodriguez",
      role: "Research Scientist at Meta",
      graduationYear: "2015",
      avatar: "",
      time: "1 day ago",
      category: "Tech Talk",
      content: "Exciting developments in AI research! Just published a paper on neural network optimization. For students interested in ML research, here are some resources that helped me during my PhD journey...",
      likes: 45,
      comments: 18,
      shares: 12,
      isFollowing: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Tech Career Webinar",
      presenter: "Sarah Johnson & Team",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      attendees: 45,
      category: "Career Guidance"
    },
    {
      title: "Alumni Networking Mixer",
      presenter: "Alumni Association",
      date: "Dec 20, 2024", 
      time: "7:00 PM",
      attendees: 23,
      category: "Networking"
    },
    {
      title: "Industry Insights: FinTech",
      presenter: "Robert Kim (Goldman Sachs)",
      date: "Dec 22, 2024",
      time: "4:00 PM",
      attendees: 31,
      category: "Industry Talk"
    }
  ];

  const suggestedAlumni = [
    {
      name: "Alex Thompson",
      role: "Data Scientist at Netflix",
      graduationYear: "2019",
      industry: "Technology",
      expertise: ["Machine Learning", "Data Science", "Python"]
    },
    {
      name: "Lisa Park",
      role: "UX Designer at Airbnb",
      graduationYear: "2017",
      industry: "Design",
      expertise: ["UI/UX", "Product Design", "User Research"]
    },
    {
      name: "James Wilson",
      role: "Investment Banker at JP Morgan",
      graduationYear: "2016",
      industry: "Finance",
      expertise: ["Finance", "Investment Banking", "M&A"]
    }
  ];

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
              <Link to="/student/dashboard" className="text-primary font-medium">Feed</Link>
              <Link to="/student/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              <Link to="/student/mentors" className="text-muted-foreground hover:text-foreground">Find Mentors</Link>
              <Link to="/student/directory" className="text-muted-foreground hover:text-foreground">Alumni Directory</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search alumni..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-accent text-accent-foreground">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Student Profile */}
          <div className="lg:col-span-1">
            <Card className="shadow-card border-border/50">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-accent text-accent-foreground text-xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">John Doe</CardTitle>
                <CardDescription>Computer Science Student</CardDescription>
                <Badge className="bg-accent/10 text-accent border-accent/20">Class of 2025</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Following</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Events Attended</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Mentorship Requests</span>
                  <span className="font-medium">3</span>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Suggested Alumni */}
            <Card className="shadow-card border-border/50 mt-6">
              <CardHeader>
                <CardTitle className="text-base">Suggested Alumni</CardTitle>
                <CardDescription className="text-sm">Connect with alumni in your field</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedAlumni.slice(0, 2).map((alumni, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="text-sm bg-muted">
                          {alumni.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{alumni.name}</h4>
                        <p className="text-xs text-muted-foreground">{alumni.role}</p>
                        <p className="text-xs text-muted-foreground">Class of {alumni.graduationYear}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {alumni.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <UserPlus className="w-3 h-3 mr-1" />
                      Connect
                    </Button>
                    {index < 1 && <hr className="border-border" />}
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Alumni Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Feed Header */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Alumni Insights</h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="ghost" size="sm">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Trending
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed - Read Only for Students */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <Card key={post.id} className="shadow-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-muted">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-foreground">{post.author}</h3>
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          <Button
                            variant={post.isFollowing ? "default" : "outline"}
                            size="sm"
                            className={post.isFollowing ? "bg-primary text-primary-foreground" : ""}
                          >
                            {post.isFollowing ? "Following" : "Follow"}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{post.role}</p>
                        <p className="text-sm text-muted-foreground mb-3">Class of {post.graduationYear} • {post.time}</p>
                        <p className="text-foreground mb-4">{post.content}</p>
                        
                        {/* Post Stats (Read-only for students) */}
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes} likes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments} comments</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Share className="w-4 h-4" />
                            <span>{post.shares} shares</span>
                          </div>
                        </div>
                        
                        {/* Message Alumni Button */}
                        <div className="mt-4 pt-4 border-t border-border">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message {post.author.split(' ')[0]}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">by {event.presenter}</p>
                        <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                        <Badge variant="secondary" className="text-xs mt-1">{event.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{event.attendees} registered</p>
                      <Button size="sm" variant="outline">RSVP</Button>
                    </div>
                    {index < upcomingEvents.length - 1 && <hr className="border-border" />}
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Mentorship Opportunities */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Available Mentors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedAlumni.slice(0, 2).map((mentor, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{mentor.name}</p>
                        <p className="text-xs text-muted-foreground">{mentor.industry}</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full bg-gradient-accent text-accent-foreground">
                      Request Mentorship
                    </Button>
                    {index < 1 && <hr className="border-border" />}
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Find More Mentors
                </Button>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Career Guidance
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask a Question
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Join Study Groups
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;