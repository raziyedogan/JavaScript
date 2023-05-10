let dizel=24.53, benzin=22.25, lpg=11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1- Dizel"+yeniSatir+"2- Benzin"+yeniSatir+"3- LPG"+yeniSatir+"Yakıt türünü seçiniz.";
let yakitTipi = prompt(yakitMetni);

if(yakitTipi ==1 || yakitTipi ==2 || yakitTipi ==3){

    let yakitLitresi = Number(prompt("Yakıt litresi giriniz."));
    let bakiye = Number(prompt("Bakiyenizi giriniz."));

    if(yakitTipi == true){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli koşulu
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı."+ yeniSatir+"Kalan bakiye:"+bakiye);
        }
        else{
            //bakiye yeterli olmama koşulu
            alert("bakiyeniz yeterli değildi.r"+yeniSatir+"Ödenecek tutar:"+odenecekTutar+yeniSatir+"Bakiye:"+bakiye+yeniSatir+"Eksik tutar:"+(odenecekTutar-bakiye));

        }
    }
    else if(yakitTipi=="2"){
        //Benzin
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli koşulu
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı."+ yeniSatir+"Kalan bakiye:"+bakiye);
        }
        else{
            //bakiye yeterli olmama koşulu
            alert("bakiyeniz yeterli değildir."+yeniSatir+"Ödenecek tutar:"+odenecekTutar+yeniSatir+"Bakiye:"+bakiye+yeniSatir+"Eksik tutar:"+(odenecekTutar-bakiye));

        }
    }
    else if(yakitTipi=="3"){
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli koşulu
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı."+ yeniSatir+"Kalan bakiye:"+bakiye);
        }
        else{
            //bakiye yeterli olmama koşulu
            alert("bakiyeniz yeterli değildir."+yeniSatir+"Ödenecek tutar:"+odenecekTutar+yeniSatir+"Bakiye:"+bakiye+yeniSatir+"Eksik tutar:"+(odenecekTutar-bakiye));

        }
    }
}
else{
    alert("Geçerli bir yakıt türü seçiniz.");
}