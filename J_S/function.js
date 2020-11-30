function fun(){
    var sum=0;
    for(i=0; i<fun.arguments.length; ++i){
        sum+=arguments[i];
    }
    return sum;
}

var sum_a=fun(20,30,10);
console.log(sum_a);

//Function Expression
var b=function(x,y){
    console.log(x*y);
    return x*y;
};

var mul=b(10,20)
console.log(mul);

// Arrow Exprerssion
var c=(a,b=10)=>{
    return a*b;
};

mul=c(1)
console.log(mul);

//Anonymous Function
(function(x){console.log("156"+" "+x)})("jghkj");