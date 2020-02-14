var post1 = {
    name: 'João',
    text: 'Texto do post1'
};
var post2 = {
    name: 'Maria',
    text: 'Texto do post2'
};
var post3 = {
    name: 'Astrodev',
    text: 'Texto do post3'
};
var post4 = {
    name: 'Boris',
    text: 'Texto do post4'
};
var post5 = {
    name: 'João',
    text: 'Texto do post5'
};
var arrPosts = [post1, post2, post3, post4, post5];
// b.
function filterPosts(posts, author) {
    var filteredPosts = posts.filter(function (post) { return (post.name === author); });
    console.log(filteredPosts);
}
filterPosts(arrPosts, 'João');
