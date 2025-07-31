import { UserDto } from ".";

export interface ChatDto {
    createdAt: string,
    isView: boolean,
    hashMessage: boolean,
    fromId: UserDto,
    toId: UserDto
    chatId: string
}