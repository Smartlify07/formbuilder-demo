import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Forms. Simplified.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A powerful, flexible form builder for your React applications
                that makes complex forms simple.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="inline-flex h-10 items-center justify-center px-8"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="inline-flex h-10 items-center justify-center px-8"
              >
                View on GitHub
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Type-safe</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Zod validation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Customizable</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 opacity-50 blur-xl"></div>
            <div className="relative h-full rounded-xl bg-card p-6 shadow-lg overflow-hidden">
              <pre className="text-sm md:text-sm overflow-x-auto p-4 rounded-md bg-muted">
                <code className="language-typescript">{`// Create a form in seconds
import { ElementsProps } from '../types';

export const formElements: ElementsProps[] = [
  {
    name: 'name',
    elementType: 'text',
    label: 'Name',
    placeholder: 'John Doe',
  },
  {
    name: 'email',
    elementType: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
  },
  {
    name: 'role',
    elementType: 'select',
    label: 'Role',
    options: [
      { label: 'Frontend Dev', value: 'frontend' },
      { label: 'Backend Dev', value: 'backend' },
    ],
    slots: {
      trigger: 'w-full',
      selectItem: 'py-2 px-2',
    },
  },
  {
    name: 'message',
    elementType: 'textarea',
    label: 'Message',
    placeholder: 'Type something...',
    rows: 6,
  },
  {
    name: 'submit',
    elementType: 'button',
    label: 'Submit',
    className: 'bg-neutral-900 text-white',
  },
];
`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
