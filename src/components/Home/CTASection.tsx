import { Book, Github } from 'lucide-react';
import { GITHUB_REPO } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-20 flex items-center justify-center bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start building beautiful, functional forms in minutes.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a className="inline-flex h-11 bg-neutral-800 text-white rounded-md shadow-sm border items-center justify-center px-8">
              <Book className="mr-2 h-5 w-5" />
              Explore Docs
            </a>
            <a
              href={GITHUB_REPO}
              className="inline-flex h-11 bg-white text-neutral-800 rounded-md border shadow-sm text-sm py-2 items-center justify-center px-8"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
