import ChatWidget from '../components/ChatWidget'

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-bold mb-4 text-slate-900">Asesor Legal</h1>
        <p className="text-xl text-slate-600 mb-8">Bienvenido al sistema de asistencia legal. Chatea directamente con nuestro asistente especializado.</p>

        <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">¿Cómo funciona?</h2>
          <p className="mb-4 text-slate-700">Puedes hacer preguntas sobre temas legales y recibirás respuestas automáticas del asistente.</p>
          <p className="text-sm text-slate-500">El chat está disponible abajo. Escribe tu pregunta en español.</p>
        </div>
      </section>

    </div>
  )
}
