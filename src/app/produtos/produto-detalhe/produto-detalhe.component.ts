import { Component ,OnInit} from '@angular/core';
import { ProdutosService } from '../produtos.services';
import { Produto } from '../produto';
import { ListaprodutoComponent } from '../listaproduto/listaproduto.component';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styles: [
  ]
})
export class ProdutoDetalheComponent implements OnInit{

  constructor(lista: ListaprodutoComponent){
    lista.produtos
  }

  ngOnInit(): void {
    console.log(lista.produtos);
  }

}
