import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( 'nest')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

   @Column({ length: 255 })
  senha: string;

  // @BeforeInsert()
  // hashSenha() {
  //    console.log('Hashing senha: ', this.senha); 
  //   this.senha = hashSync(this.senha, 10);
  // }
}