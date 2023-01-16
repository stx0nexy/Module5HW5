import { makeAutoObservable,} from "mobx";
import AuthStore from "../../stores/AuthStore";


class RegistrationStore {

    private authStore: AuthStore;

    email = '';
    password = '';
    error = '';
    isLoading = false;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this);
    }

    changeEmail(email: string) {
        this.email = email;
    }

    changePassword(password: string) {
        this.password = password;
    }

    async registration() {
        try {
            this.isLoading = true;
           await this.authStore.registration(this.email, this.password);
        }
        catch (e) {
            if (e instanceof Error) {
                this.error = e.message;
            }
        }
        this.isLoading = false;
    }
}

export default RegistrationStore;