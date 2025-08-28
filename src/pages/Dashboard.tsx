import { BookCard } from "@/components/BookCard"
import { DashboardStats } from "@/components/DashboardStats"
import { WisdomQuote } from "@/components/WisdomQuote"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"

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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back to your sanctuary</h1>
          <p className="text-muted-foreground mt-1">Continue your journey of knowledge and wisdom</p>
        </div>
        <Button variant="wisdom" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Book
        </Button>
      </div>

      {/* Stats */}
      <DashboardStats 
        totalBooks={127}
        booksRead={43}
        currentlyReading={8}
        favoriteBooks={15}
      />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Continue Reading */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Continue Reading</h2>
            <Button variant="ghost" className="gap-2 text-primary">
              View all <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>

        {/* Daily Wisdom */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Daily Wisdom</h2>
          <WisdomQuote {...wisdomQuote} />
          
          {/* Quick actions */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="hero" className="w-full justify-start">
                Browse Library
              </Button>
              <Button variant="hero" className="w-full justify-start">
                View Notes
              </Button>
              <Button variant="hero" className="w-full justify-start">
                Search Books
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}