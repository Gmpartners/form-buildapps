"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { formSchema, type FormData } from "@/lib/validations"
import { createClient } from "@/lib/supabase"
import { 
  CheckCircle, 
  Send, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  User,
  Lightbulb
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Sua Ideia",
    description: "Conte-nos sobre seu projeto",
    icon: Lightbulb,
    fields: ["mensagem"]
  },
  {
    id: 2,
    title: "Contato",
    description: "Como podemos te encontrar?",
    icon: User,
    fields: ["nome", "telefone"]
  }
]

export default function SimpleContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  })

  const nextStep = async () => {
    const currentFields = steps[currentStep - 1].fields
    const isValid = await trigger(currentFields as any)
    
    if (isValid && currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const supabase = createClient()
      
      const { error: insertError } = await supabase
        .from("contatos")
        .insert([
          {
            nome: data.nome,
            email: "",
            telefone: data.telefone,
            empresa: "",
            mensagem: data.mensagem,
            created_at: new Date().toISOString(),
          },
        ])

      if (insertError) {
        throw insertError
      }

      setIsSuccess(true)
      reset()
    } catch (err) {
      console.error("Erro ao enviar formulário:", err)
      setError("Erro ao enviar formulário. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = (currentStep / steps.length) * 100
  const CurrentIcon = steps[currentStep - 1]?.icon || Lightbulb

  if (isSuccess) {
    return (
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto">
        <Card className="relative overflow-hidden bg-black/95 border border-gray-800 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
          <CardContent className="p-6 sm:p-8 lg:p-12 relative">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-6 sm:mb-8 animate-pulse">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 text-white">
                Projeto Recebido
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto">
                Analisaremos sua ideia e <span className="text-white font-medium">entraremos em contato em breve</span> com um plano personalizado para seu projeto.
              </p>
              <div className="flex items-center justify-center space-x-3 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-xs sm:text-sm font-light">Preparando sua proposta...</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto">
      <Card className="relative overflow-hidden bg-black/95 backdrop-blur-xl border border-gray-800">
        
        {/* Top accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="h-px bg-gray-800">
            <div 
              className="h-full bg-gradient-to-r from-gray-300 to-white transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <CardContent className="p-4 sm:p-6 lg:p-10">
          {/* Step Indicator */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`
                    w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-light transition-all duration-500
                    ${currentStep >= step.id 
                      ? 'bg-white text-black' 
                      : 'bg-gray-800 text-gray-500 border border-gray-700'
                    }
                  `}>
                    {currentStep > step.id ? (
                      <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-black rounded-full"></div>
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      w-8 sm:w-12 lg:w-20 h-px mx-2 sm:mx-4 lg:mx-6 transition-all duration-500
                      ${currentStep > step.id ? 'bg-gradient-to-r from-white to-gray-300' : 'bg-gray-800'}
                    `}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-gray-100 to-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 shadow-lg">
              <CurrentIcon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-black" />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light mb-2 sm:mb-3 text-white">
              {steps[currentStep - 1]?.title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
              {steps[currentStep - 1]?.description}
            </p>
          </div>

          {error && (
            <div className="flex items-center space-x-3 text-red-400 bg-red-500/10 border border-red-500/20 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Step 1: Projeto/Mensagem */}
            {currentStep === 1 && (
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-4">
                  <Label htmlFor="mensagem" className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">
                    Descreva sua ideia ou projeto
                  </Label>
                  <textarea
                    id="mensagem"
                    placeholder="Ex: Preciso de um app mobile para delivery, um site institucional, uma plataforma de vendas..."
                    className="min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] w-full rounded-lg sm:rounded-xl border border-gray-700 bg-black/50 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-300 resize-none backdrop-blur-sm"
                    {...register("mensagem")}
                  />
                  {errors.mensagem && (
                    <p className="text-xs sm:text-sm text-red-400">{errors.mensagem.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Nome e Telefone */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="space-y-2 sm:space-y-4">
                  <Label htmlFor="nome" className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">
                    Seu nome
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Como você gostaria de ser chamado?"
                    className="h-11 sm:h-14 lg:h-16 text-sm sm:text-base bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500 rounded-lg sm:rounded-xl backdrop-blur-sm"
                    {...register("nome")}
                  />
                  {errors.nome && (
                    <p className="text-xs sm:text-sm text-red-400">{errors.nome.message}</p>
                  )}
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <Label htmlFor="telefone" className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">
                    WhatsApp para contato
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="h-11 sm:h-14 lg:h-16 text-sm sm:text-base bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500 rounded-lg sm:rounded-xl backdrop-blur-sm"
                    {...register("telefone")}
                  />
                  {errors.telefone && (
                    <p className="text-xs sm:text-sm text-red-400">{errors.telefone.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 sm:pt-6 lg:pt-8">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`
                  h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-gray-400 hover:text-white hover:bg-white/5 border border-gray-700 rounded-lg sm:rounded-xl transition-all duration-300
                  ${currentStep === 1 
                    ? 'opacity-0 pointer-events-none' 
                    : 'opacity-100 hover:border-gray-600'
                  }
                `}
              >
                <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Voltar
              </Button>

              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-xs sm:text-sm bg-white text-black hover:bg-gray-100 rounded-lg sm:rounded-xl transition-all duration-300 font-light"
                >
                  Continuar
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-xs sm:text-sm bg-gradient-to-r from-gray-100 to-white text-black hover:from-white hover:to-gray-100 rounded-lg sm:rounded-xl transition-all duration-300 font-light"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-black mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Enviar Projeto
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
