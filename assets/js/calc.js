var hitung = document.getElementById('hitung'),
	hasil = document.getElementById('hasil'),
	equals;

function angka(val){
	hitung.value += val;

	equals = eval(hitung.value);
	hasil.value = equals;
}

function calc(val){
	if(hitung.value.length > 0)
		hitung.value += val;
}

function numb(val){

}

function hasil(){

}

function del(){
	hitung.value = hitung.value.substring(0, hitung.value.length-1);

	equals = eval(hitung.value);
	hasil.value = equals;
}

function clr(){
	hitung.value = '';
	hasil.value = 0;
}