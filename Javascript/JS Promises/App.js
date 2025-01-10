const GITHUB_API = "https://api.github.com/users/hassaan871";

const promise = fetch(GITHUB_API);

console.log(promise);

promise.then(function (data) {
    console.log(data);
});