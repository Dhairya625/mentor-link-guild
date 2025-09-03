import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare,
  Settings,
  Shield,
  BarChart3,
  UserCheck,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { 
      title: "Total Users", 
      value: "1,247", 
      change: "+12%", 
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    { 
      title: "Alumni", 
      value: "892", 
      change: "+8%", 
      trend: "up",
      icon: UserCheck,
      color: "text-primary"
    },
    { 
      title: "Students", 
      value: "355", 
      change: "+18%", 
      trend: "up",
      icon: Users,
      color: "text-accent"
    },
    { 
      title: "Active Events", 
      value: "23", 
      change: "+4", 
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    }
  ];

  const pendingApprovals = [
    {
      type: "event",
      title: "AI in Healthcare Webinar",
      author: "Dr. Sarah Johnson",
      date: "Dec 20, 2024",
      status: "pending",
      description: "A comprehensive overview of AI applications in modern healthcare..."
    },
    {
      type: "user",
      title: "Michael Chen - Alumni Verification",
      author: "Michael Chen",
      company: "Microsoft",
      graduationYear: "2016",
      status: "pending"
    },
    {
      type: "event",
      title: "Tech Career Fair 2024",
      author: "Alumni Association",
      date: "Jan 15, 2025",
      status: "pending",
      description: "Annual career fair connecting students with top tech companies..."
    }
  ];

  const recentActivity = [
    {
      action: "New user registration",
      user: "Emily Rodriguez",
      type: "Student",
      timestamp: "2 minutes ago"
    },
    {
      action: "Event created",
      user: "James Wilson",
      type: "Alumni",
      timestamp: "15 minutes ago"
    },
    {
      action: "Post reported",
      user: "Anonymous",
      type: "Report",
      timestamp: "1 hour ago"
    },
    {
      action: "Mentorship request",
      user: "Lisa Park",
      type: "Student",
      timestamp: "2 hours ago"
    }
  ];

  const topPosts = [
    {
      title: "Career Growth at Google - 5 Year Journey",
      author: "Sarah Johnson",
      engagement: 156,
      category: "Career Advice"
    },
    {
      title: "Microsoft PM Positions Available",
      author: "Michael Chen", 
      engagement: 143,
      category: "Job Opportunity"
    },
    {
      title: "ML Research Opportunities",
      author: "Dr. Emily Rodriguez",
      engagement: 98,
      category: "Tech Talk"
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
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Admin Panel</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/admin/dashboard" className="text-primary font-medium">Dashboard</Link>
              <Link to="/admin/users" className="text-muted-foreground hover:text-foreground">Users</Link>
              <Link to="/admin/events" className="text-muted-foreground hover:text-foreground">Events</Link>
              <Link to="/admin/content" className="text-muted-foreground hover:text-foreground">Content</Link>
              <Link to="/admin/reports" className="text-muted-foreground hover:text-foreground">Reports</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-muted-foreground text-background">AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="approvals" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="content">Content Overview</TabsTrigger>
              </TabsList>

              {/* Pending Approvals Tab */}
              <TabsContent value="approvals" className="space-y-4">
                <Card className="shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                      Items Requiring Approval
                    </CardTitle>
                    <CardDescription>
                      Review and approve user registrations, events, and content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pendingApprovals.map((item, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant={item.type === 'event' ? 'default' : 'secondary'}>
                                {item.type === 'event' ? 'Event' : 'User'}
                              </Badge>
                              <Badge variant="outline" className="text-orange-600 border-orange-200">
                                <Clock className="w-3 h-3 mr-1" />
                                Pending
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              by {item.author}
                              {item.type === 'event' && ` • ${item.date}`}
                              {item.type === 'user' && ` • ${item.company} • Class of ${item.graduationYear}`}
                            </p>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-4">
                <Card className="shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Platform Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <p className="text-2xl font-bold text-primary">247</p>
                          <p className="text-sm text-muted-foreground">Posts This Month</p>
                        </div>
                        <div className="text-center p-4 bg-muted/30 rounded-lg">
                          <p className="text-2xl font-bold text-accent">89%</p>
                          <p className="text-sm text-muted-foreground">User Satisfaction</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Top Performing Content</h4>
                        {topPosts.map((post, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{post.title}</p>
                              <p className="text-xs text-muted-foreground">by {post.author}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{post.category}</Badge>
                              <div className="text-right">
                                <p className="text-sm font-medium">{post.engagement}</p>
                                <p className="text-xs text-muted-foreground">engagements</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Overview Tab */}
              <TabsContent value="content" className="space-y-4">
                <Card className="shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Content Moderation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-xl font-bold text-green-600">142</p>
                        <p className="text-sm text-green-600">Approved Posts</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <p className="text-xl font-bold text-orange-600">3</p>
                        <p className="text-sm text-orange-600">Pending Review</p>
                      </div>
                      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-xl font-bold text-red-600">1</p>
                        <p className="text-sm text-red-600">Reported Content</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm text-red-800">Inappropriate Language Detected</p>
                          <p className="text-xs text-red-600">Post by Anonymous User • 2 hours ago</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Review</Button>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">Remove</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.user} • {activity.type}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                    {index < recentActivity.length - 1 && <hr className="border-border" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Services</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Storage</span>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">89% Full</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backups</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Current</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;