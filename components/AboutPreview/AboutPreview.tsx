export default function AboutPreview() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Deep. Disciplined. Creative.
          </h2>
          <p className="mt-3 text-gray-600">
            Through our business growth consulting services, we look deeper,
            filter selectively, and apply creativity to unlock growth.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>We go deeper:</strong>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                <li>Data-driven insights</li>
                <li>Market intelligence</li>
                <li>Customer behaviour mapping</li>
              </ul>
            </li>

            <li>
              <strong>We bring discipline:</strong>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                <li>Strategic frameworks</li>
                <li>Clear KPIs</li>
                <li>Operational rigor</li>
              </ul>
            </li>

            <li>
              <strong>We are dynamic:</strong>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-1">
                <li>Creative experimentation</li>
                <li>Customer-centric thinking</li>
                <li>Iterative optimization</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
