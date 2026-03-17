import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-primary font-mono text-sm tracking-wider">04. What&apos;s Next?</span>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-8">
          Let&apos;s Make Your <br />
          <span className="italic text-primary">Vision</span> Into <span className="text-white">Visuals</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          I&apos;m currently looking for new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to connect - my inbox is always open!
        </p>

        <Link
          href="mailto:tqnguyen@vassar.edu"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-mono tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full uppercase"
        >
          Send Me An Email
        </Link>
      </div>
    </section>
  )
}
