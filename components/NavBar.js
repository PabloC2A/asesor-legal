export default function NavBar() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">⚖️</div>
          <div>
            <h2 className="font-bold text-lg text-slate-900">Asesor Legal</h2>
            <p className="text-xs text-slate-500">Asistencia legal 24/7</p>
          </div>
        </div>
      </div>
    </header>
  )
}
