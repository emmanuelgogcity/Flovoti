import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function Dashboard() {
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
      const checkUser = async () => {
        const { data } = await supabase.auth.getUser();
  
        if (!data.user) {
          window.location.href = "/";
          return;
        }
  
        setCheckingAuth(false);
      };
  
      checkUser();
    }, []);
  
    if (checkingAuth) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#fffafd]">
          <p className="text-sm font-medium text-gray-500">
            Loading your dashboard...
          </p>
        </div>
      );
    }
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
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

          <button
            onClick={handleSignOut}
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Welcome */}
        <section>
          <p className="text-sm font-semibold text-purple-600">
            Welcome to Flovoti
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Create beautiful invitations, manage your events, and keep track
            of your guests all in one place.
          </p>
        </section>

        {/* Quick actions */}
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <button className="rounded-2xl bg-purple-600 p-6 text-left text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700">
            <div className="text-2xl">＋</div>
            <h2 className="mt-4 text-lg font-bold">Create Invitation</h2>
            <p className="mt-2 text-sm text-purple-100">
              Start creating a new invitation.
            </p>
          </button>

          <button className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:border-purple-100 hover:shadow-md">
            <div className="text-2xl">💌</div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              My Invitations
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              View and manage your invitations.
            </p>
          </button>

          <button className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:border-purple-100 hover:shadow-md">
            <div className="text-2xl">🛍️</div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              Orders
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              View your purchases and payment history.
            </p>
          </button>

          <button className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:border-purple-100 hover:shadow-md">
            <div className="text-2xl">⚙️</div>
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              Account Settings
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Manage your account details.
            </p>
          </button>
        </section>

        {/* Invitations */}
        <section className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                My Invitations
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your recently created invitations will appear here.
              </p>
            </div>

            <button className="rounded-full bg-purple-50 px-5 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-100">
              Browse Templates
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-gray-200 px-6 py-12 text-center">
            <div className="text-4xl">💌</div>

            <h3 className="mt-4 font-semibold text-gray-900">
              No invitations yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Choose a beautiful template and create your first Flovoti
              invitation.
            </p>

            <button className="mt-6 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
              Create Your First Invitation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}