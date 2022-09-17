import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test2} from "./test";

function App() {
    {
    class Person {
        private _name;
        private _age;

        get name() {
            return this._name;
        }

        get age() {
            return this._age;
        }

        set name(value) {
            this._name = value;
        }

        constructor(name : string, age : number){
            this._name = name;
            this._age = age;
            }
        greeting(){
            return console.log("hello I am a Person, my name is " + this.name + this.age)
            }
        }
        class Worker extends Person {
            public skill;
            constructor(name : string , age : number , skill : string[]) {
                super(name , age);
                this.skill = skill;

            }
            greeting(){
                return console.log("hello I am a Worker, my name is " + this.name + "i am better"+ this.age)
            }
        }
        class Pro extends Worker {
            readonly role;
            constructor(name : string, age : number, skill : string[], role : string) {
                super(name,age,skill);
                this.role = role;
            }
            greeting(){
                return console.log("hello I am a Pro, my name is " + this.name + "i am : " + this.role)
            }
        }
        const Vasia = new Person('Vasia' ,18)
        const Petia = new Worker('Petia' ,23 , ["html" , "css"] )
        const Dru = new Worker('Dru' ,23 , ["html" , "css" , 'smoke'] )
        const Vitia = new Pro('Vitia' ,25 , ["html" , "css"] , "admin" )
        const Den = new Pro('Den' ,27 , ["html" , "css"] , "admin" )


        Vasia.greeting()
        Petia.greeting()
        Vitia.greeting()
        Dru.greeting()
        Den.greeting()
        Vitia.name = "Victor";
        Den.name = "Denis";
        console.log(Vitia.role)
    }
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
