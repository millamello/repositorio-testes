import { $ } from '@wdio/globals';

class LoginPage {
    get email() {
        return $('id:email');
    }

    get password() {
        return $('android=new UiSelector().text("Password")');
    }

    get btnLogin() {
        return $('~Login');
    }

    async login(email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.btnLogin.click(); // Deve ser um WebdriverIO element com método click
    }
}

export default new LoginPage();