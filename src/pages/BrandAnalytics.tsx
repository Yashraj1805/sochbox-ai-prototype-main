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
  Menu,
  X
} from "lucide-react";

const BrandAnalytics = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Analytics</h1>
                <p className="text-muted-foreground">Track your brand performance and campaign insights</p>
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
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">2.8M</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+24.5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Partner Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">47</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+8 new</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">6.2%</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+2.1%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">$4.20</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+18.7%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="creators">Creators</TabsTrigger>
                <TabsTrigger value="roi">ROI</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Performance Chart */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-primary" />
                      Performance Overview
                    </CardTitle>
                    <CardDescription>Your brand performance over the selected time period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 sm:h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm sm:text-base text-muted-foreground">Performance chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Performing Campaigns */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TargetIcon2 className="w-5 h-5 mr-2 text-primary" />
                      Top Performing Campaigns
                    </CardTitle>
                    <CardDescription>Your best performing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Summer Tech Launch",
                        reach: "890K",
                        engagement: "8.2%",
                        roi: "$3.80",
                        creators: 12
                      },
                      {
                        title: "Gaming Tournament",
                        reach: "1.2M",
                        engagement: "9.8%",
                        roi: "$4.50",
                        creators: 15
                      },
                      {
                        title: "Tech Review Series",
                        reach: "650K",
                        engagement: "7.5%",
                        roi: "$3.20",
                        creators: 10
                      }
                    ].map((campaign, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-muted/50 border border-border/50 space-y-3 sm:space-y-0">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{campaign.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span>{campaign.reach} reach</span>
                            <span>{campaign.engagement} engagement</span>
                            <span>{campaign.creators} creators</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                          <Badge variant="secondary" className="text-green-500 text-center">ROI: {campaign.roi}</Badge>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="campaigns" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Campaign Analytics</CardTitle>
                    <CardDescription>Detailed analysis of your campaign performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Campaign Types Performance</h3>
                        <div className="space-y-3">
                          {[
                            { type: "Product Launches", reach: "45%", growth: "+15%" },
                            { type: "Brand Awareness", reach: "32%", growth: "+8%" },
                            { type: "Product Reviews", reach: "18%", growth: "+12%" },
                            { type: "Event Promotions", reach: "5%", growth: "+25%" }
                          ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                              <span className="text-sm text-muted-foreground">{item.type}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.reach}</span>
                                <Badge variant="outline" className="text-xs text-green-500">{item.growth}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Campaign Success Rate</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <BarChart className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Success rate chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="creators" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Creator Performance</CardTitle>
                    <CardDescription>Analyze creator contributions and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Creator Categories</h3>
                        <div className="space-y-3">
                          {[
                            { category: "Technology", performance: "85%", creators: 15 },
                            { category: "Lifestyle", performance: "78%", creators: 12 },
                            { category: "Gaming", performance: "92%", creators: 8 },
                            { category: "Fashion", performance: "72%", creators: 6 }
                          ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                              <span className="text-sm text-muted-foreground">{item.category}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.performance}</span>
                                <span className="text-xs text-muted-foreground">({item.creators} creators)</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Creator Engagement</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Engagement chart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roi" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>ROI Analytics</CardTitle>
                    <CardDescription>Track your return on investment across campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">ROI by Campaign Type</h3>
                        <div className="space-y-3">
                          {[
                            { type: "Product Launches", roi: "$4.20", growth: "+18%" },
                            { type: "Brand Awareness", roi: "$3.80", growth: "+12%" },
                            { type: "Product Reviews", roi: "$3.50", growth: "+8%" },
                            { type: "Event Promotions", roi: "$2.90", growth: "+5%" }
                          ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                              <span className="text-sm text-muted-foreground">{item.type}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{item.roi}</span>
                                <Badge variant="outline" className="text-xs text-green-500">{item.growth}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Monthly ROI Trend</h3>
                        <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <TrendingUpIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">ROI trend chart</p>
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

export default BrandAnalytics;
