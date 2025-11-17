export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="paper-layer bg-card p-8 md:p-12 rounded-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Last updated: January 2025</p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using ProjectIQConsulting.com, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Affiliate Disclosure</h2>
            <p className="leading-relaxed">
              ProjectIQConsulting.com is a participant in the Amazon Services LLC Associates Program. We earn 
              from qualifying purchases made through affiliate links on our site. Product prices and availability 
              are accurate as of the date/time indicated and are subject to change.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Content and Reviews</h2>
            <p className="leading-relaxed">
              All product reviews and recommendations on this site represent our honest opinions. While we strive 
              for accuracy, we cannot guarantee that all information is complete or error-free. We recommend 
              verifying product specifications directly with manufacturers.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">External Links</h2>
            <p className="leading-relaxed">
              Our website contains links to external websites, including Amazon.com. We are not responsible for 
              the content, privacy policies, or practices of these external sites.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              ProjectIQConsulting.com shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our website or reliance on product recommendations.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the website after changes 
              constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
