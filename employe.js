// create
var FirstName=document.getElementById('nom')
var LastName=document.getElementById('LastName')
var E_mail=document.getElementById('email')
var adresse=document.getElementById('adresse')
 function donner(){
    var validation=true
    if (FirstName.value!='') {
        FirstName.classList.add('is-valid')
        FirstName.classList.remove('is-invalid')
    } else {
        FirstName.classList.add('is-invalid')
        FirstName.classList.remove('is-valid')
        validation=false
    }
    if (LastName.value!='') {
        LastName.classList.add('is-valid')
        LastName.classList.remove('is-invalid')
    } else {
        LastName.classList.add('is-invalid')
        LastName.classList.remove('is-valid')
        validation=false
    }
    if ((E_mail.value!='')&&(E_mail.value.indexOf('@') != -1)) {
        E_mail.classList.add('is-valid')
        E_mail.classList.remove('is-invalid')
    } else {
        E_mail.classList.add('is-invalid')
        E_mail.classList.remove('is-valid')
        validation=false
    }
    if (adresse.value!='') {
        adresse.classList.add('is-valid')
        adresse.classList.remove('is-invalid')
    } else {
        adresse.classList.add('is-invalid')
        adresse.classList.remove('is-valid')
        validation=false
    }
    if (validation == true) {
        var employes=JSON.parse(localStorage.getItem('employes'))||[]
        var id = Math.random().toString(36).substring(2)
        var employe={
            FirstName:FirstName.value
           , LastName:LastName.value
           ,E_mail:E_mail.value
           ,adresse:adresse.value
           ,ID:id
        }
        employes.push(employe)
        localStorage.setItem('employes',JSON.stringify(employes))
        window.location.reload()
        document.location.href='#tab1'
       
      }
 }
 //read
 var employes=JSON.parse(localStorage.getItem('employes'))
 function chargment(){
   
    var affich=``
    var i=0
    employes.forEach(Element=>
        {
        affich+=`
        <tr>
          <td>${i+1}</td>
          <td>${Element.FirstName}</td>
          <td>${Element.LastName}</td>
          <td>${Element.E_mail}</td>
          <td>${Element.adresse}</td>
          <td> <button type="button" class="btn btn-success MAJ" data-id="${Element.ID}"   data-bs-toggle="modal" data-bs-target="#UpdateProduit"> UpDate  </button> </td>
          <td> <button type="button" class="btn btn-danger"  onclick="Delete(${i})">  Delete  </button> </td>
          </tr>
        `
        i++
        })  
        document.getElementById('tab1').innerHTML=affich

 }
 //delete
 function Delete(x){
    employes.splice(x,1);
    localStorage.setItem('employes',JSON.stringify(employes));
    chargment();
  }
  //update
var UpdateFirstName = document.getElementById('updateFirstname')
var UpdateLastName = document.getElementById('updateLastname')
var UpdateEmail = document.getElementById('updatenemail')
var Updateadresse = document.getElementById('updateadresse')

  let id;
function update(y){
  var employe = employes.find(Element => Element.ID == y);
  UpdateFirstName.value = employe.FirstName;
  UpdateLastName.value = employe.LastName;
  UpdateEmail.value = employe.E_mail;
  Updateadresse.value = employe.adresse;
  id=y;
}
function updatedonner(){
    var employe = employes.find(Element => Element.ID == id);
    employe.FirstName = document.getElementById('updateFirstname').value ;
    employe.LastName= document.getElementById('updateLastname').value;
    employe.E_mail= document.getElementById('updatenemail').value;
    employe.adresse= document.getElementById('updateadresse').value;
    
    localStorage.setItem('employes',JSON.stringify(employes));
    window.location.reload() ;
  }