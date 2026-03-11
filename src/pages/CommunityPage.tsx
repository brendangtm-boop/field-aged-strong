import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { My2ctsCallout } from "@/components/My2ctsCallout";
import { getMy2ctsByContext } from "@/data/my2cts-contextual";
import { ArrowRight, Users, Target, MessageCircle, Star, Calendar, Award, Heart, Shield, Dumbbell, Brain, Activity } from "lucide-react";
import communityImg from "@/assets/community-hero.jpg";
import communityPostgameImg from "@/assets/community-postgame.jpg";
import { fadeUp } from "@/lib/animations";

const features = [
  { icon: Users, title: "Small Groups & Circles", desc: "Join a group of 6–12 players with shared goals. Support each other, stay accountable, and build real connections." },
  { icon: Target, title: "Shared Goals", desc: "Set goals together and track collective progress. Whether it's fitness, consistency, or injury recovery." },
  { icon: MessageCircle, title: "Discussion Prompts", desc: "Weekly conversation starters about training, mindset, recovery, and the realities of being an adult athlete." },
  { icon: Calendar, title: "Events & Challenges", desc: "Join monthly challenges, virtual training meetups, and community events designed for your schedule." },
];

const stories = [
  { name: "James W.", age: 51, story: "After my ACL rehab, I thought I'd never play again. The return-to-play circle gave me structure and people who understood.", avatar: "JW" },
  { name: "Elena M.", age: 44, story: "Having a small group that checks in every week completely changed my consistency. I went from playing once a month to twice a week.", avatar: "EM" },
  { name: "Robert K.", age: 48, story: "The mindset discussions helped me realize I wasn't alone in feeling self-conscious about my declining pace. That awareness was liberating.", avatar: "RK" },
];

const norms = [
  "We support each other without judgment.",
  "We celebrate showing up, not just winning.",
  "We respect different fitness levels and life circumstances.",
  "We share honestly and listen with empathy.",
  "We focus on progress, not perfection.",
];

const challenges = [
  { title: "30-Day Mobility Challenge", participants: 234, desc: "10 minutes of mobility work every day for 30 days." },
  { title: "Return to Fitness Sprint", participants: 156, desc: "4-week structured return to match fitness." },
  { title: "Mindset Journal Week", participants: 89, desc: "Daily journaling prompts for mental clarity." },
];

const communityInsights = getMy2ctsByContext("community");

export default function CommunityPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={communityImg} alt="Adult soccer team celebrating together" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content max-w-2xl">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Community</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              You're not playing alone.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8">
              Connect with adult players who share your goals, understand your challenges, and celebrate your commitment to the game.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">How it works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6">
                <f.icon className="h-8 w-8 text-green-light mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My2cts Community Insights with Image */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="image-card aspect-[16/10] overflow-hidden rounded-2xl">
              <img src={communityPostgameImg} alt="Adult players walking off the pitch together" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              {communityInsights.slice(0, 2).map(insight => (
                <My2ctsCallout
                  key={insight.title}
                  title={insight.title}
                  quote={insight.quote}
                  takeaway={insight.takeaway}
                  slug={insight.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Active Challenges</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5">
                <span className="badge-green mb-3 block w-fit">Active</span>
                <h3 className="font-serif text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                <div className="flex items-center gap-2 text-xs">
                  <Users className="h-3.5 w-3.5 text-green-light" />
                  <span className="text-muted-foreground">{c.participants} participants</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Member Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <motion.div key={s.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-green-light">
                    {s.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{s.name}, {s.age}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{s.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Community Values</h2>
          <div className="space-y-3">
            {norms.map((n) => (
              <div key={n} className="flex items-center gap-3 p-4 card-premium">
                <Heart className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find your people.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Join a supportive community of adult players who are building better habits together.</p>
          <Link to="/membership"><Button variant="gold" size="xl">Join the Community <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Training", title: "Training Hub", href: "/training" },
            { icon: Brain, label: "Mindset", title: "Mindset Hub", href: "/mindset" },
            { icon: Activity, label: "Dashboard", title: "Player Dashboard", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
