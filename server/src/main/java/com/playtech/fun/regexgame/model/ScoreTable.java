package com.playtech.fun.regexgame.model;

import java.util.HashMap;
import java.util.Map;

public class ScoreTable {

    private final Map<String, Integer> table;

    public ScoreTable() {
        table = new HashMap<String, Integer>();
    }

    public void update(String user, int score) {
        Integer current = table.get(user);
        table.put(user, score + (current == null ? 0 : current));
    }

    public Map<String, Integer> getTable() {
        return table;
    }

    public Integer get(String user) {
        return table.get(user);
    }
}
