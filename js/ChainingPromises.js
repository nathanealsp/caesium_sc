const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
  const post = posts.find(item => item.id === id);
  return new Promise((resolve, reject) => {
    if (post) {
      resolve(post);
    } else {
      reject('We have no posts');
    }
  });
}

function hydrateAuthor(post) {
  const author = authors.find(item => item.name === post.author);
  return new Promise((resolve, reject) => {
    if (author) {
      post.author = author;
      resolve(post);
    } else {
      reject('Author cant be found');
    }
  });
}

getPostById(4)
  .then(data => hydrateAuthor(data))
  .then(data => console.log(data))
  .catch(err => console.error(Error(err)));
