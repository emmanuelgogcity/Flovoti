import { useMemo, useState } from "react";

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
    id: 3,
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
    id: 5,
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

const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Graduation",
  "Baby Shower",
  "Anniversary",
  "Party",
  "Religious",
  "Corporate",
  "Holiday",
  "Other",
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesCategory =
        selectedCategory === "All" ||
        template.category === selectedCategory;

      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        template.name.toLowerCase().includes(searchText) ||
        template.category.toLowerCase().includes(searchText) ||
        template.style.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

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
              href="/"
              className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 sm:block"
            >
              Home
            </a>

            <a
              href="/dashboard"
              className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Dashboard
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <div className="mx-auto inline-flex items-center rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            Beautiful designs for every occasion
          </div>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find the perfect invitation for your special moment.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Choose a professionally designed template, customize it with your
            details, and create an invitation you're proud to share.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4 shadow-sm focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-50">
              <span className="text-xl text-gray-400">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search wedding, birthday, modern..."
                className="w-full bg-transparent px-4 py-4 text-sm text-gray-900 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Templates */}
      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All"
                ? "All Templates"
                : `${selectedCategory} Templates`}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredTemplates.length} design
              {filteredTemplates.length === 1 ? "" : "s"} available
            </p>
          </div>
        </div>

        {filteredTemplates.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTemplates.map((template) => (
              <article
                key={template.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
              >
                {/* Template preview */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white p-5">
                  {template.featured && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-purple-700 shadow-sm">
                      Featured
                    </div>
                  )}

                  <div className="flex h-full items-center justify-center rounded-2xl border border-white/80 bg-white/80 p-5 text-center shadow-inner backdrop-blur">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                        {template.category}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl font-bold text-gray-900">
                        {template.name}
                      </h3>

                      <div className="mx-auto my-4 h-px w-12 bg-purple-200" />

                      <p className="text-sm italic text-gray-500">
                        Your special moment starts here
                      </p>

                      <p className="mt-6 text-xs font-medium text-gray-400">
                        {template.style} design
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {template.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-purple-600">
                        {template.category}
                      </p>
                    </div>

                    <p className="font-bold text-gray-900">
                      {formatPrice(template.price)}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {template.description}
                  </p>

                  <a
  href={`/template-preview?id=${template.id}`}
  className="mt-5 block w-full rounded-full bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
>
  View Template
</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
            <div className="text-4xl">🔎</div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              No templates found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or choose a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700"
            >
              Show All Templates
            </button>
          </div>
        )}
      </main>
    </div>
  );
}