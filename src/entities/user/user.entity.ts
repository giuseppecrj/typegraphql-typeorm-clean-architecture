import { ObjectType, Field, ID } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { InvitationStatus } from "./invitation-status.enum";

@ObjectType()
@Entity()
export class User {
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

  @Field(() => InvitationStatus, {
    nullable: true,
    defaultValue: InvitationStatus.NONE,
    description: "Invitation status of profile",
  })
  @Column({ nullable: true })
  invitationStatus: InvitationStatus;
}
