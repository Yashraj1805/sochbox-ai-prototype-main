import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Zap, TrendingUp, Target, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-[var(--icon-size)] h-[var(--icon-size)] text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-h3 font-bold text-foreground">SochBox AI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button className="text-muted-foreground opacity-60 cursor-not-allowed" disabled>
                Docs
              </button>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <Button variant="outline" size="sm">Sign In</Button>
              <ThemeToggle />
            </nav>
            <div className="flex items-center space-x-2 md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 space-y-2 border-t border-border">
              <button className="block w-full text-left text-muted-foreground opacity-60 cursor-not-allowed py-2" disabled>
                Docs
              </button>
              <a href="#pricing" className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <Button variant="outline" size="sm" className="w-full">Sign In</Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 sm:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-h1 text-foreground leading-tight">
                  Think. Create. <span className="bg-gradient-primary bg-clip-text text-transparent">Grow.</span>
                </h1>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-body text-muted-foreground max-w-xl">
                  <p>Your AI-powered partner for effortless content growth.</p>
                  <p>Connect creators with brands and amplify your reach with intelligent automation.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="shadow-md hover:shadow-hover transition-all px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-body w-full sm:w-auto">
                  <Link to="/creator">For Creators</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-body w-full sm:w-auto">
                  <Link to="/brand">For Brands</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={dashboardPreview} 
                  alt="SochBox AI Dashboard Preview" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl sm:rounded-3xl"></div>
              </div>
              {/* Floating gradient orb */}
              <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards Section */}
      <section className="py-6 sm:py-12 bg-muted/30">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="rounded-2xl sm:rounded-3xl border-0 shadow-sm hover:shadow-md transition-all bg-gradient-card p-4 sm:p-6">
              <CardContent className="p-0 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-h3 font-semibold text-foreground">Create faster</h3>
                <p className="text-sm sm:text-base text-muted-foreground">AI-powered tools streamline your content creation process from ideation to publishing.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl sm:rounded-3xl border-0 shadow-sm hover:shadow-md transition-all bg-gradient-card p-4 sm:p-6">
              <CardContent className="p-0 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-h3 font-semibold text-foreground">Grow smarter</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Data-driven insights help you understand your audience and optimize for maximum engagement.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl sm:rounded-3xl border-0 shadow-sm hover:shadow-md transition-all bg-gradient-card p-4 sm:p-6">
              <CardContent className="p-0 text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-h3 font-semibold text-foreground">Prove ROI</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Comprehensive analytics demonstrate the impact and value of your content investments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">SochBox AI</span>
          </div>
          <p className="text-sm sm:text-caption text-muted-foreground">
            © 2025 SochBox AI. Think. Create. Grow.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;