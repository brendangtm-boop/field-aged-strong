import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Train",
    children: [
      { label: "Training Hub", href: "/training", desc: "Programs & workouts" },
      { label: "Eli — Exercise Coach", href: "/exercise-coach", desc: "AI-powered sessions" },
      { label: "Workout Library", href: "/training", desc: "All articles & guides" },
      { label: "Return to Play", href: "/recovery", desc: "Post-injury programs" },
    ],
  },
  {
    label: "Recover",
    children: [
      { label: "Recovery Hub", href: "/recovery", desc: "Recovery protocols" },
      { label: "Post-Match Protocols", href: "/recovery", desc: "After-game recovery" },
      { label: "Mobility Flows", href: "/recovery", desc: "Flexibility routines" },
      { label: "Sleep Optimization", href: "/recovery", desc: "Better sleep for recovery" },
    ],
  },
  {
    label: "Mindset",
    children: [
      { label: "Ava — Mindset Coach", href: "/mindset-coach", desc: "Dedicated mindset coaching" },
      { label: "Pre-Match Focus", href: "/mindset", desc: "Mental preparation" },
      { label: "Confidence Building", href: "/mindset", desc: "Rebuild self-belief" },
      { label: "Editorial Library", href: "/articles", desc: "In-depth articles" },
    ],
  },
  { label: "Full Approach", href: "/beyond" },
  {
    label: "More",
    children: [
      { label: "Community", href: "/community", desc: "Connect with players" },
      { label: "Nutrition Hub", href: "/nutrition", desc: "Fuel the 40+ body" },
      { label: "Gear Guide", href: "/gear", desc: "Kit that actually matters" },
      { label: "My2¢s", href: "/my2cts", desc: "Peer takes from the pitch" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/90 backdrop-blur-xl border-b border-border/50 shadow-xs"
          : "bg-transparent"
      )}
    >
      <div className="container-content flex items-center justify-between h-16 lg:h-[4.25rem]">
        <Link to="/" className="flex items-center gap-0.5 font-serif text-xl font-bold tracking-tight">
          <span className={cn(scrolled ? "text-primary" : "text-primary-foreground/90")}>Work</span>
          <span className={cn(scrolled ? "text-foreground" : "text-primary-foreground")}>Life</span>
          <span className={cn(scrolled ? "text-accent" : "text-gold-light")}>Soccer</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className={cn(
                  "flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg",
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                )}>
                  {item.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="bg-card rounded-xl border border-border/50 shadow-elevated p-1.5 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={cn(
                          "block px-3.5 py-2.5 rounded-lg transition-colors",
                          location.pathname === child.href ? "bg-primary/5" : "hover:bg-muted/50"
                        )}
                      >
                        <p className={cn("text-sm font-medium", location.pathname === child.href ? "text-primary" : "text-foreground")}>{child.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{child.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? (scrolled ? "text-accent" : "text-gold-light")
                    : (scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground")
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className={cn(
            "p-2 transition-colors rounded-lg",
            scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
          )}>
            <Search className="h-[18px] w-[18px]" />
          </button>
          <Link to="/auth">
            <Button variant="ghost" size="sm" className={cn(scrolled ? "text-foreground" : "text-primary-foreground")}>Sign In</Button>
          </Link>
          <Link to="/membership">
            <Button variant="gold" size="sm" className="shadow-glow">Join Free</Button>
          </Link>
          <Link to="/start-here">
            <Button variant="gold" size="sm" className="shadow-glow">Start Here</Button>
          </Link>
        </div>

        <button
          className={cn("lg:hidden p-2", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border/50 max-h-[85vh] overflow-y-auto shadow-elevated">
          <nav className="container-content py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-0.5 mb-3">
                  <p className="px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className={cn(
                        "block px-3 py-3 rounded-lg transition-colors",
                        location.pathname === child.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-muted/50"
                      )}
                    >
                      <p className="text-sm font-medium">{child.label}</p>
                      <p className="text-xs text-muted-foreground">{child.desc}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={cn(
                    "block px-3 py-3 text-sm font-medium rounded-lg transition-colors",
                    location.pathname === item.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border/50 space-y-2">
              <Link to="/auth">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/membership">
                <Button variant="gold" className="w-full shadow-glow">Join Free</Button>
              </Link>
              <Link to="/start-here">
                <Button variant="gold" className="w-full shadow-glow">Start Here</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
