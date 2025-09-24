import { posts } from "@/lib/posts"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className='max-w-3xl mx-auto py-10 px-4'>
      <h1 className='text-3xl font-bold mb-6 text-foreground'>
        Phong's Tech Blog
      </h1>
      <div className='space-y-6'>
        {posts.map((post) => (
          <article
            key={post.slug}
            className='border-b border-border pb-6 last:border-b-0'
          >
            <h2 className='text-xl font-semibold mb-2'>
              <Link
                href={`/blog/${post.slug}`}
                className='text-foreground hover:text-primary transition-colors'
              >
                {post.title}
              </Link>
            </h2>
            <p className='text-muted-foreground mb-2'>{post.description}</p>
            <p className='text-sm text-muted-foreground mb-3'>{post.date}</p>
            <div className='flex gap-2 flex-wrap'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
