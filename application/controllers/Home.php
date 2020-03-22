<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	//CARREGAMENTO DE PÁGINAS

	public function index()
	{
		$this->template->show("contents/home");
	}

	public function pageEmpresa(){
		$this->template->show("contents/empresa");
	}

	public function pageServico(){
		$this->template->show("contents/servicos");
	}

	public function pageOrcamento(){
		$this->template->show("contents/orcamento");
	}

	public function pageContato(){
		$this->template->show("contents/contato");
	}

	//AÇÕES

	public function sendEmail(){
		$result = array(
			"error" => false,
			"error_msg" => ""
		);
		$data = $this->input->post('data');
		$this->load->library('mailer');
		$this->mailer->__constructor($data);
		if($this->mailer->validateData()){
			if(!$this->mailer->sendEmail()){
				$result['error'] = true;
				$result['error_msg'] = "Houve um erro no envio do email";
			} 
		} else {
			$result['error'] = true;
			$result['error_msg'] = "Houve um erro no formulário";
		}
		echo json_encode($result);
	}
}