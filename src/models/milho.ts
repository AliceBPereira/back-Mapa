export interface milhoPostData {         
    talhao: string        
    area_ha: number   
    sist_plant: string 
    espacament: string   
    sementes: string
    prod_2020: number
    plantio_21: string
    plantio_20: string
    status: 'PLANTADO' | 'COLHIDO';
    ult_colheita: string;
    prox_colheita: string;
    quantidade_colhida:number
    periodo: string
    carretas: number
    trabalho_realizado: string
    localizacao: object
  }