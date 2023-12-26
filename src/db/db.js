// product 1 images
import nez1 from '../images/nez-1.jpg';
import nez2 from '../images/nez-2.jpg';
import nez3 from '../images/nez-3.jpg';
// product 2 images 
import vez from '../images/vez.jpg';
// product 3 images 
import zdk from '../images/zdk.jpg';
// product 4 images 
import zdd from '../images/zdd.jpg';
// product 5 images 
import zdo from '../images/zdo.jpg';
// product 6 images 
import zdoo from '../images/zdoo.jpg';
// product 7 images 
import zdsh from '../images/zdsh.jpg';
// product 8 images 
import zdr from '../images/zdr.jpg';
// product 9 images 
import vzgsdo from '../images/vzgsdo.jpg';
// product 10 images 
import dzgsdo from '../images/dzgsdo.jpg';
// product 11 images 
import dzgsdoo from '../images/dzgsdoo.jpg';
class Product{
    constructor(id,name,price,count,gift,stars,images,type){
         this.id = id;
         this.name = name;
         this.price = price;
         this.count = count;
         this.gift = gift;
         this.stars = stars;
         this.images = images;
         this.feedback = 12;
         this.color = ['fff','#1B1A20','#E2C355'];
         this.discount = Math.ceil(this.price - this.discountCalc(price)); 
         this.appForLock = 'нет';
         this.material = 'Сталь, силиконовые вставки';
         this.nutrition = 'DC 6V, 4 AAA';
         this.serialNumber = 'JA182765';
         this.unlock = 'Пин-код, карта или браслет Mifaire, ключ, приложение, отпечаток пальца';
         this.memoryOfCard = 2033;
         this.doorType = 'Деревянная, металлическая';
         this.doorWidth = '38-55 мм';
         this.size = '302мм * 43мм * 22.55мм';
         this.weight = '2.5 кг';
         this.equipment = 'Без мартизы, с мартизой';
         this.type = type;
    };
    discountCalc(price){
        return (price/100)*25;
    }
};
let array_db = [
    new Product(1,'Накладные электронные замки',3250,5,true,4,[nez1,nez2,nez3],'electronic-codes-locks'),
    new Product(2,'Врезные электроные замки',5250,55,true,3,[vez],'biometric-locks'),
    new Product(3,'Замки для квартиры',7300,45,true,5,[zdk],'lock-with-imprint'),
    new Product(4,'Замки для дома',3800,15,true,3,[zdd],'electronic-codes-locks'),
    new Product(5,'Замки для отелей',3250,35,true,3,[zdo],'biometric-locks'),
    new Product(6,'Замки для офиса',4800,25,true,2,[zdoo],'lock-with-imprint'),
    new Product(7,'Замки для шкафчиков',5600,65,true,1,[zdsh],'electronic-codes-locks'),
    new Product(8,'Замки для раздевалок',13000,5,true,2,[zdr],'biometric-locks'),
];
let count = 0;
for(let i = 1;i<=18;i++){
        array_db.push(
        new Product(i,'Вариативный замок Golden Soft для отеля',43000,15,true,5,[vzgsdo],'biometric-locks'),
        new Product(i,'Дверной Замок Golden Soft для офиса',23000,15,true,4,[dzgsdo],'lock-with-imprint'),
        new Product(i,'Дверной Замок Golden Soft для офиса',33000,19,true,3,[dzgsdoo],'electronic-codes-locks')
        );
};
for (let id = 0; id < 62; id++) {
    array_db[id].id = id+1;
}
export default JSON.stringify(array_db);