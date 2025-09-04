import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar as CalendarIcon, 
  Users, 
  Bell,
  MapPin,
  Clock,
  User,
  CheckCircle,
  Star,
  Eye,
  Filter,
  Heart,
  Share,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentEvents = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock upcoming events hosted by alumni
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Career Webinar",
      presenter: "Sarah Johnson & Team",
      presenterRole: "Senior Software Engineer at Google",
      presenterAvatar: "SJ",
      date: "Dec 15, 2024",
      time: "6:00 PM",
      attendees: 45,
      maxAttendees: 100,
      category: "Career Guidance",
      location: "Virtual Event",
      description: "Learn about career growth in tech, interview preparation, and industry insights from Google engineers.",
      isRSVPed: false
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      presenter: "Michael Chen",
      presenterRole: "Product Manager at Microsoft",
      presenterAvatar: "MC",
      date: "Dec 20, 2024",
      time: "7:00 PM",
      attendees: 23,
      maxAttendees: 50,
      category: "Networking",
      location: "Campus Center",
      description: "Connect with fellow alumni and current students in a relaxed networking environment.",
      isRSVPed: true
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      presenter: "Lisa Park",
      presenterRole: "Founder & CEO at TechStart",
      presenterAvatar: "LP",
      date: "Dec 25, 2024",
      time: "8:00 PM",
      attendees: 67,
      maxAttendees: 80,
      category: "Entrepreneurship",
      location: "Innovation Hub",
      description: "Watch student startups pitch their ideas to a panel of successful alumni entrepreneurs.",
      isRSVPed: false
    },
    {
      id: 4,
      title: "Data Science Workshop",
      presenter: "Dr. Emily Rodriguez",
      presenterRole: "Senior Data Scientist at Amazon",
      presenterAvatar: "ER",
      date: "Dec 28, 2024",
      time: "2:00 PM",
      attendees: 34,
      maxAttendees: 60,
      category: "Technical Skills",
      location: "Computer Lab 101",
      description: "Hands-on workshop covering machine learning fundamentals and real-world applications.",
      isRSVPed: true
    },
    {
      id: 5,
      title: "Finance & Investment Talk",
      presenter: "David Kumar",
      presenterRole: "Investment Banker at Goldman Sachs",
      presenterAvatar: "DK",
      date: "Jan 5, 2025",
      time: "5:00 PM",
      attendees: 28,
      maxAttendees: 40,
      category: "Finance",
      location: "Business School Auditorium",
      description: "Insights into investment banking, financial markets, and career opportunities in finance.",
      isRSVPed: false
    }
  ];

  // Mock RSVPed events for calendar
  const rsvpedEvents = [
    {
      id: 2,
      title: "Alumni Networking Mixer",
      date: new Date(2024, 11, 20), // Dec 20, 2024
      time: "7:00 PM",
      location: "Campus Center"
    },
    {
      id: 4,
      title: "Data Science Workshop",
      date: new Date(2024, 11, 28), // Dec 28, 2024
      time: "2:00 PM",
      location: "Computer Lab 101"
    }
  ];

  // Mock event history (attended events)
  const eventHistory = [
    {
      id: 1,
      title: "AI & Machine Learning Conference",
      date: "Nov 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      category: "Technical Skills",
      status: "attended",
      alumni: {
        name: "Dr. Emily Rodriguez",
        role: "Senior Data Scientist at Amazon",
        avatar: "ER",
        graduationYear: "2015",
        company: "Amazon",
        bio: "Passionate about helping students break into data science and AI. Former Google engineer with expertise in ML pipelines.",
        rating: 4.9,
        mentees: 12
      }
    },
    {
      id: 2,
      title: "Product Management Masterclass",
      date: "Oct 28, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Business School",
      category: "Career Guidance",
      status: "attended",
      alumni: {
        name: "James Thompson",
        role: "Product Manager at Microsoft",
        avatar: "JT",
        graduationYear: "2017",
        company: "Microsoft",
        bio: "Experienced PM with a track record of launching successful products. Love mentoring aspiring product managers.",
        rating: 4.8,
        mentees: 8
      }
    },
    {
      id: 3,
      title: "Entrepreneurship Panel Discussion",
      date: "Oct 10, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Hub",
      category: "Entrepreneurship",
      status: "attended",
      alumni: {
        name: "Lisa Park",
        role: "Founder & CEO at TechStart",
        avatar: "LP",
        graduationYear: "2013",
        company: "TechStart",
        bio: "Serial entrepreneur with 3 successful exits. Passionate about helping students build and scale startups.",
        rating: 4.9,
        mentees: 15
      }
    }
  ];

  const categories = ["all", "Career Guidance", "Networking", "Entrepreneurship", "Technical Skills", "Finance"];

  const handleRSVP = (eventId: number) => {
    console.log("RSVPing to event:", eventId);
    // In real implementation, this would update the RSVP status
  };

  const handleCancelRSVP = (eventId: number) => {
    console.log("Canceling RSVP for event:", eventId);
    // In real implementation, this would cancel the RSVP
  };

  const getEventsForDate = (date: Date) => {
    return rsvpedEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career Guidance":
        return "bg-blue-100 text-blue-800";
      case "Networking":
        return "bg-green-100 text-green-800";
      case "Entrepreneurship":
        return "bg-purple-100 text-purple-800";
      case "Technical Skills":
        return "bg-orange-100 text-orange-800";
      case "Finance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.presenter.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/student/dashboard" className="text-muted-foreground hover:text-foreground">Feed</Link>
              <Link to="/student/events" className="text-primary font-medium">Events</Link>
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
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Events</h1>
            <p className="text-muted-foreground">Discover and join events hosted by our amazing alumni community</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Upcoming Events */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search and Filter */}
              <Card className="shadow-card border-border/50">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="text-xs"
                        >
                          {category === "all" ? "All" : category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>
                    Events hosted by alumni for students
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {event.presenterAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{event.title}</h3>
                              <p className="text-sm text-muted-foreground">by {event.presenter}</p>
                              <p className="text-xs text-muted-foreground">{event.presenterRole}</p>
                            </div>
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-foreground mb-3">{event.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees}/{event.maxAttendees} registered</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline">
                                <Heart className="w-4 h-4 mr-1" />
                                Like
                              </Button>
                              <Button size="sm" variant="outline">
                                <Share className="w-4 h-4 mr-1" />
                                Share
                              </Button>
                            </div>
                            {event.isRSVPed ? (
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleCancelRSVP(event.id)}
                                className="text-red-600 border-red-200 hover:bg-red-50"
                              >
                                Cancel RSVP
                              </Button>
                            ) : (
                              <Button 
                                size="sm" 
                                onClick={() => handleRSVP(event.id)}
                                className="bg-gradient-primary text-primary-foreground"
                              >
                                RSVP
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Calendar and Reminders */}
            <div className="space-y-6">
              {/* Calendar */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    My Events Calendar
                  </CardTitle>
                  <CardDescription>
                    Your RSVPed events and reminders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                    
                    {/* Selected Date Events */}
                    {selectedDate && getEventsForDate(selectedDate).length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">
                          Events on {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </h4>
                        {getEventsForDate(selectedDate).map((event) => (
                          <div key={event.id} className="p-2 bg-primary/5 rounded border border-primary/20">
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.time} • {event.location}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Reminders */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Event Reminders
                  </CardTitle>
                  <CardDescription>
                    Your registered events
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {rsvpedEvents.map((event) => (
                    <div key={event.id} className="p-3 border border-border/50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <CalendarIcon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            {event.date.toLocaleDateString()} at {event.time}
                          </p>
                          <p className="text-xs text-muted-foreground">{event.location}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          RSVPed
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event History Section */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Event History
              </CardTitle>
              <CardDescription>
                Events you've attended and the alumni you met
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {eventHistory.map((event) => (
                  <div key={event.id} className="p-4 border border-border/50 rounded-lg">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Event Details */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-lg">{event.title}</h3>
                              <Badge className={getCategoryColor(event.category)}>
                                {event.category}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center space-x-1">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              Attended
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Alumni Details */}
                      <div className="lg:col-span-1">
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Event Host</h4>
                          <div className="flex items-start space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {event.alumni.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h5 className="font-medium text-sm">{event.alumni.name}</h5>
                              <p className="text-xs text-muted-foreground">{event.alumni.role}</p>
                              <p className="text-xs text-muted-foreground">{event.alumni.company} • Class of {event.alumni.graduationYear}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs font-medium">{event.alumni.rating}</span>
                                <span className="text-xs text-muted-foreground">({event.alumni.mentees} mentees)</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{event.alumni.bio}</p>
                          <div className="flex space-x-2 mt-3">
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              Connect
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                              <User className="w-3 h-3 mr-1" />
                              View Profile
                            </Button>
                          </div>
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
    </div>
  );
};

export default StudentEvents;


