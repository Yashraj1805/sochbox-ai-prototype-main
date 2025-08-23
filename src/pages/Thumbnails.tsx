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
  Menu,
  X
} from "lucide-react";

const Thumbnails = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <ImageIcon className="w-4 h-4 mr-2" />
              Thumbnails
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Thumbnails</h1>
                <p className="text-muted-foreground">Create and manage eye-catching thumbnails for your content</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto" asChild>
                <Link to="/new-thumbnail">
                  <Plus className="w-4 h-4 mr-2" />
                  New Thumbnail
                </Link>
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search thumbnails..." className="pl-10" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
                <TabsTrigger value="all">All Thumbnails</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* AI Generated Thumbnails */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wand2 className="w-5 h-5 mr-2 text-primary" />
                      AI Generated Thumbnails
                    </CardTitle>
                    <CardDescription>Smart thumbnail suggestions based on your content and trending styles</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        title: "AI Tools Every Creator Needs",
                        platform: "YouTube",
                        style: "Modern Tech",
                        ctr: "8.2%",
                        status: "Ready to Use",
                        image: <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">AI TOOLS</div>
                      },
                      {
                        title: "Morning Routine for Success",
                        platform: "TikTok",
                        style: "Lifestyle",
                        ctr: "12.5%",
                        status: "High Performance",
                        image: <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">MORNING</div>
                      },
                      {
                        title: "Complete Guide to YouTube SEO",
                        platform: "YouTube",
                        style: "Educational",
                        ctr: "9.8%",
                        status: "Trending",
                        image: <div className="w-full h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">SEO GUIDE</div>
                      }
                    ].map((thumbnail, index) => (
                      <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-base sm:text-lg mb-2">{thumbnail.title}</CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">{thumbnail.platform}</Badge>
                                <Badge variant="secondary" className="text-xs">{thumbnail.style}</Badge>
                              </div>
                            </div>
                            <Badge variant={
                              thumbnail.status === 'High Performance' ? 'default' : 
                              thumbnail.status === 'Trending' ? 'secondary' : 'outline'
                            } className="flex-shrink-0">
                              {thumbnail.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {thumbnail.image}
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">CTR:</span>
                            <span className="font-medium text-green-600">{thumbnail.ctr}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Edit className="w-3 h-3 mr-1" />
                              Customize
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                              <Download className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Your Thumbnails */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Image className="w-5 h-5 mr-2 text-primary" />
                      Your Thumbnails
                    </CardTitle>
                    <CardDescription>Thumbnails you've created and customized</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      {
                        title: "Productivity Tips for Creators",
                        platform: "Instagram",
                        status: "Under Review",
                        progress: 90,
                        lastUpdated: "5 hours ago",
                        image: <div className="w-full h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">PRODUCTIVITY</div>
                      },
                      {
                        title: "Future of Content Creation",
                        platform: "Podcast",
                        status: "Draft",
                        progress: 25,
                        lastUpdated: "2 days ago",
                        image: <div className="w-full h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">FUTURE</div>
                      },
                      {
                        title: "Building an Online Community",
                        platform: "YouTube",
                        status: "In Progress",
                        progress: 60,
                        lastUpdated: "6 hours ago",
                        image: <div className="w-full h-32 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">COMMUNITY</div>
                      }
                    ].map((thumbnail, index) => (
                      <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-base sm:text-lg mb-2">{thumbnail.title}</CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">{thumbnail.platform}</Badge>
                                <Badge variant={
                                  thumbnail.status === 'Completed' ? 'default' : 
                                  thumbnail.status === 'In Progress' ? 'secondary' : 
                                  thumbnail.status === 'Under Review' ? 'secondary' : 'outline'
                                }>
                                  {thumbnail.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {thumbnail.image}
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{thumbnail.progress}%</span>
                            </div>
                            <Progress value={thumbnail.progress} className="h-2" />
                          </div>
                          
                          <div className="text-xs text-muted-foreground">
                            Updated {thumbnail.lastUpdated}
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
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="drafts" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Draft Thumbnails</CardTitle>
                    <CardDescription>Thumbnails that are still in development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Future of Content Creation", platform: "Podcast", progress: 25 }
                      ].map((thumbnail, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{thumbnail.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{thumbnail.platform}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {thumbnail.progress}%</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Continue Editing</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="in-progress" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Thumbnails In Progress</CardTitle>
                    <CardDescription>Thumbnails currently being developed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Building an Online Community", platform: "YouTube", progress: 60 }
                      ].map((thumbnail, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{thumbnail.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{thumbnail.platform}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {thumbnail.progress}%</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Continue Editing</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="review" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Thumbnails Under Review</CardTitle>
                    <CardDescription>Thumbnails ready for final review and approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Productivity Tips for Creators</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">Instagram</Badge>
                        <span className="text-sm text-muted-foreground">Progress: 90%</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Review</Button>
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">Request Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Completed Thumbnails</CardTitle>
                    <CardDescription>Thumbnails that have been finalized and published</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">No completed thumbnails yet.</p>
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

export default Thumbnails;
