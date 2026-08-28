import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { getAllPosts } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Technical Blog | Payment Switches & Legacy Modernization",
  description: "Read engineering articles about VSAM record-level sharing (RLS), ISO 8583 payment parsing, and AI fraud checks.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="space-y-12">
        <SectionHeading
          title="Technical Blog"
          subtitle="Articles on core banking systems modernization, payment authorization, mainframe engineering, and financial AI integrations."
        />

        {posts.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-brand-border rounded-xl">
            <p className="text-sm text-brand-muted">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full hover:border-brand-primary/30 transition-glow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-primary">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-brand-muted">{post.date}</span>
                  </div>
                  <CardTitle className="text-base font-bold text-brand-text leading-snug hover:text-brand-primary transition-colors">
                    <a href={`/blog/${post.slug}`} className="cursor-pointer">{post.title}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-2 border-t border-brand-border/40 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[9px] px-1.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between w-full mt-1">
                    <span className="text-[10px] text-brand-muted">{post.readTime}</span>
                    <Button href={`/blog/${post.slug}`} variant="ghost" size="sm" className="text-xs font-semibold p-0 h-auto hover:bg-transparent text-brand-primary">
                      Read Article &rarr;
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
