const selectdevice = document.querySelector('#selectdevice');
const selectdeviceChoices = new Choices(selectdevice, {
  searchEnabled: false,
  allowHTML: true,
  itemSelectText: ''
});

const seendermalogist = document.querySelector('#seendermalogist');
const seendermalogistChoices = new Choices(seendermalogist, {
  searchEnabled: false,
  allowHTML: true,
  itemSelectText: ''
});