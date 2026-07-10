import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowRight, Calendar, Tag } from "lucide-react"

export function Blog() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">06.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Writing</h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <p className="text-gray-100 text-lg max-w-2xl leading-relaxed mb-12">
          Notes on AI safety research, systems engineering, and things I&apos;m figuring out.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-card/50 p-10 text-center">
            <p className="text-gray-200 font-mono text-sm">No posts yet. Drop a <code className="text-primary">.md</code> file in <code className="text-primary">content/blog/</code> to publish.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl text-white group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-gray-300">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs font-mono text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
              </Link>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
