import axios from "axios";

export function post_treat(treat_hash) {
  fetch("http://localhost:3000/treats", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(treat_hash)
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
