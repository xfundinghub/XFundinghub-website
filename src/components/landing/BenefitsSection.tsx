export default function BenefitsSection() {
  return (
    <section className="w-full py-20 bg-muted">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">For Lenders</h2>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Access to global lending opportunities</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Automated risk assessment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Streamlined documentation process</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">For Borrowers</h2>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Quick access to funding</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Competitive rates</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✓</span>
              <span>Transparent process</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
