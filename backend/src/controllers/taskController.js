const database = require("../database/connection");

class taskController {
  listarTarefa(request, response) {
    database
      .select(
        "cp_cdtb_unidade_unid.UNID_NO_UNIDADE",
        "cp_cdtb_unidade_unid.ID_UNID_CD_UNIDADE",
        "fi_cdtb_ficha_fich.ID_FICH_NR_FICHA",
        "fi_cdtb_ficha_fich.FICH_DH_ABERTURA",
        "pe_cdtb_pessoa_fisica_pefi.PEFI_NO_NOME",
        "pe_cdtb_pessoa_fisica_pefi.PEFI_NO_SOBRENOME",
        "pe_cdtb_pessoa_fisica_pefi.PEFI_DH_NASCIMENTO",
        "fi_cdtb_item_sub_item_ficha_item.ID_ITEM_NR_ITEM",
        "fi_cdtb_item_sub_item_ficha_item.ID_ITEM_NR_SUBITEM",
        "fi_cdtb_item_sub_item_ficha_item.PROD_SL_EXAME"
      )
      .table("fi_cdtb_item_sub_item_ficha_item")
      .innerJoin(
        "cp_cdtb_unidade_unid",
        "fi_cdtb_item_sub_item_ficha_item.ID_UNID_CD_UNIDADE_FICHA",
        "cp_cdtb_unidade_unid.ID_UNID_CD_UNIDADE"
      )
      .innerJoin(
        "fi_cdtb_ficha_fich",
        "fi_cdtb_item_sub_item_ficha_item.ID_UNID_CD_UNIDADE_FICHA",
        "fi_cdtb_ficha_fich.ID_UNID_CD_UNIDADE_FICHA"
      )
      .innerJoin(
        "pe_cdtb_cliente_clie",
        "fi_cdtb_ficha_fich.ID_CLIE_NR_CLIENTE",
        "pe_cdtb_cliente_clie.ID_CLIE_NR_CLIENTE"
      )
      .innerJoin(
        "pe_cdtb_pessoa_fisica_pefi",
        "pe_cdtb_cliente_clie.ID_PEFI_CD_PESSOA_FISICA",
        "pe_cdtb_pessoa_fisica_pefi.ID_PEFI_CD_PESSOA_FISICA"
      ).orderBy("UNID_NO_UNIDADE", "asc")
      .then((numero_ficha) => {
        console.log(numero_ficha);
        response.json(numero_ficha);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new taskController();
