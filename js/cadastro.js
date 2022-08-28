class Produto {

    constructor(){
        this.id = 1;
        this.arrayProduto1 = [];
    }

    salvar(){
        let produto1 = this.lerDados();

        if(this.validaCampos(produto1)){
            this.adicionar(produto1);
        }

        this.listaTabela();
    }

    listaTabela(){
        let tbady = document.getElementById('tbody');
        tbady.innerText = '';

        for(let x = 0; x < this.arrayProduto1.length; x++){
            let tr = tbady.insertRow();

            let td_id = tr.insertCell();
            let td_qtde = tr.insertCell();
            let td_fabricante = tr.insertCell();
            let td_item = tr.insertCell();
            let td_precoUnidade = tr.insertCell();
            let td_fornecedor = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayProduto1[x].id;
            td_qtde.innerText = this.arrayProduto1[x].qtd;
            td_fabricante.innerText = this.arrayProduto1[x].fabricante;
            td_item.innerText = this.arrayProduto1[x].item;
            td_precoUnidade.innerText = this.arrayProduto1[x].precoUnidade;
            td_fornecedor.innerText = this.arrayProduto1[x].fornecedor;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/excluir.png';

            td_acao.appendChild(imgEdit);
            //<td><img></td>
        }
    }

    adicionar(produto1){
        this.arrayProduto1.push(produto1);
        this.id++;
    }

    lerDados(){
        let produto1 = {}

        produto1.id = this.id;
        produto1.qtd = document.getElementById('qtde').value;
        produto1.fabricante = document.getElementById('fabricante').value;
        produto1.item = document.getElementById('item').value;
        produto1.precoUnidade = document.getElementById('precoUnidade').value;
        produto1.fornecedor = document.getElementById('fornecedor').value;

        return produto1;
    }

    validaCampos(produto1){
        let msg = '';

        if(produto1.qtd == ''){
            msg += '- Informe qtd \n';
        }

        if(produto1.fabricante == ''){
            msg += '- Informe fabricante \n';
        }

        if(produto1.item == ''){
            msg += '- Informe item \n';
        }

        if(produto1.precoUnidade== ''){
            msg += '- Informe precoUnidade \n';
        }

        if(produto1.fornecedor == ''){
            msg += '- Informe fornecedor \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    cancelar(){
        
    }
}
let produto1 = new Produto();