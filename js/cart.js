//firebaseConfig

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9tyPLZeJ-11FSnaRzHGk1_2tFk7Dw4MA",
    authDomain: "e-commerce-ee2dc.firebaseapp.com",
    projectId: "e-commerce-ee2dc",
    storageBucket: "e-commerce-ee2dc.appspot.com",
    messagingSenderId: "545366831348",
    appId: "1:545366831348:web:bf1afb5096a3ba3bb56ea1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function total() {
  var productsLocal = JSON.parse(localStorage.getItem('cart'));
  let total = 0;
  for (let i = 0; i < productsLocal.length; i++) {
    if (productsLocal[i].cart) {
      total += parseInt(productsLocal[i].price);

    }
  }
  // console.log(total);
  return total
}

var con = 0;
var con2 = JSON.parse(localStorage.getItem('positions')); // POSITION AT TABLE

function clean() {
  document.getElementById('tableProducts').innerHTML = '';
  document.getElementById('total').innerHTML = '';
  var cartn = document.getElementById('cart_n');
  cartn.innerHTML = '';
  localStorage.clear();
}

function remove(id) {
  var productsLocal = JSON.parse(localStorage.getItem('cart'));

  for (let i = 0; i < productsLocal.length; i++) {
    if (productsLocal[i].id == id) {
      var x = productsLocal[i].id;
      productsLocal.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(productsLocal));

      total();
      for (let i2 = 0; i2 < con2.length; i2++) {
        if (x == con2[i2]) {
          con2.splice(i2, 1);
          localStorage.setItem('positions', JSON.stringify(con2));
        } else {

        }
      }
      updatecart();
    } else {
      updatecart();
    }
  }
}
function convertCurrency(){
 
  const API_URL = "https://v6.exchangerate-api.com/v6/8de72580d7a475e3fdd82bb6/latest/USD";
  
  
    async function currency(){
      const res = await fetch(API_URL);
      const data = await res.json();
       // console.log(data.conversion_rates['ILS']); 
       con = 0;
       var cartn = document.getElementById('cart_n');
       var productsLocal = JSON.parse(localStorage.getItem('cart'));
       cartn.innerHTML = `[${productsLocal.length}]`;
       document.getElementById('tableProducts').innerHTML = '';
       for (let i = 0; i < con2.length; i++) {
         var position = con2[i];
         for (let j = 0; j < productsLocal.length; j++) {
           if (position == productsLocal[j].id) {
             document.getElementById('tableProducts').innerHTML += `
             <tr>
             <th>${con + 1}</th>
             <td><button class="waves-effect waves-light btn gray darken-4" onclick="remove(${productsLocal[j].id})">X</button></td>
             <td><img style="width: 5rem;"src="${productsLocal[j].img}"></td>
             <td>${productsLocal[j].name}</td>
             <td>₪ ${Math.floor(productsLocal[j].price * data.conversion_rates['ILS'])}</td></tr>`
     
             localStorage.setItem('cart', JSON.stringify(productsLocal));
           }
         } con = con + 1;
       }
       document.getElementById('total').innerHTML = `
         <tr>
         <th></th>
         <td></td>
         <td></td>
         <td></td>
         <td> <h5>Total:</h5> </td>
         <td> ₪ ${Math.floor(total() * data.conversion_rates['ILS'])} </td>
         </tr>
         <th></th>
      
             <td id="toILS"><br></td>
         <td></td>
         <td></td>
         <td><button onclick="clean()" class=" yellow accent-4 waves-effect waves-light btn">
       Clean</button>
       </td>
         <td><button href="#modal1" class="modal-trigger green accent-4 waves-effect waves-light btn">Buy</button></td>
         </tr>`
     
    };
    currency();
  }
  

function updatecart() {
  con = 0;
  var cartn = document.getElementById('cart_n');
  var productsLocal = JSON.parse(localStorage.getItem('cart'));
  cartn.innerHTML = `[${productsLocal.length}]`;
  document.getElementById('tableProducts').innerHTML = '';
  for (let i = 0; i < con2.length; i++) {
    var position = con2[i];
    for (let j = 0; j < productsLocal.length; j++) {
      if (position == productsLocal[j].id) {
        document.getElementById('tableProducts').innerHTML += `
        <tr>
        <th>${con + 1}</th>
        <td><button class="waves-effect waves-light btn red darken-4" onclick="remove(${productsLocal[j].id})">X</button></td>
        <td><img style="width: 5rem;"src="${productsLocal[j].img}"></td>
        <td>${productsLocal[j].name}</td>
        <td>$ ${productsLocal[j].price}</td></tr>`

        localStorage.setItem('cart', JSON.stringify(productsLocal));
      }
    } con = con + 1;
  }
  document.getElementById('total').innerHTML = `
    <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td> <h5>Total:</h5> </td>
    <td> $ ${total()}.00 </td>
    </tr>
    <th></th>

    <td><button onclick="convertCurrency()" class="modal-trigger green accent-4 waves-effect waves-light btn"> convert to ILS </button></td>

        <td id="toILS"><br></td>
    <td></td>
    <td></td>
    <td><button onclick="clean()" class=" yellow accent-4 waves-effect waves-light btn">
	Clean</button>
	</td>
    <td><button href="#modal1" class="modal-trigger green accent-4 waves-effect waves-light btn">Buy</button></td>
    </tr>`

}

//RENDER
(() => {
  var productsLocal = JSON.parse(localStorage.getItem('cart'));
  var cartn = document.getElementById('cart_n');
  for (let j = 0; j < productsLocal.length; j++) {
    document.getElementById('tableProducts').innerHTML += `
      <tr>
      <th>${con + 1}</th>
      <td><button class="waves-effect waves-light btn gray darken-4" onclick="remove(${productsLocal[j].id})">X</button></td>
      <td><img style="width: 5rem;"src="${productsLocal[j].img}"></td>
      <td>${productsLocal[j].name}</td>
      <td>$ ${productsLocal[j].price}</td></tr>`
    localStorage.setItem('cart', JSON.stringify(productsLocal));
  }

  document.getElementById('total').innerHTML = `
    <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td> <h5>Total:</h5> </td>
    <td> $ ${total()}.00 </td>
    </tr>
    <th></th>
    <td></td>
     <td></td>
    <td></td>
    <td> <button class="btn waves-effect waves-light" onclick="convertCurrency()"  name="action">convert to ILS </button> </td>
    <td id="toILS"><br></td>
    <td></td>
    <td></td>
    <br>
    <td><br><button onclick="clean()" class=" yellow accent-4 waves-effect waves-light btn">Clean</button></td>
    <td><br><button href="#modal1" class="modal-trigger green accent-4 waves-effect waves-light btn">Buy</button></td>
    </tr>
    `
  cartn.innerHTML = `[${productsLocal.length}]`;
})();

$(document).ready(() => {
  $('.modal').modal();
  var userName = document.getElementById('userName');
  var userEmail = document.getElementById('userEmail');
  var userSelect = document.getElementById('userSelect');
  var d = new Date();
  var t = d.getTime();
  var order = t - 300;

  $("#formCart").submit(function (e) {
    e.preventDefault();
    var pp = JSON.parse(localStorage.getItem("cart"));
    firebase.firestore().collection("sales").add({
      id: t + 1,
      userOrder: order,
      userName: userName.value,
      userEmail: userEmail.value,
      payment: userSelect.value,
      userDate: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      hour: d.getHours() + "." + d.getMinutes() + ":" + d.getSeconds(),
      userYear: d.getFullYear(),
      products: pp,
      total: total()
    })
      .then(() => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: ' Purchase made successfully!',
          text: `Your purchase order is: ${order}`,
          showConfirmButton: true,
          timer: 50000
        });
        $('.modal').modal('close');
        clean();
      })
  });
});
