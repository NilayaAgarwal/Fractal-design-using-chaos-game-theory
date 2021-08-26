import Sketch from 'react-p5';
import { Vector } from "p5";
let points = [];
let next;
let current;
let side;
// let p = 1/Math.LOG2E;

const pentagon2 = ({ color,n,p }) => {
    const setup = (p5, canvasParentRef) => {
        side = Math.min(p5.windowWidth, p5.windowHeight)
        p5.createCanvas(side,side).parent(canvasParentRef);    
        points = [];
        for (let i = 0; i < n; i++) {
            let v = Vector.fromAngle((i * p5.TWO_PI) / n);
            v.mult(p5.width / 2);
            points.push(v);
        }
        current = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        p5.background(0);
    }
    const draw = (p5) => {
        p5.translate(p5.width / 2, p5.height / 2)
        p5.rotate(-p5.PI / 2);
        for (let i = 0; i < 1000; i++) {
            p5.stroke(color);
            next = p5.random(points);
            current.x = p5.lerp(current.x, next.x, p);
            current.y = p5.lerp(current.y, next.y, p);
            p5.point(current.x, current.y);

        }
    }
    return (
        <div className='mysketch'>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}
export default pentagon2

