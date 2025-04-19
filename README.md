# ⚛️ React Template – Guilherme.Dev

Template moderno com **React + Vite**, organizado com boas práticas de desenvolvimento, Git Flow, commits semânticos e CI automático via GitHub Actions. Ideal para projetos reais, MVPs e landing pages reativas.

---

## 🚀 Tecnologias

- [x] React 18+  
- [x] Vite  
- [x] JavaScript (ou TypeScript adaptável)  
- [x] PostCSS / Tailwind (opcional)  
- [x] Husky + Commitizen + Git Flow  
- [x] GitHub Actions para CI automático

---

## 📁 Estrutura

```
react-template-guilherme/
├── .config/
│   ├── gitmessage.txt
├── .husky/
│   └── pre-commit
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   └── decisoes.md
├── .gitignore
├── CHANGELOG.md
├── LICENSE
├── README.md
├── package.json
└── package-lock.json
```

---

## ⚙️ Scripts

```bash
npm install       # Instala as dependências e ativa Husky automaticamente
npm run dev       # Inicia o servidor local de desenvolvimento (Vite)
npm run build     # Gera a versão final para produção
npm run preview   # Visualiza o build
npm run commit    # Abre o menu interativo do Commitizen
```

> ⚠️ Commits manuais são bloqueados! Use sempre `npm run commit`

---

## 🔀 Git Flow Padrão

- `main` → versão estável e com tags (`v0.1.0`, `v1.0.0`, etc.)
- `develop` → onde o desenvolvimento contínuo acontece
- `feature/x` → novas funcionalidades
- `release/x.x.x` → preparação para nova release
- `hotfix/x` → correções críticas direto na produção

```bash
git checkout -b feature/nome-da-funcionalidade
```

---

## 🔧 Commits Padronizados com Commitizen

Modelo do arquivo `.config/gitmessage.txt`:

```
feat(scope): mensagem curta

# Explicação mais detalhada (opcional)
#
# Tipos:
# feat     → nova funcionalidade
# fix      → correção de bug
# docs     → mudanças na documentação
# style    → formatação, CSS, espaço, vírgula
# refactor → refatoração sem alterar funcionalidade
# chore    → tarefas internas, config, setup
```

Para ativar localmente:
```bash
git config commit.template .config/gitmessage.txt
```

---

## 🤖 GitHub Actions – CI Automático

Sempre que você fizer `push` ou `pull request` para `main` ou `develop`, o GitHub irá:

- Clonar o repositório
- Rodar `npm install`
- Rodar `npm run build`

Arquivo: `.github/workflows/ci.yml`

---

## 📋 Histórico de mudanças

Veja em [CHANGELOG.md](./CHANGELOG.md)

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE).

---

## 👤 Autor

Criado por [Guilherme Costa Proença](https://github.com/GuilhermeCostaProenca)
