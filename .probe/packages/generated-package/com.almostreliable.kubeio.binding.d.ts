declare module "com.almostreliable.kubeio.binding.DataComponents" {
import {$GrindingBallData} from "com.enderio.enderio.api.components.GrindingBallData"
import {$Supplier} from "java.util.function.Supplier"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"

export interface $DataComponents$$Interface {
}

export class $DataComponents implements $DataComponents$$Interface {
static readonly "GRINDING_BALL": $Supplier<($DataComponentType<($GrindingBallData)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataComponents$$Type = ($DataComponents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataComponents$$Original = $DataComponents;}
declare module "com.almostreliable.kubeio.binding.FireCraftingResult" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FireCraftingRecipe$Result} from "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe$Result"

export interface $FireCraftingResult$$Interface {
}

export class $FireCraftingResult implements $FireCraftingResult$$Interface {
static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: float): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type, arg1: integer): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type): $FireCraftingRecipe$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingResult$$Type = ($FireCraftingResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingResult$$Original = $FireCraftingResult;}
declare module "com.almostreliable.kubeio.binding.SagMillOutputItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$SagMillingRecipe$OutputItem} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$OutputItem"

export interface $SagMillOutputItem$$Interface {
}

export class $SagMillOutputItem implements $SagMillOutputItem$$Interface {
static "of"(arg0: $ItemStack$$Type): $SagMillingRecipe$OutputItem
static "of"(arg0: $ItemStack$$Type, arg1: float): $SagMillingRecipe$OutputItem
static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float): $SagMillingRecipe$OutputItem
static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $SagMillingRecipe$OutputItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillOutputItem$$Type = ($SagMillOutputItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillOutputItem$$Original = $SagMillOutputItem;}
