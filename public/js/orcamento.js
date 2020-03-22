$(document).ready(function() {
    $("input[name='tel']").mask("(00) 0000-0000");
    $("input[name='cep']").mask("00000-000");

    //CEP
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#endereco").val("");
        $("#cidade").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#endereco").val("...");
                $("#cidade").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#endereco").val(dados.logradouro);
                        $("#cidade").val(dados.localidade);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            limpa_formulário_cep();
        }
    });



    //VALIDAÇÃO GERAL
    $("#form-orcamento").validate({
        onsubmit: true,
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel:{
                required: true,
                minlength: 14
            },
            endereco:{
                required: true
            },
            cidade:{
                required: true
            },
            cep:{
                required: true,
                minlength: 8
            },
            texto:{
                required: true,
                minlength: 20
            },
        },
        messages:{
            nome:{
                required: "Preencha o campo Nome"
            },
            email:{
                required: "Preencha o campo Email",
                email: "Email não é válido" 
            },
            tel:{
                required: "Preencha o campo Telefone",
                minlength: "Telefone está incompleto" 
            },
            endereco:{
                required: "Preencha o campo Endereço"
            },
            cidade:{
                required: "Preencha o campo Cidade"
            },
            cep:{
                required: "Preencha o campo CEP",
                minlength: "CEP está incompleto"
            },
            texto:{
                required: "Preencha o campo Mensagem",
                minlength: "Campo Mensagem precisa ter no mínimo 20 caracteres" 
            }
        },
        submitHandler: ()=>{ // SE O FORMULÁRIO FOR VALIDO
           sendAjax();
        } 
});
});

function sendAjax(){
    var data =  $("#form-orcamento").serializeArray();

    $.ajax("/send",{
        type: "post",
        data : {data},
        dataType: "json",
        beforeSend: ()=>{
            $("button[type='submit']").html("Enviando...");
            $("button[type='submit']").prop("disabled",true);
        },
        success:(resposta)=>{
            if(resposta.error){ //SE RECEBER UM ERRO NO PHP
                $("button[type='submit']").html("Enviar");
                $("button[type='submit']").prop("disabled",false);
                Swal.fire({
                    title: 'Erro',
                    text: resposta.error_msg,
                    type: 'error',
                    confirmButtonText: 'Tentar Novamente'
                });
            } else { // SE TUDO ESTIVER CORRETO
                $("button[type='submit']").html("Enviado!");
                Swal.fire({
                    title: 'Sucesso',
                    text: 'Recebemos sua mensagem, obrigado!',
                    type: 'success',
                    confirmButtonText: 'OK'
                });
            }
        },
        error:()=>{ //ERRO NA REQUISIÇÃO
            $("button[type='submit']").html("Enviar");
            $("button[type='submit']").prop("disabled",false);
            Swal.fire({
                title: 'Erro',
                text: 'Erro na comunicação com o servidor',
                type: 'error',
                confirmButtonText: 'OK'
            });
        }
    })
}