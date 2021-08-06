import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';

@Entity()
export class product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text"})
    name: string;

    @Column({type: "int"})
    slug : string;

    @Column({type: "text", default:""})
    description: string;

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Date

    @BeforeUpdate()
    updateTimestamp(){
        this.updatedAt = new Date;
    }

    @Column({ default: true })
    isAvailable: boolean;

}