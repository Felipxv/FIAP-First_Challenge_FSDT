# Challenge POSTECH – FULLSTACK | Desafio Aula Inaugural

📌 **Descrição**  
Este projeto foi desenvolvido como parte do primeiro desafio da aula inaugural da POSTECH Fullstack. O objetivo é criar uma página web utilizando HTML, CSS e JavaScript puro (sem frameworks).

A aplicação apresenta um formulário onde os integrantes do grupo informam seus nomes e contam a história do grupo. Ao enviar o formulário, os dados são enviados para uma API através de uma requisição HTTP POST no formato JSON.

Após o envio:  
- ✅ Em caso de sucesso, os campos são limpos e é exibido um alerta informando que o envio foi realizado.  
- ❌ Em caso de erro, é exibido um alerta informando que ocorreu um problema.  

---

🚀 **Tecnologias Utilizadas**  
- HTML5  
- CSS3  
- JavaScript  

---

📡 **Endpoint da API**  
Os dados são enviados para o seguinte endpoint:  
`https://fsdt-contact.onrender.com/contact`

**Estrutura do JSON enviado**:  
```json
{
  "names": ["Felipe", "Gabriel", "Marcus", "Vinicius"],
  "message": "História do grupo..."
}
```

---

📂 **Estrutura do Projeto**  
- `index.html`  
- `style.css`  
- `script.js`  

---

▶️ **Como Executar o Projeto**  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/Felipxv/FIAP-First_Challenge_FSDT.git
   ```
2. Acesse a pasta do projeto:  
   ```bash
   cd FIAP-First_Challenge_FSDT
   ```
3. Abra o arquivo `index.html` no navegador  
   **ou**  
   Execute um servidor local e acesse o projeto no navegador.

---

👨‍💻 **Integrantes do Grupo**  
| Nome      | RM      |
|-----------|---------|
| Felipe    | 371023  |

---

📋 **Requisitos Atendidos**  
✔ Utilização apenas de HTML, CSS e JavaScript.  
✔ Arquivos separados conforme solicitado.  
✔ Envio de dados para API via POST.  
✔ JSON contendo `names` (array) e `message` (string).  
✔ Limpeza do formulário após envio.  
✔ Alertas de sucesso e erro.  

---

📄 **Licença**  
Projeto desenvolvido apenas para fins educacionais.