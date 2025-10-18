"use client"

import { Phone, MessageCircle, Users, Brain, Heart, Shield, Award, BookOpen, MapPin, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaWhatsapp } from 'react-icons/fa'

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-cormorant">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/ankur_white.jpeg"
                alt="Ankur Mental Health Services Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="text-3xl font-semibold tracking-wide font-cormorant text-[#764b36]"
                style={{
                  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)',
                }}>Ankur</span>
                <p className="text-xm text-[#9B4922] font-medium font-cormorant leading-none">Heal. Nurture. Grow.</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-[#643618] hover:text-[#9B4922] transition-colors font-cormorant text-lg">
                About
              </a>
              <a href="#services" className="text-[#643618] hover:text-[#9B4922] transition-colors font-cormorant text-lg">
                Services
              </a>
              <a href="#conditions" className="text-[#643618] hover:text-[#9B4922] transition-colors font-cormorant text-lg">
                Conditions
              </a>
              <a href="#contact" className="text-[#643618] hover:text-[#9B4922] transition-colors font-cormorant text-lg">
                Contact
              </a>
            </nav>

            <div className="flex space-x-2">
              <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
              <FaWhatsapp className="w-6 h-6" />
            </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent font-cormorant"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
            <div>
              <div className="flex justify-center mb-8">
                <img src="/images/ankur_logo_3-removebg-preview.png" alt="Ankur Logo" className="h-40 w-40 object-contain" />
                {/* <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 text-xl px-5 py-2 font-cormorant font-semibold tracking-wide">
                  Heal. Nurture. Grow.
                </Badge> */}
              </div>
              {/* New tagline / intro */}
              <h1 className="text-4xl lg:text-6xl font-bold text-[#764b36] mb-6 font-cormorant">
                Hope, rooted in science
              </h1>
              <p className="text-l text-[#9B4922] mb-6 font-glacial">
                Ankur means a new beginning — a symbol of hope, healing, and growth. At
                <span className="font-semibold"> Ankur Mental Health Services</span>, we
                blend evidence-based care with compassion to nurture minds and transform
                lives.
              </p>

        {/* <h1 className="text-4xl lg:text-6xl font-bold text-[#764b36] mb-6 font-cormorant">
          Mental Health Care as Human as it is Professional
        </h1>
        <p className="text-l text-[#9B4922] mb-6 font-glacial">
          At Ankur, we believe that mental health care must be grounded in empathy,
          guided by evidence, and attuned to the diverse experiences that shape our
          emotional lives.
        </p> */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700 font-cormorant">13+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700 font-cormorant">Evidence-Based Care</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                  </svg>
                  Book Consultation
                </Button>
                <Button
                  onClick={handleCallClick}
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent font-cormorant"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 9869378751
                </Button>
              </div>
            </div>
            <div className="relative">
            <img
              src="/images/cover_photo.jpg"
              alt="Cozy Therapeutic Space - Ankur Mental Health Services"
              className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl"
            />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-600 font-cormorant">Multidisciplinary Team</span>
                </div>
                <p className="text-sm text-gray-600 font-cormorant">Comprehensive Care</p>
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
                <span className="font-cormorant">Mumbai & Thane Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-cormorant">Flexible Scheduling</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={handleWhatsAppClick}
                variant="secondary"
                size="sm"
                className="bg-white text-[#25D366] hover:bg-gray-100 font-cormorant"
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                Quick WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent font-cormorant"
              >
                <Phone className="h-4 w-4 mr-2" />
                For Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - OLIVE GREEN ACCENT */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#764b36] mb-4 font-cormorant">
              About Ankur Mental Health Services
            </h2>
            <p className="text-l text-[#9B4922] max-w-4xl mx-auto font-glacial">
              We exist for one purpose: to support individuals, families, and communities in navigating life's emotional
              landscapes with clarity, compassion, and courage.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-4xl font-bold text-[#764b36] mb-6 font-cormorant">Our Story</h3>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-l text-[#9B4922] mb-4 leading-relaxed font-glacial">
                    The word "Ankur" means sprout — a symbol of new beginnings, quiet resilience, and the potential for
                    growth even in unlikely soil. This metaphor captures what we offer at Ankur: the space and support
                    to heal at your own pace, in your own way, with professional guidance you can trust.
                  </p>
                  <p className="text-l text-[#9B4922] leading-relaxed font-glacial">
                    Ankur was born from years of working with children, adolescents, families, and adults navigating
                    emotional difficulties, school pressures, trauma, life transitions, grief, parenting fatigue, and
                    mental illness. Over time, it became clear that people don't just need answers — they need
                    connection, clarity, containment, and a space where they are truly heard.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/ankur white 1.jpeg"
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
                <h3 className="text-3xl font-bold text-[#764b36] font-cormorant">
                  Found by Mrudula Joshi
                </h3>
                <h4 className="text-xl font-bold text-[#764b36] mb-2 font-cormorant">
                  Clinical Psychologist | Psychotherapist | Trainer | Suicide Prevention Expert
                </h4>
                <p className="text-sm text-[#9B4922] font-medium mb-4 font-glacial">
                  Over 13 years of experience in therapy, assessment, training, and suicide prevention
                </p>
                <p className="text-l text-[#9B4922] leading-relaxed font-glacial">
                  Ankur brings together a multidisciplinary team of skilled professionals — including therapists,
                  psychiatrists, special educators, and mental health trainers — all committed to offering accessible,
                  ethical, and culturally sensitive care.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values - OLIVE GREEN ACCENT */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center font-cormorant">Our Values</h3>
            <div className="space-y-6">
              {/* Top row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700 font-cormorant">Safety First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#9B4922] font-cormorant">
                      A therapeutic relationship is sacred. We protect client confidentiality and emotional safety at
                      all times.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl" style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}>
                  <CardHeader>
                    <Heart className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                    <CardTitle style={{ color: "#4e6137" }} className="font-cormorant">
                      Depth Over Quick Fixes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-cormorant">
                      We avoid symptom-hunting and focus instead on sustainable psychological well-being.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <Brain className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700 font-cormorant">Rooted & Evolving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#9B4922] font-cormorant">
                      We stay informed by research, while remaining sensitive to the evolving needs of individuals and
                      communities.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom row - 2 cards centered */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl" style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}>
                  <CardHeader>
                    <Award className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                    <CardTitle style={{ color: "#4e6137" }} className="font-cormorant">
                      Empowerment through Insight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-cormorant">
                      Whether you're a parent, professional, or young adult, we believe that insight and clarity lead to
                      agency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
                  <CardHeader>
                    <Users className="h-8 w-8 text-orange-600 mb-2" />
                    <CardTitle className="text-orange-700 font-cormorant">Mental Health for All</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#9B4922] font-cormorant">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#764b36] mb-4 font-cormorant">Our Services</h2>
            <p className="text-xl text-[#9B4922] font-cormorant">Comprehensive. Personalised. Rooted in Care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
              <CardHeader>
                <Heart className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 font-cormorant">Individual Therapy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#9B4922] mb-4 font-cormorant text-l">
                  For children, adolescents, adults, and older adults, tailored to your unique emotional and
                  psychological needs.
                </p>
                <ul className="text-sm text-[#9B4922] space-y-1 mb-4 font-cormorant">
                  <li>• Anxiety, low mood, and stress</li>
                  <li>• Trauma and grief</li>
                  <li>• Low self-worth and self-doubt</li>
                  <li>• Academic, career, and relationship struggles</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 flex-1 font-cormorant"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent font-cormorant"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Child & Adolescent Support */}
            <Card
              className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <Users className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }} className="font-cormorant">
                  Child & Adolescent Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-cormorant text-l">
                  We work closely with children, teens, and their families using Play Therapy and age-appropriate
                  approaches.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 font-cormorant">
                  <li>• Emotional regulation and behaviour management</li>
                  <li>• School difficulties and attention issues</li>
                  <li>• Anxiety, sleep problems, or aggression</li>
                  <li>• Parent–child relationship concerns</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1 font-cormorant"
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
                    className="flex-1 bg-transparent font-cormorant"
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
            <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
              <CardHeader>
                <Brain className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 font-cormorant">Psychological Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#9B4922] mb-4 font-cormorant text-l">
                  Detailed, standardized assessments offering insights into cognitive, emotional, and behavioural
                  functioning.
                </p>
                <ul className="text-sm text-[#9B4922] space-y-1 mb-4 font-cormorant">
                  <li>• IQ & Cognitive Profiling</li>
                  <li>• Learning Disabilities (LD)</li>
                  <li>• ADHD & Autism Spectrum</li>
                  <li>• Personality Functioning</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 flex-1 font-cormorant"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent font-cormorant"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Family & Marital Therapy */}
            <Card
              className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <Heart className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }} className="font-cormorant">
                  Family & Marital Therapy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-cormorant text-l">
                  We help families and couples navigate difficult dynamics with structure and empathy.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 font-cormorant">
                  <li>• Parent–child or sibling conflicts</li>
                  <li>• Marital stress and communication breakdown</li>
                  <li>• Joint parenting of neurodivergent children</li>
                  <li>• Post-separation co-parenting support</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1 font-cormorant"
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
                    className="flex-1 bg-transparent font-cormorant"
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
            <Card className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl">
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-700 font-cormorant">Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#9B4922] mb-4 font-cormorant text-l">
                  Healing in community. Safe, therapist-led groups for shared healing, insight, and growth.
                </p>
                <ul className="text-sm text-[#9B4922] space-y-1 mb-4 font-cormorant">
                  <li>• Anxiety and depression support</li>
                  <li>• Grief and loss processing</li>
                  <li>• New mothers and postpartum adjustment</li>
                  <li>• Parents of neurodivergent children</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700 flex-1 font-cormorant"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    size="sm"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 flex-1 bg-transparent font-cormorant"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Training & Supervision - OLIVE GREEN ACCENT */}
            <Card
              className="border-orange-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl"
              style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }}
            >
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2" style={{ color: "#4e6137" }} />
                <CardTitle style={{ color: "#4e6137" }} className="font-cormorant">
                  Training & Supervision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 font-cormorant text-l">
                  We are committed to developing ethical and skilled mental health professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 font-cormorant">
                  <li>• Internships for psychology students</li>
                  <li>• Clinical supervision for early-career professionals</li>
                  <li>• Workshops for schools and corporates</li>
                  <li>• Mental health and suicide prevention training</li>
                </ul>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="sm"
                    className="flex-1 font-cormorant"
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
                    className="flex-1 bg-transparent font-cormorant"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#764b36] mb-4 font-cormorant">Conditions We Support</h2>
            <p className="text-xl text-[#9B4922] font-cormorant">Carefully assessed. Thoughtfully supported.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Children & Adolescents */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#764b36] mb-6 font-cormorant">For Children & Adolescents</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">Neurodevelopmental Disorders</h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
                    <li>• Learning Disability (LD)</li>
                    <li>• Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
                    <li>• Autism Spectrum-related indicators</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">
                    Emotional & Behavioural Challenges
                  </h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
                    <li>• Anxiety and fearfulness</li>
                    <li>• Academic stress and performance anxiety</li>
                    <li>• Aggression, irritability, or sudden withdrawal</li>
                    <li>• Bullying (as a target or aggressor)</li>
                    <li>• Sleep disturbances</li>
                    <li>• Screen overuse and digital dependence</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">Adjustment & Family Stress</h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
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
              <h3 className="text-2xl font-bold text-[#764b36] mb-6 font-cormorant">For Adults</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">Mood & Emotional Health</h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
                    <li>• Depression and low mood</li>
                    <li>• Generalized Anxiety and worry</li>
                    <li>• Social Anxiety</li>
                    <li>• Obsessive-Compulsive Disorder (OCD)</li>
                    <li>• Bipolar Disorder</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">Women's Mental Health</h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
                    <li>• Premenstrual mood changes</li>
                    <li>• Postpartum emotional challenges</li>
                    <li>• Fertility-related distress</li>
                    <li>• Menopause and midlife emotional adjustment</li>
                    <li>• Caregiver stress and role fatigue</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 font-cormorant text-l">
                    Life Transitions & Relationships
                  </h4>
                  <ul className="text-[#9B4922] text-m space-y-1 font-cormorant">
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
            <h3 className="text-2xl font-bold mb-6 text-center font-cormorant">Why Mental Health Matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 font-cormorant">1 in 8</div>
                <p className="text-orange-100 text-sm font-cormorant">
                  People globally live with a mental health condition (WHO)
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 font-cormorant">200M+</div>
                <p className="text-orange-100 text-sm font-cormorant">
                  People in India experience mental health concerns
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 font-cormorant">1.5L+</div>
                <p className="text-orange-100 text-sm font-cormorant">
                  Annual suicide deaths in India - many preventable with early support
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 font-cormorant">7-10%</div>
                <p className="text-orange-100 text-sm font-cormorant">
                  School-going children show signs of emotional difficulties
                </p>
              </div>
            </div>
            <p className="text-center mt-6 text-orange-100 font-cormorant">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#764b36] mb-4 font-cormorant">Let's Begin Together</h2>
            <p className="text-xl text-[#9B4922] font-cormorant">
              Whether you or your child are facing confusion, emotional stress, or long-term challenges — we're here to
              help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cormorant">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" style={{ color: "#4e6137" }} />
                  <div>
                    <p className="font-semibold font-cormorant">Call or WhatsApp</p>
                    <p className="text-gray-600 font-cormorant">9869378751</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" style={{ color: "#4e6137" }} />
                  <div>
                    <p className="font-semibold font-cormorant">Email</p>
                    <p className="text-gray-600 font-cormorant">[Insert Email]</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-cormorant">Visit Us</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 mt-1" style={{ color: "#4e6137" }} />
                    <div>
                      <p className="font-semibold font-cormorant">Mumbai</p>
                      <p className="text-gray-600 text-sm font-cormorant">
                        Ankur Mental Health Clinic, 2nd Floor, 534 Bombay Mutual Terrace, Sandhurst Bridge, Opera House,
                        Mumbai – 400007
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 mt-1" style={{ color: "#4e6137" }} />
                    <div>
                      <p className="font-semibold font-cormorant">Thane</p>
                      <p className="text-gray-600 text-sm font-cormorant">
                        Spectrum Clinic, Vineeta Apartments, Gokhale Rd, Near Malhar Cinema, Prashant Nagar, Naupada,
                        Thane West – 400602
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#f3f5f1", borderColor: "#4e6137" }} className="p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cormorant">Send us a Message</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-cormorant">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 font-cormorant"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-cormorant">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 font-cormorant"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-cormorant">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 font-cormorant"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-cormorant">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 font-cormorant"
                    style={{
                      borderColor: "#4e6137",
                      focusRingColor: "#4e6137",
                    }}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full text-lg py-3 font-cormorant"
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
                <p className="text-gray-600 mb-4 font-cormorant">Or reach out directly:</p>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="flex-1 font-cormorant"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#128C7E")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#25D366")}
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handleCallClick}
                    variant="outline"
                    className="flex-1 bg-transparent font-cormorant"
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
            <h4 className="font-bold text-red-800 mb-2 font-cormorant">Emergency Support</h4>
            <p className="text-red-700 text-sm mb-3 font-cormorant">
              If you are experiencing thoughts of self-harm or suicide, please do not wait. Visit the nearest hospital
              or mental health facility, ideally accompanied by a trusted family member or friend.
            </p>
            <p className="text-red-700 text-sm font-cormorant">
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
                  src="/images/ankur white 3.jpeg"
                  alt="Ankur Logo"
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <span className="text-2xl font-bold font-cormorant">Ankur</span>
                  <p className="text-orange-200 text-sm font-cormorant">Mental Health Services</p>
                </div>
              </div>
              <p className="text-orange-100 font-cormorant">
                Heal. Nurture. Grow. — Supporting individuals, families, and communities with compassionate,
                evidence-based mental health care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-cormorant">Quick Links</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <a href="#about" className="hover:text-orange-300 transition-colors font-cormorant">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-300 transition-colors font-cormorant">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#conditions" className="hover:text-orange-300 transition-colors font-cormorant">
                    Conditions We Support
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-300 transition-colors font-cormorant">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-cormorant">Contact Information</h4>
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start font-cormorant"
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                  </svg>
                  WhatsApp: 9869378751
                </Button>
                <br />
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start font-cormorant"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9869378751
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
            <p className="font-cormorant">&copy; 2024 Ankur Mental Health Services. All rights reserved.</p>
            <p className="text-sm mt-2 font-cormorant">
              Found by Mrudula Joshi - Clinical Psychologist | Privacy Policy | Cancellation & Appointment Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
