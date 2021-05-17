const createFish = (parent:Entity, num:number) => {
        const shape = new GLTFShape(`models/fish${num}.glb`); // DOES NOT WORK
      //const shape = new GLTFShape(`models/fish${num}.glb`); //WORKS
      const entity = new Entity();
      entity.addComponent(shape);
      entity.setParent(parent);
}

export {createFish};