package net.rosansenapati.journalApp.controller;

import net.rosansenapati.journalApp.entity.JournalEntry;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/_journal")
public class JournalEntryController {
    private Map<Long, JournalEntry> journalEntries = new HashMap<>();

    //For Retriving All Data
    @GetMapping
    public List<JournalEntry> getAll(){
        return new ArrayList<>(journalEntries.values());
    }

    //For Adding(Passing) data
    @PostMapping
    public boolean createEntry(@RequestBody JournalEntry myEntry){

        journalEntries.put(myEntry.getId(), myEntry);
        return true;
    }

    //Specific Rretrive
    @GetMapping("id/{myId}")
    public JournalEntry journalEntryById(@PathVariable long myId){
        return journalEntries.get(myId);
    }

    //Delete Specific (According to ID)
    @DeleteMapping("id/{myId}")
    public JournalEntry deleteJournalEntryById(@PathVariable long myId){
        return journalEntries.remove(myId);
    }

    //Update Specific(According to ID)
    @PutMapping("id/{id}")
    public JournalEntry updateJournalEntryById(@PathVariable Long id, @RequestBody JournalEntry myEntry){
        return journalEntries.put(id,myEntry);
    }
}