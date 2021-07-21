USE PECASFORNECEDORES;
SELECT name FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecedores;

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';


SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE Preco >= 15 
AND Preco < 40
ORDER BY Preco;

SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' 
AND '2019-07-30';