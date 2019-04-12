function test(){
    for(let i=0;i<3;i++){
        console.log(i);
    }
    // console.log(i); 这个i访问不到
    for(var j=0;j<3;j++){
        console.log(j);
    }
    console.log(j);
    const PI = 3.1415926;
    // PI = 6; 不可以重新赋值
    console.log(PI);
}
test()