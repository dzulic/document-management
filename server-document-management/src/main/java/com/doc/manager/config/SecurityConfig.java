package com.doc.manager.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    GrantedAuthorityDefaults grantedAuthorityDefaults() {
        return new GrantedAuthorityDefaults(""); // Remove the ROLE_ prefix
    }


    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
      /*  httpSecurity.authorizeRequests().antMatchers("http://localhost:8090/**").permitAll();

        httpSecurity
                .authorizeRequests().anyRequest().authenticated()
                .and().httpBasic();*/

        httpSecurity
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/**/*.{js,html,css}").permitAll()
                .antMatchers("/", "/userWS/loginUser").permitAll()
                .anyRequest().authenticated().and()
                .formLogin()
                .loginPage("/login").permitAll().and().exceptionHandling().accessDeniedPage("/403.html");
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authentication)
            throws Exception {
        authentication.inMemoryAuthentication()
                      .withUser("admin")
                      .password("admin")
                      .authorities("USER");
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}