const phones = [
    {name: 'samsung s5', price: 45000, camera : 10, storage: 64},
    {name: 'oppo f19', price: 18000, camera: 8, storage: 8},
    {name: 'redmi n9', price: 26000, camera: 48, storage: 128},
    {name: 'oneplus 9t', price: 48000, camera: 32, storage: 256},
    {name: 'apple 13pro', price: 128000, camera: 13, storage: 128},
    {name: 'vivo y19', price: 12000, camera: 8, storage: 8}
];

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);
