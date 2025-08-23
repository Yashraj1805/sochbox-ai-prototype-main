import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  TrendingUp,
  Clock,
  Star,
  Zap,
  Target,
  Brain,
  LightbulbIcon,
  BookOpen,
  Video,
  Mic,
  Camera,
  Palette,
  Menu,
  X
} from "lucide-react";

const Ideas = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <Lightbulb className="w-4 h-4 mr-2" />
              Ideas
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
            {/* Header */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Content Ideas</h1>
                <p className="text-muted-foreground">Discover and manage your creative content ideas</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto" asChild>
                <Link to="/new-idea">
                  <Plus className="w-4 h-4 mr-2" />
                  New Idea
                </Link>
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search ideas..." className="pl-10" />
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
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="all">All Ideas</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* AI Generated Ideas */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-primary" />
                      AI Generated Ideas
                    </CardTitle>
                    <CardDescription>Fresh content ideas based on trending topics and your niche</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "AI Tools Every Creator Needs in 2024",
                        category: "Technology",
                        engagement: "High",
                        difficulty: "Medium",
                        icon: <Zap className="w-6 h-6 text-yellow-500" />
                      },
                      {
                        title: "10 Morning Routines of Successful YouTubers",
                        category: "Lifestyle",
                        engagement: "Very High",
                        difficulty: "Low",
                        icon: <Clock className="w-6 h-6 text-blue-500" />
                      },
                      {
                        title: "The Future of Content Creation: AI vs Human",
                        category: "Education",
                        engagement: "High",
                        difficulty: "High",
                        icon: <Target className="w-6 h-6 text-green-500" />
                      }
                    ].map((idea, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          {idea.icon}
                          <Badge variant="secondary" className="text-xs">{idea.category}</Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{idea.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm space-y-1 sm:space-y-0">
                          <span className="text-muted-foreground">Engagement: {idea.engagement}</span>
                          <span className="text-muted-foreground">Difficulty: {idea.difficulty}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-3">
                          <Button size="sm" variant="outline" className="flex-1">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Research
                          </Button>
                          <Button size="sm" className="flex-1">
                            <Plus className="w-3 h-3 mr-1" />
                            Save
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Your Ideas */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <LightbulbIcon className="w-5 h-5 mr-2 text-primary" />
                      Your Ideas
                    </CardTitle>
                    <CardDescription>Personal content ideas and concepts you've created</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "How I Built My First AI-Powered App",
                        category: "Technology",
                        status: "In Progress",
                        lastUpdated: "2 days ago",
                        progress: 65
                      },
                      {
                        title: "5 Productivity Hacks for Content Creators",
                        category: "Lifestyle",
                        status: "Draft",
                        lastUpdated: "1 week ago",
                        progress: 25
                      },
                      {
                        title: "The Complete Guide to YouTube SEO in 2024",
                        category: "Education",
                        status: "Completed",
                        lastUpdated: "3 days ago",
                        progress: 100
                      }
                    ].map((idea, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-muted/50 border border-border/50 space-y-3 sm:space-y-0">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="font-semibold text-foreground text-sm sm:text-base">{idea.title}</h3>
                            <Badge variant={idea.status === 'Completed' ? 'default' : idea.status === 'In Progress' ? 'secondary' : 'outline'}>
                              {idea.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span>{idea.category}</span>
                            <span>Updated {idea.lastUpdated}</span>
                            {idea.status === 'In Progress' && (
                              <span className="text-primary">Progress: {idea.progress}%</span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">
                            <FileText className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">
                            <Video className="w-3 h-3 mr-1" />
                            Script
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      Trending Topics
                    </CardTitle>
                    <CardDescription>What's hot right now in your niche</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { topic: "AI Content Creation", trend: "+45%", category: "Technology" },
                      { topic: "Sustainable Living", trend: "+32%", category: "Lifestyle" },
                      { topic: "Remote Work Tips", trend: "+28%", category: "Business" },
                      { topic: "Mental Health Awareness", trend: "+41%", category: "Health" }
                    ].map((item, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.topic}</h3>
                          <Badge variant="secondary" className="text-green-500">{item.trend}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="drafts" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Draft Ideas</CardTitle>
                    <CardDescription>Your saved ideas that need development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">No draft ideas yet. Start creating!</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Completed Ideas</CardTitle>
                    <CardDescription>Ideas that have been turned into content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">No completed ideas yet.</p>
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

export default Ideas;
