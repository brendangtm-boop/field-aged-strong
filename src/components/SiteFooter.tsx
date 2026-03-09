import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Platform: [
    { label: "Training Hub", href: "/training" },
    { label: "Recovery Hub", href: "/recovery" },
    { label: "Mindset Hub", href: "/mindset" },
    { label: "Exercise Coach", href: "/exercise-coach" },
    { label: "Mindset Coach", href: "/mindset-coach" },
  ],
  Resources: [
    { label: "Editorial Library", href: "/library" },
    { label: "Gear Guide", href: "/gear" },
    { label: "Community", href: "/community" },
    { label: "Daily Tracker", href: "/tracker" },
  ],
  Company: [
    { label: "About & Mission", href: "/about" },
    { label: "Membership Plans", href: "/membership" },
    { label: "Contact", href: "/about" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Band */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-content py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Stay in the game.</h3>
              <p className="text-primary-foreground/70 text-sm max-w-md">
                Weekly insights on training, recovery, and mindset for adult soccer players. No spam, just substance.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/40" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button variant="gold" size="default">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-serif text-lg font-bold block mb-4">
              <span className="text-green-muted">Work</span>Life<span className="text-gold-light">Soccer</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Helping adult soccer players stay in the game longer through smarter training, stronger recovery, and healthier mindset.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} WorkLifeSoccer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
