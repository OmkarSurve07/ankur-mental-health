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
        <BlogCard
          title="Early Signs of Autism in Children: Symptoms, Causes & How Parents Can Help"
          slug="early-signs-of-autism"
          image="/images/blogs/autism-children.jpg"
          author="Avni Joshi, Psychology Intern"
          reviewer="Mrudula Joshi, Psychologist"
          excerpt="Autism Spectrum Disorder (ASD) affects how a child communicates, interacts socially, and experiences the world. Early identification and support can make a significant difference."
        />
        <BlogCard
          title="Parenting Neurodivergent Children: Strategies for Emotional Regulation, Behaviour & Support"
          slug="parenting-neurodivergent-children"
          image="/images/blogs/neurodivergent-parenting.jpeg"
          author="Aaditi Kadam, Intern Psychologist"
          reviewer="Mrudula Joshi, Senior Psychologist"
          excerpt="Parenting neurodivergent children requires understanding, patience, and the right strategies to support emotional regulation, behaviour, and overall development."
        />
        <BlogCard
          title="Therapy Myths Debunked: What Therapy Really Is, How It Works & When to Seek Help"
          slug="therapy-myths-debunked"
          image="/images/blogs/therapy-myths-debunked.png"
          author="Aaditi Kadam, Intern Psychologist"
          reviewer={
            <>
              Mrudula Joshi, Senior Psychologist <br />
              Shravani Kuthe, Clinical Psychology Student
            </>
          }
          excerpt="You’ve been feeling off for a while, restless yet functioning normally. Therapy can feel intimidating because of myths, doubts, and fear of judgment. Understanding what therapy really is can help you take the first step toward emotional wellbeing."
        />
        <BlogCard
          title="Mental Health Awareness Month: Why It Matters in India"
          slug="mental-health-awareness-month-india"
          image="/images/blogs/mental-health-awareness-india.png"
          author="Shravani Kuthe, Clinical Psychology Student"
          reviewer="Mrudula Joshi, Psychologist"
          excerpt="Mental Health Awareness Month highlights the importance of emotional wellbeing, reducing stigma, and encouraging people to seek support. In India, conversations around mental health are becoming increasingly important in schools, workplaces, and families."
        />
        <BlogCard
          title="When Anxiety Stops Being “Just Stress”: Understanding Anxiety Disorders"
          slug="understanding-anxiety-disorders"
          image="/images/blogs/anxiety-disorders.png"
          author="Shravani Kuthe, Clinical Psychology Student"
          reviewer="Mrudula Joshi, Senior Psychologist"
          excerpt="Stress and anxiety are often used interchangeably, but anxiety disorders go beyond everyday stress. Understanding the signs, emotional impact, and when to seek professional support can help individuals recognize anxiety before it begins affecting daily life."
        />
        <BlogCard
          title="10 Evidence-Based Coping Strategies for Anxiety and Stress Management"
          slug="coping-strategies-for-anxiety-and-stress"
          image="/images/blogs/anxiety-stress-management.png"
          author="Avni Joshi, Psychology Intern"
          reviewer={
            <>
              Mrudula Joshi, Senior Psychologist <br />
              Shravani Kuthe, Psychology Student
            </>
          }
          excerpt="Feeling emotionally overwhelmed, mentally exhausted, or constantly stressed has become increasingly common in today’s fast-paced world. Learning evidence-based coping strategies can help manage anxiety, reduce stress, and improve emotional well-being."
        />
      </div>

    </main>
  )
}
