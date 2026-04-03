import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Albert Su", text: "Absolut zuverlässig und fair! Die Kommunikation klappt stets einwandfrei und unkompliziert. Vereinbarte Termine wurden zu 100% eingehalten. Man merkt einfach, dass hier Profis am Werk sind.", color: "bg-blue-100 text-blue-700" },
  { name: "Stefan Iken", text: "Ging um Transport und Entsorgung einer großen Eckcouch. Über den Preis waren wir schnell einig und eh ich mich versah, war die Couch draußen. Die Jungs haben nicht lange gesabbelt, sondern angepackt!", color: "bg-green-100 text-green-700" },
  { name: "Edy Aze", text: "Die erbrachte Leistung war äußerst professionell, zügig und reibungslos. Auch in preislicher Hinsicht war das Angebot sehr fair und angemessen. Uneingeschränkt weiterzuempfehlen.", color: "bg-orange-100 text-orange-700" },
  { name: "Lia Michelle Stüben", text: "Super nette Leute, total zuvorkommend, immer eine Lösung parat und angemessene Preise. Kann ich nur weiterempfehlen! 🙂", color: "bg-purple-100 text-purple-700" },
  { name: "Tom Weber", text: "Hammer Preise und super freundlich. Sogar mehr als kompromissbereit! Top Dienstleister.", color: "bg-teal-100 text-teal-700" },
  { name: "Liliana Hasanovic", text: "Zuverlässige und saubere Arbeit! Klare Kommunikation und ein sehr ordentliches Ergebnis. Sehr empfehlenswert 👍", color: "bg-rose-100 text-rose-700" }
];

export function Reviews() {
  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Das sagen unsere Kunden</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Echte Erfahrungen von Menschen, die uns vertrauen.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{review.name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed flex-grow">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
