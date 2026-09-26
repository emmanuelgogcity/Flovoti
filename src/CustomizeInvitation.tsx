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
          id: 5,
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
          id: 3,
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
      const templateTheme = useMemo(() => {
        switch (template.style) {
          case "Luxury":
            return {
              background: "bg-gradient-to-br from-amber-50 via-white to-yellow-50",
              accent: "text-amber-600",
              border: "border-amber-200",
              soft: "bg-amber-50",
            };
      
          case "Romantic":
            return {
              background: "bg-gradient-to-br from-pink-50 via-white to-rose-50",
              accent: "text-rose-500",
              border: "border-rose-200",
              soft: "bg-rose-50",
            };
      
          case "Cute":
            return {
              background: "bg-gradient-to-br from-pink-50 via-white to-purple-50",
              accent: "text-pink-500",
              border: "border-pink-200",
              soft: "bg-pink-50",
            };
      
          case "Modern":
            return {
              background: "bg-gradient-to-br from-gray-50 via-white to-purple-50",
              accent: "text-purple-600",
              border: "border-purple-200",
              soft: "bg-purple-50",
            };
      
          case "Professional":
            return {
              background: "bg-gradient-to-br from-slate-50 via-white to-blue-50",
              accent: "text-blue-600",
              border: "border-blue-200",
              soft: "bg-blue-50",
            };
      
          case "Festive":
            return {
              background: "bg-gradient-to-br from-purple-50 via-white to-pink-50",
              accent: "text-purple-600",
              border: "border-purple-200",
              soft: "bg-purple-50",
            };
      
            default:
              return {
                background: "bg-gradient-to-br from-purple-100 via-white to-rose-50",
                accent: "text-purple-700",
                border: "border-purple-300",
                soft: "bg-purple-100",
              };
        }
      }, [template.style]);
      const defaultContent = useMemo(() => {
        switch (template.category) {
          case "Wedding":
            return {
              eventTitle: "We're Getting Married",
              hostName: "Chris & Family",
              message:
                "We would love for you to join us as we celebrate our special day.",
            };
      
          case "Birthday":
            return {
              eventTitle: "You're Invited to My Birthday",
              hostName: "Chris",
              message:
                "Come celebrate another wonderful year with me and make unforgettable memories together.",
            };
      
          case "Graduation":
            return {
              eventTitle: "Join Us for the Graduation Celebration",
              hostName: "Chris & Family",
              message:
                "Please join us as we celebrate this special achievement and the beginning of a new chapter.",
            };
      
          case "Baby Shower":
            return {
              eventTitle: "A Little One Is on the Way",
              hostName: "Chris & Family",
              message:
                "Join us as we celebrate the upcoming arrival of our little one.",
            };
      
          case "Anniversary":
            return {
              eventTitle: "Celebrating Our Love",
              hostName: "Chris & Family",
              message:
                "Come celebrate another beautiful year of love, memories, and togetherness with us.",
            };
      
          case "Party":
            return {
              eventTitle: "You're Invited to the Party",
              hostName: "Chris",
              message:
                "Get ready for a fun-filled celebration with great people, music, and unforgettable moments.",
            };
      
          case "Religious":
            return {
              eventTitle: "You Are Invited",
              hostName: "Chris & Family",
              message:
                "Join us as we gather together in faith, gratitude, and celebration.",
            };
      
          case "Corporate":
            return {
              eventTitle: "You're Invited",
              hostName: "Flovoti",
              message:
                "We are pleased to invite you to this special professional gathering.",
            };
      
          case "Holiday":
            return {
              eventTitle: "Season's Greetings",
              hostName: "Chris & Family",
              message:
                "Join us as we celebrate the season with joy, warmth, and wonderful memories.",
            };
      
          default:
            return {
              eventTitle: "You're Invited",
              hostName: "Chris & Family",
              message:
                "We would love for you to join us and celebrate this special moment.",
            };
        }
      }, [template.category]);
      
      const [eventTitle, setEventTitle] = useState(defaultContent.eventTitle);
      const [hostName, setHostName] = useState(defaultContent.hostName);
      const [eventDate, setEventDate] = useState("");
      const [eventTime, setEventTime] = useState("");
      const [venue, setVenue] = useState("Beautiful Event Venue");
      const [address, setAddress] = useState("Lagos, Nigeria");
      const [message, setMessage] = useState(defaultContent.message);
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
                  placeholder={`e.g. ${
                    template.category === "Wedding"
                      ? "Our Wedding"
                      : template.category === "Birthday"
                        ? "My Birthday Celebration"
                        : template.category === "Graduation"
                          ? "My Graduation"
                          : template.category === "Baby Shower"
                            ? "Baby Shower Celebration"
                            : template.category === "Anniversary"
                              ? "Our Anniversary"
                              : template.category === "Party"
                                ? "Birthday Party"
                                : template.category === "Religious"
                                  ? "Thanksgiving Service"
                                  : template.category === "Corporate"
                                    ? "Annual Business Meeting"
                                    : template.category === "Holiday"
                                      ? "Christmas Celebration"
                                      : "Special Celebration"
                  }`}
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
            <div className={`relative min-h-[620px] rounded-[1.5rem] ${templateTheme.background} p-6 sm:p-10`}>
            
                <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden rounded-[3rem] border border-amber-500/60 bg-white p-8 text-center shadow-inner sm:p-12">
                {template.name === "Elegant Bloom" && (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 600 760"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="roseGold" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff1c7" />
        <stop offset="35%" stopColor="#d6a84f" />
        <stop offset="70%" stopColor="#9a6a20" />
        <stop offset="100%" stopColor="#5f3b0c" />
      </radialGradient>

      <radialGradient id="roseShadow" cx="45%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#f7d98b" />
        <stop offset="45%" stopColor="#b7832f" />
        <stop offset="100%" stopColor="#6d4512" />
      </radialGradient>

      <linearGradient id="leafGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ead28c" />
        <stop offset="45%" stopColor="#a87927" />
        <stop offset="100%" stopColor="#56360d" />
      </linearGradient>

      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0"
          dy="5"
          stdDeviation="5"
          floodColor="#6b4515"
          floodOpacity="0.25"
        />
      </filter>
    </defs>

    {/* Left large rose */}
    <g filter="url(#softShadow)">
      <circle cx="82" cy="470" r="43" fill="url(#roseGold)" />
      <ellipse cx="82" cy="445" rx="30" ry="17" fill="url(#roseShadow)" />
      <ellipse cx="59" cy="465" rx="18" ry="31" fill="url(#roseShadow)" />
      <ellipse cx="105" cy="465" rx="18" ry="31" fill="url(#roseShadow)" />
      <ellipse cx="82" cy="492" rx="30" ry="17" fill="url(#roseShadow)" />
      <ellipse cx="82" cy="470" rx="18" ry="23" fill="url(#roseGold)" />
      <circle cx="82" cy="470" r="9" fill="#6b4312" />
    </g>

    {/* Left middle rose */}
    <g filter="url(#softShadow)">
      <circle cx="55" cy="555" r="32" fill="url(#roseGold)" />
      <ellipse cx="55" cy="536" rx="23" ry="13" fill="url(#roseShadow)" />
      <ellipse cx="38" cy="553" rx="13" ry="22" fill="url(#roseShadow)" />
      <ellipse cx="72" cy="553" rx="13" ry="22" fill="url(#roseShadow)" />
      <ellipse cx="55" cy="574" rx="23" ry="13" fill="url(#roseShadow)" />
      <circle cx="55" cy="555" r="7" fill="#68400f" />
    </g>

    {/* Right large rose */}
    <g filter="url(#softShadow)">
      <circle cx="518" cy="470" r="43" fill="url(#roseGold)" />
      <ellipse cx="518" cy="445" rx="30" ry="17" fill="url(#roseShadow)" />
      <ellipse cx="495" cy="465" rx="18" ry="31" fill="url(#roseShadow)" />
      <ellipse cx="541" cy="465" rx="18" ry="31" fill="url(#roseShadow)" />
      <ellipse cx="518" cy="492" rx="30" ry="17" fill="url(#roseShadow)" />
      <ellipse cx="518" cy="470" rx="18" ry="23" fill="url(#roseGold)" />
      <circle cx="518" cy="470" r="9" fill="#6b4312" />
    </g>

    {/* Right middle rose */}
    <g filter="url(#softShadow)">
      <circle cx="545" cy="555" r="32" fill="url(#roseGold)" />
      <ellipse cx="545" cy="536" rx="23" ry="13" fill="url(#roseShadow)" />
      <ellipse cx="528" cy="553" rx="13" ry="22" fill="url(#roseShadow)" />
      <ellipse cx="562" cy="553" rx="13" ry="22" fill="url(#roseShadow)" />
      <ellipse cx="545" cy="574" rx="23" ry="13" fill="url(#roseShadow)" />
      <circle cx="545" cy="555" r="7" fill="#68400f" />
    </g>

    {/* Bottom center roses */}
    <g filter="url(#softShadow)">
      <circle cx="180" cy="700" r="38" fill="url(#roseGold)" />
      <circle cx="300" cy="720" r="46" fill="url(#roseGold)" />
      <circle cx="420" cy="700" r="38" fill="url(#roseGold)" />
    </g>

    {/* Metallic leaves */}
    <g fill="url(#leafGold)" opacity="0.95">
      <ellipse cx="125" cy="535" rx="13" ry="34" transform="rotate(-48 125 535)" />
      <ellipse cx="105" cy="585" rx="12" ry="31" transform="rotate(-65 105 585)" />
      <ellipse cx="475" cy="535" rx="13" ry="34" transform="rotate(48 475 535)" />
      <ellipse cx="495" cy="585" rx="12" ry="31" transform="rotate(65 495 585)" />
      <ellipse cx="230" cy="690" rx="13" ry="35" transform="rotate(-55 230 690)" />
      <ellipse cx="370" cy="690" rx="13" ry="35" transform="rotate(55 370 690)" />
    </g>

    {/* Fine botanical line work */}
    <g
      fill="none"
      stroke="#b38a3b"
      strokeWidth="1.5"
      opacity="0.35"
    >
      <path d="M55 650 C105 600 115 545 135 500" />
      <path d="M545 650 C495 600 485 545 465 500" />
      <path d="M130 650 C175 610 190 570 195 525" />
      <path d="M470 650 C425 610 410 570 405 525" />
    </g>
  </svg>
)}
                <div className="pointer-events-none absolute inset-x-8 top-8 bottom-8 rounded-t-[10rem] rounded-b-[2rem] border-2 border-amber-600/50" />

<div className="pointer-events-none absolute inset-x-11 top-11 bottom-11 rounded-t-[9rem] rounded-b-[1.5rem] border border-amber-300/70" />
                  <div className="w-full max-w-md">
                  <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${templateTheme.accent}`}>
  {template.name}
</p>

                    <h3 className="mt-5 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                      {eventTitle || "Your Event"}
                    </h3>

                    <div className={`mx-auto my-5 h-px w-16 ${templateTheme.border}`} />

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

                    {rsvpContact.trim() !== "" && (
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