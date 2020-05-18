## Grimulo CLI

Projeto para geração automática de arquivos templates.

## Pré requisitos

- [Node 12.4.0 Stable](https://nodejs.org/en/)

## Instalação 

Clonagem do diretório:
```
git clone https://gitlab.com/fabwork/vitec-api
```

## Configuração

Para adicionar novos templates, inclua os arquivos na pasta templates

## Instruções para executar o projeto

Adicione o comando cli para seu template em package.json
Exemplo:
```
"bin": {
    "create-mytemplate": "index.js"
  }
```