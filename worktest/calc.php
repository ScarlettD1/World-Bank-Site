<?php
if(isset($_POST['submit'])){
    $date = $_POST['date'];
    $summ = (int)$_POST['sum'];
    $years = $_POST['years'];
    $add = (int)$_POST['add'];
    $summadd = $_POST['add_sum'];
    $percent = (int)'10';
    $daysn = (int)$_POST['hidden'];
    $summn=$summ;

    // Валидация
    if(!empty($date) && !empty($summ) && !empty($years)) {
        $error_result = 'Не все поля заполнены';
    }
    else {

        if(!is_numeric($summ) || !is_numeric($summadd)){
            $error_result = "Суммы должны быть числами";
        }
        else
            if($add=='0'){
                $summn = $summn + ($summn)*$daysn*($percent / $daysy);
            }
            else{
                $summn = $summn + ($summn+$summadd)*$daysn*($percent / $daysy);
            }

    }
}
?>