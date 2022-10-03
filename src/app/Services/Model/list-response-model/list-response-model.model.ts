import {ResponseModel} from "../response-model/response-model.model";

export interface ListResponseModel<T> extends ResponseModel{
  data: T[];
}
