export default function ContactCTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-[#0F172A]">
          You’ve taken one step towards supercharging your business
        </h3>
        <p className="mt-2 text-gray-600">Connect — Learn — Grow</p>

        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input placeholder="Name" className="py-3 px-4 rounded-lg border" />
          <input placeholder="Email" className="py-3 px-4 rounded-lg border" />
          <input placeholder="Contact Number" className="py-3 px-4 rounded-lg border" />
          <input placeholder="Type of Business" className="py-3 px-4 rounded-lg border" />
          <textarea
            placeholder="What services are you seeking?"
            className="col-span-2 py-3 px-4 rounded-lg border h-32"
          />
          <button className="col-span-2 py-3 rounded-lg bg-[#10B981] text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
