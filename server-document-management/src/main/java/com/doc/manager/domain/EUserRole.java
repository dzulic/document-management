package com.doc.manager.domain;

public enum EUserRole {
    ADMIN("admin"),
    SUPER("super"),
    SIMPLE("simple");

    String value;

    EUserRole(String value) {
        this.value = value;
    }

}
