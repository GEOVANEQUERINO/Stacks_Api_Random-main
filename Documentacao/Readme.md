# Documentação do Projeto: Interface Web com Consumo da API Random User

## Visão Geral
Este projeto é uma interface web simples que consome dados da API [Random User](https://randomuser.me) para exibir informações aleatórias sobre um usuário. As informações exibidas incluem:
- Nome completo
- E-mail
- Data de nascimento
- Idade
- Foto do usuário

A interface possui um botão que permite gerar um novo usuário aleatoriamente a cada clique.

---

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos principais:

1. **index.html**: Contém a estrutura da interface.
2. **styles.css**: Define o estilo visual da aplicação.
3. **script.js**: Contém a lógica de consumo da API e manipulação do DOM.

---

## Funções no Arquivo `script.js`

### 1. **generateUser**
**Definição:**
```javascript
function generateUser() { ... }
```

#### Descrição:
Essa função é responsável por:
1. Fazer uma requisição à API `https://randomuser.me/api/` utilizando o método `fetch`.
2. Processar os dados recebidos da API e extrair as seguintes informações:
   - **Nome completo**: Concatenando os campos `user.name.first` e `user.name.last`.
   - **E-mail**: Obtido diretamente do campo `user.email`.
   - **Data de nascimento**: Formatada em `dd/mm/yyyy` a partir do campo `user.dob.date`.
   - **Idade**: Obtida do campo `user.dob.age`.
   - **Foto**: URL encontrada no campo `user.picture.large`.
3. Atualizar o conteúdo HTML para exibir as informações tratadas no elemento com ID `user-info`.
4. Tratar erros de requisição e exibi-los no console, caso ocorram.

#### Parâmetros:
Nenhum.

#### Retorno:
Nenhum retorno explícito. Atualiza dinamicamente a interface do usuário.

#### Exemplo de Saída:
Ao invocar a função, os seguintes dados serão exibidos na interface:
```html
<img src="https://example.com/userphoto.jpg" alt="Foto de Nome Sobrenome" style="...">
<h2>Nome Sobrenome</h2>
<p><strong>E-mail:</strong> email@exemplo.com</p>
<p><strong>Data de Nascimento:</strong> 01/01/1990</p>
<p><strong>Idade:</strong> 33 anos</p>
```

#### Observações:
- A função também é executada automaticamente ao carregar a página.
- O botão com ID `generate-user` está associado à função por meio de um listener de evento `click`.

### 2. **Event Listener para Botão**
**Definição:**
```javascript
document.getElementById('generate-user').addEventListener('click', generateUser);
```

#### Descrição:
Este listener adiciona funcionalidade ao botão de gerar um novo usuário. Quando o botão é clicado, a função `generateUser` é invocada, buscando novos dados da API e atualizando a interface.

#### Parâmetros:
Nenhum.

#### Retorno:
Nenhum.

---

## Fluxo de Execução
1. **Carregamento Inicial:**
   - A função `generateUser` é chamada automaticamente ao carregar a página.
   - Um usuário é gerado e suas informações são exibidas na interface.

2. **Interação do Usuário:**
   - O usuário clica no botão "Gerar Novo Usuário".
   - A função `generateUser` faz uma nova requisição à API, obtém outros dados e atualiza a interface com o novo usuário.

---

## Estrutura do HTML Atualizado
O elemento com ID `user-info` é atualizado dinamicamente com o seguinte formato:

```html
<div id="user-info">
    <img src="[Foto do Usuário]" alt="[Nome do Usuário]">
    <h2>[Nome do Usuário]</h2>
    <p><strong>E-mail:</strong> [E-mail]</p>
    <p><strong>Data de Nascimento:</strong> [Data]</p>
    <p><strong>Idade:</strong> [Idade]</p>
</div>
```

---

## Possíveis Melhorias
1. Adicionar animações para a atualização dos dados na interface.
2. Incluir validações para tratar melhor os erros da API, exibindo mensagens amigáveis ao usuário.
3. Permitir que o usuário escolha a quantidade de perfis a serem exibidos simultaneamente.
4. Implementar uma opção para salvar os dados de um usuário gerado.

---

## Referência
- [Random User API](https://randomuser.me)

