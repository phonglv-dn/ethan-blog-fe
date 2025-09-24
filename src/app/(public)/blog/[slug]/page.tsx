import { notFound } from "next/navigation"
import { posts } from "@/lib/posts"
import { marked } from "marked"

type Props = {
  params: { slug: string }
}

export default function BlogDetailPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <main className='max-w-3xl mx-auto py-10 px-4'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold mb-2 text-foreground'>
          {post.title}
        </h1>
        <p className='text-muted-foreground mb-4'>{post.date}</p>
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
      </header>
      <div
        className='prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:border prose-pre:border-border'
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </main>
  )
}
