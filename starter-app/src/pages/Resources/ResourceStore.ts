import {
    makeAutoObservable,
    runInAction,
} from "mobx";
import {IResources} from "../../interfaces/resources";
import * as resourceApi from "../../api/modules/resources";


class ResourceStore {
    resources: IResources[] = [];
    totalPages = 0;
    currentPage = 1;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        runInAction(this.prefetchData);
    }

   async changePage(page: number) {
        this.currentPage = page;
        await this.prefetchData();
    }

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const res = await resourceApi.getByPage(this.currentPage)
            this.resources = res.data;
            this.totalPages = res.total_pages;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
        this.isLoading = false;
    };
}

export default ResourceStore;