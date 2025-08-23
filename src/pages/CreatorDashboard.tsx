import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  TrendingUp,
  Play,
  Target,
  Crown,
  Menu,
  X
} from "lucide-react";

const CreatorDashboard = () => {
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
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/analytics" onClick={() => isMobile && setSidebarOpen(false)}>
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Link>
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
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Welcome back, Creator!</h1>
                <p className="text-muted-foreground">Here's your content overview and AI insights</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto">
                <Target className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Content Score */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Content Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">85</div>
                  <Progress value={85} className="mb-2" />
                  <p className="text-xs text-muted-foreground">+12% from last week</p>
                </CardContent>
              </Card>

              {/* Weekly Growth */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">+2.4k</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+18.3%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Active Projects */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">7</div>
                  <p className="text-xs text-muted-foreground">3 due this week</p>
                </CardContent>
              </Card>

              {/* Engagement Rate */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-2">7.8%</div>
                  <p className="text-xs text-muted-foreground">Above industry avg</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Top Performing Content */}
              <Card className="lg:col-span-2 shadow-card bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Top Performing Content
                  </CardTitle>
                  <CardDescription>Your best content from the past week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">AI Tools Every Creator Needs</h3>
                      <p className="text-sm text-muted-foreground">YouTube • 2 days ago</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
                        <span className="text-sm font-medium">125K views</span>
                        <span className="text-sm text-muted-foreground">8.2% CTR</span>
                        <Badge variant="secondary">Trending</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Creators Ranking */}
              <Card className="shadow-card bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Top Creators
                  </CardTitle>
                  <CardDescription>Overall platform ranking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Alex Chen", score: "94.2", rank: 1 },
                    { name: "Sarah Miller", score: "91.8", rank: 2 },
                    { name: "Mike Johnson", score: "88.5", rank: 3 },
                    { name: "You", score: "85.0", rank: 4, highlight: true },
                    { name: "Emma Davis", score: "82.3", rank: 5 }
                  ].map((creator) => (
                    <div key={creator.rank} className={`flex items-center justify-between p-2 rounded ${creator.highlight ? 'bg-primary/10 border border-primary/20' : ''}`}>
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className="text-sm font-medium w-4 flex-shrink-0">{creator.rank}</span>
                        <span className={`text-sm truncate ${creator.highlight ? 'font-semibold text-primary' : ''}`}>
                          {creator.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium flex-shrink-0">{creator.score}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Task Suggestions */}
            <Card className="shadow-card bg-gradient-card border-0">
              <CardHeader>
                <CardTitle>AI Task Suggestions</CardTitle>
                <CardDescription>Recommended actions to boost your content performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-accent/50 border border-accent-foreground/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-medium">Script Optimization</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Enhance your "AI Tools" script for better engagement</p>
                    <Button size="sm" variant="outline" className="w-full sm:w-auto">Review Script</Button>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/50 border border-accent-foreground/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <ImageIcon className="w-4 h-4 text-primary" />
                      <span className="font-medium">Thumbnail A/B Test</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Test new thumbnail variations for upcoming video</p>
                    <Button size="sm" variant="outline" className="w-full sm:w-auto">Create Variants</Button>
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

export default CreatorDashboard;