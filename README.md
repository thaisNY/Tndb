# 🎬 TMDB - Plataforma de Filmes

Aplicação web interativa para exploração de catálogo de filmes, alimentada pela API pública do **The Movie Database (TMDB)**. O projeto conta com autenticação de usuário, listagem dinâmica e navegação responsiva.

🔗 **Link do Deploy:** [TMDB na Vercel](https://tndb.vercel.app/) *(ou substitua pela URL gerada pela Vercel)*

---

## 🚀 Tecnologias Utilizadas

* **React.js** - Biblioteca principal para construção da interface
* **Vite** - Bundler de alta performance para desenvolvimento frontend
* **SASS / SCSS** - Estilização moderna e modularizada
* **Axios** - Cliente HTTP para consumo da API do TMDB
* **React Router DOM** - Gerenciamento de rotas e navegação da SPA
* **Vercel** - Deploy e hospedagem contínua

---

## 🛠️ Funcionalidades

- [x] **Autenticação:** Páginas de Login e Cadastro de usuário.
- [x] **Consumo de API Externa:** Listagem de filmes atualizados via TMDB API.
- [x] **Interface Responsiva:** Adaptada para diferentes tamanhos de tela.
- [x] **Centralização de Requisições:** Instância global do Axios configurada via variáveis de ambiente.

---

## 📦 Como executar o projeto localmente

### Pré-requisitos
* Node.js instalado (versão 18 ou superior recomendada)
* Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/thaisNY/Tndb.git](https://github.com/thaisNY/Tndb.git)
   cd Tndb
   npm install
   VITE_TMDB_API_KEY=sua_chave_aqui
   npm run dev
