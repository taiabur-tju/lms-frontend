export class Createuser {
    constructor(
        public id: number,
        public full_name: string,
        public email: string,
        public phone?: string,
        public password?: string
      ) {  }  
}
