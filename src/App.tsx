import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./Auth";
import ResetPassword from "./ResetPassword";
import Dashboard from "./Dashboard";
import AdminDashboard from "./AdminDashboard";
import Templates from "./Templates";
import TemplatePreview from "./TemplatePreview";
import CustomizeInvitation from "./CustomizeInvitation";
import { supabase } from "./supabase";

const categories = [
  { name: "Weddings", icon: "💍" },
  { name: "Birthdays", icon: "🎂" },
  { name: "Graduation", icon: "🎓" },
  { name: "Baby Shower", icon: "👶" },
  { name: "Anniversary", icon: "❤️" },
  { name: "Parties", icon: "🎉" },
];

const templates = [
  {
    id: 1,
    title: "Elegant Wedding",
    category: "Wedding",
    price: "$8",
    bg: "bg-[#f8edf5]",
  },
  {
    id: 2,
    title: "Modern Birthday",
    category: "Birthday",
    price: "$5",
    bg: "bg-[#f2edff]",
  },
  {
    id: 3,
    title: "Classic Graduation",
    category: "Graduation",
    price: "$5",
    bg: "bg-[#f8f4e9]",
  },
  {
    id: 4,
    title: "Sweet Baby Shower",
    category: "Baby Shower",
    price: "$6",
    bg: "bg-[#edf8f6]",
  },
  {
    id: 5,
    title: "Forever Together",
    category: "Anniversary",
    price: "$7",
    bg: "bg-[#fff0f3]",
  },
  {
    id: 6,
    title: "Party Night",
    category: "Party",
    price: "$5",
    bg: "bg-[#f0f1ff]",
  },
];

const faqs = [
  {
    question: "What is Flovoti?",
    answer:
      "Flovoti is a digital invitation platform that lets you choose, customize, purchase and share beautiful invitations online.",
  },
  {
    question: "Do I need a subscription?",
    answer:
      "No. You can purchase individual premium invitations when you need them. Flovoti also offers an optional subscription for customers who want additional benefits and access.",
  },
  {
    question: "Can I customize my invitation?",
    answer:
      "Yes. You will be able to personalize your invitation with your event details, names, dates, locations, messages and other available options.",
  },
  {
    question: "Can my guests RSVP online?",
    answer:
      "Yes. Your published invitation can include online RSVP so you can receive and manage guest responses.",
  },
];

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<any>(null);
const [showUserMenu, setShowUserMenu] = useState(false);
const [showMobileMenu, setShowMobileMenu] = useState(false);

useEffect(() => {
  supabase.auth.getUser().then(({ data }) => {
    setUser(data.user ?? null);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user ?? null);
  });

  return () => subscription.unsubscribe();
}, []);

  if (window.location.pathname === "/reset-password") {
    return <ResetPassword />;
  }
  if (window.location.pathname === "/admin") {
    return <AdminDashboard />;
  }
  if (window.location.pathname === "/dashboard") {
    return <Dashboard />;
  }
  if (window.location.pathname === "/templates") {
    return <Templates />;
  }
  if (window.location.pathname === "/template-preview") {
    return <TemplatePreview />;
  }
  if (window.location.pathname === "/customize") {
    return <CustomizeInvitation />;
  }
  if (showAuth) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    {/* LOGO */}
    <a
      href="/"
      className="text-2xl font-bold tracking-tight text-purple-600"
    >
      Flovoti
    </a>

    {/* DESKTOP NAVIGATION */}
    <nav className="hidden items-center gap-8 md:flex">
      <a
        href="/templates"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        Templates
      </a>

      <a
        href="#how-it-works"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        How It Works
      </a>

      <a
        href="#pricing"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        Pricing
      </a>

      <a
        href="#faq"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        FAQ
      </a>
    </nav>

    {/* RIGHT SIDE */}
    <div className="relative ml-auto flex items-center gap-2">
      {!user ? (
        <>
          <button
            onClick={() => setShowAuth(true)}
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Sign In
          </button>

          <button
            onClick={() => setShowAuth(true)}
            className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700"
          >
            Get Started
          </button>
        </>
      ) : (
        <>
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setShowMobileMenu((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* AVATAR */}
          <button
            onClick={() => setShowUserMenu((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 hover:bg-purple-200"
            aria-label="Open account menu"
          >
            👤
          </button>

          {/* ACCOUNT MENU */}
          {showUserMenu && (
            <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
              <a
                href="/dashboard"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                Dashboard
              </a>

              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  setShowUserMenu(false);
                  window.location.href = "/";
                }}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          )}

          {/* MOBILE NAVIGATION */}
          {showMobileMenu && (
            <div className="absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl md:hidden">
              <a
                href="/templates"
                onClick={() => setShowMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                Templates
              </a>

              <a
                href="#how-it-works"
                onClick={() => setShowMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                How It Works
              </a>

              <a
                href="#pricing"
                onClick={() => setShowMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setShowMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                FAQ
              </a>

              <a
                href="/dashboard"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700"
              >
                Dashboard
              </a>
            </div>
          )}
        </>
      )}
    </div>
  </div>
</header>
      <main>
        {/* HERO */}
        <section className="bg-[#fffafd]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                ✦ Beautiful digital invitations made simple
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Create invitations
                <span className="block text-purple-600">
                  worth remembering.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Create beautiful digital invitations for weddings, birthdays,
                graduations, parties and every special moment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 hover:bg-purple-700">
                  Create an Invitation
                </button>

                <a
                  href="/templates"
                  className="rounded-full border border-gray-200 bg-white px-7 py-3.5 text-center font-semibold text-gray-700 hover:border-purple-200 hover:text-purple-600"
                >
                  Explore Templates
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-500">
                <span>✓ Pay once</span>
                <span>✓ Easy customization</span>
                <span>✓ Online RSVP</span>
                <span>✓ Share anywhere</span>
              </div>
            </div>

            {/* INVITATION PREVIEW */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-[2rem] bg-white p-3 shadow-2xl ring-1 ring-gray-100">
                <div className="rounded-[1.5rem] border border-purple-100 bg-gradient-to-b from-purple-50 to-white px-7 py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-purple-600 shadow-sm">
                    ✦
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                    You are invited
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-semibold text-gray-800">
                    A Special Day
                  </h2>

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-500">
                    Join us as we celebrate a beautiful moment together.
                  </p>

                  <div className="mx-auto my-7 h-px w-16 bg-purple-200" />

                  <p className="font-semibold text-gray-800">
                    Saturday, 24 October
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    4:00 PM · Grand Celebration Hall
                  </p>

                  <button className="mt-7 rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white">
                    View Invitation
                  </button>

                  <p className="mt-6 text-xs text-gray-400">
                    Created with Flovoti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="border-b border-gray-100 bg-white px-5 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-100">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <span className="text-xl text-gray-400">⌕</span>
                  <input
                    type="text"
                    placeholder="Search wedding, birthday, graduation invitations..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                <button className="rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white hover:bg-purple-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-white px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                Browse by occasion
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Find the perfect invitation
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Start with an occasion and discover designs created for your
                special moment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl">
                    {category.icon}
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    {category.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="bg-[#fffafd] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                  Featured templates
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Designs made for your moments
                </h2>

                <p className="mt-4 max-w-xl text-gray-600">
                  Choose a design, customize it and make it completely yours.
                </p>
              </div>

              <button
  onClick={() => {
    window.location.href = "/templates";
  }}
  className="self-start rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold hover:border-purple-200 hover:text-purple-600"
>
  View All Templates →
</button>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <div
                  key={template.title}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`aspect-[4/3] ${template.bg} p-5`}>
                    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white bg-white/70 p-6 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-500">
                        You're Invited
                      </p>

                      <h3 className="mt-4 font-serif text-3xl font-semibold text-gray-800">
                        {template.title}
                      </h3>

                      <div className="my-4 h-px w-12 bg-purple-200" />

                      <p className="text-xs text-gray-500">
                        Your special moment starts here
                      </p>

                      <p className="mt-4 text-xs font-semibold text-gray-700">
                        Flovoti
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">
                          {template.category}
                        </p>

                        <h3 className="mt-1 font-bold">{template.title}</h3>
                      </div>

                      <p className="font-bold text-purple-600">
                        {template.price}
                      </p>
                    </div>

                    <a
  href={`/template-preview?template=${template.id}`}
  className="mt-4 block w-full rounded-full bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-purple-700"
>
  Preview Template
</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* AI DESIGN CREATOR */}
        <section className="bg-white px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* LEFT SIDE */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                  ✨ AI-powered creation
                </div>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Create your invitation with AI
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                  Tell Flovoti what you have in mind and our AI Design Creator
                  will help turn your idea into a beautiful invitation.
                </p>

                <div className="mt-8 space-y-5">
                  {/* PROMPT */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Describe your invitation
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Example: Create a romantic purple wedding invitation for Sarah & David with an elegant floral style..."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                    />
                  </div>

                  {/* SELECTORS */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Occasion
                      </label>

                      <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-400">
                        <option>Wedding</option>
                        <option>Birthday</option>
                        <option>Graduation</option>
                        <option>Baby Shower</option>
                        <option>Anniversary</option>
                        <option>Party</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Design style
                      </label>

                      <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-400">
                        <option>Elegant</option>
                        <option>Modern</option>
                        <option>Minimal</option>
                        <option>Luxury</option>
                        <option>Floral</option>
                        <option>Creative</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-full bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700 sm:w-auto"
                  >
                    ✨ Generate Design
                  </button>

                  <p className="text-xs leading-5 text-gray-400">
                    AI can help with invitation layout, wording, colors,
                    typography and design ideas.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - AI PREVIEW */}
              <div className="mx-auto w-full max-w-md">
                <div className="rounded-[2rem] bg-gradient-to-br from-purple-100 via-white to-pink-100 p-3 shadow-xl">
                  <div className="rounded-[1.5rem] bg-white p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                        AI Preview
                      </span>

                      <span className="text-xs text-gray-400">
                        Flovoti AI
                      </span>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-b from-purple-50 to-white px-6 py-12 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                        ✦
                      </div>

                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                        You are invited
                      </p>

                      <h3 className="mt-4 font-serif text-3xl font-semibold text-gray-800">
                        Your Special Moment
                      </h3>

                      <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-500">
                        Your AI-created invitation preview will appear here.
                      </p>

                      <div className="mx-auto my-7 h-px w-16 bg-purple-200" />

                      <p className="font-semibold text-gray-800">
                        Your Event Date
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        Your venue · Your special celebration
                      </p>

                      <button
                        type="button"
                        className="mt-7 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white"
                      >
                        Preview Invitation
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3">
                      <span className="text-lg">✨</span>

                      <p className="text-xs leading-5 text-gray-500">
                        Describe your idea and Flovoti AI will help create a
                        personalized invitation design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-white px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Your invitation in four simple steps
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                No complicated process. Just choose, personalize, pay and
                share.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                ["01", "Choose a template", "Find a beautiful design for your occasion."],
                ["02", "Customize", "Add your names, date, time, venue and other details."],
                ["03", "Pay once", "Purchase your invitation with a one-time payment."],
                ["04", "Publish & share", "Publish your invitation and send it to your guests."],
              ].map(([number, title, description]) => (
                <div key={number} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 font-bold text-white shadow-lg shadow-purple-100">
                    {number}
                  </div>

                  <h3 className="mt-5 font-bold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-5 py-8 sm:py-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-12 text-white sm:px-10 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-purple-100">
                  Everything in one place
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  More than just a digital invitation.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-purple-100">
                  Give your guests an easy way to see your event details,
                  respond to your invitation and stay connected to your
                  celebration.
                </p>

                <button className="mt-7 rounded-full bg-white px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50">
                  Create Your Invitation
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["🔗", "Easy Sharing"],
                  ["📱", "Mobile Friendly"],
                  ["✓", "Online RSVP"],
                  ["✨", "Beautiful Designs"],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/20 bg-white/10 p-5"
                  >
                    <div className="text-2xl">{icon}</div>
                    <p className="mt-3 font-semibold">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="bg-white px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                Pricing
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Simple, transparent pricing
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Choose the invitation you love and pay once. No monthly
                subscription required.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-md rounded-[2rem] border border-purple-100 bg-[#fffafd] p-8 shadow-xl shadow-purple-50">
              <p className="text-sm font-semibold text-purple-600">
                One-time invitation purchase
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Pay for what you need
              </h3>

              <div className="mt-6 rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Invitation template</span>
                  <span className="font-bold text-purple-600">
                    One-time
                  </span>
                </div>
              </div>

              <ul className="mt-7 space-y-4 text-sm text-gray-600">
                <li>✓ Beautiful invitation design</li>
                <li>✓ Personal customization</li>
                <li>✓ Publishable invitation</li>
                <li>✓ Shareable invitation link</li>
                <li>✓ Online RSVP</li>
              </ul>

              <button
  onClick={() => {
    window.location.href = "/templates";
  }}
  className="mt-8 w-full rounded-full bg-purple-600 px-6 py-3.5 font-semibold text-white hover:bg-purple-700"
>
  Browse Templates
</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#fffafd] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer font-semibold">
                    {faq.question}
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <a
                href="/"
                className="text-2xl font-bold tracking-tight text-purple-600"
              >
                Flovoti
              </a>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
                Beautiful digital invitations for life's moments worth
                celebrating.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Platform</h3>

<div className="mt-4 space-y-3 text-sm text-gray-500">
  <a href="#templates" className="block hover:text-purple-600">
    Templates
  </a>
  <a
    href="#how-it-works"
    className="block hover:text-purple-600"
  >
    How It Works
  </a>
  <a href="#pricing" className="block hover:text-purple-600">
    Pricing
  </a>
</div>
</div>

<div>
<h3 className="font-semibold">Support</h3>

<div className="mt-4 space-y-3 text-sm text-gray-500">
  <a href="#faq" className="block hover:text-purple-600">
    FAQ
  </a>
  <a href="#" className="block hover:text-purple-600">
    Contact
  </a>
  <a href="#" className="block hover:text-purple-600">
    Privacy
  </a>
</div>
</div>
</div>

<div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
© {new Date().getFullYear()} Flovoti. All rights reserved.
</div>
</div>
</footer>
</div>
);
}

export default App;