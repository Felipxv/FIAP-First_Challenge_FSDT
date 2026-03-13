// Constantes da aplicação
const API_URL = 'https://fsdt-contact.onrender.com/contact';
const MIN_NAME_LENGTH = 2;
const MIN_HISTORY_LENGTH = 10;
const FEEDBACK_TIMEOUT = 5000;

// Validação de entrada
function validateName(name) {
  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    return false;
  }
  if (trimmedName.length < MIN_NAME_LENGTH) {
    return false;
  }
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(trimmedName)) {
    return false;
  }
  return true;
}

function validateHistory(history) {
  const trimmedHistory = history.trim();
  if (trimmedHistory.length === 0) {
    return false;
  }
  if (trimmedHistory.length < MIN_HISTORY_LENGTH) {
    return false;
  }
  return true;
}

// Função para limpar o formulário
function clearForm() {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  document.getElementById('name3').value = '';
  document.getElementById('name4').value = '';
  document.getElementById('history').value = '';
}

// Função para gerenciar estado do botão
function setButtonState(disabled, text) {
  const btn = document.getElementById('submitBtn');
  btn.disabled = disabled;
  btn.textContent = text;
}

// Função para exibir feedback
function showFeedback(message, type) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
  
  // Auto-limpar feedback após timeout
  if (type === 'success') {
    setTimeout(() => {
      feedback.textContent = '';
      feedback.className = 'feedback';
    }, FEEDBACK_TIMEOUT);
  }
}

// Função para obter nomes do formulário
function getFormNames() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const name3 = document.getElementById('name3').value.trim();
  const name4 = document.getElementById('name4').value.trim();
  
  return [name1, name2, name3, name4].filter(name => validateName(name));
}

// Função para obter histórico do formulário
function getFormHistory() {
  return document.getElementById('history').value.trim();
}

// Função para log de erros
function logError(errorMessage, errorDetails) {
  console.error(`[ERRO] ${errorMessage}:`, errorDetails);
}

// Função para realizar requisição à API
async function submitToAPI(payload) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response;
  } catch (error) {
    logError('Erro ao conectar à API', error);
    throw error;
  }
}

// Função para processar resposta da API
function handleAPIResponse(response) {
  if (response.ok) {
    showFeedback('Formulário enviado com sucesso!', 'success');
    clearForm();
  } else {
    const errorMessage = `Erro ao enviar: ${response.status} ${response.statusText}`;
    showFeedback(errorMessage, 'error');
    logError('Erro na resposta da API', { status: response.status, statusText: response.statusText });
  }
}

// Função principal de submissão
async function handleSubmit() {
  const names = getFormNames();
  const history = getFormHistory();

  // Validações
  if (names.length === 0) {
    showFeedback('Por favor, preencha pelo menos um nome do grupo!', 'error');
    return;
  }

  if (!validateHistory(history)) {
    showFeedback('Por favor, preencha a história do grupo com pelo menos 10 caracteres!', 'error');
    return;
  }

  // Preparar payload
  const payload = {
    names: names,
    message: history
  };

  // Enviar dados
  setButtonState(true, 'Enviando...');
  showFeedback('', '');

  try {
    const response = await submitToAPI(payload);
    handleAPIResponse(response);
  } catch (error) {
    showFeedback('Erro de conexão. Verifique sua internet e tente novamente.', 'error');
    logError('Exceção ao enviar formulário', error);
  } finally {
    setButtonState(false, 'Enviar');
  }
}
