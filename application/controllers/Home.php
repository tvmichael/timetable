<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    // start construct
    public function __construct()
    {
        parent::__construct();
        // ...
    }


    // home page
	public function index()
	{
        $this->load->view('templates/head');
        $this->load->view('templates/header');
		$this->load->view('home');
        $this->load->view('templates/footer');
	} // end index


} // end class
