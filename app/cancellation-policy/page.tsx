// app/cancellation-policy/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-cormorant">
      {/* Header */}

      {/* Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-orange-100">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#764b36] mb-8 text-center">
            Cancellation & Appointment Policy
          </h1>

          <div className="prose prose-lg max-w-none text-[#9B4922] space-y-8 leading-relaxed font-glacial">
            <p className="text-lg text-gray-700 text-center italic">
              At Ankur Mental Health Services, we are committed to offering timely, ethical, and structured mental health care. This policy outlines how appointments are scheduled, rescheduled, or cancelled — ensuring clarity and mutual respect between clients and clinicians.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-2xl font-bold text-[#764b36] mb-4">Appointment Booking Process</h2>
              <ul className="space-y-3 text-[#9B4922] font-cormorant">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  All appointments — whether for therapy, assessments, supervision, or training — are booked per session.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  There are no session packages or bulk bookings. Each session is confirmed individually.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Pre-payment is required to confirm a session. Payment instructions will be shared during the booking process.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Slots are confirmed on a first-come, first-served basis and are held exclusively for you once payment is received.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h2 className="text-2xl font-bold text-[#4e6137] mb-4">Rescheduling a Session</h2>
              <ul className="space-y-3 text-gray-700 font-cormorant">
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  If you wish to reschedule, please inform us at least 24 hours in advance.
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  Sessions can be rescheduled once without penalty, subject to availability.
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  Requests made less than 24 hours before the session may be treated as cancellations and could incur charges or result in loss of that session slot.
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  We will try our best to accommodate your rescheduling needs within the same week, depending on therapist availability.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-2xl font-bold text-[#764b36] mb-4">Cancellations</h2>
              <ul className="space-y-3 text-[#9B4922] font-cormorant">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  You may cancel a session by informing us at least 24 hours prior to the scheduled time.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Timely cancellations (before 24 hours) are eligible for a full refund or adjustment toward a future session.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Late cancellations (less than 24 hours) or no-shows are non-refundable, as the time is reserved and cannot be reassigned at short notice.
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  For psychological assessments, cancellations after the first session or test initiation are not eligible for refund due to prior planning and clinician time.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h2 className="text-2xl font-bold text-[#4e6137] mb-4">Delays and Late Arrivals</h2>
              <ul className="space-y-3 text-gray-700 font-cormorant">
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  If you arrive more than 15 minutes late, the session may be shortened or marked as a no-show, depending on clinical schedule.
                </li>
                <li className="flex items-start">
                  <span className="text-[#4e6137] mr-2">•</span>
                  In exceptional circumstances (e.g., medical or family emergencies), please reach out directly — we aim to balance structure with compassion.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Our Intention</h2>
              <p className="text-lg leading-relaxed text-orange-50">
                This policy helps us serve all clients more efficiently and ethically, while also valuing your investment of time, energy, and resources. It ensures our clinicians can offer consistent, high-quality care without disruption.
              </p>
            </div>

            <div className="mt-12 text-center bg-white border border-orange-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#764b36] mb-6">For Questions or Appointment Queries</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
                <a
                  href="tel:+919869378751"
                  className="flex items-center space-x-3 text-[#9B4922] hover:text-orange-700 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="font-medium font-cormorant">9769378751</span>
                </a>
                <span className="hidden sm:block text-gray-400">|</span>
                <a
                  href="mailto:ankurmentalhealth@gmail.com"
                  className="flex items-center space-x-3 text-[#9B4922] hover:text-orange-700 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="font-medium font-cormorant">ankurmentalhealth@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}