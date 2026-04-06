"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  url: string
  imageUrl?: string
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim()
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

const FEED_URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Famarsibia.substack.com%2Ffeed"

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status !== "ok") return
        const mapped: BlogPost[] = data.items.map((item: {
          title: string
          description: string
          pubDate: string
          link: string
          thumbnail?: string
          enclosure?: { link?: string }
        }) => ({
          title: item.title,
          excerpt: stripHtml(item.description),
          date: formatDate(item.pubDate),
          url: item.link,
          imageUrl: item.thumbnail || item.enclosure?.link || undefined,
        }))
        setPosts(mapped)
      })
      .catch(() => {})
  }, [])

  if (posts.length === 0) return null

  const [featured, ...rest] = posts

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text-alt pb-1">
            Straight Lines
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Clear thinking on technology for early-stage founders. Published every Wednesday.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md
                          transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                          md:flex">
            {featured.imageUrl && (
              <div className="md:w-1/2 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-60 md:h-full object-cover transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>
            )}
            <div className={`p-8 flex flex-col justify-between ${featured.imageUrl ? "md:w-1/2" : "w-full"}`}>
              <div>
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 block">
                  Latest
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">{featured.date}</span>
                <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Remaining posts grid */}
        {rest.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {rest.map((post) => (
              <Link
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md
                                transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  {post.imageUrl && (
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                      <ArrowUpRight className="h-4 w-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="https://amarsibia.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <BookOpen className="mr-2 h-4 w-4" />
              View all on Substack
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
