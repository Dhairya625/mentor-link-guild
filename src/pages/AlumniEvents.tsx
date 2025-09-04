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
import { Calendar } from "@/components/ui/calendar";
import { 
  PlusCircle, 
  Bell, 
  Calendar as CalendarIcon, 
  Users, 
  Settings,
  LogOut,
  Clock,
  MapPin,
  UserPlus,
  MessageSquare,
  Heart,
  Share
} from "lucide-react";
import { Link } from "react-router-dom";

const AlumniEvents = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCreateEventDialog, setShowCreateEventDialog] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    maxAttendees: ""
  });

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: "event_reminder",
      title: "Tech Career Webinar Tomorrow",
      message: "Don't forget about the Tech Career Webinar scheduled for tomorrow at 6:00 PM",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      type: "new_attendee",
      title: "New RSVP for Alumni Networking Mixer",
      message: "John Doe has registered for your Alumni Networking Mixer event",
      time: "4 hours ago",
      isRead: false
    },
    {
      id: 3,
      type: "event_created",
      title: "Event Created Successfully",
      message: "Your 'Startup Pitch Night' event has been created and is now live",
      time: "1 day ago",
      isRead: true
    },
    {
      id: 4,
      type: "mentorship_request",
      title: "New Mentorship Request",
      message: "Sarah Johnson has requested mentorship for career guidance",
      time: "2 days ago",
      isRead: true
    }
  ];

  // Mock events data for calendar
  const events = [
    {
      id: 1,
      title: "Tech Career Webinar",
      date: new Date(2024, 11, 15), // Dec 15, 2024
      time: "6:00 PM",
      attendees: 45,
      category: "Career"
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      date: new Date(2024, 11, 20), // Dec 20, 2024
      time: "7:00 PM",
      attendees: 23,
      category: "Networking"
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: new Date(2024, 11, 25), // Dec 25, 2024
      time: "8:00 PM",
      attendees: 67,
      category: "Entrepreneurship"
    }
  ];

  const handleCreateEvent = () => {
    if (eventForm.title && eventForm.description && eventForm.date && eventForm.time) {
      // In real implementation, this would create a new event
      console.log("Creating event:", eventForm);
      setEventForm({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        maxAttendees: ""
      });
      setShowCreateEventDialog(false);
    }
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "event_reminder":
        return <CalendarIcon className="w-4 h-4 text-blue-500" />;
      case "new_attendee":
        return <UserPlus className="w-4 h-4 text-green-500" />;
      case "event_created":
        return <PlusCircle className="w-4 h-4 text-purple-500" />;
      case "mentorship_request":
        return <MessageSquare className="w-4 h-4 text-orange-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career":
        return "bg-blue-100 text-blue-800";
      case "Networking":
        return "bg-green-100 text-green-800";
      case "Entrepreneurship":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
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
              <Link to="/alumni/events" className="text-primary font-medium">Events</Link>
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Notifications */}
          <div className="lg:col-span-1 space-y-6">
            {/* Notifications Section */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </CardTitle>
                <CardDescription>
                  Stay updated with your events and activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border ${
                      notification.isRead 
                        ? 'bg-muted/30 border-border/50' 
                        : 'bg-primary/5 border-primary/20'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {notification.time}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Create Event Tile */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Create Event
                </CardTitle>
                <CardDescription>
                  Organize and host events for the alumni community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={showCreateEventDialog} onOpenChange={setShowCreateEventDialog}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary text-primary-foreground">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Create New Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Event</DialogTitle>
                      <DialogDescription>
                        Fill in the details to create a new event for the alumni community.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Event Title</Label>
                          <Input
                            id="title"
                            value={eventForm.title}
                            onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                            placeholder="Enter event title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select value={eventForm.category} onValueChange={(value) => setEventForm({...eventForm, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="career">Career</SelectItem>
                              <SelectItem value="networking">Networking</SelectItem>
                              <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                              <SelectItem value="social">Social</SelectItem>
                              <SelectItem value="educational">Educational</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={eventForm.description}
                          onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                          placeholder="Describe your event..."
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={eventForm.date}
                            onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input
                            id="time"
                            type="time"
                            value={eventForm.time}
                            onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={eventForm.location}
                            onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                            placeholder="Event location"
                          />
                        </div>
                        <div>
                          <Label htmlFor="maxAttendees">Max Attendees</Label>
                          <Input
                            id="maxAttendees"
                            type="number"
                            value={eventForm.maxAttendees}
                            onChange={(e) => setEventForm({...eventForm, maxAttendees: e.target.value})}
                            placeholder="Maximum attendees"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowCreateEventDialog(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleCreateEvent} className="bg-gradient-primary text-primary-foreground">
                          Create Event
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Events Calendar
                </CardTitle>
                <CardDescription>
                  View and manage your events in a beautiful calendar interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Calendar */}
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>

                  {/* Selected Date Events */}
                  {selectedDate && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Events on {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h3>
                      {getEventsForDate(selectedDate).length > 0 ? (
                        <div className="space-y-3">
                          {getEventsForDate(selectedDate).map((event) => (
                            <Card key={event.id} className="border-border/50">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                                      <Badge className={getCategoryColor(event.category)}>
                                        {event.category}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                      <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{event.time}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4" />
                                        <span>{event.attendees} attending</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline">
                                      <Heart className="w-4 h-4 mr-1" />
                                      RSVP
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      <Share className="w-4 h-4 mr-1" />
                                      Share
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>No events scheduled for this date</p>
                          <p className="text-sm">Create an event to get started!</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Upcoming Events Summary */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    <div className="grid gap-3">
                      {events.slice(0, 3).map((event) => (
                        <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border/50">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <CalendarIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {event.date.toLocaleDateString()} at {event.time}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {event.attendees} attending
                            </p>
                          </div>
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniEvents;


