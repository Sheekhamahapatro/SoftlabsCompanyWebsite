"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function QueryModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-gray-900">
          Ask a Query
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Fill the form and our team will get back to you.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-purple-500 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-purple-500 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-purple-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
}
