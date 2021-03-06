import { ApiMethodEnum } from "../../api/models/apiMethod.enum";
import { ApiQueryKey } from "../../api/models/enpoint.model";
import { FetchParam } from "../../hooks/useFetch";
import {
	ActionTypeApi,
	ActionType,
} from "../models/action.type";

export const API_ACTIONS = {
	FETCH_START: "FETCH_START_",
	FETCH_SUCCESS: "FETCH_SUCCESS_",
	FETCH_FAILD: "FETCH_FAILD_",
};

export const apiActions = <U, K extends ApiMethodEnum>() => ({
	fetchStart: (
		endpoint: ApiQueryKey,
		payload: FetchParam<U>[K]
	): ActionTypeApi<U, K> => ({
		type: `${API_ACTIONS.FETCH_START}${endpoint}` as ActionType,
		payload,
	}),

	fetchSuccess: (endpoint: ApiQueryKey, payload: Promise<U[] | U> | null) => ({
		type: `${API_ACTIONS.FETCH_SUCCESS}${endpoint}`,
		payload,
	}),

	fetchFailure: (endpoint: ApiQueryKey, payload: any) => ({
		type: `${API_ACTIONS.FETCH_FAILD}${endpoint}`,
		payload,
	}),
});
