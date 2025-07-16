import z from "zod";

export const createPlayListSchema = z.object({
    nameName: z.string().max(20, { message: 'максимальная длина - 20' }).min(8, { message: 'минимальная длина - 8' }),
});

export type CreatePlayListForm = {
    nameName: string,
}