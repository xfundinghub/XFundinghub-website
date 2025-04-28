export default function Header() {
  return (
    <header className="w-full h-20 bg-background border-b">
      <div className="container mx-auto h-full flex items-center justify-between">
        <img src="/Logo.png" alt="XFundingHub" className="h-20" />
        <nav className="space-x-6">
          <a
            href="#features"
            className="text-foreground/80 hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="text-foreground/80 hover:text-foreground"
          >
            Benefits
          </a>
          <a href="#trust" className="text-foreground/80 hover:text-foreground">
            Trust
          </a>
        </nav>
      </div>
    </header>
  );
}
