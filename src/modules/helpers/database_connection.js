const db = async (query) => {
  const driver = require("../../../config/database_connection");
  const session = driver.session();

  session.run(query).subscribe({
    onKeys: (keys) => {
      console.log(keys);
    },
    onNext: (record) => {
      console.log(record);
    },
    onCompleted: () => {
      session.close();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

module.exports = { db };
