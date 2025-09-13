// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if(!name || !email || !message){
    formMsg.textContent = 'Please fill all fields.';
    return;
  }

  formMsg.textContent = `Thanks ${name.split(' ')[0]}! I received your message (demo).`;
  this.reset();
});
