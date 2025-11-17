export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="paper-layer bg-card p-8 md:p-12 rounded-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">About ProjectIQ</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Welcome to ProjectIQ Consulting, your trusted source for mini projector reviews and recommendations. 
              We're passionate about helping you find the perfect projection solution for your needs.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to provide honest, detailed reviews and comparisons of mini projectors to help you 
              make informed purchasing decisions. We test and evaluate projectors across various categories, from 
              portable cinema projectors to business presentation devices.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Amazon Associates Program</h2>
            <p className="leading-relaxed">
              ProjectIQConsulting.com is a participant in the Amazon Services LLC Associates Program, an affiliate 
              advertising program designed to provide a means for sites to earn advertising fees by advertising and 
              linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
            </p>
            
            <p className="leading-relaxed">
              This means that when you click on links to products on Amazon and make a purchase, we may receive a 
              small commission at no additional cost to you. These commissions help us maintain and improve our website.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
