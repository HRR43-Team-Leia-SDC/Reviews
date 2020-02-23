import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 200,
  rps: 1000,
  duration: "120s"
};

export default function() {
  let num = Math.floor(Math.random() * 10000000);

  let req1 = {
    method: 'GET',
    url: `http://localhost:2000/?${num}`,
  }

  let req2 = {
    method: 'GET',
    url: `http://localhost:2000/reviews/${num}`,
  }

  let resp = http.batch([req1, req2]);
  //sleep(1);
};