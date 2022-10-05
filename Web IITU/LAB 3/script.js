/*IF26-30*/
//if26

for(var i = -2; i <=7; i++){
    var x = i/2;
    var y = 0;
    if (x <= 0){
        y = -x;
    }
    else if (x<2){
        y = x*x;
    }
    else{
        y = 4;
    }
    console.log(y);
}
console.log('----------if27------------');
//if27
var x = -1
while (x < 11){
    var x_floor = Math.floor(x)
    var y = 0; 
    if (x < 0){
        y = 0;
    }
    else if(x_floor%2== 0) y = 1
    else y = -1
    console.log("x =" +x+ ": f(x) = " +y);
    x += 1
}
console.log('----------if28------------');
//if28
var L = [2016,300,1300,1900,1200,2000,2019];

for(var i =0; i < L.length; i++){
  
    var j = L[i];
    var s = "не високосный"
    if ((j%4 == 0)  && !(j%100 == 0 && j%400 != 0)) s = "високосный";
    console.log(j+" : "+s);
}
console.log('----------if29------------');
//if29
for(var i = -3; i < 3; i++){
    var s = '';
    if (i == 0) s = "нулевое ";
    else if (i > 0) s = "положительное ";
    else s = "отрицательное ";

    if (i != 0){
        if (i%2 == 0) s += "четное ";
        else s += "нечетное ";
    }
    s += "число"
    console.log(i+" : "+s);
}

console.log('----------if30------------');
//if30
var arr = [1,21,80,99,100,101,800,901,999]

for (var i =0; i < arr.length; i++){
    var j = arr[i];
    if (j%2 == 0) s = "четное ";
    else s = "нечетное ";

    var i_str = j+"";
    n = i_str.length;
    if (n == 1) s += "однозначное "
    else if (n == 2) s += "двузначное ";
    else if (n == 3) s += "трехзначное ";
    
    s += "число"
    console.log(j+" : "+s)
}
console.log('case16-20');
//case 16
var y=5;
    console.log('Возраст')
    
 
    switch (y / 10) {
    case 2:
        console.log("двадцать ");
        break;
    case 3:
        console.log("тридцать ");
        break;
    case 4:
        console.log("сорок ");
        break;
    case 5:
        console.log("пятдесят ");
        break;
    case 6:
        console.log("шестьдесят ");
        break;
    }
 
    switch (y % 10) {
    case 1:
        console.log("один ");
        break;
    case 2:
        console.log("два ");
        break;
    case 3:
        console.log("три ");
        break;
    case 4:
        console.log("четыре ");
        break;
    case 5:
        console.log("пять ");
        break;
    case 6:
        console.log("шесть ");
        break;
    case 7:
        console.log("семь ");
        break;
    case 8:
        console.log("восемь ");
        break;
    case 9:
        console.log("девять ");
        break;
    }
 
    switch (y % 10) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("лет. ");
        break;
    case 1:
        console.log("год. ");
        break;
    case 2:
    case 3:
    case 4:
        console.log("года. ");
        break;
    }

//case 17
    var n=10;
    
 
    if (n / 10 == 1)
        switch (n) {
        case 10:
            console.log("десять учебных заданий.");
            break;
        case 11:
            console.log("одинадцать учебных заданий.");
            break;
        case 12:
            console.log("двенадцать учебных заданий.");
            break;
        case 13:
            console.log("тринадцать учебных заданий.");
            break;
        case 14:
            console.log("четырнадцать учебных заданий.");
            break;
        case 15:
            console.log("пятнадцать учебных заданий.");
            break;
        case 16:
            console.log("шестнадцать учебных заданий.");
            break;
        case 17:
            console.log("семнадцать учебных заданий.");
            break;
        case 18:
            console.log("восемнадцать учебных заданий.");
            break;
        case 19:
            console.log("девятнадцать учебных заданий.");
            break;
        }
    else {
        switch (n / 10) {
        case 2:
            console.log("двадцать ");
            break;
        case 3:
            console.log("тридцать ");
            break;
        case 4:
            console.log("сорок ");
            break;
        }
 
        switch (n % 10) {
        case 1:
            console.log(  "одно ");
            break;
        case 2:
            console.log( "два ");
            break;
        case 3:
            console.log(  "три ");
            break;
        case 4:
            console.log("четыре ");
            break;
        case 5:
            console.log( "пять ");
            break;
        case 6:
            console.log( "шесть ");
            break;
        case 7:
            console.log("семь ");
            break;
        case 8:
            console.log("восемь ");
            break;
        case 9:
            console.log("девять ");
            break;
        }
 
        switch (n % 10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log("учебных заданий.");
            break;
        case 1:
            console.log("учебное задание.");
            break;
        case 2:
        case 3:
        case 4:
            console.log("учебных задания.");
            break;
        }
    }

//case 18
    n=30; 
    switch (n / 100) {
    case 1:
        console.log("сто ");
        break;
    case 2:
        console.log("двести ");
        break;
    case 3:
        console.log("триста ");
        break;
    case 4:
        console.log("четыреста ");
        break;
    case 5:
        console.log("пятьсот ");
        break;
    case 6:
        console.log("шестьсот ");
        break;
    case 7:
        console.log("семьсот ");
        break;
    case 8:
        console.log("восемьсот  ");
        break;
    case 9:
        console.log("девятьсот  ");
        break;
    }
 
    if ((n % 100) / 10 == 1)
        switch (n % 100) {
        case 10:
            console.log( "десять");
            break;
        case 11:
            console.log( "одинадцать");
            break;
        case 12:
            console.log( "двенадцать");
            break;
        case 13:
            console.log( "тринадцать");
            break;
        case 14:
            console.log( "четырнадцать");
            break;
        case 15:
            console.log( "пятнадцать");
            break;
        case 16:
            console.log( "шестнадцать");
            break;
        case 17:
            console.log( "семнадцать");
            break;
        case 18:
            console.log( "восемнадцать");
            break;
        case 19:
            console.log( "девятнадцать");
            break;
        }
    else {
        switch ((n % 100) / 10) {
        case 2:
            console.log( "двадцать ");
            break;
        case 3:
            console.log( "тридцать ");
            break;
        case 4:
            console.log( "сорок ");
            break;
        case 5:
            console.log( "пятьдесят ");
            break;
        case 6:
            console.log( "шестьдесят ");
            break;
        case 7:
            console.log( "семьдесят ");
            break;
        case 8:
            console.log( "восемьдесят ");
            break;
        case 9:
            console.log( "девяносто ");
            break;
        }
 
        switch (n % 10) {
        case 1:
            console.log( "один");
            break;
        case 2:
            console.log( "два");
            break;
        case 3:
            console.log( "три");
            break;
        case 4:
            console.log( "четыре");
            break;
        case 5:
            console.log( "пять");
            break;
        case 6:
            console.log( "шесть");
            break;
        case 7:
            console.log( "семь");
            break;
        case 8:
            console.log( "восемь");
            break;
        case 9:
            console.log("девять");
            break;
        }
    }
//case 19
    n = 6
 
    console.log( "год ");
 
    switch ((n) % 10) {
    case 0:
    case 1:
        console.log( "бел");
        break;
    case 2:
    case 3:
        console.log( "черн");
        break;
    case 4:
    case 5:
        console.log( "зелён");
        break;
    case 6:
    case 7:
        console.log( "красн");
        break;
    case 8:
    case 9:
        console.log( "жёлт");
        break;
    }
 
    switch ((n + 1) % 5) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 9:
    case 10:
    case 11:
        console.log( "ой ");
        break;
    case 6:
    case 7:
    case 8:
        console.log( "ого ");
        break;
    }
 
    switch ((n + 8) % 12) {
    case 0:
        console.log( "крысы");
        break;
    case 1:
        console.log( "коровы");
        break;
    case 2:
        console.log( "тигра");
        break;
    case 3:
        console.log( "зайца");
        break;
    case 4:
        console.log( "дракона");
        break;
    case 5:
        console.log( "змеи");
        break;
    case 6:
        console.log( "лошади");
        break;
    case 7:
        console.log( "овцы");
        break;
    case 8:
        console.log( "обезьяны");
        break;
    case 9:
        console.log( "курицы");
        break;
    case 10:
        console.log( "собаки");
        break;
    case 11:
        console.log( "свиньи");
        break;
    }

//case20
var d = 5, m = 8;
    
 
    switch (m) {
    case 1:
        if (d > 19)
            console.log( "Водолей");
        else 
            console.log( "Козерог");
        break;
    case 2:
        if (d > 18) 
            console.log( "Рыбы");
        else 
            console.log( "Водолей");
        break;
    case 3:
        if (d > 20) 
            console.log( "Овен");
        else  
            console.log( "Рыбы");
        break;
    case 4:
        if (d > 19) 
            console.log( "Телец");
        else  
            console.log( "Овен");
        break;
    case 5:
        if (d > 20) 
            console.log( "Близнецы");
        else  
            console.log( "Телец");
        break;
    case 6:
        if (d > 21)
            console.log( "Рак");
        else 
            console.log( "Близнецы");
        break;
    case 7:
        if (d > 22) 
            console.log( "Лев");
        else 
            console.log( "Рак");
        break;
    case 8:
        if (d > 22) 
            console.log( "Дева");
        else 
            console.log( "Лев");
        break;
    case 9:
        if (d > 22) 
            console.log( "Весы");
        else 
            console.log( "Дева");
        break;
    case 10:
        if (d > 22) 
            console.log( "Скорпион");
        else 
            console.log( "Весы");
        break;
    case 11:
        if (d > 22)
            console.log( "Стрелец");
        else 
            console.log( "Скорпион");
        break;
    case 12:
        if (d > 21)
            console.log( "Козерог");
        else 
            console.log( "Стрелец");
        break;
    }

console.log('For36-40')
//for36
var a = 10;
var b = 15;
var sum = 0, value;
for(let i = 1; i <=a; i++){
    value = i;
    for(let j =1;j <=b; j++){
        value*=i;
        sum +=value;
    }
    console.log(sum);
}
//for37
var num = 150;
var sum = 0, y = 1;
for(let i = 1; i < num; i++){
    for(let j = 1; j <= i; j++){
        y*=i;
    sum+=y;
    
    }
    console.log("Sum = " + sum);
}
//For38.
var num = 10;

var sum = 0;
var value;
for(i = 1; i <=num; i++){
    value = i;
    for(j = 1; j <= num-1;j++)
    value *= i;
    sum +=value;
}
console.log(sum);
//For39. 
var a = 2;
var b = 8;
for(let i = a; i < b; i++){
    for(let j =0;j <i; j++){
        console.log(i);
    }
}

//For40
var a = 2;
var b = 8;
for(let i = 1; i < b-a+1; i++){
    for(let j =1;j <=i; j++){
        console.log(a+i-1);
    }
}
console.log('while26-30');

//While26.
var n = 20;
var val1 = 1, val2 = 1, fun  =0;
while(fun < n){
    fun = val2+val1;
    val2 = val1;
    val1 =fun;
}
console.log("Fk - 1 = " + val2+"\n");
console.log("Fk + 1 =" + (val1+val2));


//While27.
var n = 12;
var val1 = 1, val2 = 1, fun = 0, key = 2;
while(fun < n){
    key++;
    fun = val1+val2;
    val2=val1;
    val1 = fun;
}
console.log("Value K: " + key);

//While28.
var E = 5; /*It could be any number*/
var A1 = 0, A2=2, key = 1;
while((A2-A1)>=E){
    key++;
    A1= A2;
    A2=2+1/A1;
}
console.log("Key: " + key + "\n" + 
    "k-1: " + A1 + "\n" 
    + "A: " + A2)

//While29.
var E = 5;
var A1 = 1, A2 = 2, A3;
var key = 2;
while((A2 - A1)>= E){
    A3 = A1;
    A1 = A2;
    A2 = (A3 + 2 * A1)/3;
    key++;
}
console.log("Key: " + key + "\n" + 
    "K-1: " + A1 + "\n"+ 
    "A2: " + A2 
)

//While30.
var A = 6, B =3, C= 2;
var key = 0, temporary;
while((A-C) >= 0){
    A-=C;
    temporary = B;
    while(temporary - C >=0){
        temporary-=C;
        key++;
    }
}
console.log(
    "Key: " + key
)
return 0;
