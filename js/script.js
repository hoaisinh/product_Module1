class Phone{
    constructor(id,name,description,operatingSystem,batteryType){
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
}
let productList = Array();
let operatingSystem = Array('Android','IOS');
let batteryType = Array('Type 1','Type 2','Type 3');
function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
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



function showProduct(elementID,productList){
    let productEle = document.getElementById(elementID);
    let showProduct = "";
   
   for(let j = 0;j< productList.length;j++){
       
        let phone = productList[j];
        showProduct += '<div class="productList row col-12">'
        +'<div class="col-1 id">'+phone.getID()+'</div>'
        +'<div class="col-2 name">'+phone.getName()+'</div>'
        +'<div class="col-2 description">'+phone.getDescription()+'</div>'
        +'<div class="col-2 operating">'+phone.getOperatingSystem()+'</div>'
        +'<div class="col-2 battery">'+phone.getBatteryType()+'</div>'
        +'<div class="col-3 crudHere">'
        + '<button type="" onclick="viewProduct('+phone.getID()+')"><i class="bi bi-eye-fill"></i></button>'
        + '<button type="" onclick="editProduct('+phone.getID()+')"><i class="bi bi-pencil-square"></i></button>'
        + '<button type="" onclick="deleteProduct('+phone.getID()+')"><i class="bi bi-x-circle-fill"></i></button>'
        +'</div>'
        +'</div>';
   }
   productEle.innerHTML = showProduct;
}
function deleteProduct(productID){
    for (let index = 0; index < productList.length; index++) {
        if(productList[index].getID() == productID){
            productList.splice(index,1);
        }
        
    }
showProduct('productListHere',productList);
}
