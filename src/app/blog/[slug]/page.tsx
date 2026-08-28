import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically generate parameters for dynamic paths at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  if (posts.length === 0) {
    return [{ slug: "placeholder" }];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="max-w-3xl">
        {/* Navigation */}
        <div className="mb-8">
          <Button href="/blog" variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
            &larr; Back to Articles
          </Button>
        </div>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-4 border-b border-brand-border/60 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted">
              <Badge variant="primary">{post.category}</Badge>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            
            <p className="text-base text-brand-muted leading-relaxed">
              {post.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 pt-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Render Markdown Content HTML */}
          <div 
            className="markdown-content text-brand-text/95 leading-relaxed text-sm space-y-6"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
          />
        </article>
      </Container>
    </div>
  );
}
