import p5 from 'p5';
import sketch from './sketch';

const container = document.getElementById('sketch') as HTMLDivElement;
new p5(sketch, container);