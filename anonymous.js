

// print odd nmbers using anonymous function
console.log("A). Print odd nmbers using anonymous function");
let odd = function(){
    for (var i = 0; i<=10; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
};
    
odd();
// string
console.log("B). Converted all strings to title caps using anonymous function");
var str=function (string) {
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
// sum of all nums in array using anonymous function
console.log('C). Sum of all nums in array using anonymous function');

const sum = function(){
    let total = 0;
    for(let i = 0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
    
};
console.log(sum(1, 2, 4, 5, 6, 88, 32, 1));
// prime numbers
console.log("D). Print all prime numbers in given array using anonymous function");
var sum1 =function(a){
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
console.log(sum1([1,2,3,4,5,6,7,8,9,11]))
// palindromes
console.log("E). Return all palindromes in the array using anonymous function");
var palind=function(a){
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
//return median
console.log("F). Return median of two sorted array pf the same size using anonymous function");
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));
// remove duplicates from array
console.log('G). Remove duplicates in array using anonymous function');
let array = [1, 2, 1, 2, 5, 6 , 8, 0, 9];

let removeDup = function(){
    let duplicate = [...new Set(array)];
    console.log(duplicate);
};
removeDup(array);
// rotate arrays
console.log("H). Rotate the array by K times using anonymous function");
var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],5));