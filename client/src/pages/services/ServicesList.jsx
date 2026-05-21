import { useLocation } from "react-router-dom";

const serviceContent = {
  "Business Management Solutions": {
    desc: "Streamline your operations with smart tools..."
  },
  "Market Planning": {
    desc: "Understanding your market is key..."
  },
  "Event Management": {
    desc: "From field days to product launches..."
  },
  "Public Outreach": {
    desc: "We help you connect with your audience..."
  },
  "Technology Solutions": {
    desc: "Get the right tech to support your vision..."
  },
  "Designing & Printing": {
    desc: "From logos to brochures..."
  }
};

const ServicesList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const current = serviceContent[category];

  if (!category || !current) return null;

  return (
    <div className="px-6 md:px-12 py-10">

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-600">
          {category}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-3">
          {current.desc}
        </p>
      </div>

    </div>
  );
};

export default ServicesList;