import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

export enum Genre {
    'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi' 
}

@Entity() 
export class Show{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({
        type: "enum",
        enum: Genre
    })
    genre: Genre
}