//contact form
async function contactFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const comment = document.querySelector('#comment').value.trim();
  
    if (name && email && comment) {
        const response = await fetch('/api/contact', {
          method: 'post',
          body: JSON.stringify({
            name,
            email,
            comment,
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.new-contact-form').addEventListener('submit', contactFormHandler); 