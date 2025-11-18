//create element
// var btn = document.querySelector("button")


// btn.addEventListener("click", function() {
//      var h1  =  document.createElement("h1")
//      h1.innerHTML =  "hello frm js"
//      console.log(h1);

// })

//apend

//    var h1  =  document.createElement("h1")
// h1.innerHTML = "hello from js"

// var main  = document.querySelector("main")

// main.append(h1)



var btn  = document.querySelector("button")
var main = document.querySelector("main")
let arr  = ['Arman','Aamir','Abhishek sir','Abhishek sir' ,'Sudama',"Mohit","Piyush","Sohil","Anshu","MD Ejaj","Parshant",]

btn.addEventListener("click", function () {
  var div  =   document.createElement("div")

  var h1 = document.createElement("h1")
       var c1  = Math.floor(Math.random()*256)
      var c2  = Math.floor(Math.random()*256)
       var c3  = Math.floor(Math.random()*256)
   var r  = Math.floor(Math.random()*360)
   var scl  = Math.floor(Math.random()*3)
   var x  = Math.floor(Math.random()*80)
   var y  = Math.floor(Math.random()*80)
 var a  =  Math.floor(Math.random()*arr.length)
h1.innerHTML = arr[a]
h1.style.position = 'absolute'
h1.style.left = x + '%'
h1.style.top = y + '%'
h1.style.color = `rgb(${c1},${c2},${c3})`
// h1.style.rotate =  r+"deg"
h1.style.scale = scl
 main.appendChild(h1)
 
 

 

    
})







//     var r  = Math.floor(Math.random()*360)

//   console.log(x);
  

//     div.style.width = "50px"
//     div.style.height = "50px"
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//       div.style.position = "absolute"
//        div.style.borderRadius = "100%"
//         div.style.left =  x+'%'
//         div.style.top =  y+'%'
//      div.style.rotate =  r+"deg"
//     main.appendChild(div)
//     console.log(div);
