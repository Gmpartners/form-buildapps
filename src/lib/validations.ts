import { z } from "zod"

export const formSchema = z.object({
  mensagem: z.string().min(1, {
    message: "Por favor, descreva sua ideia.",
  }),
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  telefone: z.string().min(10, {
    message: "Telefone deve ter pelo menos 10 dígitos.",
  }),
})

export type FormData = z.infer<typeof formSchema>
