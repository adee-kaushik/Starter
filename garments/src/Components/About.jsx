import { businessData } from '../data/business-data';

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {businessData.about}
        </p>
      </div>
    </section>
  );
}

export default About;