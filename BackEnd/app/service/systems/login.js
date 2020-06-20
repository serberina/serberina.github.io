'use strict';

const { Service } = require('egg');

class LoginService extends Service {
  async index(params) {
    const { ctx, app } = this;
    const db = await ctx.model.Blogusers.find(params);
    console.log(db, '8888')
    if (db.length !== 0) {
      const token = app.jwt.sign(
        {
          username: ctx.request.body.username,
        },
        app.config.jwt.secret
      );
      return token;
    }
    return false;
  }
}

module.exports = LoginService;
