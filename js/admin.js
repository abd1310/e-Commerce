//firebaseConfig
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
 
var finaldata;
var sales = []
firebase.firestore().collection("sales").onSnapshot(function (querySnapshot) {
		querySnapshot.forEach(function (doc) {
			//console.log(doc.data())
			sales.push(doc.data())
		})
		finaldata = sales
		console.log(finaldata)
	});

function format(d) {
	return `<table>
	<tr>
	  <td> Client:</td>
	  <td> ${d.userName}</td>
	</tr>
	<tr>
      <td>E-mail:</d>
      <td> ${d.userEmail}</td>
    </tr>
    <tr>
      <td>Year:</td>
      <td>${d.userYear}</td>
    </tr>
    <tr>
      <td>Date:</td>
      <td>${d.userDate}</td>
    </tr>
    <tr>
      <td>Hour:</td>
      <td>${d.hour}</td>
    </tr>
    <tr>
      <td>Payment method:</td>
      <td>${d.payment}</td>
    </tr>
    <tr>
    <td>Order:</td>
    <td>${d.userOrder}</td>
	</tr>
    <tr>
    <td>Id:</td>
    <td>${d.id}</td>
	</tr>
    <tr>
    <td>Products:</td>
    <td>
	${d.products.map(function (product) {
		//console.log(d.products)
		return `<ul>
		<li>Product : ${ product.name}</li>
		<li>Price : ${ product.price}$</li>
		</ul>`;
	})}</td>
   </tr>
 </table>`;
}

$(document).ready(function () {
	setTimeout(function () {
		var table = $('#tableAdmin').DataTable({
			"data": finaldata,
			select: "single",
			"columns": [
				{
					"className": 'details-control',
					"orderable": false,
					"data": null,
					"defaultContent": '',
					"render": function () { 
					return '<i style="hover:pointer" class=" fa fa-plus-sqaure" aria-hidden="true"></i>'; 
					},
					width: "15px"
				},
				{ "data": "id" },
				{ "data": "userOrder" },
				{ "data": "userDate" },
				{ "data": "userName" },
				{ "data": "payment" },
				{ "data": "total" }
			],
			"order": [[1, 'desc']]
		});
		//add event listener for opening and closing 
		$('#tableAdmin tbody').on('click', 'td.details-control', function () {
			var tr = $(this).closest('tr');
			var tdi = tr.find("i.fa")
			var row = table.row(tr);

			if (row.child.isShown()) {
				//close row
				row.child.hide();
				tr.removeClass('shown');
				tdi.first().removeClass('fa-minus-square');
				tdi.first().addClass('fa-plus-sqaure');
			}else {
				//open row
				row.child(format(row.data())).show();
				tr.addClass('shown');
				tdi.first().removeClass(' fa-plus-sqaure');
				tdi.first().addClass(' fa-minus-square');
			}
		});
	}, 1000)
});

