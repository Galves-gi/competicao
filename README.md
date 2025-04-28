
# **Doces da Vovó - Competição Senac de Educação Profissional**  
**Modalidade: Técnico em Informática | Etapa: Seletiva Estadual Final**  

---

## **📌 Visão Geral**  
Projeto desenvolvido para a **Competição Senac de Educação Profissional**, abrangendo:  
✅ **Design no Figma** (Wireframe + Sitemap)  
✅ **Desenvolvimento Frontend** (HTML5, CSS3, JavaScript)  
✅ **Backend e Banco de Dados** (PHP + MySQL)  
✅ **Validação de Formulário** (JS + HTML5)  
✅ **Exibição de Dados**  
✅ **Readme com medidas de Segurança**  



---

## **🎨 Identidade Visual**  
🔗 **Protótipo no Figma:** [Acesse aqui](https://www.figma.com/design/nst4IgFt94qf1IsBgNunyq/doces-da-vov%C3%B3-competi%C3%A7%C3%A3o?node-id=1-2&t=Y9jW930unYBsfKOC-0)  
### **Paleta de Cores**  
| Código | Uso Principal |  
|--------|--------------|  
| `#500A0A` | Elementos primarios |  
| `#C97666` | Elementos secundários |  
| `#E4C5BF` | Fundos e destaques suaves |  
| `#FFF8F4` | Corpo de texto e fundo |  

### **Tipografia**  
🔗 **Fontes do Google:** [Acesse aqui](https://fonts.googleapis.com/css2?family=Carattere&display=swap)  
- **Carattere**: Cabeçalhos  
- **Cardo**: Texto

---

## **🛠️ Tecnologias Utilizadas**  
| **Frontend** | **Backend** | **Banco de Dados** | **Ferramentas** |  
|-------------|------------|-------------------|----------------|  
| HTML5 Semântico | PHP 8+ | MySQL (XAMPP) | VS Code |  
| CSS3 Flexbox/media query | Prepared Statements | phpMyAdmin | Figma |  
| JavaScript (ES6) | Sanitização de Inputs | SQL | Git/GitHub |  

---

## **⚙️ Funcionalidades Implementadas**  
### **1️⃣ Páginas do Site**  
- **🏠 Home:** Sessão principal e Apresentação dos produtos em cards  
- **📜 Nossa História:** História da empresa com leitura em padrão Z 
- **📞 Contato:** Formulário + Mapa (iframe)  

### **2️⃣ Validação do Formulário**  
✔ **JavaScript (Client-Side)**  
- Campos obrigatórios  
- Formato de e-mail válido  
- validação do campo nome
- Validação com HTML5   

### **4️⃣ Exibição dos Dados**  
- Exibição dos dados pós-envio  

---

## **🔒 Medidas de Segurança**  
| **Tipo** | **Implementação** |  
|----------|------------------|  
| **XSS** | Sanitização com `htmlspecialchars()` |  
| **SQL Injection** | Consultas preparadas no PHP |   

---

## **🚀 Como Executar Localmente**  
1. **Instale o XAMPP** e inicie Apache + MySQL  
2. **Clone o repositório na pasta `htdocs`:**  
   ```bash
   git clone https://github.com/gi-alves/doces-da-vovo.git
   ```  
3. **Cria o banco de dados** no phpMyAdmin  
```sql
-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS doces_da_vovo;

-- Seleciona o banco de dados
USE doces_da_vovo;

-- Cria a tabela
CREATE TABLE `tb_formulario` (
  `id_contato` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `mensagem` TEXT NOT NULL
);
```
4. **Acesse:** ´http://localhost/doces-da-vovo`

```
## **Acesse o site hospedado**
`https://galves-gi.github.io/competicao/`
```
