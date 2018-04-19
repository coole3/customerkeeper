export class Appoint{
    public id: number
    public userId: string
    public custFName: string
    public custLName: string
    public street: string
    public city: string
    public state: string
    public zip: string
    public email: string
    public phone: string
    public appoint: string
    public appointDate: string
    public appointTime: string
    public modifiedBy: string
    public compName: string
    public compEmail: string
}

export class Company{
    public id: number
    public userId: string
    public compName: string
    public fName: string
    public lName: string
    public street: string
    public city: string
    public state: string
    public zip: string
    public email: string
    public phone: string
    public modifiedBy: string
}

export class Paging{
    public pageSize: number
    public pageNum: number
    public sortDir: string
    public userId: string
    public custFNameFilter: string
    public custLNameFilter: string
    public appointFilter: string
}