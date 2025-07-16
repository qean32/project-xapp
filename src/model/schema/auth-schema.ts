import z from "zod";

export const authSchema = z.object({
    email: z
        .string()
        .email({ message: 'не валидная почта' }),
    password: z
        .string()
        .regex(
            /^[A-Za-z0-9]+$/,
            'пароль должен состоять из латиница и цифр'
        )
        .max(20, { message: 'максимальная длина - 20' })
        .min(8, { message: 'минимальная длина - 8' }),
});

export type AuthFormDto = {
    email: string,
    password: string
}