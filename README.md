# 🥫 Gerenciador de Dispensa

Sistema backend para gerenciamento de despensa doméstica e listas de compras.

O objetivo da aplicação é permitir que o dono da casa (admin) gerencie os itens da despensa e que, quando um item acabar, uma nova lista de compras possa ser criada automaticamente contendo o item zerado.

---

# 🏗 Arquitetura

O projeto segue princípios de:

- Clean Architecture
- Separação por módulos
- Domain-Driven Design (estrutura orientada a domínio)
- TDD (Test Driven Development)
- NestJS como framework principal
- Prisma como ORM
- PostgreSQL como banco de dados

Estrutura principal:

src/
 ├── core/        → Configurações globais, providers e utilitários
 └── modules/     → Módulos de negócio (ex: pantry)

---

# 🧠 Domínio da Aplicação

## Conceitos principais

- User → Admin ou convidado
- Household → Casa
- Category → Categoria de item (ex: grãos, bebidas, limpeza)
- PantryItem → Item da despensa
- ShoppingList → Lista de compras
- ShoppingListItem → Item dentro de uma lista

---

# ✅ Status Atual do Projeto

## ✔ Infraestrutura Base

- [x] NestJS configurado
- [x] Prisma configurado
- [x] PostgreSQL via Docker
- [x] Primeira migration criada
- [x] Prisma Client gerado
- [x] Configuração de variáveis de ambiente
- [x] Estrutura base de Clean Architecture
- [x] Módulo `core` estruturado
- [x] Sistema de tratamento de erros global
- [x] Provider de criptografia (bcrypt)

---

## ✔ Banco de Dados (Prisma)

Models já existentes no Prisma:

- [x] User
- [x] Household
- [x] Category
- [x] PantryItem
- [x] ShoppingList
- [x] ShoppingListItem

Migration inicial criada com sucesso.

---

## ✔ Módulo Pantry

Estrutura criada:

modules/pantry
 ├── application/
 ├── domain/
 │   ├── entities/
 │   │   └── pantry-item.entity.ts
 │   └── repository/
 │       └── pantry-item.repository.ts
 └── infrastructure/

Implementado:

- [x] Entidade `PantryItem`
- [x] Interface `PantryItemRepository`

Ainda não implementado:

- [ ] UseCases
- [ ] InMemoryRepository
- [ ] PrismaRepository
- [ ] Mappers
- [ ] Controllers
- [ ] DTOs
- [ ] Testes unitários
- [ ] Testes de integração do módulo

---

# 🚧 O Que Ainda Precisa Ser Implementado

## 🔹 Camada Application (Pantry)

- [ ] CreatePantryItemUseCase
- [ ] UpdatePantryQuantityUseCase
- [ ] DeletePantryItemUseCase
- [ ] ListPantryItemsByHouseholdUseCase
- [ ] Regra: quando quantidade zerar → iniciar lista de compras
- [ ] Testes unitários com InMemoryRepository (TDD)

---

## 🔹 Camada Infrastructure (Pantry)

- [ ] PrismaPantryItemRepository
- [ ] PrismaPantryItemMapper
- [ ] Controllers HTTP
- [ ] DTOs de entrada e saída
- [ ] ViewModels

---

## 🔹 Módulo ShoppingList

Ainda não iniciado:

- [ ] Estrutura do módulo
- [ ] Entidade de domínio
- [ ] Repository interface
- [ ] UseCases
- [ ] Regra de criação automática ao zerar item
- [ ] Implementação Prisma
- [ ] Testes unitários

---

## 🔹 Módulo Users / Household

- [ ] Estruturar módulo Users
- [ ] Permitir criação de convidados
- [ ] Relacionar usuários à Household
- [ ] Definir papéis (Admin / Guest)

---

# 🧪 Estratégia de Testes

O projeto seguirá TDD para:

- UseCases
- Regras de negócio
- Fluxos críticos (ex: zerar item → gerar lista)

Não serão testados:

- Prisma diretamente
- Decorators do Nest
- DTOs simples

Plano:

- [ ] Criar InMemoryRepository para Pantry
- [ ] Criar testes unitários dos primeiros UseCases
- [ ] Estruturar padrão de testes reutilizável

---

# 🎯 Roadmap Técnico Prioritário

Ordem recomendada de desenvolvimento:

1. Implementar InMemoryPantryRepository
2. Criar primeiro UseCase com TDD (CreatePantryItem)
3. Implementar UpdateQuantity com regra de disparo
4. Criar módulo ShoppingList
5. Integrar regra de reposição
6. Implementar PrismaRepository
7. Criar controllers
8. Criar testes e2e reais

---

# 🚀 Objetivo Final

Ter um backend:

- Totalmente desacoplado do ORM
- Testável sem banco
- Com regras de negócio isoladas
- Modular
- Pronto para evoluir (ex: notificações, app mobile, etc.)

---