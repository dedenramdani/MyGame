
/*

Silahkan Input Angka yang ingin Anda Tebak dibawah ini
range angka yang diinput  0 - 9 . Semoga Beruntung


              input disini
                   | 
                   | 
                   v                */
var angkatebakan = 5;  



var random= function (){
  var myArray = ["1","2","3","4","5","6","7","8","9","0"];
  var acak =  myArray[Math.floor(Math.random() * myArray.length)];
  return acak
}

var angkaAcak = random ();

console.log ("Angka Tebakan Anda Anda Adalah : " +angkatebakan);
console.log("Angka Yang Tersembunyi Adalah : " +angkaAcak);


if(angkatebakan == angkaAcak){
  console.log("Selamat Anda Beruntung, Tebakan Anda Benar Sekali");
}

  else{
  console.log("Anda Belum Beruntung, Jawaban Anda Salah");
  console.log("Silahkan Coba di Kehidupan Selanjutnya....:)")
  }



https://jsbin.com/kuquce/edit?js,console