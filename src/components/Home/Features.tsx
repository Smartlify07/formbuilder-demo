import {
  Sliders,
  Workflow,
  Code2,
  PanelLeft,
  Layers,
  Zap,
  Palette,
  RefreshCw,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    icon: <Sliders className="h-6 w-6 text-primary" />,
    title: 'Config-based API',
    description:
      'Define your entire form with a simple configuration object. No complex JSX needed.',
  },
  {
    icon: <Workflow className="h-6 w-6 text-primary fill-blue-700" />,
    title: 'Zod Integration',
    description:
      'Built-in support for Zod schema validation with typed error messages.',
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: 'Developer Experience',
    description:
      'Type-safe APIs with excellent IDE autocomplete support and documentation.',
  },
  {
    icon: <PanelLeft className="h-6 w-6 text-primary" />,
    title: 'Dual Usage Modes,',
    description:
      'Use either config mode for quick implementation or layout mode for custom designs. WIP ⚒️👷🏾‍♀️',
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: 'Component Slots',
    description:
      'Customize any part of the form with your own components for labels, containers, and more.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary fill-amber-300" />,
    title: 'Performance Optimized',
    description:
      "Efficient rendering with React's latest features for optimal performance.",
  },
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: 'Beautiful by Default',
    description:
      'Looks great out of the box with shadcn/ui integration, yet fully customizable.',
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-primary" />,
    title: 'Flexible Layout',
    description:
      'Control your form layout with grid, groups, and responsive configuration. WIP 👷🏾‍♀️⚒️',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our form builder provides all the tools developers need to create
              flexible, powerful forms with minimal effort.
            </p>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 6).map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {features.slice(6, 8).map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
