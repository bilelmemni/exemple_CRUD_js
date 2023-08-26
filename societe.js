// create
var CompanyName=document.getElementById('nom')
var adresse=document.getElementById('adresse')
var E_mail=document.getElementById('email')
var employe=document.getElementById('employe')
 function donner(){
    var validation=true
    if (CompanyName.value!='') {
        CompanyName.classList.add('is-valid')
        CompanyName.classList.remove('is-invalid')
    } else {
        CompanyName.classList.add('is-invalid')
        CompanyName.classList.remove('is-valid')
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
    if ((E_mail.value!='')&&(E_mail.value.indexOf('@') != -1)) {
        E_mail.classList.add('is-valid')
        E_mail.classList.remove('is-invalid')
    } else {
        E_mail.classList.add('is-invalid')
        E_mail.classList.remove('is-valid')
        validation=false
    }
    
    if (employe.value!='') {
        employe.classList.add('is-valid')
        employe.classList.remove('is-invalid')
    } else {
        employe.classList.add('is-invalid')
        employe.classList.remove('is-valid')
        validation=false
    }
    if (validation == true) {
        var societes=JSON.parse(localStorage.getItem('societes'))||[]
        var id = Math.random().toString(36).substring(2)
        var societe={
            CompanyName:CompanyName.value
           , adresse:adresse.value
           ,E_mail:E_mail.value
           ,employe:employe.value
           ,ID:id
        }
        societes.push(societe)
        localStorage.setItem('societes',JSON.stringify(societes))
        window.location.reload()
        document.location.href='#tab1'
       
      }
 }
 //read
 var societes=JSON.parse(localStorage.getItem('societes'))
 function chargment(){
   
    var affich=``
    var i=0
    societes.forEach(Element=>
        {
        affich+=`
        <tr>
          <td>${i+1}</td>
          <td>${Element.CompanyName}</td>
          <td>${Element.adresse}</td>
          <td>${Element.E_mail}</td>
          <td>${Element.employe}</td>
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
    societes.splice(x,1);
    localStorage.setItem('societes',JSON.stringify(societes));
    chargment();
  }
  //update
var Updatecompany = document.getElementById('updatecompany')
var Updateadresse = document.getElementById('updateadresse')
var UpdateEmail = document.getElementById('updateemail')
var Updateemploye = document.getElementById('updateempploye')

  let id;
function update(y){
  var societe = societes.find(Element => Element.ID == y);
  Updatecompany.value = societe.CompanyName;
  Updateadresse.value = societe.adresse;
  UpdateEmail.value = societe.E_mail;
  Updateemploye.value = societe.employe;
  id=y;
}
function updatedonner(){
    var societe = societes.find(Element => Element.ID == id);
    societe.CompanyName = document.getElementById('updatecompany').value ;
    societe.adresse= document.getElementById('updateadresse').value;
    societe.E_mail= document.getElementById('updateemail').value;
    societe.employe= document.getElementById('updateempploye').value;
    
    localStorage.setItem('societes',JSON.stringify(societes));
    window.location.reload() ;
  }