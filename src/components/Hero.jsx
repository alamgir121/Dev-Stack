export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-5 text-muted text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Browse frontend, backend, database, and DevOps technologies, compare them at a
            glance, and collect the ones you want into a stack that's actually yours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-ink font-semibold px-6 py-3 rounded-full hover:border-ink transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-stack.png"
            alt="Layered illustration of a development stack: fonts, UI controls, and circuitry"
            className="w-56 sm:w-72 md:w-full max-w-sm drop-shadow-2xl"
            width="420"
            height="420"
          />
        </div>
      </div>
    </section>
  );
}
