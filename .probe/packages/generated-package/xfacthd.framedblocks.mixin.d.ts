declare module "xfacthd.framedblocks.mixin.AccessorIngredient" {
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"

export interface $AccessorIngredient$$Interface {

(): ($Ingredient$Value$$Type)[]
}

export class $AccessorIngredient implements $AccessorIngredient$$Interface {
 "framedblocks$getValues"(): ($Ingredient$Value)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorIngredient$$Type = (() => ($Ingredient$Value$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorIngredient$$Original = $AccessorIngredient;}
declare module "xfacthd.framedblocks.mixin.InvokerBlockItem" {
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $InvokerBlockItem$$Interface {

(arg0: $BlockPlaceContext): $BlockState$$Type
}

export class $InvokerBlockItem implements $InvokerBlockItem$$Interface {
 "framedblocks$callGetPlacementState"(arg0: $BlockPlaceContext$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvokerBlockItem$$Type = ((arg0: $BlockPlaceContext) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvokerBlockItem$$Original = $InvokerBlockItem;}
