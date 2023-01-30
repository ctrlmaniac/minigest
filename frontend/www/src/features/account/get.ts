import api, { Endpoints } from "~/api";

export default function getAccount() {
  const promise = api.get(`${Endpoints.ACCOUNT}`);

  return promise.then((res) => res.data);
}
