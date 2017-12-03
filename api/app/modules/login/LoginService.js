const jwt = require('jsonwebtoken');
const config = require("../../../config.json");

class LoginService {

    constructor (loginModel, userModel) {
        this.loginModel = loginModel;
        this.userModel = userModel;
    }

    login (email, password) {
        return this.userModel.findOne({
                where: {
                    email: email,
                    password: password
                }
        })
        .then((user) => {
            if (user) {
                return this.createLoginForUser(user)
                    .then( (login) => { return {
                            token: login.token,
                            userId: login.userId,
                            firstname: user.firstname,
                            lastname: user.lastname,
                        }
                    });
            }
            throw new Error('Invalid login');
        });
    }

    createTokenFor(email) {
        return jwt.sign(Object.assign({}, config.auth.options, {
          sub: email
        }), config.auth.secret);
    }

    createLoginForUser(user) {
        return this.loginModel
          .build({
              userId: user.id,
              token: this.createTokenFor(user.email)
          })
          .save();
    }

    logout (token) {
        return this.loginModel
            .findOne({ where: { token: token } })
            .then( (login) => login.destroy() );
    }

}

module.exports = LoginService;
