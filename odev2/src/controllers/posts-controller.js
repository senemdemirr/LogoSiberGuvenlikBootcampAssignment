const posts = require("../data/posts.json")

getAllPosts = ()=>{
    return posts;
}
getPostById = (postId) => {
    return posts.filter(x=>x.id == postId); //postu filtreleyerek istenilen ıd e ait postu geri döndürür.
}

module.exports = {getAllPosts, getPostById};