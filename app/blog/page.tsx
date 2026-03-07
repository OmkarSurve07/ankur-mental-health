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

        <BlogCard
          title="How Excessive Screen Time Affects Child Behaviour and Emotional Regulation"
          slug="screen-time-child-behaviour"
          image="/images/blogs/screen-time-behaviour.jpg"
          author="Ishana Dixit, Psychology Intern"
          reviewer="Mrudula Joshi, Psychologist"
          excerpt="Many parents and educators notice behavioural changes alongside increased screen use, such as more frequent tantrums, irritability, difficulty with transitions, or emotional withdrawal."
        />

        <BlogCard
          title="Indian Women’s Mental Health: Cultural Pressures, Emotional Labour, Anxiety, and Pathways to Healing"
          slug="indian-womens-mental-health"
          image="/images/blogs/indian-womens-mental-health.png"
          author="Ishana Dixit, Psychology Intern"
          reviewer="Mrudula Joshi, Psychologist"
          excerpt="Across many Indian households, women are often praised for their ability to manage everything. While these roles are culturally valued, they can also carry an invisible psychological cost."
        />
      </div>
    </main>
  )
}
