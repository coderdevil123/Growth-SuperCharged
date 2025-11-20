export default function TeamPreview() {
  const team = [
    "Rohan Kumar",
    "Gayatri Ramdas",
    "Anubhav Mishra",
    "Ramnaresh Chouhan",
  ];

  return (
    <section id="team" className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0F172A]">Our Team</h2>
        <p className="mt-2 text-gray-600">
          Experienced growth strategists, product experts, and data specialists.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((name, i) => (
          <article key={i} className="card bg-white rounded-xl p-6 shadow-sm">
            <div className="w-full h-40 bg-gray-100 mb-4 rounded flex items-center justify-center text-gray-400">
              Photo
            </div>
            <h4 className="font-semibold text-[#0F172A]">{name}</h4>
            <p className="mt-1 text-sm text-gray-600">Brief bio here.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
