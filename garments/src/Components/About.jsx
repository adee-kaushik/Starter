


import { businessData } from '../data/business-data';
 
function About() {
  return (
    <section id="about" className="px-6 py-20 bg-brand-maroon/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl font-semibold text-brand-maroon mb-2">About Us</h2>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6"></div>
        <p className="font-body text-lg text-brand-muted leading-relaxed">
          {businessData.about}
        </p>
      </div>
    </section>
  );
}
 
export default About;
 
