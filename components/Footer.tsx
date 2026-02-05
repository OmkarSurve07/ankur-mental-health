"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919769378751", "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+919769378751"
  }

  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
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
                  <li>
                    <a href="/privacy-policy" className="hover:text-orange-300 transition-colors font-cormorant">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/cancellation-policy" className="hover:text-orange-300 transition-colors font-cormorant">
                      Cancellation Policy
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
                    WhatsApp: 9769378751
                  </Button>
                  <br />
                  <Button
                    onClick={handleCallClick}
                    variant="ghost"
                    className="text-orange-200 hover:text-orange-300 p-0 h-auto justify-start font-cormorant"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 9769378751
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-orange-800 mt-6 pt-4 text-center text-orange-200">
              <p className="font-cormorant">&copy; 2024 Ankur Mental Health Services. All rights reserved.</p>
              <p className="text-sm mt-2 font-cormorant">
                Founded by Mrudula Joshi - Clinical Psychologist | Privacy Policy | Cancellation & Appointment Policy
              </p>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  )
}
