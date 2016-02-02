<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Expose-Headers: *');

$content = '';
if($_GET['widgets']){
    $widgets = explode(',', $_GET['widgets']);
    $theme = $_GET['theme'];

    if(in_array('all', $widgets))
        $content .= getAll($theme);
    else {
        foreach ($widgets as $one) {
            if ($one == 'content') {
                $content .= getTmpl($theme, 'block');
                $content .= getTmpl($theme, 'content');
            } elseif ($one == 'searchResult') {
                $content .= getTmpl($theme, 'advancedSearchForm');
                $content .= getTmpl($theme, 'searchResult');
            } else {
                $content .= getTmpl($theme, $one);
            }
        }

        if (in_array(array('cabinetCartGoods', 'favorites', 'message', 'orderList', 'profile'), $widgets))
            $content .= getTmpl($theme, 'menuPersonalCabinet');
    }
}

echo $content;

function getTmpl($theme, $tmplName){
    $content = '';
    $tmpl = __DIR__ . '/' . $theme . '/tmpl/' . $tmplName . 'Tmpl.html';
    if (!file_exists($tmpl))
        $tmpl = __DIR__ . '/default/tmpl/' . $tmplName . 'Tmpl.html';

    if (file_exists($tmpl))
        $content = file_get_contents($tmpl);

    return $content;
}

function getAll($theme){
    $content = '';
    if(file_exists(__DIR__ . '/' . $theme . '/tmpl/'))
        $dir = __DIR__ . '/' . $theme . '/tmpl/';
    else
        $dir = __DIR__ . '/default/tmpl/';

    $files = scandir($dir);
    foreach($files as $one){
        if(preg_match('/.html$/', $one))
            $content .= file_get_contents($dir . $one);
    }

    return $content;
}

