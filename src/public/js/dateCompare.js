document.addEventListener('click', async (event) => {
  const initCard = document.querySelector('#initCard');

  /* const yesBtn = document.querySelector('.yes');
  const noBtn = document.querySelector('.no');
  const votesButtons = document.getElementById('votesButtons');
  /*   console.log('YES', yesBtn);
    console.log('NOOO', noBtn); */

  /*   if (event.target.name === 'vote') {
      try {
        event.preventDefault();

        const vote = event.target.classList[1];

        const UserId = event.target.dataset.userid;
        const InitId = event.target.id;
        const response = await fetch(`/entry/:${UserId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ UserId, InitId, vote }),
        });
        if (response.status === 200) {
          yesBtn.classList.add('disable');
          noBtn.classList.add('disable');
          const divA = document.createElement('div');
          divA.innerText = 'Спасибо, ваш голос учтен';
          event.target.parentElement.append(divA);
          alert('Вы проголосовали!');
        }  */

  // if (response.status === 400) {
  //   yesBtn.classList.add('disable');
  //   noBtn.classList.add('disable');
  //   const divA = document.createElement("div");
  //   divA.innerText = 'Спасибо, ваш голос учтен'
  //   event.target.parentElement.append(divA);
  //   alert('Вы проголосовали!')
  // }
  /*  } catch (error) {
     console.log(error);
   }
  } */
});
