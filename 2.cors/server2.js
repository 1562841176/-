let express=require('express');
let app=express();
let whiteList=['http://localhost:3000'];
app.use(function(req,res,next){
    let origin=req.headers.origin;
    if(whiteList.includes(origin)){
        // 设置哪个源可以访问
        res.setHeader('Access-Control-Allow-Origin',origin);
        // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers','name');
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods','PUT');
        // 预检的存活时间
        res.setHeader('Access-Control-Allow-Max-Age',6);
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        // 允许前端获取哪个头
        res.setHeader('Access-Control-Expose-Headers','name');
        if(req.method==='OPTIONS'){
            res.end()  // OPTIONS 请求不做任何处理
        }
        
    }

    next();  //执行下面代码

})
app.put('/getData',function(req,res){
    console.log(req.headers)
    res.setHeader('name','zj')
    res.end("我不爱你")
})
app.get('/getData',function(req,res){
    console.log(req.headers)
    res.end("我不爱你")
})
app.use(express.static(__dirname))
app.listen(4000);

