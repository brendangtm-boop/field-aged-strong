import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Plan",
    children: [
      { label: "Weekly Plan", href: "/tracker", desc: "What to do this week" },
      { label: "Exercise Coach", href: "/exercise-coach", desc: "AI-powered sessions" },
      { label: "Mindset Coach", href: "/mindset-coach", desc: "Personal guidance" },
      { label: "Start Here", href: "/start-here", desc: "New player onboarding" },
    ],
  },
  { label: "Train", href: "/training" },
  { label: "Recover", href: "/recovery" },
  {
    label: "Play",
    children: [
      { label: "Match Reflection", href: "/match-reflection", desc: "Post-match processing" },
      { label: "Mindset Hub", href: "/mindset", desc: "Confidence & focus" },
    ],
  },
  { label: "Progress", href: "/tracker" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={cn(
                  "flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg",
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                )}>
                  {item.label}
                  <ChevronDown className={cn("h-3 w-3 transition-transform", openDropdown === item.label && "rotate-180")} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-card rounded-xl border border-border/50 shadow-elevated p-1.5 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
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
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? (scrolled ? "text-primary" : "text-primary-foreground")
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
          <Link to="/membership">
            <Button variant="gold" size="sm" className="shadow-glow">Join Free</Button>
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
                      key={child.href}
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
            <div className="pt-4 border-t border-border/50">
              <Link to="/membership">
                <Button variant="gold" className="w-full shadow-glow">Start Your System</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
