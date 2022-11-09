document.addEventListener('click', async (event) => {
  if (event.target.name === 'vote') {
    try {
      event.preventDefault();
      const UserId = event.target.dataset.userid;
      const InitId = event.target.id;
      const response = await fetch(`/entry/:${UserId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserId, InitId }),
      });
    } catch (error) {
      console.log(error);
    }
  }
});
