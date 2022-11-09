document.addEventListener('click', async (event) => {
  const yesBtn = document.querySelector('.yes');
  const noBtn = document.querySelector('.no');
  /*   console.log('YES', yesBtn);
  console.log('NOOO', noBtn); */

  if (event.target.name === 'vote') {
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
    } catch (error) {
      console.log(error);
    }
  }
});
