# SafeTrack 🛠️

O **SafeTrack** é uma solução de backend robusta desenvolvida para gerenciar o ciclo de vida e a manutenção preventiva de ativos físicos. O sistema substitui planilhas ineficientes por uma interface inteligente que calcula automaticamente os prazos de revisão, ajudando empresas a evitar custos inesperados com quebras de equipamentos.

## 🚀 Tecnologias Utilizadas

* **Node.js & Express**: Core do projeto e gerenciamento de rotas.
* **Sequelize (ORM)**: Modelagem de dados e integração com banco de dados MySQL.
* **Handlebars**: Template engine para renderização de views no padrão MVC.
* **CSS Grid & Flexbox**: Arquitetura visual focada em dashboards de alta performance.

## 🏗️ Arquitetura do Projeto

O projeto segue rigorosamente o padrão **MVC (Model-View-Controller)** para garantir escalabilidade e separação de responsabilidades:

* **Models**: Definem a estrutura dos ativos (`Equipment.js`) e dos registros de manutenção (`Maintenance.js`).
* **Views**: Interfaces dinâmicas criadas com Handlebars, incluindo dashboards e formulários de gestão.
* **Controllers**: Onde reside a inteligência do negócio, como o processamento de datas e fluxos de redirecionamento (`EquipmentController.js`).
* **Routes**: Gerenciamento limpo de endpoints da aplicação.

## 💡 Funcionalidades Atuais

* **Gestão de Ativos**: CRUD completo para cadastrar equipamentos com nome, categoria e frequência de manutenção.
* **Cálculo Automático de Revisão**: O sistema detecta se uma data de revisão foi inserida. Caso contrário, utiliza a data atual como base e soma a frequência para projetar a próxima manutenção.
* **Dashboard Operacional**: Tabela de ativos com badges de status e indicadores de saúde do inventário.
* **Registro de Manutenção**: Fluxo para técnicos registrarem serviços realizados, alimentando automaticamente o próximo ciclo de revisão.

## 🗺️ Roadmap de Desenvolvimento (Próximos Passos)

O projeto está em evolução ativa. As próximas implementações incluem:

* [ ] **Autenticação de Usuários**: Sistema de login e permissões para diferentes níveis de acesso (Admin/Técnico).
* [ ] **Dashboard Dinâmico**: Implementação de lógica no Controller para contabilizar em tempo real quantos ativos estão "Em dia", "Atenção" ou "Críticos".
* [ ] **Tela de Histórico**: Visualização detalhada de todos os logs de manutenção vinculados a um equipamento específico.

## 🔧 Como Executar

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env` (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST).
4. Inicie o servidor: `npm start`.