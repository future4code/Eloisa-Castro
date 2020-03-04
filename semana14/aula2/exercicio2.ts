// a.
type post = {
  name: string,
  text: string,
}

const post1: post = {
  name: 'João',
  text: 'Texto do post1'
}

const post2: post = {
  name: 'Maria',
  text: 'Texto do post2'
}

const post3: post = {
  name: 'Astrodev',
  text: 'Texto do post3'
}

const post4: post = {
  name: 'Boris',
  text: 'Texto do post4'
}

const post5: post = {
  name: 'João',
  text: 'Texto do post5'
}

const arrPosts: post[] = [post1, post2, post3, post4, post5]

// b.
function filterPosts(posts: post[], author: string): void {
  const filteredPosts = posts.filter( post => (
    post.name === author
  ))
  console.log(filteredPosts)
}

filterPosts(arrPosts, 'João')