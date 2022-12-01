export interface ObjectInterface {
  [key: string]: any;
}

export interface AxiosParamsInterface {
  api: string;
  body: FormData;
  data_config?: ObjectInterface;
}
