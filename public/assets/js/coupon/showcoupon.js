const couponButton = document.querySelector('.btn-coupon')
couponButton.addEventListener('click', showCoupon)

function showCoupon() {
  const collapseCoupon = document.querySelector('#collapseCoupon')

  if (collapseCoupon.classList.contains('d-none')) {
    collapseCoupon.classList.remove('d-none')
    this.classList.add('d-none')
  } else {
    collapseCoupon.classList.add('d-none')
  }
}
