package com.doc.manager.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.text.MessageFormat;
import java.util.Locale;

@Configuration
public class Config extends WebMvcConfigurerAdapter {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }

    @Bean
    public MessageSourceAccessor messageSourceAccessor() {
        return new MessageSourceAccessor(messageSource());
    }

    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource() {
            @Override
            protected MessageFormat createMessageFormat(String msg, Locale locale) {
                return new MessageFormat((msg != null ? msg : ""), locale) {
                    @Override
                    public void applyPattern(String pattern) {
                        if (pattern != null) {
                            pattern = pattern.replace("{ 0 }", "{0}");
                            pattern = pattern.replace("{ 1 }", "{1}");
                            pattern = pattern.replace("{ 2 }", "{2}");
                            pattern = pattern.replace("{ 3 }", "{3}");
                        }
                        super.applyPattern(pattern);
                    }
                };
            }
        };
        messageSource.setBasenames("classpath:/messages");
        return messageSource;
    }


}
