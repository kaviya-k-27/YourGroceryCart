     let product=[];
 function addclick(){
    let name=document.getElementById("addItems").value;
    let price =parseFloat(document.getElementById("prices").value);
    let quantity=Number(document.getElementById("qualityin").value);
   let total=quantity*price;
   if ( !name||isNaN(price) || isNaN(quantity)) {
      alert("Please fill all fields.");
      return;
    }
    product.push({name,price,quantity});
 if (!isNaN(name.charAt(0))) {
         alert("Please fill again., name should not start with a number.");
          return;
    }
  console.log(product);
  const itemBlock = document.createElement("div");
  itemBlock.innerHTML = 
` <table>
<tr> <h4><strong>${name}</strong></h4></tr>
    <tr>
      <td>UnitPrice : $${price.toFixed(2)}</td>
    <td style="background-color: white; position:relative; top: -10px; text-align:center" id="td" >
    <input type="number"id="option" onlick="clickinput()"value=" ${quantity}" min="1" 
     style="width:120px", "background:green";>${quantity}
     </td>
      <td style="padding-left:10px" id="total">Sub : $${total.toFixed(2)}</td>
      <td> <button style="margin-left:35px;"class="remove-btn" onclick="this.closest('div').remove()">Remove</button></td>
    </tr>
  </table>
  <hr>
`;
//     <h4><strong>${name}</strong></h4>
//     Unit Price: $${price.toFixed(2)}
//    <sapan style="margin-left:150px;">${quantity}</span>
//   <sapan style="margin-left: 20px;">Sub: $${total.toFixed(2)}</span>
//     <button class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
//     <hr>
//   `;
  const output = document.getElementById("output");
  output.style.height = "auto";
  output.style.background = "rgba(156, 156, 156, 0.3)";
  output.appendChild(itemBlock);
      //  alert("kaby");
   //  document.getElementById("itemName").innerText=name;
   // document.getElementById("price").innerText= "Unit Price : $"+price,
   // document.getElementById("qualityNo").innerHTML=quantity +"    ",
   //  document.getElementById("rate").innerHTML= "Sub : $"+quantity*price,
   //    document.getElementById("bn").innerHTML="<button>Remove</button>",
   //    document.getElementById("output").style.height="auto",
   //  document.getElementById("output").style.background= "rgba(156, 156, 156,0.3)" ;;
   // //  document.getElementById("border").innerHTML="<br>"+"<hr>";
  function clickinput(){
    alert("1");
    document.getElementById("td").innerText="";
   let reQuantity=document.getElementById("option").value;
   total=reQuantity+price;
   document.getElementById("total").innerText= "sub : $",total;
  }
   
document.getElementById("addItems").value="";
document.getElementById("prices").value="";
document.getElementById("qualityin").value="";

}
