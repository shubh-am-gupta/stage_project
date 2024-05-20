import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity() 
export class List{
    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column()
    showId: number
    
    @Index()
    @Column()
    userId: number

    @Column({
        default: true
    })
    is_active: boolean
}