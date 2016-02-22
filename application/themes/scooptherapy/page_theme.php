<?php 
namespace Application\Theme\Scooptherapy;
use Concrete\Core\Page\Theme\Theme;

class PageTheme extends Theme {

    public function getThemeAreaLayoutPresets()
	{
	    $presets = array(
	        array(
	            'handle' => 'image',
	            'name' => 'Image',
	            'container' => '<div class="test"></div>',
	            'columns' => array(
	                '<div class="one-third"></div>',
	                '<div class="two-thirds"></div>'
	            ),
	        )
	    );
	    return $presets;
	}
}