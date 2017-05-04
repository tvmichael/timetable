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
        $this->load->helper('file');
        $data['xml'] = read_file('public/uploads/tt.xml');
        $data['xml'] = mb_convert_encoding($data['xml'], "UTF-8", 'windows-1251');

        $this->load->view('templates/head');
        $this->load->view('templates/header');
		$this->load->view('home', $data);
        $this->load->view('templates/footer');
	} // end index


} // end class
