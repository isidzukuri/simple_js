(function( $ ){

  $.fn.simpleFixedblock = function( options ) {  

    var settings = $.extend( {
      'scroll_area'    : false,
      'ss_fb_height'   : false,
      'anim_s' : 150,
      'easing' : 'easeOutCubic'
    }, options);

    return this.each(function() {  
    	add_into = $(this);
    	settings.scroll_area = settings.scroll_area ? settings.scroll_area : add_into.parent();
    	settings.ss_fb_height = settings.ss_fb_height ? settings.ss_fb_height : add_into.height();
    	if(add_into.find('.ss_fixed_block').length) add_into.find('.ss_fixed_block > *').unwrap();     		
		add_into.wrapInner('<div class="ss_fixed_block" />');
		
		ss_fb = add_into.find('.ss_fixed_block');
		ss_start_top = add_into.offset().top;

		ss_max_anim = settings.scroll_area.height() - settings.ss_fb_height;

		$(document).scroll(function() { 
			ss_cur_top_scroll = $(document).scrollTop();
			if(ss_cur_top_scroll > ss_start_top){
				ss_anim_m = ss_cur_top_scroll - ss_start_top;
				ss_anim_m = ss_anim_m > ss_max_anim ? ss_max_anim : ss_anim_m;
			}else{
				ss_anim_m = 0;
			}
			ss_anim_m = ss_anim_m < 0 ? 0 : ss_anim_m 
			ss_fb.stop(true).animate({marginTop: ss_anim_m}, settings.anim_s, settings.easing);
		});
    });

  };
})( jQuery );
