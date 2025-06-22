import z from "zod";

export const authSchema = z.object({
    email: z.string().email({ message: 'не валидная почта' }),
    password: z.string().email({ message: 'Введите корректную почту' }),
});