<?php  
namespace Application\Block\Cta;

use Concrete\Core\Block\BlockController;
use View;
use File;
use stdClass;
use Loader;


class Controller extends BlockController {
	
	protected $btName = 'CTA';
	protected $btDescription = '';
	protected $btTable = 'btDCCta';
	
	protected $btInterfaceWidth = "700";
	protected $btInterfaceHeight = "450";
	
	protected $btCacheBlockRecord = true;
	protected $btCacheBlockOutput = true;
	protected $btCacheBlockOutputOnPost = true;
	protected $btCacheBlockOutputForRegisteredUsers = false;
	protected $btCacheBlockOutputLifetime = CACHE_LIFETIME;
	




	public function save($args) {
		$args['field_1_link_cID'] = empty($args['field_1_link_cID']) ? 0 : $args['field_1_link_cID'];
		parent::save($args);
	}




}
