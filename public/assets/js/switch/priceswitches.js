const bs2 = new ButtonStrip({
  id: 'buttonStrip2',
})
bs2.addButton('Monthly', true, 'click', function () {
  console.log('Monthly Package')
})
bs2.addButton('Yearly', false, 'click', function () {
  console.log('Yearly Package')
})
bs2.append('#diypricing')

const bs3 = new ButtonStrip({
  id: 'buttonStrip3',
})
bs3.addButton('Monthly', true, 'click', function () {
  console.log('Monthly Package')
})
bs3.addButton('Yearly', false, 'click', function () {
  console.log('Yearly Package')
})
bs3.append('#ecommercepricing')
