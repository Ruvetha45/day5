
// print odd numbers
console.log("A). Print the odd numbers in the array using arrow function")
let odd = () => {
    for (var i = 0; i<=10; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
};
    
odd();
// convert title caps
console.log("B). Converted all strings to title caps arrow function");
var str= (string) => {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 return res;
 }
 console.log(str("i am ruvetha"));
 // sum of the array
console.log("C). Sum of the array using arrow function");
let sum = (a, b) => {
    let result1 = a + b;
    return result1;
}

let result1 = sum(5,7);
console.log(result1);
// prime numbers
console.log("D). Print all prime numbers in given array using arrow function");
var sum1 =(a) => {
    var  result="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=a[i]+" "
        }
    }
    return result;
 
}
console.log(sum1([1,2,3,4,5,6,7,8,9,11]));
// palindromes
console.log("E). Return all palindromes in the array using arrow function");
var palind=(a) => {
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]));