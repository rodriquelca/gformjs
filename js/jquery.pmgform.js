/**
 * @fileoverview jquery.pmgform.js
 * @brief jQuery plugin to create a context menu using the bootstrap styles 
 * @date 20120718
 * @version 0.1
 * @requires jQuery
*/
(function( $ ) {
    var methods = {
        /**
        * jQuery Method Function initialize plugin
        * 
        * @namespace Set as a success the mensage text
        * @function
        * @param {object} options.
        * @return value
        * @memberOf pmgbar
        */
        init : function( options ) {
                var settings = {
                    //Here all Settings
                    container: '#'+$(this).attr("id"),
                    click : null
                };  
                return this.each(function(){
                    if(options){
                        settings = $.extend(settings,options);
                    }
                    //HERE would be the code
                    $(this).createForm(settings);
                    //alert('hola');
                });
        },
        example : function(a , b){}
    };

    /**
     *
     * @class pmgform
     * @param {object} method object to create the status bar
     * @return  basic form
     * @memberOf jQuery.fn
     */
    $.fn.pmgform = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exsts!' );
        }
    };
    
    $.fn.createForm = function( setting ) {
        var container = $(setting.container);
        //create div
        //<div id="myModal" class="modal hide fade in" style="display: none;">
        var modal = $('<div>').addClass('modal hide fade in').attr('id', 'myModal').text('hola');
        //create div
        //<div id="myModal" class="modal hide fade in" style="display: none;">
        container.append(modal);
        
        //var html = $('');
        //html.add("div").addClass('primera');
        
//         $('#containment').append(
//              $('<div>').addClass('className').text($('#example-textarea').val())
//          );
        

    };
    
    
})( jQuery );