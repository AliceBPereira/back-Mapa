export interface cafePostData {
  talhao: string;
  cultivar: string;
  area_ha: number;
  espacament: string;
  estande: number;
  n_de_plantas: number;
  ano_plantio: number;
  status: 'PLANTADO' | 'COLHIDO';
  ult_colheita: string;
  prox_colheita: string;
  localizacao: object;
}