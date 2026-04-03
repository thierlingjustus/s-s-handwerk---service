// @ts-nocheck
import { ArrowLeft } from 'lucide-react';

export function Impressum() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10 min-h-screen">
      <a href="/" className="relative z-50 inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#1a4a7c] mb-12 transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Übersicht
      </a>

      <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p className="mb-6">
          S&S Handwerk & Service<br />
          Musterstraße 123<br />
          24103 Kiel
        </p>

        <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
        <p className="mb-6">
          Max Mustermann
        </p>

        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p className="mb-6">
          Telefon: +49 (0) 123 456789<br />
          E-Mail: info@ss-handwerk-service.de
        </p>

        <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
        <p className="mb-6">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 123456789
        </p>

        <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
        <p className="mb-6 text-slate-600">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </div>
    </div>
  );
}
