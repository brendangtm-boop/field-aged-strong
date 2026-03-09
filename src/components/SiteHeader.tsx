import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Train",
    children: [
      { label: "Training Hub", href: "/training" },
      { label: "Exercise Coach", href: "/exercise-coach" },
    ],
  },
  {
    label: "Recover",
    children: [
      { label: "Recovery Hub", href: "/recovery" },
      { label: "Gear & Protection", href: "/gear" },
    ],
  },
  {
    label: "Mindset",
    children: [
      { label: "Mindset Hub", href: "/mindset" },
      { label: "Mindset Coach", href: "/mindset-coach" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Library", href: "/library" },
  { label: "Tracker", href: "/tracker" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-content flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-foreground tracking-tight">
          <span className="text-green-light">Work</span>
          <span>Life</span>
          <span className="text-accent">Soccer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-card rounded-xl border border-border/50 shadow-elevated p-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-lg transition-colors",
                            location.pathname === child.href
                              ? "bg-primary/5 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          {child.label}
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
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-4.5 w-4.5" />
          </button>
          <Link to="/membership">
            <Button variant="gold" size="sm">Join Free</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border/50 max-h-[80vh] overflow-y-auto">
          <nav className="container-content py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-1">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted/50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-border/50">
              <Link to="/membership" onClick={() => setMobileOpen(false)}>
                <Button variant="gold" className="w-full">Join Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
