import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.services';
import { Produto } from '../produto';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styles: [
  ]
})
export class ListaprodutoComponent implements OnInit{
  symbol!: string;

  constructor(private produtoService: ProdutosService){}

  public produtos!: Produto[];
  
  ngOnInit(){
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
      },error => console.log(error)
    );
  }

}
