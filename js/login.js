//firebaseConfig
var firebaseConfig = {
    apiKey: "AIzaSyDpBJfHpKJTsF1mb5t90OqmbaJ-6H8Mz-E",
  authDomain: "online-store-c2c10.firebaseapp.com",
  databaseURL: "https://online-store-c2c10.firebaseio.com",
  projectId: "online-store-c2c10",
  storageBucket: "online-store-c2c10.appspot.com",
  messagingSenderId: "101264675703",
  appId: "1:101264675703:web:fd74fd22f812af442ac772"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var x = document.getElementById("userName");
var p = document.getElementById("userPassword");

document.getElementById("formLogin").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    firebase.auth().signInWithEmailAndPassword(x.value,p.value).then(()=>{
        swal.fire({
            position: 'center',
            type: 'success',
            title:'Welcome',
            text:`Access Granted`
        });
        x.value='';
        p.value='';
            setTimeout(()=>{
                loadPage();
            },1000);
    }).catch((error)=>{
        swal.fire({
            position:'center',
            icon:'error',
            title:'Error',
            text:`Access Denied`,
        });
        x.value=' ';
        p.value=' ';
    });

    function loadPage(){
        window.location.href="./admin.html";
    }
});