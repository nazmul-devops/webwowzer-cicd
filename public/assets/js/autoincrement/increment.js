const counters = document.querySelectorAll('.countnumber');
const speed = 100;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-targets');
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
});