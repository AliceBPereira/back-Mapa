export interface milhoPostData {         
    talhao: string        
    area_ha: number   
    sist_plant: string 
    espacament: string   
    sementes: string
    prod_tha: number
    prod_2020: number
    plantio_21: string
    plantio_20: string
    status: 'PLANTADO' | 'COLHIDO';
    ult_colheita: string;
  prox_colheita: string;
    localizacao: object
  }