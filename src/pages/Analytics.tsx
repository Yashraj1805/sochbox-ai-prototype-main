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
  Lightbulb, 
  FileText, 
  Image as ImageIcon, 
  BarChart3, 
  Users,
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
  FileTextIcon,
  BookOpen,
  Zap,
  Palette,
  Image,
  Camera,
  Wand2,
  Layers,
  Grid3X3,
  Heart,
  EyeOff,
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
  Calendar,
  Filter as FilterIcon,
  Download as DownloadIcon,
  RefreshCw,
  Globe,
  Menu,
  X
} from "lucide-react";

const Analytics = () => {
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
              <Link to="/creator" onClick={() => isMobile && setSidebarOpen(false)}>
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/ideas" onClick={() => isMobile && setSidebarOpen(false)}>
                <Lightbulb className="w-4 h-4 mr-2" />
                Ideas
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/scripts" onClick={() => isMobile && setSidebarOpen(false)}>
                <FileText className="w-4 h-4 mr-2" />
                Scripts
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/thumbnails" onClick={() => isMobile && setSidebarOpen(false)}>
                <ImageIcon className="w-4 h-4 mr-2" />
                Thumbnails
              </Link>
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/community" onClick={() => isMobile && setSidebarOpen(false)}>
                <Users className="w-4 h-4 mr-2" />
                Community
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Analytics</h1>
                <p className="text-muted-foreground">Track your content performance and audience insights</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Last 30 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">2.4M</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+18.3%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Subscribers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">125K</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+5.2%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">7.8%</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+2.1%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">$12.5K</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+32.7%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Performance Chart */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-primary" />
                      Performance Overview
                    </CardTitle>
                    <CardDescription>Your content performance over the selected time period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 sm:h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Performance chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Performing Content */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TargetIcon className="w-5 h-5 mr-2 text-primary" />
                      Top Performing Content
                    </CardTitle>
                    <CardDescription>Your best performing content pieces</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "AI Tools Every Creator Needs",
                        views: "125K",
                        engagement: "8.2%",
                        ctr: "12.5%",
                        growth: "+45%"
                      },
                      {
                        title: "Complete Guide to YouTube SEO",
                        views: "98K",
                        engagement: "7.8%",
                        ctr: "11.2%",
                        growth: "+32%"
                      },
                      {
                        title: "Building an Online Community",
                        views: "87K",
                        engagement: "9.1%",
                        ctr: "13.8%",
                        growth: "+28%"
                      }
                    ].map((content, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-muted/50 border border-border/50 space-y-3 sm:space-y-0">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{content.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span>{content.views} views</span>
                            <span>{content.engagement} engagement</span>
                            <span>{content.ctr} CTR</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-green-500">{content.growth}</Badge>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Content Analytics</CardTitle>
                    <CardDescription>Detailed analysis of your content performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Content Types Performance</h3>
                        <div className="space-y-3">
                          {[
                            { type: "Tutorials", views: "45%", growth: "+12%" },
                            { type: "Reviews", views: "28%", growth: "+8%" },
                            { type: "Vlogs", views: "18%", growth: "+5%" },
                            { type: "Interviews", views: "9%", growth: "+15%" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{item.type}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.views}</span>
                                <Badge variant="outline" className="text-xs text-green-500">{item.growth}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Upload Frequency</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <BarChart className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Upload frequency chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audience" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Audience Insights</CardTitle>
                    <CardDescription>Understand your audience demographics and behavior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Demographics</h3>
                        <div className="space-y-3">
                          {[
                            { age: "18-24", percentage: "35%", growth: "+5%" },
                            { age: "25-34", percentage: "42%", growth: "+8%" },
                            { age: "35-44", percentage: "18%", growth: "+3%" },
                            { age: "45+", percentage: "5%", growth: "+1%" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{item.age}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.percentage}</span>
                                <Badge variant="outline" className="text-xs text-green-500">{item.growth}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Geographic Distribution</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Globe className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Geographic chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="revenue" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Revenue Analytics</CardTitle>
                    <CardDescription>Track your monetization performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Revenue Sources</h3>
                        <div className="space-y-3">
                          {[
                            { source: "Ad Revenue", amount: "$8.2K", growth: "+25%" },
                            { source: "Sponsorships", amount: "$2.8K", growth: "+45%" },
                            { source: "Merchandise", amount: "$1.2K", growth: "+18%" },
                            { source: "Memberships", amount: "$0.3K", growth: "+32%" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{item.source}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.amount}</span>
                                <Badge variant="outline" className="text-xs text-green-500">{item.growth}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Monthly Revenue Trend</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <TrendingUp className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Revenue trend chart</p>
                          </div>
                        </div>
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

export default Analytics;
