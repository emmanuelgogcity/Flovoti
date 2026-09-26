import { useEffect, useState } from "react";
import { supabase } from "./supabase";

type Section =
  | "overview"
  | "templates"
  | "customers"
  | "payments"
  | "orders"
  | "invitations"
  | "analytics"
  | "settings";

  type Template = {
    id: string;
    title: string;
    category: string;
    description: string | null;
    price: number;
    is_premium: boolean;
    status: string;
    image_url: string | null;
  };



const menuItems: { id: Section; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "templates", label: "Templates", icon: "🎨" },
  { id: "customers", label: "Customers", icon: "👥" },
  { id: "payments", label: "Payments", icon: "💳" },
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "invitations", label: "Invitations", icon: "🎟️" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [showTemplateForm, setShowTemplateForm] = useState(false);

  const [newTemplate, setNewTemplate] = useState({
    title: "",
    category: "Wedding",
    price: "",
  });

  const [adminName, setAdminName] = useState("Flovoti Admin");

  useEffect(() => {
    const loadAdminProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/";
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", user.id)
        .single();

      if (!profile || profile.role !== "admin") {
        window.location.href = "/";
        return;
      }

      if (profile.full_name) {
        setAdminName(profile.full_name);
      }
    };

    loadAdminProfile();
  }, []);

  const addTemplate = () => {
    if (!newTemplate.title.trim() || !newTemplate.price.trim()) {
      return;
    }

    const template: Template = {
      id: Date.now(),
      title: newTemplate.title.trim(),
      category: newTemplate.category,
      price: newTemplate.price.trim(),
      status: "Draft",
    };

    setTemplates((current) => [...current, template]);

    setNewTemplate({
      title: "",
      category: "Wedding",
      price: "",
    });

    setShowTemplateForm(false);
  };

  const deleteTemplate = (id: number) => {
    setTemplates((current) =>
      current.filter((template) => template.id !== id)
    );
  };

  const toggleTemplateStatus = (id: number) => {
    setTemplates((current) =>
      current.map((template) =>
        template.id === id
          ? {
              ...template,
              status:
                template.status === "Active" ? "Draft" : "Active",
            }
          : template
      )
    );
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Dashboard
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Welcome, {adminName}
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your Flovoti platform from one place.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Total Customers",
            value: "0",
            icon: "👥",
          },
          {
            label: "Total Invitations",
            value: "0",
            icon: "🎟️",
          },
          {
            label: "Templates",
            value: templates.length,
            icon: "🎨",
          },
          {
            label: "Revenue",
            value: "$0",
            icon: "💰",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-xl">
                {stat.icon}
              </div>

              <span className="text-xs font-semibold text-green-600">
                Live
              </span>
            </div>

            <p className="mt-6 text-sm text-gray-500">{stat.label}</p>

            <p className="mt-1 text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Quick Actions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Common administration tasks.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => {
                setActiveSection("templates");
                setShowTemplateForm(true);
              }}
              className="rounded-2xl border border-gray-100 p-4 text-left transition hover:border-purple-200 hover:bg-purple-50"
            >
              <span className="text-xl">🎨</span>
              <p className="mt-3 font-semibold">Add Template</p>
              <p className="mt-1 text-xs text-gray-500">
                Create a new invitation design.
              </p>
            </button>

            <button
              onClick={() => setActiveSection("customers")}
              className="rounded-2xl border border-gray-100 p-4 text-left transition hover:border-purple-200 hover:bg-purple-50"
            >
              <span className="text-xl">👥</span>
              <p className="mt-3 font-semibold">Customers</p>
              <p className="mt-1 text-xs text-gray-500">
                View customer accounts.
              </p>
            </button>

            <button
              onClick={() => setActiveSection("payments")}
              className="rounded-2xl border border-gray-100 p-4 text-left transition hover:border-purple-200 hover:bg-purple-50"
            >
              <span className="text-xl">💳</span>
              <p className="mt-3 font-semibold">Payments</p>
              <p className="mt-1 text-xs text-gray-500">
                Review payment activity.
              </p>
            </button>

            <button
              onClick={() => setActiveSection("analytics")}
              className="rounded-2xl border border-gray-100 p-4 text-left transition hover:border-purple-200 hover:bg-purple-50"
            >
              <span className="text-xl">📈</span>
              <p className="mt-3 font-semibold">Analytics</p>
              <p className="mt-1 text-xs text-gray-500">
                View platform statistics.
              </p>
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">
            Platform Status
          </h2>

          <div className="mt-6 space-y-4">
            {[
              ["Authentication", "Connected"],
              ["Database", "Connected"],
              ["Customer Accounts", "Ready"],
              ["Template Management", "Ready"],
              ["Payments", "Not connected"],
            ].map(([name, status]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-gray-700">
                  {name}
                </span>

                <span
                  className={`text-xs font-bold ${
                    status === "Not connected"
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Management
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Templates
          </h1>

          <p className="mt-2 text-gray-500">
            Add and manage invitation designs.
          </p>
        </div>

        <button
          onClick={() => setShowTemplateForm(true)}
          className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
        >
          + Add Template
        </button>
      </div>

      {showTemplateForm && (
        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Add New Template
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Create a template from the admin dashboard.
              </p>
            </div>

            <button
              onClick={() => setShowTemplateForm(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Template name
              </label>

              <input
                value={newTemplate.title}
                onChange={(event) =>
                  setNewTemplate({
                    ...newTemplate,
                    title: event.target.value,
                  })
                }
                placeholder="Example: Royal Wedding"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Category
              </label>

              <select
                value={newTemplate.category}
                onChange={(event) =>
                  setNewTemplate({
                    ...newTemplate,
                    category: event.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-purple-400"
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Graduation</option>
                <option>Baby Shower</option>
                <option>Anniversary</option>
                <option>Party</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Price
              </label>

              <input
                value={newTemplate.price}
                onChange={(event) =>
                  setNewTemplate({
                    ...newTemplate,
                    price: event.target.value,
                  })
                }
                placeholder="$5"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <button
              onClick={addTemplate}
              className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
            >
              Create Template
            </button>

            <button
              onClick={() => setShowTemplateForm(false)}
              className="rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Template
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {templates.map((template) => (
                <tr key={template.id}>
                  <td className="px-6 py-5">
                    <p className="font-semibold text-gray-900">
                      {template.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      ID #{template.id}
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    {template.category}
                  </td>

                  <td className="px-6 py-5 font-semibold text-purple-600">
                    {template.price}
                  </td>

                  <td className="px-6 py-5">
                    <button
                      onClick={() => toggleTemplateStatus(template.id)}
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        template.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {template.status}
                    </button>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => deleteTemplate(template.id)}
                      className="text-sm font-semibold text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <EmptyManagementSection
      icon="👥"
      title="Customers"
      description="Manage registered Flovoti customers and their accounts."
      message="Customer records will appear here once we connect this section to the profiles database."
    />
  );

  const renderPayments = () => (
    <EmptyManagementSection
      icon="💳"
      title="Payments"
      description="Monitor customer payments and transactions."
      message="Payment records will appear here after we connect a payment provider and payment database."
    />
  );

  const renderOrders = () => (
    <EmptyManagementSection
      icon="📦"
      title="Orders"
      description="View and manage invitation purchases."
      message="Order records will appear here once the purchasing system is connected."
    />
  );

  const renderInvitations = () => (
    <EmptyManagementSection
      icon="🎟️"
      title="Invitations"
      description="Manage invitations created by customers."
      message="Customer-created invitations will appear here once the invitation database is connected."
    />
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Insights
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Analytics
        </h1>

        <p className="mt-2 text-gray-500">
          Track how your Flovoti platform is performing.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Visitors", "0"],
          ["Templates Viewed", "0"],
          ["Invitations Created", "0"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="mt-3 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-bold">Analytics coming next</h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          We will connect this area to real database information so you can
          see customer growth, invitation creation, template performance,
          payments and revenue.
        </p>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Platform
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your Flovoti administration settings.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "Platform Information",
            description:
              "Manage the basic information and branding of Flovoti.",
          },
          {
            title: "Payment Settings",
            description:
              "Payment providers and transaction settings will be managed here.",
          },
          {
            title: "Email Settings",
            description:
              "Configure customer notifications and transactional emails.",
          },
          {
            title: "Security",
            description:
              "Manage administrator access and security controls.",
          },
        ].map((setting) => (
          <div
            key={setting.title}
            className="flex items-center justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div>
              <h2 className="font-bold text-gray-900">
                {setting.title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {setting.description}
              </p>
              </div>

            <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-purple-200 hover:text-purple-600">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "templates":
        return renderTemplates();
      case "customers":
        return renderCustomers();
      case "payments":
        return renderPayments();
      case "orders":
        return renderOrders();
      case "invitations":
        return renderInvitations();
      case "analytics":
        return renderAnalytics();
      case "settings":
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-[#fffafd] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="flex h-16 items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-xl p-2 text-xl hover:bg-gray-100 lg:hidden"
            >
              ☰
            </button>

            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-purple-600"
            >
              Flovoti
            </a>

            <span className="hidden rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700 sm:inline-block">
              ADMIN
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-purple-200 hover:text-purple-600 sm:block"
            >
              View Site
            </a>

            <button
              onClick={signOut}
              className="rounded-full px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-16 left-0 z-40 w-64 border-r border-gray-100 bg-white transition-transform lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeSection === item.id
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Signed in as
              </p>

              <p className="mt-2 truncate text-sm font-bold text-gray-800">
                {adminName}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-5 py-8 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-7xl">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

function EmptyManagementSection({
  icon,
  title,
  description,
  message,
}: {
  icon: string;
  title: string;
  description: string;
  message: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Management
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-2 text-gray-500">{description}</p>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
          {icon}
        </div>

        <h2 className="mt-5 text-xl font-bold text-gray-900">
          {title} management
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
          {message}
        </p>
      </div>
    </div>
  );
}