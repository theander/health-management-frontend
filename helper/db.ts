import { DataTypes, Sequelize } from 'sequelize';

export default async function connectToDatabase() {
  return new Sequelize(
    'jdbc:postgresql://localhost:5432/users',
    'my_user',
    'password123',
    {
      dialect: 'postgres',
    }
  );
}
