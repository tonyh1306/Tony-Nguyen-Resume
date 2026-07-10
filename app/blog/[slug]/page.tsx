import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Tony Nguyen`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = getAllPosts()
  const exists = posts.find((p) => p.slug === slug)
  if (!exists) notFound()

  const post = await getPostBySlug(slug)

  return (
    <main className="min-h-screen bg-background px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-200 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          All posts
        </Link>

        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm font-mono text-gray-300">
              <Calendar className="w-3.5 h-3.5" />
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
                className="flex items-center gap-1 text-xs font-mono text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-white
            prose-p:text-gray-100 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-card prose-pre:border prose-pre:border-border
            prose-blockquote:border-primary prose-blockquote:text-gray-200
            prose-li:text-gray-100
            prose-hr:border-border"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    </main>
  )
}
