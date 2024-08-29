import { $ } from '@wdio/globals'


class ProfilePage {

    async profileName(name){
        return $(`//android.widget.TextView[@text="${name}"]`)
    }

    
}

export default new ProfilePage();
