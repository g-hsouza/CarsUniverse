var database = require("../database/config")

function buscarTotalQuiz(id) {
    var instrucaoSql = `
        SELECT (
                (SELECT COUNT(*) 
                FROM tentativa_conhecimento
                WHERE fk_usuario = ${id}) +
                (SELECT COUNT(*)
                FROM tentativa_personalidade
                WHERE fk_usuario = ${id})) AS 'Total de quizzes realizados';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTaxaAcerto(id) {
    var instrucaoSql = `
        SELECT 
            TRUNCATE(((SUM(acertos) / (SUM(acertos) + SUM(erros))) * 100), 2) AS 'Taxa de Acerto'
            FROM tentativa_conhecimento 
            WHERE fk_usuario = ${id};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoPersonagem(id) {
    var instrucaoSql = `
        SELECT p.nome AS 'Seu Personagem'
            FROM personagem p
            JOIN tentativa_personalidade tp
            ON tp.fk_personagem = p.id
            WHERE fk_usuario = ${id}
            ORDER BY tp.data_realizacao DESC
            LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTaxaAcertoCategoria(id) {
    var instrucaoSql = `
        SELECT r.categoria AS 'Categoria', 
            TRUNCATE((SUM(r.acertos) / ((SUM(r.acertos) + SUM(r.erros))) * 100), 2) AS 'Taxa Acerto'
            FROM resultado_tentativa r
            JOIN tentativa_conhecimento tc 
            ON r.fk_tentativa = tc.id 
            WHERE fk_usuario = ${id}
            GROUP BY r.categoria;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEvolucaoTaxaAcerto(id) {
    var instrucaoSql = `
        SELECT id AS 'Tentativa',
            TRUNCATE((acertos / (acertos + erros)) * 100, 2) AS 'Taxa de acerto'
            FROM tentativa_conhecimento 
            WHERE fk_usuario = ${id}
            ORDER BY data_realizacao ASC
            LIMIT 10;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHistoricoQuiz(id) {
    var instrucaoSql = `
        SELECT 
            tipo AS 'Tipo de Quiz',
            resultado AS 'Resultado',
            DATE_FORMAT(data_realizacao, '%d/%m/%Y') AS 'Data'
        FROM (
            SELECT 
            'Conhecimento' AS tipo,
            CONCAT(acertos, ' / 15') AS resultado,
            data_realizacao
        FROM tentativa_conhecimento
        WHERE fk_usuario = ${id}

        UNION ALL

        SELECT 
            'Personalidade' AS tipo,
            p.nome AS resultado,
            t.data_realizacao
            FROM tentativa_personalidade t
            JOIN personagem p
            ON t.fk_personagem = p.id
            WHERE t.fk_usuario = ${id}
        ) AS historico
        ORDER BY data_realizacao DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(*) FROM usuario AS totalUsuarios
        WHERE nome NOT LIKE ('admin');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuarioAtivo() {
    var instrucaoSql = `
        SELECT u.nome AS usuario
            FROM usuario u
            WHERE nome NOT LIKE ('admin')
            ORDER BY (
                (SELECT COUNT(*)
                FROM tentativa_conhecimento tc
                WHERE u.id = tc.fk_usuario)
                +
                (SELECT COUNT(*)
                FROM tentativa_personalidade tp
                WHERE u.id = tp.fk_usuario)
            ) DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalQuizAdmin() {
    var instrucaoSql = `
        SELECT (
            (SELECT COUNT(*) 
            FROM tentativa_conhecimento) +
            (SELECT COUNT(*)
        FROM tentativa_personalidade)) AS totalQuizGeral;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagens() {
    var instrucaoSql = `
        SELECT p.nome AS personagem, COUNT(*) AS quantidade
        FROM tentativa_personalidade tp
        JOIN personagem p
        ON tp.fk_personagem = p.id
        GROUP BY p.nome
        ORDER BY quantidade DESC
        LIMIT 4;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTaxaAtividade() {
    var instrucaoSql = `
        SELECT 
            DATE(data_realizacao) AS data,
            COUNT(*) AS total_quizzes
        FROM (
            SELECT data_realizacao
            FROM tentativa_conhecimento
            WHERE DATEDIFF(CURDATE(), data_realizacao) <= 6

            UNION ALL

            SELECT data_realizacao
            FROM tentativa_personalidade
            WHERE DATEDIFF(CURDATE(), data_realizacao) <= 6
        ) AS tentativas
        GROUP BY DATE(data_realizacao)
        ORDER BY data;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuarios() {
    var instrucaoSql = `
        SELECT id,
            nome,
            email,
            DATE_FORMAT(data_cadastro, '%d/%m/%Y') AS data_cadastro,
            CASE 
                WHEN ativo = 1 THEN 'Ativo'
                ELSE 'Inativo'
            END AS status
        FROM usuario
        WHERE nome NOT LIKE ('admin');
            
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarTotalQuiz,
    buscarTaxaAcerto,
    buscarUltimoPersonagem,
    buscarTaxaAcertoCategoria,
    buscarEvolucaoTaxaAcerto,
    buscarHistoricoQuiz,
    buscarTotalUsuarios,
    buscarUsuarioAtivo,
    buscarTotalQuizAdmin,
    buscarPersonagens,
    buscarTaxaAtividade,
    buscarUsuarios
};