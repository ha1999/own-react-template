import instance from "./axiosInstance";
import { handlerErrorApi, handlerResApi } from "../common/index";

class HttpApi {
    async get(url: string, config: Object = {}, signal: AbortSignal): Promise<Object | Error> {
        try {
            const res = await instance.get(url, {
                ...config,
                signal
            });
            return handlerResApi(res);
        } catch (error) {
            return handlerErrorApi(error);
        }
    }
    async post(url: string, data: Object = {}, config: Object = {}, signal: AbortSignal): Promise<Object | Error> {
        try {
            const res = await instance.post(url, data, {
                ...config,
                signal
            });
            return handlerResApi(res);
        } catch (error) {
            return handlerErrorApi(error);
        }
    }
    async put(url: string, data: Object = {}, config: Object = {}, signal: AbortSignal): Promise<Object | Error> {
        try {
            const res = await instance.put(url, data, {
                ...config,
                signal
            });
            return handlerResApi(res);
        } catch (error) {
            return handlerErrorApi(error);
        }
    }
    async delete(url: string, config: Object = {}, signal: AbortSignal): Promise<Object | Error> {
        try {
            const res = await instance.delete(url, {
                ...config,
                signal
            });
            return handlerResApi(res);
        } catch (error) {
            return handlerErrorApi(error);
        }
    }
}


const httpApi = new HttpApi();
Object.freeze(httpApi);
export default httpApi;