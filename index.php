<?php

/*
Plugin Name: Modern Admin UI
Plugin URI: http://alnemec.com/modern-admin-ui/
Description: Modern and clean WordPress Admin Theme.
Author: Al Nemec
Version: 1.0
Author URI: http://alnemec.com
*/

function my_admin_theme_style() {
    wp_enqueue_style('my-admin-theme', plugins_url('wp-admin-master.css', __FILE__));
    
    wp_enqueue_script(
		'my-admin-theme-actions',
		plugins_url( 'js/wp-clean-admin-master.min.js' , __FILE__ ),
		array( 'jquery' )
	);
}
add_action('admin_enqueue_scripts', 'my_admin_theme_style');
add_action('login_enqueue_scripts', 'my_admin_theme_style');


function my_login_css() {
  echo '<link rel="stylesheet" type="text/css" href="' .plugins_url('login.css  ', __FILE__). '">';
}

add_action('login_head', 'my_login_css');



?>