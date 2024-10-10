# Table de conteúdo
1. [Iniciando a aplicação](#anc_1) </br>
    1.1 [Dependencias](#anc_1_1)</br>
    1.2 [Executando aplicação](#anc_1_2)</br>
2. [Funcionalidades](#anc_2)</br>
    2.1 [Visualizar diferenças no navegador](#anc_2_1)</br>
    2.2 [Exportar resultado para CSV](#anc_2_2)</br>
    2.3 [Compartilhar resultado via link url](#anc_2_3)</br>
    2.4 [Visualizar diferenças através de comparador de arquivos](#anc_2_4)</br>


## 1. Iniciando a aplicação <a name="anc_1"></a>
## Dependencias <a name="anc_1_1"></a>
   -  docker  https://docs.docker.com/engine/install/
   -  docker-compose  https://docs.docker.com/compose/install/

### 1.2 Executando aplicação <a name="anc_1_2"></a>
```bash
docker-compose up
```
Aplicação disponível em: localhost:9000
</br>

## 2. Funcionalidades  <a name="anc_2"></a>
### 2.1 Visualizar diferenças no navegador <a name="anc_2_1"></a>
- Compara arquivos do tipo OpenAPI no formato yml ou yaml
    - Os arquivos devem ser publicos e disponiveis atraves de um link url no qual será utilizado para realizar a comparação.
- Disponibiliza template para descrição dos itens encontrados com o tipo adicionado, alterado e removido.
- Agrupa os resultados por endpoint e cria uma sessão para alterações realizadas fora do escopo dos endpoints.
- Contabiliza quantidade de itens adicionados, removidos ou alterados.
- A aplicação gera os seguintes detalhes:
    - Caminho
    - O que foi alterado
    - Tipo da Alteração
    - Antes
        - Existe um limitador de 130 caracteres no modo de visualização no navegador. Para ver o detalhamento completo, siga [exportando o resultado para csv](#anc_2_2).
    - Depois
        - Existe um limitador de 130 caracteres no modo de visualização no navegador. Para ver o detalhamento completo, siga [exportando o resultado para csv](#anc_2_2).
</br>
</br>
</br>

![alt text](<documents/Screenshot 2024-10-10 at 11.04.31.png>)
imagem: formuário de preenchimento das urls para serem comparadas
</br>
</br>
</br>
![alt text](<documents/Screenshot 2024-10-10 at 11.04.08.png>)
imagem: resultado das diferenças agrupados por endpoint
</br>
</br>
</br>
![alt text](<documents/Screenshot 2024-10-10 at 12.22.56.png>)
imagem: resultado da diferença em detalhes
</br>
</br>
</br>
### 2.2 Exportar resultado para CSV <a name="anc_2_2"></a>
</br>

Aplicação cria arquivo do tipo csv com todos os detalhes da comparação dos arquivos.
</br>

![alt text](<documents/Screenshot 2024-10-10 at 11.05.43.png>)
</br>
</br>
</br>

![alt text](<documents/Screenshot 2024-10-10 at 11.07.04.png> )
image: arquivo csv exportado
</br>
</br>
</br>
### 2.3 Compartilhar resultado via link url <a name="anc_2_3"></a>
Ao colar a url gerada no navegador, aplicação consegue gerar changeLog com os paramentros
configurados de onde a url foi criada.
Isso pode facilitar em um momento de analise, no qual precisa de compartilhar um determinado resultado com outras pessoas.
Aplicação ao ser requisitada pela url compartilhada, gera novamente o changelog com os mesmos parametros solicitados.
</br>


![alt text](<documents/Screenshot 2024-10-10 at 11.05.51.png>)
imagem: opção para compartilhar resultado via link url
</br>
</br>
</br>
![alt text](<documents/Screenshot 2024-10-10 at 11.06.12.png>)
imagem: Disponibilização do link url para compartilhamento
</br>
</br>
</br>
### 2.4 Visualizar diferenças através de comparador de arquivos <a name="anc_2_4"></a>
</br>

![alt text](<documents/Screenshot 2024-10-10 at 11.05.59.png>)
imagem: opção para visualizar diferenças através de comparador de arquivos
</br>
</br>
</br>
![alt text](<documents/Screenshot 2024-10-10 at 11.06.05.png>)
image: diferença entre as vesões
