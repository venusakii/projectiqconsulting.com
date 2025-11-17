export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="paper-layer bg-card p-8 md:p-12 rounded-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Last updated: January 2025</p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              ProjectIQConsulting.com collects minimal information to provide you with the best browsing experience. 
              We may collect basic analytics data such as page views, browser type, and referring sites through 
              standard web analytics tools.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Cookies</h2>
            <p className="leading-relaxed">
              We use cookies to improve your browsing experience. These cookies help us understand how visitors 
              interact with our website and allow us to provide relevant content recommendations.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Third-Party Services</h2>
            <p className="leading-relaxed">
              We use Amazon Associates links on our site. When you click on these links, Amazon may place cookies 
              on your device. Please refer to Amazon's privacy policy for more information about their data practices.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Contact Forms</h2>
            <p className="leading-relaxed">
              If you submit information through our contact form, we collect your name and email address solely 
              for the purpose of responding to your inquiry. We do not share this information with third parties.
            </p>
            
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to know what information we collect and request its deletion. Please contact us 
              if you have any privacy concerns or requests.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
