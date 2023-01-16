import { makeAutoObservable, runInAction } from "mobx";
import { IUserCreate } from "../../interfaces/userCreate";
import * as userApi from "../../api/modules/users";

class CreateUserStore{
    userResponse: IUserCreate[] = [];
    name = "";
    job = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        runInAction(this.prefetchData);
    }

    addName = (value: string) => {
        this.name = value;
    }

    addJob = (value: string) => {
        this.job = value;
    }

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const res = await userApi.createUser(this.name, this.job);
            this.userResponse = res;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
        this.isLoading = false;
    }

}

export default CreateUserStore;