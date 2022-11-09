const selectForm = document.querySelector('#level-select');

if (selectForm) {
  selectForm.addEventListener('click', (event) => {
    const selectedOption = event.target.value;
    const inputRegion = document.querySelector('#regInput');
    const inputMunicip = document.querySelector('#munInput');
    if (selectedOption === 'Региональный') {
      inputRegion.classList = 'inputVisible';
    } else {
      inputRegion.classList = 'optionForSelect';
    }

    if (selectedOption === 'Муниципальный') {
      inputMunicip.classList = 'inputVisible';
    } else {
      inputMunicip.classList = 'optionForSelect';
    }
  });
}
