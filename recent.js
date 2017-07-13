document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  fetchPosts('kijafa').then(data => assembleList(data["data"]["children"]));
  fetchComments('kijafa').then(data => assembleList(data["data"]["children"]));
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

// Displaying API reponse

function convertToHTML(list) {
  let ul = document.createElement('ul');
  list.forEach(item => {
    let li = document.createElement('li');
    if (item.kind === 't3') {
      // t3 are posts
      li.innerHTML = item.data.title;
    } else if (item.kind === 't1') {
      // t1 are comments
      // console.log(item);
      li.innerHTML = item.data.body;
    }
    ul.appendChild(li);
  });

  return ul;
}

function assembleList(list) {
  let root = document.getElementById('root');
  root.appendChild(convertToHTML(list));
}
