import { Component } from '@angular/core';

// 变量、常量
let name;
const PI = 3.1415926;

// 元组
let x: [string, number] = ['hello', 10];

// 任意类型
let notSure : any;
notSure = 4;
notSure = 'jerry';

let list: any[] = [1,true,'jerry'];
list[1] = 100;

// 枚举
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Blue;

console.log(c);
console.log(Color[1]);

// 函数的特殊用法
function greeting(person: string) {
  return 'Hello,' + person;
}

greeting('tom');

// void类型 没有返回值
function warnUser(): void {
  alert('aaa');
}

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

function greeting2(person: Person) {
  return 'Hello, '+ person.firstName+ '-'+ person.lastName;
}

const gre = greeting2({firstName:'tom',lastName:'cruise'});
console.log(gre);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaikeba-student';
}
