
class Test {
    private _num : number;
    private _test : string
    constructor(num :number, test:string) {
        this._test = test;
        this._num = num;
    }
    get num(): number {
        return this._num;
    }

    set num(value: number) {
        this._num = value;
    }

    get test(): string {
        return this._test;
    }

    set test(value: string) {
        this._test = value;
    }

}

export const Test2 = new Test(1,"one")

setTimeout(()=>{
},1000)
