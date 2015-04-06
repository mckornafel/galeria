/*
 * MikeskiBox - jQuery Plugin
 * Simple lightbox alternative
 *
 * Copyright (c) 2014 Michał Kornafel
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.0 (06/01/2014)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {
   
    
    $.fn.mikeskibox = function(opts) {
        var options = $.extend( {}, $.fn.mikeskibox.defaults, opts );
        /*
        var options = {
            boxMargin: 10
        };
        
        if (parameters) {
            $.extend(options, parameters);
        }
        */
       /* var getImageSize = function(src) {
            var img = new Image();
            img.src = src;
            return ($(img).bind('load', function(e) {
                return {
                height: img.height,
                width: img.width
            }
            }));

            
        };*/
        

        
        //var ile = this.length;
        this.each(function() {
            var $this = $(this);
            $(this).click(function() {
                var next = $(this).next();

                
                
                
                $('body').css({
                    'overflow-x': 'hidden',
                    margin: '0px',
                    padding: '0px'
                    
                });
                
                $('<img id="imagino" />').attr('src', $(this).attr('href')).css('display', 'block').load(function() {
                    imgX = this.width;
                    imgY = this.height;
                    //alert(imgX);
                    showOverlay();
                    showPicture(imgX, imgY);
                    $(this).prependTo('#mikeskiboxContent');
                    $('<a id="next" href="#"></a>').html('next').appendTo('#mikeskiboxContent').click(function() {
                        alert(next.attr('href'));
                        return false;
                    });
                    closeMe();
                    
                });
                
                
                /*var bigImg = $(this).attr('href');
                
                var bigg = getImageSize(bigImg);
                var imgA = bigg.width;
                //var imgB = bigg.height;
                alert(bigImg + imgA);*/
                //var imgX;
                //var imgY;

                
                
                
                
                //var img = new Image();
                //imgg.src = $(img).attr('src');
                
                //var imgX = imgg.width;
                //var imgY = imgg.height;
                //$(img).appendTo('#mikeskiboxContent');
                
                
                
                return false;
                
            });
            
        });
        
        
        closeMe = function() {
            $('#mikeskiboxOverlay').click(function() {
                $(this).remove();
                $('#mikeskiboxContainer').remove();
            });
        }
        
        function showPicture(imgX, imgY) {
            var documentTop = $(document).scrollTop();
            var documentX = $(document).width();
            var windowY = $(window).height();
            var imgLeft = Math.ceil(((documentX - imgX) / 2) - options.boxMargin);
            var imgTop = Math.ceil((((windowY - imgY) / 2) - options.boxMargin) + documentTop);
            var containerX = imgX + (2 * options.boxMargin);

            
            
            $('<div id="mikeskiboxContainer"><div id="mikeskiboxContent"></div></div>').insertAfter('#mikeskiboxOverlay');
            $('#mikeskiboxContent').css('borderWidth', options.boxMargin + 'px');
            $('#mikeskiboxContainer').css({
                top: imgTop,
                left: imgLeft,
                width: containerX
                //height: imgY + 50
            });
            $('#mikeskiboxContainer, #mikeskiboxContent').show();
            
            return this;
        }
        
        function showOverlay() {
            var documentY = $(document).height();
            $('<div id="mikeskiboxOverlay"></div>').css('height', documentY).prependTo('body').show();
            return this;
        }
        
    };
    
     $.fn.mikeskibox.defaults = {
        boxMargin: 10
    };
})(jQuery);
    

