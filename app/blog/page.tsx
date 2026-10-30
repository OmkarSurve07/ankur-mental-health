import BlogCard from "@/components/BlogCard"

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          title="Understanding the Emotional Needs of Children and How to Support Them"
          slug="emotional-needs-of-children"
          image="/images/blogs/emotional-needs-children.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer="Dr. Mrudula Joshi, Psychologist"
          excerpt="From needing comfort and reassurance in early childhood to seeking validation and independence during adolescence, emotional needs change as children grow. Understanding these needs helps children feel safe, heard, valued, and emotionally resilient."
        />

        <BlogCard
          title="Work, Pressure, and Identity: Mental Health Challenges Faced by Men Today"
          slug="work-pressure-identity-men"
          image="/images/blogs/work-pressure-identity-men.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer="Dr. Mrudula Joshi, Psychologist"
          excerpt="Work often becomes more than a source of income — it shapes identity, self-worth, and how men see themselves. Exploring the pressure, expectations, and internal conflicts that impact men’s mental well-being."
        />

        <BlogCard
          title="Stress vs Burnout: Key Differences, Signs, and When to Seek Help"
          slug="stress-vs-burnout"
          image="/images/blogs/stress-vs-burnout.jpg"
          author="Sanika Pathare, Psychology Intern"
          reviewer="Dr. Mrudula Joshi, Psychologist"
          excerpt="Stress and burnout may look similar, but they are not the same. Knowing the difference, recognising the signs, and taking the right step can help you move towards healing, balance, and better mental wellbeing."
        />

        <BlogCard
          title="Why the Festive Season Can Feel Lonely and How to Deal With It"
          slug="festive-season-loneliness"
          image="/images/blogs/festive-season-loneliness.jpg"
          author="Sanika Pathare, Psychology Intern"
          reviewer="Dr. Mrudula Joshi, Psychologist"
          excerpt="The festive season can bring up feelings of longing and loneliness, especially when everyone else seems to have big plans. Here’s how to find warmth, connection, and hope — even in quiet moments."
        />

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
        <BlogCard
          title="Men’s Mental Health in India: Breaking the Silence and Stigma"
          slug="mens-mental-health-india"
          image="/images/blogs/mens-mental-health-india.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kuthe, Clinical Psychology Student <br />
              Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Men’s mental health often remains hidden behind expectations of strength, emotional suppression, and societal pressure. Understanding the stigma around men’s mental health is the first step toward creating healthier conversations and encouraging support."
        />
        <BlogCard
          title="How Fathers Influence Emotional Development In Children"
          slug="fathers-influence-emotional-development"
          image="/images/blogs/fathers-emotional-development.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kuthe, Clinical Psychology Student <br />
              Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Fathers play a powerful role in shaping how children understand, express, and regulate emotions. Emotional presence, support, and healthy role modelling can influence a child’s confidence, resilience, relationships, and overall emotional development."
        />
        <BlogCard
          title="Setting Healthy Boundaries at Work: Tips for Work-Life Balance and Mental Wellbeing"
          slug="healthy-boundaries-at-work"
          image="/images/blogs/work-life-boundaries.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kuthe, Clinical Psychology Student <br />
              Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Constantly answering work messages after hours, working weekends, or taking on more than you can manage can lead to stress and burnout. Healthy workplace boundaries help protect your mental wellbeing while maintaining productivity."
        />
        <BlogCard
          title="Mid-Year Mental Health Check-In: Reflect, Reset, and Refocus Your Mind"
          slug="mid-year-mental-health-check-in"
          image="/images/blogs/mid-year-mental-health-check-in.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kuthe, Clinical Psychology Student <br />
              Mrudula Joshi, Psychologist
            </>
          }
          excerpt="As the year reaches its halfway point, it can be helpful to pause and reflect on your mental wellbeing. A mid-year mental health check-in offers an opportunity to understand your emotions, manage stress more effectively, and move forward with greater clarity and balance."
        />
        <BlogCard
          title="Emotional Independence: How to Become Emotionally Self-Reliant"
          slug="emotional-independence"
          image="/images/blogs/emotional-independence.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Dr. Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Emotional independence is about understanding your emotions, trusting yourself, and developing the confidence to handle life's challenges without becoming overly dependent on others for emotional stability."
        />
        <BlogCard
          title="Identity Formation in Adolescence: Challenges, Mental Health and Ways to Support Teens"
          slug="identity-formation-in-adolescence"
          image="/images/blogs/identity-formation-adolescence.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kunthe, Psychology Student <br />
              Dr. Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Adolescence is an important stage of identity development. Understanding the challenges teenagers face can help parents, educators, and caregivers provide the support they need to build a healthy sense of self."
        />
        <BlogCard
          title="Healthy Family Boundaries: Understanding Family Dynamics and Mental Wellbeing"
          slug="healthy-family-boundaries"
          image="/images/blogs/healthy-family-boundaries.png"
          author="Dhanvi N Deshmukh, Psychology Intern"
          reviewer={
            <>
              Shravani Kunthe, Psychology Student <br />
              Dr. Mrudula Joshi, Psychologist
            </>
          }
          excerpt="Healthy family boundaries help create respectful relationships, emotional safety, and better communication. Understanding family dynamics can help individuals maintain their wellbeing while staying connected with their loved ones."
        />
      </div>

    </main>
  )
}
