window.addEventListener('mousemove', function (e) {
  const x = e.clientX,
    y = e.clientY,
    width = window.innerWidth,
    height = window.innerHeight,
    rate = 20;

  let moon = document.querySelector('.moon'),
    earth = document.querySelector('.earth');

  moon.style.transform = 'translateX(' + -(x - width / 2) / rate + '%) translateY(' + -(y - height / 2) / rate + '%)';
  earth.style.transform = 'translateX(' + -(x - width / 2) / 100 + '%) translateY(' + -(y - height / 2) / 100 + '%)';
})