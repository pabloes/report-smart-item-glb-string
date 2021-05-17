import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import Fish, { Props } from './item'

const fish = new Fish()
const spawner = new Spawner<Props>(fish)

spawner.spawn(
  'fish',
  new Transform({
    position: new Vector3(4, 3, 8)
  }),
  { active: true }
)