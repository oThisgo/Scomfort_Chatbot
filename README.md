# ChatScomfort - Assistente Virtual com Inteligência de Negócio

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.2-000000?style=for-the-badge&logo=flask)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-API-4285F4?style=for-the-badge&logo=google)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)

Projeto desenvolvido para a disciplina de Inteligência Artificial, que consiste na criação de um chatbot avançado para a empresa fictícia de calçados SComfort.

---

## 🚀 Visão Geral do Projeto

ChatScomfort é um assistente virtual especialista, integrado diretamente ao e-commerce da marca SComfort. Diferente de chatbots tradicionais que apenas respondem a perguntas frequentes, o ChatScomfort foi projetado para atuar como um **consultor de vendas e embaixador da marca**, utilizando IA Generativa para criar conversas naturais, informadas e personalizadas.

### Demonstração

![ChatScomfort Demo](LINK_PARA_SEU_GIF_AQUI.gif)

## ✨ Características Principais

* **Disponibilidade 24/7:** Atende clientes a qualquer hora do dia, eliminando filas de espera.
* **Respostas Instantâneas e Contextuais:** Utiliza o poder do Google Gemini para entender a intenção do usuário e fornecer respostas precisas e naturais.
* **Personalidade de Marca:** O chatbot foi instruído para falar com o tom de voz jovem, moderno e prestativo da SComfort.
* **Conhecimento Profundo do Negócio:** O assistente possui insights sobre o perfil dos clientes, performance de produtos e até mesmo o roadmap futuro da empresa, tudo extraído dos datasets fornecidos.
* **Integração Nativa:** O widget do chat foi estilizado para se integrar perfeitamente ao design do site, sem parecer uma ferramenta de terceiros.

## 💼 Impacto no Negócio e Justificativa

A motivação por trás do ChatScomfort foi resolver um problema de negócio real e demonstrar o valor comercial da IA Generativa aplicada ao e-commerce.

* **Redução de Custos Operacionais:** Automatiza o atendimento de primeiro nível, respondendo a 80% das dúvidas mais comuns e liberando a equipe humana para focar em casos mais complexos e estratégicos.
* **Aumento da Taxa de Conversão:** Atua como um vendedor especialista disponível 24/7. Ele quebra objeções de compra, tira dúvidas de última hora e guia clientes indecisos, diminuindo o abandono de carrinho e aumentando as vendas.
* **Fortalecimento da Marca e Fidelização:** Oferece uma experiência de atendimento de ponta, moderna e eficiente. Clientes satisfeitos têm maior probabilidade de retornar e possuir um Lifetime Value (LTV) mais alto.

## 💡 Diferencial Competitivo

Enquanto a maioria dos chatbots de e-commerce no mercado são reativos e baseados em regras (focados em FAQs e rastreio de pedidos), o ChatScomfort é **proativo e consultivo**. Seu diferencial reside em:

1.  **Inteligência de Dados:** Ele não só sabe o preço de um produto, mas sabe qual o modelo mais bem avaliado, qual o perfil do público que o compra e por quê.
2.  **Abordagem de Venda Suave:** Ele é instruído a ser proativo, sugerindo produtos complementares (cross-sell) e ajudando clientes indecisos a encontrarem o modelo perfeito para sua necessidade.
3.  **Visão de Futuro:** Ele pode gerar entusiasmo e engajamento ao compartilhar "spoilers" sobre os próximos lançamentos da marca, criando uma comunidade de fãs.

## 🛠️ Tecnologias Utilizadas

* **Backend:** Python 3, Flask
* **Inteligência Artificial:** Google Gemini API (via `google-generativeai`)
* **Frontend:** HTML5, CSS3, JavaScript
* **Análise de Dados (para geração de insights):** Pandas
* **Gerenciamento de Dependências:** `pip` e `requirements.txt`
* **Gerenciamento de Chaves de API:** `python-dotenv`

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    cd SEU_REPOSITORIO
    ```

2.  **Crie e ative um ambiente virtual:**
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate

    # macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure a Chave da API:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Dentro dele, adicione sua chave da API do Google Gemini:
        ```
        GOOGLE_API_KEY="SUA_CHAVE_API_VAI_AQUI"
        ```

5.  **Execute o servidor Flask:**
    ```bash
    flask --app app run
    ```

6.  Abra seu navegador e acesse `http://127.0.0.1:5000`.

## 🧠 O Cérebro do Chatbot: Engenharia de Prompt

O componente mais crítico deste projeto é o `system_instruction` localizado no arquivo `app.py`. Ele é o "cérebro" que guia todo o comportamento, personalidade e base de conhecimento do chatbot. Ele foi cuidadosamente estruturado com:

* **Persona e Tom de Voz:** Define quem o chatbot é.
* **Guia de Conversação:** Ensina como responder a diferentes cenários com exemplos práticos.
* **Resumo Analítico:** Uma seção gerada automaticamente via Pandas a partir dos múltiplos datasets da SComfort, garantindo que o conhecimento do bot é um reflexo fiel e orgânico dos dados da empresa.
* **Princípios de Interação Avançada:** Regras para ser proativo, ajudar clientes indecisos e realizar vendas cruzadas.

## 🔮 Próximos Passos e Melhorias Futuras

* **Implementação de RAG (Retrieval-Augmented Generation):** Para escalar a solução, em vez de manter o conhecimento no prompt, o bot poderia consultar os datasets em tempo real a cada pergunta.
* **Integração com Banco de Dados Real:** Conectar o chatbot a um sistema de estoque e CRM para fornecer informações em tempo real sobre disponibilidade e personalizar a conversa para clientes logados.
* **Memória de Longo Prazo:** Implementar um sistema para que o chatbot se lembre de conversas anteriores com o mesmo usuário.

## 👥 Autores

* THIAGO SCHIEDECK DIAS DA SILVEIRA
* WILLIAM TAVARES DE MOURA
