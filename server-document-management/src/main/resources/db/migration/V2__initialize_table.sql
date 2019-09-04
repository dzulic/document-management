create sequence hibernate_sequence start 1 increment 1;


create table account
(
  account_id int8 not null,
  user_role  varchar(25),
  user_name  varchar(25),
  password   varchar(25),
  name       varchar(25),
  last_name  varchar(25),
  email      varchar(25),
  phone      varchar(25),
  position   varchar(25),
  company_id int8,
  primary key (account_id)
);


create table company
(
  company_id   int8 not null,
  company_name varchar(25),
  country      varchar(25),
  city         varchar(25),
  business     varchar(25),
  phone        varchar(25),
  email        varchar(25),
  primary key (company_id)
);

create table document
(
  id          int8 not null,
  name        varchar(25),
  content     BYTEA,
  created     timestamp,
  updated     timestamp,
  company_id  int8 not null,
  created_by  int8 not null,
  template_id int8 not null,
  primary key (id)
);

create table template_document
(
  id           int8 not null,
  file_name    varchar(25),
  content_type varchar(25),
  data         varchar(10000),
  created_by   int8 not null,
  primary key (id)
);

alter table document
  add constraint DOCUMENT_account_fkey foreign key (created_by) references account;

alter table document
  add constraint DOCUMENT_COMPANY_ID_fkey foreign key (company_id) references company;

alter table document
  add constraint DOCUMENT_TEMPLATE_ID_fkey foreign key (template_id) references template_document;

alter table account
  add constraint ACCOUNT_COMPANY_ID_fkey foreign key (company_id) references company;

alter table template_document
  add constraint FILE_DOC_ID_fkey foreign key (created_by) references account;

INSERT into company
values ('11111', 'Fabrika', 'Serbia', 'Belgrade', 'Software', '+3815656565', 'fabrika@fmail.com');
INSERT into account
values (0, 'ADMIN', 'admin', 'admin', null, null, null, null, null, '11111');
INSERT into account
values (1, 'SIMPLE', 'simple', 'simple', null, null, null, null, null, '11111');
INSERT into template_document
values (123, 'first', 'nesto', null, 0);
