import {Component} from '@angular/core';
// 具名导入
import Student, {HOST, add, Foo, Bar, ooxx} from './my-module';

// 变量、常量
let name: string;
name = '';
const PI = 3.1415926;

// 元组
let x: [string, number];
x = ['hello', 10];
// 任意类型
let notSure: any;
notSure = 4;
notSure = 'jerry';

let list: any[];
list = [1, true, 'jerry'];
list[1] = 100;

// 枚举
enum Color {
  Red,
  Green,
  Blue
}

let c: Color;
c = Color.Blue;
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
  return 'Hello, ' + person.firstName + '-' + person.lastName;
}

const gre = greeting2({firstName: 'tom', lastName: 'cruise'});
console.log(gre);

class Greeter {
  greeting: string; // 属性
  constructor(msg: string) { // 构造函数，通常用于属性的初始化
    this.greeting = msg;
  }

  greet() { // 方法
    return 'Hello,' + this.greeting;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());

class Animal {
  name: string;

  // 当父类拥有构造函数时，子类尽量调用之
  constructor(theName: string) {
    this.name = theName;
  }

  move(distance: number = 0) {
    console.log(`animal ${this.name} moved ${distance}`);
  }
}

class Dog extends Animal {
  constructor(theName: string) {
    super(theName); // 子类中使用父类的构造函数
  }

  bark() {
    console.log('woof!');
  }

  move(distance: number = 5) {
    console.log('run');
    super.move(distance);
  }

  // move(a: number, b: number) {
  //   return a + b;
  // }
}

const dog = new Dog('Barney');
dog.bark();
dog.move(10);
dog.move();

// dog.move(1, 2);

// 计算网格内两点间距
class Grid {
  static origin = {x: 0, y: 0};

  distance(point: { x: number, y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;

    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}

const grid = new Grid();
console.log(grid.distance({x: 11, y: 11}));

// 存取器
class Employee {
  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }
  private _fullName: string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaikeba-student';
}
