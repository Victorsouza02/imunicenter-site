<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//CARREGAR PAGINAS
$route['empresa'] = 'home/pageEmpresa';
$route['servicos'] = 'home/pageServico';
$route['orcamento'] = 'home/pageOrcamento';
$route['contato'] = 'home/pageContato';


//ENVIAR EMAIL
$route['send']['post'] = 'home/sendEmail';

