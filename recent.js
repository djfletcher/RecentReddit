document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let test = document.createElement("div");
  test.innerHTML = "I AM TEST";
  root.appendChild(test);
  let posts = getPosts('kijafa').then(posts => console.log(posts));
  let comments = getComments('kijafa').then(comments => console.log(comments));
});


// Reddit API requests

const fetchPosts = username => (
  $.ajax({
    method: 'GET',
    url: `https://www.reddit.com/user/${username}/submitted.json`
  })
);

const fetchComments = username => (
  $.ajax({
    method: 'GET',
    url: `https://www.reddit.com/user/${username}/comments.json`
  })
);

// Parsing API response

const getPosts = username => {
  return fetchPosts(username).then(data => data["data"]["children"]);
};

const getComments = username => {
  return fetchPosts(username).then(data => data["data"]["children"]);
};
