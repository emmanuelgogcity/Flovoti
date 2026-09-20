import { useMemo, useState } from "react";

export default function CustomizeInvitation() {
    const templateId = Number(
        new URLSearchParams(window.location.search).get("template") || "1"
      );
    
      const templates = [
        {
          id: 1,
          name: "Elegant Bloom",
          category: "Wedding",
          style: "Floral",
        },
        {
          id: 2,
          name: "Golden Celebration",
          category: "Birthday",
          style: "Luxury",
        },
        {
          id: 3,
          name: "Forever Together",
          category: "Anniversary",
          style: "Romantic",
        },
        {
          id: 4,
          name: "Little Star",
          category: "Baby Shower",
          style: "Cute",
        },
        {
          id: 5,
          name: "Next Chapter",
          category: "Graduation",
          style: "Modern",
        },
        {
          id: 6,
          name: "Grand Evening",
          category: "Party",
          style: "Elegant",
        },
        {
          id: 7,
          name: "Pure Moments",
          category: "Wedding",
          style: "Minimal",
        },
        {
          id: 8,
          name: "Modern Milestone",
          category: "Birthday",
          style: "Modern",
        },
        {
          id: 9,
          name: "Blessed Gathering",
          category: "Religious",
          style: "Classic",
        },
        {
          id: 10,
          name: "Business Connect",
          category: "Corporate",
          style: "Professional",
        },
        {
          id: 11,
          name: "Holiday Spark",
          category: "Holiday",
          style: "Festive",
        },
        {
          id: 12,
          name: "Simple Joy",
          category: "Other",
          style: "Simple",
        },
      ];
    
      const template = useMemo(
        () =>
          templates.find((item) => item.id === templateId) ||
          templates[0],
        [templateId]
      );
  const [eventTitle, setEventTitle] = useState("You're Invited");
  const [hostName, setHostName] = useState("Chris & Family");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [venue, setVenue] = useState("Beautiful Event Venue");
  const [address, setAddress] = useState("Lagos, Nigeria");
  const [message, setMessage] = useState(
    "We would love for you to join us and celebrate this special moment."
  );
  const [rsvpContact, setRsvpContact] = useState("");

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

          <a
            href="/templates"
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
          >
            ← Templates
          </a>
        </div>
      </header>

      {/* Page heading */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="text-sm font-semibold text-purple-600">
  {template.category} • {template.style}
</p>

<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
  Customize {template.name}
</h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Add your event details and see your invitation update instantly.
          </p>
        </div>
      </section>

      {/* Editor */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Form */}
          <section className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Event details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Fill in the information that should appear on your invitation.
            </p>

            <div className="mt-7 space-y-5">
              {/* Event title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Event title
                </label>

                <input
                  type="text"
                  value={eventTitle}
                  onChange={(event) => setEventTitle(event.target.value)}
                  placeholder="e.g. Our Wedding"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {/* Host */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Host name(s)
                </label>

                <input
                  type="text"
                  value={hostName}
                  onChange={(event) => setHostName(event.target.value)}
                  placeholder="e.g. John & Mary"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {/* Date + Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Event date
                  </label>

                  <input
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Event time
                  </label>

                  <input
                    type="time"
                    value={eventTime}
                    onChange={(event) => setEventTime(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                  />
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Venue
                </label>

                <input
                  type="text"
                  value={venue}
                  onChange={(event) => setVenue(event.target.value)}
                  placeholder="e.g. The Grand Hall"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Address
                </label>

                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="e.g. 12 Victoria Island, Lagos"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Invitation message
                </label>

                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  placeholder="Write a short message for your guests..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {/* RSVP */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  RSVP contact
                </label>

                <input
                  type="text"
                  value={rsvpContact}
                  onChange={(event) => setRsvpContact(event.target.value)}
                  placeholder="Phone number or email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
              >
                Continue to Review
              </button>
            </div>
          </section>

          {/* Live preview */}
          <section className="lg:sticky lg:top-6 lg:self-start">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Live Preview
                </h2>

                <p className="text-sm text-gray-500">
                  Your invitation updates as you type.
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                Live
              </span>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-purple-50 via-pink-50 to-white p-6 sm:p-10">
                <div className="flex h-full items-center justify-center rounded-2xl border border-white/80 bg-white/85 p-7 text-center shadow-inner backdrop-blur sm:p-10">
                  <div className="w-full max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-500">
  {template.name}
</p>

                    <h3 className="mt-5 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                      {eventTitle || "Your Event"}
                    </h3>

                    <div className="mx-auto my-5 h-px w-16 bg-purple-200" />

                    <p className="text-lg font-semibold text-gray-800">
                      {hostName || "Your Name"}
                    </p>

                    <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-gray-500">
                      {message || "Your invitation message will appear here."}
                    </p>

                    <div className="mx-auto mt-7 max-w-xs space-y-2 text-sm text-gray-600">
                      <p>
                        {eventDate
                          ? new Date(
                              `${eventDate}T00:00:00`
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Your event date"}
                      </p>

                      <p>
                        {eventTime
                          ? new Date(
                              `1970-01-01T${eventTime}`
                            ).toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "2-digit",
                            })
                          : "Your event time"}
                      </p>

                      <p className="font-semibold text-gray-800">
                        {venue || "Your venue"}
                      </p>

                      <p>{address || "Your event address"}</p>
                    </div>

                    {rsvpContact && (
                      <div className="mt-7 rounded-xl bg-purple-50 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                          RSVP
                        </p>

                        <p className="mt-1 text-sm font-medium text-gray-700">
                          {rsvpContact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}