let bagdata=JSON.parse(localStorage.getItem("cart-item"))||[];
let bagcontainer=document.querySelector("#bag-container");
let bag_img_left=document.querySelector(".bag-img-left");
let bag_data_center=document.querySelector(".bag-data-center");
let left_bag_list=document.querySelector("#left-bag-list");
let allbilling=document.querySelector("#allbilling");



// console.log(qty_list.value);
appendbag(bagdata);
function appendbag(data){
   let total=0;
    data.forEach((el,index) => {
      
      let div1=document.createElement("div");
      div1.setAttribute("class",'cart_data_container')
      let div2=document.createElement("div");
      div2.setAttribute("class","bag-img-left")
      let img=document.createElement("img");
      img.src=el.image;
      div2.append(img);

      let div3 =document.createElement("div");
      div3.setAttribute("class","bag-data-center")
      let h4=document.createElement("h4");
      h4.innerText=el.category;
      let p=document.createElement("p");
      p.innerText=el.title;
      let div4=document.createElement("div");
      div4.setAttribute("class","select_size");
      let select1=document.createElement("select");
      select1.setAttribute("id","size_list");
      let opt1=document.createElement("option");
      opt1.innerText="Size: S";
      let opt2=document.createElement("option");
      opt2.innerText="Size: L";
      let opt3=document.createElement("option");
      opt3.innerText="Size: M";
      let opt4=document.createElement("option");
      opt4.innerText="Size: XL";
      let opt5=document.createElement("option");
      opt5.innerText="Size: XXL";
      let opt6=document.createElement("option");
      opt6.innerText="Size: XS"
      let opt7=document.createElement("option");
      opt7.innerText="Size: XXX"
      select1.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7);
     

      let select2=document.createElement("select");
      select2.setAttribute("id","Qty_list");
      let opt8=document.createElement("option");
      opt8.innerText="Qty: 1";
      opt8.setAttribute("value","1");
      // console.log(opt8.value);
      let opt9=document.createElement("option");
      opt9.innerText="Qty: 2";
      opt9.setAttribute("value","2");
      let opt10=document.createElement("option");
      opt10.innerText="Qty: 3";
      opt10.setAttribute("value","3");
      let opt11=document.createElement("option");
      opt11.innerText="Qty: 4";
      opt11.setAttribute("value","4");
      let opt12=document.createElement("option");
      opt12.innerText="Qty: 5";
      opt12.setAttribute("value","5");
      let opt13=document.createElement("option");
      opt13.innerText="Qty: 6"
      opt13.setAttribute("value","6");
      let opt14=document.createElement("option");
      opt14.innerText="Qty: 7"
      opt14.setAttribute("value","7");
      select2.addEventListener("change",()=>{
        data[index].quantity=(+select2.value)
        //  console.log(data[index]);
         localStorage.setItem("cart-item",JSON.stringify(data))
        priceup()
        
      })
      // console.log(opt14.value);
      select2.append(opt8,opt9,opt10,opt11,opt12,opt13,opt14);
      div4.append(select1,select2);
      div3.append(h4,p,div4);

      let div5=document.createElement("div");
      div5.setAttribute("class","bag-data-right");
      let h3=document.createElement("h3");
      h3.setAttribute("id","actual_price");
     
      function priceup(){
        
        h3.innerText=` ${el.price*el.quantity}`;
        let biling=0;
        
        data[index].totalprice=(+el.price*(+el.quantity))

        for(let i=0; i<data.length; i++){
          biling+=(+data[i].totalprice)
          // console.log(biling);
        }
        billingdata(biling)
        // console.log(data[index]);
        localStorage.setItem("cart-item",JSON.stringify(data))
      
      }
  
      priceup()

     
      let p1=document.createElement("p");
      p1.innerText="Member Discount:₹ 50";
      let div6=document.createElement("div");
      div6.setAttribute("class","btn-data-list");
      let btn1=document.createElement("button");
      btn1.innerText="REMOVE";
      btn1.addEventListener("click",()=>{
        left_bag_list.innerHTML="";
        data.splice(index,1)
        localStorage.setItem("cart-item",JSON.stringify(data)) 
        appendbag(data);
      })
      let WISHLIST=document.createElement("button");
      WISHLIST.innerText="MOVE TO WISHLIST"
      div5.append(h3,p1)
      div6.append(btn1,WISHLIST);
      div1.append(div2,div3,div5);
      left_bag_list.append(div1,div6);
     
       
    });
     
    
}


function billingdata(ammount){
  
  let x=`
                <div class="cart-total">
                    <h4>Cart Total</h4>
                    <h4>₹ ${ammount}</h4>
                </div>
                <div class="Member-discount">
                    <h4>Member Discount</h4>
                    <h4>₹ 50.00</h4>
                </div>
                <div class="GST">
                    <h4>GST</h4>
                    <h4>₹ ${(ammount*0.18).toFixed(2)}</h4>
                </div>
                <div class="shiping">
                    <h4>Shipping Charges</h4>
                    <h4>₹ 00.00</h4>
                </div>
                <div class="total-amount">
                    <h2>Total Amount</h2>
                    <h2>₹ ${(ammount+(ammount*0.18)-50).toFixed(2)}</h2>
                </div>
  `

  allbilling.innerHTML=x;
}