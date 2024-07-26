import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  userName: string; // Повертаємося до userName

  @Column
  email: string;

  @Column
  password: string;
}
