// app/privacy-policy/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-cormorant">
      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-orange-100">
          <h1 className="text-4xl font-bold text-[#764b36] mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-[#9B4922] space-y-6 leading-relaxed">
            <p>
              At <strong>Ankur Mental Health Services</strong>, we are committed to protecting your privacy and ensuring that your personal information is handled with the utmost care, confidentiality, and respect. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or avail our services.
            </p>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, phone number, email address, and any information you voluntarily provide when contacting us or filling out forms.</li>
              <li><strong>Sensitive Health Information:</strong> Only collected during therapy or assessment with your explicit consent and stored securely under strict confidentiality.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, and time spent on the website (via cookies/analytics).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">2. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and provide mental health services</li>
              <li>Communicate appointment details and follow-ups</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services and website experience</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">3. Confidentiality & Ethical Standards</h2>
            <p>
              All clinical interactions are governed by the ethical guidelines of the Indian Association of Clinical Psychologists (IACP) and Rehabilitation Council of India (RCI). Your personal and therapeutic information is never shared without your written consent, except in cases required by law (e.g., imminent risk of harm to self or others).
            </p>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">4. Data Security</h2>
            <p>
              We use industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. We strive to use commercially acceptable means to protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">5. Third-Party Disclosure</h2>
            <p>
              We do <strong>not</strong> sell, trade, or transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>When required by law</li>
              <li>With your explicit consent</li>
              <li>To trusted service providers bound by confidentiality (e.g., secure cloud storage)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communication</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold text-[#764b36] mt-10">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Phone/WhatsApp:</strong> <a href="tel:+919769378751" className="text-orange-600 hover:underline">97693 78751</a>
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/" className="font-cormorant">
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