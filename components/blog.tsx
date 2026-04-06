import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  url: string
  imageUrl?: string
}

function extractCdata(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, "s"))
  return match ? match[1].trim() : ""
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attr}="([^"]*)"`, "s"))
  return match ? match[1] : ""
}

function formatDate(pubDate: string): string {
  try {
    return new Date(pubDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return pubDate
  }
}

async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch("https://amarsibia.substack.com/feed", {
      next: { revalidate: false },
    })
    const xml = await res.text()

    const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]

    return itemMatches.map((m) => {
      const item = m[1]
      return {
        title: extractCdata(item, "title"),
        excerpt: extractCdata(item, "description"),
        date: formatDate(extractCdata(item, "pubDate")),
        url: extractCdata(item, "link"),
        imageUrl: extractAttr(item, "enclosure", "url"),
      }
    })
  } catch {
    return []
  }
}

const Blog = async () => {
  const posts = await fetchPosts()

  if (posts.length === 0) return null

  return (
    <section id="blog" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-2">Straight Lines</h2>
          <p className="text-muted-foreground">
            Clear thinking on technology for early-stage founders.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.url} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              {post.imageUrl && (
                <div className="overflow-hidden rounded-t-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={post.url} target="_blank" rel="noopener noreferrer">
                    Read <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://amarsibia.substack.com" target="_blank" rel="noopener noreferrer">
              View all on Substack <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
