# Variáveis de ambiente
- cp .env.example .env
# Instalar dependências
- yarn
# Para utilizar CLI 
- yarn lerna exec --parallel yarn 
# Criar containers
- docker-compose up -d --force-recreate --build

# Pronto, aplicação já está rodando, acesso:
- Back: http://localhost:4000
- Front: http://localhost:3000