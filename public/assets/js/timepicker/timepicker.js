const mytimepicker = document.querySelector('.mytimepicker')
function activate() {
  document.head.insertAdjacentHTML(
    'beforeend',
    `
		<style>
			.time-picker {
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.25rem;
				padding: 10px;
				background: #F5F5F5;
				border-radius: 6px;
				width: 100%;
			}

			.time-picker__select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				outline: none;
				text-align: center;
				border: 1px solid #E1E1E1;
				border-radius: 6px;
				padding: 6px 10px;
				background: #ffffff;
				cursor: pointer;
				font-family: 'Arsenal', sans-serif;
			}
		</style>
	`
  )

  document.querySelectorAll('.time-pickable').forEach((timePickable) => {
    let activePicker = null

    timePickable.addEventListener('focus', () => {
      if (activePicker) return

      activePicker = show(timePickable)

      const onClickAway = ({ target }) => {
        if (
          target === activePicker ||
          target === timePickable ||
          activePicker.contains(target)
        ) {
          return
        }

        document.removeEventListener('mousedown', onClickAway)
        mytimepicker.removeChild(activePicker)
        activePicker = null
      }

      document.addEventListener('mousedown', onClickAway)
    })
  })
}

function show(timePickable) {
  const picker = buildPicker(timePickable)
  const { bottom: top, left } = timePickable.getBoundingClientRect()

  picker.style.top = `100%`
  picker.style.left = `0`

  mytimepicker.appendChild(picker)

  return picker
}

function buildPicker(timePickable) {
  const picker = document.createElement('div')
  const hourOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    numberToOption
  )
  const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
    numberToOption
  )

  picker.classList.add('time-picker')
  picker.innerHTML = `
		<select class="time-picker__select">
			${hourOptions.join('')}
		</select>
		:
		<select class="time-picker__select">
			${minuteOptions.join('')}
		</select>
		<select class="time-picker__select">
			<option value="am">am</option>
			<option value="pm">pm</option>
		</select>
	`

  const selects = getSelectsFromPicker(picker)

  selects.hour.addEventListener(
    'change',
    () => (timePickable.value = getTimeStringFromPicker(picker))
  )
  selects.minute.addEventListener(
    'change',
    () => (timePickable.value = getTimeStringFromPicker(picker))
  )
  selects.meridiem.addEventListener(
    'change',
    () => (timePickable.value = getTimeStringFromPicker(picker))
  )

  if (timePickable.value) {
    const { hour, minute, meridiem } = getTimePartsFromPickable(timePickable)

    selects.hour.value = hour
    selects.minute.value = minute
    selects.meridiem.value = meridiem
  }

  return picker
}

function getTimePartsFromPickable(timePickable) {
  const pattern = /^(\d+):(\d+) (am|pm)$/
  const [hour, minute, meridiem] = Array.from(
    timePickable.value.match(pattern)
  ).splice(1)

  return {
    hour,
    minute,
    meridiem,
  }
}

function getSelectsFromPicker(timePicker) {
  const [hour, minute, meridiem] = timePicker.querySelectorAll(
    '.time-picker__select'
  )

  return {
    hour,
    minute,
    meridiem,
  }
}

function getTimeStringFromPicker(timePicker) {
  const selects = getSelectsFromPicker(timePicker)

  return `${selects.hour.value}:${selects.minute.value} ${selects.meridiem.value}`
}

function numberToOption(number) {
  const padded = number.toString().padStart(2, '0')

  return `<option value="${padded}">${padded}</option>`
}

activate()
