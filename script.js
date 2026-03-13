async function handleSubmit() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const name3 = document.getElementById('name3').value.trim();
  const name4 = document.getElementById('name4').value.trim();
  const history = document.getElementById('history').value.trim();
  const feedback = document.getElementById('feedback');
  const btn = document.getElementById('submitBtn');

  const names = [name1, name2, name3, name4].filter(name => name !== '');

  if (names.length === 0) {
    feedback.textContent = 'Por favor, preencha pelo menos um nome do grupo!';
    feedback.className = 'feedback error';
    return;
  }

  if (history === '') {
    feedback.textContent = 'Por favor, preencha a história do grupo!';
    feedback.className = 'feedback error';
    return;
  }

  const payload = {
    names: names,
    message: history
  };

  btn.disabled = true;
  btn.textContent = 'Enviando...';
  feedback.textContent = '';
  feedback.className = 'feedback';

  try {
    const response = await fetch('https://fsdt-contact.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      feedback.textContent = 'Formulário enviado com sucesso!';
      feedback.className = 'feedback success';
    } else {
      feedback.textContent = `Erro ao enviar: ${response.status} ${response.statusText}`;
      feedback.className = 'feedback error';
    }
  } catch (error) {
    feedback.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';
    feedback.className = 'feedback error';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar';
  }
}
