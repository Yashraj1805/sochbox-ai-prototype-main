import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Menu,
  X
} from "lucide-react";

const Scripts = () => {
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
            <Button variant="secondary" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Scripts
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Scripts</h1>
                <p className="text-muted-foreground">Create, edit, and manage your video scripts</p>
              </div>
              <Button className="shadow-glow w-full sm:w-auto" asChild>
                <Link to="/new-script">
                  <Plus className="w-4 h-4 mr-2" />
                  New Script
                </Link>
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search scripts..." className="pl-10" />
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
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5">
                <TabsTrigger value="all">All Scripts</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* Scripts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      title: "AI Tools Every Creator Needs",
                      type: "YouTube",
                      status: "In Progress",
                      progress: 75,
                      duration: "8-10 min",
                      lastEdited: "2 hours ago",
                      views: "12.5K",
                      rating: 4.8
                    },
                    {
                      title: "Morning Routine for Success",
                      type: "TikTok",
                      status: "Draft",
                      progress: 25,
                      duration: "1-2 min",
                      lastEdited: "1 day ago",
                      views: "0",
                      rating: 0
                    },
                    {
                      title: "Complete Guide to YouTube SEO",
                      type: "YouTube",
                      status: "Completed",
                      progress: 100,
                      duration: "15-18 min",
                      lastEdited: "3 days ago",
                      views: "45.2K",
                      rating: 4.9
                    },
                    {
                      title: "Productivity Tips for Creators",
                      type: "Instagram",
                      status: "Under Review",
                      progress: 90,
                      duration: "3-5 min",
                      lastEdited: "5 hours ago",
                      views: "8.7K",
                      rating: 4.6
                    },
                    {
                      title: "Future of Content Creation",
                      type: "Podcast",
                      status: "Draft",
                      progress: 15,
                      duration: "25-30 min",
                      lastEdited: "2 days ago",
                      views: "0",
                      rating: 0
                    },
                    {
                      title: "Building an Online Community",
                      type: "YouTube",
                      status: "In Progress",
                      progress: 60,
                      duration: "12-15 min",
                      lastEdited: "6 hours ago",
                      views: "23.1K",
                      rating: 4.7
                    }
                  ].map((script, index) => (
                    <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-hover transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base sm:text-lg mb-2">{script.title}</CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{script.type}</Badge>
                              <Badge variant={
                                script.status === 'Completed' ? 'default' : 
                                script.status === 'In Progress' ? 'secondary' : 
                                script.status === 'Under Review' ? 'secondary' : 'outline'
                              }>
                                {script.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{script.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{script.progress}%</span>
                          </div>
                          <Progress value={script.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Duration:</span>
                            <p className="font-medium">{script.duration}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Views:</span>
                            <p className="font-medium">{script.views}</p>
                          </div>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          Last edited {script.lastEdited}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drafts" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Draft Scripts</CardTitle>
                    <CardDescription>Scripts that are still in development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Morning Routine for Success", type: "TikTok", progress: 25 },
                        { title: "Future of Content Creation", type: "Podcast", progress: 15 }
                      ].map((script, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{script.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{script.type}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {script.progress}%</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Continue Writing</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="in-progress" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Scripts In Progress</CardTitle>
                    <CardDescription>Scripts currently being developed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "AI Tools Every Creator Needs", type: "YouTube", progress: 75 },
                        { title: "Building an Online Community", type: "YouTube", progress: 60 }
                      ].map((script, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{script.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{script.type}</Badge>
                            <span className="text-sm text-muted-foreground">Progress: {script.progress}%</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">Continue Writing</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="review" className="space-y-6">
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Scripts Under Review</CardTitle>
                    <CardDescription>Scripts ready for final review and approval</CardDescription>
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
                    <CardTitle>Completed Scripts</CardTitle>
                    <CardDescription>Scripts that have been finalized and published</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Complete Guide to YouTube SEO", type: "YouTube", views: "45.2K", rating: 4.9 }
                      ].map((script, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{script.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{script.type}</Badge>
                            <span className="text-sm text-muted-foreground">{script.views} views</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{script.rating}</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full sm:w-auto">View Analytics</Button>
                        </div>
                      ))}
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

export default Scripts;

