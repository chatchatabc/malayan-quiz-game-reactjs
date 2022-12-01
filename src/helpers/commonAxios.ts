import axios from "axios";
import { AxiosParamsInterface, ObjectInterface } from "./commonInterface";

const getAxiosConfig = (data_config: ObjectInterface) => {
  const config = { Headers: { Authorization: "Bearer " + data_config.token } };
  return config;
};

export const axiosPost = async ({
  api,
  body,
  data_config,
}: AxiosParamsInterface) => {
  try {
    const res = await axios.post(api, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
