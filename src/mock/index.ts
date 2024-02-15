export type News = {
  id?: number;
  type?: string;
  title?: string;
  introduction?: string;
  publication_date?: string;
  product_id?: number;
  products?: string;
  editorial_sections?: string;
  images?: string;
  related_products?: string;
  highlight?: boolean;
  link?: string;
};

export type Data = Array<News>;

export const data: Data = [
  {
    id: 39175,
    type: 'Notícia',
    title:
      'Setor de serviços varia 0,3% em dezembro e fecha 2023 com terceira alta anual seguida',
    introduction:
      'Em 2023, o volume de serviços apresentou a terceira expansão anual seguida - Foto: Freepik O volume de serviços no Brasil apresentou variação de 0,3% em dezembro de 2023, segundo resultado positivo consecutivo, acumulando um ganho de 1,2% nos dois...',
    publication_date: '09/02/2024 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PMS_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PMS_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39175-setor-de-servicos-varia-0-3-em-dezembro-e-fecha-2023-com-terceira-alta-anual-seguida.html',
  },
  {
    id: 39173,
    type: 'Release',
    title:
      'Volume de serviços varia 0,3% em dezembro, e fecha 2023 com alta de 2,3%',
    introduction:
      'Em dezembro de 2023, o volume de serviços no Brasil apresentou variação de 0,3% frente a novembro, na série com ajuste sazonal. É segundo resultado positivo consecutivo, acumulando um ganho de 1,2% nos dois últimos meses do ano. Indicadores da Pesquisa...',
    publication_date: '09/02/2024 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39173-volume-de-servicos-varia-0-3-em-dezembro-e-fecha-2023-com-alta-de-2-3.html',
  },
  {
    id: 39170,
    type: 'Notícia',
    title: 'Abate de bovinos e suínos cresce no 4º trimestre de 2023',
    introduction:
      'As 9,05 milhões cabeças de bovinos abatidas no 4º trimestre representaram aumento de 19,9% frente ao mesmo período de 2022 - Foto: Licia Rubinstein /Agência IBGE Notícias O abate de bovinos cresceu 19,9% no 4º trimestre de 2023, na comparação com o mesmo...',
    publication_date: '09/02/2024 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/Gado_031_LiciaR_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/Gado_031_LiciaR_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39170-abate-de-bovinos-e-suinos-cresce-no-4-trimestre-de-2023.html',
  },
  {
    id: 39153,
    type: 'Release',
    title:
      'Trimestrais da pecuária: abate de bovinos e suínos cresce enquanto o de frangos cai no 4º trimestre de 2023',
    introduction:
      'Os primeiros resultados da produção animal no 4º trimestre de 2023 apontam que, ante o mesmo período de 2022, o abate de bovinos aumentou 19,9%, o de suínos subiu 0,8% e o de frangos recuou 2,3%. Na comparação com o 3º trimestre de 2023, o abate de...',
    publication_date: '09/02/2024 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39153-trimestrais-da-pecuaria-abate-de-bovinos-e-suinos-cresce-enquanto-frangos-cai-no-4-trimestre-de-2023.html',
  },
  {
    id: 39178,
    type: 'Notícia',
    title: 'IBGE divulgará novos resultados do Censo 2022',
    introduction:
      'A divulgação dos resultados do Censo Demográfico 2022: Características dos domicílios será no Teatro Clara Nunes - Foto: Prefeitura Municipal de Diadema Diadema, em São Paulo, foi o município escolhido pelo Instituto Brasileiro de Geografia e Estatística...',
    publication_date: '08/02/2024 21:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/DIADEMA_thumb1.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/DIADEMA_home1.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39178-em-diadema-o-ibge-divulgara-novos-resultados-do-censo-2022.html',
  },
  {
    id: 39136,
    type: 'Notícia',
    title: 'Inflação sobe 0,42% em janeiro, pressionada por alta dos alimentos',
    introduction:
      'O preço da batata-inglesa subiu 29,45% em janeiro e impulsionou a alta dos alimentos - Foto: Acervo IBGE A inflação do país foi de 0,42% em janeiro, após a variação de 0,56% registrada no mês anterior. A alta no primeiro mês do ano foi influenciada...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9256,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPCA_THUMB_AcervoIBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPCA_HOME_AcervoIBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39136-inflacao-sobe-0-42-em-janeiro-pressionada-por-alta-dos-alimentos.html',
  },
  {
    id: 39135,
    type: 'Release',
    title: 'IPCA foi de 0,42% em janeiro',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) de janeiro foi de 0,42% e ficou 0,14 ponto percentual abaixo da taxa de dezembro (0,56%). Nos últimos 12 meses, o IPCA acumula alta de 4,51%, abaixo dos 4,62% observados nos 12 meses imediatamente...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9256,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39135-ipca-foi-de-0-42-em-janeiro.html',
  },
  {
    id: 39138,
    type: 'Notícia',
    title:
      'Estimativa de janeiro aponta safra 3,8% menor em 2024, refletindo os problemas climáticos de 2023',
    introduction:
      'O algodão foi o único produto a apresentar recorde de produção com alta de 9,4% no volume e 8,5% na área plantada - Foto: Universidade Estadual de Maringá  A safra brasileira de cereais, leguminosas e oleaginosas deve alcançar 303,4 milhões de toneladas...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/LSPA_THUMB_Universidade-Estadual-de-Maring.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PIMBR-HOME-AgVale.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39138-estimativa-de-janeiro-aponta-safra-3-8-menor-em-2024-refletindo-os-problemas-climaticos-de-2023.html',
  },
  {
    id: 39137,
    type: 'Release',
    title:
      'Em janeiro, IBGE prevê safra de 303,4 milhões de toneladas para 2024',
    introduction:
      'Em janeiro, a produção de cereais, leguminosas e oleaginosas estimada para 2024 deve totalizar 303,4 milhões de toneladas, 3,8% menor que a obtida em 2023 (315,4 milhões de toneladas) com redução de 12,0 milhões de toneladas; e 1,0% abaixo da informada...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39137-em-janeiro-ibge-preve-safra-de-303-4-milhoes-de-toneladas-para-2024.html',
  },
  {
    id: 39128,
    type: 'Notícia',
    title:
      'Produção industrial fecha 2023 com crescimento em dez dos 18 locais pesquisados',
    introduction:
      'As atividades de coque, products derivados do petróleo e biocombustíveis impulsionaram o desempenho da indústria potiguar em 2023 - Foto: Flickr A produção da indústria nacional teve alta de 1,1% na passagem de novembro para dezembro, com expansão em dez...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PIMPFreg_THUMB_Flickr.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PIMPFreg_HOME_Flickr.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39128-producao-industrial-fecha-2023-com-crescimento-em-dez-dos-18-locais-pesquisados.html',
  },
  {
    id: 39127,
    type: 'Release',
    title: 'Indústria fecha 2023 com alta em dez dos 18 locais pesquisados',
    introduction:
      'A indústria nacional avançou 1,1% de novembro para dezembro, na série com ajuste sazonal, com dez dos 15 locais pesquisados pelo IBGE apresentando taxas positivas. As maiores altas foram em Pernambuco (11,6%), Amazonas (7,4%) e Santa Catarina (7,2%). Em...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39127-industria-fecha-2023-com-alta-em-dez-dos-18-locais-pesquisados.html',
  },
  {
    id: 39125,
    type: 'Notícia',
    title: 'Preços da construção iniciam ano com variação de 0,19% em janeiro',
    introduction:
      'Parcela da mão de obra variou 0,27% em janeiro, com reajuste no valor do salário mínimo - Foto: Agência Pará O Índice Nacional da Construção Civil (Sinapi), divulgado hoje (08) pelo IBGE, apresentou variação de 0,19% em janeiro, queda de 0,07 ponto...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/SINAPI_THUMB_Ag-Para.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/SINAPI_HOME_Ag-Para.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39125-precos-da-construcao-iniciam-ano-com-variacao-de-0-19-em-janeiro.html',
  },
  {
    id: 39123,
    type: 'Release',
    title: 'Em janeiro, Índice Nacional da Construção Civil é de 0,19%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) variou 0,19% em janeiro, caindo 0,07 ponto percentual (p.p.) em relação a dezembro de 2023 (0,26%). Em relação a janeiro de 2023 (0,31%), a taxa foi menor em 0,12 p.p. O acumulado nos últimos doze meses foi...',
    publication_date: '08/02/2024 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39123-em-janeiro-indice-nacional-da-construcao-civil-e-de-0-19.html',
  },
  {
    id: 39124,
    type: 'Notícia',
    title:
      'IBGE prepara indicadores ODS para relatório que o Brasil vai apresentar em evento da ONU',
    introduction:
      'Foto: Márcio Costa/Agência IBGE Notícias Em reunião realizada ontem (6 de fevereiro), o IBGE iniciou as discussões sobre as ações a serem desenvolvidas em 2024 para avançar no monitoramento e na produção de indicadores dos Objetivos de Desenvolvimento...',
    publication_date: '07/02/2024 14:10:32',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/reuniaoODS_HOME.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/reuniaoODS_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39124-ibge-prepara-indicadores-ods-para-relatorio-que-o-brasil-vai-apresentar-em-evento-da-onu.html',
  },
  {
    id: 39104,
    type: 'Notícia',
    title: 'Vendas no varejo caem 1,3% em dezembro e fecham o ano em 1,7%',
    introduction:
      'O setor de Veículos e motos, partes e peças acumulou ganho de 8,1% em 2023 - Foto: Freepick As vendas do comércio varejista no país recuaram 1,3% na passagem de novembro para dezembro. É o segundo resultado efetivamente negativo para 2023, fora da faixa...',
    publication_date: '07/02/2024 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PMC_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PMC_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":"O setor de Ve\\u00edculos e motos, partes e pe\\u00e7as acumulou ganho de 8,1% em 2023 - Foto: Freepick"}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39104-vendas-no-varejo-caem-1-3-em-dezembro-e-fecham-o-ano-em-1-7.html',
  },
  {
    id: 39103,
    type: 'Release',
    title:
      'Em dezembro, vendas no varejo caem 1,3% e fecham 2023 com alta de 1,7%',
    introduction:
      'Em dezembro de 2023 o volume de vendas no comércio varejista nacional caiu 1,3% frente a novembro, na série com ajuste sazonal. A média móvel trimestral foi de 0,6%.  Na série sem ajuste sazonal, frente a dezembro de 2022, o comércio varejista apresentou...',
    publication_date: '07/02/2024 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39103-em-dezembro-vendas-no-varejo-caem-1-3-e-fecham-2023-com-alta-de-1-7.html',
  },
  {
    id: 39096,
    type: 'Notícia',
    title:
      'Expedição IBGE Jalapão leva informação e cidadania a municípios no Tocantins',
    introduction:
      'Concentração da Expedição na Praça dos Girassóis - Foto - Acervo IBGE Inspirada nas expedições históricas realizadas pelo Instituto, cerca de 70 pessoas participaram da Expedição IBGE Jalapão Tocantins para divulgação das coordenadas geográficas dos...',
    publication_date: '06/02/2024 11:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Expedi_Jalapa_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Expedi_Jalapa_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39096-expedicao-ibge-jalapao-leva-informacao-e-cidadania-a-municipios-no-tocantins.html',
  },
  {
    id: 39084,
    type: 'Notícia',
    title:
      'IBGE inaugura primeiro totem interativo em parceria com os Correios',
    introduction:
      'A Expedição IBGE Jalapão Tocantins, que teve início no dia 1º de fevereiro, com saída da Capital Palmas, se encerrou em Ponte Alta do Tocantins no período da tarde, com uma parceria inédita entre o IBGE e os Correios: a inauguração de um totem interativo...',
    publication_date: '05/02/2024 15:30:51',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/totem_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/totem_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39084-ibge-inaugura-primeiro-totem-interativo-em-parceria-com-os-correios.html',
  },
  {
    id: 39083,
    type: 'Notícia',
    title: 'Agenda IBGE de 5 a 11 de fevereiro é disponibilizada',
    introduction:
      'Agenda IBGE traz a programação do instituto para a semana - Foto: Bel Corção/Brasil com S Está disponível desde às 9h de hoje (05), a nova edição da AgendaIBGE, com as atividades marcadas para a semana entre 5 e 11 de fevereiro. O documento traz as...',
    publication_date: '05/02/2024 10:41:14',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Agenda-IBGE_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Agenda-IBGE_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39083-agenda-ibge-de-5-a-11-de-fevereiro-e-disponibilizada.html',
  },
  {
    id: 39080,
    type: 'Notícia',
    title:
      'Censo 2022: IBGE divulga coordenadas geográficas dos endereços em expedição no Jalapão em Tocantins',
    introduction:
      'O Instituto Brasileiro de Geografia e Estatística (IBGE) divulgou, nesta sexta-feira, 2, na cidade de Ponte Alta do Tocantins, pela primeira vez em sua história, os dados das coordenadas geográficas dos endereços do Censo 2022. O evento de divulgação faz...',
    publication_date: '02/02/2024 18:15:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/EventoTocantis_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/EventoTocantis_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39080-censo-2022-ibge-divulga-coordenadas-geograficas-dos-enderecos-em-expedicao-no-jalapao-em-tocantins.html',
  },
  {
    id: 39075,
    type: 'Notícia',
    title:
      'Presidência cria Grupo de Trabalho para aperfeiçoar procedimentos de segurança de disseminação dos products do IBGE',
    introduction:
      'A Presidência do Instituto Brasileiro de Geografia e Estatística (IBGE), por meio da Portaria nº 169 de 29 de janeiro, instituiu o Grupo de Trabalho de Disseminação (GT-Disseminação) para a redefinição dos protocolos institucionais de publicação e...',
    publication_date: '02/02/2024 15:59:56',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/noticia-presidencia.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/noticia-presidencia.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39075-presidencia-cria-grupo-de-trabalho-para-aperfeicoar-procedimentos-de-seguranca-de-disseminacao-dos-products-do-ibge.html',
  },
  {
    id: 39068,
    type: 'Notícia',
    title:
      'Em Palmas, IBGE participa de programação com governador, servidores e oficina',
    introduction:
      'Presidente do IBGE abre Oficina com Gestores do Tocantins - Foto: Divulgação SES/TO O presidente do IBGE, Marcio Pochmann, e diretores do Instituto participaram de extensa programação em Palmas (TO), nesta quarta-feira, 31, como parte das ações de...',
    publication_date: '02/02/2024 12:50:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/OficinasTO_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/OficinasTO_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39068-em-palmas-ibge-participa-de-programacao-com-governador-servidores-e-oficina.html',
  },
  {
    id: 39065,
    type: 'Notícia',
    title:
      'IBGE divulga pela primeira vez as coordenadas geográficas dos endereços do país',
    introduction:
      'Os recenseadores coletaram as coordenadas geográficas durante o trabalho de campo - Foto: Helena Pontes/Agência IBGE Notícias  O IBGE divulgou hoje (2) as coordenadas geográficas das espécies de endereços do Censo 2022. É a primeira vez que o Instituto...',
    publication_date: '02/02/2024 10:00:00',
    product_id: 0,
    products:
      '22827|Censo 2022#3|censo-demografico-2022|2098;38734|Cadastro Nacional de Endereços para Fins Estatísticos|cadastro-nacional-de-enderecos-para-fins-estatisticos|3093',
    editorial_sections: 'censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/DMC-Coordenadas_Thumb_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/DMC-Coordenadas_home_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827, 38734',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39065-ibge-divulga-pela-primeira-vez-as-coordenadas-geograficas-dos-enderecos-do-pais.html',
  },
  {
    id: 39062,
    type: 'Notícia',
    title:
      'Indústria cresce 1,1% em dezembro e fecha 2023 com taxa positiva de 0,2%',
    introduction:
      'Minério de ferro contribuiu para os resultados positivos no mês e no ano - Foto: Agência Vale A produção industrial cresceu 1,1% em dezembro de 2023, quinto mês consecutivo de crescimento na produção, após também registrar taxas positivas em novembro...',
    publication_date: '02/02/2024 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PIMBR-THUMB-AgVale.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/PIMBR-HOME-AgVale.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39062-industria-cresce-1-1-em-dezembro-e-fecha-2023-com-taxa-positiva-de-0-2.html',
  },
  {
    id: 39061,
    type: 'Release',
    title:
      'Produção industrial cresce 1,1% em dezembro e fecha 2023 com variação de 0,2%',
    introduction:
      'Em dezembro de 2023, a produção industrial nacional cresceu 1,1% frente a novembro, na série com ajuste sazonal. Em relação a dezembro de 2022, a indústria avançou 1,0%, após quatro meses de crescimento nesta comparação: novembro (0,7%), outubro (0,2%),...',
    publication_date: '02/02/2024 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39061-producao-industrial-cresce-1-1-em-dezembro-e-fecha-2023-com-variacao-de-0-2.html',
  },
  {
    id: 39064,
    type: 'Notícia',
    title: 'CPNU: IBGE inclui prova de títulos para cargos de nível médio ',
    introduction:
      'Após publicação dos editais do Concurso Público Nacional Unificado (CPNU), feita pelo Ministério da Gestão e da Inovação em Serviços Públicos (MGI), o IBGE solicitou retificação para adicionar uma etapa de prova de títulos às vagas destinadas a cargos...',
    publication_date: '01/02/2024 17:58:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Concurso_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Concurso_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39064-cpnu-ibge-inclui-prova-de-titles-para-cargos-de-nivel-medio.html',
  },
  {
    id: 39059,
    type: 'Notícia',
    title:
      'IBGEeduca divulga material em quadrinhos da Expedição IBGE Jalapão no Tocantins',
    introduction:
      'O IBGEeduca publicou em suas plataformas o material em quadrinhos da Expedição IBGE Jalapão no Tocantins, que acontece nos dias 1º e 2 de fevereiro, saindo da cidade de Palmas rumo à Ponte Alta do Tocantins, onde fica o Parque do Jalapão. O conteúdo...',
    publication_date: '01/02/2024 15:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/IBGEeduca_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/IBGEeduca_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39059-ibgeeduca-divulga-material-em-quadrinhos-da-expedicao-ibge-jalapao-no-tocantins.html',
  },
  {
    id: 39046,
    type: 'Notícia',
    title:
      'Em parceria com a UFT, IBGE realiza em Palmas primeiro Diálogos Externos',
    introduction:
      'O projeto Diálogos Externos pensará diretrizes de um novo IBGE em conjunto com a sociedade - Foto: Wendy Becker Lançado em agosto de 2023, o projeto "Diálogos IBGE 90 Anos" tem como objetivo registrar a memória de quase nove décadas de atuação do...',
    publication_date: '01/02/2024 11:25:15',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/thumb_Wendy_Becker.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/home_Wendy_Becker.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39046-em-parceria-com-a-uft-ibge-realiza-em-palmas-primeiro-dialogos-externos.html',
  },
  {
    id: 39031,
    type: 'Release',
    title: 'IPP varia -0,18% em dezembro e fecha 2023 em -4,98%',
    introduction:
      'Em dezembro de 2023, os preços da indústria variaram -0,18% frente a novembro, acumulando queda de 4,98% no ano, menor valor acumulado no ano até um mês de dezembro desde o início da série histórica, em 2014. O acumulado de 2023 foi, aproximadamente, 8...',
    publication_date: '01/02/2024 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39031-ipp-varia-0-18-em-dezembro-e-fecha-2023-em-4-98.html',
  },
  {
    id: 39033,
    type: 'Notícia',
    title:
      'Preços na indústria caem 0,18% em dezembro e fecham 2023 com queda de 4,98%',
    introduction:
      'A atividade de refino de petróleo e biocombustíveis exerceu a maior influência (-1,85 p.p.) no resultado acumulado no ano - Foto: André Valentin/Agência Petrobras Os preços do setor industrial tiveram variação negativa de 0,18% em dezembro de 2023 frente...',
    publication_date: '01/02/2024 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPP_THUMB_AndreValentim-AgenciaPetrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPP_HOME_AndreValentim-AgenciaPetrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39033-precos-na-industria-caem-0-18-em-dezembro-e-fecham-2023-com-queda-de-4-98.html',
  },
  {
    id: 39021,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,4% e taxa de subutilização é de 17,3% no trimestre encerrado em dezembro',
    introduction:
      'A taxa de desocupação (7,4%) no trimestre encerrado em dezembro de 2023 recuou 0,3 ponto percentual (p.p.) frente ao trimestre de julho a setembro de 2023 (7,7%) e caiu 0,5 p.p. ante o mesmo trimestre de 2022 (7,9%). Foi a menor taxa desde o trimestre...',
    publication_date: '31/01/2024 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39021-pnad-continua-taxa-de-desocupacao-e-de-7-4-e-taxa-de-subutilizacao-e-de-17-3-no-trimestre-encerrado-em-dezembro.html',
  },
  {
    id: 39025,
    type: 'Release',
    title:
      'PNAD Contínua: em 2023, taxa anual de desocupação foi de 7,8% enquanto de taxa de subutilização foi de 18,0% ',
    introduction:
      'A taxa anual de desocupação foi de 7,8%, recuando 1,8 ponto percentual (p.p.) frente à média de 2022 (9,6%). No confronto contra 2019 (11,8%), o recuo é de 4 p.p. Frente a 2012, quando a taxa média foi de 7,4%, o aumento foi de 0,4 p.p. A população...',
    publication_date: '31/01/2024 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39025-pnad-continua-em-2023-taxa-anual-de-desocupacao-foi-de-7-8-enquanto-de-taxa-de-subutilizacao-foi-de-18-0.html',
  },
  {
    id: 39022,
    type: 'Notícia',
    title: 'Taxa de desocupação cai a 7,8% em 2023, menor patamar desde 2014',
    introduction:
      'Em 2023, número de empregados com carteira assinada bate recorde - Foto: Dênio Simões/Agência Brasília A taxa de desocupação chegou a 7,4% no trimestre encerrado em dezembro de 2023, um recuo de 0,3 ponto percentual (p.p.) em comparação com o trimestre...',
    publication_date: '31/01/2024 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_01\\/PNAD_THUMB_Dnio-Simes-Agncia-Braslia.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_01\\/PNAD_HOME_Dnio-Simes-Agncia-Braslia.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39022-taxa-de-desocupacao-cai-a-7-8-em-2023-menor-patamar-desde-2014.html',
  },
  {
    id: 39023,
    type: 'Notícia',
    title: 'IBGE divulga programa da Expedição IBGE Jalapão no Tocantins',
    introduction:
      'Começa na próxima quinta-feira, dia 1º de fevereiro, a Expedição IBGE Jalapão Tocantins, que partirá da Praça dos Girassóis, na cidade de Palmas, às 14h, rumo ao município de Ponte Alta do Tocantins, portal de entrada do Parque do Jalapão. Dentro da...',
    publication_date: '30/01/2024 18:43:09',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_THUMB_2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39023-ibge-divulga-programa-da-expedicao-ibge-jalapao.html',
  },
  {
    id: 39024,
    type: 'Notícia',
    title:
      'Das primeiras expedições à captura das coordenadas, 90 anos de pesquisa e trabalho de campo para retratar o território brasileiro',
    introduction:
      'A Expedição IBGE Jalapão Tocantins partirá no dia 1º, da Praça dos Girassóis, na cidade de Palmas, às 14hs, rumo ao município de Ponte Alta do Tocantins - Foto: Helena Pontes/Agência IBGE Notícias O IBGE quer resgatar o cenário de suas grandes expedições...',
    publication_date: '30/01/2024 18:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Expediao-Jalapao_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Expediao-Jalapao_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39024-das-primeiras-expedicoes-a-captura-das-coordenadas-90-anos-de-pesquisa-e-trabalho-de-campo-para-retratar-o-territorio-brasileiro.html',
  },
  {
    id: 39014,
    type: 'Notícia',
    title:
      'Em visita ao IBGE, ministra Simone Tebet destaca projeto de rotas de integração sulamericana',
    introduction:
      'Ministra Simone Tebet e Marcio Pochmann discutem ações conjuntas entre MPO e IBGE para 2024 -  Foto: Marina S. Alves/IBGE A Ministra do Planejamento e Orçamento (MPO), Simone Tebet, reuniu-se com a diretoria do IBGE nesta segunda-feira, 29, para tratar...',
    publication_date: '29/01/2024 18:25:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Encontro-MinistraSimoneTebet_2_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Encontro-MinistraSimoneTebet_2_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39014-em-visita-ao-ibge-ministra-simone-tebet-destaca-projeto-de-rotas-de-integracao-sulamericana.html',
  },
  {
    id: 39010,
    type: 'Notícia',
    title: 'Ministra Simone Tebet reúne-se com IBGE no Rio de Janeiro',
    introduction:
      'A Diretoria do IBGE e assessores participaram da reunião com a ministra Simone Tebet  - Foto: Marina S. Alves/IBGE A Ministra do Planejamento e Orçamento (MPO), Simone Tebet, reuniu-se nesta segunda-feira, 29, com a diretoria do Instituto Brasileiro de...',
    publication_date: '29/01/2024 13:45:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Encontro-MinistraSimoneTebet_THUMB-2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Encontro-MinistraSimoneTebet_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39010-ministra-simone-tebet-reune-se-com-ibge-no-rio-de-janeiro.html',
  },
  {
    id: 39005,
    type: 'Notícia',
    title: 'IBGE disponibiliza agenda semanal para ampliar transparência',
    introduction:
      'Foto: Bel Corção/Brasil com S Está disponível no Portal do IBGE, desde às 9h de hoje (29), o canal informativo AgendaIBGE. Com a iniciativa, o Instituto pretende criar um canal com os Poderes Executivo, Judiciário e Legislativo, autoridades e gestores...',
    publication_date: '29/01/2024 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Agenda-IBGE_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Agenda-IBGE_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39005-ibge-disponibiliza-agenda-semanal-para-ampliar-transparencia.html',
  },
  {
    id: 38993,
    type: 'Notícia',
    title: 'Erramos: Divulgação do IPCA-15 de janeiro no Sidra',
    introduction:
      'O IBGE divulgou às 08:00 de hoje os resultados da pesquisa IPCA-15, quando a mesma deveria ter ocorrido às 09:00. O IBGE relata que, diante de um problema técnico computacional de horários em seus equipamentos servidores, este processo, que é automático,...',
    publication_date: '26/01/2024 11:15:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/0001-Erramos_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/0001-Erramos_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38993-erramos-divulgacao-do-ipca-15-de-janeiro-no-sidra.html',
  },
  {
    id: 38991,
    type: 'Notícia',
    title:
      'IBGE realiza lançamento do Plano de Trabalho 2024 na Agência Guarulhos (SP)',
    introduction:
      'Participantes presentes ao final do Lançamento do Plano de Trabalho 2024 - Foto Ralph Izumi A Agência do IBGE em Guarulhos (SP) recebeu 25 representantes de servidores que atuam em todas as áreas o Instituto. A escolha por Guarulhos, município que tem a...',
    publication_date: '26/01/2024 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Plano-Trabalho-Guarulhos_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Plano-Trabalho-Guarulhos_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38991-ibge-realiza-lancamento-do-plano-de-trabalho-2024-na-agencia-guarulhos-sp.html',
  },
  {
    id: 38986,
    type: 'Release',
    title: 'IPCA-15 é de 0,31% em janeiro',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de 0,31% em janeiro e ficou 0,09 ponto percentual (p.p.) abaixo da taxa de dezembro (0,40%). Nos últimos 12 meses, a variação do IPCA-15 foi de 4,47%, abaixo dos 4,72% observados nos 12...',
    publication_date: '26/01/2024 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38986-ipca-15-e-de-0-31-em-janeiro.html',
  },
  {
    id: 38987,
    type: 'Notícia',
    title:
      'Com impacto da Alimentação e Bebidas, IPCA-15 é de 0,31% em janeiro',
    introduction:
      'Aumento da batata-inglesa (25,95%) e do tomate (11,19%) impactaram no resultado do IPCA-15 de janeiro - Foto: Helena Pontes/Agência IBGE Notícias A prévia da inflação ficou em 0,31% em janeiro, 0,09 ponto percentual (p.p.) menor que a de dezembro, quando...',
    publication_date: '26/01/2024 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/Supermercado_Helena_Pontes2_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/Supermercado_Helena_Pontes2_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38987-com-impacto-da-alimentacao-e-bebidas-ipca-15-e-de-0-31-em-janeiro.html',
  },
  {
    id: 38962,
    type: 'Notícia',
    title:
      'Favelas e Comunidades Urbanas: IBGE muda  denominação dos aglomerados subnormais',
    introduction:
      'A designação “Aglomerados Subnormais” será substituída por “Favelas e Comunidades Urbanas” - Foto: Acervo IBGE O IBGE está substituindo a denominação dos “Aglomerados Subnormais”, adotada pelo instituto em seus censos e pesquisas desde 1991. A nova...',
    publication_date: '23/01/2024 10:00:00',
    product_id: 18354,
    products:
      '18354|Regiões Metropolitanas, Aglomerações Urbanas e Regiões Integradas de Desenvolvimento|regioes-metropolitanas-aglomeracoes-urbanas-e-regioes-integradas-de-desenvolvimento|2711',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Favela_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Favela_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '18354',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38962-favelas-e-comunidades-urbanas-ibge-muda-denominacao-dos-aglomerados-subnormais.html',
  },
  {
    id: 38949,
    type: 'Notícia',
    title:
      'Expedição IBGE Jalapão Tocantins será uma das ações de divulgação nacional do Censo Coordenadas Geográficas',
    introduction:
      'O estado do Tocantins foi escolhido pelo Instituto Brasileiro de Geografia e Estatística (IBGE) para ser a base de lançamento do Censo Coordenadas Geográficas dos Endereços, que será divulgado no dia 2 de fevereiro, às 10 horas (ver texto aqui), na...',
    publication_date: '22/01/2024 12:15:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_THUMB_2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_HOME_2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38949-expedicao-ibge-jalapao-tocantins-sera-uma-das-acoes-de-divulgacao-nacional-do-censo-coordenadas-geograficas.html',
  },
  {
    id: 38942,
    type: 'Notícia',
    title: 'Diretoria do IBGE debate Plano de Trabalho 2024',
    introduction:
      'Diretoria do IBGE reuniu-se com o objetivo de alinhar as ações previstas no Plano de Trabalho 2024. Foto: Acervo IBGE A diretoria do IBGE reuniu-se nesta quarta-feira, 17, na sede do Instituto, na cidade do Rio de Janeiro, com o objetivo de alinhar as...',
    publication_date: '19/01/2024 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/PlnaoTrabalho_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/PlnaoTrabalho_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38942-diretoria-do-ibge-debate-plano-de-trabalho-2024.html',
  },
  {
    id: 38938,
    type: 'Notícia',
    title:
      'Presidência divulgará o Plano de Trabalho do IBGE 2024 nesta segunda (22/01)',
    introduction:
      'Transmissão será feita a partir da Agência do IBGE, em Guarulhos - Foto: Acervo IBGE Na próxima segunda-feira, 22, das 16h às 17h, na Agência do IBGE em Guarulhos, a presidência do órgão fará divulgação do Plano de Trabalho 2024. O evento é fechado ao...',
    publication_date: '18/01/2024 16:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/AgenciaGuarulhos_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/AgenciaGuarulhos_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38938-presidencia-divulgara-o-plano-de-trabalho-do-ibge-2024-nesta-segunda-22-01.html',
  },
  {
    id: 38937,
    type: 'Notícia',
    title:
      'Ponte Alta do Tocantins no Jalapão sediará divulgação das coordenadas dos endereços do Censo 2022',
    introduction:
      'O Instituto Brasileiro de Geografia e Estatística (IBGE) vai divulgar no dia 2 de fevereiro, às 10 horas, os dados das coordenadas dos endereços do Censo Demográfico 2022. O município escolhido para sediar o evento é Ponte Alta do Tocantins, portal de...',
    publication_date: '18/01/2024 15:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_Noticia.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Coordenadas_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38937-ponte-alta-do-tocantins-no-jalapao-sediara-divulgacao-das-coordenadas-dos-enderecos-do-censo-2022.html',
  },
  {
    id: 38929,
    type: 'Release',
    title: 'Em novembro, vendas no varejo variam 0,1%',
    introduction:
      'Em novembro de 2023, o volume de vendas do comércio varejista variou 0,1%, frente a outubro, na série com ajuste sazonal. A média móvel trimestral também foi de 0,1% em novembro. Frente a novembro de 2022, o volume de vendas do comércio varejista cresceu...',
    publication_date: '17/01/2024 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38929-vendas-no-varejo-variam-0-1.html',
  },
  {
    id: 38930,
    type: 'Notícia',
    title:
      'Vendas no varejo variam 0,1% em novembro e têm segundo mês de estabilidade',
    introduction:
      'Com a Black Friday e a queda do dólar, vendas de Equipamentos e material para escritório, informática e comunicação sobem 18,6% - Foto: Marcello Casal Jr/Agência-Brasil Entre outubro e novembro do ano passado, as vendas no comércio varejista no país...',
    publication_date: '17/01/2024 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PMC_THUMB-Marcello-Casal-Jr-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PMC_HOME-Marcello-Casal-Jr-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38930-vendas-no-varejo-variam-0-1-em-novembro-e-tem-segundo-mes-de-estabilidade.html',
  },
  {
    id: 38927,
    type: 'Notícia',
    title: 'IBGE oferece 895 vagas no Concurso Público Nacional Unificado',
    introduction:
      'O IBGE participa do CPNU com 895 vagas destinadas a variados perfis de profissionais - Foto: José Fernando Ogura/SMCS O Ministério da Gestão e da Inovação em Serviços Públicos (MGI) divulgou na última quarta-feira, 10, em Brasília (DF), informações...',
    publication_date: '16/01/2024 13:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/CPNU_THUMB_Jos-Fernando-Ogura-SMCS.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/CPNU_HOME_Jos-Fernando-Ogura-SMCS.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38927-ibge-oferece-895-vagas-no-concurso-publico-nacional-unificado.html',
  },
  {
    id: 38915,
    type: 'Release',
    title: 'Volume dos Serviços varia 0,4% em novembro',
    introduction:
      'Em novembro de 2023, o volume de serviços no Brasil variou 0,4% frente a outubro, na série com ajuste sazonal. O resultado positivo interrompe uma sequência de três taxas negativas (agosto, setembro e outubro), período em que acumulou uma perda de 2,2%....',
    publication_date: '16/01/2024 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38915-volume-dos-servicos-varia-0-4-em-novembro.html',
  },
  {
    id: 38916,
    type: 'Notícia',
    title:
      'Serviços variam 0,4% em novembro, após três meses no campo negativo',
    introduction:
      'O bom desempenho dos serviços financeiros auxiliares influenciou a volta do setor de serviços ao campo positivo - Foto - Marcello Casal Jr/Agência Brasil Na passagem de outubro para novembro, o volume de serviços prestados no país variou 0,4%, quebrando...',
    publication_date: '16/01/2024 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PMS_THUMB_Marcello-Casal-Jr-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PMS_HOME_Marcello-Casal-Jr-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38916-servicos-variam-0-4-em-novembro-apos-tres-meses-no-campo-negativo.html',
  },
  {
    id: 38897,
    type: 'Release',
    title: 'Em novembro, indústria avança  em nove dos 15 locais pesquisados',
    introduction:
      'Com o avanço de 0,5% na indústria nacional em novembro, na série com ajusta sazonal, nove dos 15 locais pesquisados pelo IBGE apontaram taxas positivas. Os maiores avanços foram de Paraná (5,4%), Espírito Santo (4,3%) e Rio de Janeiro (3,7%), enquanto...',
    publication_date: '12/01/2024 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38897-em-novembro-industria-avanca-em-nove-dos-15-locais-pesquisados.html',
  },
  {
    id: 38898,
    type: 'Notícia',
    title:
      'Produção industrial avança em nove de 15 locais pesquisados em novembro frente a outubro',
    introduction:
      'Indústria paulista foi a principal influência positiva na indústria nacional, puxada pelo setor farmacêutico - Foto: Rodrigo Nunes/MS - Agência Senado Com a variação de 0,5% na produção industrial nacional na passagem de outubro para novembro, nove dos...',
    publication_date: '12/01/2024 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2022_08\\/PIM-Br_THUMB_Rodrigo-Nunes-MS.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2022_08\\/PIM-Br_HOME_Rodrigo-Nunes-MS.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38898-producao-industrial-avanca-em-nove-de-15-locais-pesquisados-em-novembro-frente-a-outubro.html',
  },
  {
    id: 38899,
    type: 'Notícia',
    title: 'IBGE realiza maior processo seletivo de sua história com CPNU',
    introduction:
      'O Governo Federal, por meio do Ministério da Gestão e da Inovação em Serviços Públicos  (MGI), publicou nesta quarta-feira, 10, os editais do Concurso Público Nacional Unificado (CPNU). A expectativa é de até 3,5 milhões de inscritos para concorrer às...',
    publication_date: '11/01/2024 13:45:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Concurso_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Concurso_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38899-ibge-realiza-maior-processo-seletivo-de-sua-historia-com-cpnu.html',
  },
  {
    id: 38884,
    type: 'Release',
    title: 'IPCA chega a 0,56% em dezembro e fecha o ano em 4,62%',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) de dezembro foi de 0,56% e ficou 0,28 ponto percentual (p.p.) acima da taxa de novembro (0,28%). Em dezembro de 2022, a variação havia sido de 0,62%. O IPCA fechou o ano com alta acumulada de 4,62%....',
    publication_date: '11/01/2024 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38884-ipca-chega-a-0-56-em-dezembro-e-fecha-o-ano-em-4-62.html',
  },
  {
    id: 38878,
    type: 'Release',
    title: 'Índice Nacional da Construção Civil varia 0,26% em dezembro',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) variou 0,26% em dezembro, subindo 0,18 ponto percentual em relação a novembro (0,08%). O acumulado do ano foi de 2,55%, numa queda de 8,35 pontos percentuais em relação à taxa acumulada de 2022. O índice de...',
    publication_date: '11/01/2024 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38878-indice-nacional-da-construcao-civil-varia-0-26-em-dezembro.html',
  },
  {
    id: 38885,
    type: 'Notícia',
    title: 'IPCA chega a 0,56% em dezembro e encerra ano com alta de 4,62%',
    introduction:
      'Com alta de 1,11% em dezembro, o grupo de alimentação e bebidas exerceu o maior impacto sobre a inflação do mês - Foto: Helena Pontes/Agência IBGE Notícias A inflação do país foi de 0,56% em dezembro, sexto mês seguido com taxas positivas. Com isso, o...',
    publication_date: '11/01/2024 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/IPCA-THUMB_Helena_Pontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/IPCA-HOME_Helena_Pontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38885-ipca-chega-a-0-56-em-dezembro-e-encerra-ano-com-alta-de-4-62.html',
  },
  {
    id: 38881,
    type: 'Notícia',
    title:
      'Preços da construção variam 0,26% em dezembro e ano fecha com alta de 2,55%',
    introduction:
      'Com reajuste nas categorias profissionais, Piauí tem a maior variação - Foto: Helena Pontes/Agência IBGE Notícias O Índice Nacional da Construção Civil (Sinapi), divulgado nesta quinta-feira (11) pelo IBGE, apresentou variação de 0,26% em dezembro, uma...',
    publication_date: '11/01/2024 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/SINAPI-THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/SINAPI-HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38881-precos-da-construcao-variam-0-26-em-dezembro-e-ano-fecha-com-alta-de-2-55.html',
  },
  {
    id: 38865,
    type: 'Release',
    title:
      'IBGE prevê safra de 306,5 milhões de toneladas para 2024, com queda de 2,8% frente a 2023',
    introduction:
      'No terceiro prognóstico para a safra 2024, a produção de cereais, leguminosas e oleaginosas deve somar 306,5 milhões de toneladas, com alta de 0,1% ante o 2º prognóstico (317.834 toneladas) e queda de 2,8% frente a 2023 (8,9 milhões de toneladas)....',
    publication_date: '10/01/2024 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38865-ibge-preve-safra-de-306-5-milhoes-de-toneladas-para-2024-com-queda-de-2-8-frente-a-2023.html',
  },
  {
    id: 38866,
    type: 'Notícia',
    title:
      'Com queda de 2,8%, safra de 2024 deve chegar a 306,5 milhões de toneladas',
    introduction:
      'A queda no volume de produção deve-se, principalmente à menor estimativa para o milho de 2ª safra (-12,8%) e de 1ª safra (-3,3%), para o sorgo (-12,1%) e algodão herbáceo em caroço (-3,3%) - Foto: Gilson Abreu/AEN-PR A safra brasileira de cereais,...',
    publication_date: '10/01/2024 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/LSPA_THUMB_GilsonAbreu-AEN-PR.gif","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/LSPA_HOME_GilsonAbreu-AEN-PR.gif","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38866-com-queda-de-2-8-safra-de-2024-deve-chegar-a-306-5-milhoes-de-toneladas.html',
  },
  {
    id: 38867,
    type: 'Notícia',
    title: 'DPE e DGC terão novos diretores',
    introduction:
      'A Presidência do IBGE informa que a servidora Elizabeth Belo Hypolito assumirá o cargo de Diretora de Pesquisas do IBGE, em substituição ao servidor Cimar Azeredo, e o servidor João Hallak Neto assume a diretoria-adjunta, em substituição à servidora...',
    publication_date: '09/01/2024 18:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2019_02\\/CDDI_thumb-Licia.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2019_02\\/CDDI_home-Licia.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38867-dpe-e-dgc-terao-novos-diretores.html',
  },
  {
    id: 38860,
    type: 'Notícia',
    title:
      'Inscrições para a 3ª turma do curso “Políticas públicas na era digital” começam 15 de janeiro',
    introduction:
      'O curso especial lançado pelo IBGE “Políticas públicas na era digital: Dominando os dados do IBGE”, voltado aos gestores públicos, obteve grande repercussão e adesão nacional, e as duas primeiras turmas foram fechadas com mil participantes. Devido à alta...',
    publication_date: '09/01/2024 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Curso-politicas-Publicasg.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Curso-politicas-Publicasg.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38860-inscricoes-para-a-3-turma-do-curso-politicas-publicas-na-era-digital-comecam-15-de-janeiro.html',
  },
  {
    id: 38814,
    type: 'Release',
    title: 'Produção industrial avança 0,5% em novembro',
    introduction:
      'Em novembro de 2023, a produção industrial nacional avançou 0,5% frente a outubro, na série com ajuste sazonal, após registrar variações positivas em outubro (0,1%), setembro (0,1%) e agosto de 2023 (0,2%). Na comparação com novembro de 2022, na série...',
    publication_date: '05/01/2024 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38814-producao-industrial-avanca-0-5-em-novembro.html',
  },
  {
    id: 38815,
    type: 'Notícia',
    title: 'Produção industrial avança 0,5% em novembro',
    introduction:
      'Avanço de 3,4% nas indústrias extrativas e de 2,8% em products alimentícios foram as principais influências positivas no índice geral - Foto: Ricardo Teles Na passagem de outubro para novembro, a produção industrial do país avançou 0,5%, acentuando o...',
    publication_date: '05/01/2024 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PIMBR_THUMB_Ricardo_Teles.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/PIMBR_HOME_Ricardo_Teles.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38815-producao-industrial-avanca-0-5-em-novembro.html',
  },
  {
    id: 38793,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) foi de -0,43% em novembro',
    introduction:
      'Em novembro de 2023, os preços da indústria variaram -0,43% com relação a outubro, revertendo o sinal da variação nos últimos três meses. Nessa comparação, 13 das 24 atividades industriais apresentaram queda nos preços. O acumulado no ano foi de -4,89% e...',
    publication_date: '04/01/2024 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38793-indice-de-precos-ao-produtor-ipp-foi-de-0-43-em-novembro.html',
  },
  {
    id: 38796,
    type: 'Notícia',
    title:
      'Preços da indústria variam -0,43% em novembro após três meses em alta',
    introduction:
      'Indústrias extrativas é o setor com maior variação negativa (-7,09%) em novembro - Foto: Agência Petrobras Após três meses consecutivos de resultados positivos, os preços da indústria variaram -0,43% em novembro com relação ao mês de outubro. O Índice de...',
    publication_date: '04/01/2024 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/IPP-THUMB-AgenciaPetrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_01\\/IPP-HOME-AgenciaPetrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38796-precos-da-industria-variam-0-43-em-novembro-apos-tres-meses-em-alta.html',
  },
  {
    id: 38800,
    type: 'Notícia',
    title:
      'IBGE divulgará dados do Censo Demográfico 2022: coordenadas dos endereços em 2 de fevereiro no Tocantins',
    introduction:
      'Foto: Helena Pontes/Agência IBGE Notícias O Instituto Brasileiro de Geografia e Estatística (IBGE) realizará a divulgação dos dados do Censo Demográfico 2022: Coordenadas dos endereços em 2 de fevereiro de 2024, no estado do Tocantins. No Censo...',
    publication_date: '03/01/2024 09:47:31',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/DIVULGAO__CENSO_DEMOGRFICO_2022_Helena_Pontes-Agncia_IBGE.jpeg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/DIVULGAO__CENSO_DEMOGRFICO_2022_Helena_Pontes-Agncia_IBGE.jpeg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38800-ibge-divulgara-dados-do-censo-demografico-2022-coordenadas-dos-enderecos-em-2-de-fevereiro-no-tocantins.html',
  },
  {
    id: 38778,
    type: 'Notícia',
    title:
      'Últimos dias para inscrições em curso gratuito a distância do IBGE para gestores públicos',
    introduction:
      'As inscrições para o curso Políticas públicas na era digital: Dominando os dados do IBGE, voltado aos gestores públicos, terminam no próximo dia 10 de janeiro, na Loja Virtual do IBGE, em https://loja.ibge.gov.br. As inscrições podem ser encerradas antes...',
    publication_date: '29/12/2023 14:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Loja-Virtual_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Loja-Virtual_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38778-ultimos-dias-para-inscricoes-em-curso-a-distancia-do-ibge-para-gestores-publicos.html',
  },
  {
    id: 38755,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,5% e taxa de subutilização é de 17,4% no trimestre encerrado em novembro',
    introduction:
      'A taxa de desocupação (7,5%) no trimestre encerrado em novembro de 2023 variou -0,2 ponto percentual (p.p.) frente ao trimestre de junho a agosto de 2023 (7,8%) e caiu 0,5 p.p. ante o mesmo trimestre móvel de 2022 (8,1%). Foi a menor taxa de desocupação...',
    publication_date: '29/12/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38755-pnad-continua-taxa-de-desocupacao-e-de-7-5-e-taxa-de-subutilizacao-e-de-17-4-no-trimestre-encerrado-em-novembro.html',
  },
  {
    id: 38756,
    type: 'Notícia',
    title:
      'Taxa de desocupação cai para 7,5% no trimestre encerrado em novembro',
    introduction:
      'No trimestre, houve aumento de 369 mil pessoas entre os ocupados do setor industrial - Foto: Jonathan Campos-AEN No trimestre encerrado em novembro, a taxa de desocupação do país chegou a 7,5%, com variação de -0,2 ponto percentual (p.p.) na comparação...',
    publication_date: '29/12/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/PNAD-Tri_THUMB_Jonathan-Campos-AEN.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/PNAD-Tri_HOME_Jonathan-Campos-AEN.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38756-taxa-de-desocupacao-cai-para-7-5-no-trimestre-encerrado-em-novembro.html',
  },
  {
    id: 38728,
    type: 'Notícia',
    title: 'As notícias mais acessadas na Agência IBGE em 2023',
    introduction:
      'O ano de 2023 teve início com o apoio da ministra do Planejamento e Orçamento, Simone Tebet, às ações para a finalização da coleta do Censo 2022 em terras indígenas e em favelas e comunidades urbanas. Durante o ano, foram divulgados resultados do Censo...',
    publication_date: '28/12/2023 14:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/retrospec2023_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/retrospec2023_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38728-as-noticias-mais-acessadas-na-agencia-ibge-em-2023.html',
  },
  {
    id: 38749,
    type: 'Notícia',
    title:
      'No Ceará, IBGE divulga resultados do Censo para cor ou raça com apoio do Banco Palmas',
    introduction:
      'A Cor ou Raça do Ceará foi revelada em evento de divulgação na sede do Banco Palmas Na última sexta-feira, 22 de dezembro, mais um importante dado do Censo Demográfico 2022 foi revelado: a cor ou raça dos brasileiros. Assim como nas ocasiões anteriores,...',
    publication_date: '28/12/2023 12:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/COR_OU_RAA_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/COR_OU_RAA_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38749-no-ceara-ibge-divulga-resultados-do-censo-para-cor-ou-raca-com-apoio-do-banco-palmas.html',
  },
  {
    id: 38737,
    type: 'Release',
    title: 'IPCA-15 é de 0,40% em dezembro e fecha 2023 em 4,72%',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de 0,40% em dezembro e ficou 0,07 ponto percentual (p.p.) acima da taxa de novembro (0,33%). Com isso, o IPCA-15 fechou o ano de 2023 com 4,72% de variação. O IPCA-E, que se constitui no...',
    publication_date: '28/12/2023 09:00:00',
    product_id: 0,
    products:
      '9262|Índice Nacional de Preços ao Consumidor Amplo Especial|indice-nacional-de-precos-ao-consumidor-amplo-especial|2212;9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9262, 9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38737-ipca-15-e-de-0-40-em-dezembro-e-fecha-2023-em-4-72.html',
  },
  {
    id: 38738,
    type: 'Notícia',
    title: 'IPCA-15 de dezembro é de 0,40% e fecha 2023 com alta de 4,72%',
    introduction:
      'Passagens aéreas sobem 9,02% em dezembro e fecham 2023 com alta de 48,11% - Foto:Acervo IBGE A prévia da inflação ficou em 0,40% em dezembro, 0,07 ponto percentual (p.p.) maior que a de novembro, quando variou 0,33%. O resultado foi, em grande parte,...',
    publication_date: '28/12/2023 09:00:00',
    product_id: 0,
    products:
      '9262|Índice Nacional de Preços ao Consumidor Amplo Especial|indice-nacional-de-precos-ao-consumidor-amplo-especial|2212;9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/IPCA15_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/IPCA15_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9262, 9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38738-ipca-15-de-dezembro-e-de-0-40-e-fecha-2023-com-alta-de-4-72.html',
  },
  {
    id: 38725,
    type: 'Notícia',
    title:
      'Censo 2022: IBGE divulga primeiros resultados para cor ou raça em Salvador',
    introduction:
      'Equipe técnica do IBGE durante divugação do Censo 2022: Identificação étnico-racial da população, por sexo e idade - Foto: Agência IBGE Notícias O IBGE divulgou, nesta sexta-feira, 22, os resultados do Censo 2022 de identificação étnico-racial da...',
    publication_date: '22/12/2023 18:11:23',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/cor-ou-raca2_home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/cor-ou-raca2_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38725-censo-2022-ibge-divulga-primeiros-resultadospara-cor-ou-raca-em-salvador-2.html',
  },
  {
    id: 38719,
    type: 'Notícia',
    title:
      'Censo 2022: pela primeira vez, desde 1991, a maior parte da população do Brasil se declara parda',
    introduction:
      'Censo 2022 mostra que, no Brasil, 45,3% das pessoas eram pardas; 43,5%, brancas; 10,2%, pretas, 0,8% declaravam-se indígenas e 0,4% eram amarelas. - Foto: Acervo IBGE Em 2022, cerca de 92,1 milhões de pessoas se declararam pardas, o equivalente a 45,3%...',
    publication_date: '22/12/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/cor-ou-raca_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/cor-ou-raca_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38719-censo-2022-pela-primeira-vez-desde-1991-a-maior-parte-da-populacao-do-brasil-se-declara-parda.html',
  },
  {
    id: 38715,
    type: 'Notícia',
    title:
      'IBGE divulga resultados da PNAD Contínua sobre trabalho infantil na OIT',
    introduction:
      'Da esquerda para direita, Secretária Nacional de Cuidados e Família, Laís Abramo, a Coordenadora de Pesquisas por Amostra de Domicílios do IBGE, Adriana Beringuy, o diretor de pesquisas do IBGE, Cimar Azeredo, e o diretor da OIT, Vinícius Pinheiro -...',
    publication_date: '21/12/2023 11:35:40',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/oit-bsb-01.jpeg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/oit-bsb-01.jpeg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38715-ibge-divulga-resultados-da-pnad-continua-sobre-trabalho-infantil-na-oit.html',
  },
  {
    id: 38700,
    type: 'Notícia',
    title: 'De 2019 para 2022, trabalho infantil aumentou no país',
    introduction:
      'Em queda desde o início da série histórica da pesquisa, em 2016, o número de crianças e adolescentes em situação de trabalho infantil cresceu 7,0% entre 2019 e 2022 - Foto: Valter Campanato/Agência Brasil Em 2022, havia 1,9 milhão de crianças e...',
    publication_date: '20/12/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/PnadTrab_THUMB2-Valter_Campanato-Agncia_Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/PnadTrab_HOME2-Valter_Campanato-Agncia_Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38700-de-2019-para-2022-trabalho-infantil-aumentou-no-pais.html',
  },
  {
    id: 38683,
    type: 'Notícia',
    title:
      'PIB dos municípios mostra que economia do país continuou a se desconcentrar em 2021',
    introduction:
      'Com alta de 0,5 ponto percentual, Maricá (RJ) teve o maior ganho de participação no PIB nacional em 2021 - Foto: Prefeitura de Maricá Dados divulgados hoje (15) pelo IBGE mostram que, entre 2020 e 2021, os cinco municípios com os maiores ganhos de...',
    publication_date: '15/12/2023 10:00:00',
    product_id: 9088,
    products:
      '9088|Produto Interno Bruto dos Municípios|produto-interno-bruto-dos-municipios|2036',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIB-Municipios_THUMB_Pref-Marica.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIB-Municipios_HOME_Pref-Marica.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9088',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38683-pib-dos-municipios-mostra-que-economia-do-pais-continuou-a-se-desconcentrar-em-2021.html',
  },
  {
    id: 38684,
    type: 'Notícia',
    title:
      'IBGE operacionaliza seis novas estações da Rede Brasileira de Monitoramento Contínuo e publica as séries temporais de redes geodésicas',
    introduction:
      'Estação maregráfica de Fortaleza - Foto: Salomão Soares/IBGE O IBGE coloca em operação seis novas estações da Rede Brasileira de Monitoramento Contínuo (RBMC) dos Sistemas GNSS, para o georreferenciamento de precisão, instaladas nos seguintes municípios:...',
    publication_date: '15/12/2023 10:00:00',
    product_id: 0,
    products:
      '16403|Relatório, Análise e Resultados do Centro de Processamento SIRGAS – IBGE|relatorio-analise-e-resultados-do-centro-de-processamento-sirgas-ibge|2370;10842|Rede Maregráfica Permanente para Geodésia |rmpg-rede-maregrafica-permanente-para-geodesia|2337;16327|Banco de Dados Geodésicos|banco-de-dados-geodesicos|2343;16401|Análise dos Dados da Rede Brasileira de Monitoramento Contínuo dos Sistemas GNSS|analise-dos-dados-da-rede-brasileira-de-monitoramento-continuo-dos-sistemas-gnss|2368',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_12\\/RedesGeodsicas_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_12\\/RedesGeodsicas_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '16403, 10842, 16327, 16401',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38684-ibge-operacionaliza-seis-novas-estacoes-da-rede-brasileira-de-monitoramento-continuo-e-publica-as-series-temporais-de-redes-geodesicas.html',
  },
  {
    id: 38685,
    type: 'Notícia',
    title:
      'IBGE recebe Unicef para discutir experiências do Censo e agenda de dados e estatísticas',
    introduction:
      'IBGE recebe representantes do UNICEF Brasil - Foto: Agência IBGE Notícias O IBGE reuniu-se nesta quinta-feira, 14, com representantes do Unicef (Fundo das Nações Unidas para a Infância) Brasil, na sede do Instituto, na cidade do Rio de Janeiro, para...',
    publication_date: '15/12/2023 08:35:22',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/ibge-unicef-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/ibge-unicef-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38685-ibge-recebe-unicef-para-discutir-experiencias-do-censo-e-agenda-de-dados-e-estatisticas.html',
  },
  {
    id: 38664,
    type: 'Release',
    title:
      'IBGE divulga estimativas de sub-registro e subnotificação de nascimentos e óbitos em 2021',
    introduction:
      'O IBGE divulga hoje as estimativas de sub-registro e subnotificação de nascimentos e óbitos referentes a 2021. Os dados foram estimados a partir do pareamento das Estatísticas do Registro Civil do IBGE e das bases de dados do Ministério da Saúde (Sistema...',
    publication_date: '14/12/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/ESTATSTICAS_do_REGISTRO_CIVIL_2019.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/ESTATSTICAS_do_REGISTRO_CIVIL_2019.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38664-ibge-divulga-estimativas-de-sub-registro-e-subnotificacao-de-nascimentos-e-obitos-em-2021.html',
  },
  {
    id: 38661,
    type: 'Release',
    title: 'Vendas no varejo variam -0,3% em outubro',
    introduction:
      'Em outubro de 2023, o volume de vendas do comércio variou -0,3% frente a setembro, na série com ajuste sazonal, após crescer 0,5% no mês anterior. A média móvel trimestral foi de 0,1%. Na série sem ajuste sazonal, o comércio varejista variou 0,2% frente...',
    publication_date: '14/12/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38661-vendas-no-varejo-variam-0-3-em-outubro.html',
  },
  {
    id: 38663,
    type: 'Notícia',
    title:
      'Vendas no varejo voltam à estabilidade em outubro, com variação de -0,3%',
    introduction:
      'Com alta do dólar, setor de Equipamentos e material para escritório, informática e comunicação caiu 5,7% em outubro, puxando comércio varejista para o campo negativo - Foto: Jefferson Rudy/Agência Senado As vendas no comércio varejista no país variaram...',
    publication_date: '14/12/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PMC_THUMB_Jefferson-Rudy-Agncia-Senado.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PMC_HOME_Jefferson-Rudy-Agncia-Senado.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38663-vendas-no-varejo-voltam-a-estabilidade-em-outubro-com-variacao-de-0-3.html',
  },
  {
    id: 38641,
    type: 'Release',
    title: 'Volume dos Serviços recua 0,6% em outubro',
    introduction:
      'Em outubro de 2023, o volume de serviços no Brasil recuou 0,6% frente a setembro, na série com ajuste sazonal. Foi o terceiro resultado negativo consecutivo do indicador, período em que acumulou perda de 2,3%. O setor de serviços está 10,2% acima do...',
    publication_date: '13/12/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38641-volume-dos-servicos-recua-0-6-em-outubro.html',
  },
  {
    id: 38642,
    type: 'Notícia',
    title:
      'Serviços recuam 0,6% em outubro, terceiro resultado negativo consecutivo',
    introduction:
      'Transporte rodoviário de cargas exerceu a principal influência no recuo de 2,0% dos transportes - Foto: Licia Rubinstein/Agência IBGE Notícias Em outubro, o volume de serviços prestados no país recuou 0,6% frente a setembro. É o terceiro resultado...',
    publication_date: '13/12/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/caminho_THUMB_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/caminho_HOME_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38642-servicos-recuam-0-6-em-outubro-terceiro-resultado-negativo-consecutivo.html',
  },
  {
    id: 38639,
    type: 'Notícia',
    title:
      'IBGE divulgará resultados para cor ou raça do Censo 2022 em Salvador',
    introduction:
      'O IBGE divulgará os primeiros resultados do Censo Demográfico 2022: Identificação étnico-racial, por sexo e idade a partir das 10 horas do dia 22 de dezembro, na Casa do Olodum, localizada na rua Salvador Martino 19, no Pelourinho, em Salvador (BA). As...',
    publication_date: '12/12/2023 13:43:36',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/MinhaCorOKOK_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/MinhaCorOKOK_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38639-ibge-divulgara-resultados-para-cor-ou-raca-do-censo-2022-em-salvador.html',
  },
  {
    id: 38622,
    type: 'Release',
    title: 'IPCA foi de 0,28% em novembro',
    introduction:
      'Em novembro de 2023, o Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de 0,28%, superando em 0,04 ponto percentual (p.p.) a taxa de outubro (0,24%). No ano, o IPCA acumula alta de 4,04% e, nos últimos 12 meses, de 4,68%, abaixo dos 4,82%...',
    publication_date: '12/12/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38622-ipca-foi-de-0-28-em-novembro.html',
  },
  {
    id: 38624,
    type: 'Release',
    title: 'Em novembro, Índice Nacional da Construção Civil é de 0,08%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) variou 0,08% em novembro, caindo 0,06 ponto percentual em relação a outubro (0,14%). O acumulado nos últimos doze meses foi de 2,36%, resultado bem abaixo dos 2,44% registrados nos doze meses imediatamente...',
    publication_date: '12/12/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38624-em-novembro-indice-nacional-da-construcao-civil-e-de-0-08.html',
  },
  {
    id: 38623,
    type: 'Notícia',
    title:
      'Inflação de novembro fica em 0,28%, influenciada pela alta dos alimentos',
    introduction:
      'A batata-inglesa foi um dos alimentos que registrou alta em novembro, de 8,83% - Foto: Helena Pontes/Agência IBGE Notícias A inflação do mês de novembro foi de 0,28%, uma variação 0,04 ponto percentual (p.p.) acima da taxa de outubro (0,24%). Esse...',
    publication_date: '12/12/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/IPCA_HelenaPontes_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/IPCA_HelenaPontes_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38623-inflacao-de-novembro-fica-em-0-28-influenciada-pela-alta-dos-alimentos.html',
  },
  {
    id: 38626,
    type: 'Notícia',
    title: 'Preços da construção desaceleram e variam 0,08% em novembro',
    introduction:
      'O aço foi o material de maior flutuação de custos em 2023 - Foto: Carlos Tavares/Agência Pará O Índice Nacional da Construção Civil (Sinapi), divulgado hoje (12) pelo IBGE, apresentou variação de 0,08% em novembro, uma queda de 0,06 ponto percentual...',
    publication_date: '12/12/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SINAPI_THUMB-Carlos-Tavares_AgPara.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SINAPI_HOME-Carlos-Tavares_AgPara.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38626-precos-da-construcao-desaceleram-e-variam-0-08-em-novembro.html',
  },
  {
    id: 38625,
    type: 'Notícia',
    title:
      'IBGE realiza estudo inicial para levantamento sobre população em situação de rua',
    introduction:
      'IBGE iniciou testes de coleta visando a realização de pesquisa que forneça estatísticas sobre a população em situação de rua - Foto: Helena Pontes/Agência IBGE Notícias O IBGE finalizou na sexta-feira, 8, uma etapa de estudo inicial sobre a população em...',
    publication_date: '11/12/2023 17:46:20',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/PopulaRua_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/PopulaRua_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38625-ibge-realiza-estudo-inicial-para-levantamento-sobre-populacao-em-situacao-de-rua.html',
  },
  {
    id: 38606,
    type: 'Notícia',
    title:
      'IBGE conclui participação na Caravana Federativa no Ceará com lançamento de cursos e mais de 180 atendimentos',
    introduction:
      'O IBGE esteve expondo seus products e serviços em um estande na a sexta edição da Caravana Federativa, tendo realizado mais de 180 atendimentos nos dois dias de evento. Nos dias 7 e 8 de dezembro foi realizada a sexta edição da Caravana Federativa, no...',
    publication_date: '08/12/2023 18:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Caravana_Cear_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Caravana_Cear_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38606-ibge-conclui-participacao-na-caravana-federativa-no-ceara-com-lancamento-de-cursos-e-mais-de-180-atendimentos-2.html',
  },
  {
    id: 38603,
    type: 'Notícia',
    title:
      'MIssão cumprida: participação do IBGE na VI Expedição do Baixo São Francisco aproxima Instituto da população ribeirinha',
    introduction:
      'Embarcação no Rio São Francisco - Foto: Acervo IBGE Eram 6h30 da manhã, mas o sol já brilhava com força no céu. As buzinas das embarcações Magnífica e Maravilhosa indicavam que a partida se aproximava: era o primeiro deslocamento da VI Expedição...',
    publication_date: '08/12/2023 15:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/EmbarcaonoRioSaoFrancisco_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/EmbarcaonoRioSaoFrancisco_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38603-missao-cumprida-participacao-do-ibge-na-vi-expedicao-do-baixo-sao-francisco-aproxima-instituto-da-populacao-ribeirinha.html',
  },
  {
    id: 38598,
    type: 'Release',
    title: 'Em outubro, indústria avança em dez dos 15 locais pesquisados',
    introduction:
      'Com a variação positiva de 0,1% na indústria nacional em outubro, na série com ajuste sazonal, dez dos 15 locais pesquisados pelo IBGE apontaram taxas positivas. Os maiores avanços foram de Pernambuco (12,4%) e Bahia (8,1%). Com taxas positivas acima da...',
    publication_date: '08/12/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38598-em-outubro-industria-avanca-em-dez-dos-15-locais-pesquisados.html',
  },
  {
    id: 38601,
    type: 'Notícia',
    title:
      'Produção industrial avança em dez de 15 locais pesquisados em outubro frente a setembro',
    introduction:
      'Indústria baiana foi a maior influência positiva na indústria nacional em outubro, puxada pelo setor de products derivados do petróleo - Foto: André Motta de Souza/Petrobras Com a variação de 0,1% na produção industrial nacional na passagem de setembro...',
    publication_date: '08/12/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIM-Reg_THUMB_Andre-Motta-de-Souza-Petrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIM-Reg_HOME-Andre-Motta-de-Souza-Petrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38601-producao-industrial-avanca-em-dez-de-15-locais-pesquisados-em-outubro-frente-a-setembro.html',
  },
  {
    id: 38594,
    type: 'Notícia',
    title:
      'IBGE lança curso para gestores públicos na Caravana Federativa do Ceará ',
    introduction:
      'Para encerrar as edições das Caravanas Federativas em 2023, uma iniciativa do Ministério das Relações Institucionais, o IBGE lançará um curso especial voltado aos gestores públicos. Na Caravana Federativa Ceará, que se iniciou nesta quinta-feira, 7, e...',
    publication_date: '07/12/2023 14:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Loja-Virtual_THUMB-2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Loja-Virtual_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38594-ibge-lanca-curso-politicas-publicas-na-era-digital-dominando-os-dados-do-ibge-para-gestores-publicos-na-caravana-federativa-do-ceara.html',
  },
  {
    id: 38597,
    type: 'Notícia',
    title:
      'IBGE lança série de cursos de formação em Censo Demográfico para a Gestão Pública',
    introduction:
      'O IBGE lançou durante a Caravana Federativa do Ceará, em Fortaleza, nesta quinta-feira, 7, o Programa Censo Demográfico para a Gestão Pública, um conjunto de cursos da Escola Nacional de Ciências Estatísticas (ENCE) do IBGE para formação de gestores...',
    publication_date: '07/12/2023 14:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Curso-ENCE_THUMB2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/Curso-ENCE_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38597-ibge-lanca-serie-de-cursos-de-formacao-em-censo-demografico-para-a-gestao-publica.html',
  },
  {
    id: 38571,
    type: 'Notícia',
    title:
      'IBGE atualiza Base Cartográfica Contínua do Brasil na escala 1:250.000',
    introduction:
      'Base Cartográfica do Brasil na escala 1:250.000 completa 10 anos - Foto: Placeit (arte sobre foto) O IBGE lança hoje (7) uma nova versão da Base Cartográfica Vetorial Contínua do Brasil na escala 1:250.000 que completa 10 anos. Este é o sexto lançamento...',
    publication_date: '07/12/2023 10:00:00',
    product_id: 15759,
    products: '15759|Bases cartográficas contínuas - Brasil|brasil|2224',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_12\\/baseCartografica_Thumb_placeit.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_12\\/baseCartografica_home_placeit.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '15759',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38571-ibge-atualiza-base-cartografica-continua-do-brasil-na-escala-1-250-000-2.html',
  },
  {
    id: 38568,
    type: 'Release',
    title:
      'IBGE prevê safra de 306,2 milhões de toneladas para 2024, com queda de 3,2% frente a 2023',
    introduction:
      'O segundo prognóstico da produção nacional de grãos, cereais, leguminosas e oleaginosas para 2024 é de 306,2 milhões de toneladas, com queda de 3,2% (ou menos 10,1 milhões de toneladas) ante a safra anterior.  Prognóstico de novembro Safra 2024 306,2...',
    publication_date: '07/12/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38568-ibge-preve-safra-de-306-2-milhoes-de-toneladas-para-2024-com-queda-de-3-2-frente-a-2023.html',
  },
  {
    id: 38569,
    type: 'Notícia',
    title:
      'Segundo prognóstico prevê redução de 3,2% na safra de 2024 frente a 2023',
    introduction:
      'Desempenho da segunda safra do milho influenciou no prognóstico de 2024 - Foto: Jonas Oliveira/AEN-PR De acordo com o segundo prognóstico do Levantamento Sistemático da Produção Agrícola (LSPA), divulgado hoje (7) pelo IBGE, a safra brasileira de grãos,...',
    publication_date: '07/12/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/LSPA_THUMB_Jonas-Oliveira_Arquivo-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/LSPA_HOME_Jonas-Oliveira_Arquivo-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38569-segundo-prognostico-preve-reducao-de-3-2-na-safra-de-2024-frente-a-2023.html',
  },
  {
    id: 38566,
    type: 'Release',
    title:
      'Trimestrais da pecuária: abate de bovinos e de suínos foram recordes no 3º trimestre de 2023',
    introduction:
      'No 3º trimestre de 2023, o abate de bovinos aumentou 12,2%, o de suínos cresceu 0,5% e o de frangos subiu 3,2% ante o mesmo período de 2022. Na comparação com 2º trimestre de 2023, o abate de bovinos teve aumento de 5,5%, o de suínos, de 2,9%, e o de...',
    publication_date: '07/12/2023 09:00:00',
    product_id: 0,
    products:
      '9216|Resultados completos#2ovos|pesquisa-trimestral-da-producao-de-ovos-de-galinha|2072;9209|Resultados completos#2leite|pesquisa-trimestral-do-leite|2219;9214|Resultados completos#2couro|pesquisa-trimestral-do-couro|2218;9203|Resultados completos#2abate|pesquisas-trimestrais-do-abate-de-animais|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9216, 9209, 9214, 9203',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38566-trimestrais-da-pecuaria-abate-de-bovinos-e-de-suinos-foram-recordes-no-3-trimestre-de-2023.html',
  },
  {
    id: 38567,
    type: 'Notícia',
    title:
      'Abate de animais cresce no terceiro trimestre, com recorde de bovinos e suínos',
    introduction:
      'O abate de bovinos alcançou um novo recorde: foram 8,93 milhões de cabeças no trimestre - Foto: Licia Rubinstein/Agência IBGE Notícias No terceiro trimestre deste ano, o abate de bovinos cresceu 12,2% em relação ao mesmo período de 2022, totalizando 8,93...',
    publication_date: '07/12/2023 09:00:00',
    product_id: 0,
    products:
      '9216|Resultados completos#2ovos|pesquisa-trimestral-da-producao-de-ovos-de-galinha|2072;9209|Resultados completos#2leite|pesquisa-trimestral-do-leite|2219;9214|Resultados completos#2couro|pesquisa-trimestral-do-couro|2218;9203|Resultados completos#2abate|pesquisas-trimestrais-do-abate-de-animais|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/Gado_031_LiciaR_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/Gado_031_LiciaR_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9216, 9209, 9214, 9203',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38567-abate-de-animais-cresce-no-terceiro-trimestre-com-recorde-de-bovinos-e-suinos.html',
  },
  {
    id: 38545,
    type: 'Notícia',
    title:
      'Pobreza cai para 31,6% da população em 2022, após alcançar 36,7% em 2021',
    introduction:
      'Em 2022, havia 67,7 milhões de pessoas na pobreza, 10,3 milhões a menos do que o observado em 2021 - Foto: Acervo IBGE  O percentual de pessoas em extrema pobreza, ou seja, que viviam com menos de R$ 200,00 por mês, no Brasil, caiu para 5,9% em 2022,...',
    publication_date: '06/12/2023 10:00:00',
    product_id: 9221,
    products:
      '9221|Síntese de Indicadores Sociais|sintese-de-indicadores-sociais|2074',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Pobreza_THUMB_Acervo_IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Pobreza_HOME_Acervo_IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9221',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38545-pobreza-cai-para-31-6-da-populacao-em-2022-apos-alcancar-36-7-em-2021.html',
  },
  {
    id: 38544,
    type: 'Notícia',
    title:
      'Domicílios próprios predominam, mas 13,5% deles não têm documentação',
    introduction:
      'Entre a população mais pobre, 18,5% vivem em domicílios próprios sem documentação - Foto: Márcio Melo/Seminf-Manaus Cerca de 64,6% da população brasileira vivem em domicílios próprios e já pagos, embora essa proporção venha diminuindo desde 2016 (67,8%)....',
    publication_date: '06/12/2023 10:00:00',
    product_id: 9221,
    products:
      '9221|Síntese de Indicadores Sociais|sintese-de-indicadores-sociais|2074',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Moradia_THUMB_Mrcio-Melo---Seminf-Manaus.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Moradia_HOME_Mrcio-Melo---Seminf-Manaus.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9221',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38544-domicilios-proprios-predominam-mas-13-5-deles-nao-tem-documentacao.html',
  },
  {
    id: 38543,
    type: 'Notícia',
    title:
      'Em 2022, rendimento-hora dos trabalhadores brancos (R$ 20,0) era 61,4% maior que o dos pretos ou pardos (R$12,4)',
    introduction:
      'Trabalhadores brancos receberam 61,4% a mais que pretos e pardos em 2022 - Foto: Freepik De 2021 para 2022, o percentual de pessoas ocupadas com vínculo empregatício recuou de 48% para 47,6%. Por outro lado, no período, a participação dos trabalhadores...',
    publication_date: '06/12/2023 10:00:00',
    product_id: 9221,
    products:
      '9221|Síntese de Indicadores Sociais|sintese-de-indicadores-sociais|2074',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Trabalho_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS-Trabalho_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9221',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38543-em-2022-rendimento-hora-dos-trabalhadores-brancos-r-20-0-era-61-4-maior-que-o-dos-pretos-ou-pardos-r-12-4.html',
  },
  {
    id: 38542,
    type: 'Notícia',
    title:
      'Um em cada cinco brasileiros com 15 a 29 anos não estudava e nem estava ocupado em 2022',
    introduction:
      'Dos 10,9 milhões de jovens que não estudavam nem trabalhavam em 2022, 43,3% eram mulheres pretas ou pardas - Foto: Freepik O número de jovens que não estudavam nem estavam ocupados foi de 10,9 milhões em 2022, o que corresponde a 22,3% das pessoas de 15...',
    publication_date: '06/12/2023 10:00:00',
    product_id: 9221,
    products:
      '9221|Síntese de Indicadores Sociais|sintese-de-indicadores-sociais|2074',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS_Nem-Nem_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_12\\/SIS_Nem-Nem_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9221',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38542-um-em-cada-cinco-brasileiros-com-15-a-29-anos-nao-estudava-e-nem-estava-ocupado-em-2022.html',
  },
  {
    id: 38535,
    type: 'Release',
    title: 'PIB varia 0,1% no 3º trimestre de 2023',
    introduction:
      'O Produto Interno Bruto (PIB) variou 0,1% no terceiro trimestre de 2023 (frente ao segundo trimestre deste ano), na série com ajuste sazonal. Frente ao mesmo trimestre de 2022, o PIB cresceu 2,0%. No acumulado nos quatro trimestres, terminados em...',
    publication_date: '05/12/2023 09:00:00',
    product_id: 9300,
    products:
      '9300|Sistema de Contas Nacionais Trimestrais|contas-nacionais-trimestrais|2087',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/ContasNacionais.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/ContasNacionais.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9300',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38535-pib-varia-0-1-no-3-trimestre-de-2023.html',
  },
  {
    id: 38536,
    type: 'Notícia',
    title:
      'PIB varia 0,1% no terceiro trimestre e segue no maior patamar da série ',
    introduction:
      'Setor econômico com maior peso no PIB, os serviços avançaram 0,6% no trimestre - Foto: Pixabay O Produto Interno Bruto (PIB) do país ficou estável (0,1%) na passagem do segundo trimestre para o terceiro. Essa é a terceira taxa positiva seguida, após a...',
    publication_date: '05/12/2023 09:00:00',
    product_id: 9300,
    products:
      '9300|Sistema de Contas Nacionais Trimestrais|contas-nacionais-trimestrais|2087',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIB_THUMB_Pixabay.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIB_HOME_Pixabay.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9300',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38536-pib-varia-0-1-no-terceiro-trimestre-e-segue-no-maior-patamar-da-serie.html',
  },
  {
    id: 38534,
    type: 'Notícia',
    title:
      'Com participação do IBGE, Caravana Federativa chega em dezembro ao Ceará',
    introduction:
      'Nos dias 7 e 8 de dezembro, será realizada em Fortaleza-CE a sexta edição da Caravana Federativa. O evento, que disponibiliza para a população serviços do Governo Federal, já percorreu outras cinco Unidades da Federação, e agora prevê atender os...',
    publication_date: '04/12/2023 16:52:11',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/caravceara-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/caravceara-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38534-com-participacao-do-ibge-caravana-federativa-chega-em-dezembro-ao-ceara.html',
  },
  {
    id: 38524,
    type: 'Notícia',
    title:
      'IBGE fecha acordo com Unicamp e UFG para desenvolver ferramentas de Inteligência Artificial aplicada às políticas públicas',
    introduction:
      'Acordo entre IBGE, Unicamp e UFG desenvolverá ferramentas de políticas públicas a partir de IA - foto: Antoninho Perri/SEC-Unicamp O IBGE celebrou um acordo de cooperação técnica com a Universidade Federal de Goiás (UFG) e a Universidade Estadual de...',
    publication_date: '01/12/2023 15:51:09',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/act-unicamp-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_12\\/act-unicamp-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38524-ibge-fecha-acordo-com-unicamp-e-ufg-para-desenvolver-ferramentas-de-inteligencia-artificial-aplicada-as-politicas-publicas.html',
  },
  {
    id: 38502,
    type: 'Notícia',
    title: 'Região Norte tem menor acesso a cinemas, teatros e museus',
    introduction:
      'Os habitantes de 70% dos municípios do Norte levariam mais de uma hora até o a cidade mais próxima com museu - Foto: Ricardo Oliveira/Semcom - Prefeitura de Manaus Em 2021, em 14,9% dos municípios do país, os habitantes precisariam se deslocar por pelo...',
    publication_date: '01/12/2023 10:00:00',
    product_id: 9388,
    products:
      '9388|Sistema de Informações e Indicadores Culturais|indicadores-culturais|2092',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SIIC-2_THUMB_Ricardo-Oliveira-Semcom-Prefeitura_de_Manaus.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SIIC-2_HOME_Ricardo-Oliveira-Semcom-Prefeitura_de_Manaus.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9388',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38502-regiao-norte-tem-menor-acesso-a-cinemas-teatros-e-museus.html',
  },
  {
    id: 38501,
    type: 'Notícia',
    title:
      'De 2011 a 2022, setor cultural ganha empresas, mas perde participação na economia',
    introduction:
      'O domínio Design e serviços criativos foi o que mais cresceu entre as atividades culturais, com 53,8 mil novas organizações em uma década - Foto: Freepik Em uma década, o número de empresas do setor cultural cresceu 3,1%, chegando a 387,5 mil em 2021. Em...',
    publication_date: '01/12/2023 10:00:00',
    product_id: 9388,
    products:
      '9388|Sistema de Informações e Indicadores Culturais|indicadores-culturais|2092',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SIIC-1_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/SIIC-1_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9388',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38501-de-2011-a-2022-setor-cultural-ganha-empresas-mas-perde-participacao-na-economia.html',
  },
  {
    id: 38498,
    type: 'Release',
    title: 'Produção industrial varia 0,1% em outubro',
    introduction:
      'Em outubro de 2023, a produção industrial nacional variou 0,1% frente a setembro, na série com ajuste sazonal. Na comparação com outubro de 2022, na série sem ajuste sazonal, houve crescimento de 1,2%. Os índices acumulados no ano e nos últimos 12 meses...',
    publication_date: '01/12/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38498-producao-industrial-varia-0-1-em-outubro.html',
  },
  {
    id: 38499,
    type: 'Notícia',
    title:
      'Produção industrial varia 0,1% em outubro e segue mostrando menor dinamismo',
    introduction:
      'Avanço de 1,6% na indústria de products alimentícios foi a principal influência positiva no índice geral - Foto: Jose Fernando/Ogura-AEN Na passagem de setembro para outubro, a produção industrial do país variou 0,1%, mantendo o comportamento de pouco...',
    publication_date: '01/12/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIMBr-THUMB_JoseFernando-Ogura-AEN.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_12\\/PIMBr-HOME_JoseFernando-Ogura-AEN.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38499-producao-industrial-varia-0-1-em-outubro-e-segue-mostrando-menor-dinamismo.html',
  },
  {
    id: 38472,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,6% e taxa de subutilização é de 17,5% no trimestre encerrado em outubro',
    introduction:
      'A taxa de desocupação (7,6%) no trimestre encerrado em outubro de 2023 recuou -0,3 ponto percentual (p.p.) frente ao trimestre de maio a julho de 2023 (7,9%) e caiu 0,7 p.p. ante o mesmo trimestre móvel de 2022 (8,3%). Foi a menor taxa desde o trimestre...',
    publication_date: '30/11/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38472-pnad-continua-taxa-de-desocupacao-e-de-7-6-e-taxa-de-subutilizacao-e-de-17-5-no-trimestre-encerrado-em-outubro.html',
  },
  {
    id: 38473,
    type: 'Notícia',
    title:
      'Taxa de desocupação cai e fecha trimestre encerrado em outubro em 7,6%',
    introduction:
      'Atividades de transporte, armazenagem e correio ganharam mais 172 mil pessoas ocupadas no tri encerrado em outubro - Foto: Davi Alves/Agência Pará A taxa de desocupação ficou em 7,6% no trimestre de agosto a outubro, um recuo de -0,3 ponto percentual...',
    publication_date: '30/11/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_11\\/PNAD_THUMB_Davi-Alves-Ag-Par.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_11\\/PNAD_HOME_Davi-Alves-Ag-Par.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38473-taxa-de-desocupacao-cai-e-fecha-trimestre-encerrado-em-outubro-em-7-6.html',
  },
  {
    id: 38455,
    type: 'Release',
    title: 'Em 2022, expectativa de vida era de 75,5 anos',
    introduction:
      'Uma pessoa nascida no Brasil em 2022 tinha expectativa de viver, em média, até os 75,5 anos. Para os homens, esta expectativa era de 72,0 anos e para as mulheres, de 79,0 anos. Estimativas indicam que a esperança de vida caiu de 76,2 anos em 2019 para...',
    publication_date: '29/11/2023 10:00:00',
    product_id: 9126,
    products:
      '9126|Tábuas Completas de Mortalidade|tabuas-completas-de-mortalidade|2050',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/Tabua-Mortalidade.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/Tabua-Mortalidade.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9126',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38455-em-2022-expectativa-de-vida-era-de-75-5-anos.html',
  },
  {
    id: 38460,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) foi de 1,11% em outubro',
    introduction:
      'Em outubro de 2023, os preços da indústria variaram 1,11% frente a setembro, terceiro resultado positivo seguido. Nessa comparação, 14 das 24 atividades industriais tiveram aumento de preços. O acumulado no ano (-4,43%) foi o menor já registrado para um...',
    publication_date: '29/11/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38460-indice-de-precos-ao-produtor-ipp-foi-de-1-11-em-outubro.html',
  },
  {
    id: 38462,
    type: 'Notícia',
    title: 'Preços na indústria têm alta de 1,11% em outubro',
    introduction:
      'O setor de bebidas teve a maior variação (6,12%) no índice de outubro - Foto: Geraldo Bubniak/AEN-PR Pelo terceiro mês consecutivo os preços da indústria tiveram variação positiva, registrando alta de 1,11% em outubro frente a setembro. O Índice de...',
    publication_date: '29/11/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/IPP_THUMB_Geraldo-Bubniak-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/IPP_HOME_Geraldo-Bubniak-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38462-precos-na-industria-tem-alta-de-1-11-em-outubro.html',
  },
  {
    id: 38446,
    type: 'Notícia',
    title:
      'IBGE sedia encontro com países lusófonos e latino-americanos e amplia inserção internacional ',
    introduction:
      'IBGE promove encontro com países lusófonos e latino-americanos para promover inserção internacional - Foto: Breno Siqueira/IBGE Dois eventos internacionais sediados pelo IBGE na cidade do Rio de Janeiro que se encerraram na última sexta-feira, 24,...',
    publication_date: '28/11/2023 14:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/workshop\\/work_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/workshop\\/work_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38446-ibge-sedia-encontro-com-paises-lusofonos-e-latino-americanos-e-amplia-insercao-internacional.html',
  },
  {
    id: 38438,
    type: 'Notícia',
    title:
      'IBGE realiza mais de 210 atendimentos na Caravana Federativa no Maranhão',
    introduction:
      'Ministro da Justiça, Flávio Dino, recebendo dos servidores do IBGE kit de divulgação A Caravana Federativa do governo federal passou pelo Maranhão e registrou mais de 2,6 mil atendimentos em sua quinta edição, nos dias 23 e 24 de novembro. Realizado no...',
    publication_date: '28/11/2023 11:54:54',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/carav0001-HOME.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/carav0001-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38438-ibge-realiza-mais-de-210-atendimentos-na-caravana-federativa-no-maranhao.html',
  },
  {
    id: 38436,
    type: 'Notícia',
    title: 'Com alta dos alimentos, IPCA-15 de novembro sobe para 0,33%',
    introduction:
      'A prévia da inflação ficou em 0,33% em novembro, 0,12 ponto percentual (p.p.) maior que a de outubro, quando variou 0,21%. O resultado foi bastante influenciado pela alta no grupo Alimentação e bebidas (0,82%), que representou 0,17 p.p. do índice geral....',
    publication_date: '28/11/2023 09:29:17',
    product_id: 9256,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/ipca15_nov23_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/ipca15_nov23_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38436-com-alta-dos-alimentos-ipca-15-de-novembro-sobe-para-0-33.html',
  },
  {
    id: 38435,
    type: 'Release',
    title: 'IPCA-15 foi de 0,33% em novembro ',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de 0,33% em novembro e ficou 0,12 ponto percentual (p.p.) acima do resultado de outubro (0,21%). No ano, o IPCA-15 acumula alta de 4,30% e, em 12 meses, de 4,84%, abaixo dos 5,05%...',
    publication_date: '28/11/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38435-ipca-15-foi-de-0-33-em-novembro.html',
  },
  {
    id: 38426,
    type: 'Release',
    title:
      'Finanças públicas: necessidade de financiamento do governo cresceu 89,0% em 2022',
    introduction:
      'Em 2022, a necessidade de financiamento do governo aumentou 89,0% frente a 2021, e chegou a R$ 380,8 bilhões. A receita total cresceu 16,6% e os gastos das três esferas de governo aumentaram 20,4%. Em 2022, houve alta de 15,1% nos pagamentos de...',
    publication_date: '24/11/2023 10:00:00',
    product_id: 19883,
    products:
      '19883|Finanças públicas#estatisticasdefinançaspublicas2|financas-publicas-estatisticasdefinancaspublicas2-2|2034',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/financaspub_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/financaspub_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '19883',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38426-financas-publicas-necessidade-de-financiamento-do-governo-cresceu-89-0-em-2022.html',
  },
  {
    id: 38423,
    type: 'Notícia',
    title:
      'IBGE realiza mais de 70 atendimentos no primeiro dia da Caravana Federativa no Maranhão',
    introduction:
      'Representantes dos municípios esclarecem dúvidas no estande do IBGE - Foto: Thaianne Costa, SDI Maranhão A Superintendência do Maranhão do IBGE (SES-MA) realizou mais de 70 atendimentos durante o primeiro dia da Caravana Federativa no Maranhão, iniciada...',
    publication_date: '23/11/2023 20:02:09',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/caravaMA_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/caravaMA_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38423-ibge-realiza-mais-de-70-atendimentos-no-primeiro-dia-da-caravana-federativa-no-maranhao.html',
  },
  {
    id: 38420,
    type: 'Notícia',
    title:
      'IBGE avalia os registros de dados sobre a biodiversidade brasileira',
    introduction:
      'O grupo Aves apresentou a maior quantidade de registros disponíveis no SiBBr - Foto: Chico Rasta/MTur O IBGE disponibiliza a partir de hoje (23) uma avaliação dos dados existentes sobre a biodiversidade no Brasil em 2022. O estudo inédito mapeou em grade...',
    publication_date: '23/11/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_11\\/Biodiversidade_THUMB_ChicoRasta-MTur.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_11\\/Biodiversidade_HOME_ChicoRasta-MTur.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38420-ibge-avalia-os-registros-de-dados-sobre-a-biodiversidade-brasileira.html',
  },
  {
    id: 38419,
    type: 'Notícia',
    title:
      'IBGE realiza encontro com institutos de pesquisa da América Latina para debater Censos de 2020',
    introduction:
      'O IBGE recebe, de 21 a 24 de novembro, o Workshop Internacional “Estimaciones de población y ronda censal 2020 – Desafíos y lecciones aprendidas em tienpos de pandemia” (Estimativas de população e rodada de Censos 2020 – Desafios e lições aprendidas em...',
    publication_date: '23/11/2023 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/americalatina01_HOME.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/americalatina01_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38419-ibge-realiza-encontro-com-institutos-de-pesquisa-da-america-latina-para-debater-censos-de-2020.html',
  },
  {
    id: 38416,
    type: 'Notícia',
    title:
      'IBGE recebe países lusófonos para trocas de experiências sobre estatísticas no mercado de trabalho',
    introduction:
      'O IBGE recebe de 21 a 24 de novembro no Rio de Janeiro o evento “Missão Técnica no Brasil – Troca de Experiência dos Países Lusófonos visando o fortalecimento das estatísticas referentes ao mercado de trabalho”. Cinco países lusófonos: Guiné-Bissau,...',
    publication_date: '23/11/2023 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/palops-03.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/palops-03.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38416-ibge-recebe-paises-lusofonos-para-trocas-de-experiencias-sobre-estatisticas-no-mercado-de-trabalho.html',
  },
  {
    id: 38415,
    type: 'Notícia',
    title:
      'IBGE embarca na VI Expedição Científica do Baixo São Francisco e leva cidadania para comunidades ribeirinhas',
    introduction:
      'Pela primeira vez, o IBGE participa da Expedição Científica do Baixo São Francisco, que cruzará o trecho do Rio São Francisco entre os estados de Alagoas e Sergipe. Foto: Heitor Montes/IBGE Navegando pelo Rio São Francisco, a embarcação Magnífica...',
    publication_date: '22/11/2023 16:13:12',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/SaoFrancisco_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/SaoFrancisco_HOME2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38415-ibge-embarca-na-vi-expedicao-cientifica-do-baixo-sao-francisco-e-leva-cidadania-para-comunidades-ribeirinhas.html',
  },
  {
    id: 38408,
    type: 'Release',
    title:
      'PNAD Contínua Trimestral: desocupação recua em três das 27 UFs no terceiro trimestre de 2023',
    introduction:
      'A taxa de desocupação do país no terceiro trimestre de 2023 foi de 7,7%, caindo 0,4 ponto percentual (p.p.) ante o segundo trimestre deste ano (8,0%) e 1,0 p.p. frente ao mesmo trimestre de 2022 (8,7%). Em relação ao trimestre anterior, as taxas de...',
    publication_date: '22/11/2023 09:00:00',
    product_id: 9173,
    products:
      '9173|Divulgação trimestral#pnadc2|pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9173',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38408-pnad-continua-trimestral-desocupacao-recua-em-tres-das-27-ufs-no-terceiro-trimestre-de-2023.html',
  },
  {
    id: 38409,
    type: 'Notícia',
    title:
      'Desocupação cai em três estados no terceiro trimestre, com highlight para São Paulo',
    introduction:
      'O desemprego em São Paulo recuou no 3º trimestre de 2023, influenciando o resultado nacional - Foto: Paulo Pinto/Fotos Públicas No terceiro trimestre de 2023, o desemprego no país chegou a 7,7%, uma queda de 0,3 ponto percentual (p.p.) no confronto...',
    publication_date: '22/11/2023 09:00:00',
    product_id: 30980,
    products: '30980|PNADC#pnadc4|pnadc-divulgacao-pnadc4|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PNAD-Tri_THUMB_paulo_pinto_fotos_publicas.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PNAD-Tri_HOME_paulo_pinto_fotos_publicas.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '30980',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38409-desocupacao-cai-em-tres-estados-no-terceiro-trimestre-com-highlight-para-sao-paulo.html',
  },
  {
    id: 38404,
    type: 'Notícia',
    title:
      'São Luís receberá a Caravana Federativa com a participação do IBGE/MA',
    introduction:
      'A quinta edição da Caravana Federativa do governo federal será realizada no Maranhão, na capital São Luís, nos dias 23 e 24 de novembro, no Ceprama. Na ocasião, os servidores do IBGE terão a oportunidade de dar visibilidade às pesquisas e ações do...',
    publication_date: '21/11/2023 10:20:55',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Tocantis_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Tocantis_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38404-sao-luis-recebera-a-caravana-federativa-com-a-participacao-do-ibge-ma.html',
  },
  {
    id: 38398,
    type: 'Notícia',
    title:
      'Encontro do IBGE termina com entrega de 12 diretrizes para o 90º aniversário do Instituto',
    introduction:
      'No Encontro Diálogos IBGE 90 anos, realizado nos dias 16 e 17 de novembro na Unidade de Parada Lucas (RJ), foram escolhidas 12 diretrizes que vão nortear os próximos 3 anos do IBGE - Foto: Licia Rubinstein\\Agência IBGE Notícias O IBGE encerrou, no fim da...',
    publication_date: '17/11/2023 20:44:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Encerramento_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Encerramento_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38398-encontro-de-servidores-do-ibge-termina-com-entrega-de-12-diretrizes-para-o-90-aniversario-do-instituto.html',
  },
  {
    id: 38394,
    type: 'Notícia',
    title:
      '"A luta do IBGE chega a quem mais precisa, à Dona Maria e Seu José”, diz ministra Tebet ao Diálogos IBGE',
    introduction:
      'A ministra Simone Tebet enviou vídeo para os participantes do encontro Diálogos A credibilidade do IBGE “se deve a cada demógrafo, a cada pesquisador, a cada supervisor, a cada diretor, a cada servidor público efetivo, concursado ou temporário, que...',
    publication_date: '17/11/2023 14:45:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Tebet_Dialogos_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Tebet_Dialogos_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38394-a-luta-do-ibge-chega-a-quem-mais-precisa-a-dona-maria-e-seu-jose-diz-ministra-simone-tebet-em-mensagem-ao-1-encontro-dialogos-ibge-90-anos.html',
  },
  {
    id: 38388,
    type: 'Notícia',
    title: 'Em 2021, PIB cresce em todas as 27 unidades da federação',
    introduction:
      'A Agropecuária, principalmente o cultivo de soja, contribuiu para o resultado de 2021 dos estados de maior expansão: Rio Grande do Sul (9,3%), Tocantins (9,2%), Roraima (8,4%). Foto: Gilson Abreu/AEN-PR Em 2021, o Produto Interno Bruto (PIB) do Brasil...',
    publication_date: '17/11/2023 10:00:00',
    product_id: 9054,
    products: '9054|Contas Regionais do Brasil|contas-regionais-do-brasil|2021',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/soja_glsonabreu-AEN-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/soja_glsonabreu-AEN-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9054',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38388-em-2021-pib-cresce-em-todas-as-27-unidades-da-federacao.html',
  },
  {
    id: 38392,
    type: 'Notícia',
    title:
      'Primeiro dia do “1º Encontro Diálogos IBGE 90” tem integração entre servidores, exposição e painéis de discussão, memória e apresentação artística',
    introduction:
      'Mais de 500 participantes na abertura do 1º Encontro Diálogos IBGE 90 Anos em Parada de Lucas (RJ) - Foto: Helena Pontes/Agência IBGE Notícias Com uma apresentação do grupo Meu Kantinho Centro de Cultura, Terminou por volta das 18h o primeiro dia do “1º...',
    publication_date: '16/11/2023 19:50:45',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/encontro-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/encontro-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38392-primeiro-dia-do-1-encontro-dialogos-ibge-90-tem-integracao-entre-servidores-exposicao-e-paineis-de-discussao-memoria-e-apresentacao-artistica.html',
  },
  {
    id: 38391,
    type: 'Notícia',
    title:
      'IBGE assina acordo de cooperação técnica com SPU para realização de exposição no Palácio da Fazenda',
    introduction:
      'A diretora executiva do IBGE, Flávia Vinhaes, e Lúcio Andrade, secretário de Patrimônio da União, durante assinatura do Acordo de Cooperação Técnica, no Palácio da Fazenda, no Centro do Rio de Janeiro - Foto: Caio Belandi/Agência IBGE Notícia O IBGE...',
    publication_date: '16/11/2023 18:40:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/SPU_HOME_Caio-Belandi.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/SPU_THUMB_Caio-Belandi.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38391-ibge-assina-acordo-de-cooperacao-tecnica-com-spu-para-realizacao-de-exposicao-no-palacio-da-fazenda.html',
  },
  {
    id: 38379,
    type: 'Notícia',
    title:
      'IBGE inicia “1º Encontro Diálogos IBGE 90” para definir diretrizes dos próximos três anos',
    introduction:
      'O IBGE inicia nesta quinta-feira (16), na unidade de Parada de Lucas, zona norte do Rio de Janeiro (RJ), o 1º Encontro Diálogos IBGE 90 Anos. O evento definirá 12 diretrizes que nortearão a atuação do Instituto nos próximos três anos, até seu 90º...',
    publication_date: '16/11/2023 09:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/dialogos-ibge-logo.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/dialogos-ibge-logo.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38379-noticia-sobre-encontro.html',
  },
  {
    id: 38378,
    type: 'Notícia',
    title:
      '6ª edição do Seminário IBGE de Portas Abertas para a Escola propõe levar resultados do Censo ao público infantojuvenil ',
    introduction:
      'Citando a missão do IBGE, a gerente de assuntos educacionais Renata Corrêa ressaltou os desafios para disseminar as informações estatísticas - Foto: Licia Rubinstein/Agência IBGE Notícias A ENCE – Escola Nacional de Ciências Estatísticas – sediou, nesta...',
    publication_date: '14/11/2023 17:52:41',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Educa_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Educa_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38378-6-edicao-do-seminario-ibge-de-portas-abertas-para-a-escola-propoe-levar-resultados-do-censo-ao-publico-infantojuvenil.html',
  },
  {
    id: 38367,
    type: 'Release',
    title: 'Volume dos Serviços varia -0,3% em setembro',
    introduction:
      'Em setembro de 2023, o volume de serviços no Brasil decresceu 0,3% frente a agosto, na série com ajuste sazonal. O setor de serviços se encontra 10,8% acima do nível de fevereiro de 2020 (pré-pandemia) e 2,6% abaixo de dezembro de 2022 (ponto mais alto...',
    publication_date: '14/11/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38367-volume-dos-servicos-varia-0-3-em-setembro.html',
  },
  {
    id: 38368,
    type: 'Notícia',
    title: 'Setor de serviços varia -0,3% em setembro ',
    introduction:
      'Principal influência negativa, setor de serviços profissionais, administrativos e complementares recuou 1,1% em setembro - Foto: Claudio Vieira/PMSJC Em setembro, o volume de serviços prestados no país apresentou variação de -0,3% frente ao mês anterior....',
    publication_date: '14/11/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PMS_THUMB_Claudio-Vieira-PMSJC.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PMS_HOME_Claudio-Vieira-PMSJC.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38368-setor-de-servicos-varia-0-3-em-setembro.html',
  },
  {
    id: 38366,
    type: 'Notícia',
    title:
      'IBGE encerra participação em Caravana Federativa no Tocantins com 130 atendimentos',
    introduction:
      'Equipe do IBGE realiza atendimento durante a Caravana Federativa do Tocantins, em Palmas - Foto: Wualisson Chaves/SSDI-TO O IBGE concluiu com sucesso sua participação na Caravana Federativa no Tocantins, nesta sexta-feira, 10, somando 130 atendimentos....',
    publication_date: '10/11/2023 18:23:31',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/caravana-to-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/caravana-to-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38366-ibge-encerra-participacao-em-caravana-federativa-no-tocantins-com-130-atendimentos.html',
  },
  {
    id: 38338,
    type: 'Release',
    title: 'IPCA foi de 0,24% em outubro',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) de outubro foi de 0,24%, quarto mês consecutivo no campo positivo. Em setembro, a variação havia sido de 0,26%. No ano, o IPCA acumula alta de 3,75% e, nos últimos 12 meses, de 4,82%, abaixo dos...',
    publication_date: '10/11/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38338-ipca-foi-de-0-24-em-outubro.html',
  },
  {
    id: 38339,
    type: 'Notícia',
    title:
      'Inflação chega a 0,24% em outubro, impulsionada por alta das passagens aéreas',
    introduction:
      'Os preços das passagens aéreas subiram 23,70% em outubro e contribuíram para a inflação do país - Foto: Acervo IBGE A inflação do país foi de 0,24% em outubro, após a alta de 0,26% no mês anterior. É o quarto mês seguido de taxas positivas do indicador....',
    publication_date: '10/11/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/IPCA_THUMB_AcervoIBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/IPCA_HOME_AcervoIBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38339-inflacao-chega-a-0-24-em-outubro-impulsionada-por-alta-das-passagens-aereas.html',
  },
  {
    id: 38336,
    type: 'Release',
    title: 'Em outubro, o Índice Nacional da Construção Civil varia 0,14%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) registrou nesta sexta-feira (10) uma variação de 0,14% no mês de outubro, o que representa um aumento de 0,12% em relação ao mês de setembro (0,02%). Enquanto isso, nos últimos doze meses, há uma alta de...',
    publication_date: '10/11/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38336-em-outubro-o-indice-nacional-da-construcao-civil-varia-0-14.html',
  },
  {
    id: 38337,
    type: 'Notícia',
    title:
      'Com maior alta da região Norte, custo médio da construção civil registra aumento de 0,14%',
    introduction:
      'Reajuste na mão-de-obra impulsiona variação positiva do SINAPI nas regiões Norte e Nordeste - Foto: Acervo IBGE O Índice Nacional da Construção Civil (Sinapi), divulgado nesta sexta-feira (10), registrou uma variação de 0,14% no mês de outubro, o que...',
    publication_date: '10/11/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/SINAPI-THUMB-IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/SINAPI-HOME-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38337-com-maior-alta-da-regiao-norte-custo-medio-da-construcao-civil-registra-aumento-de-0-14.html',
  },
  {
    id: 38340,
    type: 'Notícia',
    title:
      'IBGE realiza 86 atendimentos no primeiro dia da Caravana Federativa no Tocantins',
    introduction:
      'O Secretário Especial de Assuntos Federativos da Secretaria de Relações Institucionais do Governo Federal, André Ceciliano, e assessores, visitam o estande do IBGE na Caravana Federativa em Tocantins - Foto - Wualisson Chaves/SDDI-TO Na Caravana...',
    publication_date: '09/11/2023 18:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Caravana_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Caravana_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38340-ibge-realiza-86-atendimentos-no-primeiro-dia-da-caravana-federativa-no-tocantins.html',
  },
  {
    id: 38307,
    type: 'Notícia',
    title:
      '161,6 milhões de pessoas com 10 anos ou mais de idade utilizaram a Internet no país, em 2022',
    introduction:
      'Número de idosos que utilizaram a Internet cresce de maneira significativa desde 2016 - Foto: Roberto Dziura Jr AEN-Pr Em 2022, entre as 185,4 milhões de pessoas de 10 anos ou mais de idade do país, 87,2% (ou 161,6 milhões) utilizaram a Internet no...',
    publication_date: '09/11/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/TIC_THUMB_roberto_dziura-jr-aen-pr.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/TIC_HOME_roberto_dziura-jr-aen-pr.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38307-161-6-milhoes-de-pessoas-com-10-anos-ou-mais-de-idade-utilizaram-a-internet-no-pais-em-2022.html',
  },
  {
    id: 38306,
    type: 'Notícia',
    title: 'Em 2022, streaming estava presente em 43,4% dos domicílios com TV',
    introduction:
      'Dos domicílios com TV, 43,4% tinham serviço pago de streaming e 95,3% destes também acessavam canais de TV, fosse TV aberta (93,1%) ou por assinatura (41,5%) - Foto: Freepik A Internet era utilizada em 91,5% dos domicílios (68,9 milhões) do país em 2022,...',
    publication_date: '09/11/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/TIC2_freepik-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/TIC2_freepik-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38306-em-2022-streaming-estava-presente-em-43-4-dos-domicilios-com-tv.html',
  },
  {
    id: 38305,
    type: 'Release',
    title:
      'Capacidade de armazenagem agrícola cresce 4,8% e chega a 201,4 milhões de toneladas no 1º semestre de 2023',
    introduction:
      'No 1º semestre de 2023, a capacidade disponível para armazenamento no Brasil foi de 201,4 milhões toneladas, 4,8% superior ao semestre anterior. O número de estabelecimentos subiu 3,0% em relação ao último semestre de 2022. O Rio Grande do Sul tem o...',
    publication_date: '09/11/2023 09:00:00',
    product_id: 9199,
    products: '9199|Pesquisa de Estoques|pesquisa-de-estoques|2070',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/Estoques_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/Estoques_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9199',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38305-capacidade-de-armazenagem-agricola-cresce-4-8-e-chega-a-201-4-milhoes-de-toneladas-no-1-semestre-de-2023.html',
  },
  {
    id: 38302,
    type: 'Release',
    title: 'Abate de bovinos, frangos e suínos cresce no 3º trimestre de 2023',
    introduction:
      'Frente ao mesmo trimestre de 2022, o abate de bovinos cresceu 11,1%, o de frangos aumentou 3,1% e o de suínos subiu 0,5%. Frente ao 2º trimestre de 2023, o abate de bovinos aumentou 5,8%, o de frangos subiu 1,4% e o de suínos cresceu 3,7%.  Foram...',
    publication_date: '09/11/2023 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38302-abate-de-bovinos-frangos-e-suinos-cresce-no-3-trimestre-de-2023.html',
  },
  {
    id: 38299,
    type: 'Release',
    title:
      'IBGE prevê safra de 308,5 milhões de toneladas para 2024,  com queda de 2,8% frente a 2023',
    introduction:
      'O primeiro prognóstico da produção nacional de grãos, cereais, leguminosas e oleaginosas para 2024 é de uma safra de 308,5 milhões de toneladas, com queda de 2,8% (ou menos 8,8 milhões de toneladas) ante a Safra 2023. 1º prognóstico para a Safra 2024...',
    publication_date: '09/11/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38299-ibge-preve-safra-de-308-5-milhoes-de-toneladas-para-2024-com-queda-de-2-8-frente-a-2023.html',
  },
  {
    id: 38304,
    type: 'Notícia',
    title:
      'Terceiro trimestre de 2023 tem crescimento no abate de bovinos, frangos e suínos',
    introduction:
      'Abate de bovinos aumentou 11,1% no terceiro trimestre do ano e 5,8% em relação ao segundo trimestre de 2023 - Foto: Licia Rubinstein/Agência IBGE Notícias O abate de bovinos subiu 11,1% e o de frangos teve alta de 3,1% no 3º trimestre de 2023, na...',
    publication_date: '09/11/2023 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/TriAbate_THUMB_LiciaR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/TriAbate_HOME_LiciaR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38304-terceiro-trimestre-de-2023-tem-crescimento-no-abate-de-bovinos-frangos-e-suinos.html',
  },
  {
    id: 38300,
    type: 'Notícia',
    title:
      'Primeiro prognóstico prevê redução de 2,8% na safra de 2024 frente a 2023',
    introduction:
      'Queda na produção de soja e milho impactou negativamente o primeiro prognóstico da safra de 2024 - Foto: Jaelson Lucas/EN-PR A safra brasileira de grãos, cereais e leguminosas deve somar 308,5 milhões de toneladas em 2024, segundo o primeiro prognóstico...',
    publication_date: '09/11/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/LSPA_THUMB_Jaelson-Lucas-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/LSPA_HOME_Jaelson-Lucas-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38300-primeiro-prognostico-preve-reducao-de-2-8-na-safra-de-2024-frente-a-2023.html',
  },
  {
    id: 38308,
    type: 'Notícia',
    title:
      'Com participação do IBGE, quarta edição da Caravana Federativa será em Palmas',
    introduction:
      'A quarta edição da Caravana Federativa do governo federal será realizada na Capital tocantinense, Palmas, nos dias 9 e 10 de novembro, no Colégio Senador Antonio Luiz Maya, na 206 Norte, Palmas (TO). Durante o evento, os técnicos do IBGE terão a...',
    publication_date: '08/11/2023 18:42:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana_federativa_TO.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana_federativa_TO.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38308-com-participacao-do-ibge-quarta-edicao-da-caravana-federativa-sera-em-palmas.html',
  },
  {
    id: 38284,
    type: 'Release',
    title: 'PIB cresce 4,8% e totaliza R$ 9 trilhões em 2021',
    introduction:
      'highlights O Produto Interno Bruto (PIB) atingiu R$ 9 trilhões em 2021, com crescimento de 4,8% ante 2020. O PIB per capita chegou a R$ 42.247,52. A Indústria cresceu 5,0%, os Serviços cresceram 4,8% e a Agropecuária ficou estável. O consumo final cresceu...',
    publication_date: '08/11/2023 10:00:00',
    product_id: 9052,
    products:
      '9052|Sistema de Contas Nacionais: Brasil|sistema-de-contas-nacionais-brasil|2020',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/ContasNacionais.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/ContasNacionais.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9052',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38284-release-contas-nacionais.html',
  },
  {
    id: 38279,
    type: 'Release',
    title:
      'Em setembro, produção industrial cresce em 5 dos 15 locais pesquisados',
    introduction:
      'Em setembro, a produção industrial do país variou 0,1%, na série com ajuste sazonal, com taxas positivas em apenas cinco dos 15 locais pesquisados. A maior alta foi do Pará (16,1%), com Rio de Janeiro (3,1%), Ceará (2,2%), Paraná (1,8%) e Goiás (1,2%) a...',
    publication_date: '08/11/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38279-em-setembro-producao-industrial-cresce-em-5-dos-15-locais-pesquisados.html',
  },
  {
    id: 38268,
    type: 'Release',
    title: 'Em setembro, vendas no varejo crescem 0,6%',
    introduction:
      'Em setembro de 2023, o volume de vendas do comércio varejista cresceu 0,6%, frente a agosto, na série com ajuste sazonal. No mês passado, a variação havia sido de -0,1%. A média móvel trimestral variou 0,4% no trimestre encerrado em setembro. Período...',
    publication_date: '08/11/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38268-em-setembro-vendas-no-varejo-crescem-0-6.html',
  },
  {
    id: 38280,
    type: 'Notícia',
    title:
      'Produção industrial avança em cinco dos 15 locais pesquisados em setembro frente a agosto',
    introduction:
      'Indústria extrativista foi a maior influência na indústria paraense, principal alta para setembro - Foto: Agência Vale Na passagem de agosto para setembro, a produção industrial brasileira variou 0,1%, com altas em 5 dos 15 locais investigados pela...',
    publication_date: '08/11/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/AgVale-RobertoRocha-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/AgVale-RobertoRocha-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38280-producao-industrial-avanca-em-cinco-dos-15-locais-pesquisados-em-setembro-frente-a-agosto.html',
  },
  {
    id: 38270,
    type: 'Notícia',
    title:
      'Vendas no varejo crescem 0,6% em setembro, com alta do setor de supermercados',
    introduction:
      'O setor de hiper e supermercados avançou 1,6% e impactou o resultado do varejo em setembro - Foto: Helena Pontes/Agência IBGE Notícias As vendas no comércio varejista no país cresceram 0,6% na passagem de agosto para setembro. No mês anterior, a variação...',
    publication_date: '08/11/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PMC_THUMB_HelenaPonets.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PMC_HOME_HelenaPonets.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38270-vendas-no-varejo-crescem-0-6-em-setembro-com-alta-do-setor-de-supermercados.html',
  },
  {
    id: 38267,
    type: 'Notícia',
    title: 'IBGE atualiza Banco de Dados e Informações Ambientais do Brasil',
    introduction:
      'Nova versão do BDiA traz atualizações em módulos temáticos e novos recortes dos dados - Foto: Arte sobre foto Freepick O IBGE disponibiliza a partir de hoje (7) a atualização do Banco de Dados e Informações Ambientais (BDiA), que reúne a coleção de bases...',
    publication_date: '07/11/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_11\\/BDiA_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_11\\/BDiA_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38267-ibge-atualiza-banco-de-dados-e-informacoes-ambientais-do-brasil.html',
  },
  {
    id: 38224,
    type: 'Release',
    title: 'Produção industrial varia 0,1% em setembro',
    introduction:
      'Em setembro de 2023, a produção industrial nacional variou 0,1% frente a agosto, na série com ajuste sazonal. Em relação a setembro de 2022, na série sem ajuste sazonal, houve alta de 0,6%. O acumulado no ano foi de –0,2% e o acumulado em 12 meses...',
    publication_date: '01/11/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38224-producao-industrial-varia-0-1-em-setembro.html',
  },
  {
    id: 38225,
    type: 'Notícia',
    title:
      'Produção industrial nacional varia 0,1% em setembro e mantém tendência de estabilidade observada no ano',
    introduction:
      'Indústrias extrativas apresentaram alta de 5,6% e foram a maior influência positiva em setembro - Foto: Agência Vale A produção industrial brasileira variou 0,1% na passagem de agosto para setembro, após assinalar 0,2% no mês anterior e -0,3% em julho. A...',
    publication_date: '01/11/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PIMBR-AgVale-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/PIMBR-AgVale-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38225-producao-industrial-nacional-varia-0-1-em-setembro-e-mantem-tendencia-de-estabilidade-observada-no-ano.html',
  },
  {
    id: 38195,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,7% e taxa de subutilização é de 17,6% no trimestre encerrado em setembro',
    introduction:
      'A taxa de desocupação (7,7%) no trimestre encerrado em setembro de 2023 recuou -0,4 ponto percentual (p.p.) frente ao trimestre de abril a junho de 2023 (8,0%) e caiu 1,0 p.p. ante o mesmo trimestre móvel de 2022 (8,7%). Foi a menor taxa de desocupação...',
    publication_date: '31/10/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38195-pnad-continua-taxa-de-desocupacao-e-de-7-7-e-taxa-de-subutilizacao-e-de-17-6-no-trimestre-encerrado-em-setembro.html',
  },
  {
    id: 38196,
    type: 'Notícia',
    title:
      'Taxa de desocupação cai para 7,7% no terceiro trimestre e número de ocupados atinge recorde na série',
    introduction:
      'Número de ocupados chegou a 99,8 milhões, o maior contingente desde o início da série histórica da pesquisa - Foto: Acervo IBGE A taxa de desocupação ficou em 7,7% no terceiro trimestre, com variação de -0,4 ponto percentual (p.p.) na comparação com os...',
    publication_date: '31/10/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/Centro_Rio_THUMB_AcervoIBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/Centro_Rio_HOME_AcervoIBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38196-taxa-de-desocupacao-cai-para-7-7-no-terceiro-trimestre-e-numero-de-ocupados-atinge-recorde-na-serie.html',
  },
  {
    id: 38186,
    type: 'Notícia',
    title:
      'Censo 2022: número de pessoas com 65 anos ou mais de idade cresceu 57,4% em 12 anos',
    introduction:
      'Censo 2022 confirma tendência de envelhecimento da população, com a parcela de pessoas de 65 anos ou mais crescendo 57,4% desde 2010 - Foto: SETI-AEN/PR Em 2022, o total de pessoas com 65 anos ou mais de idade no país (22.169.101) chegou a 10,9% da...',
    publication_date: '27/10/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/danca-idosos-SETI-AEN-PR-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/danca-idosos-SETI-AEN-PR-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38186-censo-2022-numero-de-pessoas-com-65-anos-ou-mais-de-idade-cresceu-57-4-em-12-anos.html',
  },
  {
    id: 38171,
    type: 'Notícia',
    title:
      'Em 2021, saldo de empresas que entraram e saíram do mercado cresceu pelo terceiro ano seguido',
    introduction:
      'Em 2021, entraram no mercado 926,1 mil empresas e 605,8 mil saíram, um saldo final de 320,2 mil empresas. Foto: Licia Rubinstein/Agência IBGE Notícias O saldo de empresas que entraram e saíram do mercado manteve-se positivo em 2021: 320,2 mil. Apesar da...',
    publication_date: '26/10/2023 10:00:00',
    product_id: 22649,
    products:
      '22649|Demografia das Empresas e Estatísticas de Empreendedorismo|demografia-das-empresas-e-estatisticas-de-empreendedorismo|2930',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/Demografia_das_Empresas_thumb-Licia.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/Demografia_das_Empresas_home-Licia.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22649',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38171-em-2021-saldo-de-empresas-que-entraram-e-sairam-do-mercado-cresceu-pelo-terceiro-ano-seguido.html',
  },
  {
    id: 38172,
    type: 'Release',
    title: 'IPCA-15 é de 0,21% em outubro',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo-15 (IPCA-15) foi de 0,21% em outubro, 0,14 ponto percentual (p.p.) abaixo da taxa de setembro (0,35%). No ano, o IPCA-15 acumula alta de 3,96% e, em 12 meses, de 5,05%, acima dos 5,00% registrados nos 12...',
    publication_date: '26/10/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38172-ipca-15-e-de-0-21-em-outubro.html',
  },
  {
    id: 38169,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) é de 1,11% em setembro',
    introduction:
      'Em setembro de 2023, os preços da indústria variaram 1,11% frente a agosto, segundo resultado positivo seguido. Houve alta de preços em 13 das 24 atividades industriais. O acumulado no ano foi de -5,43%, o menor para um mês de setembro desde o início da...',
    publication_date: '26/10/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38169-indice-de-precos-ao-produtor-ipp-e-de-1-11-em-setembro.html',
  },
  {
    id: 38173,
    type: 'Notícia',
    title: 'Com alta das passagens aéreas, IPCA-15 de outubro é de 0,21%',
    introduction:
      'Preços das passagens aéreas subiram 23,75% e tiveram o maior impacto individual no IPCA-15 de outubro - Foto: Licia Rubinstein/Agência IBGE Notícias A prévia da inflação ficou em 0,21% em outubro, 0,14 ponto percentual (p.p.) menor que a de setembro,...',
    publication_date: '26/10/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPCA15_thumb_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPCA15_home_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38173-com-alta-das-passagens-aereas-ipca-15-de-outubro-e-de-0-21.html',
  },
  {
    id: 38170,
    type: 'Notícia',
    title: 'Preços na indústria têm alta de 1,11% em setembro',
    introduction:
      'Refino de petróleo se destacou em setembro, com a maior variação (8,28%) e principal influência (0,85 p.p.) no índice - Foto: Freepik Pelo segundo mês consecutivo os preços da indústria tiveram variação positiva, registrando alta de 1,11% em setembro...',
    publication_date: '26/10/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPP_thumb_Freepik.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPPi_home_Freepik.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38170-precos-na-industria-tem-alta-de-1-11-em-setembro.html',
  },
  {
    id: 38160,
    type: 'Notícia',
    title:
      'Em 2022, 1,5 milhão de pessoas trabalharam por meio de aplicativos de serviços no país',
    introduction:
      'Cerca de 778 mil pessoas exerciam, em 2022, o trabalho principal por meio de aplicativos de transportes de passageiros - Foto: Helena Pontes/Agência IBGE Notícias No 4º trimestre de 2022, o Brasil tinha 1,5 milhão de pessoas que trabalhavam por meio de...',
    publication_date: '25/10/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/PNAD-plataforms-THUMB-Helena-Pontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/PNAD-plataforms-HOME-Helena-Pontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38160-em-2022-1-5-milhao-de-pessoas-trabalharam-por-meio-de-aplicativos-de-servicos-no-pais.html',
  },
  {
    id: 38159,
    type: 'Notícia',
    title:
      'Pesquisa inédita do IBGE mostra que 7,4 milhões de pessoas exerciam teletrabalho em 2022',
    introduction:
      '25,8% dos ocupados no setor de Informação, comunicação e atividades financeiras, imobiliárias, profissionais e administrativas realizaram teletrabalho em 2022 - Foto: Brisa Gil/Agência IBGE Notícias Em 2022, havia 7,4 milhões de pessoas em teletrabalho...',
    publication_date: '25/10/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/PNAD-teletrabalhs-THUMB-Brisa-Gil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_10\\/PNAD-teletrabalhs-HOME-Brisa-Gil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38159-pesquisa-inedita-do-ibge-mostra-que-7-4-milhoes-de-pessoas-exerciam-teletrabalho-em-2022.html',
  },
  {
    id: 38157,
    type: 'Notícia',
    title:
      'Com participação do IBGE, quarta edição da Caravana Federativa será em Palmas',
    introduction:
      'A quarta edição da Caravana Federativa do governo federal será realizada na Capital tocantinense, Palmas, nos dias 9 e 10 de novembro. A Secretaria de Relações Institucionais (SRI) confirmará o local e hora do evento. Durante o evento, os técnicos do...',
    publication_date: '24/10/2023 16:18:20',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana_federativa_TO.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana_federativa_TO.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38157-caravana-to.html',
  },
  {
    id: 38153,
    type: 'Notícia',
    title: 'IBGE participa de encontro do BRICS sobre população',
    introduction:
      'Entre os dias 12 e 15 de setembro deste ano, a África do Sul sediou a 8ª Reunião de Altos Funcionários e Especialistas em População do BRICS. O encontro, realizado em Durban, teve cinco sessões temáticas: motores das mudanças demográficas, inclusive...',
    publication_date: '23/10/2023 13:38:23',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/BRICS_thumbs.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/BRICS_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38153-ibge-participa-de-encontro-do-brics-sobre-populacao.html',
  },
  {
    id: 38152,
    type: 'Notícia',
    title:
      'IBGE fecha a Caravana Federativa com mais de 60 municípios atendidos',
    introduction:
      'O IBGE encerrou sua participação na Caravana Federativa - Rio Grande do Sul com atendimento a mais de 60 municípios, entre prefeitos, vice-prefeitos, secretários e demais gestores, prestando esclarecimentos sobre as pesquisas do Instituto. O evento, que...',
    publication_date: '20/10/2023 19:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana-rs-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana_federativa_RS_01.jpeg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38152-ibge-fecha-a-caravana-federativa-com-mais-de-60-municipios-atendidos.html',
  },
  {
    id: 38147,
    type: 'Notícia',
    title:
      'IBGE atende mais de 40 prefeituras no primeiro dia da Caravana Federativa',
    introduction:
      'O secretário de Assuntos Federativos do Governo Federal, André Ceciliano, recebeu um kit com informações sobre as pesquisas do IBGE O IBGE recebeu mais de 40 prefeituras gaúchas nesta quinta-feira (19), primeiro dia da Caravana Federativa - Rio Grande do...',
    publication_date: '19/10/2023 18:35:56',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/retrospectiva_2021\\/ceciliano_home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/retrospectiva_2021\\/ceciliano_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38147-ibge-atende-mais-de-40-prefeituras-no-primeiro-dia-da-caravana-federativa.html',
  },
  {
    id: 38145,
    type: 'Notícia',
    title:
      'IBGE realiza cerimônia de entrega do 1º Prêmio Fotográfico do Censo Demográfico 2022',
    introduction:
      'Ganhadores do Prêmio Fotográfico se reúnem no palco do auditório ao final do evento - Foto: Victor Otsuka/IBGE A cerimônia de entrega do 1º Prêmio Fotográfico do Censo Demográfico 2022 foi realizada, no dia 16 de outubro, na Assembleia Legislativa do...',
    publication_date: '19/10/2023 11:18:07',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/PremioFotografico-THUMB-VictorOtsuka-IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/PremioFotografico-HOME-VictorOtsuka-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38145-ibge-realiza-cerimonia-de-entrega-do-1-premio-fotografico-do-censo-demografico-2022.html',
  },
  {
    id: 38136,
    type: 'Release',
    title: 'Vendas no varejo variam -0,2% em agosto',
    introduction:
      'Em agosto de 2023, o volume de vendas do comércio variou -0,2% frente a julho, na série com ajuste sazonal, após alta de 0,7% em julho de 2023. A média móvel trimestral, depois de variar de 0,1% no trimestre encerrado em julho de 2023, voltou a...',
    publication_date: '18/10/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38136-vendas-no-varejo-variam-0-2-em-agosto.html',
  },
  {
    id: 38137,
    type: 'Notícia',
    title: 'Vendas do comércio mantêm estabilidade variando -0,2% em agosto',
    introduction:
      'O conjunto de atividades que compõem o mix de lojas de departamentos foram os que mais contribuíram para resultado no mês - Foto: Acervo IBGE O volume de vendas do comércio em agosto variou -0,2% frente a julho de 2023. Na comparação com agosto de 2022,...',
    publication_date: '18/10/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/pmc-set-thumb-alerrandre-barros.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/pmc-set-home-alerrandre-barros.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38137-vendas-do-comercio-mantem-estabilidade-variando-0-2-em-agosto.html',
  },
  {
    id: 38135,
    type: 'Notícia',
    title:
      'IBGE estará presente na edição de Porto Alegre (RS) da Caravana Federativa',
    introduction:
      'O IBGE participará, nos dias 19 e 20 de outubro, da Caravana Federativa, no Centro de Eventos FIERGS, da Federação das Indústrias do Estado do Rio Grande do Sul, em Porto Alegre (RS). Com palestras e oficinas apresentadas por representantes de diversos...',
    publication_date: '17/10/2023 15:17:46',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana-rs-home.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/caravana-rs-home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38135-ibge-estara-presente-na-edicao-de-porto-alegre-rs-da-caravana-federativa.html',
  },
  {
    id: 38125,
    type: 'Release',
    title: 'Volume dos Serviços recua 0,9% em agosto',
    introduction:
      'Em agosto de 2023, o volume de serviços no Brasil caiu 0,9% frente a julho, na série com ajuste sazonal, após ter acumulado um ganho de 2,1% no período maio-julho. O setor de serviços está 11,6% acima do nível de fevereiro de 2020 (pré-pandemia) e 1,9%...',
    publication_date: '17/10/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38125-volume-dos-servicos-recua-0-9-em-agosto.html',
  },
  {
    id: 38126,
    type: 'Notícia',
    title: 'Serviços recuam 0,9% em agosto, após três altas consecutivas ',
    introduction:
      'Gestão de portos e terminais exerceu a principal influência negativa sobre o resultado do setor de serviços no país. Foto: Licia Rubinstein/Agência IBGE Notícias Em agosto, o volume de serviços prestados no país recuou 0,9% frente ao mês anterior, após...',
    publication_date: '17/10/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PMS-THUMB_LiciaR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PMS-HOME_LiciaR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38126-servicos-recuam-0-9-em-agosto-apos-tres-altas-consecutivas.html',
  },
  {
    id: 38092,
    type: 'Release',
    title: 'IPCA foi de 0,26% em setembro',
    introduction:
      'Em setembro de 2023, o Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de 0,26%, 0,03 ponto percentual (p.p.) acima da taxa de agosto (0,23%). No ano, o IPCA acumula alta de 3,50% e, nos últimos 12 meses, de 5,19%, acima dos 4,61% observados nos...',
    publication_date: '11/10/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38092-ipca-foi-de-0-26-em-setembro.html',
  },
  {
    id: 38089,
    type: 'Release',
    title: 'Em setembro, Índice Nacional da Construção Civil varia 0,02%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) variou 0,02% em setembro, caindo 0,16 ponto percentual em relação ao índice de agosto (0,18%). O acumulado nos últimos doze meses foi de 2,68%, resultado abaixo dos 3,11% registrados nos doze meses...',
    publication_date: '11/10/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38089-em-setembro-indice-nacional-da-construcao-civil-varia-0-02.html',
  },
  {
    id: 38095,
    type: 'Notícia',
    title:
      'Inflação fica em 0,26% em setembro, influenciada pelo aumento da gasolina',
    introduction:
      'Subitem de maior peso do IPCA, a gasolina teve alta e impactou na inflação de setembro - Foto: Helena Pontes/Agência IBGE Notícias A inflação do mês de setembro foi de 0,26%, ficando 0,03 ponto percentual (p.p.) acima da taxa de 0,23% registrada em...',
    publication_date: '11/10/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPCA_THUMB_Helena-Pontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/IPCA_HOME_Helena-Pontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38095-inflacao-fica-em-0-26-em-setembro-influenciada-pelo-aumento-da-gasolina.html',
  },
  {
    id: 38090,
    type: 'Notícia',
    title:
      'Preços da construção variam 0,02% em setembro com menor número de acordos coletivos',
    introduction:
      'Com menos acordos coletivos, taxa da mão de obra passa de 0,64% em agosto para 0,36% em setembro - Foto: Lúcio Bernardo Jr./Agência Brasília O Índice Nacional da Construção Civil (Sinapi), divulgado hoje (11) pelo IBGE, apresentou variação de 0,02% em...',
    publication_date: '11/10/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/SINAPI_THUMB_Lcio-Bernardo-Jr-Agncia-Braslia_2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/SINAPI_HOME_Lcio-Bernardo-Jr-Agncia-Braslia_2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38090-precos-da-construcao-variam-0-02-em-setembro-com-menor-numero-de-acordos-coletivos.html',
  },
  {
    id: 38074,
    type: 'Release',
    title:
      'Em setembro, IBGE prevê safra recorde de 318,1 milhões de toneladas para 2023',
    introduction:
      'A estimativa de setembro para a produção de cereais, leguminosas e oleaginosas de 2023 é de 318,1 milhões de toneladas, com altas de 20,9% ante a safra 2022 (263,2 milhões de toneladas) e de 1,5% (ou mais 4,8 milhões de toneladas) frente à estimativa de...',
    publication_date: '10/10/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38074-em-setembro-ibge-preve-safra-recorde-de-318-1-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 38064,
    type: 'Release',
    title: 'Em agosto, indústria avança em nove dos 15 locais pesquisados',
    introduction:
      'Com a variação positiva de 0,4% na indústria nacional em agosto, na série com ajuste sazonal, nove dos 15 locais pesquisados pelo IBGE nesse indicador apontaram taxas positivas. Os maiores avanços foram do Amazonas (11,5%), do Espírito Santo (5,2%) e do...',
    publication_date: '10/10/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38064-em-agosto-industria-avanca-em-nove-dos-15-locais-pesquisados.html',
  },
  {
    id: 38075,
    type: 'Notícia',
    title:
      'Estimativa de setembro prevê safra recorde de 318,1 milhões de toneladas para 2023',
    introduction:
      'Com alta de 3,1% frente a estimativa de agosto, produção de milho passa para 131,7 milhões de toneladas em 2023 e atinge novo recorde. Foto: Helena Pontes/Agência IBGE Notícias O Levantamento Sistemático da Produção Agrícola (LSPA) para setembro,...',
    publication_date: '10/10/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/LSPA_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/LSPA_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38075-estimativa-de-setembro-preve-safra-recorde-de-318-1-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 38065,
    type: 'Notícia',
    title:
      'Produção industrial avança em nove de 15 locais pesquisados em agosto frente a julho ',
    introduction:
      'Alta no setor de products químicos influenciou crescimento da indústria paulista (3,0%) em agosto - Foto: Freepik Com a variação de 0,4% na produção industrial nacional na passagem de julho para agosto, nove dos 15 locais investigados pela Pesquisa...',
    publication_date: '10/10/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PIM-Reg_Thumb_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PIM-Reg_Home_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38065-producao-industrial-avanca-em-nove-de-15-locais-pesquisados-em-agosto-frente-a-julho.html',
  },
  {
    id: 38058,
    type: 'Notícia',
    title:
      'PNDS vai a campo coletar informações sobre demografia, saúde reprodutiva e nutrição das crianças',
    introduction:
      'Pesquisa fará levantamento detalhado sobre saúde de mulheres, homens e crianças - Foto: Tomaz Silva/Agência Brasil O IBGE está iniciando hoje (9/10) a coleta da Pesquisa Nacional de Demografia e Saúde (PNDS) 2023, realizada em parceria com a Secretaria...',
    publication_date: '09/10/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/PNDS_THUMB_Tomaz-Silva-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/PNDS_HOME_Tomaz-Silva-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38058-pnds-vai-a-campo-coletar-informacoes-sobre-demografia-saude-reprodutiva-e-nutricao-das-criancas.html',
  },
  {
    id: 38044,
    type: 'Notícia',
    title:
      'Em 2021, Brasil tinha 13,2 milhões  de microempreendedores individuais (MEIs)',
    introduction:
      'Cabeleireiros e outras atividades de tratamento de beleza reuniu 9,1% dos MEIs do país - Foto: Licia Rubinstein/Agência IBGE Notícias As Estatísticas dos Cadastros de Microempreendedores Individuais do IBGE revelam que, em 2021, havia 13,2 milhões de...',
    publication_date: '04/10/2023 10:00:00',
    product_id: 38014,
    products:
      '38014|Estatísticas dos Cadastros de Microempreendedores Individuais|estatisticas-dos-cadastros-de-microempreendedores-individuais|3076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/Cadastro-MEI_THUMB_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/Cadastro-MEI_HOME_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '38014',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38044-em-2021-brasil-tinha-13-2-milhoes-de-microempreendedores-individuais-meis.html',
  },
  {
    id: 38042,
    type: 'Notícia',
    title:
      'IBGE promove evento para discutir e rever o conceito de aglomerado subnormal',
    introduction:
      'Participaram do evento representantes do IBGE, de órgãos públicos, de universidades, da sociedade civil organizada e das favelas e comunidades - Foto: Jéssica Farias O Instituto Brasileiro de Geografia e Estatística (IBGE) realizou, entre os dias 25/09 e...',
    publication_date: '03/10/2023 16:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/Evento_DF_THUMB_JessicaFarias.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_10\\/Evento_DF_HOME_JessicaFarias.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38042-ibge-promove-evento-para-discutir-e-rever-o-conceito-de-aglomerado-subnormal.html',
  },
  {
    id: 38015,
    type: 'Release',
    title: 'Produção industrial tem variação de 0,4% em agosto',
    introduction:
      'Em agosto de 2023, a produção industrial nacional variou 0,4% frente a julho, na série com ajuste sazonal. Em relação a agosto de 2022, o avanço foi de 0,5%. Frente a igual período de 2022, a indústria acumula taxa negativa no ano (-0,3%). O acumulado...',
    publication_date: '03/10/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38015-producao-industrial-tem-variacao-de-0-4-em-agosto.html',
  },
  {
    id: 38016,
    type: 'Notícia',
    title: 'Produção industrial nacional tem variação de 0,4% em agosto',
    introduction:
      'Desempenho da indústria farmacêutica impactou no resultado do mês - Foto: Freepik A indústria do país apresentou uma variação positiva de 0,4% na passagem de julho para agosto, eliminando parte da queda de 0,6% verificada no mês anterior. Na comparação...',
    publication_date: '03/10/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PIM-BR_thumb-Freepik.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_10\\/PIM-BR_home-Freepik.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38016-producao-industrial-nacional-tem-variacao-de-0-4-em-agosto.html',
  },
  {
    id: 37987,
    type: 'Notícia',
    title:
      'IBGE lança nova edição do Brasil em Números ilustrada com obras do Museu da Natureza',
    introduction:
      'Edição do Brasil em Números de 2023 é ilustrada com obras do Museu da Natureza, localizado no Piauí - Foto: Arte sobre mockup Pexels O IBGE lança hoje (29) a 31ª edição do Brasil em Números, publicação anual com informações e análises de múltiplos...',
    publication_date: '29/09/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/BN_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/BN_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37987-ibge-lanca-nova-edicao-do-brasil-em-numeros-ilustrada-com-obras-do-museu-da-natureza.html',
  },
  {
    id: 37989,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,8% e taxa de subutilização é de 17,7% no trimestre encerrado em agosto',
    introduction:
      'A taxa de desocupação (7,8%) no trimestre encerrado em agosto de 2023 recuou 0,5 ponto percentual (p.p.) frente ao trimestre de março a maio de 2023 (8,3%) e caiu 1,1 p.p. ante o mesmo trimestre móvel de 2022 (8,9%). Foi a menor taxa de desocupação desde...',
    publication_date: '29/09/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37989-pnad-continua-taxa-de-desocupacao-e-de-7-8-e-taxa-de-subutilizacao-e-de-17-7-no-trimestre-encerrado-em-agosto.html',
  },
  {
    id: 37990,
    type: 'Notícia',
    title: 'Desemprego recua e fecha trimestre encerrado em agosto em 7,8%',
    introduction:
      'Número de pessoas ocupadas chegou a 99,7 milhões no trimestre encerrado em agosto - Foto: Arte sobre foto Pixabay A taxa de desocupação foi 7,8% no trimestre encerrado em agosto de 2023. Uma queda de 0,5 ponto percentual (p.p) em relação ao trimestre...',
    publication_date: '29/09/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_09\\/PNAD_THUMB_pixabay.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_09\\/PNAD_HOME_pixabay.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37990-desemprego-recua-e-fecha-trimestre-encerrado-em-agosto-em-7-8.html',
  },
  {
    id: 37988,
    type: 'Notícia',
    title:
      'IBGE marca presença na Caravana Federativa atendendo prefeitos, secretários municipais e público em geral ',
    introduction:
      'O secretário de Agricultura e Pesca de Itaguaí (RJ), Carlos Ribeiro, demonstrou interesse sobre dados relativos a limites territoriais. - Foto: Márcio Costa/Agência IBGE Notícias O estande do IBGE atraiu grande interesse de prefeitos e secretários...',
    publication_date: '28/09/2023 18:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/IBGE_CRAVANA_THUMB.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/IBGE_CRAVANA_HOME.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37988-ibge-marca-presenca-na-caravana-federativa-atendendo-prefeitos-secretarios-municipais-e-publico-em-geral.html',
  },
  {
    id: 37973,
    type: 'Notícia',
    title:
      '84,9% das indústrias de médio e grande porte utilizaram tecnologia digital avançada',
    introduction:
      'Mais de 90% das empresas que utilizaram robótica o fizeram na área de produção - Foto: Freepik Em 2022, 84,9% (8.134) das 9.586 empresas industriais com 100 ou mais pessoas ocupadas utilizaram pelo menos uma tecnologia digital avançada, sendo a...',
    publication_date: '28/09/2023 10:00:00',
    product_id: 35867,
    products:
      '35867|Pesquisa de Inovação Semestral|pesquisa-de-inovacao-semestral|3065',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PINTEC_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PINTEC_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '35867',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37973-84-9-das-industrias-de-medio-e-grande-porte-utilizaram-tecnologia-digital-avancada.html',
  },
  {
    id: 37969,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) é de 0,92% em agosto',
    introduction:
      'Em agosto de 2023, os preços da indústria variaram 0,92% frente a julho, voltando ao campo positivo depois de seis meses. Nessa comparação, 12 das 24 atividades industriais tiveram variações positivas de preço. O acumulado no ano foi de -6,32%, a...',
    publication_date: '28/09/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37969-indice-de-precos-ao-produtor-ipp-e-de-0-92-em-agosto.html',
  },
  {
    id: 37970,
    type: 'Notícia',
    title:
      'Preços na indústria sobem 0,92% em agosto, após seis meses de queda',
    introduction:
      'Refino de petróleo respondeu por 0,72 pontos percentuais na variação de 0,92% do IPP em agosto - Foto: André Mota de Souza/Ag Petrobras  Os preços da indústria subiram 0,92% em agosto frente a julho, voltando ao campo positivo depois de seis meses de...',
    publication_date: '28/09/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPP_THUMB_AndreMottadeSouza_AgPetrobras.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPP_HOME_AndreMottadeSouza_AgPetrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37970-precos-na-industria-sobem-0-92-em-agosto-apos-seis-meses-de-queda.html',
  },
  {
    id: 37965,
    type: 'Notícia',
    title: 'IBGE adere ao concurso público nacional unificado',
    introduction:
      'Foto: Ministério da Gestão e da Inovação em Serviços Públicos O IBGE comunicou, oficialmente, à Secretaria de Gestão de Pessoas do Ministério da Gestão e da Inovação em Serviços Públicos (MGISP) sua adesão ao Concurso Público Nacional Unificado (CPN) e...',
    publication_date: '27/09/2023 14:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Concurso_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Concurso_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37965-ibge-adere-ao-concurso-publico-nacional-unificado.html',
  },
  {
    id: 37964,
    type: 'Notícia',
    title: 'IBGE publica 68º volume da Revista Brasileira de Geografia',
    introduction:
      'Um dos highlights da nova edição da RBG é o artigo sobre a dinâmica da distribuição de assentamentos feita em diferentes governos no período democrático - Foto: Arte sobre foto Freepik O IBGE disponibiliza a partir de hoje (27) o primeiro número do volume...',
    publication_date: '27/09/2023 10:00:00',
    product_id: 27499,
    products:
      '27499|Revista Brasileira de Geografia|revista-brasileira-de-geografia|2985',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_09\\/RBG-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_09\\/RBG-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '27499',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37964-ibge-publica-68-volume-da-revista-brasileira-de-geografia.html',
  },
  {
    id: 37963,
    type: 'Notícia',
    title:
      'Valor de produção da silvicultura e da extração vegetal cresce 11,9% e atinge recorde de R$ 33,7 bilhões',
    introduction:
      'Área plantada da silvicultura somou 9,5 milhões de hectares, dos quais 77,3% são de eucalipto, e valor de produção atingiu R$ 27,4 bilhões - Foto: Fernando Dias/Ascom-Sepadr O Valor da produção florestal atingiu o recorde de R$ 33,7 bilhões, com alta de...',
    publication_date: '27/09/2023 10:00:00',
    product_id: 9105,
    products:
      '9105|Produção da Extração Vegetal e da Silvicultura|producao-da-extracao-vegetal-e-da-silvicultura|2040',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PEVS_THUMB_Fernando-Dias-Ascom-Sepadr.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PEVS_HOME_Fernando-Dias-Ascom-Sepadr.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9105',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37963-valor-de-producao-da-silvicultura-e-da-extracao-vegetal-cresce-11-9-e-atinge-recorde-de-r-33-7-bilhoes.html',
  },
  {
    id: 37954,
    type: 'Notícia',
    title: 'IBGE leva informações e serviços para a Caravana Federativa',
    introduction:
      'O IBGE participará, nos dias 28 e 29 de setembro, da Caravana Federativa, no Centro de Convenções SulAmérica, Cidade Nova (RJ). Com palestras e oficinas apresentadas por representantes de diversos órgãos públicos, o evento disponibilizará serviços do...',
    publication_date: '26/09/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/caravana_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/caravana_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37954-ibge-leva-informacoes-e-servicos-para-a-caravana-federativa.html',
  },
  {
    id: 37947,
    type: 'Notícia',
    title:
      'IPCA-15 fica em 0,35% em setembro, influenciado pela alta da gasolina',
    introduction:
      'Gasolina subiu 5,18%, e foi o maior impacto individual (0.25 p.p.) no índice de setembro - Foto: Helena Pontes/Agência IBGE Notícias A prévia da inflação ficou em 0,35% em setembro, 0,07 ponto percentual (p.p.) acima da taxa registrada em agosto (0,28%)....',
    publication_date: '26/09/2023 09:00:00',
    product_id: 0,
    products:
      '9262|Índice Nacional de Preços ao Consumidor Amplo Especial|indice-nacional-de-precos-ao-consumidor-amplo-especial|2212;9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA15_THUMB_Helena-Pontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA15_HOME_Helena-Pontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9262, 9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37947-ipca-15-fica-em-0-35-em-setembro-influenciado-pela-alta-da-gasolina.html',
  },
  {
    id: 37946,
    type: 'Release',
    title: 'IPCA-15 é de 0,35% em setembro e IPCA-E é de 0,56%',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo-15 (IPCA-15) foi de 0,35% em setembro, ficando 0,07 ponto percentual acima da taxa de agosto (0,28%). No ano, o IPCA-15 acumula alta de 3,74% e, em 12 meses, de 5,00%, acima dos 4,24% nos 12 meses...',
    publication_date: '26/09/2023 09:00:00',
    product_id: 0,
    products:
      '9262|Índice Nacional de Preços ao Consumidor Amplo Especial|indice-nacional-de-precos-ao-consumidor-amplo-especial|2212;9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9262, 9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37946-ipca-15-e-de-0-35-em-setembro-e-ipca-e-e-de-0-56.html',
  },
  {
    id: 37942,
    type: 'Notícia',
    title:
      '36,4 mil candidatos a vagas temporárias no IBGE fazem prova neste domingo',
    introduction:
      'Com prova neste domingo, seleção visa preencher 148 vagas de Agente Censitário de Pesquisas e Mapeamento do IBGE - Foto: Acervo IBGE No próximo domingo (24), serão aplicadas as provas do processo seletivo simplificado com 148 vagas temporárias para...',
    publication_date: '22/09/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/PSS-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/PSS-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37942-36-4-mil-candidatos-a-vagas-temporarias-no-ibge-fazem-prova-neste-domingo.html',
  },
  {
    id: 37937,
    type: 'Notícia',
    title:
      'Rebanhos e valor dos principais products de origem animal foram recordes em 2022',
    introduction:
      'O rebanho de suínos cresceu 4,3%, chegando ao recorde de 44,4 milhões de animais, mais da metade na Região Sul (23 milhões) - Foto: Jaelson Lucas/AEN-PR Em 2022, o rebanho bovino cresceu pelo quarto ano consecutivo e alcançou novo recorde da série...',
    publication_date: '21/09/2023 10:00:00',
    product_id: 9107,
    products:
      '9107|Pesquisa da Pecuária Municipal |producao-da-pecuaria-municipal|2041',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_THUMB_Jaelson-Lucas-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_HOME_Jaelson-Lucas-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9107',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37937-rebanhos-e-valor-dos-principais-produto-de-origem-animal-foram-recordes-em-2022.html',
  },
  {
    id: 37931,
    type: 'Notícia',
    title:
      'Servidores do IBGE no RS se mobilizam para ajudar desabrigados nas enchentes',
    introduction:
      'Servidores da Superintendência RS e da Agência de Lajeado levaram solidariedade e mantimentos às vítimas das enchentes que atingiram o Vale do Taquari - Foto - Acervo IBGE Na última semana, servidores do IBGE no Rio Grande do Sul se mobilizaram para...',
    publication_date: '19/09/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Doaes_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/Doaes_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37931-servidores-do-ibge-no-rs-se-mobilizam-para-ajudar-desabrigados-nas-enchentes.html',
  },
  {
    id: 37913,
    type: 'Notícia',
    title: 'Taxa de sindicalização cai a 9,2% em 2022, menor nível da série',
    introduction:
      'Em 2022, menos de 10% dos trabalhadores eram sindicalizados, chegando ao menor contingente da série iniciada em 2012 - Foto: Rovena Rosa/Agência Brasil Em 2022, das 99,6 milhões de pessoas ocupadas, 9,2% (9,1 milhões de pessoas) eram associadas a...',
    publication_date: '15/09/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_09\\/PNAD-Sindical_THUMB_Rovena-Rosa-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_09\\/PNAD-Sindical_HOME_Rovena-Rosa-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37913-taxa-de-sindicalizacao-cai-a-9-2-em-2022-menor-nivel-da-serie.html',
  },
  {
    id: 37908,
    type: 'Notícia',
    title: 'Volume de vendas no comércio tem alta de 0,7% em julho',
    introduction:
      'Setor de artigos de uso pessoal e doméstico influenciou no resultado do comércio de julho - Foto: Alerrandre Barros/Agência IBGE Notícias O comércio varejista nacional teve alta de 0,7% em julho, após variação de 0,1% em junho. Com isso, a média móvel...',
    publication_date: '15/09/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PMC_Thumb_Alerrandre-Barros.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PMC_Home_Alerrandre-Barros.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37908-volume-de-vendas-no-comercio-tem-alta-de-0-7-em-julho.html',
  },
  {
    id: 37907,
    type: 'Release',
    title: 'Vendas no varejo sobem 0,7% em julho',
    introduction:
      'Em julho de 2023, o volume de vendas do comércio varejista teve alta de 0,7% frente a junho, na série com ajuste sazonal. A média móvel trimestral foi de 0,1%. Frente a julho de 2022, houve alta de 2,4%, segunda alta consecutiva nessa comparação. O...',
    publication_date: '15/09/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37907-vendas-no-varejo-sobem-0-7-em-julho.html',
  },
  {
    id: 37894,
    type: 'Notícia',
    title: 'Em 2022, Sorriso (MT) manteve a liderança na produção agrícola',
    introduction:
      'Com crescimento de 1,3%, valor de produção da soja chegou a R$ 345,4 bilhões em 2022 - Foto: Secom/MT Valor de produção e safra de grãos batem recorde em 2022 O valor de produção das principais culturas agrícolas do Brasil atingiu o recorde de R$ 830,1...',
    publication_date: '14/09/2023 10:00:00',
    product_id: 0,
    products:
      '9117|Culturas temporárias e permanentes #PAM1|producao-agricola-municipal-culturas-temporarias-e-permanentes|2046;9119|Cereais, leguminosas e oleaginosas#PAM2|producao-agricola-municipal-cereais-leguminosas-e-oleaginosas|2046',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PAM_THUMB_Secom-MT.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PAM_HOME_Secom-MT.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9117, 9119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37894-em-2022-sorriso-mt-manteve-a-lideranca-na-producao-agricola.html',
  },
  {
    id: 37899,
    type: 'Notícia',
    title:
      'Com expansão de 0,5% em julho, serviços têm terceira alta consecutiva',
    introduction:
      'O transporte de cargas (1,4%) exerceu a principal influência positiva sobre o resultado do setor de serviços no país - Foto: Helena Pontes/Agência IBGE Notícias Em julho, o volume de serviços prestados no país cresceu 0,5% frente ao mês anterior. É a...',
    publication_date: '14/09/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PMS_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PMS_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37899-com-expansao-de-0-5-em-julho-servicos-tem-terceira-alta-consecutiva.html',
  },
  {
    id: 37898,
    type: 'Release',
    title: 'Volume dos Serviços cresce 0,5% em julho',
    introduction:
      'Em julho de 2023, o volume de serviços no Brasil cresceu 0,5% frente a junho, na série com ajuste sazonal. Foi o terceiro resultado positivo consecutivo do indicador, período em que acumulou ganho de 2,2%. O setor de serviços está 12,8% acima do nível de...',
    publication_date: '14/09/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37898-volume-dos-servicos-cresce-0-5-em-julho.html',
  },
  {
    id: 37885,
    type: 'Notícia',
    title:
      'Produção industrial recua em quatorze dos 15 locais pesquisados em julho frente a junho',
    introduction:
      'O setor de equipamentos de informática, products eletrônicos e ópticos foi a maior influência no resultado da indústria no Amazonas - Foto: Tiago Ciccarini/SEJUSP Na passagem de junho para julho, a produção industrial brasileira recuou 0,6%, com quedas...',
    publication_date: '13/09/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIM-Reg_THUMB_Tiago-Ciccarini-SEJUSP.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIM-Reg_HOME_Tiago-Ciccarini-SEJUSP.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37885-producao-industrial-recua-em-quatorze-dos-15-locais-pesquisados-em-julho-frente-a-junho.html',
  },
  {
    id: 37884,
    type: 'Release',
    title: 'Em julho, indústria recua em quatorze dos 15 locais pesquisados',
    introduction:
      'Em julho de 2023, a produção industrial recuou 0,6% frente a junho, na série com ajuste sazonal, com taxas negativas em quatorze dos 15 locais pesquisados. As quedas mais intensas foram no Amazonas (-8,8%), Bahia (-6,0%) e Pará (-4,4%), embora as taxas...',
    publication_date: '13/09/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37884-em-julho-industria-recua-em-quatorze-dos-15-locais-pesquisados.html',
  },
  {
    id: 37865,
    type: 'Notícia',
    title:
      ' Inflação fica em 0,23% em agosto, influenciada pelo aumento da energia elétrica',
    introduction:
      'Aumento de 4,59% na energia elétrica residencial foi influenciado pelo fim da incorporação do Bônus de Itaipu, creditado nas faturas do mês anterior - Foto: Helena Pontes/Agência IBGE Notícias A inflação do mês de agosto foi de 0,23%, ficando 0,11 ponto...',
    publication_date: '12/09/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA_THUMB_Helena-Pontes_09.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/IPCA_HOME_Helena-Pontes_09-1.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37865-inflacao-fica-em-0-23-em-agosto-influenciada-pelo-aumento-da-energia-eletrica.html',
  },
  {
    id: 37864,
    type: 'Release',
    title: 'IPCA foi de 0,23% em agosto',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de 0,23% em agosto, 0,11 ponto percentual (p.p.) acima da taxa de 0,12% registrada em julho. No ano, o IPCA acumula alta de 3,23% e, nos últimos 12 meses, de 4,61%. Em agosto de 2022, a variação...',
    publication_date: '12/09/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37864-ipca-foi-de-0-23-em-agosto.html',
  },
  {
    id: 37863,
    type: 'Notícia',
    title: 'Preços da construção variam 0,18% em agosto ',
    introduction:
      'Em agosto, preços da construção civil foram mais uma vez influenciados pela parcela dos profissionais - Foto: Helena Pontes/Agência IBGE Notícias O Índice Nacional da Construção Civil (Sinapi) apresentou variação de 0,18% em agosto. A taxa é 0,05 ponto...',
    publication_date: '12/09/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/SINAPI_THUMB_Marcello-Casal-Jr-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/SINAPI_HOME_Marcello-Casal-Jr-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37863-precos-da-construcao-variam-0-18-em-agosto.html',
  },
  {
    id: 37862,
    type: 'Release',
    title: 'Em agosto, Índice Nacional da Construção Civil é de 0,18%',
    introduction:
      'O Índice Nacional da Construção Civil (SINAPI) foi de 0,18% em agosto, caindo 0,05 ponto percentual em relação ao índice de julho (0,23%). O acumulado nos últimos 12 meses foi para 3,11%, resultado abaixo dos 3,52% registrados nos 12 meses imediatamente...',
    publication_date: '12/09/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37862-em-agosto-indice-nacional-da-construcao-civil-e-de-0-18.html',
  },
  {
    id: 37832,
    type: 'Notícia',
    title:
      'Estimativa de agosto prevê safra recorde de 313,3 milhões de toneladas para 2023',
    introduction:
      'Com alta de 25,8%, para 150,3 milhões de toneladas, a produção da soja atinge novo recorde, assim como o trigo, o milho e o sorgo - Foto: Gilson Abreu/AEN-PR O Levantamento Sistemático da Produção Agrícola (LSPA), divulgado hoje (6) pelo IBGE, mostra que...',
    publication_date: '06/09/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/sojagilsonabreu-AEN-PR-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/sojagilsonabreu-AEN-PR-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37832-estimativa-de-agosto-preve-safra-recorde-de-313-3-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37830,
    type: 'Release',
    title:
      'Em agosto, IBGE prevê safra recorde de 313,3 milhões de toneladas para 2023',
    introduction:
      'A estimativa de agosto para a produção de cereais, leguminosas e oleaginosas de 2023 é de 313,3 milhões de toneladas, 19,0% maior (ou mais 50,1 milhões de toneladas) que a de 2022 (263,2 milhões de toneladas) e 1,4% acima da estimativa de julho. A área a...',
    publication_date: '06/09/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37830-em-agosto-ibge-preve-safra-recorde-de-313-3-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37828,
    type: 'Release',
    title:
      'Cresce o abate de bovinos e frangos e cai o de suínos no 2º tri de 2023',
    introduction:
      'No 2º trimestre de 2023, o abate de frangos subiu 4,7%, o de bovinos aumentou 12,6% e o de suínos caiu 1,0% ante o mesmo período de 2022. Frente ao 1º trimestre de 2023, o abate de frangos caiu 3,2%, o de bovinos cresceu 13,4% e o de suínos recuou 0,6%....',
    publication_date: '06/09/2023 09:00:00',
    product_id: 0,
    products:
      '9216|Resultados completos#2ovos|pesquisa-trimestral-da-producao-de-ovos-de-galinha|2072;9209|Resultados completos#2leite|pesquisa-trimestral-do-leite|2219;9214|Resultados completos#2couro|pesquisa-trimestral-do-couro|2218;9203|Resultados completos#2abate|pesquisas-trimestrais-do-abate-de-animais|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9216, 9209, 9214, 9203',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37828-cresce-o-abate-de-bovinos-e-frangos-e-cai-o-de-suinos-no-2-tri-de-2023.html',
  },
  {
    id: 37829,
    type: 'Notícia',
    title:
      'Abate de bovinos cresce 12,6% no 2º trimestre, enquanto o de suínos cai pela primeira vez desde 2014 na comparação anual',
    introduction:
      'Abate de bovinos chega a 8,36 milhões de cabeças no 2º trimestre de 2023, com aumentos tanto na comparação anual como na trimestral - Foto: Licia Rubinstein/Agência IBGE Notícias O abate de bovinos chegou a 8,36 milhões de cabeças no 2º trimestre de...',
    publication_date: '06/09/2023 09:00:00',
    product_id: 0,
    products:
      '9216|Resultados completos#2ovos|pesquisa-trimestral-da-producao-de-ovos-de-galinha|2072;9209|Resultados completos#2leite|pesquisa-trimestral-do-leite|2219;9214|Resultados completos#2couro|pesquisa-trimestral-do-couro|2218;9203|Resultados completos#2abate|pesquisas-trimestrais-do-abate-de-animais|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/Gado_031_LiciaR_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/Gado_031_LiciaR_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9216, 9209, 9214, 9203',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37829-abate-de-bovinos-cresce-12-6-no-2-trimestre-enquanto-o-de-suinos-cai-pela-primeira-vez-desde-2014-na-comparacao-anual.html',
  },
  {
    id: 37810,
    type: 'Notícia',
    title: 'Produção industrial tem perda de ritmo e recua 0,6% em julho',
    introduction:
      'Indústria de veículos foi a principal influência para resultado negativo da indústria em julho - Foto: José Fernando Ogura/AEN-PR A produção industrial do país mostrou perda de ritmo e apresentou retração de 0,6% na passagem de junho para julho. O setor...',
    publication_date: '05/09/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIMBR-THUMB-JoseFernandoOgura_AEN_PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIMBR-HOME-JoseFernandoOgura_AEN_PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37810-producao-industrial-tem-perda-de-ritmo-e-recua-0-6-em-julho.html',
  },
  {
    id: 37809,
    type: 'Release',
    title: 'Produção industrial recua 0,6% em julho',
    introduction:
      'Em julho de 2023, a produção industrial nacional recuou 0,6% frente a junho, na série com ajuste sazonal. Em relação a julho de 2022, a queda foi de 1,1%. No ano, a indústria acumula taxa negativa (-0,4%) frente a igual período de 2022, e variação nula...',
    publication_date: '05/09/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37809-producao-industrial-recua-0-6-em-julho.html',
  },
  {
    id: 37788,
    type: 'Notícia',
    title: 'IBGE abre inscrições para  120 vagas temporárias no Rio de Janeiro',
    introduction:
      'LEGENDA - Foto: Licia Rubinstein/Agência IBGE Notícias O IBGE abriu hoje (4/09) as inscrições para o Processo Seletivo Simplificado que oferece 120 vagas temporárias para a função de Codificador Censitário. Todas as vagas são para trabalhar no município...',
    publication_date: '04/09/2023 09:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/PSS_THUMB_LiciaRubistein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_09\\/PSS_HOME_LiciaRubistein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37788-ibge-abre-inscricoes-para-120-vagas-temporarias-no-rio-de-janeiro.html',
  },
  {
    id: 37775,
    type: 'Notícia',
    title:
      'IBGE divulga a lista de vencedores do Prêmio Fotográfico do Censo 2022',
    introduction:
      'O IBGE divulga hoje, 1º de setembro, o resultado final do Prêmio Fotográfico do Censo 2022. O concurso foi dividido em três categorias: paisagens urbanas, paisagens rurais e habitação. A premiação também considerou os votos do público, via internet. As...',
    publication_date: '01/09/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Concurso-fotogr_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Concurso-fotogr_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37775-ibge-divulga-a-lista-de-vencedores-do-premio-fotografico-do-censo-2022.html',
  },
  {
    id: 37774,
    type: 'Notícia',
    title:
      'PIB cresce 0,9% no segundo trimestre e fecha semestre com alta de 3,7%',
    introduction:
      'A extração de petróleo, muito ligada à exportação, impactou a alta do PIB - Foto: Agência Petrobras Na passagem do primeiro para o segundo trimestre deste ano, o Produto Interno Bruto (PIB) cresceu 0,9%, oitavo resultado positivo consecutivo do indicador...',
    publication_date: '01/09/2023 09:00:00',
    product_id: 9300,
    products:
      '9300|Sistema de Contas Nacionais Trimestrais|contas-nacionais-trimestrais|2087',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIB-Tri_THUMB_AgenciaPetrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PIB-Tri_HOME_AgenciaPetrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9300',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37774-pib-cresce-0-9-no-segundo-trimestre-e-fecha-semestre-com-alta-de-3-7.html',
  },
  {
    id: 37773,
    type: 'Release',
    title: 'PIB cresce 0,9% no 2º trimestre de 2023',
    introduction:
      'O Produto Interno Bruto (PIB) cresceu 0,9% no segundo trimestre de 2023, ante o trimestre anterior, na série com ajuste sazonal. Frente ao mesmo trimestre de 2022, o PIB cresceu 3,4%. No acumulado dos quatro trimestres terminados em junho de 2023, o PIB...',
    publication_date: '01/09/2023 09:00:00',
    product_id: 9300,
    products:
      '9300|Sistema de Contas Nacionais Trimestrais|contas-nacionais-trimestrais|2087',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIB_release_nac_tri.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIB_release_nac_tri.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9300',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37773-pib-cresce-0-9-no-2-trimestre-de-2023.html',
  },
  {
    id: 37745,
    type: 'Notícia',
    title: 'IBGE reforça compromisso com Agenda 2030 da ONU',
    introduction:
      'Os Objetivos de Desenvolvimento Sustentável (ODS) integram a Agenda 2030 da Organização das Nações Unidas (ONU) - Foto: Licia Rubinstein/Agência IBGE Notícias Na última sexta-feira (25), membros de diferentes setores do IBGE se reuniram no Instituto...',
    publication_date: '31/08/2023 14:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Evento-ODS_thumb_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Evento-ODS_home_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37745-ibge-reforca-compromisso-com-agenda-2030-da-onu.html',
  },
  {
    id: 37753,
    type: 'Notícia',
    title:
      'Ocupação no setor de serviços cresce 7,8% e chega ao recorde de 13,4 milhões',
    introduction:
      'A ocupação em Serviços prestados principalmente às famílias caiu 8,5% ante 2019, por influência dos Serviços de alimentação, que perdeu 223,7 mil vagas - Foto: Helena Pontes/Agência IBGE Notícias A Pesquisa Anual de Serviços (PAS) 2021 mostrou um total...',
    publication_date: '31/08/2023 10:00:00',
    product_id: 9028,
    products:
      '9028|Pesquisa Anual de Serviços #PAS1|pesquisa-anual-de-servicos|2008',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PAS-THUMB-HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PAS-HOME-HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9028',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37753-ocupacao-no-setor-de-servicos-cresce-7-8-e-chega-ao-recorde-de-13-4-milhoes.html',
  },
  {
    id: 37758,
    type: 'Release',
    title: 'IBGE divulga relação da população dos municípios',
    introduction:
      'O IBGE publicou no Diário Oficial da União desta quinta-feira (31), a relação das populações dos municípios do país, segundo o Censo 2022, com atualizações dos seus limites territoriais. Veja, aqui. Essa publicação obedece ao art. 102 da Lei n° 8.443/92...',
    publication_date: '31/08/2023 09:00:00',
    product_id: 37734,
    products:
      '37734|Relação da População dos Municípios para publicação no DOU em 2023|relacao-da-populacao-dos-municipios-para-publicacao-no-dou|3072',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/Relao_da_Populao_dos_Municpios_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/Relao_da_Populao_dos_Municpios_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '37734',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37758-ibge-divulga-relacao-da-populacao-dos-municipios.html',
  },
  {
    id: 37752,
    type: 'Notícia',
    title:
      'Desemprego recua a 7,9% no trimestre encerrado em julho, menor taxa para o período desde 2014',
    introduction:
      'População ocupada cresce em 1,3 milhão de pessoas no trimestre encerrado em julho - Foto - Acervo IBGE A taxa de desocupação foi 7,9% no trimestre encerrado em julho de 2023, mostrando recuo de 0,6 ponto percentual (p.p) em relação ao trimestre anterior,...',
    publication_date: '31/08/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD_THUMB_Acervo-IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD_HOME_Acervo-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37752-desemprego-recua-a-7-9-no-trimestre-encerrado-em-julho-menor-taxa-para-o-periodo-desde-2014.html',
  },
  {
    id: 37750,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 7,9% e  taxa de subutilização é de 17,8% no trimestre encerrado em julho',
    introduction:
      'A taxa de desocupação (7,9%) do trimestre de maio a julho de 2023 recuou 0,6 ponto percentual (p.p.) frente ao trimestre de fevereiro a abril de 2023 (8,5%) e caiu 1,2 p.p. ante o mesmo trimestre móvel de 2022 (9,1%). Essa foi a menor taxa de desocupação...',
    publication_date: '31/08/2023 09:00:00',
    product_id: 9173,
    products:
      '9173|Divulgação trimestral#pnadc2|pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral|2511',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9173',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37750-pnad-continua-taxa-de-desocupacao-e-de-7-9-e-taxa-de-subutilizacao-e-de-17-8-no-trimestre-encerrado-em-julho.html',
  },
  {
    id: 37737,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) é de -0,82% em julho',
    introduction:
      'Em julho de 2023, os preços da indústria variaram -0,82% frente a junho, sexta queda consecutiva. Nessa comparação, 16 das 24 atividades industriais tiveram queda de preços. O acumulado no ano foi de -7,23%, o menor para um mês de julho desde o início da...',
    publication_date: '30/08/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37737-indice-de-precos-ao-produtor-ipp-e-de-0-82-em-julho.html',
  },
  {
    id: 37739,
    type: 'Notícia',
    title:
      'Preços na indústria caem 0,82% em julho, influenciados pelo setor de alimentos',
    introduction:
      'O setor de maior influência foi o de alimentos, que caiu 1,36% e colaborou com -0,33 ponto percentual no resultado geral da indústria - Foto: José Fernando Ogura/AEN-PR Os preços da indústria caíram 0,82% em julho frente a junho, registrando o sexto mês...',
    publication_date: '30/08/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPP_THUMB_Jos-Fernando-Ogura-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPP_home_Jos-Fernando-Ogura-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37739-precos-na-industria-caem-0-82-em-julho-influenciados-pelo-setor-de-alimentos.html',
  },
  {
    id: 37727,
    type: 'Notícia',
    title:
      'IBGE publica estudo sobre excursão técnica nas montanhas fluminenses',
    introduction:
      'Durante a excursão, os pesquisadores visitaram três pontos de montanha localizados na Serra dos Órgãos, no Rio de Janeiro - Foto: Acervo IBGE O IBGE divulgou hoje (29) uma publicação inédita com o roteiro e as discussões relativas a uma excursão técnica...',
    publication_date: '29/08/2023 10:00:00',
    product_id: 28098,
    products:
      '28098|Sistema Brasileiro de Classificação de Relevo|sistema-brasileiro-de-classificacao-de-relevo|2997',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_08\\/DGC_Excurses_THUMB_AcervoIBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_08\\/DGC_Excurses_HOME_AcervoIBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '28098',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37727-ibge-publica-estudo-sobre-excursao-tecnica-nas-montanhas-fluminenses.html',
  },
  {
    id: 37716,
    type: 'Notícia',
    title:
      'Três novos índices mostram queda da pobreza e da vulnerabilidade entre 2008-2009 e 2017-2018',
    introduction:
      'Estatística experimental do IBGE mede a pobreza com base em dimensões como moradia, transporte e lazer - Foto: Acervo IBGE O IBGE divulga pela primeira vez, como estatística experimental, a Evolução dos Indicadores não Monetários de Pobreza e Qualidade...',
    publication_date: '25/08/2023 10:00:00',
    product_id: 24786,
    products:
      '24786|POF 2017-2018 #POF|pesquisa-de-orcamentos-familiares-2|2004',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/POF_THUMB_AcervoIBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/POF_HOME_AcervoIBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '24786',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37716-tres-novos-indices-mostram-queda-da-pobreza-e-da-vulnerabilidade-entre-2008-2009-e-2017-2018.html',
  },
  {
    id: 37714,
    type: 'Release',
    title: 'IPCA-15 foi de 0,28% em agosto',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de 0,28% em agosto, 0,35 ponto percentual (p.p.) acima da taxa de julho (-0,07%). No ano, o IPCA-15 acumula alta de 3,38% e, em 12 meses, de 4,24%, acima dos 3,19% registrados nos 12 meses...',
    publication_date: '25/08/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37714-ipca-15-foi-de-0-28-em-agosto.html',
  },
  {
    id: 37715,
    type: 'Notícia',
    title:
      'IPCA-15 fica em 0,28% em agosto, influenciado pela alta da energia elétrica',
    introduction:
      'Fim do Bônus de Itaipu influenciou na alta da energia elétrica residencial (4,59%) - Foto: Helena Pontes/Agência IBGE Notícias A prévia da inflação ficou em 0,28% em agosto, 0,35 ponto percentual (p.p.) acima da taxa registrada em julho (-0,07%). Com...',
    publication_date: '25/08/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPCA15_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPCA15_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37715-ipca-15-fica-em-0-28-em-agosto-influenciado-pela-alta-da-energia-eletrica.html',
  },
  {
    id: 37713,
    type: 'Notícia',
    title:
      'IBGE participa de treinamento e teste cognitivo de questionário sobre educação inclusiva',
    introduction:
      'Treinamento de pesquisadores e análise do questionário a ser aplicado nas entrevistas - Foto: Vinícius Britto IBGE/Agência IBGE Notícias O IBGE, em parceria com o UNICEF e o Grupo de Washington para Estatísticas sobre Pessoas com Deficiência (WG), está...',
    publication_date: '24/08/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/treinamento_VinciusBritto-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/treinamento_VinciusBritto-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37713-ibge-participa-de-treinamento-e-teste-cognitivo-de-questionario-sobre-educacao-inclusiva.html',
  },
  {
    id: 37705,
    type: 'Notícia',
    title: 'Escola Virtual oferece curso on line gratuito de SIDRA',
    introduction:
      'O curso é aberto a toda a sociedade, bastando que o participante tenha concluído o Ensino Médio - Foto: Arte sobre foto Freepik Os interessados em aprender a tabular dados estatísticos a partir do Sistema IBGE de Recuperação Automática (SIDRA) já podem...',
    publication_date: '23/08/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/CursoSidra_THUMB_Freepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/CursoSidra_HOME_Freepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37705-escola-virtual-oferece-curso-on-line-gratuito-de-sidra.html',
  },
  {
    id: 37698,
    type: 'Notícia',
    title: 'IBGE realiza treinamento para as pesquisas MUNIC e ESTADIC 2023',
    introduction:
      'Representantes das superintendências estaduais do IBGE estiveram reunidos para o treinamento das pesquisas MUNIC e ESTADIC - Foto: Adriana Saraiva/Agência IBGE Notícias Entre os dias 14 e 18 de agosto, representantes das superintendências estaduais do...',
    publication_date: '21/08/2023 17:30:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Treinamento_MuncEstadic_Thumb_Adriana-Saraiva.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Treinamento_MuncEstadic_Home_Adriana-Saraiva.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37698-ibge-realiza-treinamento-para-as-pesquisas-munic-e-estadic-2023.html',
  },
  {
    id: 37692,
    type: 'Notícia',
    title: 'Lula prestigia posse de Marcio Pochmann na Presidência do IBGE',
    introduction:
      'O presidente Lula prestigiou a posse de Marcio Pochmann na presidência do IBGE- Foto - Washington Costa/MPO O presidente da República, Luiz Inácio Lula da Silva, prestigiou pessoalmente, nesta sexta-feira (18), a posse do novo presidente do IBGE, Marcio...',
    publication_date: '18/08/2023 17:40:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Posse-Marcio-Pochman_THUMB_Washinton-Costa-MPO.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Posse-Marcio-Pochman_HOME_Washinton-Costa-MPO.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37692-lula-prestigia-posse-de-marcio-pochmann-na-presidencia-do-ibge.html',
  },
  {
    id: 37675,
    type: 'Notícia',
    title:
      'IBGE divulga estudo visando ampliar a categorização de espaços geográficos',
    introduction:
      'Estudo diferencia espaços do território nacional em urbano, rural e natureza - Foto: Licia Rubinstein/Agência IBGE Notícias O IBGE divulgou nesta quarta-feira (16) o estudo “Proposta Metodológica para Classificação dos Espaços do Rural, do Urbano e da...',
    publication_date: '16/08/2023 10:00:00',
    product_id: 15790,
    products:
      '15790|Classificação Rural e Urbana|classificacao-rural-e-urbana|2268',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_08\\/DGC_THUMB_LiciaRubinstein-IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_08\\/DGC_HOME_LiciaRubinstein-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '15790',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37675-ibge-divulga-estudo-visando-ampliar-a-categorizacao-de-espacos-geograficos.html',
  },
  {
    id: 37672,
    type: 'Notícia',
    title:
      'IBGE abre inscrições para processos seletivos com 325 vagas na área de call center',
    introduction:
      'Há 276 vagas para Agente de Pesquisas por Telefone (APT) e 49 vagas para Supervisor de Pesquisas por Telefone (SPT) - Foto: Marcio Costa/Agência IBGE Notícias Estão abertas a partir desta segunda-feira (14) as inscrições para dois processos seletivos...',
    publication_date: '15/08/2023 14:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/PSS-TELEFONIA_THUMB_MarcioCosta-IBGE.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/PSS-TELEFONIA_HOME_MarcioCosta-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37672-ibge-abre-inscricoes-para-processos-seletivos-com-325-vagas-na-area-de-call-center.html',
  },
  {
    id: 37666,
    type: 'Notícia',
    title: 'Desocupação cai em oito unidades da federação no segundo trimestre',
    introduction:
      'A taxa de desemprego recuou em quatro das cinco regiões do país - Foto: Jessica Candido/Agência IBGE Notícias No segundo trimestre, a queda da taxa de desocupação do país foi acompanhada por apenas oito unidades da federação, enquanto as demais...',
    publication_date: '15/08/2023 09:00:00',
    product_id: 9173,
    products:
      '9173|Divulgação trimestral#pnadc2|pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD-Tri_THUMB_JessicaCandido.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD-Tri_HOME_JessicaCandido.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9173',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37666-desocupacao-cai-em-oito-unidades-da-federacao-no-segundo-trimestre.html',
  },
  {
    id: 37664,
    type: 'Release',
    title:
      'PNAD Contínua Trimestral: desocupação recua  em oito das 27 UFs no segundo trimestre de 2023',
    introduction:
      'A taxa de desocupação do país no segundo trimestre de 2023 foi de 8,0%, caindo 0,8 ponto percentual (p.p.) ante o primeiro trimestre deste ano (8,8%) e 1,3 p.p. frente ao mesmo trimestre de 2022 (9,3%). Em relação ao trimestre anterior, a taxa de...',
    publication_date: '15/08/2023 09:00:00',
    product_id: 9173,
    products:
      '9173|Divulgação trimestral#pnadc2|pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_Tri_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9173',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37664-pnad-continua-trimestral-desocupacao-recua-em-oito-das-27-ufs-no-segundo-trimestre-de-2023.html',
  },
  {
    id: 37621,
    type: 'Notícia',
    title:
      'Em 2022, mulheres dedicaram 9,6 horas por semana a mais do que os homens aos afazeres domésticos ou ao cuidado de pessoas',
    introduction:
      'Apenas quando moram sozinhos, homens realizam afazes domésticos em taxas semelhantes às das mulheres - Foto: Bel Corção/Brasil com S Em 2022, a população com 14 anos ou mais de idade dedicava, em média, 17 horas semanais aos afazeres domésticos e/ou...',
    publication_date: '11/08/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD_THUMB_BrasilcomS.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_08\\/PNAD_HOME_BrasilcomS.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37621-em-2022-mulheres-dedicaram-9-6-horas-por-semana-a-mais-do-que-os-homens-aos-afazeres-domesticos-ou-ao-cuidado-de-pessoas.html',
  },
  {
    id: 37626,
    type: 'Notícia',
    title: 'Inflação fica em 0,12% em julho, após deflação no mês anterior',
    introduction:
      'Com alta na gasolina, inflação de julho volta ao campo positivo - Foto: Licia Rubinstein/Agência IBGE Notícias A inflação oficial do mês de julho foi de 0,12%, ficando 0,20 ponto percentual (p.p.) acima da taxa de -0,08% registrada em junho. No ano, o...',
    publication_date: '11/08/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPCA_THUMB_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/IPCA_HOME_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37626-inflacao-fica-em-0-12-em-julho-apos-deflacao-no-mes-anterior.html',
  },
  {
    id: 37625,
    type: 'Release',
    title: 'IPCA foi de 0,12% em julho',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de 0,12% em julho, 0,20 ponto percentual (p.p.) acima da taxa de junho (-0,08%). No ano, o IPCA acumula alta de 2,99% e, nos últimos 12 meses, de 3,99%, acima dos 3,16% observados nos 12 meses...',
    publication_date: '11/08/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37625-ipca-foi-de-0-12-em-julho.html',
  },
  {
    id: 37623,
    type: 'Notícia',
    title: 'Preços da construção variam 0,23% em julho com alta na mão de obra',
    introduction:
      'Mão de obra sofreu aumento de 0,53% e influenciou o preço da construção nacional em julho - Foto: Bruno Cecim/Ag. Pará O Índice Nacional da Construção Civil (Sinapi), divulgado hoje (11) pelo IBGE, apresentou variação de 0,23% em julho. A taxa é 0,16...',
    publication_date: '11/08/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/SINAPI_THUMB_Bruno-Cecim-Ag-Par.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/SINAPI_HOME_Bruno-Cecim-Ag-Par.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37623-precos-da-construcao-variam-0-23-em-julho-com-alta-na-mao-de-obra.html',
  },
  {
    id: 37620,
    type: 'Release',
    title: 'Em julho, Índice Nacional da Construção Civil é de 0,23%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) foi de 0,23% em julho, caindo 0,16 ponto percentual em relação ao índice de junho (0,39%). O acumulado nos últimos 12 meses foi para 3,52%, resultado abaixo dos 4,82% registrados nos 12 meses imediatamente...',
    publication_date: '11/08/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37620-em-julho-indice-nacional-da-construcao-civil-e-de-0-23.html',
  },
  {
    id: 37596,
    type: 'Release',
    title:
      'Trimestrais da pecuária - primeiros resultados: abate de bovinos e frangos cresce no 2º trimestre de 2023',
    introduction:
      'Os primeiros resultados da produção animal no 2º trimestre de 2023 apontam que, ante o mesmo período de 2022, o abate de bovinos cresceu 11,0%, o de frangos aumentou 4,7% e o de suínos caiu 1,6%. Frente ao 1º trimestre de 2023, o abate de bovinos teve...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/TriPecuaria_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37596-trimestrais-da-pecuaria-primeiros-resultados-abate-de-bovinos-e-frangos-cresce-no-2-trimestre-de-2023.html',
  },
  {
    id: 37590,
    type: 'Notícia',
    title:
      'Serviços variam 0,2% em junho e fecham primeiro semestre com alta de 4,7%',
    introduction:
      'O transporte de cargas atingiu em junho o ponto mais alto da série histórica - Foto : Helena Pontes/Agência IBGE Notícias O volume de serviços prestados no país variou 0,2% na passagem de maio para junho. Essa é a segunda taxa positiva seguida do setor,...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PMS_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PMS_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37590-servicos-variam-0-2-em-junho-e-fecham-primeiro-semestre-com-alta-de-4-7.html',
  },
  {
    id: 37608,
    type: 'Notícia',
    title:
      'Estimativa de julho cresce 0,5% e prevê safra recorde de 308,9 milhões de toneladas em 2023',
    introduction:
      'Clima favorável para a 2ª safra do milho ajudou estimativa de safra recorde em 2023 - Foto: Jonas Oliveira/AEN-PR A estimativa de julho para a safra nacional de cereais, leguminosas e oleaginosas em 2023 é de 308,9 milhões de toneladas, segundo o...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/LSPA_THUMB_Jonas-Oliveira_Arquivo-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/LSPA_HOME_Jonas-Oliveira_Arquivo-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37608-estimativa-de-julho-cresce-0-5-e-preve-safra-recorde-de-308-9-milhoes-de-toneladas-em-2023.html',
  },
  {
    id: 37607,
    type: 'Release',
    title: 'Em julho, IBGE prevê safra de 308,9 milhões de toneladas para 2023',
    introduction:
      'A estimativa de julho para a produção de cereais, leguminosas e oleaginosas de 2023 é de 308,9 milhões de toneladas, 17,4% maior (ou mais 45,7 milhões de toneladas) que a obtida em 2022 (263,2 milhões de toneladas) e 0,5% acima da estimativa de junho. A...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37607-em-julho-ibge-preve-safra-de-308-9-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37604,
    type: 'Notícia',
    title: 'Abate de bovinos e frangos cresce no 2º trimestre de 2023',
    introduction:
      'Abate de bovinos cresce 11,0% no segundo trimestre do ano e 12,3% em relação ao 1º trimestre de 2023 - Foto: Licia Rubinstein/Agência IBGE Notícias O abate de bovinos subiu 11,0% e o de frangos teve alta de 4,7% no 2º trimestre de 2023, na comparação com...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 0,
    products:
      '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/tri_THUMB_Licia_Rubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/tri_home_Licia_Rubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '21120, 21121, 21122, 21119',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37604-abate-de-bovinos-e-frangos-cresce-no-2-trimestre-de-2023.html',
  },
  {
    id: 37589,
    type: 'Release',
    title: 'Volume dos Serviços varia 0,2% em junho',
    introduction:
      'Em junho de 2023, o volume de serviços no Brasil variou 0,2% frente a maio, na série com ajuste sazonal, após ter avançado 1,4% em maio. Dessa forma, o setor se encontra 12,1% acima do nível de fevereiro de 2020 (pré-pandemia) e 1,5% abaixo de dezembro...',
    publication_date: '10/08/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37589-volume-dos-servicos-varia-0-2-em-junho.html',
  },
  {
    id: 37609,
    type: 'Notícia',
    title: 'Pnad Contínua investigará segurança alimentar no país',
    introduction:
      'Presidente interino do IBGE, Cimar Azeredo, e representantes do MDS formalizam parceria para incluir módulo de segurança alimentar na Pnad Contínua - Foto: André Oliveira/MDS O IBGE formalizou nesta terça-feira (08/08) uma parceria com a Secretaria de...',
    publication_date: '09/08/2023 18:11:14',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/censo2022\\/08-2023\\/Parceria-IBGE--MDS_THUMB_Andr-Oliveira-MDS.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/censo2022\\/08-2023\\/Parceria-IBGE--MDS_HOME_Andr-Oliveira-MDS.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37609-pnad-continua-investigara-seguranca-alimentar-no-pais.html',
  },
  {
    id: 37586,
    type: 'Notícia',
    title:
      'Ministra Simone Tebet participa de evento de divulgação dos resultados do Censo para a população indígena',
    introduction:
      'Os primeiros resultados do Censo 2022 para a População Indígena foram divulgados em evento no Theatro da Paz, em Belém - Foto: ASCOM MPI O IBGE apresentou em Belém, na segunda-feira (7), os primeiros resultados do Censo Demográfico 2022 para a População...',
    publication_date: '09/08/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Evento-Indigena_THUMB_ASCOM-MPI.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Evento-Indigena_HOME_ASCOM-MPI.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37586-ministra-simone-tebet-participa-de-evento-de-divulgacao-dos-resultados-do-censo-para-a-populacao-indigena.html',
  },
  {
    id: 37581,
    type: 'Notícia',
    title:
      'Volume de vendas no comércio fica estável em junho e fecha semestre com alta de 1,3%',
    introduction:
      'Setor de combustíveis e lubrificantes influenciou alta do comércio no primeiro semestre de 2023 - Foto: Helena Pontes/Agência IBGE Notícias O comércio varejista mostrou estabilidade e registrou 0,0% na passagem de maio para junho. A média móvel...',
    publication_date: '09/08/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PMC_Thumb_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PMC_Home_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37581-volume-de-vendas-no-comercio-fica-estavel-em-junho-e-fecha-semestre-com-alta-de-1-3.html',
  },
  {
    id: 37579,
    type: 'Release',
    title: 'Vendas no varejo ficam estáveis (0,0%) em junho',
    introduction:
      'Em junho de 2023, o volume de vendas do comércio varejista mostrou estabilidade (0,0%) frente a maio, na série com ajuste sazonal. A média móvel trimestral para o varejo foi de -0,3% no trimestre encerrado em junho. Na série sem ajuste sazonal, o...',
    publication_date: '09/08/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37579-vendas-no-varejo-ficam-estaveis-0-0-em-junho.html',
  },
  {
    id: 37572,
    type: 'Notícia',
    title:
      'Produção industrial cresce em seis dos 15 locais pesquisados em junho frente a maio',
    introduction:
      'A indústria extrativa foi a principal responsável pelo desempenho da produção industrial no Espírito Santo - Foto: Leandro Grandi/Agência Vale Na passagem de maio para junho, a produção industrial brasileira avançou 0,1%, com crescimento em seis dos 15...',
    publication_date: '08/08/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PIM-Reg_THUMB2_Leandro-Grandi-Ag-Vale.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PIM-Reg_HOME2_Leandro-Grandi-Ag-Vale.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37572-producao-industrial-cresce-em-seis-dos-15-locais-pesquisados-em-junho-frente-a-maio.html',
  },
  {
    id: 37571,
    type: 'Release',
    title: 'Em junho, indústria cresce em seis dos 15 locais pesquisados',
    introduction:
      'Em junho de 2023, a produção industrial nacional avançou 0,1% frente a maio, na série com ajuste sazonal, e seis dos 15 locais pesquisados apresentaram taxas positivas. As maiores altas foram no Espírito Santo (4,6%), Rio de Janeiro (3,2%) e em Santa...',
    publication_date: '08/08/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37571-em-junho-industria-cresce-em-seis-dos-15-locais-pesquisados.html',
  },
  {
    id: 37565,
    type: 'Notícia',
    title:
      'Brasil tem 1,7 milhão de indígenas e mais da metade deles vive na Amazônia Legal',
    introduction:
      'A população indígena recenseada no país aumentou 88,82% em 12 anos; avanços na metodologia influenciaram crescimento - Foto: Acervo IBGE A população indígena do país chegou a 1.693.535 pessoas em 2022, o que representa 0,83% do total de habitantes. Um...',
    publication_date: '07/08/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Censo-Indgena_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Censo-Indgena_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37565-brasil-tem-1-7-milhao-de-indigenas-e-mais-da-metade-deles-vive-na-amazonia-legal.html',
  },
  {
    id: 37560,
    type: 'Notícia',
    title:
      'População ocupada no Comércio cresce 3,2% em 2021, mas fica abaixo do período pré-pandemia',
    introduction:
      'Quase 40% das vendas do Comércio varejista de artigos culturais, recreativos e esportivos foram pela internet em 2021 - Arte sobre mockup/Freepik A Pesquisa Anual de Comércio (PAC) 2021 revelou que, no segundo ano da pandemia, a atividade comercial...',
    publication_date: '04/08/2023 10:00:00',
    product_id: 9075,
    products: '9075|Pesquisa Anual de Comércio|pesquisa-anual-de-comercio|2029',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PAC_THUMB2_MockupFreepick.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PAC_HOME2_MockupFreepick.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9075',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37560-populacao-ocupada-no-comercio-cresce-3-2-em-2021-mas-fica-abaixo-do-periodo-pre-pandemia.html',
  },
  {
    id: 37558,
    type: 'Notícia',
    title:
      'Inscrições para o Datathon das Nações Unidas 2023 vão até 30 de setembro',
    introduction:
      'Estudantes e profissionais ligados à ciência de dados podem se inscrever até 30 de setembro no Datathon das Nações Unidas 2023, organizado pela Divisão de Estatísticas das Nações Unidas (UNSD) e pelo Hub Regional da ONU para Big Data no Brasil, sediado...',
    publication_date: '04/08/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/datathon_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/datathon_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37558-inscricoes-para-o-datathon-das-nacoes-unidas-2023-vao-ate-30-de-setembro.html',
  },
  {
    id: 37557,
    type: 'Notícia',
    title:
      'Encontro de avaliação do Censo debate erros, acertos e lições aprendidas',
    introduction:
      'Cimar Azeredo abre o 2º Encontro  de avaliação do Censo - Foto: Acervo IBGE Mais de mil servidores do IBGE, entre representantes das coordenações censitárias de todos os 26 estados e do Distrito Federal, superintendentes estaduais, coordenadores de área,...',
    publication_date: '03/08/2023 15:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Censo-Evento-Avalia_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_08\\/Censo-Evento-Avalia_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37557-encontro-de-avaliacao-do-censo-debate-erros-acertos-e-licoes-aprendidas.html',
  },
  {
    id: 37521,
    type: 'Release',
    title: 'Produção industrial varia 0,1% em junho',
    introduction:
      'Em junho de 2023, a produção industrial nacional variou 0,1% frente a maio, na série com ajuste sazonal. Em relação a junho de 2022, na série sem ajuste sazonal, houve variação de 0,3%, segunda taxa positiva consecutiva, mas menos intensa do que a...',
    publication_date: '01/08/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37521-producao-industrial-varia-0-1-em-junho.html',
  },
  {
    id: 37522,
    type: 'Notícia',
    title:
      'Produção industrial varia 0,1% em junho e fecha primeiro semestre em retração de 0,3%',
    introduction:
      'Produção no setor extrativo fechou o primeiro semestre com alta de 5,8% - Foto: André Motta de Souza/Petrobras A produção industrial do país variou 0,1% na passagem de maio para junho, marcando a segunda taxa no campo positivo consecutiva. Em maio, a...',
    publication_date: '01/08/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PIM-Br_THUMB_Andre-Motta-de-Souza-Petrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_08\\/PIM-Br_HOME-Andre-Motta-de-Souza-Petrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37522-producao-industrial-varia-0-1-em-junho-e-fecha-primeiro-semestre-em-retracao-de-0-3.html',
  },
  {
    id: 37489,
    type: 'Notícia',
    title:
      'IBGE divulga retrato inédito sobre quilombolas e ressalta modelo de consulta às lideranças dessa população',
    introduction:
      'Cimar Azeredo abriu a apresentação dos dados sobre levantamento inédito da população Quilombola - Foto: Washington Costa/MPO O IBGE divulgou nesta quinta-feira, 27, os primeiros resultados sobre o número de quilombolas no Brasil e dados sobre seus...',
    publication_date: '28/07/2023 17:51:55',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/EventoQuilombola_THUMB_Washington-Costa-MPO.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/EventoQuilombola_HOME_-Washington-Costa-MPO.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37489-ibge-divulga-retrato-inedito-sobre-quilombolas-e-ressalta-modelo-de-consulta-as-liderancas-dessa-populacao.html',
  },
  {
    id: 37481,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 8,0% e taxa de subutilização é de 17,8% no trimestre encerrado em junho',
    introduction:
      'A taxa de desocupação (8,0%) do trimestre de abril a junho de 2023 recuou 0,8 ponto percentual (p.p.) em relação ao trimestre encerrado em março de 2023 (8,8%) e caiu 1,3 p.p. ante o mesmo período do ano anterior (9,3%). Foi a menor taxa para um...',
    publication_date: '28/07/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37481-pnad-continua-taxa-de-desocupacao-e-de-8-0-e-taxa-de-subutilizacao-e-de-17-8-no-trimestre-encerrado-em-junho.html',
  },
  {
    id: 37484,
    type: 'Notícia',
    title: 'Desemprego recua para 8,0% no segundo trimestre',
    introduction:
      'Alta da informalidade ajuda a reduzir desemprego no segundo trimestre - Foto: Helena Pontes/Agência IBGE Notícias A taxa de desocupação foi de 8,0% no trimestre encerrado em junho, o menor resultado para o período desde 2014. É uma redução de 0,8 ponto...',
    publication_date: '28/07/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/Informais_HP_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/Informais_HP_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37484-desemprego-recua-para-8-0-no-segundo-trimestre.html',
  },
  {
    id: 37464,
    type: 'Notícia',
    title: 'Brasil tem 1,3 milhão de quilombolas em 1.696 municípios',
    introduction:
      'Censo 2022 traz dados inéditos sobre população quilombola - Foto: Jessica Cândido/Agência IBGE Notícias A população quilombola do país é de 1.327.802 pessoas, ou 0,65% do total de habitantes. Os dados são do Censo 2022, que investigou pela primeira vez...',
    publication_date: '27/07/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/Censo_Quilombola_THUMB_Jessica-Candido.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/Censo_Quilombola_HOME_Jessica-Candido.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37464-brasil-tem-1-3-milhao-de-quilombolas-em-1-696-municipios.html',
  },
  {
    id: 37467,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) é de -2,72% em junho',
    introduction:
      'Em junho de 2023, os preços da indústria variaram -2,72% frente a maio, quinto resultado negativo consecutivo. Nessa comparação, 19 das 24 atividades industriais tiveram queda de preços. O acumulado no ano foi de -6,46%, o menor para um mês de junho...',
    publication_date: '27/07/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37467-indice-de-precos-ao-produtor-ipp-e-de-2-72-em-junho.html',
  },
  {
    id: 37468,
    type: 'Notícia',
    title: 'Preços na indústria caem 2,72% em junho, quinta queda consecutiva',
    introduction:
      'Setor de alimentos variou -3,35%, exercendo influência de -0,83 ponto percentual no índice geral - Foto: Jonathan Campos/AEN-PR Os preços da indústria recuaram 2,72% em junho frente a maio, o quinto mês seguido de queda. O resultado no ano chegou a...',
    publication_date: '27/07/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPP_THUMB_Jonathan-Campos---AEN.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPP_HOME_Jonathan-Campos---AEN.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37468-precos-na-industria-caem-2-72-em-junho-quinta-queda-consecutiva.html',
  },
  {
    id: 37469,
    type: 'Notícia',
    title:
      'IBGE e OIT renovam cooperação técnica sobre emprego, proteção social e direitos trabalhistas',
    introduction:
      'Iniciativa promove a agenda de trabalho decente entre as duas instituições - Foto: OIT  O IBGE e a Organização Internacional do Trabalho (OIT) assinaram nesta terça-feira (25) um novo acordo de cooperação técnica para reforçar a pesquisa, o intercâmbio...',
    publication_date: '26/07/2023 18:15:36',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/OIT_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/OIT_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37469-ibge-e-oit-renovam-cooperacao-tecnica-sobre-emprego-protecao-social-e-direitos-trabalhistas.html',
  },
  {
    id: 37442,
    type: 'Release',
    title: 'IPCA-15 foi de -0,07% em julho',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de -0,07% em julho, 0,11 ponto percentual (p.p.) abaixo da taxa de junho (0,04%). No ano, o IPCA-15 acumula alta de 3,09% e, em 12 meses, de 3,19%, abaixo dos 3,40% registrados nos 12 meses...',
    publication_date: '25/07/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37442-ipca-15-foi-de-0-07-em-julho.html',
  },
  {
    id: 37443,
    type: 'Notícia',
    title:
      'IPCA-15 tem deflação de 0,07% em julho, influenciado por queda da energia elétrica',
    introduction:
      'Redução de 3,45% nos preços da energia elétrica residencial impactou deflação do grupo Habitação Foto: Helena Pontes/Agência IBGE Notícias Após nove meses no campo positivo, a prévia da inflação foi de -0,07% em julho. Houve queda de 0,11 ponto...',
    publication_date: '25/07/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPCA15_THUMB_Helena-Pontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPCA15_HOME_Helena-Pontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37443-ipca-15-tem-deflacao-de-0-07-em-julho-influenciado-por-queda-da-energia-eletrica.html',
  },
  {
    id: 37441,
    type: 'Notícia',
    title:
      'IBGE abre inscrições para processo seletivo com 148 vagas em todo o país ',
    introduction:
      'Estão abertas a partir desta segunda-feira (24) as inscrições do processo seletivo para Agente Censitário de Pesquisas e Mapeamento (ACMAP) nas capitais dos 26 estados do país e no Distrito Federal. São oferecidas 148 vagas, tendo como pré-requisito o...',
    publication_date: '24/07/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/PSS_ACMAP_THUMB_LciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/PSS_ACMAP_HOME_LciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37441-ibge-abre-inscricoes-para-processo-seletivo-com-148-vagas-em-todo-o-pais.html',
  },
  {
    id: 37430,
    type: 'Notícia',
    title:
      'IBGE atualiza recortes geográficos de referência para divulgação dos resultados do Censo 2022',
    introduction:
      'Um total de 33 Cidades Gêmeas fazem parte da lista de 588 municípios distribuídos em 11 estados da Faixa de Fronteira do Brasil - Foto: Arte sobre foto Freepick Está disponível a partir de hoje (19) a atualização 2022 do Quadro Geográfico de Referência...',
    publication_date: '19/07/2023 10:00:00',
    product_id: 0,
    products:
      '37409|SUFRAMA|suframa|3070;15974|Semiárido Brasileiro|semiarido-brasileiro|2322;18354|Regiões Metropolitanas, Aglomerações Urbanas e Regiões Integradas de Desenvolvimento|regioes-metropolitanas-aglomeracoes-urbanas-e-regioes-integradas-de-desenvolvimento|2711;24233|Quadro Geográfico de Referência para Produção, Análise e Disseminação de Estatísticas|quadro-geografico-de-referencia-para-producao-analise-e-disseminacao-de-estatisticas|2945;24072|Municípios defrontantes com o mar|municipios-defrontantes-com-o-mar|2941;24073|Municípios da Faixa de Fronteira e Cidades Gêmeas|municipios-da-faixa-de-fronteira|2942;15819|Amazônia Legal|amazonia-legal|2286',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_07\\/DGC-QuadroGeografico_Thumb2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_07\\/DGC-QuadroGeografico_HOME2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '37409, 15974, 18354, 24233, 24072, 24073, 15819',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37430-ibge-atualiza-recortes-geograficos-de-referencia-para-divulgacao-dos-resultados-do-censo-2022.html',
  },
  {
    id: 37414,
    type: 'Notícia',
    title:
      'IBGE lança manual e contribui para a padronização dos nomes geográficos',
    introduction:
      'Manual de Coleta de Nomes Geográficos está disponível para download em PDF - Arte sobre mockup/Freepik O IBGE lançou hoje (17) o Manual de Coleta de Nomes Geográficos, que detalha a metodologia desenvolvida e utilizada pelo órgão no processo de coleta...',
    publication_date: '17/07/2023 10:00:00',
    product_id: 15826,
    products:
      '15826|Manual Técnico em Geociências|manual-tecnico-em-geociencias|2291',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_07\\/Manual_THUMB_Freepik.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_07\\/Manual_HOME_Freepik.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '15826',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37414-ibge-lanca-manual-e-contribui-para-a-padronizacao-dos-nomes-geograficos.html',
  },
  {
    id: 37392,
    type: 'Release',
    title: 'Em maio, vendas no varejo caem 1,0%',
    introduction:
      'Em maio de 2023, o volume de vendas do comércio varejista recuou 1,0%, frente a abril, na série com ajuste sazonal. A média móvel trimestral foi de -0,1%. Na série sem ajuste sazonal, o comércio varejista também caiu 1,0% frente a maio de 2022, com a...',
    publication_date: '14/07/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37392-em-maio-vendas-no-varejo-caem-1-0.html',
  },
  {
    id: 37401,
    type: 'Notícia',
    title: 'Volume de vendas no comércio recua 1% em maio',
    introduction:
      'Setor de hiper e supermercados apresentou queda em maio e afetou o resultado das vendas no comércio varejista do país - Acervo IBGE As vendas no comércio varejista no país caíram 1% na passagem de abril para maio. Dessa forma, o acumulado no ano chegou a...',
    publication_date: '14/07/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PMC_Thumb_Acervo.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PMC_Home_Acervo.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37401-volume-de-vendas-no-comercio-recua-1-em-maio.html',
  },
  {
    id: 37372,
    type: 'Release',
    title: 'Em junho, IBGE prevê safra de 307,3 milhões de toneladas para 2023',
    introduction:
      'A estimativa de junho para a produção de cereais, leguminosas e oleaginosas de 2023 é de 307,3 milhões de toneladas, 16,8% maior (ou mais 44,2 milhões de toneladas) que a obtida em 2022 (263,2 milhões de toneladas) e 0,6% acima da estimativa de maio. A...',
    publication_date: '13/07/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37372-em-junho-ibge-preve-safra-de-307-3-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37371,
    type: 'Release',
    title: 'Em maio, indústria cresce em dez dos 15 locais pesquisados',
    introduction:
      'Em maio de 2023, a produção industrial nacional avançou 0,3% frente a abril, na série com ajuste sazonal, e dez dos 15 locais pesquisados apresentaram taxas positivas. As maiores altas foram no Amazonas (12,8%), Pernambuco (5,6%) e Paraná (5,3%). Já...',
    publication_date: '13/07/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37371-em-maio-industria-cresce-em-dez-dos-15-locais-pesquisados.html',
  },
  {
    id: 37373,
    type: 'Notícia',
    title:
      'Estimativa de junho prevê safra recorde de 307,3 milhões de toneladas para 2023',
    introduction:
      'O crescimento de 1,4 milhão de toneladas na produção de milho puxou o aumento da safra de grãos em junho - Foto: Albari Rosa/AEN-PR O Levantamento Sistemático da Produção Agrícola (LSPA), divulgado hoje (13) pelo IBGE, mostra que a safra nacional de...',
    publication_date: '13/07/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/LSPA_THUMB_Albari-Rosa-AEN.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/LSPA_HOME_Albari-Rosa-AEN.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37373-estimativa-de-junho-preve-safra-recorde-de-307-3-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37374,
    type: 'Notícia',
    title:
      'Produção industrial cresce em dez dos 15 locais pesquisados em maio frente a abril',
    introduction:
      'O setor de equipamentos de informática, products eletrônicos e ópticos foi determinante para o resultado da indústria no Amazonas - Foto: Gilson Abreu/FIEP Na passagem de abril para maio, a produção industrial brasileira avançou 0,3%, com crescimento em...',
    publication_date: '13/07/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PIM-Reg_THUMB_-Gilson-Abreu-FIEP.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PIM-Reg_HOME_-Gilson-Abreu-FIEP.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37374-producao-industrial-cresce-em-dez-dos-15-locais-pesquisados-em-maio-frente-a-abril.html',
  },
  {
    id: 37361,
    type: 'Release',
    title: 'Volume dos Serviços cresce 0,9% em maio',
    introduction:
      'Em maio de 2023, o volume de serviços no Brasil se expandiu 0,9% frente a abril, na série com ajuste sazonal, após ter recuado 1,5% no mês anterior. Dessa forma, o setor se encontra 11,5% acima do nível de fevereiro de 2020 (pré-pandemia) e 2,0% abaixo...',
    publication_date: '12/07/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37361-volume-dos-servicos-cresce-0-9-em-maio.html',
  },
  {
    id: 37362,
    type: 'Notícia',
    title: 'Serviços crescem 0,9% em maio, após queda em abril',
    introduction:
      'Em maio, o transporte de cargas avançou 3,7% e atingiu o ápice da série histórica - Foto: Helena Pontes/Agência IBGE Notícias Em maio, o volume de serviços prestados no país cresceu 0,9%, após o recuo de 1,5% no mês anterior. Com o resultado, o setor...',
    publication_date: '12/07/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PMS_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PMS_home_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37362-servicos-crescem-0-9-em-maio-apos-queda-em-abril.html',
  },
  {
    id: 37337,
    type: 'Release',
    title: 'IPCA foi de -0,08% em junho',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo (IPCA) foi de -0,08% em junho, 0,31 ponto percentual (p.p.) abaixo da taxa de maio (0,23%). Essa foi a menor variação para o mês de junho desde 2017, quando o índice foi de -0,23%. No ano, o IPCA acumula...',
    publication_date: '11/07/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37337-ipca-foi-de-0-08-em-junho.html',
  },
  {
    id: 37351,
    type: 'Release',
    title: 'Em junho, Índice Nacional da Construção Civil é de 0,39%',
    introduction:
      'O Índice Nacional da Construção Civil (Sinapi) foi de 0,39% em junho, subindo 0,03 ponto percentual em relação a maio (0,36%). O acumulado nos últimos doze meses foi de 4,82%, resultado bem abaixo dos 6,13% registrados nos doze meses imediatamente...',
    publication_date: '11/07/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/SINAPI_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37351-em-junho-indice-nacional-da-construcao-civil-e-de-0-39.html',
  },
  {
    id: 37349,
    type: 'Notícia',
    title: 'Inflação fica em -0,08% em junho, primeira queda no ano',
    introduction:
      'Comer em casa fica mais barato e inflação de junho registra queda - Foto: Helena Pontes/Agência IBGE Notícias A inflação oficial do mês de junho caiu 0,08%, ficando 0,31 ponto percentual (p.p.) abaixo da taxa de 0,23% registrada em maio. Essa é a menor...',
    publication_date: '11/07/2023 09:00:00',
    product_id: 0,
    products:
      '9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPCA_Thumb_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/IPCA_home_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9256, 9258',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37349-inflacao-fica-em-0-08-em-junho-primeira-queda-no-ano.html',
  },
  {
    id: 37352,
    type: 'Notícia',
    title:
      'Preços da construção variam 0,39% em junho impulsionados por oito acordos coletivos',
    introduction:
      'Índice de junho foi influenciado pelo aumento de custo da mão de obra, devido a oito dissídios coletivos - Foto: Alex Ribeiro/Agência Pará O Índice Nacional da Construção Civil (Sinapi), divulgado hoje (11) pelo IBGE, apresentou variação de 0,39% em...',
    publication_date: '11/07/2023 09:00:00',
    product_id: 9270,
    products:
      '9270|Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil|sistema-nacional-de-pesquisa-de-custos-e-indices-da-construcao-civil|2079',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/SINAPI_THUMB-Alex-Ribeiro_AgPar.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/SINAPI_HOME-Alex-Ribeiro_AgPar.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37352-precos-da-construcao-variam-0-39-em-junho-impulsionados-por-oito-acordos-coletivos.html',
  },
  {
    id: 37345,
    type: 'Notícia',
    title:
      'Cerimônia em Brasília marca entrega de pesquisa sobre pessoas com deficiência',
    introduction:
      'Apresentação do módulo sobre Pessoas com Deficiência da Pnad Contínua 2022 lotou o auditório do Ministério dos Direitos Humanos, em Brasília - Foto: Cal Guimarães/Agência IBGE Notícias Os dados do módulo Pessoas com deficiência da Pnad Contínua 2022...',
    publication_date: '10/07/2023 14:00:00',
    product_id: 30980,
    products: '30980|PNADC#pnadc4|pnadc-divulgacao-pnadc4|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/EventoPNAD_DF-THUMB-Cal_Guimaraes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/EventoPNAD_DF-HOME-Cal_Guimaraes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '30980',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37345-cerimonia-em-brasilia-marca-entrega-de-pesquisa-sobre-pessoas-com-deficiencia.html',
  },
  {
    id: 37317,
    type: 'Notícia',
    title:
      'Pessoas com deficiência têm menor acesso à educação, ao trabalho e à renda',
    introduction:
      'Brasil tem cerca de 18,6 milhões de pessoas com deficiência; 5,1 milhões estavam na força de trabalho - Foto: Rose Brasil/Agência Brasil A população com deficiência no Brasil foi estimada em 18,6 milhões de pessoas de 2 anos ou mais, o que corresponde a...',
    publication_date: '07/07/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/PNAD_Deficientes_THUMB_RoseBrasil-AgBrasil.jpg","float_intro":"","image_intro_alt":"Em primeiro plano, homem preto em cadeira de rodas trabalha como frentista em um posto de gasolina, abastecendo um carro.  Ele veste uniforme com cal\\u00e7a verde, camisa verde, branca e azul. Ao fundo, v\\u00ea-se a bomba de gasolina que est\\u00e1 sendo utilizada","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_07\\/PNAD_Deficientes_HOME_RoseBrasil-AgBrasil.jpg","float_fulltext":"","image_fulltext_alt":"Em primeiro plano, homem preto em cadeira de rodas trabalha como frentista em um posto de gasolina, abastecendo um carro.  Ele veste uniforme com cal\\u00e7a verde, camisa verde, branca e azul. Ao fundo, v\\u00ea-se a bomba de gasolina que est\\u00e1 sendo utilizada","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37317-pessoas-com-deficiencia-tem-menor-acesso-a-educacao-ao-trabalho-e-a-renda.html',
  },
  {
    id: 37303,
    type: 'Notícia',
    title:
      'IBGE abre inscrições para dois processos seletivos com mais de 7,5 mil vagas em todo o país',
    introduction:
      'IBGE pretende contratar mais de 7 mil pessoas para atuar nas coletas das pesquisas - Foto: Acervo IBGE O IBGE abriu inscrições, nesta terça-feira (04), em dois processos seletivos para Agente de Pesquisas e Mapeamento (APM) e Supervisor de Coleta e...',
    publication_date: '04/07/2023 10:00:00',
    product_id: 0,
    products: '',
    editorial_sections: 'ibge',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/PSS-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_07\\/PSS-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37303-ibge-abre-inscricoes-para-dois-processos-seletivos-com-mais-de-7-5-mil-vagas-em-todo-o-pais.html',
  },
  {
    id: 37287,
    type: 'Release',
    title: 'Em maio, produção industrial varia 0,3%',
    introduction:
      'Em maio de 2023, a produção industrial nacional variou 0,3% frente a abril, na série com ajuste sazonal. Em relação a maio de 2022, na série sem ajuste, a indústria avançou 1,9%. No acumulado dos primeiros cinco meses do ano, houve redução de 0,4% e, em...',
    publication_date: '04/07/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37287-em-maio-producao-industrial-varia-0-3.html',
  },
  {
    id: 37290,
    type: 'Notícia',
    title: 'Produção industrial varia 0,3% em maio, após queda em abril',
    introduction:
      'Com alta de 7,7% na produção em maio, setor de derivados do petróleo foi uma das maiores influências para o resultado do mês - Foto: João Paulo Ceglinski-PETROBRAS Na passagem de abril para maio, a produção industrial do país variou 0,3%, voltando ao...',
    publication_date: '04/07/2023 09:00:00',
    product_id: 9294,
    products:
      '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PIM-Br_THUMB_joao_paulo_ceglinski-PETROBRAS.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_07\\/PIM-Br_HOME_joao_paulo_ceglinski-PETROBRAS.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9294',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37290-producao-industrial-varia-0-3-em-maio-apos-queda-em-abril.html',
  },
  {
    id: 37275,
    type: 'Notícia',
    title:
      'IBGE divulga primeiros resultados do Censo e agradece participação da sociedade',
    introduction:
      'O presidente interino do IBGE, Cimar Azeredo, apresentou os resultados do Censo 2022 para uma plateia com mais de 400 pesssoas, no Museu do Amanhã (RJ) - Foto: Licia Rubinstein/Agência IBGE Notícias Em clima de celebração e orgulho, mais de 500 pessoas...',
    publication_date: '30/06/2023 14:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/abertura_thumb_liciaR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/abertura_home_liciaR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37275-ibge-divulga-primeiros-resultados-do-censo-e-agradece-participacao-da-sociedade.html',
  },
  {
    id: 37252,
    type: 'Notícia',
    title:
      'Desemprego recua a 8,3% no trimestre encerrado em maio, mesmo nível de 2015',
    introduction:
      'Com queda no número de pessoas que estão procurando trabalho, taxa de desocupação recua - Foto: Helena Pontes/Agência IBGE Notícias A taxa de desocupação foi 8,3% no trimestre encerrado em maio de 2023, mostrando recuo de 0,3 ponto percentual (p.p) em...',
    publication_date: '30/06/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/PND_THUMB_HelenaPontes.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/PND_HOME_HelenaPontes.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37252-desemprego-recua-a-8-3-no-trimestre-encerrado-em-maio-mesmo-nivel-de-2015.html',
  },
  {
    id: 37251,
    type: 'Release',
    title:
      'PNAD Contínua: taxa de desocupação é de 8,3% e taxa de subutilização é de 18,2% no trimestre encerrado em maio',
    introduction:
      'A taxa de desocupação (8,3%) do trimestre de março a maio de 2023 recuou 0,3 ponto percentual (p.p.) em relação ao trimestre encerrado em fevereiro de 2023 (8,6%) e caiu 1,5 p.p. ante o mesmo período do ano anterior (9,8%). Indicador/Período Mar-Abr-Mai...',
    publication_date: '30/06/2023 09:00:00',
    product_id: 9171,
    products:
      '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PNAD_C_Mensal_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9171',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37251-pnad-continua-taxa-de-desocupacao-e-de-8-3-e-taxa-de-subutilizacao-e-de-18-2-no-trimestre-encerrado-em-maio.html',
  },
  {
    id: 37246,
    type: 'Notícia',
    title:
      'PIA 2021: ocupação na indústria cresce 5,3%, mas não recupera perdas dos últimos dez anos',
    introduction:
      'A indústria alimentícia seguiu como principal atividade industrial em participação na RLV, mas percentual voltou a cair em 2021 - Foto: José Fernando Ogura/AEN-PR Em 2020, o país tinha 325,8 mil indústrias com uma ou mais pessoas ocupadas, sendo 6,3 mil...',
    publication_date: '29/06/2023 10:00:00',
    product_id: 9042,
    products: '9042|PIA-Empresa#pia1|pesquisa-industrial-anual|2016',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIA-EMP_joseFernandoOgura-AEN-PR_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIA-EMP_joseFernandoOgura-AEN-PR_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9042',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37246-pia-2021-ocupacao-na-industria-cresce-5-3-mas-nao-recupera-perdas-dos-ultimos-dez-anos.html',
  },
  {
    id: 37247,
    type: 'Notícia',
    title:
      'PIA-Produto 2021: minério de ferro permanece o principal produto e indústria alimentícia lidera entre as atividades industriais',
    introduction:
      'Minério de ferro continua sendo o produto com maior participação (5,6%) na receita da indústria - Foto: Agência Vale Essas são algumas das informações da Pesquisa Industrial Anual-Produto (PIA-Produto) 2021, que investigou cerca de 3.400 products e...',
    publication_date: '29/06/2023 10:00:00',
    product_id: 9044,
    products: '9044|PIA-Produto#pia2|pesquisa-industrial-anual-produto|2896',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIA_PROD-ValeTHUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIA_PROD-ValeHOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9044',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37247-pia-produto-2021-minerio-de-ferro-permanece-o-principal-produto-e-industria-alimenticia-lidera-entre-as-atividades-industriais.html',
  },
  {
    id: 37250,
    type: 'Notícia',
    title: 'IBGE lança Base Cartográfica Contínua do Acre',
    introduction:
      'Base do Acre é a primeira em escala 1:100.000 de um estado da região amazônica - Imagem: Reprodução O IBGE divulga hoje (29) a Base Cartográfica Vetorial Contínua do Estado do Acre, na escala 1:100.000. Esse é o sétimo estado, o primeiro em região...',
    publication_date: '29/06/2023 10:00:00',
    product_id: 15807,
    products: '15807|Bases cartográficas contínuas - Estados|estados|2305',
    editorial_sections: 'geociencias',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/geociencias\\/2023_05\\/acre-base-cart_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/geociencias\\/2023_05\\/acre-base-cart_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '15807',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37250-ibge-lanca-base-cartografica-continua-do-acre.html',
  },
  {
    id: 37249,
    type: 'Notícia',
    title: 'Preços na indústria têm queda de 3,07% em maio',
    introduction:
      'Impactado pela queda no preço do óleo diesel, o setor de refino de petróleo e biocombustíveis exerceu a maior influência negativa no índice de maio - Foto: André Motta de Souza/Agência Petrobras Pelo quarto mês consecutivo os preços da indústria tiveram...',
    publication_date: '29/06/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/IPP_THUMB_Andr-Motta-de-Souza---Agncia-Petrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/IPP_HOME_Andr-Motta-de-Souza---Agncia-Petrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37249-precos-na-industria-tem-queda-de-3-07-em-maio.html',
  },
  {
    id: 37248,
    type: 'Release',
    title: 'Índice de Preços ao Produtor (IPP) é de -3,07% em maio',
    introduction:
      'Em maio de 2023, os preços da indústria variaram -3,07% frente a abril, quarto resultado negativo consecutivo. Nessa comparação, 20 das 24 atividades industriais tiveram queda de preços. Período Taxa (%) Maio de 2023 -3,07% Abril de 2023 -0,35% Maio de...',
    publication_date: '29/06/2023 09:00:00',
    product_id: 9282,
    products:
      '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPP_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9282',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37248-indice-de-precos-ao-produtor-ipp-e-de-3-07-em-maio.html',
  },
  {
    id: 37237,
    type: 'Notícia',
    title:
      'De 2010 a 2022, população brasileira cresce 6,5% e chega a 203,1 milhões',
    introduction:
      'Em 2022, os habitantes do estado de São Paulo representavam cerca de um quinto da população brasileira - Foto: Marcelo Camargo/Agência Brasil Em 1º de agosto de 2022, o Brasil tinha 203.062.512 habitantes. Desde 2010, quando foi realizado o Censo...',
    publication_date: '28/06/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/Censo1_THUMB_Marcelocamargo-AgenciaBrasil.jpg","float_intro":"","image_intro_alt":"Multid\\u00e3o caminhando na 25 de Mar\\u00e7o, Centro de S\\u00e3o Paulo-SP","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/Censo1_HOME_Marcelocamargo-AgenciaBrasil.jpg","float_fulltext":"","image_fulltext_alt":"Multid\\u00e3o caminhando na 25 de Mar\\u00e7o, Centro de S\\u00e3o Paulo-SP","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37237-de-2010-a-2022-populacao-brasileira-cresce-6-5-e-chega-a-203-1-milhoes.html',
  },
  {
    id: 37238,
    type: 'Notícia',
    title: 'País tem 90 milhões de domicílios, 34% a mais que em 2010',
    introduction:
      'Na capital paulista, o número de domicílios chegou a 4,9 milhões, aumento de 27% em relação ao Censo 2010 - Foto: Ralph Izumi/IBGE Em 2022, havia 90,7 milhões de domicílios no país, um aumento de 34% frente ao Censo 2010, quando existiam 67,5 milhões....',
    publication_date: '28/06/2023 10:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/Censo2_THUMB_Ralph-Izumi-IBGE.jpg","float_intro":"","image_intro_alt":"Vista panor\\u00e2mica da cidade de S\\u00e3o Paulo do alto do Edif\\u00edcio Copan","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/Censo2_HOME_Ralph-Izumi-IBGE.jpg","float_fulltext":"","image_fulltext_alt":"Vista panor\\u00e2mica da cidade de S\\u00e3o Paulo do alto do Edif\\u00edcio Copan","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37238-pais-tem-90-milhoes-de-domicilios-34-a-mais-que-em-2010.html',
  },
  {
    id: 37228,
    type: 'Notícia',
    title: 'Prévia da inflação de junho fica em 0,04%',
    introduction:
      'Aumentos na taxa de água e esgoto e nas tarifas de energia elétrica residencial puxaram alta do grupo Habitação - Foto: Freepik A prévia da inflação de junho ficou em 0,04%, após taxa de 0,51% registrada em maio. O Índice Nacional de Preços ao Consumidor...',
    publication_date: '27/06/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/IPCA15_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/IPCA15_Home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37228-previa-da-inflacao-de-junho-fica-em-0-04.html',
  },
  {
    id: 37227,
    type: 'Release',
    title: 'IPCA-15 foi de 0,04% em junho',
    introduction:
      'O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15) foi de 0,04% em junho, 0,47 ponto percentual abaixo da taxa de maio (0,51%). Período Taxa Junho de 2023 0,04% Maio de 2023 0,51% Junho de 2022 0,69% Acumulado no ano 3,16% Acumulado nos últimos...',
    publication_date: '27/06/2023 09:00:00',
    product_id: 9260,
    products:
      '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/IPCA15_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9260',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37227-ipca-15-foi-de-0-04-em-junho.html',
  },
  {
    id: 37212,
    type: 'Notícia',
    title:
      'POF: Índice de desempenho socioeconômico para o Brasil cresce 12,8% entre 2008 e 2018',
    introduction:
      'Roraima foi o estado com o melhor desempenho socioeconômico, com avanço de 32,0% do IDS em quase dez anos - Foto: Prefeitura de Boa Vista O IBGE divulgou hoje (23) uma atualização dos indicadores que medem a qualidade de vida da população brasileira. Os...',
    publication_date: '23/06/2023 10:00:00',
    product_id: 24786,
    products:
      '24786|POF 2017-2018 #POF|pesquisa-de-orcamentos-familiares-2|2004',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/POF_THUMB_Prefeitura-BoaVista.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/POF_HOME_Prefeitura-BoaVista.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '24786',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37212-pof-indice-de-desempenho-socioeconomico-para-o-brasil-cresce-12-8-entre-2008-e-2018.html',
  },
  {
    id: 37193,
    type: 'Notícia',
    title:
      'CEMPRE 2021: número de empresas cresce 5,8% e pessoal assalariado aumenta 4,9%',
    introduction:
      'Em 2021, São Paulo continuou com maior participação em número de unidades locais (30,7%), pessoal ocupado total (28,6%), pessoal ocupado assalariado (28,3%) e salários e outras remunerações (32,6%) - Foto: Licia Rubinstein/Agência IBGE Notícias Em 2021,...',
    publication_date: '21/06/2023 10:00:00',
    product_id: 9016,
    products:
      '9016|Estatísticas do Cadastro Central de Empresas - CEMPRE|estatisticas-do-cadastro-central-de-empresas|2000',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/CEMPRE_THUMB_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/CEMPRE_HOME_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9016',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37193-cempre-2021-numero-de-empresas-cresce-5-8-e-pessoal-assalariado-aumenta-4-9.html',
  },
  {
    id: 37185,
    type: 'Notícia',
    title:
      'Prêmio Fotográfico do Censo 2022 entra na fase final, com votação aberta ao público',
    introduction:
      'Público em geral poderá votar no Prêmio Fotográfico do Censo 2022 até 21 de julho - Foto: Free Mockup Zone (arte sobre foto) Começou nesta segunda-feira (19) a etapa final do 1º Prêmio Fotográfico Censo Demográfico 2022. Após a fase de pré-seleção, onde...',
    publication_date: '19/06/2023 12:00:00',
    product_id: 22827,
    products: '22827|Censo 2022#3|censo-demografico-2022|2098',
    editorial_sections: 'ibge;censo2020',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/ConcursoFotografico_THUMB_mockup.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_06\\/ConcursoFotografico_HOME_mockup.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '22827',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37185-premio-fotografico-do-censo-2022-entra-na-fase-final-com-votacao-aberta-ao-publico.html',
  },
  {
    id: 37179,
    type: 'Notícia',
    title:
      'Amapá, Piauí, Rondônia e Pará tinham menos de 30% dos seus domicílios urbanos conectados à rede de esgoto em 2022',
    introduction:
      'Pela primeira vez, metade (50,1%) dos domicílios do Nordeste estão ligados à rede de esgoto - Foto: Secom Rondônia Em 2022, o país tinha 74,1 milhões de domicílios particulares permanentes e 43,5% deles (ou 32,3 milhões) estavam no Sudeste. O Nordeste...',
    publication_date: '16/06/2023 10:00:00',
    product_id: 17270,
    products: '17270|Divulgação anual#pnadc3|pnad-continua|2511',
    editorial_sections: 'sociais',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/PNAD-Domiclios_THUMB_SECOM-Rodonia.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2023_06\\/PNAD-Domiclios_HOME_SECOM-Rodonia.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '17270',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37179-amapa-piaui-rondonia-e-para-tinham-menos-de-30-dos-seus-domicilios-urbanos-conectados-a-rede-de-esgoto-em-2022.html',
  },
  {
    id: 37158,
    type: 'Release',
    title: 'Volume de serviços recua 1,6% em abril',
    introduction:
      'Em abril de 2023, o volume de serviços no Brasil recuou 1,6% frente a março, na série com ajuste sazonal, após ter acumulado um ganho de 2,1% entre fevereiro e março últimos. Com isso, o setor ficou 10,5% acima do nível de fevereiro de 2020...',
    publication_date: '15/06/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMS_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37158-volume-de-servicos-recua-1-6-em-abril.html',
  },
  {
    id: 37159,
    type: 'Notícia',
    title:
      'Volume de serviços recua 1,6% influenciado por queda nos transportes',
    introduction:
      'Queda nas atividades de transporte influenciam o setor de serviços nacional - Foto: Acervo IBGE O setor de serviços recuou 1,6% em abril de 2023 na comparação com março, após acumular ganho de 2,1% entre fevereiro e março. Já frente a abril de 2022, o...',
    publication_date: '15/06/2023 09:00:00',
    product_id: 9229,
    products:
      '9229|Pesquisa Mensal de Serviços|pesquisa-mensal-de-servicos|2076',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PMS_thumb_SimoneMello.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PMS_home_SimoneMello.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9229',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37159-volume-de-servicos-recua-1-6-influenciado-por-queda-nos-transportes.html',
  },
  {
    id: 37152,
    type: 'Notícia',
    title:
      'Vendas no varejo variam 0,1% em abril, com alta do setor de supermercados',
    introduction:
      'As vendas relacionadas à Páscoa impactaram a alta do setor de supermercados em abril - Foto: Marcelo Camargo/Agência Brasil As vendas no comércio varejista no país variaram 0,1% na passagem de março para abril. É o quarto mês seguido sem variações...',
    publication_date: '14/06/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PMC_THUMB_Marcelo-Camargo-Agncia-Brasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PMC_HOME_Marcelo-Camargo-Agncia-Brasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37152-vendas-no-varejo-variam-0-1-em-abril-com-alta-do-setor-de-supermercados.html',
  },
  {
    id: 37151,
    type: 'Release',
    title: 'Em abril, vendas no varejo variam 0,1%',
    introduction:
      'Em abril de 2023, o volume de vendas do comércio varejista variou 0,1%, frente a março, na série com ajuste sazonal. Pelo quarto mês consecutivo, esse indicador não apresentou variações negativas. A média móvel trimestral variou 0,3%. Período Varejo...',
    publication_date: '14/06/2023 09:00:00',
    product_id: 9227,
    products:
      '9227|Pesquisa Mensal de Comércio|pesquisa-mensal-de-comercio|2075',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PMC_release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9227',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37151-em-abril-vendas-no-varejo-variam-0-1.html',
  },
  {
    id: 37135,
    type: 'Notícia',
    title:
      'Estimativa de maio prevê safra recorde de 305,4 milhões de toneladas em 2023',
    introduction:
      'Com alta de 24% soja recupera perdas de 2022 e deve bater recorde de produção em 2023, chegando a 148,2 milhões de toneladas - Foto: Gilson Abreu/AEN-PR O Levantamento Sistemático da Produção Agrícola (LSPA), divulgado hoje (13) pelo IBGE, mostra que a...',
    publication_date: '13/06/2023 09:00:00',
    product_id: 0,
    products:
      '9199|Pesquisa de Estoques|pesquisa-de-estoques|2070;9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/LSPA-THUMB_GilsonAbreu-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/LSPA-HOME_GilsonAbreu-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9199, 9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37135-estimativa-de-maio-preve-safra-recorde-de-305-4-milhoes-de-toneladas-em-2023.html',
  },
  {
    id: 37133,
    type: 'Notícia',
    title: 'Em abril, produção industrial cai em dez dos 15 locais pesquisados',
    introduction:
      'Indústria amazonense teve a maior queda em abril, influenciada pelos setores de informática e de eletrônicos - Foto: José Paulo Lacerda/Portal da Indústria-CNI O recuo 0,6% na produção industrial nacional em abril ante março foi acompanhado em dez dos 15...',
    publication_date: '13/06/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIM-Reg_THUMB_Jos_Paulo_Lacerda-Portal_da_Indstria-CNI.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_06\\/PIM-Reg_HOME_Jos_Paulo_Lacerda-Portal_da_Indstria-CNI.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37133-em-abril-producao-industrial-cai-em-dez-dos-15-locais-pesquisados.html',
  },
  {
    id: 37134,
    type: 'Release',
    title: 'Em maio, IBGE prevê safra de 305,4 milhões de toneladas para 2023',
    introduction:
      'A estimativa de maio para a produção de cereais, leguminosas e oleaginosas de 2023 é de 305,4 milhões de toneladas, 16,1% maior que a safra de 2022 (263,2 milhões de toneladas) e 1,1% acima da estimativa de abril, com acréscimo de 3.270.057 toneladas. A...',
    publication_date: '13/06/2023 09:00:00',
    product_id: 9201,
    products:
      '9201|Levantamento Sistemático da Produção Agrícola|levantamento-sistematico-da-producao-agricola|2071',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/LSPA_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9201',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37134-em-maio-ibge-preve-safra-de-305-4-milhoes-de-toneladas-para-2023.html',
  },
  {
    id: 37136,
    type: 'Release',
    title:
      'Capacidade de armazenagem agrícola cresce 1,8% e chega a 192,2 milhões de toneladas no 2º semestre de 2022',
    introduction:
      'No 2º semestre de 2022, a capacidade disponível para armazenamento no Brasil foi de 192,2 milhões toneladas, 1,8% superior ao semestre anterior. O número de estabelecimentos subiu 0,7% em relação ao primeiro semestre de 2022. O Rio Grande do Sul possui o...',
    publication_date: '13/06/2023 09:00:00',
    product_id: 9199,
    products: '9199|Pesquisa de Estoques|pesquisa-de-estoques|2070',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/Estoques_Release.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/Estoques_Release.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9199',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37136-capacidade-de-armazenagem-agricola-cresce-1-8-e-chega-a-192-2-milhoes-de-toneladas-no-2-semestre-de-2022.html',
  },
  {
    id: 37132,
    type: 'Release',
    title: 'Em abril, indústria recua em dez dos 15 locais pesquisados',
    introduction:
      'Em abril de 2023, a produção industrial nacional recuou 0,6% frente a março, na série com ajuste sazonal, e 10 dos 15 locais pesquisados apresentaram taxas negativas. Os recuos mais acentuados foram no Amazonas (-14,2%) e Pernambuco (-5,5%). Já o Rio...',
    publication_date: '13/06/2023 09:00:00',
    product_id: 9296,
    products:
      '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
    editorial_sections: 'economicas',
    images:
      '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    related_products: '9296',
    highlight: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/37132-em-abril-industria-recua-em-dez-dos-15-locais-pesquisados.html',
  },
];
