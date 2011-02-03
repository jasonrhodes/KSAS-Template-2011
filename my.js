/* PLUGINS */

/* 
 * Filament Group's input style plugin
 * More info here: http://www.filamentgroup.com/lab/accessible_custom_designed_checkbox_radio_button_inputs_styled_css_jquery/
 */
 
jQuery.fn.customInput = function(){
	$(this).each(function(i){	
		if($(this).is('[type=checkbox],[type=radio]')){
			var input = $(this);
			
			// get the associated label using the input's id
			var label = $('label[for='+input.attr('id')+']');
			
			//get type, for classname suffix 
			var inputType = (input.is('[type=checkbox]')) ? 'checkbox' : 'radio';
			
			// wrap the input + label in a div 
			$('<div class="custom-'+ inputType +'"></div>').insertBefore(input).append(input, label);
			
			// find all inputs in this set using the shared name attribute
			var allInputs = $('input[name='+input.attr('name')+']');
			
			// necessary for browsers that don't support the :hover pseudo class on labels
			label.hover(
				function(){ 
					$(this).addClass('hover'); 
					if(inputType == 'checkbox' && input.is(':checked')){ 
						$(this).addClass('checkedHover'); 
					} 
				},
				function(){ $(this).removeClass('hover checkedHover'); }
			);
			
			//bind custom event, trigger it, bind click,focus,blur events					
			input.bind('updateState', function(){	
				if (input.is(':checked')) {
					if (input.is(':radio')) {				
						allInputs.each(function(){
							$('label[for='+$(this).attr('id')+']').removeClass('checked');
						});		
					};
					label.addClass('checked');
				}
				else { label.removeClass('checked checkedHover checkedFocus'); }
										
			})
			.trigger('updateState')
			.click(function(){ 
				$(this).trigger('updateState'); 
			})
			.focus(function(){ 
				label.addClass('focus'); 
				if(inputType == 'checkbox' && input.is(':checked')){ 
					$(this).addClass('checkedFocus'); 
				} 
			})
			.blur(function(){ label.removeClass('focus checkedFocus'); });
		}
	});
};

/* MY CUSTOM JS */

$(window).load(function() {
	// Nivo Slider jQuery plugin init
    $('#feature-carousel').nivoSlider();
    
    // Custom Input jQuery plugin init
    $('input[name=google]').customInput();
    
    
    // Find height of #primaryContent and set it to height of #navDetails if #primaryContent is shorter
    (function () { 
    	var primaryHeight = $('#primaryContent').height(),
    		navHeight = $('#navDetails').height();
    		
		if (primaryHeight < navHeight) {
    		$('#primaryContent').height(navHeight);
    	}
    	
    })();
    
    // Find height of #bodyContent and set height of #rightSidebar to that -50 (for 50px of bottom padding) if #rightSidebar is shorter
    (function () { 
    	var bodyHeight = $('#bodyContent').height(),
    		rsbHeight = $('#rightSidebar').height(),
    		setHeight = bodyHeight - 50;
    		
		if (rsbHeight < setHeight) {
    		$('#rightSidebar').height(setHeight);
    	}
    	
    })();
    
    // Current page handling for setting navigation styles
    (function () {
    	var navLinks = $('#mainNav a'), 
    		pageTitle = $('head title').text(),
    		sTitle, wordMatch = /(\w+)/gi;
    		
    	sTitle = pageTitle.match(wordMatch)[0];
    	
    	for(i=0; i<navLinks.length; i+=1) {
    		var link = navLinks[i],
    			first = link.text().match(wordMatch);
    		if(first == sTitle) {
    			alert(link.text());
    		}
    	}
    	
    	
    	    	
    })();
    
});