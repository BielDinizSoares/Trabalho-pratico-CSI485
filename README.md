*Histórias de usuário*
| Prioridade | User Story                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| *MÁXIMA*   | #1 Como *administrador*, gostaria de **gerenciar (criar, editar, excluir e listar) disciplinas** no sistema.              |
| *MÁXIMA*   | #2 Como *administrador*, gostaria de **gerenciar (criar, editar, excluir e listar) professores** no sistema.              |
| *MÁXIMA*   | #3 Como *administrador*, gostaria de **gerenciar (criar, editar, excluir e listar) alunos** no sistema.                   |
| *MÁXIMA*   | #4 Como *administrador*, gostaria de **visualizar e gerenciar todas as tarefas** registradas no sistema.                  |
| *MÁXIMA*   | #5 Como *professor*, gostaria de **gerenciar (criar, editar, excluir e listar) tarefas** para as disciplinas que leciono. |
| *MÁXIMA*   | #6 Como *professor*, gostaria de **editar meu perfil** (nome, e-mail e senha).                                            |
| *ALTA*     | #7 Como *aluno*, gostaria de **visualizar as disciplinas e respectivas tarefas** que estou cursando.                      |
| *ALTA*     | #8 Como *usuário*, gostaria de **realizar login e autenticação** de forma segura para acessar minha conta.                |
| *ALTA*     | #9 Como *usuário*, gostaria de **navegar por uma interface limpa e intuitiva** para facilitar o uso do sistema.           |
| *BAIXA*    | #10 Como *usuário*, gostaria de **customizar as cores da interface** para ter uma experiência mais pessoal e agradável.    |
| *BAIXA*    | #11 Como *aluno*, gostaria de **visualizar notas de aula vinculadas às tarefas**, sem poder editá-las.                     |


### 📋 Backlog Sprint: História #1

| Tarefa                                                                                     | Responsável (Membro) |
|-------------------------------------------------------------------------------------------|----------------------|
| Criar protótipo da tela de gerenciamento de disciplinas no Figma                          | Membro: Arthur       |
| Criar estrutura do banco de dados: tabela disciplinas com campos id, nome, código         | Membro: Iaggo        |
| Criar entidade, repositório e serviço Disciplina no backend (Spring Boot)                 | Membro: Victor       |
| Implementar endpoints REST: GET, POST, PUT, DELETE                                        | Membro: Gabriel      |
| Testar endpoints da API com Postman                                                       | Membro: Gabriel      |
| Criar página React com formulário para adicionar/editar disciplina                        | Membro: Luiz         |
| Criar componente React para listar disciplinas                                            | Membro: Luiz         |
| Conectar frontend com backend (consumir API REST)                                         | Membro: Victor       |
| Adicionar feedback visual (mensagens de sucesso, erro etc.)                               | Membro: Arthur       |
| Realizar testes manuais completos via interface React                                     | Membro: Iaggo        |


### 📋 Backlog Sprint: História #2

| Tarefa                                                                                                      | Responsável (Membro) |
|------------------------------------------------------------------------------------------------------------|----------------------|
| Criar protótipo da tela de gerenciamento de professores no Figma                                           | Membro: Arthur       |
| Criar estrutura do banco de dados: tabela professores com campos id, nome, email, departamento   | Membro: Iaggo        |
| Criar entidade, repositório e serviço Professor no backend (Spring Boot)                                 | Membro: Victor       |
| Implementar endpoints REST: GET, POST, PUT, DELETE                                                 | Membro: Gabriel      |
| Testar endpoints da API com Postman                                                                        | Membro: Gabriel      |
| Criar página React com formulário para adicionar/editar professor                                          | Membro: Luiz         |
| Criar componente React para listar professores                                                             | Membro: Luiz         |
| Conectar frontend com backend (consumir API REST)                                                          | Membro: Victor       |
| Adicionar feedback visual (mensagens de sucesso, erro etc.)                                                | Membro: Arthur       |
| Realizar testes manuais completos via interface React                                                      | Membro: Iaggo        |

### 📋 Backlog Sprint: História #3
| Tarefa                                                                                         | Responsável (Membro) |
|-----------------------------------------------------------------------------------------------|----------------------|
| Criar protótipo da tela de gerenciamento de alunos no Figma                                   | Membro: Arthur       |
| Criar estrutura do banco de dados: tabela alunos com campos id, nome, matrícula               | Membro: Iaggo        |
| Criar entidade, repositório e serviço Aluno no backend (Spring Boot)                          | Membro: Victor       |
| Implementar endpoints REST: GET, POST, PUT, DELETE                                            | Membro: Gabriel      |
| Testar endpoints da API com Postman                                                           | Membro: Gabriel      |
| Criar página React com formulário para adicionar/editar aluno                                 | Membro: Luiz         |
| Criar componente React para listar alunos                                                     | Membro: Luiz         |
| Conectar frontend com backend (consumir API REST)                                             | Membro: Victor       |
| Adicionar feedback visual (mensagens de sucesso, erro etc.)                                   | Membro: Arthur       |
| Realizar testes manuais completos via interface React                                         | Membro: Iaggo        |


### 📋 Backlog Sprint: História #4
| Tarefa                                                                                     | Responsável (Membro) |
|-------------------------------------------------------------------------------------------|----------------------|
| Criar protótipo da tela administrativa de gerenciamento geral de tarefas no Figma        | Membro: Arthur       |
| Adaptar a estrutura da tabela tarefas para possibilitar visualização por todos os usuários | Membro: Iaggo        |
| Criar serviço e repositório com permissões de acesso administrativo no backend           | Membro: Victor       |
| Criar endpoint específico para listagem e exclusão geral de tarefas                      | Membro: Gabriel      |
| Testar o endpoint administrativo via Postman                                              | Membro: Gabriel      |
| Criar página React exclusiva para o administrador listar e excluir tarefas               | Membro: Luiz         |
| Conectar essa interface com a API de tarefas existentes                                   | Membro: Victor       |
| Adicionar filtros e ordenações úteis (por disciplina, data, professor, etc.)             | Membro: Luiz          |
| Adicionar feedback visual para ações administrativas (exclusão, falha, sucesso)          | Membro: Arthur       |
| Realizar testes manuais simulando ações administrativas                                  | Membro: Iaggo        |


### 📋 Backlog Sprint: História #5
| Tarefa                                                                                     | Responsável (Membro) |
|-------------------------------------------------------------------------------------------|----------------------|
| Criar protótipo da tela de gerenciamento de tarefas por disciplina no Figma              | Membro: Arthur       |
| Criar estrutura do banco de dados: tabela tarefas com colunas id, titulo, descricao, disciplina_id | Membro: Iaggo  |
| Criar entidade, repositório e serviço Tarefa no backend (Spring Boot)                    | Membro: Victor       |
| Implementar endpoints REST: GET, POST, PUT, DELETE                                       | Membro: Gabriel      |
| Testar endpoints da API com Postman                                                      | Membro: Gabriel      |
| Criar página React com formulário para adicionar/editar tarefa                           | Membro: Luiz         |
| Criar componente React para listar tarefas da disciplina                                 | Membro: Luiz         |
| Conectar frontend com backend (consumir API REST)                                        | Membro: Victor       |
| Adicionar feedback visual (mensagens de sucesso, erro etc.)                              | Membro: Arthur       |
| Realizar testes manuais completos via interface React                                    | Membro: Iaggo        |



