import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";

const content = {
    seed: {
        title: "Seed",
        desc: (
            <>
                Seeds are the foundation of every successful farm. They contain the{" "}
                <span className="text-green-600 font-semibold">
                    genetic potential of crops
                </span>{" "}
                and determine key factors like{" "}
                <span className="text-green-600 font-semibold">
                    yield, resistance to pests, climate adaptability, and maturity duration
                </span>.

                <br />

                Unlock the power of genetics with our{" "}
                <span className="text-green-600 font-semibold">
                    high-quality seeds
                </span>{" "}
                — we supply{" "}
                <span className="text-green-600 font-semibold">
                    certified, hybrid, and open-pollinated seeds
                </span>{" "}
                that are tested for{" "}
                <span className="text-green-600 font-semibold">
                    high germination and performance
                </span>.

                <br />

                Using high-quality seeds ensures{" "}
                <span className="text-green-600 font-semibold">
                    higher yield, uniform growth, and disease resistance
                </span>, reducing the need for excess fertilizers or pesticides.

                <br />

                Our seed varieties are selected for their{" "}
                <span className="text-green-600 font-semibold">
                    climate resilience
                </span>, supporting{" "}
                <span className="text-green-600 font-semibold">
                    sustainable and profitable farming
                </span> across different regions of India and beyond.

                <br />

                At <span className="text-green-600 font-semibold">Agridigitech</span>, we take pride in offering{" "}
                <span className="text-green-600 font-semibold">
                    comprehensive seed services
                </span>{" "}
                as a trusted manufacturer, supplier, and trader.

                <br />

                Our commitment is to provide{" "}
                <span className="text-green-600 font-semibold">
                    high-quality seeds with excellent germination and optimal crop yields
                </span>.

                <br />

                We also deliver{" "}
                <span className="text-green-600 font-semibold">
                    innovative digital solutions
                </span>{" "}
                including{" "}
                <span className="text-green-600 font-semibold">
                    seed tracking, inventory management, and data-driven quality assessment
                </span>{" "}
                to support smarter crop planning.

                <br />

                Additionally, we provide{" "}
                <span className="text-green-600 font-semibold">
                    expert consulting services
                </span>{" "}
                to optimize seed selection, improve supply chains, and enable{" "}
                <span className="text-green-600 font-semibold">
                    digital transformation in agriculture
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">Agridigitech</span>, our mission is to empower{" "}
                <span className="text-green-600 font-semibold">
                    agricultural input industries with quality products and technology-driven insights
                </span>{" "}
                that drive{" "}
                <span className="text-green-600 font-semibold">
                    sustainable growth and productivity
                </span>.
            </>
        ),
    },

    machinery: {
        title: "Agricultural Machinery",
        desc: (
            <>
                <span className="text-green-600 font-semibold">
                    Innovating Businesses, Empowering Growth.
                </span>{" "}
                Agricultural machinery includes tools and equipment that help{" "}
                <span className="text-green-600 font-semibold">
                    automate and simplify farm tasks
                </span>{" "}
                like soil preparation, planting, spraying, and harvesting. Farming becomes smarter and more efficient with our range of agricultural machinery.

                <br />

                We collaborate modern equipment like{" "}
                <span className="text-green-600 font-semibold">
                    tractors, power tillers, seed drills, sprayers, threshers, and drip irrigation
                </span>{" "}
                — all sourced from trusted manufacturers who share our vision of innovation in agriculture.

                <br />

                Our machines are designed for{" "}
                <span className="text-green-600 font-semibold">
                    durability, ease of use, and energy efficiency
                </span>, helping farmers{" "}
                <span className="text-green-600 font-semibold">
                    reduce labor costs and increase productivity
                </span>.

                <br />

                We also offer guidance on machinery selection based on{" "}
                <span className="text-green-600 font-semibold">
                    farm size, crop type, and terrain
                </span>.

                <br />

                Efficient equipment also helps in{" "}
                <span className="text-green-600 font-semibold">
                    precision farming
                </span>, ensuring proper input application and minimizing resource waste — making farming both{" "}
                <span className="text-green-600 font-semibold">
                    profitable and eco-friendly
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, we are proud to be a leading{" "}
                <span className="text-green-600 font-semibold">
                    manufacturer, supplier, and trader of advanced agricultural machinery
                </span>{" "}
                designed to elevate farming efficiency and productivity.

                <br />

                Our durable, high-performance equipment is engineered to meet the diverse needs of modern agriculture—from planting and harvesting to soil preparation—helping farmers and agri-businesses maximize yields with less effort and downtime.

                <br />

                Complementing our machinery, we provide{" "}
                <span className="text-green-600 font-semibold">
                    innovative digital solutions
                </span>{" "}
                tailored for the agri-input industry.

                <br />

                Our cutting-edge platforms streamline{" "}
                <span className="text-green-600 font-semibold">
                    machinery management, optimize operations, and deliver actionable insights
                </span>{" "}
                to support smarter decision-making.

                <br />

                Alongside this, our expert consulting services empower agri-related companies to{" "}
                <span className="text-green-600 font-semibold">
                    embrace digital transformation, improve supply chains, and unlock new growth opportunities
                </span>{" "}
                in today’s competitive market.

                <br />

                We are committed to revolutionizing agriculture through{" "}
                <span className="text-green-600 font-semibold">
                    superior machinery and intelligent technology
                </span>, driving sustainable success for farmers and businesses alike.
            </>
        ),
    },

    fertilizer: {
        title: "Fertilizer",
        desc: (
            <>
                Fertilizers are substances that supply{" "}
                <span className="text-green-600 font-semibold">
                    essential nutrients (like nitrogen, phosphorus, and potassium)
                </span>{" "}
                to plants. These nutrients are vital for{" "}
                <span className="text-green-600 font-semibold">
                    plant growth, flowering, fruiting, and overall crop health
                </span>.

                <br />

                We offer a wide range of{" "}
                <span className="text-green-600 font-semibold">
                    chemical, organic, and bio-fertilizers
                </span>. Balanced fertilizer use improves{" "}
                <span className="text-green-600 font-semibold">
                    soil fertility and boosts crop yields
                </span>{" "}
                while supporting{" "}
                <span className="text-green-600 font-semibold">
                    soil regeneration and responsible nutrient management
                </span>. Fertilizers help maintain{" "}
                <span className="text-green-600 font-semibold">
                    long-term soil health
                </span>{" "}
                while meeting short-term productivity goals.

                <br />

                Good soil health starts with the{" "}
                <span className="text-green-600 font-semibold">
                    right fertilizers
                </span>. We offer a full range of{" "}
                <span className="text-green-600 font-semibold">
                    macro and micro-nutrient fertilizers, including urea, DAP, NPK blends, organic manures, and bio-fertilizers
                </span>{" "}
                to support{" "}
                <span className="text-green-600 font-semibold">
                    strong root development and healthy crop growth
                </span>.

                <br />

                Our fertilizers are designed to{" "}
                <span className="text-green-600 font-semibold">
                    increase nutrient availability and improve crop quality
                </span>{" "}
                while maintaining soil fertility. Choose from{" "}
                <span className="text-green-600 font-semibold">
                    water-soluble, granular, and slow-release options
                </span>{" "}
                tailored to your crop needs.

                <br />

                Whether you need{" "}
                <span className="text-green-600 font-semibold">
                    nitrogen-based, phosphate-rich, potassic, or micronutrient blends
                </span>, we’ve got the right solution for every stage of the crop cycle.

                <br />

                Our experts also provide{" "}
                <span className="text-green-600 font-semibold">
                    support and fertilizer recommendations
                </span>{" "}
                to ensure precise application, reduce wastage, and enhance yield sustainably.

                <br />

                At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, we provide{" "}
                <span className="text-green-600 font-semibold">
                    comprehensive fertilizer services
                </span>{" "}
                as a trusted{" "}
                <span className="text-green-600 font-semibold">
                    manufacturer, supplier, and trader
                </span>{" "}
                — committed to delivering{" "}
                <span className="text-green-600 font-semibold">
                    nutrient-rich, high-performance fertilizers
                </span>{" "}
                that boost soil health and crop productivity.

                <br />

                Our fertilizers are{" "}
                <span className="text-green-600 font-semibold">
                    scientifically formulated
                </span>{" "}
                to meet the specific needs of different crops and climatic zones, helping farmers achieve{" "}
                <span className="text-green-600 font-semibold">
                    higher yields and sustainable agricultural growth
                </span>.

                <br />

                Whether it’s{" "}
                <span className="text-green-600 font-semibold">
                    organic, chemical, or bio-fertilizers
                </span>, we ensure{" "}
                <span className="text-green-600 font-semibold">
                    consistent quality and timely delivery
                </span>{" "}
                across the agri-value chain.

                <br />

                What sets us apart is our{" "}
                <span className="text-green-600 font-semibold">
                    seamless integration of digital solutions with fertilizer management
                </span>.

                <br />

                Our{" "}
                <span className="text-green-600 font-semibold">
                    smart agri-tech tools
                </span>{" "}
                offer{" "}
                <span className="text-green-600 font-semibold">
                    data-driven insights into soil nutrition, crop requirements, and application timing
                </span>{" "}
                — empowering farmers to make precise decisions that{" "}
                <span className="text-green-600 font-semibold">
                    save costs and increase efficiency
                </span>.

                <br />

                We also provide{" "}
                <span className="text-green-600 font-semibold">
                    specialized consulting services
                </span>{" "}
                for agri-input companies, helping them{" "}
                <span className="text-green-600 font-semibold">
                    modernize operations, adopt digital practices, and enhance market reach
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">Agridigitech</span>,{" "}
                <span className="text-green-600 font-semibold">
                    “We don’t just deliver fertilizers — we deliver growth.”
                </span>{" "}
                Our goal is to empower agriculture through{" "}
                <span className="text-green-600 font-semibold">
                    quality agri inputs, intelligent technology, and expert support
                </span>{" "}
                that leads to{" "}
                <span className="text-green-600 font-semibold">
                    healthier growth and a greener future
                </span>.
            </>
        ),
    },

    pesticides: {
        title: "Pesticides",
        desc: (
            <>
                <span className="text-green-600 font-semibold">
                    Advanced Pesticide Solutions for Smarter Businesses
                </span>

                <br />

                Pesticides are{" "}
                <span className="text-green-600 font-semibold">
                    chemical or biological agents
                </span>{" "}
                used to protect crops from{" "}
                <span className="text-green-600 font-semibold">
                    insects, weeds, fungi, and diseases
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, we offer a complete range of pesticide services as a{" "}
                <span className="text-green-600 font-semibold">
                    manufacturer, supplier, and trader
                </span>, delivering{" "}
                <span className="text-green-600 font-semibold">
                    high-quality crop protection solutions
                </span>{" "}
                to safeguard yields and promote healthier farming practices.

                <br />

                Our pesticides are developed using{" "}
                <span className="text-green-600 font-semibold">
                    advanced formulations
                </span>{" "}
                that target pests effectively while being{" "}
                <span className="text-green-600 font-semibold">
                    safe for crops, soil, and the environment
                </span>.

                <br />

                Whether you're looking for{" "}
                <span className="text-green-600 font-semibold">
                    herbicides, insecticides, or fungicides
                </span>, we ensure{" "}
                <span className="text-green-600 font-semibold">
                    consistent quality, regulatory compliance, and timely delivery
                </span>{" "}
                across the agri-value chain.

                <br />

                We offer a complete range including{" "}
                <span className="text-green-600 font-semibold">
                    insecticides, herbicides, fungicides, and eco-friendly bio-pesticides
                </span>{" "}
                for different crop stages.

                <br />

                By protecting crops from pests and diseases, pesticides help{" "}
                <span className="text-green-600 font-semibold">
                    secure harvests and reduce crop loss
                </span>.

                <br />

                Our selective and safe pesticide options support{" "}
                <span className="text-green-600 font-semibold">
                    integrated pest management (IPM)
                </span>{" "}
                practices, promoting{" "}
                <span className="text-green-600 font-semibold">
                    eco-safety, residue control, and sustainable farming systems
                </span>.

                <br />

                Our crop protection products are{" "}
                <span className="text-green-600 font-semibold">
                    safe, fast-acting, and formulated for specific pests
                </span>{" "}
                affecting Indian crops.

                <br />

                Whether you're combating stem borers in rice or aphids in cotton, we offer{" "}
                <span className="text-green-600 font-semibold">
                    targeted solutions
                </span>{" "}
                that keep your crops safe and your harvest secure while promoting{" "}
                <span className="text-green-600 font-semibold">
                    responsible pesticide use
                </span>.

                <br />

                Our pesticide products are compliant with{" "}
                <span className="text-green-600 font-semibold">
                    national agricultural standards
                </span>{" "}
                and are designed to{" "}
                <span className="text-green-600 font-semibold">
                    minimize environmental impact
                </span>.

                <br />

                With proper guidance and timely application, our crop protection solutions help{" "}
                <span className="text-green-600 font-semibold">
                    safeguard your investments and ensure healthy harvests
                </span>{" "}
                season after season.

                <br />

                What makes us different is our commitment to innovation through{" "}
                <span className="text-green-600 font-semibold">
                    digital agri-tech solutions
                </span>.

                <br />

                We help agri-input companies and farmers make informed decisions with tools that provide data on{" "}
                <span className="text-green-600 font-semibold">
                    pest patterns, spray schedules, and residue management
                </span>.

                <br />

                With our expert consulting services, we support businesses in{" "}
                <span className="text-green-600 font-semibold">
                    optimizing pesticide usage, reducing environmental impact, and achieving better returns on investment
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">Agridigi Tech</span>,{" "}
                <span className="text-green-600 font-semibold">
                    “We protect your crops and power your growth.”
                </span>{" "}
                With our powerful combination of quality pesticides and smart technologies, we’re helping shape a{" "}
                <span className="text-green-600 font-semibold">
                    safer, more productive future for agriculture
                </span>.
            </>
        ),
    },

    drip: {
        title: "Drip Irrigation Solution",
        desc: (
            <>
                <span className="text-green-600 font-semibold">
                    Grow More With Less – Smart Irrigation for a Sustainable Future
                </span>

                <br />

                Drip irrigation is a{" "}
                <span className="text-green-600 font-semibold">
                    high-efficiency irrigation method
                </span>{" "}
                that uses a network of pipes and emitters to deliver water slowly and precisely to the root zone of crops.

                <br />

                Unlike traditional flood or sprinkler systems, drip irrigation minimizes{" "}
                <span className="text-green-600 font-semibold">
                    evaporation and runoff
                </span>, allowing crops to thrive even in water-scarce conditions.

                <br />

                Our solutions are{" "}
                <span className="text-green-600 font-semibold">
                    customizable for different crop types, soil conditions, and farm sizes
                </span>{" "}
                — from smallholdings to large-scale commercial agriculture.

                <br />

                Designed to help agri professionals — from manufacturers to distributors — deliver{" "}
                <span className="text-green-600 font-semibold">
                    smarter and more efficient farming tools
                </span>{" "}
                to their customers.

                <br />

                Our drip irrigation systems support{" "}
                <span className="text-green-600 font-semibold">
                    responsible farming
                </span>{" "}
                by minimizing water waste, preventing soil erosion, and encouraging more precise use of fertilizers through{" "}
                <span className="text-green-600 font-semibold">
                    fertigation
                </span>.

                <br />

                In an era of increasing climate uncertainty and resource scarcity, drip irrigation offers a{" "}
                <span className="text-green-600 font-semibold">
                    proven way to produce more with less
                </span>.

                <br />

                By integrating our systems into your supply or service model, you're not just investing in technology — you're contributing to a{" "}
                <span className="text-green-600 font-semibold">
                    resilient, climate-smart agriculture future
                </span>.

                <br />

                At <span className="text-green-600 font-semibold">AgriDigi Tech</span>, we’re committed to transforming agriculture with{" "}
                <span className="text-green-600 font-semibold">
                    smart, sustainable, and scalable solutions
                </span>.

                <br />

                Our expertise ensures{" "}
                <span className="text-green-600 font-semibold">
                    seamless integration, timely delivery, and top-tier support
                </span>{" "}
                across the agri supply chain.

                <br />

                In addition to irrigation, we offer{" "}
                <span className="text-green-600 font-semibold">
                    cutting-edge digital solutions
                </span>{" "}
                for the agri-input industry.

                <br />

                From digital systems to{" "}
                <span className="text-green-600 font-semibold">
                    precision farming technologies
                </span>, we enable agri-businesses to{" "}
                <span className="text-green-600 font-semibold">
                    optimize operations, enhance traceability, and make data-driven decisions
                </span>.

                <br />

                Our solutions bridge the gap between technology and traditional farming, empowering your business to{" "}
                <span className="text-green-600 font-semibold">
                    stay ahead in a competitive market
                </span>.

                <br />

                With a customer-first approach and deep understanding of agriculture, we are not just service providers —{" "}
                <span className="text-green-600 font-semibold">
                    we are your partners in progress
                </span>.

                <br />

                Whether you're a local dealer or a national manufacturer, we bring{" "}
                <span className="text-green-600 font-semibold">
                    innovation to your fields and efficiency to your systems
                </span>.

                <br />

                <span className="text-green-600 font-semibold">
                    “Digitizing Agri-Input. Delivering Agri-Impact.”
                </span>
            </>
        ),
    },


};

const ProductDetails = () => {
    const { category } = useParams();

    const data = content[category];

    if (!data) {
        return <div className="text-center py-20">Content Not Found</div>;
    }

    return (
        
            <div className="px-6 md:px-12 py-12">
            <BackButton />

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
                    {data.title}
                </h2>

                {/* CONTENT */}
                <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-justify">
                    {data.desc}
                </p>

            </div>
        
    );
};

export default ProductDetails;