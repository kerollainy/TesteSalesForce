# Projeto Individual SalesForce

Este Projeto consiste em um cadastro de perfil profissional, para feirantes que queirem revender os produtos da loja do site. 

## Como começar

1. Clone este repositório.

2. No terminal do VsCode execute `npm install` para instalar todas as dependências locais (versão do node 8.x ou versão LTS atual recomendada)

3. Execute `npm run compile: js` a partir da linha de comando que compilaria todos os arquivos JS do lado do cliente. Execute `npm run compile: scss` e` npm run compile: fonts` que faria o mesmo para css e fontes.

4. Crie o arquivo `dw.json` na raiz do projeto:
```json
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "yourlogin",
    "password": "yourpwd",
    "code-version": "version_to_upload_to"
}
```

5. Execute `npm run uploadCartridge`. Ele irá carregar os cartuchos `app_storefront_base`,` modules` e `bm_app_storefront_base` para a sandbox que você especificou no arquivo` dw.json`.

6. Use https://github.com/SalesforceCommerceCloud/storefrontdata para compactar e importar dados do site em sua sandbox.

7. Adicione o cartucho `app_storefront_base` ao caminho do cartucho em _Administração> Sites> Gerenciar sites> RefArch - Configurações_.

8. Crie o seu cartucho de customização, pois não é recomendado fazer alterações direto no cartucho base.
    8.1. Ir na extensão do _prophet> cartridges> more Actions> Create cartridge_;
    8.2. Primeiro deve ser colocado o nome `cartridges` e depois o nome do seu cartucho.

8. Agora você deve estar pronto para navegar e usar seu site.

## NPM scripts
Use os scripts NPM fornecidos para compilar e fazer upload das alterações para o seu Sandbox.

## Compiling your application

* `npm run compile:scss` - Compila todos os arquivos .scss em CSS.
* `npm run compile:js` - Compila todos os arquivos .js e os agrega.
* `npm run compile:fonts` - Copia todos os arquivos de fontes necessários. Normalmente, isso só precisa ser executado uma vez.

 Se você estiver tendo problemas para compilar arquivos scss, tente executar 'npm rebuild node-sass' de dentro de seu repositório local.

## Linting seu código

`npm run lint` - Executa linting para todos os arquivos JavaScript e SCSS do projeto. Você deve executar este comando antes de confirmar seu código.

## Observando as alterações e enviando

`npm run watch` - Observa tudo e recompila (se necessário) e carrega para a sandbox. Requer um arquivo `dw.json` válido na raiz que está configurado para o upload do sandbox.

## Enviando

`npm run uploadCartridge` - Carregará` app_storefront_base`, `modules` e` bm_app_storefront_base` para o servidor. Requer um arquivo `dw.json` válido na raiz que está configurado para o upload do sandbox.

`npm run upload <filepath>` - Carregará um determinado arquivo para o servidor. Requer um arquivo `dw.json` válido.

# Testando
## Executando testes de unidade

Você pode executar `npm test` para executar todos os testes de unidade no projeto. Execute `npm run cover` para obter informações de cobertura. A cobertura estará disponível na pasta `cobertura` no diretório raiz.

* Cobertura do código de teste UNIT:
1. Abra um terminal e navegue até o diretório raiz do repositório mfsg.
2. Digite o comando: `npm run cover`.
3. Examine o relatório gerado. Por exemplo: `Escrevendo relatórios de cobertura em [/ Usuários / seunomedeusuario / SCC / sfra / cobertura]`
3. Navegue até este diretório em sua máquina local, abra o arquivo index.html. Este arquivo contém um relatório detalhado.

## Executando testes de integração
Os testes de integração estão localizados no diretório `storefront-reference-architecture / test / integration`.

Para executar testes de integração, você pode usar o seguinte comando:

```
npm run test:integration
```

**Nota:** Observe que a forma abreviada deste comando tentará localizar a URL de sua sandbox lendo o arquivo `dw.json` no diretório raiz de seu projeto. Se você não tiver o arquivo `dw.json`, os testes de integração falharão.
exemplo de arquivo `dw.json` (este arquivo precisa estar na raiz do seu projeto)
{
    "hostname": "devxx-sitegenesis-dw.demandware.net"
}

Você também pode fornecer o URL da sandbox na linha de comando:

```
npm run test:integration -- --baseUrl devxx-sitegenesis-dw.demandware.net
```

## [Contribuindo com a SFRA](./CONTRIBUTING.md)

#Page Designer Componentes para arquitetura de referência da Storefront
Consulte: [Componentes do Page Designer](./page-designer-components.md)


### Dúvidas
Qualquer dúvida, entre em contato comigo pelo email: kerodsg@gmail.com<br>
Ficarei feliz em ajudar.

**Minhas redes sociais**: [Linkedin](https://www.linkedin.com/in/kerollainy-gomes/) | [Instagram](https://www.instagram.com/kelorainy/)