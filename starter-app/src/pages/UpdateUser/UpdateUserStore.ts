import { makeAutoObservable, runInAction } from "mobx";
import { IUserUpdate } from "../../interfaces/userUpdate";
import * as userApi from "../../api/modules/users";

class UpdateUserStore{
    userResponse: IUserUpdate[] = [];
    id = "";
    name = "";
    job = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        runInAction(this.prefetchData);
    }
    findId = (value: string) => {
        this.id = value;
    }

    updateName = (value: string) => {
        this.name = value;
    }

    updateJob = (value: string) => {
        this.job = value;
    }

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const res = await userApi.updateUser(this.id, this.name, this.job);
            this.userResponse = res;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
        this.isLoading = false;
    }

}

export default UpdateUserStore;