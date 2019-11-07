let express=require('express');
let app=express();
// “__dirname” 是 node.js 中的一个全局变量，它指向当前脚本所在的目录。
app.use(express.static(__dirname))
app.listen(3000);

