<!------------------------------------------------------------------------ Linha --------------------------------------------------------------------->


<hr style="margin-top: 190px">


<!------------------------------------------------------------------------ Form --------------------------------------------------------------------->


      <section class="container pt-2">
         <h1 class="cover-heading">Faça seu orçamento</h1>
            

          <form class="pt-4" id="form-orcamento" method="POST">
            <div class="form-row">
             <div class="form-group col-md-4">
                <label for="inputnome">Nome</label>
                <input type="text" class="form-control" name="nome" placeholder="Nome">
              </div>
               <div class="form-group col-md-2">
                <label for="inputnome">Empresa</label>
                <input type="text" class="form-control" name="empresa" placeholder="Empresa (Opcional)">
              </div>
              <div class="form-group col-md-4">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" name="email" placeholder="Email">
              </div>
              <div class="form-group col-md-2">
                <label for="inputtelefone">Telefone</label>
                <input class="form-control" type="tel" placeholder="(55) 5555-5555" name="tel">
              </div>
            </div>
           
           
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Endereço</label>
              <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua dos Bobos, nº 0">
              </div>
              <div class="form-group col-md-4">
                <label for="validationDefault03">Cidade</label>
                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Cidade" required>
              </div>
              <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="cep" name="cep">
              </div>
            </div>

          <div class="form-group">
              <label for="exampleFormControlTextarea1">Relate seu problema</label>
              <textarea class="form-control" name="texto" rows="3"></textarea>
            </div>

            <div class="form-group">
              
            </div>
            <button type="submit" class="btn btn-danger w-100">Enviar</button>
          </form>


       </section>





<!------------------------------------------------------------------------ Linha --------------------------------------------------------------------->


<hr style="margin-top: 220px">