import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {HydratedDocument} from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({default: 'username'})
    name: String
    @Prop({required: true, unique: true})
    email: String
    @Prop()
    passworld: String
}

export const UserSchema = SchemaFactory.createForClass(User);
