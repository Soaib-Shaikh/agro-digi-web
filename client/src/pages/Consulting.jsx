const Consulting = () => {
  const services = [
    "Commercial Agriculture & Horticulture",
    "Livestock & Hi-Tech Farming",
    "Integrated Cold Chain Projects",
    "Supply Chain Management & Logistics Parks",
    "Seeds, Pesticides & Fertilizers Industry",
    "Food Processing Units",
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO / HEADER */}
      <div className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          Agri Business Consulting
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Your Agri-Brand’s Next Evolution
        </p>
      </div>

      {/* 🔥 CONTENT SECTION */}
      <div className="py-12 px-6 md:px-12 max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6">

        <p>
          Agriculture is evolving beyond traditional tools—technology is now driving farming to greater heights. 
          <span className="text-green-600 font-semibold"> Agri-business planning</span> is the backbone of any successful venture, and at 
          <span className="text-green-600 font-semibold"> AgriDigi Tech</span>, we specialize in turning your vision into a structured, profitable reality.
        </p>

        <p>
          Our approach includes deep understanding of 
          <span className="text-green-600 font-semibold"> crop cycles, regional demand, supply chains,</span> and customer behavior. 
          We collaborate with startups, entrepreneurs, and established businesses to build scalable and sustainable strategies.
        </p>

        <p>
          From identifying products to 
          <span className="text-green-600 font-semibold"> risk analysis, financial forecasting, and operational planning</span>, 
          everything is driven by data and real-world insights.
        </p>

        <p>
          We ensure every plan follows 
          <span className="text-green-600 font-semibold"> market research, regulatory compliance, and sustainability principles</span>. 
          Whether it's fertilizers, seeds, or agri-tech — we guide you at every step.
        </p>

        <p>
          We empower businesses with 
          <span className="text-green-600 font-semibold"> strategic consulting services</span> that drive growth, innovation, and long-term success.
        </p>

      </div>

      {/* 🔥 SERVICES SECTION (SS jevu UI) */}
      <div className="bg-gray-50 py-16 px-6 md:px-12">

        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-10 text-center">
          Agri Business Consulting Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:-translate-y-1"
            >
              <h3 className="text-gray-800 font-semibold">
                🌿 {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Consulting;