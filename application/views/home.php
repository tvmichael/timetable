<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<main>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading text-right">
                    <div><a href="<?php echo base_url('/login');?>">Вхід</a></div>
                </div>
                <div class="panel-body">
                    <div id="data-xml" style="display: none">
                        <xml>
                        <?php
                            echo $xml;
                        ?>
                        </xml>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <select id="select-class" class="form-control"></select>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <table id="xml-table" class="table table-bordered table-hover">
                            <thead></thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="panel-footer">
                </div>
            </div>
        </div>
    </div>
</div>
</main>

<!-- TimeTable scripts -->
<script src="<?php echo base_url('/public/js/');?>timetable-xml-2017.js"></script>

