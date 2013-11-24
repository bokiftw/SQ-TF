/**
* Function which animates shuffle text effect 
*/
$(function(){
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#shuffle")
	userText = $('#shuffle_text'); 
	
	// Shuffle the contents of container
	container.shuffleLetters();
});

/**
* Countdown function. 
* Date format: year, month (0 is Jan/11 is Dec), day, hour, minute, second.
*/
var launch = new Date(2014, 03, 03, 07, 00);//DATE OF AN ANNOUNCEMENT
var start = new Date(2013, 10, 19, 00, 00);//DATE WHEN YOU STARTED A PROJECT

var days = new Object();
    days = $('.days');

var hours = new Object();
    hours = $('.hours');

var minutes = new Object();
    minutes = $('.minutes');
    
//var seconds = new Object();
    //seconds = $('.seconds');  /* We have disbled seconds to show */
    
    
setDate();

	//FUNCTION THAT CALCULATES REMAINING TIME AND CREATES COUNTER ELEMENT
function setDate(){
	"use strict";
	var now = new Date();
	if( launch < now ){
		days.html('<span class="numbers">0</span><span class="numbers_text">day</span>');
		hours.html('<span class="numbers">0</span><span class="numbers_text">hour</span>');
		minutes.html('<span class="numbers">0</span><span class="numbers_text">minute</span>');
        //seconds.html('<span class="numbers">0</span><span class="numbers_text">second</span>');
            
    }
    else{
       	var sec = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
       	var day = Math.floor(sec/86400);
       	days.html('<span class="numbers">'+day+'</span><span class="numbers_text">day'+(day>1?'s':'')+'</span>');
       	sec -= day*86400;

       	var hour = Math.floor(sec/3600);
       	hours.html('<span class="numbers">'+hour+'</span><span class="numbers_text">hour'+(hour>1?'s':'')+'</span>');
       	sec -= hour*3600;

       	var min = Math.floor(sec/60);
       	minutes.html('<span class="numbers">'+min+'</span><span class="numbers_text">minute'+(min>1?'s':'')+'</span>');

       	sec = Math.floor(sec-min*60);
        //seconds.html('<span class="numbers"><span id="numberssec">'+sec+'</span></span><span class="numbers_text">second'+
        //(sec>1?'S':'')+'</span>'); /* We have disbled seconds to show */

        /**
        * This function animates seconds bar loader. 
        */
        var percentPerSecond = 1.666; // 100% devided by 60 seconds
        var loaded = sec * percentPerSecond;
        $('.loader').css("width",loaded+"%");

        setTimeout(setDate, 1000);
        }
    }