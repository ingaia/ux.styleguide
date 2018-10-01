# UX.Styleguide

A **UX Styleguide** da suporte para criação de projetos usando:
- Animate.css.
- Bootstrap 4 Beta.
- inGaia Font Icons.

## Instalação

### npm

```console
$ npm install ingaia.ux.styleguide --save
```

Após a instalação adicione ao projeto o arquivo de estilo:
`dist/app.min.css `

ou compile usando o arquivo SASS:
`src/scss/stylesheet.scss`

Os scripts podem ser adicionados pelo arquivo:
`dist/app.js`

Caso queira adicionar os scripts separadamente, eles se encontram na pasta:
`src/js/*.js`

**IMPORTANT:** Caso tenha adicionado os scripts separadamente, será necessário incluir por default os scripts:
- jQuery `/node_modules/jquery/dist/jquery.min.js` 
- Popper.js `/node_modules/popper.js/dist/umd/popper.min.js`
- Bootstrap.js `/node_modules/bootstrap/dist/js/bootstrap.min.js`

### inGaia Font Icons

[Site](https://ingaia.github.io/font.icons/) 

Para usar as fontes de ícones chame um dos arquivo: 

CSS 
`node_modules/ingaia-font-icons/dist/ingaia-font-icons.css`

CSS Minificado
`node_modules/ingaia-font-icons/dist/ingaia-font-icons.min.css`

ou compile usando SASS:
`node_modules/ingaia-font-icons/dist/scss/ingaia-font-icons.scss`

### ReactJS

A estilização dos componentes React usados nas aplicações da inGaia tem seus estilos prontos.
Compile o arquivo SASS junto com sua aplicação.

O aquivo esta dentro da pasta:
`node_modules/ingaia-font-icons/src/scss/react/stylesheet.scss`