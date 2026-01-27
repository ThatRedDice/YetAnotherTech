declare module "com.tom.createores.cc.OreVeinFinderTurtle" {
import {$AbstractTurtleUpgrade} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry} from "net.minecraft.core.Registry"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $OreVeinFinderTurtle extends $AbstractTurtleUpgrade {
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreVeinFinderTurtle$$Type = ($OreVeinFinderTurtle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreVeinFinderTurtle$$Original = $OreVeinFinderTurtle;}
