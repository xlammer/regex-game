package com.playtech.fun.regexgame;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan
public class RegexGameServer {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(RegexGameServer.class, args);
    }

}
