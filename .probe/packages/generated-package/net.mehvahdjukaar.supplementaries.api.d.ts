declare module "net.mehvahdjukaar.supplementaries.api.neoforge.RegisterFireBehaviorsEvent" {
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IFireItemBehavior$$Type} from "net.mehvahdjukaar.supplementaries.common.block.fire_behaviors.IFireItemBehavior"
import {$IFireItemBehaviorRegistry$$Type, $IFireItemBehaviorRegistry$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.fire_behaviors.IFireItemBehaviorRegistry"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RegisterFireBehaviorsEvent extends $Event implements $IFireItemBehaviorRegistry$$Interface {
constructor(registry: $RegistryAccess$$Type, delegate: $IFireItemBehaviorRegistry$$Type)

public "getRegistryAccess"(): $RegistryAccess
public "registerCannonBehavior"(item: $ItemLike$$Type, behavior: $IFireItemBehavior$$Type): void
public "registerPresentBehavior"(item: $ItemLike$$Type, behavior: $IFireItemBehavior$$Type): void
get "registryAccess"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterFireBehaviorsEvent$$Type = ($RegisterFireBehaviorsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterFireBehaviorsEvent$$Original = $RegisterFireBehaviorsEvent;}
