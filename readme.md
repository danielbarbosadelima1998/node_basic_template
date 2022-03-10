# Variáveis de ambiente/
Em: packages/back e packages/front rodar:
- cp .env.example .env
# Instalar dependências
- yarn
# Para utilizar CLI 
- yarn lerna exec --parallel yarn 
# Criar containers
- docker-compose up -d

# Pronto, aplicação já está rodando, acesso:
- Back: http://localhost:4000
- Front: http://localhost:3000
