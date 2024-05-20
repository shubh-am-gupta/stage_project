import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity() 
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number
}