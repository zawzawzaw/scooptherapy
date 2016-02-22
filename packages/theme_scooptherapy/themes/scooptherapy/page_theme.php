<?php 
namespace Concrete\Package\ThemeScooptherapy\Theme\Scooptherapy;
use Concrete\Core\Page\Theme\Theme;

class PageTheme extends Theme {

    public function getThemeAreaLayoutPresets()
	{
	    $presets = array(
	        array(
	            'handle' => 'about_title',
	            'name' => 'About Title',
	            'container' => '<div></div>',
	            'columns' => array(
	                '<div class="one-third"></div>',
	                '<div class="two-thirds"></div>'
	            ),
	        )
	    );
	    return $presets;
	}
}