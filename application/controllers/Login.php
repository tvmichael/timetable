<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

    // start construct
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('form');
        $this->load->library('form_validation');
    }


    // login page
    public function index()
    {
        $this->form_validation->set_rules('username', '\'Логін\'', 'required|max_length[25]');
        $this->form_validation->set_rules('password', '\'Пароль\'', 'required|max_length[25]');
        if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('templates/head');
            $this->load->view('admin/login');
            $this->load->view('templates/footer');
        }
        else
        {
            $this->load->model('login_model');
            if ($this->login_model->user_in()) {

                $user_data = array('username' => $this->input->post('username'));
                $this->load->view('templates/head');
                $this->load->view('admin/load_xml_file', $user_data);
                $this->load->view('templates/footer');
            }
            else redirect('login');
        }
        /**/
    } // end login


    //
    public function upload_file(){
        $config['upload_path']   = 'public/uploads/';
        $config['allowed_types'] = 'xml';
        $config['file_name']     = 'tt.xml';
        $config['overwrite']     = TRUE;
        $config['max_size']      = 1024;
        $this->load->library('upload', $config);
        if ( ! $this->upload->do_upload('xmlfile'))
        {
            echo $this->upload->display_errors();
        }
        else
        {
            // $data = array('upload_data' => $this->upload->data());
            redirect('/');
        }
    } // end upload_file

} // end class
