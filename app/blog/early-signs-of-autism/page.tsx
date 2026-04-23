export default function BlogDetail() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-gray-800 text-[16px] md:text-[18px] leading-8">

      {/* Title */}
      <h1 className="text-4xl font-bold text-[#764b36] leading-snug">
        Early Signs of Autism in Children: Symptoms, Causes & How Parents Can Help
      </h1>

      {/* Author */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><strong>Content Author:</strong> Avni Joshi, Psychology Intern</p>
        <p><strong>Expert Review:</strong> Mrudula Joshi, Psychologist</p>
      </div>

      {/* Intro */}
      <section className="mt-8 space-y-4">
        <p>
          Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a child communicates, interacts socially, and experiences the world.
        </p>
        <p>
          With increasing awareness, many parents worry about whether their child may exhibit early signs of autism and how it may affect their development, schooling, and emotional wellbeing.
        </p>
      </section>

      {/* What is Autism */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          What is Autism Spectrum Disorder (ASD)?
        </h2>

        <p>
          Autism is a spectrum condition characterised by differences in communication, social interaction, and behaviour.
        </p>

        <p>
          It often includes repetitive behaviours (stimming), difficulty transitioning between activities, and sensory sensitivities.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Delayed speech and language development</li>
          <li>Limited eye contact</li>
          <li>Difficulty with social interaction</li>
          <li>Repetitive behaviours</li>
        </ul>
      </section>

      {/* Symptoms */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Symptoms of Autism Spectrum Disorder
        </h2>

        <p>
          Autism affects social interaction, emotional processing, and behavioural patterns.
        </p>

        <p>
          Children may struggle with understanding social cues such as facial expressions and body language, while still being able to feel emotions deeply.
        </p>
      </section>

      {/* Emotional Impact */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Emotional and Behavioural Impact
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Feelings of insecurity and loneliness</li>
          <li>Social isolation</li>
          <li>Difficulty expressing emotions</li>
          <li>Dependency on caregivers</li>
        </ul>
      </section>

      {/* Early Signs */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Early Signs of Autism in Children
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reduced or no eye contact</li>
          <li>Not responding to name</li>
          <li>Delayed speech development</li>
          <li>Preference for solitary play</li>
          <li>Difficulty understanding emotions</li>
        </ul>
      </section>

      {/* Behaviour */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Restricted and Repetitive Behaviors
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Hand-flapping, rocking, spinning</li>
          <li>Strong need for routines</li>
          <li>Intense interests</li>
          <li>Echolalia (repeating words/phrases)</li>
        </ul>
      </section>

      {/* Sensory */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Sensory Processing Differences
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Sensitivity to light, sound, touch</li>
          <li>Feeding and sleeping issues</li>
          <li>Strong emotional reactions</li>
          <li>Delayed developmental milestones</li>
        </ul>
      </section>

      {/* Causes */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          Causes and Risk Factors
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Prenatal exposure to pollutants, alcohol, tobacco</li>
          <li>Low birth weight or oxygen levels</li>
          <li>Genetic and hereditary factors</li>
        </ul>

        <p>
          Screen time does not cause autism, but excessive exposure may worsen symptoms such as delayed speech and social withdrawal.
        </p>
      </section>

      {/* Support */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          How to Support a Child with Autism
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the child’s needs</li>
          <li>Provide structured routines</li>
          <li>Support sensory preferences</li>
          <li>Encourage emotional safety</li>
          <li>Seek professional help early</li>
        </ul>
      </section>

      {/* When to Seek Help */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          When to Seek Professional Help
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>No response to name by 9–12 months</li>
          <li>No speech by 24 months</li>
          <li>Avoids eye contact</li>
          <li>Loss of previously acquired skills</li>
          <li>Extreme sensitivity to stimuli</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-[#764b36]">
          FAQs
        </h2>

        <p><strong>What are early signs of autism?</strong><br />
          Delayed speech, limited eye contact, repetitive behaviours, and social difficulties.
        </p>

        <p><strong>Which doctor should I consult?</strong><br />
          Pediatrician, neurologist (if needed), and a child psychologist.
        </p>

        <p><strong>Is autism curable?</strong><br />
          Autism is not curable, but symptoms can be managed with therapy.
        </p>

        <p><strong>Can children attend normal schools?</strong><br />
          Yes, depending on severity and support required.
        </p>
      </section>

    </article>
  )
}