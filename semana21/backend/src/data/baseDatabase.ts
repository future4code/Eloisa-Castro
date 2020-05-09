import knex from "knex";

export abstract class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-52-23-228-187.compute-1.amazonaws.com",
      port: 3306,
      database: "eloisadb",
      user: "eloisa",
      password: "eloisa-boumanF4"
    }
  });
}