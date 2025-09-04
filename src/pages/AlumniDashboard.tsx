import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  PlusCircle, 
  Heart, 
  MessageCircle, 
  Share, 
  Calendar, 
  Users, 
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Edit3,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniDashboard = () => {
  const [newPost, setNewPost] = useState("");
  const [postCategory, setPostCategory] = useState("");

  const mockPosts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "Senior Software Engineer at Google",
      avatar: "",
      time: "2 hours ago",
      category: "Career Advice",
      content: "Just hit my 5-year mark at Google! For any CS students wondering about career growth, here are the key things that helped me advance: 1) Never stop learning new technologies, 2) Build relationships across teams, 3) Take on projects outside your comfort zone. Happy to mentor anyone interested in tech careers!",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: "Michael Chen",
      role: "Product Manager at Microsoft",
      avatar: "",
      time: "5 hours ago",
      category: "Job Opportunity",
      content: "We're hiring for multiple PM positions at Microsoft! Looking for candidates with 2-3 years experience. Our university has always produced amazing talent. DM me if you're interested - happy to refer!",
      likes: 31,
      comments: 12,
      shares: 7
    }
  ];

  const upcomingEvents = [
    {
      title: "Tech Career Webinar",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      attendees: 45
    },
    {
      title: "Alumni Networking Mixer",
      date: "Dec 20, 2024", 
      time: "7:00 PM",
      attendees: 23
    }
  ];

  const handleCreatePost = () => {
    if (newPost.trim() && postCategory) {
      // In real implementation, this would create a new post
      setNewPost("");
      setPostCategory("");
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
              <Link to="/alumni/dashboard" className="text-primary font-medium">Feed</Link>
              <Link to="/alumni/directory" className="text-muted-foreground hover:text-foreground">Directory</Link>
              <Link to="/alumni/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              <Link to="/alumni/mentorship" className="text-muted-foreground hover:text-foreground">Mentorship</Link>
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-card border-border/50">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">SJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Senior Software Engineer at Google</CardDescription>
                <Badge className="bg-primary/10 text-primary border-primary/20">Class of 2018</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Posts</span>
                  <span className="font-medium">42</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Connections</span>
                  <span className="font-medium">284</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Mentees</span>
                  <span className="font-medium">8</span>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card border-border/50 mt-6">
              <CardHeader>
                <CardTitle className="text-base">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Profile Views</p>
                    <p className="text-xs text-muted-foreground">+23% from last month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Messages</p>
                    <p className="text-xs text-muted-foreground">12 unread</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Share with the Community</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <Textarea
                      placeholder="Share your experiences, job opportunities, or insights..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      rows={3}
                    />
                    <div className="flex items-center justify-between">
                      <Select value={postCategory} onValueChange={setPostCategory}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career-advice">Career Advice</SelectItem>
                          <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                          <SelectItem value="tech-talk">Tech Talk</SelectItem>
                          <SelectItem value="mentorship">Mentorship</SelectItem>
                          <SelectItem value="campus-memories">Campus Memories</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button 
                        onClick={handleCreatePost}
                        disabled={!newPost.trim() || !postCategory}
                        className="bg-gradient-primary text-primary-foreground"
                      >
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
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
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-foreground">{post.author}</h3>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{post.role}</p>
                        <p className="text-sm text-muted-foreground mb-3">{post.time}</p>
                        <p className="text-foreground mb-4">{post.content}</p>
                        
                        {/* Post Actions */}
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                            <Share className="w-4 h-4" />
                            <span>{post.shares}</span>
                          </button>
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
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                    <p className="text-xs text-muted-foreground">{event.attendees} attending</p>
                    {index < upcomingEvents.length - 1 && <hr className="border-border" />}
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>

            {/* Mentorship Requests */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Mentorship Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-accent text-accent-foreground">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">CS Student, Class of 2025</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    "Hi! I'm interested in transitioning to product management after graduation..."
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">Accept</Button>
                    <Button size="sm" variant="ghost" className="flex-1">Decline</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Post Job Opening
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Event
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Find Alumni
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;