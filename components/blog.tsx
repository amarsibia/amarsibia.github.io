import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Scaling Microservices: Lessons Learned",
    excerpt: "Insights from scaling our microservices architecture to handle millions of requests.",
    date: "2023-05-15",
    slug: "scaling-microservices-lessons-learned",
  },
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how AI is reshaping the landscape of software development and engineering practices.",
    date: "2023-04-22",
    slug: "future-of-ai-in-software-development",
  },
  {
    title: "Building a Culture of Innovation in Engineering Teams",
    excerpt: "Strategies for fostering creativity and innovation within your engineering organisation.",
    date: "2023-03-10",
    slug: "building-culture-of-innovation",
  },
  // Add more blog posts as needed
]

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog

