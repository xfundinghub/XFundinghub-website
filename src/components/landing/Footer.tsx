export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#NaNNaNNaN] flex bg-[#0a4ead]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">XFundingHub</h3>
          <p className="text-sm text-[#ffffff]">
            Revolutionizing cross-border lending
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-foreground text-[#ffffff]">
                Features
              </a>
            </li>
            <li className="text-[#e2e5eb]">
              <a href="#" className="hover:text-foreground text-[#ffffff]">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground text-[#ffffff]">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-foreground text-[#ffffff]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground text-[#ffffff]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground text-[#fbfbfb]">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-foreground text-[muted-foreground] text-[muted-foreground] text-[#ffffff]"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
