<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model
{

    // enter to site - save SESSION
    public function user_in()
    {
        $login = FALSE;
        $name = $this->input->post('username');
        $password = md5($this->input->post('password'));
        $this->load->database();
        $query = $this->db->get_where('user', array('name' => $name, 'password' => $password));
        if ($query->num_rows() > 0 ) {
            $login = TRUE;
            $_SESSION['name'] = $name;
            $_SESSION['login'] = $login;
        }
        return $login;
    } // end

    // clear - SESSION
    public function user_out()
    {
        $logout = FALSE;
        // ...
        return $logout;
    } // end

    /**/

} // end class