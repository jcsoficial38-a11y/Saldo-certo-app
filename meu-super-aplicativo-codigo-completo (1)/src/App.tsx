import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2, Sparkles, Share2, Rocket } from 'lucide-react';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <Smartphone className="w-8 h-8 text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Meu Super Aplicativo</h1>
          <p className="text-sm text-slate-400 mt-2">
            Seu aplicativo está rodando perfeitamente no seu dispositivo!
          </p>
        </div>

        <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/50 text-left space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Pronto para Produção
          </div>
          <p className="text-xs text-slate-300">
            Você pode editar os arquivos em <code className="text-indigo-400">src/App.tsx</code> para criar a interface que desejar.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setLikes(c => c + 1)}
            className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            <Sparkles className="w-4 h-4" /> Curtir ({likes})
          </button>
        </div>
      </div>
    </div>
  );
}
