export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
      <div className="max-w-5xl w-full">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wider">[ FULL STACK DEVELOPER ]</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
              Building digital
              <br />
              experiences that
              <br />
              matter.
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="h-px flex-1 bg-border" />
            <p className="text-muted-foreground">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  )
}
