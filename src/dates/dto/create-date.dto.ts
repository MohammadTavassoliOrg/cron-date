import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateDateDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    dataName: string
}
