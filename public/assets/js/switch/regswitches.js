const bs1 = new ButtonStrip({
  id: 'buttonStrip1',
})
bs1.addButton('Monthly', true, 'click', function () {
  console.log('Monthly Package')
})
bs1.addButton('Yearly', false, 'click', function () {
  console.log('Yearly Package')
})
bs1.append('#content')
