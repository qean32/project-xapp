import z from "zod";

export const registrationSchema = z.object({
    email: z.string().email({ message: 'не валидная почта' }),
    name: z.string().max(27, { message: 'максимальная длина длина - 27' }).min(3, { message: 'минимальная длина - 3' }),
    password: z.string().email({ message: 'Введите корректную почту' }),
});