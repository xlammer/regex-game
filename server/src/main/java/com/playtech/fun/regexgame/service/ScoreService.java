package com.playtech.fun.regexgame.service;

import com.playtech.fun.regexgame.model.ScoreTable;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {

    private ScoreTable scoreTable = new ScoreTable();

    public void addScore(String user, int score) {
        scoreTable.update(user, score);
    }

    public ScoreTable getScoreTable() {
        return scoreTable;
    }

    public Integer getScore(String user) {
        return scoreTable.get(user);
    }
}
