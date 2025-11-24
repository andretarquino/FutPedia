# 📚 FutPedia  
Uma aplicação simples e responsiva feita com **HTML, CSS e JavaScript**, que permite buscar informações sobre diversos clubes do futebol brasileiro.  
Os dados são carregados dinamicamente a partir do arquivo **data.json**, e os resultados são exibidos em forma de cartões.

---

## 📸 Demonstração  
(Adicione aqui a imagem ou GIF do projeto funcionando, se desejar)

---

## 🚀 Funcionalidades

- 🔎 **Busca em tempo real** por qualquer time presente na base de dados  
- 🔤 Busca **normalizada** (insensível a acentos)  
- 🗂️ Exibição de cards com:
  - Nome do time  
  - Ano de criação  
  - Descrição  
  - Link oficial para saber mais  
- 🌙 **Design moderno**, inspirado no tema escuro do Google  
- 📱 **Totalmente responsivo**

---

## 🧩 Estrutura do Projeto

```
├── index.html # Estrutura principal do site
├── style.css # Estilos e responsividade
├── script.js # Lógica de busca e renderização
└── data.json # Base de dados dos clubes
```

---

## 📁 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Fetch API** para carregar o JSON externamente

---

## 🛠️ Como Executar o Projeto

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   Abra o arquivo index.html no navegador
1. Abra o arquivo index.html no navegador ou use uma extensão como Live Server no VS Code.


## 🧠 Como funciona a busca 
1. O usuário digita um termo no campo de busca e clica em "Buscar" (ou aciona a função iniciarBusca()).
1. O script.js faz um fetch("data.json") para carregar a base de dados.
1. Antes de comparar, tanto o termo digitado quanto os nomes dos times são normalizados:
- Remoção de acentos (função removerAcentos)
- Conversão para minúsculas
4. O código filtra os registros cujo nome contenha o termo digitado: 
 ``` const termoBusca = removerAcentos(inputBusca.value.toLowerCase());

const dadosFiltrados = dados.filter(dado => {
    const nomeNormalizado = removerAcentos(dado.nome.toLowerCase());
    return nomeNormalizado.includes(termoBusca);
});
```
5. Os resultados são renderizados dinamicamente em cards dentro da página.

## 📌 Possíveis melhorias futuras
- 🔥 Filtros por tags (ex: “libertadores”, “nordeste”, “gaucho”)

- ⚡ Busca em tempo real sem botão

- 🟢 PWA (versão instalável)

- 🎨 Cards com imagens

- 🧪 Testes automatizados
