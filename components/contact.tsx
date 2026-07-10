import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-primary font-mono text-2xl tracking-wider">What&apos;s Next?</span>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-8">
          Let&apos;s build something <br />
          that <span className="italic text-primary">thinks</span>.
        </h2>

        <p className="text-gray-100 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Right now I&apos;m building Aevol into a full AI evaluation platform, conducting AI agentic research, and applying ML skills from my Break Through Tech fellowship to real industry problems. I&apos;m actively looking for summer engineering and research roles where systems depth meets applied AI &mdash; my inbox is open.
        </p>

        <Link
          href="mailto:nguyenquangtung1306@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-mono tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full uppercase"
        >
          Send Me An Email
        </Link>
      </div>
    </section>
  )
}
