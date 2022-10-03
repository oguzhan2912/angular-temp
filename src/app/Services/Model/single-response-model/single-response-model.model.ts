import { ResponseModel} from "../response-model/response-model.model";

export interface SingleResponseModel<T> extends ResponseModel
{
  data: T;
}

