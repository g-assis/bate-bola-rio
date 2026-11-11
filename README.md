# BATE-BOLA — Bondes do Rio

## Status
Primeira versão técnica publicada no GitHub. O visualizador atual usa geometria provisória, não os GLBs antigos.

## CI
GitHub Actions roda `npm test` em pushes para main e pull requests.

## CD (pendente de conectar Vercel)
Importe `g-assis/bate-bola-rio` na Vercel com Framework Preset **Other**, Root Directory `./`, sem build command. Após conexão, pushes na main devem fazer deploy automático e PRs devem criar previews.

## Teste local
`python3 -m http.server 8000`

## Critérios de aceite
Câmera fixa, personagem centralizado, sem zoom ou pan, apenas rotação horizontal 360 graus. Os testes atuais são estáticos; teste visual no navegador ainda é necessário.
