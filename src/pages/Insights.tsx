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
  Target as TargetIcon2,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon2,
  DollarSign as DollarSignIcon,
  TrendingUp as TrendingUpIcon2,
  Zap as ZapIcon2,
  Target as TargetIcon3,
  Users as UsersIcon3,
  Clock as ClockIcon2,
  Calendar as CalendarIcon,
  AlertTriangle,
  CheckCircle2,
  Info,
  LightbulbIcon,
  Menu,
  X
} from "lucide-react";

const Insights = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <Lightbulb className="w-4 h-4 mr-2" />
              Insights
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Insights</h1>
                <p className="text-muted-foreground">AI-powered insights and recommendations for your brand</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="All Insights" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Insights</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="opportunities">Opportunities</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="all">All Insights</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* AI Insights */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-primary" />
                      AI-Powered Insights
                    </CardTitle>
                    <CardDescription>Smart recommendations based on your brand performance</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        title: "Creator Partnership Opportunity",
                        type: "Opportunity",
                        priority: "High",
                        description: "Tech creators are showing 25% higher engagement with your content",
                        impact: "Potential +15% reach",
                        icon: <UsersIcon3 className="w-8 h-8 text-blue-500" />
                      },
                      {
                        title: "Campaign Timing Optimization",
                        type: "Performance",
                        priority: "Medium",
                        description: "Posts between 2-4 PM show 18% better engagement",
                        impact: "Potential +18% engagement",
                        icon: <ClockIcon2 className="w-8 h-8 text-green-500" />
                      },
                      {
                        title: "Content Format Trend",
                        type: "Trending",
                        priority: "Medium",
                        description: "Video content is outperforming static posts by 32%",
                        impact: "Potential +32% performance",
                        icon: <Video className="w-8 h-8 text-purple-500" />
                      }
                    ].map((insight, index) => (
                      <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                {insight.icon}
                                <Badge variant={
                                  insight.type === 'Opportunity' ? 'default' : 
                                  insight.type === 'Performance' ? 'secondary' : 'outline'
                                }>
                                  {insight.type}
                                </Badge>
                              </div>
                              <CardTitle className="text-base sm:text-lg mb-2">{insight.title}</CardTitle>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant={
                                  insight.priority === 'High' ? 'destructive' : 'secondary'
                                }>
                                  {insight.priority} Priority
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{insight.description}</p>
                          
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2">
                              <TrendingUpIcon className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-primary">{insight.impact}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="w-3 h-3 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                              <Share2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Market Trends */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUpIcon className="w-5 h-5 mr-2 text-primary" />
                      Market Trends
                    </CardTitle>
                    <CardDescription>Industry insights and emerging trends</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      {
                        trend: "AI Content Creation",
                        growth: "+45%",
                        category: "Technology",
                        description: "AI-powered content is gaining traction with 45% growth in engagement"
                      },
                      {
                        trend: "Micro-Influencer Partnerships",
                        growth: "+32%",
                        category: "Marketing",
                        description: "Brands are shifting towards micro-influencers for better ROI"
                      },
                      {
                        trend: "Video-First Content",
                        growth: "+28%",
                        category: "Content",
                        description: "Short-form video content continues to dominate social media"
                      },
                      {
                        trend: "Sustainability Focus",
                        growth: "+38%",
                        category: "Lifestyle",
                        description: "Eco-friendly content and partnerships are trending upward"
                      }
                    ].map((trend, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">{trend.trend}</h3>
                          <Badge variant="secondary" className="text-green-500 w-fit">{trend.growth}</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{trend.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{trend.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Trending Insights</CardTitle>
                    <CardDescription>What's hot in your industry right now</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { trend: "AI Content Creation", growth: "+45%", category: "Technology" },
                        { trend: "Micro-Influencer Partnerships", growth: "+32%", category: "Marketing" },
                        { trend: "Video-First Content", growth: "+28%", category: "Content" },
                        { trend: "Sustainability Focus", growth: "+38%", category: "Lifestyle" }
                      ].map((trend, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{trend.trend}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{trend.category}</Badge>
                            <span className="text-sm text-green-500 font-medium">{trend.growth}</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Learn More</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                    <CardDescription>Data-driven insights about your brand performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { insight: "Campaign Timing Optimization", impact: "+18% engagement", priority: "Medium" },
                        { insight: "Content Format Trend", impact: "+32% performance", priority: "Medium" }
                      ].map((item, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{item.insight}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <span className="text-sm text-green-500 font-medium">{item.impact}</span>
                            <Badge variant="outline" className="text-xs w-fit">{item.priority} Priority</Badge>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Details</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opportunities" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Growth Opportunities</CardTitle>
                    <CardDescription>Potential areas for brand expansion and improvement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Creator Partnership Opportunity</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge variant="default" className="text-xs w-fit">High Priority</Badge>
                        <span className="text-sm text-green-500 font-medium">Potential +15% reach</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Tech creators are showing 25% higher engagement with your content. Consider expanding partnerships in this category.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Explore Creators</Button>
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Create Campaign</Button>
                      </div>
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

export default Insights;
