import React from 'react'

export default function Footer() {
  return (
            <footer className="bg-neutral-100/5 backdrop-blur-xl border-t border-stone-800 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-5">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                <img src="/images/isotipo-gym-color.png" alt="FlorFit Logo" className="h-8  opacity-80" />
                <h2 className="text-white font-bold tracking-wider text-lg">FLORFIT</h2>
                </div>
                {/* Links */}
                <ul className="flex flex-wrap justify-center gap-x-6 text-sm text-neutral-400 font-medium">
                <li><a href="#" className="hover:text-lime-300 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Clases</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Programas</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-lime-300 transition-colors">Contacto</a></li>
                </ul>
                {/* Info*/}
                <div className="w-full border-t border-lime-100/30 pt-4">
                <p className="text-xs text-neutral-400">
                    © 2025 <span className="text-lime-300 font-semibold">FLORFIT</span>. Entrena. Evoluciona. Supera.
                </p>
                </div>
            </div>
            </footer>

  )
}