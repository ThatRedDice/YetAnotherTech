declare module "immersive_aircraft.mixin.ServerPlayerEntityMixin" {
import {$ContainerSynchronizer} from "net.minecraft.world.inventory.ContainerSynchronizer"

export interface $ServerPlayerEntityMixin$$Interface {
get "containerSynchronizer"(): $ContainerSynchronizer
get "containerCounter"(): integer
}

export class $ServerPlayerEntityMixin implements $ServerPlayerEntityMixin$$Interface {
 "getContainerSynchronizer"(): $ContainerSynchronizer
 "ic$nextContainerCounter"(): void
 "getContainerCounter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerEntityMixin$$Type = ($ServerPlayerEntityMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerEntityMixin$$Original = $ServerPlayerEntityMixin;}
