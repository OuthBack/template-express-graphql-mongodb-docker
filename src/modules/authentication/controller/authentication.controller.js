const { session, db } = require("../../helpers/database_connection");

const Register = async (req, res, next) => {
  // const { name } = req.body;
  // session.run(`
  //   (:User {email: ${email}})
  // `);
  // res.json({ message: "Registred" });
};

const UserCreateConstrain = async (req, res, next) => {
  try {
    const { constrain, label } = req.body;
    db(
      `CREATE CONSTRAINT constrain_${constrain} ON (l:${label}) ASSERT l.${constrain} IS UNIQUE`
    );
    db(`SHOW CONSTRAINT`);
    res.json({ message: "Done" });
  } catch (error) {
    res.json({ message: error });
  }
};

const UserDropConstain = async (req, res, next) => {
  const { constrain } = req.body;
  db(`
    DROP CONSTRAINT constrain_${constrain}
  `);
  res.json({ message: "Done" });
};

module.exports = { Register, UserCreateConstrain, UserDropConstain };
