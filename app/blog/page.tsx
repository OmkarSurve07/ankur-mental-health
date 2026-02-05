import BlogCard from "@/components/BlogCard"

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          title="Screen Addiction in Children: Early Signs, Brain Impact, and What Parents Can Do"
          slug="screen-addiction-in-children"
          image="/images/blogs/screen-addiction-children.jpg"
          author="Ishana Dixit, Psychology Intern"
          reviewer="Mrudula Joshi, Psychologist"
          excerpt="If your child becomes unusually upset when screens are taken away, constantly asks for a phone or tablet, or seems bored without digital stimulation,"
        />
      </div>
    </main>
  )
}
