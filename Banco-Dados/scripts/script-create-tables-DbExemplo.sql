/*

*/
use exemplo;

create table tb_cliente (
id_cliente int not null,
nm_nome varchar(45),
ds_endereco varchar(45),
nr_telefone bigint(11),
ds_email varchar(100),

constraint pk_cliente primary key (id_cliente)
);

create table tb_pedido (
id_pedido int not null auto_increment,
dt_pedido date not null,
vl_pedido decimal(8,2),
tb_cliente_id int,

constraint pk_pedido primary key(id_pedido),
constraint fk_pedido_cliente foreign key(tb_cliente_id) references tb_cliente (id_cliente)
);

create table tb_item_pedido (
id_item_pedido int not null,
qt_quantidade int not null,
vl_unitario decimal(8,2)not null,
tb_pedido_id int not null,
tb_produto_id varchar(16) not null,

constraint pk_item_pedido primary key (id_item_pedido),
constraint fk_item_pedido foreign key (tb_pedido_id) references tb_pedido(id_pedido),
constraint fk_item_produto foreign key (tb_produto_id) references tb_produto(id_produto)
);

create table tb_produto (
id_produto varchar(16) not null,
ds_produt varchar(50) not null,

constraint pk_produto primary key(id_produto)
);