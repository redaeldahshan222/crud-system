

var productnameinput =document.getElementById("productnameinput");
var productpriceinput =document.getElementById("productpriceinput");
var productcategoryinput =document.getElementById("productcategoryinput");
var productdescriptioninput =document.getElementById("productdescriptioninput");
 var searchinput = document.getElementById("searchinput")




 var updatebtn= document.getElementById("updatebtn");
 var addbtn= document.getElementById("addbtn");
 var indaxupdate=0;

var productlist=[];






if(localStorage.getItem("product")!=null){
  
productlist =  JSON.parse(localStorage.getItem("product") );

displaydate()


}









function addprouct(){
if(vadationname()){
  var product={
    name : productnameinput.value,
    price : productpriceinput.value,

    category: productcategoryinput.value,

    desc :productdescriptioninput.value,
    
};
productlist.push(product)


localStorage.setItem("product",JSON.stringify(productlist))

}





// cleaform();
displaydate()

console.log(productlist)

}
function cleaform(){
    
productnameinput.value ="";
productpriceinput.value=""
productcategoryinput.value=""
productdescriptioninput.value=""
    


}
    
function displaydate(){
    var cartona = "";


  for(  var i=0 ;   i<productlist.length ; i++ ){
    cartona += `   <tr>
     
    <td> ${i} </td>
    <td> ${productlist[i] .name}</td>
    <td>${productlist[i] .price}</td>
    <td>${productlist[i] .category}</td>
    <td>${productlist[i] .description}</td>
<td>
<button onclick="setdate(${i})" class="btn btn-warning btn-sm">update</button>
<button onclick=" deleteitem(${i}) " class="btn btn-danger btn-sm">delete</button>
</td>

</tr>`

  }
  document.getElementById("tablebody").innerHTML = cartona;
}




function deleteitem(index){
  productlist.splice(index ,1);
  localStorage.setItem("product",JSON.stringify(productlist))
  console.log(productlist);
  displaydate()
}

function search(){
  var term   =    searchinput.value;
  var cartona = "";
console.log("helllo")



  for(  var i=0 ;   i<productlist.length ; i++ ){
    if(productlist[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `   <tr>
     
      <td> ${i} </td>
      <td> ${productlist[i] .name}</td>
      <td>${productlist[i] .price}</td>
      <td>${productlist[i] .category}</td>
      <td>${productlist[i] .description}</td>
  <td>
  <button class="btn btn-warning btn-sm">update</button>
  <button onclick=" deleteitem(${i}) " class="btn btn-danger btn-sm">delete</button>
  </td>
  
  </tr>`
  
    }
    }
    
  document.getElementById("tablebody").innerHTML = cartona;

}
function setdate(index){
  indaxupdate =index

  var product =productlist[index]
 productnameinput.value= product.name;
 productpriceinput.value=product.price;
 productcategoryinput.value=product.category;
 productdescriptioninput.value = product.description;
 

 updatebtn.classList.remove("d-none");
 addbtn.classList.add("d-none");

}

function updateproduct(){
  var product={
    name : productnameinput.value,
    price : productpriceinput.value,

    category: productcategoryinput.value,

    desc :productdescriptioninput.value,
    
};
productlist.splice(indaxupdate ,1, product)
localStorage.setItem("product",JSON.stringify(productlist))

displaydate();
updatebtn.classList.add("d-none");
addbtn.classList.remove("d-none");


} 

var namemassege =document.getElementById("namemassege")




function vadationname(){
  var text= productnameinput.value
  var regexname= /^[A-Z][a-z]{3,10}$/;
  
    if(regexname.test(text)){
      productnameinput.classList.add("is-valid")
      productnameinput.classList.remove("is-invalid")
      namemassege.classList.add("d-none");
      return true;

    }
    else{
      productnameinput.classList.add("is-invalid")
      productnameinput.classList.remove("is-valid")
      namemassege.classList.remove("d-none");
      return false;
   
    }


}