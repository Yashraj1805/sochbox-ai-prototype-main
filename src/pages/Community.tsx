import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Lightbulb,
  Users,
  Send
} from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [postText, setPostText] = useState("");

  const posts = [
    {
      id: 1,
      author: "Alex Chen",
      isAnonymous: false,
      time: "2h ago",
      category: "Tips",
      content: "Just discovered this AI tool for thumbnail generation - game changer! Anyone else using AI for their creative workflow? Would love to hear your recommendations.",
      likes: 24,
      comments: 8,
      isLiked: false
    },
    {
      id: 2,
      author: "Anonymous Creator",
      isAnonymous: true,
      time: "4h ago",
      category: "Question",
      content: "Struggling with consistency in my posting schedule. How do you all manage content creation alongside a full-time job? Any tips for batch creation?",
      likes: 18,
      comments: 12,
      isLiked: true
    },
    {
      id: 3,
      author: "Sarah Miller",
      isAnonymous: false,
      time: "6h ago",
      category: "Success",
      content: "Hit 100K subscribers today! 🎉 Started with SochBox AI 6 months ago and the growth has been incredible. The AI insights really helped me understand my audience better.",
      likes: 47,
      comments: 15,
      isLiked: false
    },
    {
      id: 4,
      author: "Anonymous Creator",
      isAnonymous: true,
      time: "8h ago",
      category: "Discussion",
      content: "What's everyone's take on AI-generated content? I'm seeing mixed reactions from audiences. How do you balance AI assistance with authentic creativity?",
      likes: 31,
      comments: 23,
      isLiked: false
    }
  ];

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
              <Button variant="ghost" size="sm" asChild>
                <Link to="/creator">Dashboard</Link>
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">Creator Community</h1>
          <p className="text-muted-foreground">Connect, share tips, and grow together with fellow creators</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card className="text-center p-3 sm:p-4 shadow-card bg-gradient-card border-0">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
              <span className="font-semibold text-sm sm:text-base">12.4K</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Active Creators</p>
          </Card>
          <Card className="text-center p-3 sm:p-4 shadow-card bg-gradient-card border-0">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
              <span className="font-semibold text-sm sm:text-base">2.8K</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Posts Today</p>
          </Card>
          <Card className="text-center p-3 sm:p-4 shadow-card bg-gradient-card border-0">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
              <span className="font-semibold text-sm sm:text-base">89%</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Helpfulness Rate</p>
          </Card>
        </div>

        {/* New Post */}
        <Card className="mb-6 sm:mb-8 shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Share with the Community</CardTitle>
            <CardDescription>Ask questions, share tips, or celebrate wins</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="What's on your mind? Share your experience, ask for advice, or help fellow creators..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={isAnonymous}
                    onCheckedChange={setIsAnonymous}
                    id="anonymous-mode"
                  />
                  <label htmlFor="anonymous-mode" className="text-sm text-muted-foreground">
                    Post anonymously
                  </label>
                </div>
                <div className="flex items-center space-x-1">
                  {!isAnonymous && (
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>YU</AvatarFallback>
                    </Avatar>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {isAnonymous ? "Anonymous Creator" : "Your Name"}
                  </span>
                </div>
              </div>
              <Button className="shadow-glow w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Community Feed */}
        <div className="space-y-4 sm:space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-start sm:space-x-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    <AvatarFallback>
                      {post.isAnonymous ? "?" : post.author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 mb-2">
                      <span className="font-medium text-foreground text-sm sm:text-base">
                        {post.isAnonymous ? "Anonymous Creator" : post.author}
                      </span>
                      <Badge variant="outline" className="text-xs w-fit">
                        {post.category}
                      </Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground">{post.time}</span>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed text-sm sm:text-base">{post.content}</p>
                    
                    <div className="flex items-center space-y-0 space-x-4 sm:space-x-6">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                        <span className="text-sm">{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="w-4 h-4 mr-1" />
                        <span className="text-sm">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6 sm:mt-8">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;