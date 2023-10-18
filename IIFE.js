
// print odd nums using IIFE function
console.log("A). Print odd nums using IIFE function");
(function(array){
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);
// string caps
console.log("B). Converted all strings to title caps using IIFE functions");
(function (string) {
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
 console.log(res);
 }) ("i am ruvetha");

// sum of all nums in array using IIFE function
console.log('C). Sum of all nums in array using IIFE functions');
(function(a){
    var  result=0;
    for(i=0;i<a.length;i++)
    {
            result+=a[i]
    }
    console.log(result);
})([1,2,3,4,5,7]);
// prime numbers
console.log("D). Return all prime numbers inthe array using IIFE function");
(function(a){
    var  res="";
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
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})([1,2,3,4,5,6,7,8,9,11]);
// palindromes
console.log("E). Return all palindromes in the array using IIFE function");
(function(a){
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
    console.log(ans);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);


// Return medium
console.log("F). Return mediun of two sorted array pf the same size using IIFE function");
(function(a,b){
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
     console.log(med);
    
}) ([1,2,3,7],[4,5,6,8]);
// remove duplicates in array using IIFE
console.log('G). Remove duplicates in array using IIFE function');
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
}
)([1,1,2,3,4,5,8,2,4]);
// rotate array
console.log("H). Rotate the array by K times using IIFE function");
(function(a,k){
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
  console.log(d);
}) ([1,2,3,4,5],3);
