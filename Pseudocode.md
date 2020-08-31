# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


---------------------------------------------------------------

PSEUDO CODE Homework 5 (calendar)

HTML

create time blocks for each hour from 9am to 5pm in HTML (or in javascript, JS will be easier to manipulate)
    create div for each hour
        include specific ID for each hour       
    create text of div to show the hour using moment.js
    create text area where the events of the hour are typed by user
        include class designation from CSS (.description)
    create save button
        include a class for all save buttons
    
    make sure pattern is the same for each "hour block" of the schedule        

----------------------------------------------------------------------------------------
JS

add current day and date with moments to #currentDay

    function read ()
    <!-- this is to look for anything saved previously in local storage -->
        use for loop 
            - read value from time property 
            - assign as text back in element (using its class (.description) and id (specific to each hour)
            - check current hour vs time slot (to determine color of text area: gray, red or white)
                - assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
                    
    function write ()
    <!-- this is to save a value from the text area to local storage, using the hour as the key when save button is clicked -->
        add click event to save button class to run function
            - read text from text area (class = "description", should be parent of save button)
            - read schedule hour
            - trim text, trim schedule hour
            - send to local storage

    call read (); on reload?