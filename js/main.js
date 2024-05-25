//Class
class Phone{
    constructor(id,name,description,operatingSystem,batteryType,photo){
         this.id = id;
         this.name = name;
         this.description = description;
         this.operatingSystem = operatingSystem;
         this.batteryType = batteryType;
    }
    getID(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getOperatingSystem(){
        return this.operatingSystem;
    }
    getBatteryType(){
        return this.batteryType;
    }
    getPhoto(){
        return this.photo;
    }
    setID(newID){
        this.id = newID;
    }
    setName(newName){
       this.name = newName;
    }
    setDescription(newDes){
         this.description = newDes;
    }
    setOperatingSystem(newOpe){
         this.operatingSystem = newOpe;
    }
    setBatteryType(newPin){
        this.batteryType = newPin;
    }
    setPhoto(newPhoto){
        this.photo = newPhoto;
    }
}
//-----------------------------------------------------SEPARATOR-----------------------------------------------------
//Function
function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  function showProduct(elementID,productList){
    let productEle = document.getElementById(elementID);
    let showProduct = "";
   
   for(let j = 0;j< productList.length;j++){
       
        let phone = productList[j];
        let popupID = "'popup'";
        showProduct += '<div class="productList row col-12">'
        +'<div class="col-1 id">'+phone.getID()+'</div>'
        +'<div class="col-2 name">'+phone.getName()+'</div>'
        +'<div class="col-2 description">'+phone.getDescription()+'</div>'
        +'<div class="col-2 operating">'+phone.getOperatingSystem()+'</div>'
        +'<div class="col-2 battery">'+phone.getBatteryType()+'</div>'
        +'<div class="col-3 crudHere">'
   
        + '<button type="" onclick="showEditPrd('+phone.getID()+')"><i class="bi bi-pencil-square"></i></button>'
        + '<button type="" onclick="showPopup('+popupID+','+phone.getID()+')"><i class="bi bi-x-circle-fill"></i></button>'
        +'</div>'
        +'</div>';
   }
   productEle.innerHTML = showProduct;
}
function getProductByID(id){
    for (let index = 0; index < productList.length; index++) {
        if(productList[index].getID() == id){
            return productList[index];
        }
    }
}
function deleteProduct(productID){
    for (let index = 0; index < productList.length; index++) {
        if(productList[index].getID() == productID){
            productList.splice(index,1);
        } 
    }
    hidePopup();
    showProduct('productListHere',productList);
}

function showPopup(id,productID){
   //console.log(id);
    let productName = getProductByID(productID).getName();
    let htmlPopup = '<div class="col-12">Bạn có muốn xóa sản phẩm '+productName
    +'</div>'
    +'<div class="col-9"></div>'
    +'<button class="col btn btn-sm btn-danger me-2" type="" onclick="deleteProduct('+productID+')">Xóa</button>'
    +'<button class="col btn btn-sm btn-secondary" type="" onclick="hidePopup()">Hủy</button>';


       let popup = document.getElementById(id);
       if(popup.classList.contains('hidePopup')){
           popup.classList.remove('hidePopup');
           popup.classList.add('showPopup');
           document.getElementById('popupContent').style.height = '80px';
           document.getElementById('popupContent').style.padding = '16px';
           setTimeout(() => {
            document.getElementById('popupContent').innerHTML = htmlPopup;
           }, 500);
        
        
       }

}
function hidePopup(){
    if(popup.classList.contains('showPopup')){
        popup.classList.remove('showPopup');
        popup.classList.add('hidePopup');
        document.getElementById('popupContent').style.padding = '0';
        document.getElementById('popupContent').innerHTML = '';
        document.getElementById('popupContent').style.height = '0';
    }
}

function showAddPrd(){
    let showPrd = document.getElementById('addProduct');
    let editPrd = document.getElementById('editProduct');
    showPrd.style.height = 'auto';
    editPrd.style.height = '0';
}
function validateForm(form){
    let phoneName = form.querySelector('#phoneName').value;
    let nameEr = form.querySelector('#phoneNameAl');

    let phoneDescription = form.querySelector('#phoneDescription').value;
    let desEr = form.querySelector('#phoneDescriptionAl');

    let HDH = form.querySelector('#HDH').value;
    let HDHEr = form.querySelector('#HDHAl');

    let pin = form.querySelector('#pin').value;
    let pinEr = form.querySelector('#pinAl');
    
    if(phoneName == ""){
       nameEr.innerHTML = "Đây là trường bắt buộc";
       return false;
    }else{
        nameEr.innerHTML = "";
    }

    if(phoneDescription == ""){
        desEr.innerHTML = "Đây là trường bắt buộc";
        return false;
     }else{
        desEr.innerHTML = "";
     }

     if(HDH == ""){
        HDHEr.innerHTML = "Đây là trường bắt buộc";
        return false;
     }else{
        HDHEr.innerHTML = "";
     }

     if(pin == ""){
        pinEr.innerHTML = "Đây là trường bắt buộc";
        return false;
     }else{
        pinEr.innerHTML = "";
     }

     return true;
}
function addProduct(form){

    let validate = validateForm(form);
    if(!validate){
        return false;
    }

    let phoneName = form.querySelector('#phoneName').value;
    let phoneDescription = form.querySelector('#phoneDescription').value;
    let HDH = form.querySelector('#HDH').value;
    let pin = form.querySelector('#pin').value;

     //create new product ID
  
     let newID = productList[productList.length-1].getID()+1;
     console.log(newID);
     let newPhone = new Phone(
        newID,
        phoneName,
        phoneDescription,
        HDH,
        pin
     )
     productList.push(newPhone);
     showProduct('productListHere',productList);
     form.querySelector('#phoneName').value="";
     form.querySelector('#phoneDescription').value="";
     form.querySelector('#HDH').value="";
     form.querySelector('#pin').value="";
     alert('Bạn đã thêm sản phẩm');
     return false;
   
   
}
function showEditPrd(id){
    let showPrd = document.getElementById('addProduct');
    let editPrd = document.getElementById('editProduct');
    showPrd.style.height = '0';
    editPrd.style.height = 'auto';
    editPrd.querySelector('#productID').value = id;

    for (let index = 0; index < productList.length; index++) {
        if(productList[index].getID() == id){
            var product =  productList[index]
        } 
    }
    editPrd.querySelector('#phoneName').value = product.getName();
    editPrd.querySelector('#phoneDescription').value = product.getDescription();
    editPrd.querySelector('#HDH').value = product.getOperatingSystem();
    editPrd.querySelector('#pin').value = product.getBatteryType();
}
function editProduct(form){
    let validate = validateForm(form);
    if(!validate){
        return false;
    }
    let id = form.querySelector('#productID').value;
    let phoneName = form.querySelector('#phoneName').value;
    let phoneDescription = form.querySelector('#phoneDescription').value;
    let HDH = form.querySelector('#HDH').value;
    let pin = form.querySelector('#pin').value;

    for (let index = 0; index < productList.length; index++) {
        if(productList[index].getID() == id){
            var product =  productList[index]
        } 
    }
    product.setName(phoneName);
    product.setDescription(phoneDescription);
    product.setOperatingSystem(HDH);
    product.setBatteryType(pin);

    
     showProduct('productListHere',productList);
     alert('Bạn đã sửa sản phẩm');
     return false;
    
}
//-----------------------------------------------------SEPARATOR-----------------------------------------------------
  
//Create product list
let productList = Array();
let operatingSystem = Array('Android','IOS');
let batteryType = Array('Type 1','Type 2','Type 3');
let productPhoto = Array('file:///D:/codeGym_ln/md1/uploads/productPhoto/phone1.jpg',
                        'file:///D:/codeGym_ln/md1/uploads/productPhoto/phone2.jpg',
                        'file:///D:/codeGym_ln/md1/uploads/productPhoto/phone3.jpg'
                        )

for(let i = 1; i<=20;i++){
    let phoneDetails = new Phone(
        i,
       'Điện Thoại '+ i,
        'Mô Tả ' + i,   
        operatingSystem[randInteger(0,1)],
        batteryType[randInteger(0,2)],
    );

   productList.push(phoneDetails);
}
console.log(productList);
//-----------------------------------------------------SEPARATOR-----------------------------------------------------


