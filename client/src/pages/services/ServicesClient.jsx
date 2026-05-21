import { useLocation } from "react-router-dom";

const serviceContent = {
  "Business Management Solutions": {
    desc: "Streamline your operations with smart tools and strategies..."
  },
  "Market Planning": {
    desc: "Understanding your market is key to growth..."
  },
  "Event Management": {
    desc: "From field days to product launches..."
  },
  "Public Outreach": {
    desc: "We help you connect with your community..."
  },
  "Technology Solutions": {
    desc: "Get the right tech to support your vision..."
  },
  "Designing & Printing": {
    desc: "From logos to brochures..."
  }
};

const services = [
  "Business Management Solutions",
  "Market Planning",
  "Event Management",
  "Public Outreach",
  "Technology Solutions",
  "Designing & Printing"
];

const ServicesClient = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const current = serviceContent[category];

  return (
    <div className="px-6 md:px-12 py-12">

      {/* 🔥 TOP CONTENT (FIRST SS) */}
      {!category && (
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6 mb-12">

          <h2 className="text-3xl font-bold text-green-600">
            Services we Provide
          </h2>

          {/* 🔥 First Paragraph */}
          <p className="leading-relaxed">
            We offer a full spectrum of
            <span className="text-green-600 font-semibold"> digital marketing and business solutions</span>,
            uniquely tailored for the
            <span className="text-green-600 font-semibold"> agricultural and rural sector</span>.
            Whether you're a small agripreneur or a large agri-enterprise, we help you stay
            <span className="text-green-600 font-semibold"> competitive and connected in a digital-first world</span>.
          </p>

          {/* 🔥 Second Paragraph (Highlighted Premium) */}
          <p className="leading-relaxed">
            At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, where innovation meets agriculture.
            We are a dynamic company dedicated to providing
            <span className="text-green-600 font-semibold"> comprehensive digital marketing and business solutions</span>
            tailored specifically for the agriculture input industry.
            Our services are designed to help agribusinesses, entrepreneurs, and community organizations
            <span className="text-green-600 font-semibold"> grow their presence, streamline operations, and connect meaningfully</span> with their audience.
          </p>

          <p className="leading-relaxed">
            We offer a wide range of solutions including
            <span className="text-green-600 font-semibold"> business management systems</span> to enhance efficiency,
            <span className="text-green-600 font-semibold"> strategic market planning</span> to position your brand for success,
            and <span className="text-green-600 font-semibold"> full-scale event management</span> to bring your initiatives to life.
            We specialize in
            <span className="text-green-600 font-semibold"> public outreach campaigns</span> that build trust and visibility,
            and we leverage the latest in technology to deliver
            <span className="text-green-600 font-semibold"> customized software, mobile applications, and digital platforms</span>.
          </p>

          <p className="leading-relaxed">
            Our creative team also provides
            <span className="text-green-600 font-semibold"> professional designing and high-quality printing services</span>
            that give your brand a strong, consistent identity.
            With a deep understanding of agriculture and a passion for innovation,
            <span className="text-green-600 font-semibold"> AgriDigi Tech</span> is committed to helping you thrive in an increasingly digital world.
          </p>

          <p className="font-semibold text-green-600 text-lg">
            Let us be your trusted partner in transforming your ideas into impactful results.
          </p>

        </div>
      )}

      {/* 🔥 CATEGORIES (SECOND SS STYLE) */}
      {!category && (
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <a
              key={index}
              href={`/services?category=${item}`}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="font-semibold text-gray-800">
                🔹 {item}
              </h3>
            </a>
          ))}
        </div>
      )}

    </div>
  );
};

export default ServicesClient;