export default interface RegCorrispettivi {
  aliquoteIVA: number[];
  corrispettivi: {
    data: string;
    totale: number;
    numeroDocFisc: number;
    reparti: any;
  }[];
}
