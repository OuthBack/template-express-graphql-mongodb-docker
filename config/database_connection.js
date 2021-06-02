const neo4j = require("neo4j-driver");

const driver = neo4j.driver(
  process.env.DB_URL,
  neo4j.auth.basic("admin", "cm7advvp2dzf"),
  {
    maxTransactionRetryTime: 30000,
  }
);

module.exports = driver;
