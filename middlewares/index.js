const userLogin = require('../data/users');
module.exports = {
  async auth(req, res, next) {
    try {
      const { token } = req.headers;
      if (token) {
        const degenData = token;
        // const user = userLogin
        if (degenData.name === user.name) {
          next();
        } else {
          res.status(400).json('need login');
        }
      } else {
        res.status(400).json('need login');
      }
    } catch (err) {
      console.log(err);
    }
  },
};
