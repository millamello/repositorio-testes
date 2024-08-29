import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import profilePage from '../pageobjects/profile.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile');
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ');
        
        // Aguarda até que o perfil seja visível
        const profileElement = await profilePage.profileName('EBAC Cliente');
        await profileElement.waitForDisplayed({ timeout: 10000 }); // essa etapa de click não estava funcionando, foi um dos erros que aconteceu e eu também não consegui solucionar,
                                                                    // então eu pesquisei e fiz alguns testes mas nada funcinou.
        
        // Verifica se o perfil está visível
        expect(await profileElement.isDisplayed()).toBe(true);
    });
});