export function VideoSection() {
  return (
    <section className="py-24 px-4 bg-muted relative overflow-hidden">
      {/* Floating paper stars */}
      <div className="absolute top-20 left-[10%] w-8 h-8 bg-secondary paper-layer rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-[15%] w-6 h-6 bg-accent paper-layer rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[8%] w-10 h-10 bg-primary/30 paper-layer rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
            {'See the Light'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Watch how mini projectors transform any space'}
          </p>
        </div>

        {/* Video frame with paper border */}
        <div className="relative">
          {/* Paper frame layers */}
          <div className="absolute -inset-4 bg-card paper-layer rounded-3xl -rotate-1" />
          <div className="absolute -inset-2 bg-secondary/30 paper-layer rounded-3xl rotate-1" />
          
          {/* Video container */}
          <div className="relative bg-card paper-deep rounded-2xl overflow-hidden aspect-video">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/mini-projector-displaying-movie.jpg"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              {'Your browser does not support the video tag.'}
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
