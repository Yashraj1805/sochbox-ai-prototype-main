import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  TrendingUp,
  Target,
  Play,
  UserPlus,
  Activity,
  Menu,
  X
} from "lucide-react";

const BrandDashboard = () => {
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
            <Button variant="secondary" className="w-full justify-start" asChild>
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
            {/* Welcome Header */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Brand Dashboard</h1>
                <p className="text-muted-foreground">Manage campaigns and discover top creators</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto">
                <UserPlus className="w-4 h-4 mr-2" />
                Find Creators
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Active Campaigns */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">12</div>
                  <p className="text-xs text-muted-foreground">4 launching this week</p>
                </CardContent>
              </Card>

              {/* Total Reach */}
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

              {/* Partner Creators */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Partner Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">47</div>
                  <p className="text-xs text-muted-foreground">8 new this month</p>
                </CardContent>
              </Card>

              {/* Avg Engagement */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">6.2%</div>
                  <p className="text-xs text-muted-foreground">Above industry avg</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Active Campaigns */}
              <Card className="lg:col-span-2 shadow-card bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Megaphone className="w-5 h-5 mr-2" />
                    Active Campaigns
                  </CardTitle>
                  <CardDescription>Current campaigns and their progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-muted/50 space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">Summer Tech Launch</h3>
                        <p className="text-sm text-muted-foreground">12 creators • Tech & Gaming</p>
                        <Progress value={75} className="w-full sm:w-32 mt-2" />
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-sm font-medium">890K reach</div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-muted/50 space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">Lifestyle Brand Collab</h3>
                        <p className="text-sm text-muted-foreground">8 creators • Lifestyle</p>
                        <Progress value={45} className="w-full sm:w-32 mt-2" />
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-sm font-medium">420K reach</div>
                        <Badge variant="outline">Planning</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Creators for Brand */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Recommended Creators
                  </CardTitle>
                  <CardDescription>AI-matched creators for your brand</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Alex Chen", category: "Tech", score: "98% match", followers: "280K" },
                    { name: "Sarah Miller", category: "Lifestyle", score: "94% match", followers: "150K" },
                    { name: "Mike Johnson", category: "Gaming", score: "91% match", followers: "320K" },
                    { name: "Emma Davis", category: "Tech", score: "88% match", followers: "190K" }
                  ].map((creator, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex-shrink-0"></div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium truncate">{creator.name}</div>
                          <div className="text-xs text-muted-foreground">{creator.category} • {creator.followers}</div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-medium text-primary">{creator.score}</div>
                      </div>
                    </div>
                  ))}
                  <Button size="sm" className="w-full mt-4">View All Creators</Button>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Analytics */}
            <Card className="shadow-card bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Engagement Analytics
                </CardTitle>
                <CardDescription>Campaign performance and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">7.8M</div>
                    <div className="text-sm text-muted-foreground">Total Impressions</div>
                    <div className="flex items-center justify-center mt-1">
                      <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                      <span className="text-xs text-green-500">+18%</span>
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">485K</div>
                    <div className="text-sm text-muted-foreground">Total Engagements</div>
                    <div className="flex items-center justify-center mt-1">
                      <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                      <span className="text-xs text-green-500">+12%</span>
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">$2.40</div>
                    <div className="text-sm text-muted-foreground">Cost per Engagement</div>
                    <div className="flex items-center justify-center mt-1">
                      <TrendingUp className="w-3 h-3 text-red-500 mr-1 rotate-180" />
                      <span className="text-xs text-green-500">-8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrandDashboard;