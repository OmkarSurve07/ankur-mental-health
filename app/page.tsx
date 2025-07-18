"use client"

import { Phone, MessageCircle, Users, Brain, Heart, Shield, Award, BookOpen, MapPin, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AnkurMentalHealth() {
  const whatsappNumber = "919869378751"
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
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/ankur-logo.png"
                alt="Ankur Mental Health Services Logo"
                className="h-12 w-12 object-contain"
              />
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
              <a href="#conditions" className="text-gray-700 hover:text-orange-600 transition-colors">
                Conditions
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
                <img src="/images/ankur-logo.png" alt="Ankur Logo" className="h-8 w-8 object-contain" />
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Heal. Nurture. Grow.</Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Mental Health Care as Human as it is Professional
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                At Ankur, we believe that mental health care must be grounded in empathy, guided by evidence, and
                attuned to the diverse experiences that shape our emotional lives.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">13+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">Evidence-Based Care</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  onClick={handleCallClick}
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 9869378751
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Mental Health Support - Ankur Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-600">Multidisciplinary Team</span>
                </div>
                <p className="text-sm text-gray-600">Comprehensive Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Mumbai & Thane Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Flexible Scheduling</span>
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
                Emergency Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - OLIVE GREEN ACCENT */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Ankur Mental Health Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We exist for one purpose: to support individuals, families, and communities in navigating life's emotional
              landscapes with clarity, compassion, and courage.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The word "Ankur" means sprout — a symbol of new beginnings, quiet resilience, and the potential for
                    growth even in unlikely soil. This metaphor captures what we offer at Ankur: the space and support
                    to heal at your own pace, in your own way, with professional guidance you can trust.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ankur was born from years of working with children, adolescents, families, and adults navigating
                    emotional difficulties, school pressures, trauma, life transitions, grief, parenting fatigue, and
                    mental illness. Over time, it became clear that people don't just need answers — they need
                    connection, clarity, containment, and a space where they are truly heard.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/ankur-logo.png"
                    alt="Ankur - Growth and Healing"
                    className="h-48 w-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section - OLIVE GREEN ACCENT */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded by Mrudula Joshi</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Clinical Psychologist | Psychotherapist | Trainer | Suicide Prevention Expert
                </h4>
                <p className="text-green-700 font-medium mb-4">
                  Over 13 years of experience in therapy, assessment, training, and suicide prevention
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ankur brings together a multidisciplinary team of skilled professionals — including therapists,
                  psychiatrists, special educators, and mental health trainers — all committed to offering accessible,
                  ethical, and culturally sensitive care.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values - OLIVE GREEN ACCENT */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
            <div className="space-y-6">
              {/* Top row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700">Safety First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A therapeutic relationship is sacred. We protect client confidentiality and emotional safety at
                      all times.
                    </p>
                  </CardContent>
                </Card>

                <Card style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}>
                  <CardHeader>
                    <Heart className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                    <CardTitle style={{ color: "#4e6137" }}>Depth Over Quick Fixes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We avoid symptom-hunting and focus instead on sustainable psychological well-being.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <Brain className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700">Rooted & Evolving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We stay informed by research, while remaining sensitive to the evolving needs of individuals and
                      communities.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom row - 2 cards centered */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}>
                  <CardHeader>
                    <Award className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                    <CardTitle style={{ color: "#4e6137" }}>Empowerment through Insight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Whether you're a parent, professional, or young adult, we believe that insight and clarity lead to
                      agency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <Users className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700">Mental Health for All</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We are committed to mental health awareness, inclusion, and reducing stigma — one conversation at
                      a time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f8faf7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive. Personalised. Rooted in Care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700">Individual Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For children, adolescents, adults, and older adults, tailored to your unique emotional and
                  psychological needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Anxiety, low mood, and stress</li>
                  <li>• Trauma and grief</li>
                  <li>• Low self-worth and self-doubt</li>
                  <li>• Academic, career, and relationship struggles</li>
                </ul>
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

            {/* Child & Adolescent Support */}
            <Card
              className="hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <Users className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }}>Child & Adolescent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We work closely with children, teens, and their families using Play Therapy and age-appropriate
                  approaches.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Emotional regulation and behaviour management</li>
                  <li>• School difficulties and attention issues</li>
                  <li>• Anxiety, sleep problems, or aggression</li>
                  <li>• Parent–child relationship concerns</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1"
                    style={{
                      backgroundColor: "#4e6137",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d4d2a")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#4e6137")}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    style={{
                      borderColor: "#4e6137",
                      color: "#4e6137",
                    }}
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Psychological Assessments - OLIVE GREEN ACCENT */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700">Psychological Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Detailed, standardized assessments offering insights into cognitive, emotional, and behavioural
                  functioning.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• IQ & Cognitive Profiling</li>
                  <li>• Learning Disabilities (LD)</li>
                  <li>• ADHD & Autism Spectrum</li>
                  <li>• Personality Functioning</li>
                </ul>
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

            {/* Family & Marital Therapy */}
            <Card
              className="hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <Heart className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }}>Family & Marital Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We help families and couples navigate difficult dynamics with structure and empathy.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Parent–child or sibling conflicts</li>
                  <li>• Marital stress and communication breakdown</li>
                  <li>• Joint parenting of neurodivergent children</li>
                  <li>• Post-separation co-parenting support</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1"
                    style={{
                      backgroundColor: "#4e6137",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d4d2a")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#4e6137")}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    style={{
                      borderColor: "#4e6137",
                      color: "#4e6137",
                    }}
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Groups */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700">Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Healing in community. Safe, therapist-led groups for shared healing, insight, and growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Anxiety and depression support</li>
                  <li>• Grief and loss processing</li>
                  <li>• New mothers and postpartum adjustment</li>
                  <li>• Parents of neurodivergent children</li>
                </ul>
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

            {/* Training & Supervision - OLIVE GREEN ACCENT */}
            <Card
              className="hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }}>Training & Supervision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We are committed to developing ethical and skilled mental health professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Internships for psychology students</li>
                  <li>• Clinical supervision for early-career professionals</li>
                  <li>• Workshops for schools and corporates</li>
                  <li>• Mental health and suicide prevention training</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1"
                    style={{
                      backgroundColor: "#4e6137",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d4d2a")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#4e6137")}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    style={{
                      borderColor: "#4e6137",
                      color: "#4e6137",
                    }}
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

      {/* Conditions We Support */}
      <section id="conditions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Conditions We Support</h2>
            <p className="text-xl text-gray-600">Carefully assessed. Thoughtfully supported.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Children & Adolescents */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Children & Adolescents</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Neurodevelopmental Disorders</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Learning Disability (LD)</li>
                    <li>• Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
                    <li>• Autism Spectrum-related indicators</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Emotional & Behavioural Challenges</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Anxiety and fearfulness</li>
                    <li>• Academic stress and performance anxiety</li>
                    <li>• Aggression, irritability, or sudden withdrawal</li>
                    <li>• Bullying (as a target or aggressor)</li>
                    <li>• Sleep disturbances</li>
                    <li>• Screen overuse and digital dependence</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Adjustment & Family Stress</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Parent–child relationship difficulties</li>
                    <li>• Separation, divorce, or changes in caregiving</li>
                    <li>• Relocation, school changes, and social transition</li>
                    <li>• Grief and loss</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Adults */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Adults</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Mood & Emotional Health</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Depression and low mood</li>
                    <li>• Generalized Anxiety and worry</li>
                    <li>• Social Anxiety</li>
                    <li>• Obsessive-Compulsive Disorder (OCD)</li>
                    <li>• Bipolar Disorder</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Women's Mental Health</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Premenstrual mood changes</li>
                    <li>• Postpartum emotional challenges</li>
                    <li>• Fertility-related distress</li>
                    <li>• Menopause and midlife emotional adjustment</li>
                    <li>• Caregiver stress and role fatigue</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Life Transitions & Relationships</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Marriage, parenthood, retirement, relocation</li>
                    <li>• Relationship difficulties and family communication</li>
                    <li>• Self-worth, identity struggles</li>
                    <li>• Grief, loss, and ambiguous loss</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Mental Health Matters */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Mental Health Matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1 in 8</div>
                <p className="text-orange-100 text-sm">People globally live with a mental health condition (WHO)</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200M+</div>
                <p className="text-orange-100 text-sm">People in India experience mental health concerns</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1.5L+</div>
                <p className="text-orange-100 text-sm">
                  Annual suicide deaths in India - many preventable with early support
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">7-10%</div>
                <p className="text-orange-100 text-sm">School-going children show signs of emotional difficulties</p>
              </div>
            </div>
            <p className="text-center mt-6 text-orange-100">
              At Ankur, we are deeply committed to breaking this cycle — by offering timely, non-judgmental, and
              informed care that helps people heal, not hide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - OLIVE GREEN ACCENT */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f8faf7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Begin Together</h2>
            <p className="text-xl text-gray-600">
              Whether you or your child are facing confusion, emotional stress, or long-term challenges — we're here to
              help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" style={{ color: "#4e6137" }} />
                  <div>
                    <p className="font-semibold">Call or WhatsApp</p>
                    <p className="text-gray-600">9869378751</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" style={{ color: "#4e6137" }} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">[Insert Email]</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 mt-1" style={{ color: "#4e6137" }} />
                    <div>
                      <p className="font-semibold">Opera House, Mumbai</p>
                      <p className="text-gray-600 text-sm">
                        Dr. Popat's Polyclinic, 2nd Floor, 534 Bombay Mutual Terrace, Sandhurst Bridge, Opera House,
                        Mumbai – 400007
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 mt-1" style={{ color: "#4e6137" }} />
                    <div>
                      <p className="font-semibold">Thane West, Maharashtra</p>
                      <p className="text-gray-600 text-sm">
                        Spectrum Clinic, Vineeta Apartments, Gokhale Rd, Near Malhar Cinema, Prashant Nagar, Naupada,
                        Thane West – 400602
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundColor: "#f3f5f1" }}
              className="p-8 rounded-2xl border"
              style={{ borderColor: "#4e6137" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full text-lg py-3"
                  style={{
                    backgroundColor: "#4e6137",
                    color: "white",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d4d2a")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#4e6137")}
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">Or reach out directly:</p>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="flex-1"
                    style={{
                      backgroundColor: "#4e6137",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d4d2a")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#4e6137")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    variant="outline"
                    className="flex-1 bg-transparent"
                    style={{
                      borderColor: "#4e6137",
                      color: "#4e6137",
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-red-800 mb-2">Emergency Support</h4>
            <p className="text-red-700 text-sm mb-3">
              If you are experiencing thoughts of self-harm or suicide, please do not wait. Visit the nearest hospital
              or mental health facility, ideally accompanied by a trusted family member or friend.
            </p>
            <p className="text-red-700 text-sm">
              You can also reach out to <strong>Tele MANAS – India's National Mental Health Helpline at 14416</strong>{" "}
              for free, confidential, 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/ankur-logo.png"
                  alt="Ankur Logo"
                  className="h-8 w-8 object-contain filter brightness-0 invert"
                />
                <div>
                  <span className="text-2xl font-bold">Ankur</span>
                  <p className="text-orange-200 text-sm">Mental Health Services</p>
                </div>
              </div>
              <p className="text-orange-100">
                Heal. Nurture. Grow. — Supporting individuals, families, and communities with compassionate,
                evidence-based mental health care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <a href="#about" className="hover:text-orange-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-300 transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#conditions" className="hover:text-orange-300 transition-colors">
                    Conditions We Support
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-300 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: 9869378751
                </Button>
                <br />
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9869378751
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2024 Ankur Mental Health Services. All rights reserved.</p>
            <p className="text-sm mt-2">
              Founded by Mrudula Joshi - Clinical Psychologist | Privacy Policy | Cancellation & Appointment Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
