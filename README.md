# Miguel Lopes — Photography Portfolio

Versão reorganizada do portfolio.

## Estrutura

- `index.html` — homepage com slideshow automático.
- `portfolio.html?category=...` — mostra apenas a coleção escolhida no submenu Portfolio.
- `about.html` — página Sobre mim.
- `assets/css/style.css` — estilos gerais.
- `assets/js/main.js` — submenu, slideshow, galerias e lightbox.
- `images/collections/` — imagens otimizadas por coleção.
- `images/originals/` — fotografias originais preservadas.

## Categorias do menu Portfolio

- Greve Geral
- Não às mega centrais solares
- Street Moments
- WSL
- Diversos
- Retratos

As três categorias `Street Moments`, `WSL` e `Diversos` permanecem no menu, mas o ZIP original não continha fotografias nessas pastas. Enquanto não forem adicionadas, a página mostra a coleção vazia.

## Slideshow

O fundo da homepage muda de 10 em 10 segundos. Para usar 30 segundos, abra `assets/js/main.js` e altere:

`const HOME_INTERVAL_MS = 10000;`

para:

`const HOME_INTERVAL_MS = 30000;`

## Publicação

O site é estático e pode ser publicado diretamente no GitHub Pages, Vercel, Netlify ou Cloudflare Pages.
