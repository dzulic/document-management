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
  country    varchar(25),
  team       varchar(25),
  position   varchar(25),
  company_id int8 not null,
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
  id         int8 not null,
  name       varchar(25),
  content    varchar(3000),
  created    timestamp,
  updated    timestamp,
  company_id int8 not null,
  account_id int8 not null,
  primary key (id)
);

alter table document
  add constraint DOCUMENT_account_fkey foreign key (account_id) references account;

alter table document
  add constraint DOCUMENT_COMPANY_ID_fkey foreign key (company_id) references company;

alter table account
  add constraint ACCOUNT_COMPANY_ID_fkey foreign key (company_id) references company;
