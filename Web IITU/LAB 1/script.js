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