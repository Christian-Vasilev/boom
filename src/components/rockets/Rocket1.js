import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket1',
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: 'rocket-1',
    });

    this.fire.x = 300;
    this.fire.y = 230;
    this.fire.angle = -145;
  }
}
