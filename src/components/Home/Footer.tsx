export function Footer() {
  return (
    <footer className="border-t py-6 flex items-center justify-center md:py-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:py-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">F</span>
              </div>
              <span className="font-semibold">FormBuilder</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              A powerful, flexible form builder for your React applications.
              Built with developer experience in mind.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end lg:justify-center">
            <nav className="flex gap-4 sm:gap-6">
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </a>
              <a
                href="#code"
                className="text-sm font-medium hover:text-primary"
              >
                Code
              </a>
              <a
                href="#demo"
                className="text-sm font-medium hover:text-primary"
              >
                Demo
              </a>
              <a
                href="#usage"
                className="text-sm font-medium hover:text-primary"
              >
                Usage
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t py-6 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            © 2025 FormBuilder. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
