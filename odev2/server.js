
const postsController = require("./src/controllers/posts-controller");
const usersController = require("./src/controllers/users-controller");
const todosController = require("./src/controllers/todos-controller");


const app = require('express')();

app.get("/posts",(req,res)=>{
    //controller call
    var posts = postsController.getAllPosts();
    res.send(posts);
    //deta return
});

app.get("/posts/:postId",(req,res)=>{
    var post = postsController.getPostById(req.params.postId);
    res.send(post);
});

app.get("/users",(req,res)=>{
    var users = usersController.getAllUsers();
    res.send(users);
});

app.get("/users/:userId",(req,res)=>{
    var user = usersController.getUserById(req.params.userId);
    res.send(user);
});

app.get("/todos",(req,res)=>{
    var todos;
    //eğer todos/user/userId=1 olduğu durum için if bloğu
    if(req.query.userId){
        todos = todosController.getTodosByUserId(req.query.userId);
    }
    else{
        todos = todosController.getAllTodos();
    }
    
    res.send(todos);
});



app.listen(5000);
