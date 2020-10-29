class bird  {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1,
         'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 140, 140, options);
      this.width =140;
      this.height = 140;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y= mouseY
     var angle = this.body.angle;
      push();
     translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };