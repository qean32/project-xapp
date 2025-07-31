import { UserDto } from "./user.dto"

export interface MessageDto {
    id: number
    chatId: number
    hashMessage: string
    isView: boolean
    files?: string
    to: number
    from: number
    fromId: UserDto
    createdAt: string
}