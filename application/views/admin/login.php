<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<main>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div><h3>Авторизація</h3></div>
                    </div>
                    <div class="panel-body">
                        <?php
                        $attributes = array('class' => '', 'id' => 'loginform');
                        echo form_open('/login', $attributes);
                        ?>

                        <div class="form-group">
                            <label for="username">Логін:</label>
                            <?php
                            echo form_error('username', '<div class="alert alert-warning">', '</div>');
                            $data = array(
                                'name'          => 'username',
                                'id'            => 'username',
                                'placeholder'   => 'Логін',
                                'class'         => 'form-control'
                            );
                            echo form_input($data);
                            ?>
                        </div>

                        <div class="form-group">
                            <label for="password">Пароль:</label>
                            <?php
                            echo form_error('password', '<div class="alert alert-warning">', '</div>');
                            $data = array(
                                'name'          => 'password',
                                'id'            => 'password',
                                'placeholder'   => 'Пароль',
                                'class'         => 'form-control'
                            );
                            echo form_password($data);
                            ?>
                        </div>

                        <div class="text-right">
                            <?php
                                $attributes = array(
                                    'class' => 'btn btn-default'
                                );
                                echo form_submit('submit', '  Вхід  ', $attributes);
                            ?>
                        </div>
                        <?php
                            echo form_close();
                        ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>