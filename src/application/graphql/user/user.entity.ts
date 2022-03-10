import { ObjectType, Field, ID } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User as DomainUser } from "../../../domain/user/user.domain";

@ObjectType()
@Entity()
export class User implements DomainUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;
}
