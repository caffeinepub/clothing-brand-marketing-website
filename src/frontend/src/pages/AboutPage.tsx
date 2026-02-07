export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/lifestyle-banner.dim_1600x900.png"
            alt="About Us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="container relative mx-auto flex h-full items-center px-4 md:px-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">About ATELIER</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a vision to redefine contemporary fashion, ATELIER brings together timeless
              design and modern sensibility. We believe that clothing should be more than just fabric—it
              should be an expression of individuality and a testament to quality craftsmanship.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Our Philosophy</h3>
            <p className="leading-relaxed text-muted-foreground">
              Every piece in our collection is thoughtfully designed to transcend fleeting trends. We
              focus on creating versatile, high-quality garments that become staples in your wardrobe.
              Our commitment to sustainable practices ensures that style never comes at the expense of
              our planet.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Craftsmanship</h3>
            <p className="leading-relaxed text-muted-foreground">
              We partner with skilled artisans and ethical manufacturers who share our dedication to
              excellence. From the selection of premium materials to the final stitch, every step of our
              production process is carefully monitored to ensure the highest standards of quality and
              sustainability.
            </p>
          </div>

          <div className="border-t border-border/40 pt-8">
            <h3 className="mb-4 text-2xl font-semibold">Join Our Journey</h3>
            <p className="leading-relaxed text-muted-foreground">
              We invite you to explore our collections and discover pieces that resonate with your
              personal style. Thank you for supporting conscious fashion and being part of our story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
