import SimpleContactForm from "@/components/simple-contact-form"
import { Code, Palette, Zap, Server } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Floating orbs - hidden on mobile for performance */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400/[0.02] rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex flex-col relative z-10">
        <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
          {/* Header Mobile - Simplified */}
          <div className="text-center space-y-4 flex-shrink-0">
            <h1 className="text-4xl font-extralight text-white tracking-wider opacity-100 visible">
              Build<span className="font-light">Apps</span>
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-base font-light">
                Transformamos ideias em soluções digitais.
              </p>
              <p className="text-gray-500 text-sm">
                Conte-nos sobre seu projeto.
              </p>
            </div>

            {/* Features Mobile - Inline horizontal com 4 itens */}
            <div className="flex justify-center gap-4 pt-2 overflow-x-auto">
              <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                <div className="w-8 h-8 border border-gray-800 rounded-lg flex items-center justify-center">
                  <Code className="h-3 w-3 text-gray-500" />
                </div>
                <span className="text-xs text-gray-600 font-light">Dev</span>
              </div>
              <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                <div className="w-8 h-8 border border-gray-800 rounded-lg flex items-center justify-center">
                  <Palette className="h-3 w-3 text-gray-500" />
                </div>
                <span className="text-xs text-gray-600 font-light">Design</span>
              </div>
              <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                <div className="w-8 h-8 border border-gray-800 rounded-lg flex items-center justify-center">
                  <Server className="h-3 w-3 text-gray-500" />
                </div>
                <span className="text-xs text-gray-600 font-light">Infra</span>
              </div>
              <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                <div className="w-8 h-8 border border-gray-800 rounded-lg flex items-center justify-center">
                  <Zap className="h-3 w-3 text-gray-500" />
                </div>
                <span className="text-xs text-gray-600 font-light">Perf</span>
              </div>
            </div>
          </div>
          
          {/* Form Mobile - Takes available space */}
          <div className="flex-1 flex items-center justify-center py-4">
            <SimpleContactForm />
          </div>

          {/* Footer Mobile */}
          <footer className="text-center py-3 flex-shrink-0">
            <p className="text-gray-600 text-xs font-light">
              &copy; 2025 BuildApps
            </p>
          </footer>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:min-h-screen relative z-10">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Side - Header Desktop */}
              <div className="space-y-10">
                <div>
                  <h1 className="text-7xl xl:text-8xl font-extralight text-white tracking-wider mb-6">
                    Build<span className="font-light">Apps</span>
                  </h1>
                  <div className="w-32 h-px bg-gradient-to-r from-white to-transparent"></div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-400 text-2xl leading-relaxed font-light">
                    Transformamos ideias em soluções digitais elegantes e funcionais.
                  </p>
                  <p className="text-gray-500 text-lg">
                    Conte-nos sobre seu projeto e criaremos algo extraordinário juntos.
                  </p>
                </div>

                {/* Features Desktop - 4 items mantendo o alinhamento original */}
                <div className="flex gap-12 pt-8">
                  <div className="flex flex-col items-start space-y-4 group">
                    <div className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-gray-700 transition-colors duration-300">
                      <Code className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-600 font-light">Desenvolvimento</span>
                  </div>
                  <div className="flex flex-col items-start space-y-4 group">
                    <div className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-gray-700 transition-colors duration-300">
                      <Palette className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-600 font-light">Design</span>
                  </div>
                  <div className="flex flex-col items-start space-y-4 group">
                    <div className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-gray-700 transition-colors duration-300">
                      <Server className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-600 font-light">Infraestrutura</span>
                  </div>
                  <div className="flex flex-col items-start space-y-4 group">
                    <div className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-gray-700 transition-colors duration-300">
                      <Zap className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-600 font-light">Performance</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Form Desktop */}
              <div className="flex justify-center">
                <SimpleContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Footer */}
      <footer className="hidden lg:block text-center py-8 relative z-10">
        <div className="space-y-3">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto"></div>
          <p className="text-gray-600 text-sm font-light">
            &copy; 2025 BuildApps • Criando o futuro, um projeto por vez
          </p>
        </div>
      </footer>
    </main>
  )
}
