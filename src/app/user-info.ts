export class User{
    constructor(
        public userid : number,
        public displayname: string,
        public firstname: string,
        public lastname: string,
        public loginid: string,
        public emailid: string,
        public addDate: string,
        public updateDate: string

    ){}
}
export class Roles{
    constructor(
       private  roleName: string,
       private roleShortname: string,
       private addDate:string,
       private updateDate:string

    ){}
}
export class reporttableDetails{
    constructor(
        private roleShortname: string,
        private  mappedReport: string,
        private addDate:string,
        private updateDate:string
 
     ){}
}