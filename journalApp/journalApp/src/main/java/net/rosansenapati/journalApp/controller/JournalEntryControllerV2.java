package net.rosansenapati.journalApp.controller;

import net.rosansenapati.journalApp.entity.JournalEntry;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/journal")
public class JournalEntryControllerV2 {

    //For Retriving All Data
    @GetMapping
    public List<JournalEntry> getAll(){
        return null;
    }

    //For Adding(Passing) data
    @PostMapping
    public boolean createEntry(@RequestBody JournalEntry myEntry){

        return true;
    }

    //Specific Rretrive
    @GetMapping("id/{myId}")
    public JournalEntry journalEntryById(@PathVariable long myId){
        return null;
    }

    //Delete Specific (According to ID)
    @DeleteMapping("id/{myId}")
    public JournalEntry deleteJournalEntryById(@PathVariable long myId){
        return null;
    }

    //Update Specific(According to ID)
    @PutMapping("id/{id}")
    public JournalEntry updateJournalEntryById(@PathVariable Long id, @RequestBody JournalEntry myEntry){
        return null;
    }
}