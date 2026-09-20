import { useState } from "react";
import { supabase } from "./supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpdatePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        setSuccess(true);
        setMessage("Your password has been updated successfully.");
        setPassword("");
        setConfirmPassword("");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffafd] px-5 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl shadow-purple-50 sm:p-10">
          <div className="text-center">
            <a
              href="/"
              className="text-3xl font-bold tracking-tight text-purple-600"
            >
              Flovoti
            </a>

            <h1 className="mt-8 text-2xl font-bold text-gray-900">
              Set a new password
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Create a new password for your Flovoti account.
            </p>
          </div>

          {!success ? (
            <form
              onSubmit={handleUpdatePassword}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  New password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter new password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Confirm new password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  placeholder="Confirm new password"
                  required
                  minLength={6}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>

              {message && (
                <div className="rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-purple-600 px-6 py-3.5 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </form>
          ) : (
            <div className="mt-8">
              <div className="rounded-2xl bg-green-50 px-5 py-4 text-center text-sm font-medium text-green-700">
                {message}
              </div>

              <a
                href="/"
                className="mt-6 block w-full rounded-full bg-purple-600 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-purple-700"
              >
                Return to Flovoti
              </a>
            </div>
          )}

          {!success && (
            <div className="mt-7 text-center">
              <a
                href="/"
                className="text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                ← Back to Flovoti
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}