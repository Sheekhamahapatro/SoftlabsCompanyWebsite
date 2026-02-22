import ComplaintRegister from "@/components/ComplaintRegister";

export const metadata = {
  title: "Complaint Register | Softlabs Infotech",
  description: "Register your complaint or query. Our team will address it promptly.",
};

export default function ComplaintRegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-10">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Complaint / Query Register
          </h1>
          <p className="mt-3 text-sm text-gray-600 sm:mt-4 sm:text-base">
            We value your feedback. Register your complaint and our team will get back to you.
          </p>
        </div>

        <ComplaintRegister />
      </div>
    </main>
  );
}
