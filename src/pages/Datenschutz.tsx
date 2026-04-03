import { ArrowLeft } from 'lucide-react';

export function Datenschutz() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10 min-h-screen">
      <a href="/" className="relative z-50 inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#1a4a7c] mb-12 transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück zur Übersicht
      </a>

      <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-slate max-w-none text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900 mb-2 mt-6">1. Datenschutz auf einen Blick</h2>
        <h3 className="font-semibold text-slate-800 mt-4 mb-2">Allgemeine Hinweise</h3>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3 className="font-semibold text-slate-800 mt-4 mb-2">Datenerfassung auf unserer Website</h3>
        <p className="mb-4">
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2 mt-8">2. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="font-semibold text-slate-800 mt-4 mb-2">Datenschutz</h3>
        <p className="mb-4">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        
        <p className="mb-4">
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
        </p>
      </div>
    </div>
  );
}
