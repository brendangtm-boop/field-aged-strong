import { Link } from "react-router-dom";
import { MessageSquareText } from "lucide-react";

interface My2ctsCalloutProps {
  quote: string;
  takeaway: string;
  slug?: string;
  title?: string;
  className?: string;
}

export function My2ctsCallout({ quote, takeaway, slug, title, className = "" }: My2ctsCalloutProps) {
  const Wrapper = slug ? Link : "div";
  const wrapperProps = slug ? { to: `/my2cts/${slug}` } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`block rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-7 transition-colors ${slug ? "hover:border-accent/40 hover:bg-accent/8 cursor-pointer group" : ""} ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MessageSquareText className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">My 2cts</p>
          {title && (
            <p className={`font-serif text-base font-semibold mb-2 ${slug ? "group-hover:text-accent transition-colors" : ""}`}>
              {title}
            </p>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{quote}</p>
          <p className="text-sm font-semibold text-foreground">
            <span className="text-accent">Takeaway:</span> {takeaway}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
