import {z} from "zod";
export const messageSchema = z.object({
    senderId: z.string().min(1),
    receiverId: z.string().min(1),
    text: z.string().optional(),
    image: z.string().url().optional(),
    createdAt: z.any().optional(),
    updatedAt: z.any().optional()
})