import {
  Megaphone,
  PenTool,
  Palette,
  Target,
  BarChart3,
  Globe,
  Sparkles,
  Users,
  MessageCircle,
  Search,
  ClipboardList,
  Lightbulb,
  Rocket,
  LineChart,
  Wine,
  Clapperboard,
  Quote,
  Sun,
  Star,
  Mail,
  TrendingUp,
  Heart,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Elevate Marketing Company",
  shortName: "Elevate",
  url: "https://www.elevatemarketingco.co.uk",
  email: "enquiries@elevatemarketingco.co.uk",
  location: "Aberdeen, Scotland",
  serviceArea: "Working with businesses across Scotland and the UK",
};

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "5+", label: "Years of marketing experience" },
  { value: "3", label: "Industries served: hospitality, care & energy" },
  { value: "0", label: "Long-term contracts required" },
  { value: "30", label: "Days notice to cancel, that's it" },
];

export type PainPoint = string;

export const painPoints: PainPoint[] = [
  "You're too busy to keep up with social media.",
  "Your marketing feels inconsistent.",
  "You know you need to be online but don't know where to start.",
  "You're posting but not seeing results.",
  "You want a professional presence without hiring an in-house marketer.",
];

export type HelpPoint = {
  icon: LucideIcon;
  label: string;
};

export const helpPoints: HelpPoint[] = [
  { icon: Palette, label: "Building consistent brands" },
  { icon: PenTool, label: "Creating engaging content" },
  { icon: Target, label: "Developing marketing strategies" },
  { icon: MessageCircle, label: "Managing social media" },
  { icon: LineChart, label: "Supporting business growth" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Consistent, on-brand posting so your business shows up every week, not just when you find the time.",
    features: [
      "Planning, scheduling and posting",
      "Caption writing and hashtag research",
      "Community management",
      "Performance reporting",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "Scroll-stopping graphics, captions and short-form video ideas designed to showcase what makes your business worth choosing.",
    features: [
      "Social media graphics",
      "Short-form video & Reels concepts",
      "Story templates",
      "On-site content creation available",
    ],
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "A consistent visual identity across every platform, so your business looks as professional as the work you do.",
    features: [
      "Brand consistency guidelines",
      "Visual identity for social",
      "Templates for ongoing content",
      "Tone of voice support",
    ],
  },
  {
    icon: Target,
    title: "Marketing Strategy",
    description:
      "A clear plan tied to your business goals, including local visibility work like Google Business Profile optimisation.",
    features: [
      "Monthly content planning",
      "Competitor review",
      "Google Business Profile support",
      "Quarterly strategy sessions",
    ],
  },
  {
    icon: BarChart3,
    title: "Paid Advertising",
    description:
      "Meta advertising across Facebook and Instagram, from setup to optimisation, so your budget works harder.",
    features: [
      "Campaign setup & audience targeting",
      "Ad creative",
      "Ongoing optimisation",
      "Clear reporting (ad spend billed separately)",
    ],
  },
  {
    icon: Globe,
    title: "Website Support",
    description:
      "Simple, effective website updates and maintenance so your site keeps working as hard as the rest of your marketing.",
    features: [
      "New pages, images & content",
      "Menu, offer & promotion updates",
      "Mobile-friendly checks",
      "Basic SEO improvements",
    ],
  },
];

export type WhyUsPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsPoints: WhyUsPoint[] = [
  {
    icon: Target,
    title: "Strategic",
    description: "Everything we do supports your business goals, not vanity metrics.",
  },
  {
    icon: Sparkles,
    title: "Creative",
    description: "Professional, on-brand content designed for your specific audience.",
  },
  {
    icon: Users,
    title: "Personal",
    description: "You'll work directly with the founder, not a rotating account team.",
  },
  {
    icon: MessageCircle,
    title: "Transparent",
    description: "Clear communication and straightforward monthly reporting, always.",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Discovery Call",
    description: "A free, no-pressure conversation about your business, goals and where you're at today.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Business Review",
    description: "We review your current marketing, brand and online presence to spot the opportunities.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Marketing Plan",
    description: "A clear plan built around your goals, audience and budget, not generic templates.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Content Creation",
    description: "We plan, create and schedule content that's consistent, on-brand and built to perform.",
  },
  {
    icon: LineChart,
    step: "05",
    title: "Monthly Optimisation",
    description: "Ongoing reporting and refinement, so your marketing keeps improving month on month.",
  },
];

export type PricingPackage = {
  name: string;
  price: string;
  cadence: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Elevate Launch",
    price: "From £350",
    cadence: "per month",
    bestFor: "New or small businesses wanting a consistent online presence.",
    features: [
      "8 social media posts per month",
      "Caption writing",
      "Graphic design",
      "Scheduling",
      "Hashtag research",
      "Monthly performance report",
      "1x strategy call per month",
    ],
  },
  {
    name: "Elevate Growth",
    price: "From £750",
    cadence: "per month",
    bestFor: "Growing businesses ready to build momentum across more channels.",
    features: [
      "Everything in Launch, plus:",
      "12 social media posts per month",
      "4 short-form videos/Reels",
      "Community management",
      "Meta Ads management (ad spend excluded)",
      "Monthly content planning",
      "Competitor review",
      "Monthly strategy meeting",
    ],
    featured: true,
  },
  {
    name: "Elevate Partner",
    price: "From £1,400",
    cadence: "per month",
    bestFor: "Businesses wanting an outsourced marketing department.",
    features: [
      "Unlimited social media posting (within agreed plan)",
      "Reels & content creation",
      "Meta Ads",
      "Email marketing",
      "Website updates",
      "Monthly analytics dashboard",
      "Quarterly marketing strategy",
      "Marketing consultancy & priority support",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long are contracts?",
    answer:
      "We offer flexible monthly packages with no long-term contracts. We simply ask for 30 days' written notice if you decide to end your service, giving us time to wrap up your marketing activities smoothly.",
  },
  {
    question: "Do you create content?",
    answer:
      "Yes. We create engaging, on-brand content tailored to your business, including social media graphics, captions, short-form video ideas, and marketing materials. Where required, we can also organise on-site content creation or work with content you already have.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Absolutely. We believe in building long-term partnerships through results, not lengthy contracts. You can cancel at any time by providing 30 days' written notice.",
  },
  {
    question: "Do you work with businesses outside Aberdeen?",
    answer:
      "Yes. While we're proudly based in Aberdeen, we work with businesses across Scotland and the UK. Most of our meetings can be held remotely via Microsoft Teams or Zoom, making it easy to collaborate wherever you're based.",
  },
  {
    question: "Do you manage paid advertising?",
    answer:
      "Yes. We manage paid advertising across Meta platforms, including Facebook and Instagram. We can help with campaign setup, audience targeting, ad creative, optimisation and reporting. Please note that advertising spend is billed separately from our management fees.",
  },
  {
    question: "How often will we meet?",
    answer:
      "This depends on your package. Most clients have a monthly strategy meeting to review performance, discuss upcoming campaigns and plan the month ahead. We're also available by email and phone for ongoing support whenever you need us.",
  },
];

export const caseStudy = {
  label: "Illustrative example, not an actual client result",
  businessName: "The Granite Cup",
  location: "Aberdeen",
  subtitle: "Campaign calendar",
  quarterLabel: "Q3 · Jul-Sep 2026",
  cadence: ["3x social/week", "1 reel/week", "1 email/fortnight", "Daily weekend stories"],
  weeklyPlan: [
    {
      week: "Week 1",
      icon: Wine,
      title: "New seasonal drink launch",
      channels: [
        { label: "Instagram", filled: true },
        { label: "Stories", filled: true },
      ],
    },
    {
      week: "Week 2",
      icon: Clapperboard,
      title: "Behind-the-scenes baking",
      channels: [
        { label: "Reels", filled: true },
        { label: "TikTok", filled: true },
      ],
    },
    {
      week: "Week 3",
      icon: Quote,
      title: "Customer review spotlight",
      channels: [
        { label: "Facebook", filled: true },
        { label: "Google", filled: true },
      ],
    },
    {
      week: "Week 4",
      icon: Sun,
      title: "Weekend brunch promotion",
      channels: [
        { label: "Email", filled: true },
        { label: "Flyers", filled: false },
      ],
    },
  ],
  milestones: [
    { icon: Rocket, title: "Launch seasonal menu", week: "Week 1" },
    { icon: Users, title: "500 Instagram followers", week: "Week 6" },
    { icon: Star, title: "20 new reviews", week: "Week 8" },
    { icon: Mail, title: "200 email subscribers", week: "Week 10" },
    { icon: BarChart3, title: "Mid-quarter review", week: "Week 7" },
    { icon: Sparkles, title: "End-of-quarter event", week: "Week 12" },
  ],
  expectedResults: [
    { icon: TrendingUp, text: "More morning footfall from seasonal buzz and local promotion" },
    { icon: Heart, text: "Higher social engagement through video and behind-the-scenes content" },
    { icon: MapPin, text: "Stronger local brand presence and word-of-mouth in Aberdeen" },
  ],
};

export const aboutStory = {
  heading: "Welcome to Elevate Marketing Company",
  body: "At Elevate Marketing Company, we help businesses build a stronger online presence through strategic marketing, creative content and consistent execution. Whether you're looking to grow your audience, improve your social media, or create a marketing strategy that delivers real value, we're here to help.",
};
