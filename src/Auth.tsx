import { useState } from "react";
import { supabase } from "./supabase";

type AuthMode = "signin" | "signup";
type AuthView = "auth" | "forgot";
export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [view, setView] = useState<AuthView>("auth");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (mode === "signup") {
        if (!name.trim()) {
          setMessage("Please enter your name.");
          setLoading(false);
          return;
        }
        
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name.trim(),
            },
          },
        });

        if (error) {
          setMessage(error.message);
        } else {
          setMessage(
            "Account created successfully. Check your email if verification is required."
          );
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setMessage(error.message);
        } else {
          window.location.href = "/";
        }
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleForgotPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);
  
    try {
      if (!email.trim()) {
        setMessage("Please enter your email address.");
        setLoading(false);
        return;
      }
  
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );
  
      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Password reset link sent. Please check your email."
        );
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (view === "forgot") {
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
                Reset your password
              </h1>
  
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Enter your email address and we'll send you a link to create a new password.
              </p>
            </div>
  
            <form onSubmit={handleForgotPassword} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Email address
                </label>
  
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
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
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
  
            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={() => {
                  setView("auth");
                  setMode("signin");
                  setMessage("");
                }}
                className="text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                ← Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
              {mode === "signin" ? "Welcome back" : "Create your account"}
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              {mode === "signin"
                ? "Sign in to manage your invitations."
                : "Create your Flovoti account and start creating."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {mode === "signup" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Full name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Email address
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                minLength={6}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-50"
              />
            </div>
            {mode === "signin" && (
  <div className="-mt-2 text-right">
    <button
      type="button"
      onClick={() => {
        setView("forgot");
        setMessage("");
      }}
      className="text-sm font-semibold text-purple-600 hover:text-purple-700"
    >
      Forgot password?
    </button>
  </div>
)}
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
              {loading
                ? "Please wait..."
                : mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
            </button>
          </form>

          <div className="mt-7 text-center text-sm text-gray-500">
            {mode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signup");
                    setMessage("");
                  }}
                  className="font-semibold text-purple-600 hover:text-purple-700"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signin");
                    setMessage("");
                  }}
                  className="font-semibold text-purple-600 hover:text-purple-700"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}