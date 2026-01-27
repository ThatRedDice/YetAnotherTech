declare module "mcjty.rftoolsbase.api.various.IItemCycler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IItemCycler$$Interface {

(arg0: $Player, arg1: $ItemStack, arg2: boolean): void
}

export class $IItemCycler implements $IItemCycler$$Interface {
 "cycle"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemCycler$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemCycler$$Original = $IItemCycler;}
declare module "mcjty.rftoolsbase.api.various.ITabletSupport" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item} from "net.minecraft.world.item.Item"

export interface $ITabletSupport$$Interface {
get "installedTablet"(): $Item
}

export class $ITabletSupport implements $ITabletSupport$$Interface {
 "openGui"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "getInstalledTablet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabletSupport$$Type = ($ITabletSupport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITabletSupport$$Original = $ITabletSupport;}
