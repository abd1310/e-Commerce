//global
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n')
if(localStorage.getItem('positions')){
    var positions = [JSON.parse(localStorage.getItem('positions'))]
} else{
    var positions = [];
}

//DIV
var phoneDIV = document.getElementById('phoneDIV');
var tabletDIV = document.getElementById('tabletDIV');
var caseDIV = document.getElementById('caseDIV'); 

//IMFORMATION
var phons = [
    {id:1,cart:false,img:'img/xiaomi-redmi-note-8.jpg',quanity:5,total:0,name:'Xiaomi Redmi Note 8 ',price:200},
    {id:2,cart:false,img:'img/xiaomi_redmi_note_9.jpg',quanity:5,total:0,name:'Xiaomi Redmi Note 9',price:350},
    {id:3,cart:false,img:'img/xiaomi-mi-9pro.jpg',quanity:5,total:0,name:'Xiaomi Mi 9',price:300},
    {id:4,cart:false,img:'img/xiaomi-mi-10.jpg',quanity:5,total:0,name:'Xiaomi Mi 10',price:350},
    {id:5,cart:false,img:'img/Xiaomi-mix-3.jpg',quanity:5,total:0,name:'Xiaomi Mi Mix 3',price:230},
    {id:6,cart:false,img:'img/xiaomi-mi-mix-2.jpg',quanity:5,total:0,name:'Xiaomi Mi Mix 2',price:200},
    {id:7,cart:false,img:'img/xiaomi_redmi_note_7.jpg',quanity:5,total:0,name:'Xiaomi Redmi Note 7',price:150},
    {id:8,cart:false,img:'img/redmi 9A.jpg',quanity:5,total:0,name:'Xiaomi Redmi 9A',price:220}
]
var tablet = [
    {id:9,cart:false,img:'img/xiaomi-mi-pad4.jpg',quanity:5,total:0,name:'Xiaomi Mi pad 4',price:200},
    {id:10,cart:false,img:'img/xiaomi_mi_pad_4_plus2.jpg',quanity:5,total:0,name:'Xiaomi Mi pad 4 plus',price:250},
    {id:11,cart:false,img:'img/xiaomi-mi-pad-3.jpg',quanity:5,total:0,name:'Xiaomi Mi pad 3',price:150},
    {id:12,cart:false,img:'img/Xiaomi-Mi-Pad-4b.webp',quanity:5,total:0,name:'Xiaomi Mi pad 4 (black)',price:250}
]
var cases = [
    {id:13,cart:false,img:'img/galaxy-case.jpg',quanity:5,total:0,name:'galaxy-case for Xiaomi pad 4',price:40},
    {id:14,cart:false,img:'img/xiaomi-mi-pad4-case.jpg',quanity:5,total:0,name:'case for xiaomi mi pad 4',price:50},
    {id:15,cart:false,img:'img/xiaomi-note-8-case-cover.jpg',quanity:5,total:0,name:'Case for xiaomi note 8',price:20},
    {id:16,cart:false,img:'img/Case-for-Xiaomi-Mi-Pad-4.webp',quanity:5,total:0,name:'case for xiaomi mi pad 4 Plus',price:30}
]


function HTMLPhoneProduct(con){
    let btn= `btnPhons${con}`;
    if(phons[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${phons[con-1].img}">
                    <a id="${btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i> 
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${phons[con-1].name}</span>
                    <p>Price: $${phons[con-1].price}.00</p>
                  </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${phons[con-1].img}">

                    <a id="${btn}" onclick="cart('${phons[con-1].id}','${phons[con-1].cart}',
					'${phons[con-1].img}','${phons[con-1].quanity}','${phons[con-1].total}',
					'${phons[con-1].name}','${phons[con-1].price}','${btn}')"
       
                    class="btn-floating halfway-fab waves-effect waves-light orange">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${phons[con-1].name}</span>
                <p>Price: $${phons[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

function HTMLTabletProduct(con){
    let btn= `btnTablets${con}`;
    if(tablet[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${tablet[con-1].img}">
                    <a id"{btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${tablet[con-1].name}</span>
                    <p>Price: $${tablet[con-1].price}.00</p>
                 </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${tablet[con-1].img}">

                    <a id="${btn}" onclick="cart('${tablet[con-1].id}','${tablet[con-1].cart}',
					'${tablet[con-1].img}','${tablet[con-1].quanity}','${tablet[con-1].total}',
					'${tablet[con-1].name}',
                    '${tablet[con-1].price}','${btn}')"
                    class="btn-floating halfway-fab waves-effect waves-light orange">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${tablet[con-1].name}</span>
                <p>Price: $${tablet[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

function HTMLcasesProduct(con){
    let btn= `btncase${con}`;
    if(tablet[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${tablet[con-1].img}">
                    <a id="${btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${tablet[con-1].name}</span>
                    <p>Price: $${tablet[con-1].price}.00</p>
                 </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${cases[con-1].img}">

                    <a id="${btn}" onclick="cart('${cases[con-1].id}','${cases[con-1].cart}',
					'${cases[con-1].img}','${cases[con-1].quanity}','${cases[con-1].total}',
					'${cases[con-1].name}',
                    '${cases[con-1].price}','${btn}')"
                    class="btn-floating halfway-fab waves-effect waves-light orange">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${cases[con-1].name}</span>
                <p>Price: $${cases[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

//ANIMATION
function animation(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:2000
});

Toast.fire({
    icon:'success',
    title: 'Added to shopping cart'
})
}

//Alert cart
function alertCart(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:2000
});

Toast.fire({
    icon:'info',
    title: 'Product already added to shopping cart'
})
}

//CART FUNCTIONS
function cart(id,cart,img,quanity,total,name,price,btncart){
    var item={
        id:id,cart:true,img:img,quanity:quanity,total:total,name:name,price:price
    }
    positions.push(id);
    localStorage.setItem("positions",JSON.stringify(positions));
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage == null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    document.getElementById(btncart+'alert').style.display="block";
    animation();
}

//RENDER
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$(document).ready(function(){
    $('.modal').modal();
});

function render(){ 
    new WOW().init();
    if(localStorage.getItem('positions')){
        var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    } else {
        var localProductsCart = [];
        localStorage.setItem('positions',JSON.stringify(localProductsCart));
        var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    }

    for(let i=0; i<localProductsCart.length; i++){
        //phons
       for(let i2=0;i2<phons.length; i2++){
           if(localProductsCart[i] == phons[i2].id){
               phons[i2].cart =true;
           }else{ }
       } 
       //tablet
       for(let i2=0;i2<tablet.length; i2++){
          if(localProductsCart[i] == tablet[i2].id){
              tablet[i2].cart =true;
         }else{ }
        } 
        //cases
        for(let i2=0;i2<cases.length; i2++){
            if(localProductsCart[i] == cases[i2].id){
                cases[i2].cart =true;
            }else{ }
        } 
    }
    for(let i=1; i<=8; i++){
        phoneDIV.innerHTML+=`${HTMLPhoneProduct(i)}`;
    }
    for(let i=1; i<=4; i++){
        tabletDIV.innerHTML +=`${HTMLTabletProduct(i)}`;
        caseDIV.innerHTML +=`${HTMLcasesProduct(i)}`;
    }
    if(localStorage.getItem("cart")==null){
    }else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
}



