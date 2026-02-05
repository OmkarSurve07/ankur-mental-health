import Link from "next/link"

type BlogCardProps = {
  title: string
  slug: string
  image: string
  excerpt: string
  author: string
  reviewer: string
}

export default function BlogCard({
  title,
  slug,
  image,
  excerpt,
  author,
  reviewer,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#764b36] leading-snug group-hover:text-[#9B4922] transition-colors">
          {title}
        </h2>

        {/* Author & Reviewer */}
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-700">Content Author:</span>{" "}
            {author}
          </p>
          <p>
            <span className="font-medium text-gray-700">Expert Review:</span>{" "}
            {reviewer}
          </p>
        </div>

        {/* Excerpt */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          {excerpt}
        </p>

        <span className="mt-4 inline-block text-sm font-medium text-orange-700">
          Read more →
        </span>
      </div>
    </Link>
  )
}
