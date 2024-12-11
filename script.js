// // var a=10;
// // console.log(a);
// // var a;
// // console.log(a);
// // let i=10;
// // let str1 = "Abhishek ";
// // var out=str1.charAt(3);
// // console.log(out);
// // let str2="Pandit ";
// // let str3="Chavan";
// // out=str1.concat(str2).concat(str3);
// // console.log(out);
// // console.log(str1.includes("hek"));
// // console.log(out.indexOf("a"));
// // console.log(str2.indexOf("a"));
// // console.log(str1.replace("i","n"));
// // console.log(str1);
// // console.log(out.replace("a","N"));
// // out="";
// // for(let i=str1.length;i>0;i--)
// // {
// //     out=out.concat(str1.charAt(i));
// // }
// // console.log(out);
// // out=str1.concat(str2).concat(str3);
// //                     //start            //end-1
// // console.log(out.slice(out.indexOf("A"),out.indexOf("n")));
// //                 //except this 
// // console.log(out.split(""));
// // console.log(out.split('i'));//works with negative index
// // //if start index > endindex no output
// // console.log(out.substring(out.indexOf("A"),out.indexOf("n")));
// // //dont work with negative index
// // //if startindex > endindex swaping the index then substring
// // // console.log(out.substring(out.length-1,0));
// // console.log(out.trim());


// let nav="Abhishek Pandit Chavan";
// console.log(nav.slice(0,nav.indexOf(" ")));
// console.log(nav.slice(nav.lastIndexOf(" ")+1));
// let out="";
// let char;
// for(let i=0;i<nav.length;i++)
// {
    
//     if("aeiou".includes(nav[i]))
//         out=out+nav[i].toUpperCase();
//     else
//         out=out+nav[i];
// }
// console.log(out);

// let e1="abhishek@gmail.com"
// let e2="nothing3@gmail.co"
// let e3="Abhi.com";
// if(e3.includes("@") && e3.endsWith(".com"))
//     console.log("Valid email")
// else
//     console.log("Invalid email")

// console.log((nav.split(" ")).length);

// let check="ABd Cba"
// var arr = (check.replace(" ","").toLowerCase()).split("");
// let flag=true;
// for(let i=0,j=arr.length-1;j>i;j--,i++)
// {
//     if(arr[i]==arr[j])
//         flag=true;
//     else
//         flag=false;
// }
// if(flag==true)
//     console.log("Pali");
// else
//     console.log("Not Pali");


// xyz();
// function xyz()
// {
//     console.log("xyz");
// }
// abc();
// let abc =()=>console.log("abc");
// let arr=[1,2,3];
// let arr2=[];
// for(let i=0;i<arr.length;i++)
// {
//     arr2[i]=arr[i];
//     console.log(arr[i]);
// }
// console.log(arr2);
// let arr3 = arr.map((ele,i)=>{return ele;});+
// console.log(arr3);

// let str= 'this is javascript';
// let str2 = str.split(' ');
// let str3 =str2.map((ele,i)=>
// {
//    return ele.split('').reverse().join("")+" ";
  
// })
// console.log(str3.join(""));

// for(let i=0;i<4;i++)
// {
//     console.log("* ");
// }


// for(let i=0;i<10;i++)
// console.log(i);

function outer()
{
    let x =10;
    function inner()
    {
        console.log(x);
    }
    return inner;
}
// inner(); 
let rep=outer();
console.log(rep);
rep();

//condintional statement
//5 eg of lexical
//5 eg on clouer
//programming
