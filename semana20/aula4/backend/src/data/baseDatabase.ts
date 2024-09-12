import knex from "knex";

export abstract class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "<HOST>",
      port: 3306,
      database: "<DATABASE>",
      user: "<USER>",
      password: "<PASSWORD>"
    }
  });
}
