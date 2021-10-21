import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nome: string;

    @Column()
    Idade: number;

    @Column()
    Data_de_Nascimento: string;

    @Column()
    RA: number;

    @Column()
    Endereço: string;

    @Column({
        default: false 
    })
    Matriculado: boolean;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}