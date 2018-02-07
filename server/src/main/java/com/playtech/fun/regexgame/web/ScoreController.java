package com.playtech.fun.regexgame.web;

import com.playtech.fun.regexgame.model.ScoreTable;
import com.playtech.fun.regexgame.service.ScoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ScoreController {

    private static final Logger logger = LoggerFactory.getLogger(ScoreController.class);

    @Autowired
    private ScoreService scoreService;

    @RequestMapping(method = RequestMethod.GET, value = "/scores", produces = "application/json")
    @ResponseBody
    ScoreTable getScore() {
        return scoreService.getScoreTable();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/scores/users/{user}")
    @ResponseBody
    Integer getScore(@PathVariable String user) {
        return scoreService.getScore(user);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/scores/{score}/users/{user}")
    void addScore(@PathVariable String user, @PathVariable Integer score) {
        logger.info("adding score {} to user {}", score, user);
        scoreService.addScore(user, score);
    }

}
