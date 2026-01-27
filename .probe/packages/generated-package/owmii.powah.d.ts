declare module "owmii.powah.ChargeableItemsEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ChargeableItemsEvent extends $Event {
constructor(arg0: $Player$$Type)

public "getItems"(): $List<($ItemStack)>
public "getPlayer"(): $Player
get "items"(): $List<($ItemStack)>
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeableItemsEvent$$Type = ($ChargeableItemsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargeableItemsEvent$$Original = $ChargeableItemsEvent;}
