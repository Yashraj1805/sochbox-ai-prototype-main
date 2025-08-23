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
  Menu,
  X
} from "lucide-react";

const Campaigns = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <Megaphone className="w-4 h-4 mr-2" />
              Campaigns
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/creators" onClick={() => isMobile && setSidebarOpen(false)}>
                <Users className="w-4 h-4 mr-2" />
                Creators
              </Link>
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Campaigns</h1>
                <p className="text-muted-foreground">Manage and track your influencer marketing campaigns</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search campaigns..." className="pl-10" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
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
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
                <TabsTrigger value="all">All Campaigns</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="paused">Paused</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      title: "Summer Tech Launch",
                      category: "Technology",
                      status: "Active",
                      progress: 75,
                      creators: 12,
                      reach: "890K",
                      budget: "$25K",
                      endDate: "Aug 15, 2024"
                    },
                    {
                      title: "Lifestyle Brand Collab",
                      category: "Lifestyle",
                      status: "Planning",
                      progress: 45,
                      creators: 8,
                      reach: "420K",
                      budget: "$18K",
                      endDate: "Sep 30, 2024"
                    },
                    {
                      title: "Gaming Tournament",
                      category: "Gaming",
                      status: "Active",
                      progress: 60,
                      creators: 15,
                      reach: "1.2M",
                      budget: "$35K",
                      endDate: "Jul 20, 2024"
                    },
                    {
                      title: "Fashion Week",
                      category: "Fashion",
                      status: "Paused",
                      progress: 30,
                      creators: 6,
                      reach: "280K",
                      budget: "$22K",
                      endDate: "Oct 15, 2024"
                    },
                    {
                      title: "Tech Review Series",
                      category: "Technology",
                      status: "Completed",
                      progress: 100,
                      creators: 10,
                      reach: "650K",
                      budget: "$20K",
                      endDate: "Jun 30, 2024"
                    },
                    {
                      title: "Wellness Challenge",
                      category: "Lifestyle",
                      status: "Planning",
                      progress: 20,
                      creators: 5,
                      reach: "180K",
                      budget: "$15K",
                      endDate: "Nov 10, 2024"
                    }
                  ].map((campaign, index) => (
                    <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base sm:text-lg mb-2">{campaign.title}</CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{campaign.category}</Badge>
                              <Badge variant={
                                campaign.status === 'Active' ? 'default' : 
                                campaign.status === 'Planning' ? 'secondary' : 
                                campaign.status === 'Paused' ? 'outline' : 'secondary'
                              }>
                                {campaign.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{campaign.progress}%</span>
                          </div>
                          <Progress value={campaign.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Creators:</span>
                            <p className="font-medium">{campaign.creators}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Reach:</span>
                            <p className="font-medium">{campaign.reach}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Budget:</span>
                            <p className="font-medium">{campaign.budget}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Ends:</span>
                            <p className="font-medium">{campaign.endDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="planning" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Planning Campaigns</CardTitle>
                    <CardDescription>Campaigns in the planning phase</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Lifestyle Brand Collab", category: "Lifestyle", progress: 45, budget: "$18K" },
                        { title: "Wellness Challenge", category: "Lifestyle", progress: 20, budget: "$15K" }
                      ].map((campaign, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{campaign.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{campaign.category}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {campaign.progress}%</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">Budget: {campaign.budget}</div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Continue Planning</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="active" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Active Campaigns</CardTitle>
                    <CardDescription>Currently running campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Summer Tech Launch", category: "Technology", progress: 75, reach: "890K" },
                        { title: "Gaming Tournament", category: "Gaming", progress: 60, reach: "1.2M" }
                      ].map((campaign, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{campaign.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{campaign.category}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {campaign.progress}%</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">Reach: {campaign.reach}</div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Progress</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="paused" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Paused Campaigns</CardTitle>
                    <CardDescription>Campaigns that are temporarily paused</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Fashion Week</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">Fashion</Badge>
                        <span className="text-sm text-muted-foreground">Progress: 30%</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Budget: $22K</div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Resume</Button>
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Completed Campaigns</CardTitle>
                    <CardDescription>Successfully completed campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Tech Review Series</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">Technology</Badge>
                        <span className="text-sm text-muted-foreground">Progress: 100%</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Final Reach: 650K • Budget: $20K</div>
                      <Button size="sm" variant="outline" className="w-full sm:w-auto">View Report</Button>
                    </div>
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

export default Campaigns;
