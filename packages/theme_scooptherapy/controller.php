<?php
namespace Concrete\Package\ThemeScooptherapy;

use Concrete\Core\Package\Package;
use Concrete\Core\Page\Theme\Theme;

defined('C5_EXECUTE') or die("Access Denied.");

class Controller extends Package
{
	protected $pkgHandle = 'theme_scooptherapy';
	protected $appVersionRequired = '5.7.1';
	protected $pkgVersion = '1.0';

	public function getPackageDescription()
	{
	    return t("Adds Scooptherapy Theme.");
	}

	public function getPackageName()
	{
	    return t("Scooptherapy");
	}

	public function install()
	{
	    $pkg = parent::install();
	    Theme::add('scooptherapy', $pkg);
	}
}