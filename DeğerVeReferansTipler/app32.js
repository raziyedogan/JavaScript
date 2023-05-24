let dizi1 = [1,2,3];
let dizi2 = dizi1;

if(dizi1 == dizi2){
	console.log("eşittir");
}else{
    console.log("eşit değildir");
}
//Output: eşittir. Bunun sebebi dizi1 ve dizi2 nin ram bellekteki adreslerinin aynı olmasıdır.

let dizi3 = [1,2,3];
let dizi4 = [1,2,3];

if(dizi3 == dizi4){
	console.log("eşittir");
}else{
    console.log("eşit değildir");
}
//Output: eşit değildir. Bunun sebebi dizi3 ve dizi4 ün ram bellekteki adreslerinin farklı olmasıdır. O yüzden diziler aynı olmasına rağmen eşit 
//değildir sonucu alınmaktadır. Yani if ile dizilerin değerlerinin eşit olup olmadıklarına bakılmıyor. Referanslarının eşit olup olmadığına bakılıyor.

dizi1.push(15);
console.log(dizi1);  //output: [1,2,3,15]
console.log(dizi2);//output: [1,2,3,15]
//Yukarıdaki işlem sonucunda dizi1'e eklenen eleman aynı zamanda dizi2'de de görünecektir.