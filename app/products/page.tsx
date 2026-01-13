import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo + Back */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/ankur_white.jpeg"
              alt="Ankur Logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <span className="text-2xl font-semibold text-[#764b36] font-cormorant">
                Ankur
              </span>
              <p className="text-sm text-[#9B4922] font-cormorant">
                ← Back to Home
              </p>
            </div>
          </Link>

          {/* Optional CTA */}
          <Link
            href="/#contact"
            className="text-[#9B4922] hover:text-[#764b36] font-cormorant"
          >
            Need Help?
          </Link>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <section className="bg-[#FFF6EC] min-h-screen py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Page Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-[#643618]">
              Mental Health Resources & Books
            </h1>
            <p className="mt-4 text-[#9B4922] max-w-2xl mx-auto">
              Explore our curated collection of evidence-based resources and books
              to support your mental wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sidebar Filter */}
            <aside className="bg-white rounded-xl p-6 border border-[#F2D6C5] h-fit">
              <h3 className="font-semibold text-[#643618] mb-4">
                Filter by Category
              </h3>

              <div className="space-y-3">
                <button className="w-full bg-[#9B4922] text-white py-2 rounded-md">
                  All Products
                </button>
                <button className="w-full bg-[#FFF1E6] text-[#643618] py-2 rounded-md">
                  Digital Resources
                </button>
                <button className="w-full bg-[#FFF1E6] text-[#643618] py-2 rounded-md">
                  Books
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Product Card */}
              <div className="bg-white rounded-xl border border-[#F2D6C5] overflow-hidden">
                <img
                  src="/images/anxiety-workbook.jpg"
                  alt="Anxiety Workbook"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#643618]">
                    Complete Anxiety Management Workbook
                  </h3>

                  <p className="text-[#9B4922] text-sm mt-2">
                    A comprehensive guide with exercises and strategies to manage anxiety
                  </p>

                  <ul className="text-sm text-[#643618] mt-4 space-y-1 list-disc list-inside">
                    <li>40+ pages</li>
                    <li>Practical exercises</li>
                    <li>Downloadable worksheets</li>
                    <li>PDF format</li>
                  </ul>

                  <div className="mt-6">
                    <span className="text-2xl font-bold text-[#9B4922]">
                      $29.99
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-[#9B4922] hover:bg-[#7A381B] text-white py-3 rounded-lg transition">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Card */}
              <div className="bg-white rounded-xl border border-[#F2D6C5] overflow-hidden">
                <img
                  src="/images/depression-journal.jpg"
                  alt="Depression Journal"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#643618]">
                    Depression Recovery Journal
                  </h3>

                  <p className="text-[#9B4922] text-sm mt-2">
                    Guided journaling prompts and reflection exercises for emotional healing
                  </p>

                  <ul className="text-sm text-[#643618] mt-4 space-y-1 list-disc list-inside">
                    <li>52-week program</li>
                    <li>Daily prompts</li>
                    <li>Reflection exercises</li>
                    <li>PDF + printable</li>
                  </ul>

                  <div className="mt-6">
                    <span className="text-2xl font-bold text-[#9B4922]">
                      $19.99
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-[#9B4922] hover:bg-[#7A381B] text-white py-3 rounded-lg transition">
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white mt-20 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-cormorant text-lg">
            © 2024 Ankur Mental Health Services
          </p>

          <p className="text-sm mt-2 font-cormorant text-orange-200">
            Heal. Nurture. Grow.
          </p>

          <div className="mt-4 space-x-6">
            <Link
              href="/privacy-policy"
              className="text-orange-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cancellation-policy"
              className="text-orange-200 hover:text-white"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
