import { BookCard } from "@/components/BookCard"
import { DashboardStats } from "@/components/DashboardStats"
import { WisdomQuote } from "@/components/WisdomQuote"
import { SearchBar } from "@/components/SearchBar"
import { CategoryFilter } from "@/components/CategoryFilter"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Search } from "lucide-react"

// Sample data
import sampleBook1 from "@/assets/sample-book-1.jpg"
import sampleBook2 from "@/assets/sample-book-2.jpg"
import sampleBook3 from "@/assets/sample-book-3.jpg"

const recentBooks = [
  {
    id: "1",
    title: "The Art of Wisdom",
    author: "Marcus Chen",
    cover: sampleBook1,
    progress: 75,
    genre: "Philosophy",
    lastRead: "2 hours ago"
  },
  {
    id: "2", 
    title: "Classical Foundations",
    author: "Elena Rodriguez",
    cover: sampleBook2,
    progress: 45,
    genre: "Literature",
    lastRead: "Yesterday"
  },
  {
    id: "3",
    title: "Modern Mindfulness",
    author: "David Kim",
    cover: sampleBook3,
    progress: 20,
    isFavorite: true,
    genre: "Philosophy", 
    lastRead: "3 days ago"
  }
]

const wisdomQuote = {
  quote: "The only true wisdom is in knowing you know nothing.",
  author: "Socrates",
  book: "Apology"
}

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section with Search */}
      <div className="text-center space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground tracking-tight">
            Discover Your Next
            <span className="block text-primary">Great Read</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore thousands of books, track your reading journey, and discover wisdom from the world's greatest minds.
          </p>
        </div>
        
        {/* Large Search Bar */}
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            placeholder="Search for books, authors, genres..." 
            className="text-lg py-4"
          />
        </div>
        
        {/* Quick Categories */}
        <CategoryFilter className="justify-center" />
      </div>

      {/* Featured Books Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Continue Reading</h2>
            <p className="text-muted-foreground mt-2">Pick up where you left off</p>
          </div>
          <Button variant="ghost" className="gap-2 text-primary text-lg">
            View all <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>

      {/* Bottom Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="lg:col-span-2">
          <DashboardStats 
            totalBooks={127}
            booksRead={43}
            currentlyReading={8}
            favoriteBooks={15}
          />
        </div>

        {/* Daily Wisdom */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Daily Wisdom</h3>
          <WisdomQuote {...wisdomQuote} />
        </div>
      </div>
    </div>
  )
}