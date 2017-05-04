<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<main>
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h2>Завантажити файл</h2>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div>
                            <a href="<?php echo base_url('/')?>">Розклад</a>
                            <span> [<?php echo $username?>] </span>
                        </div>
                    </div>
                    <div class="panel-body">
                        <?php
                        $attributes  = array(
                            'method' => 'post',
                            'id'=>'load-file',
                            'enctype' => 'multipart/form-data'
                        );
                        echo form_open('login/upload_file', $attributes);
                        $attributes = array(
                            'name'    => 'xmlfile',
                            'type'    => 'file'
                        );
                        echo form_input($attributes);
                        echo '<br>';
                        echo form_submit('loadfile', 'Завантажити файл', array('class'=>'btn btn-default'));
                        echo form_close();
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>