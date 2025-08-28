import { useState } from "react"
import { BookCard } from "@/components/BookCard"
import { SearchBar } from "@/components/SearchBar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Filter, Plus } from "lucide-react"

// Sample data
import sampleBook1 from "@/assets/sample-book-1.jpg"
import sampleBook2 from "@/assets/sample-book-2.jpg"
import sampleBook3 from "@/assets/sample-book-3.jpg"

const sampleBooks = [
  {
    id: "1",
    title: "The Art of Wisdom",
    author: "Marcus Chen",
    cover: sampleBook1,
    progress: 75,
    genre: "Philosophy",
    isFavorite: true,
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
    genre: "Philosophy",
    lastRead: "3 days ago"
  },
  {
    id: "4",
    title: "Digital Ethics",
    author: "Sarah Wilson",
    cover: sampleBook1,
    progress: 0,
    genre: "Technology",
    lastRead: "Never"
  },
  {
    id: "5",
    title: "Ancient Wisdom",
    author: "Professor Zhang",
    cover: sampleBook2,
    progress: 100,
    genre: "Philosophy",
    isFavorite: true,
    lastRead: "Last week"
  },
  {
    id: "6",
    title: "Creative Writing",
    author: "Maya Patel",
    cover: sampleBook3,
    progress: 60,
    genre: "Writing",
    lastRead: "2 days ago"
  }
]

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")

  const filteredBooks = sampleBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterBy === "all" || book.genre === filterBy
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Your Library</h1>
          <p className="text-muted-foreground mt-1">{filteredBooks.length} books in your collection</p>
        </div>
        <Button variant="wisdom" className="gap-2">
          <Plus className="w-4 h-4" />
          Import Books
        </Button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          className="flex-1"
        />
        
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently Read</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="author">Author A-Z</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="Philosophy">Philosophy</SelectItem>
              <SelectItem value="Literature">Literature</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Writing">Writing</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border border-border rounded-lg p-1">
            <Button 
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          : "space-y-4"
      }>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <div className="gradient-card rounded-xl p-8 border border-border/50 max-w-md mx-auto">
            <h3 className="text-lg font-medium text-card-foreground mb-2">No books found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("")
              setFilterBy("all")
            }}>
              Clear filters
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}