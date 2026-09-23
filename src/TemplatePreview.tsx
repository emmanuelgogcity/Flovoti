import { useMemo } from "react";

type Template = {
  id: number;
  name: string;
  category: string;
  price: number;
  featured?: boolean;
  description: string;
  style: string;
};

const templates: Template[] = [
  {
    id: 1,
    name: "Elegant Bloom",
    category: "Wedding",
    price: 5000,
    featured: true,
    description: "A romantic floral invitation with a soft, elegant feel.",
    style: "Floral",
  },
  {
    id: 2,
    name: "Golden Celebration",
    category: "Birthday",
    price: 4000,
    featured: true,
    description: "A stylish birthday design made for memorable celebrations.",
    style: "Luxury",
  },
  {
    id: 5,
    name: "Forever Together",
    category: "Anniversary",
    price: 4500,
    description: "A warm and sophisticated design for celebrating love.",
    style: "Romantic",
  },
  {
    id: 4,
    name: "Little Star",
    category: "Baby Shower",
    price: 3500,
    description: "A playful and gentle invitation for a beautiful new arrival.",
    style: "Cute",
  },
  {
    id: 3,
    name: "Next Chapter",
    category: "Graduation",
    price: 4000,
    featured: true,
    description: "A modern design for celebrating an important achievement.",
    style: "Modern",
  },
  {
    id: 6,
    name: "Grand Evening",
    category: "Party",
    price: 4500,
    description: "A bold invitation for unforgettable parties and events.",
    style: "Elegant",
  },
  {
    id: 7,
    name: "Pure Moments",
    category: "Wedding",
    price: 5500,
    description: "A clean and timeless wedding invitation with beautiful details.",
    style: "Minimal",
  },
  {
    id: 8,
    name: "Modern Milestone",
    category: "Birthday",
    price: 3500,
    description: "A fresh modern invitation for milestone birthdays.",
    style: "Modern",
  },
  {
    id: 9,
    name: "Blessed Gathering",
    category: "Religious",
    price: 4000,
    description: "A graceful invitation for meaningful religious occasions.",
    style: "Classic",
  },
  {
    id: 10,
    name: "Business Connect",
    category: "Corporate",
    price: 6000,
    description: "A professional invitation for conferences and corporate events.",
    style: "Professional",
  },
  {
    id: 11,
    name: "Holiday Spark",
    category: "Holiday",
    price: 3500,
    description: "A festive design for special holiday gatherings.",
    style: "Festive",
  },
  {
    id: 12,
    name: "Simple Joy",
    category: "Other",
    price: 3000,
    description: "A flexible invitation design for any special occasion.",
    style: "Simple",
  },
];

export default function TemplatePreview() {
  const templateId = Number(
    new URLSearchParams(window.location.search).get("template") || "1"
  );

  const template = useMemo(
    () => templates.find((item) => item.id === templateId) || templates[0],
    [templateId]
  );

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-[#fffafd]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-purple-600"
          >
            Flovoti
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/templates"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
            >
              Templates
            </a>

            <a
              href="/dashboard"
              className="hidden rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 sm:block"
            >
              Dashboard
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
  <button
    onClick={() => window.history.back()}
    className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-purple-600"
  >
    <span className="text-xl">←</span>
    Back
  </button>
</div>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <a href="/templates" className="hover:text-purple-600">
            Templates
          </a>
          <span>›</span>
          <span>{template.category}</span>
          <span>›</span>
          <span className="font-medium text-gray-800">{template.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Preview */}
          <section className="rounded-[2rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple-50 via-pink-50 to-white p-6 sm:p-10">
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/80 bg-white/85 p-8 text-center shadow-inner backdrop-blur sm:p-12">
                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-500">
                    {template.category}
                  </p>

                  <h1 className="mt-6 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
                    {template.name}
                  </h1>

                  <div className="mx-auto my-6 h-px w-20 bg-purple-200" />

                  <p className="text-lg italic text-gray-500">
                    You are invited to celebrate a special moment
                  </p>

                  <div className="mx-auto mt-10 max-w-xs space-y-2 text-sm text-gray-500">
                    <p>Saturday, 15 August 2027</p>
                    <p>4:00 PM</p>
                    <p>Beautiful Event Venue</p>
                  </div>

                  <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                    {template.style} design
                  </p>
                </div>
              </div>

              {template.featured && (
                <div className="absolute left-8 top-8 rounded-full bg-white px-4 py-2 text-xs font-bold text-purple-700 shadow-sm">
                  Featured Template
                </div>
              )}
            </div>
          </section>

          {/* Details */}
          <section className="lg:pt-4">
            <div className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              {template.category}
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
              {template.name}
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              {template.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(template.price)}
              </span>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                One-time payment
              </span>
            </div>

            {/* Features */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
              <h3 className="font-bold text-gray-900">
                What's included
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm text-gray-600">
                    Customize the invitation with your event details
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm text-gray-600">
                    Share your finished invitation with a unique link
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm text-gray-600">
                    Collect RSVP responses from your guests
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm text-gray-600">
                    No monthly subscription required
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-3">
            <a
  href={`/customize?template=${template.id}`}
  className="block w-full rounded-full bg-purple-600 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
>
  Customize This Invitation
</a>

            </div>

            <p className="mt-5 text-center text-xs leading-5 text-gray-400">
              You'll be able to review your invitation before making a
              purchase.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}