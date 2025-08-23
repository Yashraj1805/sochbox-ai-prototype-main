import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { 
  LayoutDashboard, 
  Megaphone, 
  Users, 
  BarChart3, 
  Lightbulb,
  Sparkles,
  Plus,
  Search,
  Filter,
  Clock,
  Star,
  Edit,
  Play,
  Pause,
  Trash2,
  Copy,
  Download,
  Share2,
  Eye,
  MessageSquare,
  ThumbsUp,
  Target,
  Brain,
  Mic,
  Video,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
  Activity,
  Target as TargetIcon,
  Users as UsersIcon,
  Clock as ClockIcon,
  Zap as ZapIcon,
  ArrowUpRight,
  ArrowDownRight,
  Filter as FilterIcon,
  Download as DownloadIcon,
  RefreshCw,
  Globe,
  DollarSign,
  Users2,
  Eye as EyeIcon,
  MousePointer,
  Heart,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Twitter,
  CheckCircle,
  XCircle,
  Menu,
  X
} from "lucide-react";

const Creators = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-heading font-bold text-foreground">SochBox AI</span>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {!isMobile && (
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/community">Community</Link>
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleSidebar}
                className="md:hidden"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-card/95 backdrop-blur-sm border-r border-border/50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <nav className="p-4 sm:p-6 space-y-2">
            <div className="flex items-center justify-between md:hidden mb-4">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/brand" onClick={() => isMobile && setSidebarOpen(false)}>
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/campaigns" onClick={() => isMobile && setSidebarOpen(false)}>
                <Megaphone className="w-4 h-4 mr-2" />
                Campaigns
              </Link>
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Creators
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/brand-analytics" onClick={() => isMobile && setSidebarOpen(false)}>
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/insights" onClick={() => isMobile && setSidebarOpen(false)}>
                <Lightbulb className="w-4 h-4 mr-2" />
                Insights
              </Link>
            </Button>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 w-full">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Creators</h1>
                <p className="text-muted-foreground">Discover and manage influencer partnerships</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto">
                <UserPlus className="w-4 h-4 mr-2" />
                Find Creators
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search creators..." className="pl-10" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Followers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="nano">Nano (1K-10K)</SelectItem>
                    <SelectItem value="micro">Micro (10K-100K)</SelectItem>
                    <SelectItem value="macro">Macro (100K-1M)</SelectItem>
                    <SelectItem value="mega">Mega (1M+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="all">All Creators</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="partners">Partners</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* AI Recommended Creators */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-primary" />
                      AI Recommended Creators
                    </CardTitle>
                    <CardDescription>Creators matched to your brand based on AI analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        name: "Alex Chen",
                        category: "Technology",
                        followers: "280K",
                        matchScore: "98%",
                        engagement: "8.2%",
                        location: "San Francisco, CA",
                        platforms: ["YouTube", "Instagram", "Twitter"],
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">AC</div>
                      },
                      {
                        name: "Sarah Miller",
                        category: "Lifestyle",
                        followers: "150K",
                        matchScore: "94%",
                        engagement: "12.5%",
                        location: "Los Angeles, CA",
                        platforms: ["Instagram", "TikTok", "YouTube"],
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">SM</div>
                      },
                      {
                        name: "Mike Johnson",
                        category: "Gaming",
                        followers: "320K",
                        matchScore: "91%",
                        engagement: "9.8%",
                        location: "Austin, TX",
                        platforms: ["Twitch", "YouTube", "Twitter"],
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">MJ</div>
                      }
                    ].map((creator, index) => (
                      <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-3">
                                {creator.avatar}
                                <div className="min-w-0">
                                  <CardTitle className="text-base sm:text-lg mb-1">{creator.name}</CardTitle>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <Badge variant="outline" className="text-xs">{creator.category}</Badge>
                                    <Badge variant="secondary" className="text-xs">{creator.followers}</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge variant="default" className="text-green-500 flex-shrink-0">{creator.matchScore}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-muted-foreground">{creator.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Heart className="w-3 h-3 text-muted-foreground" />
                              <span className="text-muted-foreground">Engagement: {creator.engagement}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {creator.platforms.map((platform, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {platform}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Mail className="w-3 h-3 mr-1" />
                              Contact
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Partner Creators */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users2 className="w-5 h-5 mr-2 text-primary" />
                      Partner Creators
                    </CardTitle>
                    <CardDescription>Creators you're currently working with</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        name: "Emma Davis",
                        category: "Technology",
                        followers: "190K",
                        status: "Active",
                        campaigns: 3,
                        lastActive: "2 days ago",
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">ED</div>
                      },
                      {
                        name: "David Wilson",
                        category: "Lifestyle",
                        followers: "85K",
                        status: "Active",
                        campaigns: 2,
                        lastActive: "1 week ago",
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">DW</div>
                      },
                      {
                        name: "Lisa Chen",
                        category: "Beauty",
                        followers: "220K",
                        status: "Paused",
                        campaigns: 1,
                        lastActive: "3 weeks ago",
                        avatar: <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">LC</div>
                      }
                    ].map((creator, index) => (
                      <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-3">
                                {creator.avatar}
                                <div className="min-w-0">
                                  <CardTitle className="text-base sm:text-lg mb-1">{creator.name}</CardTitle>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <Badge variant="outline" className="text-xs">{creator.category}</Badge>
                                    <Badge variant="outline" className="text-xs">{creator.followers}</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge variant={
                              creator.status === 'Active' ? 'default' : 'outline'
                            } className="flex-shrink-0">
                              {creator.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Target className="w-3 h-3 text-muted-foreground" />
                              <span className="text-muted-foreground">Campaigns: {creator.campaigns}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-muted-foreground">Last active: {creator.lastActive}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Message
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                              <BarChart className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommended" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>AI Recommended Creators</CardTitle>
                    <CardDescription>Top creators matched to your brand profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: "Alex Chen", category: "Technology", matchScore: "98%", followers: "280K" },
                        { name: "Sarah Miller", category: "Lifestyle", matchScore: "94%", followers: "150K" },
                        { name: "Mike Johnson", category: "Gaming", matchScore: "91%", followers: "320K" }
                      ].map((creator, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{creator.name}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{creator.category}</Badge>
                            <span className="text-sm text-muted-foreground">{creator.followers} followers</span>
                          </div>
                          <div className="text-sm text-primary mb-2">Match Score: {creator.matchScore}</div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Profile</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="partners" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Partner Creators</CardTitle>
                    <CardDescription>Creators you're currently collaborating with</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: "Emma Davis", category: "Technology", campaigns: 3, status: "Active" },
                        { name: "David Wilson", category: "Lifestyle", campaigns: 2, status: "Active" },
                        { name: "Lisa Chen", category: "Beauty", campaigns: 1, status: "Paused" }
                      ].map((creator, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{creator.name}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{creator.category}</Badge>
                            <span className="text-sm text-muted-foreground">Campaigns: {creator.campaigns}</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">Status: {creator.status}</div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Details</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Favorite Creators</CardTitle>
                    <CardDescription>Creators you've saved for future collaborations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">No favorite creators yet. Start exploring and save creators you're interested in!</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Creators;
