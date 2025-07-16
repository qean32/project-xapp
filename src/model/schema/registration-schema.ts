import z from "zod";
import { AuthFormDto, authSchema } from './index'

export const registrationSchema = authSchema.merge(z.object({
    name: z
        .string()
        .max(27, { message: 'максимальная длина длина - 27' })
        .min(3, { message: 'минимальная длина - 3' })
        .regex(
            /^[A-Za-z]+$/,
            'никнейм должен состоять из латиницы'
        ),
}));

export type RegistrationFormDto = AuthFormDto & {
    name: string
}