class LoginController {

    constructor (loginService) {
        this.loginService = loginService;
    }

    create (request, response) {
        return response.promise(this.loginService.login(request.body.email, request.body.password));
    }

    'delete' (request, response) {
        return response.promise(this.loginService.logout(request.params.id));
    }

}

module.exports = LoginController;
