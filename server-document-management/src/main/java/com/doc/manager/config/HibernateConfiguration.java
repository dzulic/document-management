package com.doc.manager.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@EnableTransactionManagement
@Profile("production")
public class HibernateConfiguration {

    @Bean(name = "dataSource")
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("");
        dataSource.setUrl("");
        dataSource.setUsername("");
        dataSource.setPassword("");
        return dataSource;
    }

    protected Properties additionalProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "update");
        hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        hibernateProperties.setProperty("hibernate.show_sql", "true");
        return hibernateProperties;
    }

    @Bean
    @ConditionalOnBean(name = "dataSource")
    @ConditionalOnMissingBean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em
                = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource());
        em.setPackagesToScan("com.doc.manager");
        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        if (additionalProperties() != null) {
            em.setJpaProperties(additionalProperties());
        }
        return em;
    }

    @Bean
    @ConditionalOnMissingBean(type = "JpaTransactionManager")
    JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory);
        return transactionManager;
    }


}
