import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata = {
  title: "Writing — Tony Nguyen",
  description: "Notes on AI safety, systems engineering, and research.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-200 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Writing</h1>
        <p className="text-gray-200 text-lg mb-16 leading-relaxed">
          Notes on AI safety research, systems engineering, and things I&apos;m figuring out.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-card/50 p-10 text-center">
            <p className="text-gray-200 font-mono text-sm">
              No posts yet. Drop a <code className="text-primary">.md</code> file in{" "}
              <code className="text-primary">content/blog/</code> to publish.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-border bg-card/80 p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-xl text-white group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
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
      </div>
    </main>
  )
}
