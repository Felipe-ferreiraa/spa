import { Routes } from "@angular/router";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { DataComponent } from "./demos/data/data.component";
import { ListaprodutoComponent } from "./produtos/listaproduto/listaproduto.component";
import { ProdutoDetalheComponent } from "./produtos/produto-detalhe/produto-detalhe.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'contato',component: ContatoComponent},
    {path: 'sobre',component: SobreComponent},
    {path: 'data',component: DataComponent},
    {path: 'produtos',component: ListaprodutoComponent},
    {path: 'produto-detalhe/:id',component: ProdutoDetalheComponent}
]