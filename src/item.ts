  export type Props = {
  }
  
  export default class Fish implements IScript<Props> {
    active: Record<string, boolean> = {}
  
    init() {}
   
    spawn(host: Entity, props: Props, channel: IChannel) {        
      const entity = new Entity();
      const num = 1;
      const shape = new GLTFShape(`models/fish${num}.glb`); // DOES NOT WORK
      //const shape = new GLTFShape(`models/fish1.glb`); //WORKS
      entity.addComponent(shape);
      entity.setParent(host);
    }
  }