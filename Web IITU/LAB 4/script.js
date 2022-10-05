var i = 0;
var txt = 'This is a simple page about me.'; 
var second_txt = 'My name is Dauren Daniyarbekov. I am a third year student at International Information Technology University. I was born in Taraz in 2003. So, I lived there for 18 years. Im just a regular guy, who went to the regular school, graduated ang enrolled to University';
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var j = 0;
var sped = 30;
setTimeout(TypeWriter, 1000);

function TypeWriter() {
    if (j < second_txt.length) {
      document.getElementById("anchor").innerHTML += second_txt.charAt(j);
      j++;
      setTimeout(TypeWriter, sped);
    }
  }



  document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
  
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
  
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })


  //Dark button
  function myFunction() {
    var element = document.body;
    var doc_block1 = document.getElementById('block1');
    doc_block1.classList.toggle('block1_dark');
    element.classList.toggle("dark-mode");
 }

 //Pop up
 let open_modal = document.querySelectorAll('.open_modal');
 let close_modal = document.getElementById('close_modal');
 let modal = document.getElementById('modal');
 let body = document.getElementsByTagName('body')[0];
 for (let i = 0; i < open_modal.length; i++) {
     open_modal[i].onclick = function() { // клик на открытие
         modal.classList.add('modal_vis'); // добавляем видимость окна
         modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
         body.classList.add('body_block'); // убираем прокрутку
     };
 }
 close_modal.onclick = function() { // клик на закрытие
     modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
     window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
         modal.classList.remove('modal_vis'); 
         body.classList.remove('body_block'); // возвращаем прокрутку
     }, 500);
 };