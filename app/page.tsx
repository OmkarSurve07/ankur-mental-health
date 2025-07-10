"use client"

import { Phone, MessageCircle, Shield, Heart, Brain, Users, MapPin, Award, BookOpen, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AnkurMentalHealth() {
  const whatsappNumber = "919869378751" // Indian WhatsApp number format
  const phoneNumber = "+91-98693-78751"

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello, I would like to schedule a consultation with Ankur Mental Health Services.`,
      "_blank",
    )
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Sprout className="h-8 w-8 text-orange-600" />
              <div>
                <span className="text-2xl font-bold text-gray-900">Ankur</span>
                <p className="text-sm text-orange-600 font-medium">Mental Health Services</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </a>
              <a href="#training" className="text-gray-700 hover:text-orange-600 transition-colors">
                Training
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex space-x-2">
              <Button onClick={handleWhatsAppClick} className="bg-orange-600 hover:bg-orange-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-6 w-6 text-orange-600" />
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  Every Individual Holds the Potential to Heal & Grow
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nurturing Growth, One Sprout at a Time
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                At Ankur, we create a therapeutic space that is grounded, collaborative, and deeply respectful of your
                unique journey. Led by Mrudula Joshi, Clinical Psychologist with 13+ years of experience.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">Research Paper Award Winner</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">Suicide Prevention Expert</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book via WhatsApp
                </Button>
                <Button
                  onClick={handleCallClick}
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 98693-78751
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Mrudula Joshi - Clinical Psychologist at Ankur Mental Health Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Sprout className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-600">13+ Years</span>
                </div>
                <p className="text-sm text-gray-600">Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Mumbai & Thane Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>REBT & Play Therapy Certified</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={handleWhatsAppClick}
                variant="secondary"
                size="sm"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Quick WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Mrudula Joshi</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Clinical Psychologist | Psychotherapist | Trainer | Suicide Prevention Expert | Research Paper Award
              Winner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Ankur Stands For</h3>
              <div className="flex items-center space-x-3 mb-4">
                <Sprout className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="font-semibold text-lg">"Ankur" means sprout</p>
                  <p className="text-gray-600">A symbol of life, new beginnings, and resilience</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We honour each person's journey toward clarity and growth with mindful listening, science-backed
                strategies, and a space where healing is not rushed but nurtured.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Person-centered and collaborative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Rooted in psychological science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Culturally sensitive and age-appropriate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Structured yet flexible to individual needs</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Therapy for children, teens, adults, couples & families</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Psychological assessments (IQ, LD, ADHD, Autism)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Suicide prevention & crisis interventions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Supervision & mentoring for psychologists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700">Training modules for schools & workplaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Your well-being deserves care that is clear, compassionate, and evidence-informed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Therapy & Counselling */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Therapy & Counselling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Children & Adolescents</h4>
                    <p className="text-gray-600 text-sm">
                      Managing attention, emotions, school challenges, and developmental concerns
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Adults</h4>
                    <p className="text-gray-600 text-sm">
                      Supporting mental health across stress, anxiety, depression, grief, and life transitions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Couples & Families</h4>
                    <p className="text-gray-600 text-sm">
                      Restoring connection, resolving conflict, and strengthening communication
                    </p>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 flex-1"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={handleCallClick}
                      size="sm"
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Psychological Assessments */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  Psychological Assessments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Child & Adolescent Assessments</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• IQ & Cognitive Assessments</li>
                      <li>• Learning Disability (LD) Evaluation</li>
                      <li>• ADHD Screening</li>
                      <li>• Autism Spectrum Assessments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Adult Assessments</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Clinical Personality Assessments</li>
                      <li>• ADHD & Cognitive Functioning</li>
                    </ul>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 flex-1"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={handleCallClick}
                      size="sm"
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marital & Family Counselling */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Marital & Family Counselling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Whether you're navigating communication issues, parenting stress, or generational conflict — our
                  counselling services help create a respectful space to rebuild trust and shared understanding.
                </p>
                <div className="flex space-x-2">
                  <Button onClick={handleWhatsAppClick} size="sm" className="bg-orange-600 hover:bg-orange-700 flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Supervision & Mentoring */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Supervision & Mentoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600">We offer supervision for:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Early-career mental health professionals</li>
                    <li>• Trainees and interns in psychology or counselling</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Guidance focused on reflective practice, ethical clarity, and skill-building.
                  </p>
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button onClick={handleWhatsAppClick} size="sm" className="bg-orange-600 hover:bg-orange-700 flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of healing, growth, and transformation. Every journey is unique, and every step forward
              matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Individual Therapy Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "After struggling with anxiety for years, I finally found the support I needed. Mrudula's REBT
                  approach helped me understand my thought patterns and develop practical coping strategies. I feel more
                  confident and in control of my life now."
                </p>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Anonymous Client</p>
                    <p className="text-sm text-gray-600">Individual Therapy - Anxiety Management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Child Therapy Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "My 8-year-old was struggling with attention issues at school. Through play therapy sessions, we saw
                  remarkable improvement in his focus and emotional regulation. The assessment helped us understand his
                  needs better, and now he's thriving academically."
                </p>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Parent of Young Client</p>
                    <p className="text-sm text-gray-600">Child Therapy & ADHD Assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Couples Counseling Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "We were on the verge of separation when we decided to try couples counseling. Mrudula created a safe
                  space for both of us to express our feelings. We learned new communication skills and rebuilt our
                  trust. Our marriage is stronger than ever."
                </p>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Married Couple</p>
                    <p className="text-sm text-gray-600">Couples Counseling</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teen Therapy Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "As a teenager dealing with depression and academic pressure, I felt lost. The therapy sessions helped
                  me understand my emotions and develop healthy coping mechanisms. I'm now more confident and have
                  better relationships with my family."
                </p>
                <div className="flex items-center space-x-2">
                  <Sprout className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Teen Client</p>
                    <p className="text-sm text-gray-600">Adolescent Therapy - Depression</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Family Therapy Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Generational conflicts were tearing our family apart. Through family counseling, we learned to
                  understand each other's perspectives and communicate more effectively. We now have regular family
                  meetings and much better relationships."
                </p>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Family of Four</p>
                    <p className="text-sm text-gray-600">Family Counseling</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Success */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The comprehensive psychological assessment provided clarity about my learning differences. The
                  detailed report and recommendations helped me get the right accommodations at work. I finally
                  understand why certain tasks were challenging for me."
                </p>
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Working Professional</p>
                    <p className="text-sm text-gray-600">Learning Disability Assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">13+</div>
                <p className="text-orange-100">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-orange-100">Lives Transformed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-orange-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <p className="text-orange-100">Convenient Locations</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of individuals and families who have found healing, growth, and renewed hope through our
              compassionate, evidence-based approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Your Journey via WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Training & Internship</h2>
            <p className="text-xl text-gray-600">
              Learn. Practice. Grow — with real-world skills and grounded mentorship
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Train with Ankur?</h3>
              <p className="text-gray-600 mb-8">
                We believe professional learning should be meaningful, applicable, and supervised with intention. Our
                programs are designed for psychology students, early-career professionals, and educators.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Psychological Assessment Training</h4>
                    <p className="text-gray-600 text-sm">
                      Learn to conduct and interpret assessments for IQ, LD, ADHD, Autism, and personality. Includes
                      hands-on practice and report writing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Therapy Skills Workshops</h4>
                    <p className="text-gray-600 text-sm">
                      Focused modules on REBT, Play Therapy, case conceptualization, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Internships (Clinical & Applied)</h4>
                    <p className="text-gray-600 text-sm">
                      Get real-time exposure to therapy, assessments, documentation, and supervision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Supervision Circles</h4>
                    <p className="text-gray-600 text-sm">
                      Monthly group or one-on-one sessions for reflection, case discussion, and professional growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>
              <p className="text-gray-600 mb-6">
                Fill the registration form or connect with us directly to explore current openings.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={() => window.open("https://forms.gle/4r7VrAxo3bfxAL7D6", "_blank")}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                >
                  <BookOpen className="h-6 w-6 mr-3" />
                  Fill Registration Form
                </Button>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or contact us directly:</p>
                  <div className="flex space-x-2">
                    <Button onClick={handleWhatsAppClick} className="flex-1 bg-orange-600 hover:bg-orange-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={handleCallClick}
                      variant="outline"
                      className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to listen. Reach out to begin your journey.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">98693-78751</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">Available for appointments and consultations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Mumbai</p>
                      <p className="text-gray-600 text-sm">
                        Dr. Popat's Polyclinic, 2nd Floor
                        <br />
                        534 Bombay Mutual Terrace, Sandhurst Bridge
                        <br />
                        Opera House, Mumbai – 400007
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Thane</p>
                      <p className="text-gray-600 text-sm">
                        Spectrum Clinic, Vineeta Apartments
                        <br />
                        Gokhale Rd, Near Malhar Cinema
                        <br />
                        Prashant Nagar, Naupada, Thane West – 400602
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <p className="text-gray-600 mb-6">Choose your preferred method to get in touch:</p>

              <div className="space-y-4">
                <Button onClick={handleWhatsAppClick} className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Start WhatsApp Conversation
                </Button>

                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 text-lg py-6 bg-transparent"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Call: 98693-78751
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    Ready to start your healing journey? We're here to support you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sprout className="h-8 w-8 text-orange-300" />
                <div>
                  <span className="text-2xl font-bold">Ankur</span>
                  <p className="text-orange-200 text-sm">Mental Health Services</p>
                </div>
              </div>
              <p className="text-orange-100">
                Nurturing growth and healing with compassionate, evidence-based psychological services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <a href="#about" className="hover:text-orange-300 transition-colors">
                    About Mrudula
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-300 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#training" className="hover:text-orange-300 transition-colors">
                    Training & Internship
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Methods</h4>
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: 98693-78751
                </Button>
                <br />
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 98693-78751
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2024 Ankur Mental Health Services. All rights reserved.</p>
            <p className="text-sm mt-2">Founded by Mrudula Joshi - Licensed Clinical Psychologist</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
