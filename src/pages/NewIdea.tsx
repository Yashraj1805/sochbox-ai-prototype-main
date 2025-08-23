import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
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
  ArrowLeft,
  Save,
  Wand2,
  Target,
  Brain,
  Clock,
  TrendingUp,
  Zap,
  Menu,
  X,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Music
} from "lucide-react";

const NewIdea = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [ideaData, setIdeaData] = useState({
    title: "",
    description: "",
    category: "",
    targetAudience: "",
    keywords: "",
    estimatedDuration: ""
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const platforms = [
    { id: "youtube", name: "YouTube", icon: Youtube, color: "text-red-500" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { id: "tiktok", name: "TikTok", icon: Music, color: "text-black" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { id: "facebook", name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-700" }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setIdeaData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving idea:", { ...ideaData, platforms: selectedPlatforms });
  };

  const handleGenerateAI = () => {
    // Handle AI generation logic here
    console.log("Generating AI idea for platforms:", selectedPlatforms);
  };

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
            <Button variant="secondary" className="w-full justify-start" asChild>
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
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/ideas">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Ideas
                  </Link>
                </Button>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Create New Idea</h1>
                  <p className="text-muted-foreground">Generate and develop your next content idea</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={handleGenerateAI}>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate with AI
                </Button>
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Idea
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Platform Selection */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Select Platforms
                    </CardTitle>
                    <CardDescription>Choose which platforms this idea is for</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {platforms.map((platform) => {
                        const IconComponent = platform.icon;
                        const isSelected = selectedPlatforms.includes(platform.id);
                        return (
                          <button
                            key={platform.id}
                            onClick={() => togglePlatform(platform.id)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                              isSelected 
                                ? 'border-primary bg-primary/10' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <IconComponent className={`w-6 h-6 ${platform.color}`} />
                            <span className="text-sm font-medium">{platform.name}</span>
                            {isSelected && (
                              <Badge variant="secondary" className="text-xs">Selected</Badge>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Idea Details */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                      Idea Details
                    </CardTitle>
                    <CardDescription>Fill in the details of your content idea</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Idea Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter your idea title..."
                        value={ideaData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your content idea..."
                        rows={4}
                        value={ideaData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={ideaData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="health">Health & Wellness</SelectItem>
                            <SelectItem value="gaming">Gaming</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration">Estimated Duration</Label>
                        <Select value={ideaData.estimatedDuration} onValueChange={(value) => handleInputChange('estimatedDuration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 minutes</SelectItem>
                            <SelectItem value="3-5">3-5 minutes</SelectItem>
                            <SelectItem value="5-10">5-10 minutes</SelectItem>
                            <SelectItem value="10-15">10-15 minutes</SelectItem>
                            <SelectItem value="15-20">15-20 minutes</SelectItem>
                            <SelectItem value="20+">20+ minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience</Label>
                      <Input
                        id="audience"
                        placeholder="e.g., Tech enthusiasts, Students, Entrepreneurs..."
                        value={ideaData.targetAudience}
                        onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="keywords">Keywords/Tags</Label>
                      <Input
                        id="keywords"
                        placeholder="Enter relevant keywords separated by commas..."
                        value={ideaData.keywords}
                        onChange={(e) => handleInputChange('keywords', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Suggestions Sidebar */}
              <div className="space-y-6">
                {/* AI Insights */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-primary" />
                      AI Insights
                    </CardTitle>
                    <CardDescription>Smart suggestions for your idea</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Trending Topic</span>
                      </div>
                      <p className="text-sm text-muted-foreground">This topic is gaining popularity in your niche</p>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">High Engagement</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Similar content performs well on selected platforms</p>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Optimal Timing</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Best to publish on Tuesday-Thursday</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Tips */}
                <Card className="shadow-card bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Platform Tips</CardTitle>
                    <CardDescription>Optimize for each platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedPlatforms.map((platformId) => {
                      const platform = platforms.find(p => p.id === platformId);
                      if (!platform) return null;

                      const tips = {
                        youtube: "Focus on SEO titles and detailed descriptions",
                        instagram: "Use engaging visuals and stories",
                        tiktok: "Keep it short and trending",
                        twitter: "Use relevant hashtags and engage",
                        facebook: "Focus on community engagement",
                        linkedin: "Professional tone and industry insights"
                      };

                      return (
                        <div key={platformId} className="p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-2 mb-2">
                            <platform.icon className={`w-4 h-4 ${platform.color}`} />
                            <span className="text-sm font-medium">{platform.name}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{tips[platformId as keyof typeof tips]}</p>
                        </div>
                      );
                    })}
                    {selectedPlatforms.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Select platforms to see optimization tips
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewIdea;
