declare module "com.nigthbeam.reconstructedwands.api.IWandUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWandUpgrade$$Interface {
}

export class $IWandUpgrade implements $IWandUpgrade$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandUpgrade$$Type = ($IWandUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandUpgrade$$Original = $IWandUpgrade;}
declare module "com.nigthbeam.reconstructedwands.api.IWandCore" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IWandAction} from "com.nigthbeam.reconstructedwands.api.IWandAction"
import {$IWandUpgrade$$Interface} from "com.nigthbeam.reconstructedwands.api.IWandUpgrade"

export interface $IWandCore$$Interface extends $IWandUpgrade$$Interface {
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
get "color"(): integer
}

export class $IWandCore implements $IWandCore$$Interface {
 "getWandAction"(): $IWandAction
 "getRegistryName"(): $ResourceLocation
 "getColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandCore$$Type = ($IWandCore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandCore$$Original = $IWandCore;}
declare module "com.nigthbeam.reconstructedwands.api.IWandSupplier" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlaceSnapshot} from "com.nigthbeam.reconstructedwands.wand.undo.PlaceSnapshot"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IWandSupplier$$Interface {
}

export class $IWandSupplier implements $IWandSupplier$$Interface {
 "getSupply"(arg0: $BlockItem$$Type): void
 "getPlaceSnapshot"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockHitResult$$Type, arg3: $BlockState$$Type): $PlaceSnapshot
 "takeItemStack"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandSupplier$$Type = ($IWandSupplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandSupplier$$Original = $IWandSupplier;}
declare module "com.nigthbeam.reconstructedwands.api.IWandAction" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$WandOptions$$Type} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ISnapshot} from "com.nigthbeam.reconstructedwands.wand.undo.ISnapshot"
import {$IWandSupplier$$Type} from "com.nigthbeam.reconstructedwands.api.IWandSupplier"

export interface $IWandAction$$Interface {
}

export class $IWandAction implements $IWandAction$$Interface {
 "getSnapshotsFromAir"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type, arg4: $WandOptions$$Type, arg5: $IWandSupplier$$Type, arg6: integer): $List<($ISnapshot)>
 "getLimit"(arg0: $ItemStack$$Type): integer
 "getSnapshots"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type, arg4: $WandOptions$$Type, arg5: $IWandSupplier$$Type, arg6: integer): $List<($ISnapshot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandAction$$Type = ($IWandAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandAction$$Original = $IWandAction;}
